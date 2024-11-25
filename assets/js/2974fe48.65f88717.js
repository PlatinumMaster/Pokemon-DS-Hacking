"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[8730],{91023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"generation-v/guides/bw_b2w2-pokescript02/bw_b2w2-pokescript02","title":"Hands-on with Pok\xe9Script: Yes, No, Maybe a Battle So","description":"Author(s): Brom","source":"@site/docs/generation-v/guides/bw_b2w2-pokescript02/bw_b2w2-pokescript02.md","sourceDirName":"generation-v/guides/bw_b2w2-pokescript02","slug":"/generation-v/guides/bw_b2w2-pokescript02/","permalink":"/docs/generation-v/guides/bw_b2w2-pokescript02/","draft":false,"unlisted":false,"editUrl":"https://github.com/ds-pokemon-hacking/ds-pokemon-hacking.github.io/docs/generation-v/guides/bw_b2w2-pokescript02/bw_b2w2-pokescript02.md","tags":[{"inline":true,"label":"Guide (Black)","permalink":"/docs/tags/guide-black"},{"inline":true,"label":"Guide (White)","permalink":"/docs/tags/guide-white"},{"inline":true,"label":"Guide (Black 2)","permalink":"/docs/tags/guide-black-2"},{"inline":true,"label":"Guide (White 2)","permalink":"/docs/tags/guide-white-2"},{"inline":true,"label":"Hands-on with Pok\xe9Script","permalink":"/docs/tags/hands-on-with-poke-script"},{"inline":true,"label":"Hands-on with...","permalink":"/docs/tags/hands-on-with"}],"version":"current","frontMatter":{"title":"Hands-on with Pok\xe9Script: Yes, No, Maybe a Battle So","tags":["Guide (Black)","Guide (White)","Guide (Black 2)","Guide (White 2)","Hands-on with Pok\xe9Script","Hands-on with..."]},"sidebar":"generation_v_sidebar","previous":{"title":"Hands-on with Pok\xe9Script: Our First Script","permalink":"/docs/generation-v/guides/bw_b2w2-pokescript01/"},"next":{"title":"Using CTRMap","permalink":"/docs/generation-v/guides/bw_b2w2-using_ctrmap/"}}');var s=n(74848),o=n(28453);const a={title:"Hands-on with Pok\xe9Script: Yes, No, Maybe a Battle So",tags:["Guide (Black)","Guide (White)","Guide (Black 2)","Guide (White 2)","Hands-on with Pok\xe9Script","Hands-on with..."]},r="Hands-on with Pok\xe9Script:Yes, No, Maybe a Battle So",l={},h=[{value:"Setting Up",id:"setting-up",level:2},{value:"Handling Yes/No Responses",id:"handling-yesno-responses",level:2},{value:"Handling Multiple Choice Responses",id:"handling-multiple-choice-responses",level:2},{value:"Giving a Pok\xe9mon",id:"giving-a-pok\xe9mon",level:2},{value:"Prepare for Battle!",id:"prepare-for-battle",level:2}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsxs)(t.h1,{id:"hands-on-with-pok\xe9scriptyes-no-maybe-a-battle-so",children:["Hands-on with Pok\xe9Script:",(0,s.jsx)("br",{}),"Yes, No, Maybe a Battle So"]})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Author(s): ",(0,s.jsx)(t.a,{href:"https://github.com/brombrombromley",children:"Brom"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsxs)(t.a,{href:"/docs/generation-v/guides/bw_b2w2-pokescript01/",children:["last part of ",(0,s.jsx)(t.em,{children:"Hands-on with Pok\xe9Script"})]}),", we learned how to get an NPC to speak to us! But, what if we wanted to have an NPC ask us a question? Or, something more exciting, how about if we wanted to have them challenge us to a battle? In this entry of ",(0,s.jsx)(t.em,{children:"Hands-on with Pok\xe9Script"}),", we'll be learning how to do just that! By the end of this entry, we'll have something that looks like this:"]}),"\n",(0,s.jsx)("video",{controls:!0,children:(0,s.jsx)("source",{src:"/video/generation-v/guides/bw_b2w2-pokescript02/battle_demo01.mp4",type:"video/mp4"})}),"\n",(0,s.jsx)(t.h2,{id:"setting-up",children:"Setting Up"}),"\n",(0,s.jsxs)(t.p,{children:["For this entry, there will be a ",(0,s.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(92148).A+"",children:"save file"})," provided to help with following along. With this save file, it will place you in the lower part of Hugh's house in Aspertia City, Zone 429. For this entry, we will be placing a new NPC in the upstairs area, Zone 430. This save file can be imported by most emulators."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["For MelonDS, this save can be imported using the ",(0,s.jsx)(t.code,{children:"File > Import savefile"})," option then opening ",(0,s.jsx)(t.code,{children:"pokescript02.sav"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["For DeSmuME, this save can be imported using the ",(0,s.jsx)(t.code,{children:"File > Import Backup Memory..."})," option then opening ",(0,s.jsx)(t.code,{children:"pokescript02.sav"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"If you remember from the last part, if you don't reload a map after adding a new NPC, moving them around, reassigning their script, and things like that, they won't appear changed in game. This is the main reason for why the save is in the downstairs area rather than directly in the upstairs area."})}),"\n",(0,s.jsxs)(t.p,{children:["After getting the save file loaded, let's get back into our CTRMap project and head to Zone 430 using the Zone Loader. Now that we're in Zone 430, let's add another NPC just like how we did in the ",(0,s.jsx)(t.a,{href:"/docs/generation-v/guides/bw_b2w2-pokescript01/",children:"first part"})," and place it at ",(0,s.jsx)(t.code,{children:"(x: 12, z: 4)"})," and have it face to the west like so."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"We have placed our Janitor NPC in front of the fridge in the kitchen",src:n(57157).A+"",width:"3072",height:"1698"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["In this case, I have set the ",(0,s.jsx)(t.code,{children:"Model No."})," field to 69 to be a Janitor in order to match the Trainer party we will be using later in this guide."]})}),"\n",(0,s.jsxs)(t.p,{children:["Using what we learned in the ",(0,s.jsx)(t.a,{href:"/docs/generation-v/guides/bw_b2w2-pokescript01/",children:"last part"}),", let's try making an NPC that faces us when we talk to them and asks us if we like Pok\xe9mon."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Janitor asking us \u201cDo you like Pok\xe9mon?\u201d",src:n(3150).A+"",width:"768",height:"576"})}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"If you want to see a solution of how you might script this, you can see a sample version below."}),(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Sample Solution"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"public static void main_5() {\n  \tActor.PauseAll();\n  \tSound.SEPlay(1351);\n  \tActor.FacePlayer();\n  \tMessage.Actor(1024, 9, 0, 0);\n  \tInput.LastKeyWait();\n  \tMessage.CloseAll();\n  \tRuntime.FinishSubEvents();\n  \tActor.UnpauseAll();\n  }\n"})}),(0,s.jsxs)(t.p,{children:["Do keep in mind that you might have to use a different message ID when using ",(0,s.jsx)(t.code,{children:"Message.Actor()"})," depending on where you put your text at."]})]})]}),"\n",(0,s.jsx)(t.p,{children:"You might notice, though, that we won't be able to respond to the question he asks us, so what can we do about that? Let's tackle some ways we can let the player respond to questions that we might want NPCs to ask them."}),"\n",(0,s.jsx)(t.h2,{id:"handling-yesno-responses",children:"Handling Yes/No Responses"}),"\n",(0,s.jsxs)(t.p,{children:["For simple responses to questions asked by NPCs, we can use ",(0,s.jsx)(t.code,{children:"YesNoWin.Show()"})," to give us a basic box that lets us answer with \u201cYES\u201d or \u201cNO.\u201d You might notice, though, when you try to directly put ",(0,s.jsx)(t.code,{children:"YesNoWin.Show()"}),", at the bottom of the screen, CTRMap will say ",(0,s.jsx)(t.code,{children:"Could not resolve method: YesNoWin.Show()"}),". This is because we need to \u201cimport\u201d the ",(0,s.jsx)(t.code,{children:"YesNoWin"})," package."]}),"\n",(0,s.jsxs)(t.p,{children:["To fix this, we need to go up to the top of our file and add ",(0,s.jsx)(t.code,{children:"import event.dialogs.YesNoWin;"}),". For a lot of commands, you will need to import them into your Pok\xe9Script file, but luckily, just like the script commands themselves, the package you need to import can also be found in the ",(0,s.jsx)(t.a,{href:"https://docs.google.com/spreadsheets/d/1zvLQFVdv6kbEgP9TY9yfV6ChK0qsz79E6PvF5lohnGk/edit?usp=sharing",children:"script command doc"})," in the second to last column. This might be a little difficult to get used to at first, but with time it will gradually become more familiar."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["You might not have noticed it, but even when we use ",(0,s.jsx)(t.code,{children:"Message.Actor()"})," or ",(0,s.jsx)(t.code,{children:"Message.CloseAll()"}),", we are actually using functions from ",(0,s.jsx)(t.code,{children:"event.dialogs.Message"}),". You can see this at the top of the script file where it says ",(0,s.jsx)(t.code,{children:"import event.dialogs.Message;"})," along with the other \u201cpackages\u201d that are being imported for this script."]})}),"\n",(0,s.jsxs)(t.p,{children:["Now that we can put in Yes/No Windows using ",(0,s.jsx)(t.code,{children:"YesNoWin.Show()"}),", let's replace the ",(0,s.jsx)(t.code,{children:"Input.LastKeyWait()"})," with ",(0,s.jsx)(t.code,{children:"YesNoWin.Show()"})," for now. Let's take a look at what that does!"]}),"\n",(0,s.jsx)("video",{controls:!0,children:(0,s.jsx)("source",{src:"/video/generation-v/guides/bw_b2w2-pokescript02/yesno_demo01.mp4",type:"video/mp4"})}),"\n",(0,s.jsx)(t.p,{children:"Hm... Well, the Yes/No Window shows up, but let's see how we can get our NPC to say different things depending on if we say yes or no."}),"\n",(0,s.jsxs)(t.p,{children:["For this, we will need to introduce our handy friend, the ",(0,s.jsx)(t.code,{children:"if"})," block. Basically, whenever we want something to happen only ",(0,s.jsx)(t.em,{children:"if"})," some specific thing happens, we can use an ",(0,s.jsx)(t.code,{children:"if"})," block. Generally, ",(0,s.jsx)(t.code,{children:"if"})," blocks look like this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"if (condition) {\n  // The script commands that will\n  // run if the special condition\n  // happens\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Within ",(0,s.jsx)(t.code,{children:"if"})," blocks, if something is ",(0,s.jsx)(t.code,{children:"true"}),", then the code inside will happen, and if the condition is ",(0,s.jsx)(t.code,{children:"false"}),", then the code inside will be skipped. For example, if we can see:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"if (2 + 2 == 4) {\n    // The code inside here\n    // will always run since\n    // unless math changes,\n    // 2 + 2 will always be 4\n}\n\nif (2 + 2 == 5) {\n    // This code will never run\n    // because it is false to say\n    // that 4 equals 5.\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"This isn't the most useful for things that are always true like 2 + 2 being 4 and 2 + 2 not being 5, but for something that could change like if the player says yes or no, using this, we can do exactly what we wanted! Let's try making our NPC say something when we select no after we give our NPC another line to say."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"The janitor is flabbergasted by your response!",src:n(32375).A+"",width:"768",height:"576"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"public static void main_5() {\n    Actor.PauseAll();\n    Sound.SEPlay(1351);\n    Actor.FacePlayer();\n    Message.Actor(1024, 9, 0, 0);\n\n    boolean isNo = YesNoWin.Show();\n    \n    if (isNo == true) {\n        Message.CloseAll();\n        Message.Actor(1024, 10, 0, 0);\n        Input.LastKeyWait();\n    }\n    \n    Message.CloseAll();\n    Runtime.FinishSubEvents();\n    Actor.UnpauseAll();\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This might look a little scary at first, but let's break it down! Let's look at the line with our ",(0,s.jsx)(t.code,{children:"YesNoWin.Show()"})," first:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"boolean isNo"}),": This here is a variable. With a variable, we can store different kinds of values depending on its type. Because our variable ",(0,s.jsx)(t.code,{children:"isNo"})," is a ",(0,s.jsx)(t.code,{children:"boolean"})," type, it means we can hold values that are ",(0,s.jsx)(t.code,{children:"true"})," or ",(0,s.jsx)(t.code,{children:"false"}),". In this case, if the player says no, then ",(0,s.jsx)(t.code,{children:"isNo"})," will be ",(0,s.jsx)(t.code,{children:"true"})," and if the player says yes, then ",(0,s.jsx)(t.code,{children:"isNo"})," will be ",(0,s.jsx)(t.code,{children:"false"}),". Once the script is finished and the player can move again, variables we make like this get their contents deleted."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"YesNoWin.Show()"}),": In addition to showing a Yes/No Window on the screen, it'll also let us know if the player said no or not. If we don't store it somewhere like in a variable, then it's like a guy shouting alone in a forest with no one to hear him."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"="}),": When we have a single equal sign, instead of seeing if two things are equal to each other, it'll put whatever came from the right into the variable on the left. In this case, we take whatever ",(0,s.jsx)(t.code,{children:"YesNoWin.Show()"})," said and give it to ",(0,s.jsx)(t.code,{children:"isNo"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["How about we make our NPC do something else if we don't say no? This is where the ",(0,s.jsx)(t.code,{children:"if"})," block's handy associate comes in, the ",(0,s.jsx)(t.code,{children:"else"})," block. Whenever you want something to run if it's not the special condition that the ",(0,s.jsx)(t.code,{children:"if"})," block is checking for, then the ",(0,s.jsx)(t.code,{children:"else"})," block will run. We can use it like so:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"if (isNo) {\n    Message.CloseAll();\n    Message.Actor(1024, 10, 0, 0);\n    Input.LastKeyWait();\n} else {\n    Message.CloseAll();\n    Message.Actor(1024, 11, 0, 0);\n    Input.LastKeyWait();\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Now, when the player says no, the NPC will say line 10, but if not, then the NPC will say line 11 instead! We'll be using these \u201cconditionals\u201d more as we continue working on this script."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Similar to how ",(0,s.jsx)(t.code,{children:"YesNoWin.Show()"})," can give us a ",(0,s.jsx)(t.code,{children:"boolean"})," value, every function in Pok\xe9Script has a return type! One of the things we handwaved before earlier is the ",(0,s.jsx)(t.code,{children:"void"})," whenever we make a new script. This is because when a function returns ",(0,s.jsx)(t.code,{children:"void"}),"; just like the real void, it returns nothing."]})}),"\n",(0,s.jsx)(t.p,{children:"If you've gotten to this portion, pat yourself on the back! Getting the tools of making a script, importing packages, and using basic conditionals is much of what you will need when scripting! By the end of this section, you should have something like this:"}),"\n",(0,s.jsx)("video",{controls:!0,children:(0,s.jsx)("source",{src:"/video/generation-v/guides/bw_b2w2-pokescript02/yesno_demo02.mp4",type:"video/mp4"})}),"\n",(0,s.jsx)(t.h2,{id:"handling-multiple-choice-responses",children:"Handling Multiple Choice Responses"}),"\n",(0,s.jsxs)(t.p,{children:["How about if we wanted to answer something more complex than yes or no? If we let's say wanted to have a list of different Pok\xe9mon to choose from, then using a list from the ",(0,s.jsx)(t.code,{children:"ListMenu"})," package is right what we need."]}),"\n",(0,s.jsxs)(t.p,{children:["Similar to how we needed to import the ",(0,s.jsx)(t.code,{children:"YesNoWin"})," package for us to be able to show a Yes/No Window, we'll need to import the ",(0,s.jsx)(t.code,{children:"ListMenu"})," package like so:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"import event.dialogs.ListMenu;\n"})}),"\n",(0,s.jsx)(t.p,{children:"Let's make our NPC which Pok\xe9mon the player likes the most out of five Pok\xe9mon. In the Event Editor tab, let's add five new lines at the end and put in the names of five different Pok\xe9mon."}),"\n",(0,s.jsx)(t.p,{children:"After we add the text that is supposed to show up in our List Menu, we can create a List Menu with 5 elements like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"int result;\nListMenu.InitRightAnchor(31, 1, 0, 0, result);\nListMenu.AddItem(12, 0xFFFF, 273);\nListMenu.AddItem(13, 0xFFFF, 270);\nListMenu.AddItem(14, 0xFFFF, 129);\nListMenu.AddItem(15, 0xFFFF, 54);\nListMenu.AddItem(16, 0xFFFF, 618);\nListMenu.ShowDialog();\nMessage.CloseAll();\n"})}),"\n",(0,s.jsx)(t.p,{children:"Let's break this down again bit by bit again, starting with the first line."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"int result"}),": This is another kind of variable. If you remember how our ",(0,s.jsx)(t.code,{children:"boolean"})," variable ",(0,s.jsx)(t.code,{children:"isNo"})," could hold ",(0,s.jsx)(t.code,{children:"true"})," or ",(0,s.jsx)(t.code,{children:"false"})," values, our ",(0,s.jsx)(t.code,{children:"int"})," (integer) variable called ",(0,s.jsx)(t.code,{children:"result"})," can hold numbers. In this case, this variable will be the ",(0,s.jsx)(t.em,{children:"result"})," from the item in the List Menu that we selected. After the script finishes, though, this is reset, so it won't remember what we picked last time unless we save it some other way. We'll look at how we can store things like this even after the script finishes in another lesson."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"ListMenu.InitRightAnchor()"}),": This here is what we need to say we would like to make a ListMenu. Here, we generally want to have the right side of the List Menu to be our reference point for positioning it. This is why we use the ",(0,s.jsx)(t.code,{children:"InitRightAnchor()"})," command. If we wanted to use the left side as our reference point, we could use ",(0,s.jsx)(t.code,{children:"InitLeftAnchor()"})," instead. Let's look at each of the parameters for these functions:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The first parameter: This lets us set how far to the right the menu should be positioned. Generally, if you want it to appear on the right edge of the screen when using ",(0,s.jsx)(t.code,{children:"InitRightAnchor()"}),", setting it to ",(0,s.jsx)(t.code,{children:"31"})," is good."]}),"\n",(0,s.jsxs)(t.li,{children:["The second parameter: This lets us set how far down the menu should be positioned. Generally, if you want it to appear on the top edge of the screen, setting it to ",(0,s.jsx)(t.code,{children:"1"})," is good."]}),"\n",(0,s.jsx)(t.li,{children:"The third parameter: This is the List Menu item that will be selected by default once we show the List Menu."}),"\n",(0,s.jsxs)(t.li,{children:["The fourth parameter: This lets us set if we can close out from this menu using the B Button or not. If we set this to ",(0,s.jsx)(t.code,{children:"0"}),", then the player must select something, but if we do want the player to be able to cancel by pressing the B Button, we can set this to ",(0,s.jsx)(t.code,{children:"1"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"The fifth parameter: This is what variable will be used to store what the player selected from the list."}),"\n"]}),"\n","Just like last time with ",(0,s.jsx)(t.code,{children:"Message.Actor()"}),", you can find the parameters for a command in the ",(0,s.jsx)(t.a,{href:"https://docs.google.com/spreadsheets/d/1zvLQFVdv6kbEgP9TY9yfV6ChK0qsz79E6PvF5lohnGk/edit?usp=sharing",children:"script command doc"}),", so don't worry about trying to remember every parameter here!"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"ListMenu.AddItem()"}),": Before we put our List Menu on the screen, we need to add our items to it. Think of it like how a caf\xe9 needs to write everything on its menu board before it can put it out for the day. Let's go through each of the parameters:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The first parameter: This is the message ID that will be used for this entry. In this case, I added messages 12-16 as entries for my menu items."}),"\n",(0,s.jsxs)(t.li,{children:["The second parameter: If we used ",(0,s.jsx)(t.code,{children:"Message.System()"})," instead of ",(0,s.jsx)(t.code,{children:"Message.Actor()"})," to show our text, we can have additional explanation text for each List Menu item. But, since we're using ",(0,s.jsx)(t.code,{children:"Message.Actor()"})," here, we can't use this feature. If you don't want to use any explanatory text, you can set this argument to ",(0,s.jsx)(t.code,{children:"0xFFFF"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["The third parameter: This is the value that our ",(0,s.jsx)(t.code,{children:"result"})," variable will be set to if we select this option. Here, I made it so that ",(0,s.jsx)(t.code,{children:"result"})," will get the Pok\xe9dex number of the Pok\xe9mon we select."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"ListMenu.ShowDialog()"}),": Now that we've said that we wanted to make a List Menu then added items to it, we can call ",(0,s.jsx)(t.code,{children:"ListMenu.ShowDialog()"})," to show the List Menu on the screen."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Message.CloseAll()"}),": After the player selects an item from the List Menu, we want it to close."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"We now have a List Menu on the screen!",src:n(83384).A+"",width:"768",height:"576"})}),"\n",(0,s.jsx)(t.p,{children:"Amazing! Now we have a List Menu on the screen! But, just like last time with the Yes/No Windows, after we select an option, it doesn't to anything. Let's doing something about it!"}),"\n",(0,s.jsxs)(t.p,{children:["List Menus are a little more complex than simple Yes/No Windows. Since we can have more than two options, it might at first seem like our ",(0,s.jsx)(t.code,{children:"if"})," and ",(0,s.jsx)(t.code,{children:"else"})," blocks won't be enough for us. Something that may be surprising, though, is that we can make an ",(0,s.jsx)(t.code,{children:"else if"})," block by combining both of them together! We can see it here:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"if (conditionA) {\n    // ...\n} else if (conditionB) {\n    // ...\n} else if (conditionC) {\n    // ...\n} else if (conditionD) {\n    // ...\n} else {\n    // ...\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"By doing this, not only are we able to do something only when Condition A is true, but we can also specify code for when only Condition B, C, or D are true! Let's see how we can use this with List Menus."}),"\n",(0,s.jsx)(t.p,{children:"Let's say that we want our NPC to say one thing if we pick their favorite Pok\xe9mon, one thing if we pick their least favorite Pok\xe9mon, and one thing if we pick anything else. For this example, let's suppose this Janitor's favorite Pok\xe9mon is Stunfisk and his least favorite Pok\xe9mon is Magikarp."}),"\n",(0,s.jsx)(t.p,{children:"If we do something like this here after we create our list:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"if (result == 618) {\n    Message.Actor(1024, 18, 0, 0);\n    Input.LastKeyWait();\n} else if (result == 129) {\n    Message.Actor(1024, 19, 0, 0);\n    Input.LastKeyWait();\n} else {\n    Message.Actor(1024, 20, 0, 0);\n    Input.LastKeyWait();\n}\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["There is a difference between ",(0,s.jsx)(t.code,{children:"="})," with a single equal sign and ",(0,s.jsx)(t.code,{children:"=="})," with two equal signs. With just ",(0,s.jsx)(t.code,{children:"="})," it assigns a value to a variable, but with ",(0,s.jsx)(t.code,{children:"=="})," it compares both sides to see if they are equal in value to each other."]})}),"\n",(0,s.jsxs)(t.p,{children:["We can see that if the player selected Stunfisk, ",(0,s.jsx)(t.code,{children:"result"})," in this case will be set to ",(0,s.jsx)(t.code,{children:"618"})," and then trigger the first ",(0,s.jsx)(t.code,{children:"if"})," block. If we instead chose Magikarp, then ",(0,s.jsx)(t.code,{children:"result"})," would be set to ",(0,s.jsx)(t.code,{children:"129"})," in this case, triggering the code in the middle. If we selected any of the other options, though, then the ",(0,s.jsx)(t.code,{children:"else"})," block's code will run. The value that ",(0,s.jsx)(t.code,{children:"result"})," is set to will depend on what you used in ",(0,s.jsx)(t.code,{children:"ListMenu.AddItem()"}),", but this general format is what you can use to check through multiple scenarios. If we combine everything we've used so far, we can get something like this!"]}),"\n",(0,s.jsx)("video",{controls:!0,children:(0,s.jsx)("source",{src:"/video/generation-v/guides/bw_b2w2-pokescript02/list_demo01.mp4",type:"video/mp4"})}),"\n",(0,s.jsx)(t.h2,{id:"giving-a-pok\xe9mon",children:"Giving a Pok\xe9mon"}),"\n",(0,s.jsx)(t.p,{children:"You may have noticed that with this save, you don't have any Pok\xe9mon. Let's change that!"}),"\n",(0,s.jsxs)(t.p,{children:["For this, normally we'd need to import the ",(0,s.jsx)(t.code,{children:"PokeParty"})," package from ",(0,s.jsx)(t.code,{children:"pokemon.PokeParty"}),", but since this map already has this imported, we don't have to worry about it like we did for our List Menus and Yes/No Windows!"]}),"\n",(0,s.jsxs)(t.p,{children:["To add a Pok\xe9mon to the player's party, we'll use ",(0,s.jsx)(t.code,{children:"PokeParty.AddPkm()"}),". If we wanted to give the player a Level 15 Magikarp for example, we would write:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"PokeParty.AddPkm(129, 0, 15);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Here, the first parameter is the Pok\xe9mon species ID, the second parameter is the form of the Pok\xe9mon, and the third parameter is the level. Since we don't have any special forms for Magikarp, we just set that argument to ",(0,s.jsx)(t.code,{children:"0"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"If we try to take a look in-game after adding this, we won't really notice anything, so let's at least try to look at the Pok\xe9mon menu. ...Except, we can't do that either! For us to see the Pok\xe9mon option in the X Menu, let's briefly talk about Flags."}),"\n",(0,s.jsxs)(t.p,{children:["Flags are a longer-term way to store the \u201cstate\u201d of something being ",(0,s.jsx)(t.code,{children:"true"})," or ",(0,s.jsx)(t.code,{children:"false"}),". Unlike our variable ",(0,s.jsx)(t.code,{children:"isNo"})," from earlier, Flags can persist even after the script ends. Throughout the game they are used for many purposes such as letting the game know things like if the player has picked up an item or not, if it should show an NPC to us or not, if a player has battled a Trainer."]}),"\n",(0,s.jsx)(t.p,{children:"In this case, we'll be touching a System Flag. These flags start at Flag 2400 and they track things like if we finished the game, if we've visited a town or not, or in this case, with Flag 2401, if we can see the Pok\xe9mon menu or not."}),"\n",(0,s.jsxs)(t.p,{children:["If we want Flag 2401 to be ",(0,s.jsx)(t.code,{children:"true"}),", we can use the ",(0,s.jsx)(t.code,{children:"EventFlags.Set()"})," function. If we wanted it to be ",(0,s.jsx)(t.code,{children:"false"}),", then we can use the ",(0,s.jsx)(t.code,{children:"EventFlags.Clear()"})," function. So, let's make the Pok\xe9mon menu visible like so:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"EventFlags.Set(2401);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["When we run our script again, we can see the Pok\xe9mon that we were supposed to be gifted! As a challenge, try to use our ",(0,s.jsx)(t.code,{children:"result"})," variable from earlier to give the player the Pok\xe9mon that they selected instead of Magikarp. In a later part, we will go into further detail on Flags, plus  will also later look more in depth at things we can do with text."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"The Magikarp that our NPC has gifted us",src:n(37759).A+"",width:"768",height:"576"})}),"\n",(0,s.jsx)(t.h2,{id:"prepare-for-battle",children:"Prepare for Battle!"}),"\n",(0,s.jsx)(t.p,{children:"Now is finally the part that you've likely been waiting for! Let's see how we can battle a Trainer! For this lesson, editing Trainers won't be covered, but for now, we will just use a Trainer that already exists in game, Janitor Orville."}),"\n",(0,s.jsxs)(t.p,{children:["To make a battle, we'll need to import the ",(0,s.jsx)(t.code,{children:"Battle"})," package from ",(0,s.jsx)(t.code,{children:"event.Battle"}),". Based on how we've imported packages before, try importing the ",(0,s.jsx)(t.code,{children:"Battle"})," package on your own."]}),"\n",(0,s.jsxs)(t.p,{children:["After we get the ",(0,s.jsx)(t.code,{children:"Battle"})," package imported, we can set up a battle like so:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"Battle.CallTrainerBattle(182, 0, 0);\nboolean didPlayerWin = Battle.IsTrainerVictory();\nif (didPlayerWin == true) {\n    Battle.EndTrainerBattle();\n} else {\n    Battle.CallTrainerLose();\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"One more time, let's break down what is happening part by part again:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Battle.CallTrainerBattle()"}),": This is what starts the Trainer battle for us. We have a few parameters, so let's see what they do as well.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The first parameter: This is the party that the Trainer will use for this battle. In this case, Trainer 182 is the one used by Janitor Orville."}),"\n",(0,s.jsxs)(t.li,{children:["The second parameter: If you want a multi-battle against two Trainers, then this can be used to set the party to be used by the second Trainer. If this is set to ",(0,s.jsx)(t.code,{children:"0"})," like it is here, though, it will just be a single battle."]}),"\n",(0,s.jsxs)(t.li,{children:["The third parameter: Depending on what this is set as, it makes the battle handle certain special cases. For most people, though, you only need to know that if this is set to ",(0,s.jsx)(t.code,{children:"1"}),", it will be a battle where the game continues even if all of your Pok\xe9mon have fainted. If we don't want anything special like that, we can just keep this set to ",(0,s.jsx)(t.code,{children:"0"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"boolean didPlayerWin = Battle.IsTrainerVictory()"}),": Similar to when we set ",(0,s.jsx)(t.code,{children:"isNo"})," earlier on, we are doing the same thing here, but this ",(0,s.jsx)(t.code,{children:"boolean"})," variable will be ",(0,s.jsx)(t.code,{children:"true"})," if the player won the battle and ",(0,s.jsx)(t.code,{children:"false"})," if the player lost the battle."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Battle.EndTrainerBattle()"}),": If the player won the battle, then they can continue on with the rest of the script by ending the battle normally."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Battle.CallTrainerLose()"}),": If the player lost the battle, they should go to the last Pok\xe9mon Center that they visited. If this battle is one where you're not supposed to black out after losing, you will get a screen saying ",(0,s.jsx)(t.code,{children:"An error has occurred."})]}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsxs)(t.p,{children:["As one last challenge, given what was said in the breakdown above, try making a Trainer battle that you can continue from even after you lose! And as an additional twist, by looking at another script or in the ",(0,s.jsx)(t.a,{href:"https://docs.google.com/spreadsheets/d/1zvLQFVdv6kbEgP9TY9yfV6ChK0qsz79E6PvF5lohnGk/edit?usp=sharing",children:"script command doc"}),", try figuring out how to heal your party without going to the Pok\xe9mon Center!"]}),(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Sample Solution"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"Battle.CallTrainerBattle(182, 0, 1);\nBattle.EndTrainerBattle();\nPokeParty.RecoverAll();\n"})})]})]}),"\n",(0,s.jsx)("video",{controls:!0,children:(0,s.jsx)("source",{src:"/video/generation-v/guides/bw_b2w2-pokescript02/battle_demo01.mp4",type:"video/mp4"})}),"\n",(0,s.jsxs)(t.p,{children:["Congratulations on surviving until the end! Now that you've finished this entry, now we can have our NPCs ask us questions and battle us in addition to getting them to face us and talk to us like before! Take a look at some other scripts and continue to be adventurous with scripting until the next entry of ",(0,s.jsx)(t.em,{children:"Hands-on with Pok\xe9Script"}),"! If you need any additional support join the ",(0,s.jsx)(t.a,{href:"https://discord.gg/YBtdN3aXfv",children:"DS Modding Community Discord server"})," to get help with scripting and more!"]})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},92148:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/files/pokescript02-81667d29e64dffcc106440bd5c6ccf07.sav"},57157:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/in_rival_house01-ee29776bc2883c98ebb17d1c85ead82b.png"},3150:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/in_rival_house02-9718b774fde9ddc490945f93aec786f6.png"},32375:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/in_rival_house03-ac9598b34f58172cc00b0e19b4289e87.png"},83384:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/in_rival_house04-c011c7e85ad8aa00e5080ac59e19d2bd.png"},37759:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/koiking-55d259707b8321bf6315a1b4bee0f204.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);