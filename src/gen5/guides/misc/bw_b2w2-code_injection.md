# Code Injection Guide (Generation V)
*It is recommended to check out the [universal code injection guide](universal/guides/code_injection/code_injection.md) before attempting this. This tutorial assumes that you have intermediate C++/ARMv5T assembly knowledge and know how to use a compiler or build system.*

## Setting up your environment ##
So, you think you've got what it takes to have a crack at Generation V code injection? Then press onward!

First, we've got to set up a few prerequisites. It's a boring job but I promise it'll be smooth sailing from there on out. To start, download (and install, where applicable) all these:
- [CTRMap Community Edition](https://github.com/kingdom-of-ds-hacking/CTRMap-CE/releases)
- [CTRMapV (Generation V plugin for CTRMap)](https://github.com/kingdom-of-ds-hacking/CTRMapV)
- [The `arm-none-eabi` GCC toolchain](https://developer.arm.com/downloads/-/arm-gnu-toolchain-downloads)
- [Latest RPM build of `PMC`](https://github.com/kingdom-of-ds-hacking/PMC/releases)
- [Pokémon White 2 development headers](https://github.com/kingdom-of-ds-hacking/swan)
- [Latest NitroKernel DLL](https://github.com/HelloOO7/NitroKernel/releases)

**Note: This guide assumes that you are using a American Pokémon White 2 [IRDO] (and strictly no other) ROM. This does not mean Black, White, or Black 2 cannot be used; as long as you provide the relevant materials, they can be used for code injection.** 

Before you get into code injection, set up a CTRMap project and load it up. If everything went as planned, there should be a `Code injection` section in your `Extras` tab. This is where it gets interesting:

1) Click the `Install/Update PMC` button and select your `PMC.rpm` file. You should do this every time `libRPM` is updated, as the DLLs that CTRMap produces need the latest version of PMC to be recognized.
2) Make sure that there is a `patches` directory in your project's `vfs/data`. If there isn't one, create it. Move your `NitroKernel.dll` into that directory.
2) Export your ROM from CTRMap.
3) If everything went correctly, there should be a `00` byte at `0x02005050` in your game's RAM as part of PMC's initialization code.

## Building code injection patches ##
### Symbol maps

There are two quintessential things that you need in order to begin writing proper code injection modules. The first one - a compiler - you've already got since Chapter 1. The other is what we call an `ESDB` (short for "external symbol database") and is pretty much the stepping stone for interfacing and hijacking game routines. If you've already got one from a friend or relative, you should be all set, however, should you need to build your own one, that's also an option:

1) Export the symbols you need from IDA using `File > Produce file > Create MAP file...`
2) Copy the contents of IDA's Segment Register table (`View > Open subviews > Segment registers`) into a text file.
3) Open the result `.map` file in a text editor and fix the segment starting addresses to their proper values instead of `00000000`. IDA's just sometimes moody like that.
3) Run `MAP2ESDB`. If you do not have it, there are two ways to acquire it.
    - Clone and build the [RPM authoring tools](https://github.com/HelloOO7/RPMAuthoringTools), then execute MAP2ESDB in your console.
    - Use the CTRMap JAR (`java -cp <path to CTRMap JAR> rpm.cli.MAP2ESDB`) to launch MAP2ESDB.
4) Proceed with the instructions provided by the command line interface. Use your .map as `--map` and your segment register plaintext as `--thmfile`.
5) Once done, you should have an `esdb.yml` or similar all built and ready for code injection.

