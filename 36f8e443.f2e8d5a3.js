(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{61:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),o=a(6),i=(a(0),a(86)),b={title:"npm \ud83d\udce6 React OpenTable",description:"React wrapper for Opentable Reservation Widget",author:"Sahil Satishkumar",author_url:"https://sahilsatishkumar.dev/contact",author_image_url:"https://avatars1.githubusercontent.com/u/8242514",tags:["opentable","react-opentable","react-opentable wrapper"]},r={permalink:"/blog/2020/08/21/react-opentable",source:"@site/blog/2020-08-21-react-opentable.md",description:"React wrapper for Opentable Reservation Widget",date:"2020-08-21T00:00:00.000Z",tags:[{label:"opentable",permalink:"/blog/tags/opentable"},{label:"react-opentable",permalink:"/blog/tags/react-opentable"},{label:"react-opentable wrapper",permalink:"/blog/tags/react-opentable-wrapper"}],title:"npm \ud83d\udce6 React OpenTable",readingTime:1.665,truncated:!1,nextItem:{title:"Soft Skills",permalink:"/blog/2020/08/16/Soft-skills"}},l=[{value:"Requirements",id:"requirements",children:[]},{value:"Exports",id:"exports",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Customization",id:"customization",children:[]},{value:"Demo",id:"demo",children:[]},{value:"Need feedback",id:"need-feedback",children:[]}],c={rightToc:l};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"I published my very first npm package: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/react-opentable"}),Object(i.b)("inlineCode",{parentName:"a"},"react-opentable (v2.0.0)"))),Object(i.b)("p",null,"This post intends to be a helper document for the same, and will be kept upto date, if the package ever changes. As of writing this post, v2.0.0 is the latest and stable version of the package. The source code is in a private repository right now, will be open sourced soon!"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"react-opentable")," is a React wrapper for opentable's reservation widget."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"DISCLAIMER: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"react-opentable"))," is not affiliated to ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"Opentable Inc.,"))," or it's employees."))),Object(i.b)("h3",{id:"requirements"},"Requirements"),Object(i.b)("p",null,"Works only with ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/blog/2019/02/06/react-v16.8.0.html"}),"React v16.8")," and above."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"react-opentable")," uses hooks and will not work with previous versions (comment below if you need one)"),Object(i.b)("h3",{id:"exports"},"Exports"),Object(i.b)("p",null,"There are two main exports from ",Object(i.b)("inlineCode",{parentName:"p"},"react-opentable")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"OpenTable")," React Component"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"positions")," JS Object")),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"OpenTable Component",OpenTable:!0,Component:!0}),'<OpenTable rid="123123" />\n')),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"rid"))," is a required prop, the component won't function correctly without it."))),Object(i.b)("p",null,"Default Props:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"defaultProps"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type='standard'"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Uses the standard widget type")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"theme='standard'"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default standard theme")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iframe=true"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"opens the widget in an iframe (recommended)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"newtab=false"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"widget won't open reservation in a new tab")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"position='bottom-left'"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"widget opens in the ",Object(i.b)("inlineCode",{parentName:"td"},"'bottom-left'")," position")))),Object(i.b)("h3",{id:"customization"},"Customization"),Object(i.b)("p",null,"The widget can be positioned in one of 5 positions namely 'top-left', 'top-right' ,'bottom-left' (default), 'bottom-right' and 'unset' (if you want to position the element through css, use this)."),Object(i.b)("p",null,"To avoid typos you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"positions")," object with keys ",Object(i.b)("inlineCode",{parentName:"p"},"positions.POSITION_TOP_LEFT"),", ",Object(i.b)("inlineCode",{parentName:"p"},"positions.POSITION_TOP_RIGHT"),", ",Object(i.b)("inlineCode",{parentName:"p"},"positions.POSITION_BOTTOM_LEFT"),", ",Object(i.b)("inlineCode",{parentName:"p"},"positions.POSITION_BOTTOM_RIGHT")," and ",Object(i.b)("inlineCode",{parentName:"p"},"positions.POSITION_UNSET")),Object(i.b)("p",null,"For further customisations, pass ",Object(i.b)("inlineCode",{parentName:"p"},"customClassName"),", this className gets attached to the container of component."),Object(i.b)("h3",{id:"demo"},"Demo"),Object(i.b)("p",null,"Here's a code sandbox for you to tinker with:"),Object(i.b)("iframe",{src:"https://codesandbox.io/embed/unruffled-snow-0zmiw?fontsize=14&hidenavigation=1&theme=light",style:{width:"100%",height:"500px",border:0,borderRadius:"4px",overflow:"hidden"},title:"unruffled-snow-0zmiw",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),Object(i.b)("h3",{id:"need-feedback"},"Need feedback"),Object(i.b)("p",null,"Do let me know how can I make this components more useful for you \ud83d\ude01"))}p.isMDXComponent=!0}}]);