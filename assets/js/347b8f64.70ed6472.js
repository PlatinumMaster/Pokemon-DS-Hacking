"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[4841],{50259:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=n(74848),s=n(28453);const o={},r="Sprite Indexing",a={id:"universal/guides/sprite_indexing/sprite_indexing",title:"Sprite Indexing",description:"Author(s): turtleisaac",source:"@site/docs/universal/guides/sprite_indexing/sprite_indexing.md",sourceDirName:"universal/guides/sprite_indexing",slug:"/universal/guides/sprite_indexing/",permalink:"/docs/universal/guides/sprite_indexing/",draft:!1,unlisted:!1,editUrl:"https://github.com/ds-pokemon-hacking/ds-pokemon-hacking.github.io/docs/universal/guides/sprite_indexing/sprite_indexing.md",tags:[],version:"current",frontMatter:{},sidebar:"universal_sidebar",previous:{title:"Making Flipbooks using Texture Pattern Animations",permalink:"/docs/universal/guides/nsbtp_creation/"},next:{title:"Resources",permalink:"/docs/category/resources-1"}},d={},l=[{value:"Indexing",id:"indexing",level:2},{value:"Special Considerations for the Nintendo DS",id:"special-considerations-for-the-nintendo-ds",level:2},{value:"Guides for Specific Tools",id:"guides-for-specific-tools",level:2},{value:"GIMP",id:"gimp",level:3},{value:"Instructions",id:"instructions",level:4},{value:"Indexing",id:"indexing-1",level:4},{value:"Palette Editing",id:"palette-editing",level:5},{value:"Putting the Background Color in Index 0",id:"putting-the-background-color-in-index-0",level:6},{value:"Saving",id:"saving",level:5}];function c(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"sprite-indexing",children:"Sprite Indexing"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:["Author(s): ",(0,t.jsx)(i.a,{href:"https://github.com/turtleisaac",children:"turtleisaac"})]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"This document aims to introduce the concept of indexing a sprite."}),"\n",(0,t.jsx)(i.h2,{id:"indexing",children:"Indexing"}),"\n",(0,t.jsx)(i.p,{children:"Indexing is a process that converts an image from having a specific color assigned to each individual pixel to having a centralized palette where the RGB(A) values are stored."}),"\n",(0,t.jsx)(i.p,{children:"By doing this, each pixel is assigned a specific index within the palette instead of an individual color. This allows image files to take up less space."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Indexed Image Example",src:n(30017).A+"",width:"543",height:"524"})}),"\n",(0,t.jsx)(i.h2,{id:"special-considerations-for-the-nintendo-ds",children:"Special Considerations for the Nintendo DS"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"The Pok\xe9mon DS games (and most others) use NCGR files for storing images, and NCLR files for storing palettes. The NCLR file that a NCGR pulls its palette information from is determined by the code of the game, so when viewing or replacing NCGR files in a tool like Tinke, you must first select the proper NCLR for that image for the correct palette to be displayed"}),"\n",(0,t.jsxs)(i.li,{children:["Sprites within these games lack an alpha channel","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"If the game is programmed to display the image with any form of transparency, it will use the color at index 0 of the palette to determine what part of the sprite should be made transparent when displaying it"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"Most sprites are 8bpp (8 bits per pixel), meaning they have a maximum palette size of 256 colors"}),"\n"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"guides-for-specific-tools",children:"Guides for Specific Tools"}),"\n",(0,t.jsx)(i.h3,{id:"gimp",children:"GIMP"}),"\n",(0,t.jsx)(i.p,{children:"This guide aims to serve as general instructions for indexing a sprite using GIMP, a free and open-source image editing program which is available on GNU/Linux, macOS, Windows, and more."}),"\n",(0,t.jsx)(i.h4,{id:"instructions",children:"Instructions"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsxs)(i.strong,{children:["To begin, if you don't have it already, you'll want to download ",(0,t.jsx)(i.a,{href:"https://www.gimp.org/downloads/",children:"GIMP"}),"."]})}),"\n",(0,t.jsx)(i.li,{children:"From here, open an image of your choice in GIMP. If this image has an alpha channel, it technically can be removed, but that image most likely wouldn't be ideal for inserting in the first place and really shouldn't be used."}),"\n",(0,t.jsx)(i.li,{children:"Depending on the constraints of what kind of image you are replacing, the number of colors available for your indexed image may vary. In most cases, you are either limited to 256 colors or 16 colors. This guide will assume you are indexing an image that can only have 16 colors, but the same process will work for a 256 color image."}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"NOTE:"})," if your image is already indexed adequately, such as if you are editing an existing image exported from the ROM and you just want to change the colors, you may skip ahead to ",(0,t.jsx)(i.a,{href:"#Palette-Editing",children:"Palette Editing"}),"."]}),"\n",(0,t.jsx)(i.h4,{id:"indexing-1",children:"Indexing"}),"\n",(0,t.jsxs)(i.ol,{start:"4",children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["In the toolbar, you'll want to go to ",(0,t.jsx)(i.code,{children:"Image -> Mode -> Indexed..."})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["If ",(0,t.jsx)(i.code,{children:"Generate optimum palette"})," isn't already selected, do so. After that, set the maximum number of colors to 16. Press ",(0,t.jsx)(i.code,{children:"Convert"})," in the bottom right of the window."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"img1",src:n(81364).A+"",width:"495",height:"540"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h5,{id:"palette-editing",children:"Palette Editing"}),"\n",(0,t.jsxs)(i.ol,{start:"6",children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["To make it so you can edit the palette order and/or see/edit the colors in the palette, go to ",(0,t.jsx)(i.code,{children:"Windows -> Dockable Dialogues -> Colormap"}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"img2",src:n(20175).A+"",width:"536",height:"232"})}),"\n",(0,t.jsx)(i.p,{children:"Doing so will bring up the following tab:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"img3",src:n(35078).A+"",width:"206",height:"289"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"From here, you can double-click on the colors in the palette to edit them. Located at the bottom of the Colormap tab is this bar:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"img4",src:n(23705).A+"",width:"410",height:"154"})}),"\n",(0,t.jsxs)(i.p,{children:["You can also press the button that has a pencil and some lines in order to edit the currently selected color. The plus-sign button can be used to add a new color to the palette. If the background color is already in index 0 of the palette, you may skip ahead to ",(0,t.jsx)(i.a,{href:"#Saving",children:"Saving"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h6,{id:"putting-the-background-color-in-index-0",children:"Putting the Background Color in Index 0"}),"\n",(0,t.jsxs)(i.ol,{start:"8",children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["You can right-click on a color to get this menu, then from there, you press ",(0,t.jsx)(i.code,{children:"Rearrange Colormap..."}),". Click and drag the color you want to move to index 0 of the palette."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"img5",src:n(7952).A+"",width:"297",height:"260"}),"\r\n",(0,t.jsx)(i.img,{alt:"img6",src:n(73355).A+"",width:"720",height:"323"})]}),"\n",(0,t.jsxs)(i.p,{children:["When you go to let go of the dragged color, ",(0,t.jsx)(i.strong,{children:"MAKE SURE"})," there is a white box surrounding the color at index 0, as shown in the first image below. It ",(0,t.jsx)(i.strong,{children:"SHOULD NOT"})," look like the second image below, with a white line to either side, on-top of, or below the color. From here, just press ",(0,t.jsx)(i.code,{children:"Ok"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"img7",src:n(9698).A+"",width:"693",height:"293"}),"\r\n",(0,t.jsx)(i.img,{alt:"img8",src:n(10565).A+"",width:"360",height:"224"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h5,{id:"saving",children:"Saving"}),"\n",(0,t.jsxs)(i.ol,{start:"10",children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Go to ",(0,t.jsx)(i.code,{children:"File -> Export As..."})]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"img1",src:n(93052).A+"",width:"297",height:"346"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Choose where you want to output the file, and make sure you use the ",(0,t.jsx)(i.code,{children:".png"})," extension."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Make sure you select ",(0,t.jsx)(i.code,{children:"8bpc RGB"})," for the output format."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"img10",src:n(910).A+"",width:"403",height:"601"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Now, you can insert the exported image into the game files, as per the instructions of any other guide you may be following or tool you may be using."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:"TODO: Aseprite, Photoshop, GraphicsGale, Paint.NET"}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},81364:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/gimp_img_1-9ea7bd9a0da781146d50c52286a35767.png"},910:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/gimp_img_10-88391af15daf6c386a22094326c91d47.png"},20175:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/gimp_img_2-37fc754fdd4addc81bee8e9e48720e64.png"},35078:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/gimp_img_3-2750dffce9fffb384f2aea078fdefd90.png"},23705:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/gimp_img_4-2ec6243d588c368050a721f4156cd931.png"},7952:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/gimp_img_5-428657433ed07c937a4cb1e903efa8ce.png"},73355:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/gimp_img_6-74b061497af3eb6c058f14ebda8c7d4b.png"},9698:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/gimp_img_7-e971a839ff731d85db964ef80fa908d2.png"},10565:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/gimp_img_8-60238c1d8b0a8e3103e22e54777ffbec.png"},93052:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/gimp_img_9-7ef90d3cea98fe349ecf32c192daa6d7.png"},30017:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/indexed_image_example-9238262e1a95fb8c837e412b81e27513.png"},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var t=n(96540);const s={},o=t.createContext(s);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);