### Programming
Here's where you'll finally put those headers you downloaded earlier to good use! Any function that you've included in your ESDB, you can now use from your C++ code as long as it is properly declared. **If you hate C++ for some reason, ~~that's tough~~ you can also use assembly; see [here](#using-assembly).** 

Some of the structures and functions we've researched have been compiled into the `swan` repo for convenience, and as long as they are in your ESDB, you can use them to their full advantage. Here are a couple of things you should keep in mind:

- Functions that have C linkage should be treated as such. Declaring them inside namespaces, or even outside them as plain C++ functions, will most likely not link up with your ESDB.
- Failure to link a function against the ESDB is not reported in any way, since it's indistinguishable from a regular extern function present in a DLL and linked at run-time. Always make sure you've got everything registered properly before you commit.
- Unless you really know what you're doing and you've got all the proper ABI functions handled, you shouldn't use the C++ standard library, RTTI or exceptions (in fact, you may want to disable them with `-fno-rtti` and `-fno-exceptions` in GCC).
- Some C++ ABI features (pure virtual functions) are supported and backed by `NitroKernel`, but need to be included explicitly in order to prevent GCC from complaining. Including `ExtLib.Include` and its `ABI/exl_CxxAbi.h` should do the trick.
- Floating point operations, albeit *very* slow, are supported on the DS to an extent, but should be avoided. `__aeabi_#fcmp#` functions aren't fully present on the target, so comparisons may produce undefined behavior.
- Memory allocation through `malloc` and `free` will fail. This is because `malloc` by default allocates in the `0x02000000 - 0x02004000` area (as configured by the game), and said area is filled at boot for some reserved memory heaps. Instead, use the ExtLib new and delete operators (from `Heap/exl_MemOperators.h`) that pass through `exl::heap::Allocator`s, or Game Freak's `GFL_HeapAllocate` and `GFL_HeapDelete` functions. What might also be handy to know is that an `exl::heap::OSAllocator` can be created on demand for any GFL Heap ID with `exl::heap::OSAllocator::OSAllocator(HeapID heapId)`.
- The entirety of the `ExtLib.Heap` library is included within your NitroKernel, so it's recommended that you use it wherever possible.
- DLLs from the `lib` folder in the ROM root can be loaded using utility functions from NitroKernel's `k::dll` namespace.

Got all that? Don't worry, if you didn't, I'm fairly sure this text isn't going to go anywhere. But now, we finally get to the fun part - actually injecting stuff!

### Preparing our Code for Injection
Historically, there were many ways of injecting code into existing executables, but they all essentially get down to one thing: hooks, or branches. Branches are, simply put, a processor directive that changes the program counter - a register containing a pointer to the currently executed instruction - to another value. Each ISA and CPU architecture has its own way of performing these, but in most cases only two things are required: a source and destination address. 

In the early days of computing where programs had a fixed load address and memory space (also known as static loading), all branches were fully deterministic at compile time. This approach is still actually supported on modern CPUs through virtual memory addressing (in fact, some ancient Microsoft Windows programs rely on it to this day) and even though it's a thing of the past in desktop programming, it is still widely used in low-power embedded software, as is the case with standard Nintendo DS development. 

However, since code injection is a highly volatile process with very little headroom, we've decided to borrow the more flexible approach of dynamic loading, which includes a lot of fun quirks that you can use to your own advantage. As per the definition of branches, any program jump requires a source and destination address, but since those may not be fully known at compile-time, they are often stored into a [relocation table](https://en.wikipedia.org/wiki/Relocation_(computing)) that is used to correct the branch instructions within the program once the executable is fixed in memory. 

Inasmuch as the DS has next to no memory protection, we can easily use these to perform the relocation process even outside of our program - such as the game code! All you've gotta do is adjust the relocation table accordingly, for which there are a grand total of two options:

1) Use RPMTool's (`java -cp CTRMap.jar rpm.cli.RPMTool` or build RPMAuthoringTools) `--in-relocations-yml` to manually specify the relocations using an YML file (not recommended).
2) Use the automated hook derivation process built into CTRMap.

To have the RPM converter automatically convert your function into a relocation referring to it, it needs to be in either of the following formats:

- `<RELOCATION_TYPE>_FunctionName` - hooks directly into the start of a named function (e.g. `THUMB_BRANCH_BagSave_AddItem`)
- `<RELOCATION_TYPE>_FunctionName_0xoffset` - hooks into a function-relative offset (e.g. `THUMB_BRANCH_LINK_BagSave_AddItem_0x2`)
- `<RELOCATION_TYPE>_SEGMENT_0xaddress` - hooks at an absolute address within a segment (e.g. `FULL_COPY_ARM9_0x02008268`)

