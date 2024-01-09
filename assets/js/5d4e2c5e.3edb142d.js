"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[3581],{2688:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=i(5893),t=i(1151);const s={title:"Code Injection (Generation V)",tags:["Guide (Black 2)","Guide (White 2)"]},r="Code Injection (Generation V)",l={id:"generation-v/guides/bw_b2w2-code_injection/bw_b2w2-code_injection",title:"Code Injection (Generation V)",description:"Author(s): Hello007, PlatinumMaster",source:"@site/docs/generation-v/guides/bw_b2w2-code_injection/bw_b2w2-code_injection.md",sourceDirName:"generation-v/guides/bw_b2w2-code_injection",slug:"/generation-v/guides/bw_b2w2-code_injection/",permalink:"/docs/generation-v/guides/bw_b2w2-code_injection/",draft:!1,unlisted:!1,editUrl:"https://github.com/kingdom-of-ds-hacking/kingdom-of-ds-hacking.github.io/docs/generation-v/guides/bw_b2w2-code_injection/bw_b2w2-code_injection.md",tags:[{label:"Guide (Black 2)",permalink:"/docs/tags/guide-black-2"},{label:"Guide (White 2)",permalink:"/docs/tags/guide-white-2"}],version:"current",frontMatter:{title:"Code Injection (Generation V)",tags:["Guide (Black 2)","Guide (White 2)"]},sidebar:"generation_v_sidebar",previous:{title:"Fairy Type Implementation",permalink:"/docs/generation-v/guides/b2w2-fairy/"},next:{title:"Scripting (Generation V)",permalink:"/docs/generation-v/guides/bw_b2w2-pokescript/"}},a={},d=[{value:"Disclaimers",id:"disclaimers",level:2},{value:"Setting Up The Environment",id:"setting-up-the-environment",level:2},{value:"Building code injection patches",id:"building-code-injection-patches",level:2},{value:"Symbol maps",id:"symbol-maps",level:3},{value:"Programming (C/C++)",id:"programming-cc",level:3},{value:"Programming (Assembly)",id:"programming-assembly",level:3},{value:"Preparing our Code for Injection",id:"preparing-our-code-for-injection",level:3},{value:"Compiling",id:"compiling",level:3},{value:"Assembling",id:"assembling",level:3},{value:"Linking",id:"linking",level:3},{value:"Patch priority",id:"patch-priority",level:3},{value:"Changing ESDBs mid-stream",id:"changing-esdbs-mid-stream",level:3},{value:"Dynamic loading",id:"dynamic-loading",level:3},{value:"Debug prints",id:"debug-prints",level:3},{value:"Multithreading",id:"multithreading",level:3},{value:"RPM version support",id:"rpm-version-support",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"code-injection-generation-v",children:"Code Injection (Generation V)"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Author(s): ",(0,o.jsx)(n.a,{href:"https://github.com/HelloOO7",children:"Hello007"}),", ",(0,o.jsx)(n.a,{href:"https://github.com/PlatinumMaster",children:"PlatinumMaster"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"disclaimers",children:"Disclaimers"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsxs)(n.strong,{children:["This tutorial assumes that you have some C++/ARMv5T assembly knowledge, and know how to use a compiler or build system. It is strongly recommended to check out the ",(0,o.jsx)(n.a,{href:"/docs/universal/guides/code_injection/",children:"universal code injection guide"}),", and brush up on C/C++/Assembly before attempting this."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Our guide is designed to help you utilize these languages to modify game behavior. If for any reason you are uncomfortable with programming, then stop here and take some time to learn one of the languages. In this scenario, C/C++ would be the easiest, as it is the lowest level language that we have bindings for."}),"\n",(0,o.jsx)(n.li,{children:"It is okay to not understand how things work at first glance. If something is not explicitly spelled out for you, you should take your time to try and understand it; it will only benefit you in the long run."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"This guide assumes that you are using a American Pok\xe9mon Black 2 [IREO] or Pok\xe9mon White 2 [IRDO] ROM."})," These are the ROM variants which are officially supported by CTRMap and PMC. It is possible to port these to other regions or games in Generation V, given the correct files are provided (as we will talk about below)."]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Please take your time reading this guide before jumping into code injection. It will not go anywhere."})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"setting-up-the-environment",children:"Setting Up The Environment"}),"\n",(0,o.jsx)(n.p,{children:"So, you think you've got what it takes to have a crack at Generation V code injection? Then press onward!"}),"\n",(0,o.jsx)(n.p,{children:"First, we've got to set up a few prerequisites. It's a boring job but I promise it'll be smooth sailing from there on out.\r\nTo start, download (and install, where applicable) all these:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"using-ctrmap/using-ctrmap.md",children:"CTRMap for Generation V"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsxs)(n.a,{href:"https://developer.arm.com/downloads/-/arm-gnu-toolchain-downloads",children:["The ",(0,o.jsx)(n.code,{children:"arm-none-eabi"})," GCC toolchain"]})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsxs)(n.a,{href:"https://github.com/kingdom-of-ds-hacking/PMC/releases",children:["Latest RPM build of ",(0,o.jsx)(n.code,{children:"PMC"})]})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/kingdom-of-ds-hacking/swan",children:"Pok\xe9mon Black 2 and White 2 Development Headers"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/HelloOO7/NitroKernel/releases",children:"Latest NitroKernel DLL"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Before you get into code injection, ",(0,o.jsx)(n.a,{href:"using-ctrmap.md#creating-a-project",children:"set up a CTRMap project"})," and load it up. If everything went as planned, there should be a ",(0,o.jsx)(n.code,{children:"Code Injection"})," section in your ",(0,o.jsx)(n.code,{children:"Extras"})," tab."]}),"\n",(0,o.jsx)(n.p,{children:"This is where it gets interesting:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Click the ",(0,o.jsx)(n.code,{children:"Install/Update PMC"})," button and select your ",(0,o.jsx)(n.code,{children:"PMC.rpm"})," file. You should do this every time ",(0,o.jsx)(n.code,{children:"libRPM"})," is updated, as the DLLs that CTRMap produces need the latest version of PMC to be recognized."]}),"\n",(0,o.jsxs)(n.li,{children:["Make sure that there is a ",(0,o.jsx)(n.code,{children:"patches"})," directory in your project's ",(0,o.jsx)(n.code,{children:"vfs/data"}),". If there isn't one, create it. Move your ",(0,o.jsx)(n.code,{children:"NitroKernel.dll"})," into that directory."]}),"\n",(0,o.jsx)(n.li,{children:"Export your ROM from CTRMap."}),"\n",(0,o.jsxs)(n.li,{children:["If everything went correctly, there should be a ",(0,o.jsx)(n.code,{children:"00"})," byte at ",(0,o.jsx)(n.code,{children:"0x02005050"})," in your game's RAM as part of PMC's initialization code."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"building-code-injection-patches",children:"Building code injection patches"}),"\n",(0,o.jsx)(n.h3,{id:"symbol-maps",children:"Symbol maps"}),"\n",(0,o.jsx)(n.p,{children:"There are two quintessential things that you need in order to begin writing proper code injection modules."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"A compiler with cross-compilation support for ARMv5T - you should already have this since the first chapter."}),"\n",(0,o.jsxs)(n.li,{children:["An ",(0,o.jsx)(n.code,{children:"ESDB"}),' (short for "external symbol database"), the stepping stone for interfacing and hijacking game routines.']}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["ESDBs should be provided with the ",(0,o.jsx)(n.a,{href:"https://github.com/kingdom-of-ds-hacking/swan",children:"swan development headers"}),". If for some reason you need to generate your own, you can do so utilizing the Interactive Disassembler (IDA), provided you have your own database (IDB)."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Export the symbols you need from IDA using ",(0,o.jsx)(n.code,{children:"File > Produce file > Create MAP file..."})]}),"\n",(0,o.jsxs)(n.li,{children:["Copy the contents of IDA's Segment Register table (",(0,o.jsx)(n.code,{children:"View > Open subviews > Segment registers"}),") into a text file."]}),"\n",(0,o.jsxs)(n.li,{children:["Open the result ",(0,o.jsx)(n.code,{children:".map"})," file in a text editor (i.e Notepad++, Visual Studio Code), and fix the segment starting addresses to their proper values instead of ",(0,o.jsx)(n.code,{children:"00000000"}),". IDA's just sometimes moody like that."]}),"\n",(0,o.jsxs)(n.li,{children:["Run ",(0,o.jsx)(n.code,{children:"MAP2ESDB"}),". If you do not have it, there are two ways to acquire it.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Use the CTRMap JAR (",(0,o.jsx)(n.code,{children:"java -cp <path to CTRMap JAR> rpm.cli.MAP2ESDB"}),") to launch MAP2ESDB."]}),"\n",(0,o.jsxs)(n.li,{children:["Clone and build the ",(0,o.jsx)(n.a,{href:"https://github.com/HelloOO7/RPMAuthoringTools",children:"RPM authoring tools"}),", then execute MAP2ESDB in your console."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Proceed with the instructions provided by the command line interface. Use your .map as ",(0,o.jsx)(n.code,{children:"--map"})," and your segment register plaintext as ",(0,o.jsx)(n.code,{children:"--thmfile"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Once done, you should have an ",(0,o.jsx)(n.code,{children:"esdb.yml"})," or similar all built and ready for code injection."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"programming-cc",children:"Programming (C/C++)"}),"\n",(0,o.jsx)(n.p,{children:"Here's where you'll finally put those headers you downloaded earlier to good use! Any function that you've included in your ESDB, you can now use from your C++ code as long as it is properly declared."}),"\n",(0,o.jsxs)(n.p,{children:["Some of the structures and functions we've researched have been compiled into the ",(0,o.jsx)(n.code,{children:"swan"})," repo for convenience, and as long as they are in your ESDB, you can use them to their full advantage. Here are a couple of things you should keep in mind:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Functions that have C linkage should be treated as such. Declaring them inside namespaces, or even outside them as plain C++ functions, will most likely not link up with your ESDB."}),"\n",(0,o.jsxs)(n.li,{children:["Failure to link a function against the ESDB is not reported in any way, since it's indistinguishable from a regular extern function present in a DLL and linked at run-time. Always make sure you've got everything registered properly before you commit; you can do this by utilizing ",(0,o.jsx)(n.code,{children:"RPMDump"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Unless you really know what you're doing and you've got all the proper ABI functions handled, you shouldn't use the C++ standard library, RTTI or exceptions (in fact, you may want to disable them with ",(0,o.jsx)(n.code,{children:"-fno-rtti"})," and ",(0,o.jsx)(n.code,{children:"-fno-exceptions"})," in GCC)."]}),"\n",(0,o.jsxs)(n.li,{children:["Some C++ ABI features (pure virtual functions) are supported and backed by ",(0,o.jsx)(n.code,{children:"NitroKernel"}),", but need to be included explicitly in order to prevent GCC from complaining. Including ",(0,o.jsx)(n.code,{children:"ExtLib.Include"})," and its ",(0,o.jsx)(n.code,{children:"ABI/exl_CxxAbi.h"})," should do the trick."]}),"\n",(0,o.jsxs)(n.li,{children:["Floating point operations, albeit ",(0,o.jsx)(n.em,{children:"very"})," slow, are supported on the DS to an extent, but should be avoided. ",(0,o.jsx)(n.code,{children:"__aeabi_#fcmp#"})," functions aren't fully present on the target, so comparisons may produce undefined behavior."]}),"\n",(0,o.jsxs)(n.li,{children:["Memory allocation through ",(0,o.jsx)(n.code,{children:"malloc"})," and ",(0,o.jsx)(n.code,{children:"free"})," will fail. This is because ",(0,o.jsx)(n.code,{children:"malloc"})," by default allocates in the ",(0,o.jsx)(n.code,{children:"0x02000000 - 0x02004000"})," area (as configured by the game), and said area is filled at boot for some reserved memory heaps. Instead, use the ExtLib new and delete operators (from ",(0,o.jsx)(n.code,{children:"Heap/exl_MemOperators.h"}),") that pass through ",(0,o.jsx)(n.code,{children:"exl::heap::Allocator"}),"s, or Game Freak's ",(0,o.jsx)(n.code,{children:"GFL_HeapAllocate"})," and ",(0,o.jsx)(n.code,{children:"GFL_HeapDelete"})," functions. What might also be handy to know is that an ",(0,o.jsx)(n.code,{children:"exl::heap::OSAllocator"})," can be created on demand for any GFL Heap ID with ",(0,o.jsx)(n.code,{children:"exl::heap::OSAllocator::OSAllocator(HeapID heapId)"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["The entirety of the ",(0,o.jsx)(n.code,{children:"ExtLib.Heap"})," library is included within your NitroKernel, so it's recommended that you use it wherever possible."]}),"\n",(0,o.jsxs)(n.li,{children:["DLLs from the ",(0,o.jsx)(n.code,{children:"lib"})," folder in the ROM root can be loaded using utility functions from NitroKernel's ",(0,o.jsx)(n.code,{children:"k::dll"})," namespace."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Got all that? Don't worry, if you didn't, I'm fairly sure this text isn't going to go anywhere. But now, we finally get to the fun part - actually injecting stuff!"}),"\n",(0,o.jsx)(n.h3,{id:"programming-assembly",children:"Programming (Assembly)"}),"\n",(0,o.jsx)(n.p,{children:"If you hate C/C++ for some reason, you can also use assembly. It serves the purpose well in scenarios where you need to do specific instruction tweaks, rather than a full reimplementation. The same advice applies from above, however with assembly, you will need to follow the calling conventions specified by ARM."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://developer.arm.com/documentation/ddi0100/latest/",children:"The ARMv5T manual is your best friend"}),". It will not tell you how to write assembly functions, but it will teach you how each operation works."]}),"\n",(0,o.jsx)(n.h3,{id:"preparing-our-code-for-injection",children:"Preparing our Code for Injection"}),"\n",(0,o.jsx)(n.p,{children:"Historically, there were many ways of injecting code into existing executables, but they all essentially get down to one thing: hooks, or branches."}),"\n",(0,o.jsx)(n.p,{children:"Branches are, simply put, a processor directive that changes the program counter - a register containing a pointer to the currently executed instruction - to another value. Each ISA and CPU architecture has its own way of performing these, but in most cases only two things are required: a source and destination address."}),"\n",(0,o.jsx)(n.p,{children:"In the early days of computing where programs had a fixed load address and memory space (also known as static loading), all branches were fully deterministic at compile time. This approach is still actually supported on modern CPUs through virtual memory addressing (in fact, some ancient Microsoft Windows programs rely on it to this day) and even though it's a thing of the past in desktop programming, it is still widely used in low-power embedded software, as is the case with standard Nintendo DS development."}),"\n",(0,o.jsx)(n.p,{children:"However, since code injection is a highly volatile process with very little headroom, we've decided to borrow the more flexible approach of dynamic loading, which includes a lot of fun quirks that you can use to your own advantage."}),"\n",(0,o.jsxs)(n.p,{children:["As per the definition of branches, any program jump requires a source and destination address, but since those may not be fully known at compile-time, they are often stored into a ",(0,o.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Relocation_(computing)",children:"relocation table"})," that is used to correct the branch instructions within the program once the executable is fixed in memory."]}),"\n",(0,o.jsx)(n.p,{children:"Inasmuch as the DS has next to no memory protection, we can easily use these to perform the relocation process even outside of our program - such as the game code! All you've gotta do is adjust the relocation table accordingly, for which there are a grand total of two options:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Use RPMTool's (",(0,o.jsx)(n.code,{children:"java -cp CTRMap.jar rpm.cli.RPMTool"})," or build RPMAuthoringTools) ",(0,o.jsx)(n.code,{children:"--in-relocations-yml"})," to manually specify the relocations using an YML file (not recommended)."]}),"\n",(0,o.jsx)(n.li,{children:"Use the automated hook derivation process built into CTRMap."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Both options are presented in this manner, since option #1 is useful for testing relocations. While the automatic derivation might be great, it may be useful to have reassurance that hooking is done correctly."}),"\n",(0,o.jsx)(n.p,{children:"To have the RPM converter automatically convert your function into a relocation, the name of the symbol (function name or assembly label) needs to be in one of the following formats:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<RELOCATION_TYPE>_FunctionName"})," - hooks directly into the start of a named function (e.g. ",(0,o.jsx)(n.code,{children:"THUMB_BRANCH_BagSave_AddItem"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<RELOCATION_TYPE>_FunctionName_0xoffset"})," - hooks into a function-relative offset (e.g. ",(0,o.jsx)(n.code,{children:"THUMB_BRANCH_LINK_BagSave_AddItem_0x2"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<RELOCATION_TYPE>_SEGMENT_0xaddress"})," - hooks at an absolute address within a segment (e.g. ",(0,o.jsx)(n.code,{children:"FULL_COPY_ARM9_0x02008268"}),")"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"I know that might be a lot to take in at first, so let's take this apart piece by piece."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"First of all, there's the function names. If a function is to be overriden with another, these should match the names in the ESDB, meaning they require explicit C linkage if used in C++. The relocation will then take place at the address of the function as specified in the ESDB, optionally offset by a constant addend."}),"\n",(0,o.jsx)(n.li,{children:"Additionally, if you don't feel like using the name database or are aiming for some memory wizardry, you can directly input the memory address of the relocation. However, as a side effect of the static loading method used on the Nintendo DS, you also have to specify a \"segment\" (in a similar way as the ESDB segment header does) of the address, which ensures that the relocation won't be inadvertently applied to an undesirable module, such as an overlay that shares the memory area with another."}),"\n",(0,o.jsxs)(n.li,{children:["Last, but certainly not least, there is the ",(0,o.jsx)(n.code,{children:"RELOCATION_TYPE"})," parameter. Its value specifies what data or CPU instruction should be written to the destination address. This is especially important on the ARM architecture, as it distinguishes between two instruction sets (ARM and Thumb) which use two separate methods of encoding. As a result, you've got quite a lot of options, but be wary - they are not at all interchangeable! The specific procedures are described in detail ",(0,o.jsx)(n.a,{href:"https://github.com/HelloOO7/libRPM/blob/master/include/RPM_Control.h",children:"here"}),", but for starters, here's a quick reference that should hopefully guide you towards a correct choice:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"THUMB_BRANCH"})," writes a one-way branch using the 16-bit Thumb instruction encoding. In most cases, this will be converted into a ",(0,o.jsx)(n.code,{children:"PUSH, BL, PUSH"})," because of Thumb short branch restrictions, meaning you'll have to use another method for functions that use the stack for parameters (basically any with more than 4*4 bytes of arguments)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"THUMB_BRANCH_SAFESTACK"})," does exactly that. While it takes up more space (which generally isn't a problem as the overriden function isn't going to be a little one just based off its argument count), this relocation type preserves all stack parameters."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"THUMB_BRANCH_LINK"})," writes a simple BL/BLX using the 16-bit Thumb instruction encoding. This is useful for intercepting a function call in only one place as opposed to replacing the entire implementation."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"ARM_BRANCH"})," and ",(0,o.jsx)(n.code,{children:"ARM_BRANCH_LINK"})," - 32-bit ARM instructions equivalent to ",(0,o.jsx)(n.code,{children:"THUMB_BRANCH"})," and ",(0,o.jsx)(n.code,{children:"THUMB_BRANCH_LINK"})," respectively. Since ARM short branches cover a decent address range, there isn't a need for ",(0,o.jsx)(n.code,{children:"THUMB_BRANCH_SAFESTACK"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"FULL_COPY"})," copies the raw contents of the function/symbol onto the destination address. Bear in mind that this will not carry over relocations (unless hard-linked into the ROM, which isn't our objective here) inside the function, so it is only useful for simple injections."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"From here on, if you name your function according to these rules, the linker will magically make it so that it will override the specified code. The future is now, thanks to science!"}),"\n",(0,o.jsx)(n.h3,{id:"compiling",children:"Compiling"}),"\n",(0,o.jsx)(n.p,{children:"You can compile your code using standard GCC CLI, or using a build system like CMake. While compiling, be sure to use the following options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-r"})," - produce a relocatable executable."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-march=armv5t"})," - target the ARMv5T architecture."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-mthumb (optional)"})," - generate Thumb instructions (instead of ARM)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-Os"})," - optimize for code size."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Additionally, if using CMake, you'll need to provide the following variables before compiler configuration to pass the compiler test:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-C",children:'set(CMAKE_SYSTEM_NAME             Generic)\r\nset(CMAKE_SYSTEM_PROCESSOR            arm)\r\nset(CMAKE_C_FLAGS   "--specs=nosys.specs")\r\nset(CMAKE_CXX_FLAGS "--specs=nosys.specs")\n'})}),"\n",(0,o.jsxs)(n.p,{children:["If you're using dynamic linking for parts of your code, be sure to load the dependencies (and properly release them!) using ",(0,o.jsx)(n.code,{children:"k::dll::LoadLibrary"})," (resp. ",(0,o.jsx)(n.code,{children:"k::dll::ReleaseLibrary"}),") from NitroKernel. If you need to do this in initialization, create a ",(0,o.jsx)(n.code,{children:"DllMain"})," function using libRPM's ",(0,o.jsx)(n.code,{children:"RPM_DLLMAIN_DECLARE"})," and ",(0,o.jsx)(n.code,{children:"RPM_DLLMAIN_DEFINE"})," macros, then write your loading code to run on module load/unload."]}),"\n",(0,o.jsx)(n.h3,{id:"assembling",children:"Assembling"}),"\n",(0,o.jsx)(n.p,{children:"If you do not feel like writing C or C++, or you want to do a relatively simple patch, then you are also able to use assembly!\r\nC and C++ compile into assembly, which is then assembled into an executable and linkable format (ELF) file. Assembly is just assembled into the ELF format directly. So, you can very easily use tools such as the GNU assembler."}),"\n",(0,o.jsx)(n.p,{children:"To use assembly, just follow the same conventions above for naming functions/symbols."}),"\n",(0,o.jsx)(n.p,{children:"Then, assemble and link your file. Assuming you are using the GNU assembler, you just need to use the following options when assembling:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-march=armv5t"})," - target the ARMv5T architecture."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-mthumb (optional)"})," - generate Thumb instructions (instead of ARM)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-mtune=arm946e-s"})," (optional) - target the ARM946E-S architecture."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["It can then be linked with compiled C/C++ code, by using standard linking procedures (",(0,o.jsx)(n.code,{children:"arm-none-eabi-ld"})," or similar)."]}),"\n",(0,o.jsx)(n.h3,{id:"linking",children:"Linking"}),"\n",(0,o.jsx)(n.p,{children:"Once you have your final ELF binary, you need to fix the linkage of the game functions (as mentioned in the general code injection guide)."}),"\n",(0,o.jsx)(n.p,{children:"Fortunately, linking with CTRMap is probably the simplest part of the entire process. In fact, it's so trivial that we'll skip over it in just one (1) step:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Click the ",(0,o.jsx)(n.code,{children:"Convert ELF to DLL"})," button in CTRMap's Extras panel and follow the instructions."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Just in case you didn't hear me, that's:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"When prompted, select the ESDB file to be used for linking (be wary that this will not be reloaded when changed on disk)."}),"\n",(0,o.jsx)(n.li,{children:"Then select the ELF file you compiled and a destination DLL file."}),"\n",(0,o.jsxs)(n.li,{children:["Copy the result DLL into your ",(0,o.jsx)(n.code,{children:"patches"})," or ",(0,o.jsx)(n.code,{children:"lib"})," folder."]}),"\n",(0,o.jsx)(n.li,{children:"You're done! Save your ROM, cross your fingers and start it up!"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"patch-priority",children:"Patch priority"}),"\n",(0,o.jsxs)(n.p,{children:["Should you need to change the priority of loading a DLL patch to higher than 4 (default), hold the ",(0,o.jsx)(n.code,{children:"Alt"})," key while clicking ",(0,o.jsx)(n.code,{children:"Convert ELF to DLL"})," and you'll be prompted to choose the priority after conversion."]}),"\n",(0,o.jsx)(n.h3,{id:"changing-esdbs-mid-stream",children:"Changing ESDBs mid-stream"}),"\n",(0,o.jsxs)(n.p,{children:["Holding ",(0,o.jsx)(n.code,{children:"Shift"})," while clicking ",(0,o.jsx)(n.code,{children:"Convert ELF to DLL"})," will prompt you to re-select an ESDB even if you've selected one already."]}),"\n",(0,o.jsx)(n.h3,{id:"dynamic-loading",children:"Dynamic loading"}),"\n",(0,o.jsxs)(n.p,{children:["Unlike WinAPI where you need to use ",(0,o.jsx)(n.code,{children:"GetProcAddress"})," unless you know the exact address layout of your DLL, libRPM's dynamic linker only requires function names to match (the lookup is done using fast hash tables, so technically there are only about 4 billion possible combos, meaning collision is possible). As a result, headers are all that's needed to properly include a library."]}),"\n",(0,o.jsxs)(n.p,{children:["NitroKernel's library loader forces all libraries to be stored in ",(0,o.jsx)(n.code,{children:"/lib"})," with the ",(0,o.jsx)(n.code,{children:".dll"})," extension. A library named ",(0,o.jsx)(n.code,{children:"Library.dll"})," would then be loaded with ",(0,o.jsx)(n.code,{children:'k::dll::LoadLibrary("Library")'}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"debug-prints",children:"Debug prints"}),"\n",(0,o.jsxs)(n.p,{children:['If you\'re using DeSmuMe or a similar "nocash message" compliant emulator, you can use the ',(0,o.jsx)(n.code,{children:"_DeSmuMe"})," DLL of NitroKernel to enable debug prints through ",(0,o.jsx)(n.code,{children:"k::Print"})," or ",(0,o.jsx)(n.code,{children:"k::Printf"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The maximum length of a print string in NitroKernel is 1024 characters."}),"\n",(0,o.jsx)(n.h3,{id:"multithreading",children:"Multithreading"}),"\n",(0,o.jsxs)(n.p,{children:["Should you really need to simulate a multi-threaded context on the Nintendo DS's single-core CPU (such as for audio processing or asynchronous rendering), you can do so using NitroKernel's ",(0,o.jsx)(n.code,{children:"kThread"})," library. Keep in mind though that this will add a slight overhead to your code and should wherever possible be substituted with a single-threaded replacement."]}),"\n",(0,o.jsx)(n.h3,{id:"rpm-version-support",children:"RPM version support"}),"\n",(0,o.jsxs)(n.p,{children:["RPMs that do not target the libRPM version present in the installed PMC module will produce undefined behavior. It is therefore recommended to recompile all modules to the latest version in case of uncertainty. If you're using CTRMap, you can upgrade all modules in the ",(0,o.jsx)(n.code,{children:"patches"})," and ",(0,o.jsx)(n.code,{children:"lib"})," VFS folders using a button in the Extras panel."]}),"\n",(0,o.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsx)(n.p,{children:"DeSmuME + IDA/melonDS debugger is your best friend."})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var o=i(7294);const t={},s=o.createContext(t);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);