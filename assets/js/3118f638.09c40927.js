"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[1133],{43907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(74848),a=n(28453);const r={title:"Making Flipbooks using Texture Pattern Animations",tags:["Guide (Diamond)","Guide (Pearl)","Guide (Platinum)","Guide (HeartGold)","Guide (SoulSilver)","Guide (Black)","Guide (White)","Guide (Black 2)","Guide (White 2)"]},s="Making Flipbooks using Texture Pattern Animations",o={id:"universal/guides/nsbtp_creation/nsbtp_creation",title:"Making Flipbooks using Texture Pattern Animations",description:"Author(s): Brom.",source:"@site/docs/universal/guides/nsbtp_creation/nsbtp_creation.md",sourceDirName:"universal/guides/nsbtp_creation",slug:"/universal/guides/nsbtp_creation/",permalink:"/docs/universal/guides/nsbtp_creation/",draft:!1,unlisted:!1,editUrl:"https://github.com/ds-pokemon-hacking/ds-pokemon-hacking.github.io/docs/universal/guides/nsbtp_creation/nsbtp_creation.md",tags:[{label:"Guide (Diamond)",permalink:"/docs/tags/guide-diamond"},{label:"Guide (Pearl)",permalink:"/docs/tags/guide-pearl"},{label:"Guide (Platinum)",permalink:"/docs/tags/guide-platinum"},{label:"Guide (HeartGold)",permalink:"/docs/tags/guide-heart-gold"},{label:"Guide (SoulSilver)",permalink:"/docs/tags/guide-soul-silver"},{label:"Guide (Black)",permalink:"/docs/tags/guide-black"},{label:"Guide (White)",permalink:"/docs/tags/guide-white"},{label:"Guide (Black 2)",permalink:"/docs/tags/guide-black-2"},{label:"Guide (White 2)",permalink:"/docs/tags/guide-white-2"}],version:"current",frontMatter:{title:"Making Flipbooks using Texture Pattern Animations",tags:["Guide (Diamond)","Guide (Pearl)","Guide (Platinum)","Guide (HeartGold)","Guide (SoulSilver)","Guide (Black)","Guide (White)","Guide (Black 2)","Guide (White 2)"]},sidebar:"universal_sidebar",previous:{title:"Music Insertion",permalink:"/docs/universal/guides/music_insertion/"},next:{title:"Sprite Indexing",permalink:"/docs/universal/guides/sprite_indexing/"}},l={},d=[{value:"What is a texture flipbook?",id:"what-is-a-texture-flipbook",level:2},{value:"What is an NSBTP?",id:"what-is-an-nsbtp",level:2},{value:"What is an ITP?",id:"what-is-an-itp",level:2},{value:"What do we need to make one?",id:"what-do-we-need-to-make-one",level:2},{value:"Creating the ITP file",id:"creating-the-itp-file",level:2},{value:"What are the parts of the ITP file?",id:"what-are-the-parts-of-the-itp-file",level:3},{value:"Making the basic skeleton of the ITP",id:"making-the-basic-skeleton-of-the-itp",level:3},{value:"Filling in the &quot;body&quot; section of the ITP",id:"filling-in-the-body-section-of-the-itp",level:3},{value:"Getting an NSBTP from our ITP",id:"getting-an-nsbtp-from-our-itp",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"making-flipbooks-using-texture-pattern-animations",children:"Making Flipbooks using Texture Pattern Animations"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Author(s): ",(0,i.jsx)(t.a,{href:"https://github.com/BromBromBromley",children:"Brom"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"what-is-a-texture-flipbook",children:"What is a texture flipbook?"}),"\n",(0,i.jsx)(t.p,{children:"Ever seen flowers on the field change between different frames in their animation? Have you seen the water rise and fall with rocks in the ocean? Even with the player character, all of these examples use texture flipbook animations! Let's learn how to make one from scratch together."}),"\n",(0,i.jsx)(t.h2,{id:"what-is-an-nsbtp",children:"What is an NSBTP?"}),"\n",(0,i.jsxs)(t.p,{children:["For the Nintendo DS, games that are 3D primarily use ",(0,i.jsx)(t.a,{href:"https://ds-pokemon-hacking.github.io/universal/resources/nitro/graphics_3d/file_btp0.html",children:"NSBTP (NITRO System Binary Texture Pattern Animation)"})," files to make texture flipbooks. In tools like Tinke, you may see these files as \".btp0\" files, but don't worry, they're the same as NSBTP files."]}),"\n",(0,i.jsx)(t.h2,{id:"what-is-an-itp",children:"What is an ITP?"}),"\n",(0,i.jsx)(t.p,{children:"Before the texture flipbook animation is put into a format that the Nintendo DS can read easily with the NSBTP file, it's in a plain-text format that humans can read more easily. These files are called ITP (Intermediate Texture Pattern animation) files. We will be making one of these in order to create an NSBTP of our own. After we give it to a special program, we can get an NSBTP file from it."}),"\n",(0,i.jsx)(t.h2,{id:"what-do-we-need-to-make-one",children:"What do we need to make one?"}),"\n",(0,i.jsx)(t.p,{children:"Required materials:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Any text editor"}),"\n",(0,i.jsx)(t.li,{children:"G3DCVTR"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"creating-the-itp-file",children:"Creating the ITP file"}),"\n",(0,i.jsx)(t.h3,{id:"what-are-the-parts-of-the-itp-file",children:"What are the parts of the ITP file?"}),"\n",(0,i.jsx)(t.p,{children:'There are two primary parts to the ITP being the "header" section with various info about how the file was generated along with the "body" section which is the more important part. For the most part, the data in the header section isn\'t very important for our purposes, but will be included in order to make a valid ITP file.'}),"\n",(0,i.jsx)(t.h3,{id:"making-the-basic-skeleton-of-the-itp",children:"Making the basic skeleton of the ITP"}),"\n",(0,i.jsx)(t.p,{children:"For anyone who has seen an XML file before, you might not be in for a total shock as ITP files are actually XML files in disguise! To start, let's put in the data that every ITP needs here:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="Shift_JIS"?>\r\n\r\n<itp version="1.6.0">\r\n\r\n<head>\r\n    <create user="name" host="host" date="date" source="source"/>\r\n    <title>Texture Pattern Animation Data for NINTENDO NITRO-System</title>\r\n    <generator name="generator" version="version"/>\r\n</head>\r\n\r\n<body>\r\n</body>\r\n\r\n</itp>\n'})}),"\n",(0,i.jsx)(t.p,{children:"With this, we now have a basic header for the ITP. Let's now fill out the body section."}),"\n",(0,i.jsx)(t.h3,{id:"filling-in-the-body-section-of-the-itp",children:'Filling in the "body" section of the ITP'}),"\n",(0,i.jsx)(t.p,{children:"The body is a little bit more complicated. It is split up into 4 parts being:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The texture pattern animation's general information (",(0,i.jsx)(t.code,{children:"tex_pattern_info"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["The texture pattern animation's texture and palette names (",(0,i.jsx)(t.code,{children:"tex_pattern_list_data"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["The texture pattern animation's data (",(0,i.jsx)(t.code,{children:"tex_pattern_data"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["The array of texture pattern animations (",(0,i.jsx)(t.code,{children:"tex_pattern_anm_array"}),")*"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["*",(0,i.jsx)(t.em,{children:"For this guide, we will only be covering having a single pattern animation in the texture pattern animation array"})]}),"\n",(0,i.jsxs)(t.p,{children:["First up is the ",(0,i.jsx)(t.code,{children:"tex_pattern_info"})," section."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<tex_pattern_info\r\n    frame_size="16"\r\n    tool_start_frame="1"\r\n    tool_end_frame="16"\r\n    compress_material="on" material_size="1 1"\r\n/>\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Here, we set how many frames our animation should have (",(0,i.jsx)(t.code,{children:"frame_size"}),"), what frame our animation should start on (",(0,i.jsx)(t.code,{children:"tool_start_frame"}),"), and what frame our animation should end on (",(0,i.jsx)(t.code,{children:"tool_end_frame"}),"). For this guide, we won't be touching the ",(0,i.jsx)(t.code,{children:"compress_material"})," or ",(0,i.jsx)(t.code,{children:"material_size"})," fields."]}),"\n",(0,i.jsx)(t.p,{children:"With this section here, we have an 16 frame long animation that starts at frame 1 and ends on frame 16."}),"\n",(0,i.jsxs)(t.p,{children:["Next up is the ",(0,i.jsx)(t.code,{children:"tex_pattern_list_data"})," section."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<tex_pattern_list_data image_size="4" palette_size="4">\r\n    <image_name index="0" name="anim.1"/>\r\n    <image_name index="1" name="anim.2"/>\r\n    <image_name index="2" name="anim.3"/>\r\n    <image_name index="3" name="anim.4"/>\r\n    <palette_name index="0" name="anim.1_pl"/>\r\n    <palette_name index="1" name="anim.2_pl"/>\r\n    <palette_name index="2" name="anim.3_pl"/>\r\n    <palette_name index="3" name="anim.4_pl"/>\r\n</tex_pattern_list_data>\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The first half of this section dictates what textures from a model's NSBTX will be used and the second half dictates what palettes will be used. If the amount of textures needs to be increased or decreased, make sure to adjust the ",(0,i.jsx)(t.code,{children:"image_size"})," field appropriately and same for the amount of palettes with the ",(0,i.jsx)(t.code,{children:"palette_size"})," field."]}),"\n",(0,i.jsxs)(t.p,{children:["After this is the ",(0,i.jsx)(t.code,{children:"tex_pattern_data"})," section."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<tex_pattern_data>\r\n    <frame_idx size="8">\r\n        0 2 4 6 8 10 12 14\r\n    </frame_idx>\r\n    <image_idx size="8">\r\n        0 1 2 3 2 3 1 0\r\n    </image_idx>\r\n    <palette_idx size="8">\r\n        0 1 2 3 2 3 1 0\r\n    </palette_idx>\r\n</tex_pattern_data>\n'})}),"\n",(0,i.jsxs)(t.p,{children:["This part right here is the actual animation part. The ",(0,i.jsx)(t.code,{children:"frame_idx"})," portion determines what frames will change the image and palette shown. The ",(0,i.jsx)(t.code,{children:"image_idx"})," potion determines what image is shown based on the image index from the ",(0,i.jsx)(t.code,{children:"tex_pattern_list_data"})," section. Similarly, the ",(0,i.jsx)(t.code,{children:"palette_idx"})," portion does the same thing but for the palette. In this example, it does the following:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:"Frame 0 - Shows anim.1 (texture 0) with palette anim.1_pl\r\nFrame 2 - Shows anim.2 (texture 1) with palette anim.2_pl\r\nFrame 4 - Shows anim.3 (texture 2) with palette anim.3_pl\r\nFrame 6 - Shows anim.4 (texture 3) with palette anim.4_pl\r\nFrame 8 - Shows anim.3 (texture 2) with palette anim.3_pl\r\nFrame 10 - Shows anim.4 (texture 3) with palette anim.4_pl\r\nFrame 12 - Shows anim.2 (texture 1) with palette anim.2_pl\r\nFrame 14 - Shows anim.1 (texture 0) with palette anim.1_pl\n"})}),"\n",(0,i.jsxs)(t.p,{children:['Until another key frame is hit, it will keep the currently displayed image and palette. If the amount of key frames needed needs to be increased or decreased, make sure to change the "size" field for ',(0,i.jsx)(t.code,{children:"frame_idx"}),", ",(0,i.jsx)(t.code,{children:"image_idx"}),", and ",(0,i.jsx)(t.code,{children:"palette_idx"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["As the last section for the ",(0,i.jsx)(t.code,{children:"body"})," section, we have ",(0,i.jsx)(t.code,{children:"tex_pattern_anm_array"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<tex_pattern_anm_array size="1">\r\n    <tex_pattern_anm index="0" material_name="anim_tex" data_size="8" data_head="0"/>\r\n</tex_pattern_anm_array>\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The main things of importance for us here are the ",(0,i.jsx)(t.code,{children:"material_name"})," and ",(0,i.jsx)(t.code,{children:"data_size"})," fields. With the ",(0,i.jsx)(t.code,{children:"material_name"})," field, we can target a specific material for the animation to play instead of displaying that material. In this case, if we had a material called ",(0,i.jsx)(t.code,{children:"anim_tex"})," on a model, it would display the animation from here instead. With the ",(0,i.jsx)(t.code,{children:"data_size"})," field, for our purposes, make sure it matches the ",(0,i.jsx)(t.code,{children:"size"})," field from the ",(0,i.jsx)(t.code,{children:"tex_pattern_data"})," section because if it's smaller than it, it won't use all of the key frames listed."]}),"\n",(0,i.jsx)(t.p,{children:"With everything put together from the examples we should get this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="Shift_JIS"?>\r\n\r\n<itp version="1.6.0">\r\n\r\n<head>\r\n    <create user="name" host="host" date="date" source="source"/>\r\n    <title>Texture Pattern Animation Data for NINTENDO NITRO-System</title>\r\n    <generator name="generator" version="version"/>\r\n</head>\r\n\r\n<body>\r\n\r\n<tex_pattern_info\r\n    frame_size="16"\r\n    tool_start_frame="1"\r\n    tool_end_frame="16"\r\n    compress_material="on" material_size="1 1"\r\n/>\r\n\r\n<tex_pattern_list_data image_size="4" palette_size="4">\r\n    <image_name index="0" name="anim.1"/>\r\n    <image_name index="1" name="anim.2"/>\r\n    <image_name index="2" name="anim.3"/>\r\n    <image_name index="3" name="anim.4"/>\r\n    <palette_name index="0" name="anim.1_pl"/>\r\n    <palette_name index="1" name="anim.2_pl"/>\r\n    <palette_name index="2" name="anim.3_pl"/>\r\n    <palette_name index="3" name="anim.4_pl"/>\r\n</tex_pattern_list_data>\r\n\r\n<tex_pattern_data>\r\n    <frame_idx size="8">\r\n        0 2 4 6 8 10 12 14\r\n    </frame_idx>\r\n    <image_idx size="8">\r\n        0 1 2 3 2 3 1 0\r\n    </image_idx>\r\n    <palette_idx size="8">\r\n        0 1 2 3 2 3 1 0\r\n    </palette_idx>\r\n</tex_pattern_data>\r\n\r\n<tex_pattern_anm_array size="1">\r\n    <tex_pattern_anm index="0" material_name="anim_tex" data_size="8" data_head="0"/>\r\n</tex_pattern_anm_array>\r\n\r\n</body>\r\n\r\n</itp>\n'})}),"\n",(0,i.jsxs)(t.p,{children:["With this, it should play a short animation on the material ",(0,i.jsx)(t.code,{children:"anim_tex"})," assuming all the textures and palettes listed are within the texture set of the model."]}),"\n",(0,i.jsx)(t.h2,{id:"getting-an-nsbtp-from-our-itp",children:"Getting an NSBTP from our ITP"}),"\n",(0,i.jsxs)(t.p,{children:["After you finish making your ITP, all you have to do is drag and drop your ITP file onto ",(0,i.jsx)(t.code,{children:"g3dcvtr.exe"})," and assuming there are no errors, it should convert your ITP into a new NSBTP file."]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(96540);const a={},r=i.createContext(a);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);