I know that might be a lot to take in at first, so let's take this apart piece by piece. 
- First of all, there's the function names. If a function is to be overriden with another, these should match the names in the ESDB, meaning they require explicit C linkage if used in C++. The relocation will then take place at the address of the function as specified in the ESDB, optionally offset by a constant addend. 
- Additionally, if you don't feel like using the name database or are aiming for some memory wizardry, you can directly input the memory address of the relocation. However, as a side effect of the static loading method used on the Nintendo DS, you also have to specify a "segment" (in a similar way as the ESDB segment header does) of the address, which ensures that the relocation won't be inadvertently applied to an undesirable module, such as an overlay that shares the memory area with another. 
- Last, but certainly not least, there is the `RELOCATION_TYPE` parameter. Its value specifies what data or CPU instruction should be written to the destination address. This is especially important on the ARM architecture, as it distinguishes between two instruction sets (ARM and Thumb) which use two separate methods of encoding. As a result, you've got quite a lot of options, but be wary - they are not at all interchangeable! The specific procedures are described in detail [here](https://github.com/HelloOO7/libRPM/blob/master/include/RPM_Control.h), but for starters, here's a quick reference that should hopefully guide you towards a correct choice:
    - `THUMB_BRANCH` writes a one-way branch using the 16-bit Thumb instruction encoding. In most cases, this will be converted into a `PUSH, BL, PUSH` because of Thumb short branch restrictions, meaning you'll have to use another method for functions that use the stack for parameters (basically any with more than 4\*4 bytes of arguments).
    - `THUMB_BRANCH_SAFESTACK` does exactly that. While it takes up more space (which generally isn't a problem as the overriden function isn't going to be a little one just based off its argument count), this relocation type preserves all stack parameters.
    - `THUMB_BRANCH_LINK` writes a simple BL/BLX using the 16-bit Thumb instruction encoding. This is useful for intercepting a function call in only one place as opposed to replacing the entire implementation.
    - `ARM_BRANCH` and `ARM_BRANCH_LINK` - 32-bit ARM instructions equivalent to `THUMB_BRANCH` and `THUMB_BRANCH_LINK` respectively. Since ARM short branches cover a decent address range, there isn't a need for `THUMB_BRANCH_SAFESTACK`.
    - `FULL_COPY` copies the raw contents of the function/symbol onto the destination address. Bear in mind that this will not carry over relocations (unless hard-linked into the ROM, which isn't our objective here) inside the function, so it is only useful for simple injections.

From here on, if you name your function according to these rules, the linker will magically make it so that it will override the specified code. The future is now, thanks to science!

### Compiling
You can compile your code using standard GCC CLI, or using a build system like CMake. While compiling, be sure to use the following options:

- `-r` - produce a relocatable executable.
- `-march=armv5t` - target the ARMv5T architecture.
- `-mthumb (optional)` - generate Thumb instructions (instead of ARM).
- `-Os` - optimize for code size.

Additionally, if using CMake, you'll need to provide the following variables before compiler configuration to pass the compiler test:

```
set(CMAKE_SYSTEM_NAME             Generic)
set(CMAKE_SYSTEM_PROCESSOR            arm)
set(CMAKE_C_FLAGS   "--specs=nosys.specs")
set(CMAKE_CXX_FLAGS "--specs=nosys.specs")
```

If you're using dynamic linking for parts of your code, be sure to load the dependencies (and properly release them!) using `k::dll::LoadLibrary` (resp. `k::dll::ReleaseLibrary`) from NitroKernel. If you need to do this in initialization, create a `DllMain` function using libRPM's `RPM_DLLMAIN_DECLARE` and `RPM_DLLMAIN_DEFINE` macros, then write your loading code to run on module load/unload.

### Linking

Linking is probably the simplest part of the entire process, in fact, it's so trivial that we'll skip over it in just one (1) step:

1) Click the `Convert ELF to DLL` button in CTRMap's Extras panel and follow the instructions.

Just in case you didn't hear me, that's:

1) When prompted, select the ESDB file to be used for linking (be wary that this will not be reloaded when changed on disk).
2) Then select the ELF file you compiled and a destination DLL file.
3) Copy the result DLL into your `patches` or `lib` folder.
4) You're done! Save your ROM, cross your fingers and start it up!
## Additional notes
### Using Assembly
If you do not feel like writing C or C++, or you want to do a relatively simple patch, then you are also able to use assembly! 
C and C++ compile into assembly, which is then assembled into an executable and linkable format (ELF) file. Assembly is just assembled into the ELF format directly. So, you can very easily use tools such as kingcom's armips, or (if you set up the C/C++ compiler above) the GNU assembler.

To use assembly, just follow the same conventions above for naming functions/symbols. Then, assemble and link your file with the instructions above. Assuming you are using the GNU assembler, you just need to use the following options when assembling your file:
- `-march=armv5t` - target the ARMv5T architecture.
- `-mthumb (optional)` - generate Thumb instructions (instead of ARM).
- `-mtune=arm946e-s` (optional) - target the ARM946E-S architecture.

From there, just follow the steps for [linking](#linking).
### Patch priority
Should you need to change the priority of loading a DLL patch to higher than 4 (default), hold the `Alt` key while clicking `Convert ELF to DLL` and you'll be prompted to choose the priority after conversion.
### Changing ESDBs mid-stream
Holding `Shift` while clicking `Convert ELF to DLL` will prompt you to re-select an ESDB even if you've selected one already.
### Dynamic loading
Unlike WinAPI where you need to use `GetProcAddress` unless you know the exact address layout of your DLL, libRPM's dynamic linker only requires function names to match (the lookup is done using fast hash tables, so technically there are only about 4 billion possible combos, meaning collision is possible). As a result, headers are all that's needed to properly include a library.

NitroKernel's library loader forces all libraries to be stored in `/lib` with the `.dll` extension. A library named `Library.dll` would then be loaded with `k::dll::LoadLibrary("Library")`.

### Debug prints

If you're using DeSmuMe or a similar "nocash message" compliant emulator, you can use the `_DeSmuMe` DLL of NitroKernel to enable debug prints through `k::Print` or `k::Printf`.

The maximum length of a print string in NitroKernel is 1024 characters.

### Multithreading

Should you really need to simulate a multi-threaded context on the Nintendo DS's single-core CPU (such as for audio processing or asynchronous rendering), you can do so using NitroKernel's `kThread` library. Keep in mind though that this will add a slight overhead to your code and should wherever possible be substituted with a single-threaded replacement.

### RPM version support

RPMs that do not target the libRPM version present in the installed PMC module will produce undefined behavior. It is therefore recommended to recompile all modules to the latest version in case of uncertainty. If you're using CTRMap, you can upgrade all modules in the `patches` and `lib` VFS folders using a button in the Extras panel.

### Troubleshooting

DeSmuME + IDA debugger is your best friend.
