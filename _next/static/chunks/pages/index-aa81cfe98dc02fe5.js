(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(587)}])},9946:function(e,n,r){"use strict";var i=r(5893),t=r(3750),a=r(7257),s=r.n(a),c=function(){var e=[{name:"Twitter",icon:(0,i.jsx)(t.meP,{}),href:"https://twitter.com/leivaa21_"},{name:"Linkedin",icon:(0,i.jsx)(t.NQh,{}),href:"https://www.linkedin.com/in/adri%C3%A1n-leiva-rojano-02763b216/"},{name:"Github",icon:(0,i.jsx)(t.rFR,{}),href:"https://github.com/leivaa21"},{name:"Mail",icon:(0,i.jsx)(t.EpS,{}),href:"mailto:adrianleiva212@gmail.com"},];return(0,i.jsx)("section",{className:s().base,children:(0,i.jsx)("div",{className:s().hero,children:(0,i.jsxs)("div",{className:s().col_wrapper,children:[(0,i.jsx)("div",{className:s().col,children:(0,i.jsxs)("div",{className:s().content,children:[(0,i.jsxs)("h1",{className:s().title,children:[(0,i.jsx)("span",{children:"Hello world!"})," Welcome to my web."]}),(0,i.jsx)("h1",{children:"Backend Engineer \uD83D\uDE80"}),(0,i.jsx)("h3",{children:"Backend Developer Trainee at Genially"})]})}),(0,i.jsx)("div",{className:s().col,children:(0,i.jsxs)("div",{className:s().me,children:[(0,i.jsxs)("div",{className:s().info,children:[(0,i.jsx)("h1",{children:"Adri\xe1n Leiva Rojano"}),(0,i.jsx)("h2",{children:"C\xf3rdoba, Spain"}),(0,i.jsx)("div",{className:s().rrss,children:(0,i.jsx)("ul",{children:e.map(function(e){return(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:e.href,rel:"noopener noreferrer",target:"_blank",children:e.icon})},"rs-".concat(e.name))})})})]}),(0,i.jsx)("div",{className:s().img_wrapper,children:(0,i.jsx)("img",{src:"/icons/favicon.png",alt:"personal-image"})})]})})]})})})};n.Z=c},572:function(e,n,r){"use strict";r.d(n,{Z:function(){return h}});var i=r(5893),t=r(1664),a=r.n(t),s=r(1163),c=r(603),l=r(7294),o=function(){var e=(0,l.useState)(!1),n=e[0],r=e[1];return(0,l.useEffect)(function(){var e=function(){var e=window.scrollY>1;e!==n&&r(e)};return document.addEventListener("scroll",e),function(){document.removeEventListener("scroll",e)}},[n,r]),n},m=r(3854),_=r(8676),d=r.n(_),h=function(){var e,n,r,t,_=(0,s.useRouter)(),h=o(),u=(0,l.useState)(!1),x=u[0],j=u[1],p=(e=function(){t({width:window.innerWidth,height:window.innerHeight})},r=(n=(0,c.Z)(l.useState({width:window.innerWidth,height:window.innerHeight}),2))[0],t=n[1],(0,l.useEffect)(function(){return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]),r).width;(0,l.useEffect)(function(){j(p<900)},[p]);var f=(0,l.useState)(!1),b=f[0],v=f[1],w=function(){v(!b)},N=(0,i.jsx)("ul",{children:[{title:"Home",icon:"\uD83C\uDFE0",href:"/"},{title:"Career",icon:"\uD83D\uDCDC",href:"/career"},{title:"Blog",icon:"\uD83D\uDCDD",href:"/blog"}].map(function(e){return(0,i.jsx)(a(),{href:e.href,children:(0,i.jsx)("li",{className:_.route==e.href?d().active:"",children:(0,i.jsx)("span",{children:(0,i.jsxs)("p",{children:[e.icon,e.title]})})})},"nav-".concat(e.title))})}),g=b?(0,i.jsx)("div",{className:d().compact_background,onClick:w,children:N}):(0,i.jsx)("button",{onClick:w,children:(0,i.jsx)(m.r0I,{})});return x?(0,i.jsx)("section",{id:"compact-navbar",className:d().base_compact,children:g}):(0,i.jsx)("section",{id:"navbar",className:"".concat(d().base," ").concat(h?d().scrolled:""),children:N})}},587:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return j}});var i=r(5893),t=r(9008),a=r.n(t),s=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{children:"Hello World"}),(0,i.jsx)("h2",{children:"I'm Leivaa"})]})},c=r(9946),l=r(572),o=r(4924),m=r(1163),_=r(5434),d=r(7106),h=r(6166),u=r.n(h),x=function(e){var n,r=e.command,t=e.param,a=e.children,s=e.width,c=e.height,l=e.margin,h=(0,m.useRouter)(),x=(n={},(0,o.Z)(n,"--width",s),(0,o.Z)(n,"--height",c),(0,o.Z)(n,"--margin",l),(0,o.Z)(n,"--toolbar-background","#31363B"),(0,o.Z)(n,"--background","#0A0E1488"),(0,o.Z)(n,"--font-white","#C7C7C7"),(0,o.Z)(n,"--font-cyan","#90E1C6"),(0,o.Z)(n,"--font-magenta","#ea4fff"),(0,o.Z)(n,"--font-green","#91B362"),(0,o.Z)(n,"--font-red","#EA6C73"),n),j={user:"leivaa",machine:"website",path:"~".concat(h.route)},p=new Date().getHours();p>12&&(p-=12);var f=new Date().getMinutes(),b={time:"[ ".concat(p,":").concat(f," ]"),mark:">"};return(0,i.jsx)("section",{children:(0,i.jsxs)("div",{className:u().container,style:x,children:[(0,i.jsx)("div",{className:u().container_terminal}),(0,i.jsxs)("div",{className:u().terminal_toolbar,children:[(0,i.jsxs)("p",{className:u().user,children:[j.user,"@",j.machine,": ",j.path]}),(0,i.jsxs)("div",{className:u().butt,children:[(0,i.jsx)("button",{className:u().btn,children:(0,i.jsx)(d.aTz,{})}),(0,i.jsx)("button",{className:u().btn,children:(0,i.jsx)(d.aVA,{})}),(0,i.jsx)("button",{className:u().btn+" "+u().btn_close,children:(0,i.jsx)(_.FU5,{})})]})]}),(0,i.jsx)("div",{className:u().terminal_body,children:(0,i.jsxs)("div",{className:u().terminal_command,children:[(0,i.jsxs)("div",{className:u().terminal_prompt,children:[(0,i.jsx)("span",{className:u().terminal_time,children:b.time}),(0,i.jsx)("span",{className:u().terminal_user,children:j.user}),(0,i.jsx)("span",{className:u().terminal_bling,children:b.mark}),(0,i.jsxs)("p",{className:u().terminal_command_text,children:[(0,i.jsx)("span",{children:r})," ",t]})]}),(0,i.jsx)("div",{className:u().output,children:a}),(0,i.jsxs)("div",{className:u().terminal_prompt,children:[(0,i.jsx)("span",{className:u().terminal_time,children:b.time}),(0,i.jsx)("span",{className:u().terminal_user,children:j.user}),(0,i.jsx)("span",{className:u().terminal_bling,children:b.mark}),(0,i.jsx)("span",{className:u().terminal_cursor})]})]})})]})})},j=function(){return(0,i.jsxs)("div",{children:[(0,i.jsxs)(a(),{children:[(0,i.jsx)("title",{children:"Leivaa's Website"}),(0,i.jsx)("meta",{name:"description",content:"Lorem ipsum"})]}),(0,i.jsxs)("main",{children:[(0,i.jsx)(c.Z,{}),(0,i.jsx)(l.Z,{}),(0,i.jsx)("section",{id:"Home",children:(0,i.jsx)(x,{command:"mdcat",param:"info.md",width:"80vw",height:"min-content",margin:"10vh 10vw",children:(0,i.jsx)(s,{})})})]}),(0,i.jsx)("footer",{})]})}},7257:function(e){e.exports={base:"hero_base__5KdFg",hero:"hero_hero___xWy6",col_wrapper:"hero_col_wrapper__pkXVH",col:"hero_col__03Nku",me:"hero_me__gAS70",info:"hero_info__5EH8S",rrss:"hero_rrss__FGT9g",img_wrapper:"hero_img_wrapper__rzQTp",content:"hero_content__i5TDM",title:"hero_title__GkXr_"}},8676:function(e){e.exports={base:"navbar_base__9goGI",scrolled:"navbar_scrolled__LmiPS",active:"navbar_active__G5V9V",compact_background:"navbar_compact_background__YURUE",base_compact:"navbar_base_compact__9ZsXX"}},6166:function(e){e.exports={container:"terminal_container__I5Qou",terminal_toolbar:"terminal_terminal_toolbar__Tk3YO",butt:"terminal_butt__0hBd1",btn:"terminal_btn__NH9yC",btn_close:"terminal_btn_close__c_UUw","butt--exit":"terminal_butt--exit__MIwqq",user:"terminal_user__FSCTx",terminal_body:"terminal_terminal_body__fZMe_",terminal_command:"terminal_terminal_command__tw2hC",terminal_prompt:"terminal_terminal_prompt__YCjpx",terminal_time:"terminal_terminal_time__YDx2l",terminal_user:"terminal_terminal_user__tRcF0",terminal_bling:"terminal_terminal_bling__MdqRb",terminal_command_text:"terminal_terminal_command_text__ejlYR",terminal_cursor:"terminal_terminal_cursor__WZVUW",curbl:"terminal_curbl__5u8d3",output:"terminal_output__KZwes"}}},function(e){e.O(0,[13,556,907,228,489,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);