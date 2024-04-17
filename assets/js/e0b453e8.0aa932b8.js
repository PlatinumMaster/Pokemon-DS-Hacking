"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[6625],{275:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var t=i(74848),r=i(28453);const s={},c='FIMG ("GMIF") - File Image',l={id:"universal/resources/nitro/file_system/section_fimg",title:'FIMG ("GMIF") - File Image',description:"Author(s): Gonhex",source:"@site/docs/universal/resources/nitro/file_system/section_fimg.md",sourceDirName:"universal/resources/nitro/file_system",slug:"/universal/resources/nitro/file_system/section_fimg",permalink:"/docs/universal/resources/nitro/file_system/section_fimg",draft:!1,unlisted:!1,editUrl:"https://github.com/ds-pokemon-hacking/ds-pokemon-hacking.github.io/docs/universal/resources/nitro/file_system/section_fimg.md",tags:[],version:"current",frontMatter:{},sidebar:"universal_sidebar",previous:{title:'FATB ("BTAF") - File Allocation Table',permalink:"/docs/universal/resources/nitro/file_system/section_fatb"},next:{title:"section_fntb",permalink:"/docs/universal/resources/nitro/file_system/section_fntb"}},o={},a=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Data Structure",id:"data-structure",level:2},{value:"Section Container",id:"section-container",level:3},{value:"FIMG Container",id:"fimg-container",level:3},{value:"Specification",id:"specification",level:2},{value:"Files",id:"files",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"fimg-gmif---file-image",children:'FIMG ("GMIF") - File Image'}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Author(s): ",(0,t.jsx)(n.a,{href:"https://github.com/Gonhex",children:"Gonhex"})," ",(0,t.jsx)("br",{}),"\r\nResearch: ",(0,t.jsx)(n.a,{href:"https://problemkaputt.de",children:"NOCASH"})]}),"\n"]}),"\n",(0,t.jsx)(n.mermaid,{value:"flowchart BT;\r\n    NARC(N. Archive)--\x3eFS(File System);\r\n    FIMG(File Image)--\x3eNARC;"}),"\n",(0,t.jsx)(n.p,{children:"A data buffer for all the files stored in this archive."}),"\n",(0,t.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#data-structure",children:"Data Structure"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#section-container",children:"Section Container"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#fimg-container",children:"FIMG Container"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#specification",children:"Specification"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#files",children:"Files"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"data-structure",children:"Data Structure"}),"\n",(0,t.jsx)(n.h3,{id:"section-container",children:"Section Container"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"struct ContainerSectionFIMG\r\n{\r\n    /* 0x0 */ struct NitroSectionHeader sectionHeader;\r\n    /* 0x8 */ struct ContainerFIMG sectionData;\r\n}; // entry size = sectionHeader.lengthSection\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field Name"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Data Type"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sectionHeader"}),(0,t.jsxs)(n.td,{children:["Header of this section. ",(0,t.jsx)(n.code,{children:'sectionHeader.signature = "GMIF"'}),"."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../nitro_overview.md#nitro-section-header",children:"NitroSectionHeader"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sectionData"}),(0,t.jsx)(n.td,{children:"Content of this section."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#fimg-container",children:"ContainerFIMG"})})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"fimg-container",children:"FIMG Container"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"struct ContainerFIMG\r\n{\r\n    // header\r\n    // empty\r\n    \r\n    // data\r\n    /* 0x0 */ uint8_t data[sectionHeader.lengthSection - 0x8];\r\n}; // entry size = sectionHeader.lengthSection - 0x8\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field Name"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Data Type"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"data"}),(0,t.jsx)(n.td,{children:"Raw data. The allocation table is needed to separate the files."}),(0,t.jsx)(n.td,{children:"uint8_t[]"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"specification",children:"Specification"}),"\n",(0,t.jsx)(n.h3,{id:"files",children:"Files"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/universal/resources/nitro/file_system/file_narc",children:"Nitro Archive"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>l});var t=i(96540);const r={},s=t.createContext(r);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);