(window.webpackJsonpstories_app=window.webpackJsonpstories_app||[]).push([[0],{154:function(e,t,a){},155:function(e,t,a){"use strict";a.r(t);a(84),a(112),a(114),a(115),a(117),a(121);var r=a(0),n=a.n(r),c=a(79),o=a.n(c),s=a(6),l=a(17),i=a(2),u=a.n(i),m=a(10),p=a(15),d=a(16),f=function(e){return e<10&&e>0?["\u0627\u0644\u0623\u0648\u0644","\u0627\u0644\u062b\u0627\u0646\u064a","\u0627\u0644\u062b\u0627\u0644\u062b","\u0627\u0644\u0631\u0627\u0628\u0639","\u0627\u0644\u062e\u0627\u0645\u0633","\u0627\u0644\u0633\u0627\u062f\u0633","\u0627\u0644\u0633\u0627\u0628\u0639","\u0627\u0644\u062b\u0627\u0645\u0646","\u0627\u0644\u062a\u0627\u0633\u0639","\u0627\u0644\u0639\u0627\u0634\u0631"][e-1]:null},y=function(e){switch(e){case"JahimAlJannah":return"\u062c\u062d\u064a\u0645 \u0627\u0644\u062c\u0646\u0629";case"HayatoMayet":return"\u062d\u064a\u0627\u0629 \u0645\u064a\u062a";case"AlfosolAlKhamsa":return"\u0627\u0644\u0641\u0635\u0648\u0644 \u0627\u0644\u062e\u0645\u0633\u0629";case"NouronMo3tim":return"\u0646\u0648\u0631 \u0645\u0639\u062a\u0645";default:return"\u0631\u0627\u0628\u0637 \u0627\u0644\u0642\u0635\u0629"}},b=function(e,t){var a=y(e);return a+=" : \u0627\u0644\u0641\u0635\u0644 ",a+=f(t)},h=function(e){switch(e){case"JahimAlJannah":return"tempting-azure-gradient";case"HayatoMayet":return"purple-gradient";case"AlfosolAlKhamsa":return"peach-gradient";case"NouronMo3tim":return"young-passion-gradient";default:return"invalid story"}},v=function(e){switch(e){case"JahimAlJannah":return"green";case"HayatoMayet":return"purple";case"AlfosolAlKhamsa":return"orange";case"NouronMo3tim":return"red";default:return"invalid story"}},g=a(23),E=a.n(g);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach(function(t){Object(p.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var w=function(e){var t=e.text,a=e.speed,c=e.story,o=Object(r.useState)({text:t,speed:a,redirect:null}),s=Object(d.a)(o,2),i=s[0],p=s[1];Object(r.useEffect)(function(){p({text:t,speed:a,redirect:!1})},[t]);var f=function(e){return new Promise(function(t){setTimeout(t,e)})},y=function(e){return new Promise(function(t){setTimeout(function(){window.scrollTo(0,document.body.scrollHeight),null!==document.getElementById("liveText")&&(document.getElementById("liveText").textContent+=e,t())},a)})},b=function(){var e=Object(m.a)(u.a.mark(function e(t){var a,r,n,c,o,s,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=0,r=!0,n=!1,c=void 0,e.prev=4,o=t[Symbol.iterator]();case 6:if(r=(s=o.next()).done){e.next=21;break}if(l=s.value,!i.redirect){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,y(l);case 12:if(e.sent,a++,!0!==("true"==document.getElementById("change").getAttribute("stopped"))){e.next=18;break}return document.getElementById("change").setAttribute("index",a),e.abrupt("break",21);case 18:r=!0,e.next=6;break;case 21:e.next=27;break;case 23:e.prev=23,e.t0=e.catch(4),n=!0,c=e.t0;case 27:e.prev=27,e.prev=28,r||null==o.return||o.return();case 30:if(e.prev=30,!n){e.next=33;break}throw c;case 33:return e.finish(30);case 34:return e.finish(27);case 35:case"end":return e.stop()}},e,null,[[4,23,27,35],[28,,30,34]])}));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)(function(){document.getElementById("change").setAttribute("stopped","false"),b(i.text)},[i.text]);var v=function(){var e=Object(m.a)(u.a.mark(function e(){var t,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("change"),"true"==t.getAttribute("stopped")?(t.textContent="\u0625\u064a\u0642\u0627\u0641",a=parseInt(t.getAttribute("index"),10),p(x({},i,{text:i.text.substr(a)}))):(t.textContent="\u062a\u0634\u063a\u064a\u0644",t.setAttribute("stopped","true"));case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(m.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("change"),"true"==t.getAttribute("stopped")||t.click(),t.style.display="none",e.next=6,f(100);case 6:document.getElementById("liveText").textContent="",document.getElementById("liveText").textContent=i.text;case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return n.a.createElement(r.Fragment,null,i.redirect&&n.a.createElement(l.a,{to:"/"}),n.a.createElement("button",{style:{color:"white"},className:"btn "+h(c),index:"0",id:"change",stopped:"true",onClick:v},"\u0625\u064a\u0642\u0627\u0641"),n.a.createElement("button",{onClick:g,style:{color:"white"},className:"btn "+h(c)},"\u0625\u0638\u0647\u0627\u0631 \u0627\u0644\u0643\u0644"),n.a.createElement("br",null),n.a.createElement("p",{style:{fontSize:"20px"},className:"mt-3 story-text card-text",id:"liveText"}))},j=a(82),N=a.n(j),k=function(e){var t=e.title;return n.a.createElement(N.a,null,n.a.createElement("title",null,t||"\u0643\u0648\u0646 \u0639\u0645\u0648\u062f\u064a"))};function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(a,!0).forEach(function(t){Object(p.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var D=function(e){var t=e.match.params,a=t.story,c=t.chapter,o=Object(r.useState)({story:a,chapter:parseInt(c,10),image:"",text:"",redirect:null,loading:!0}),s=Object(d.a)(o,2),i=s[0],p=s[1];return Object(r.useEffect)(function(){(function(e,t){switch(e){case"JahimAlJannah":return t<=6;case"HayatoMayet":return t<=7;case"AlfosolAlKhamsa":return t<=2;case"NouronMo3tim":return t<=4;default:return null}})(a,c)||p(A({},i,{redirect:!0}))},[i.text]),Object(r.useEffect)(function(){(function(){var e=Object(m.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("https://shrouded-sands-99444.herokuapp.com/data/"+a+"/"+c);case 3:404===(t=e.sent).status?p(A({},i,{text:"Chapter or story not exists"})):p(A({},i,{text:t.data.story.text,image:t.data.story.image,loading:!1})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(){return e.apply(this,arguments)}})()()},[]),n.a.createElement(r.Fragment,null,i.redirect&&n.a.createElement(l.a,{to:{pathname:"/404",state:{url:" \u0627\u0644\u0641\u0635\u0644 "+c+" \u0645\u0646 "+y(a)}}}),n.a.createElement(k,{title:b(a,c)}),!i.loading&&n.a.createElement("div",{className:"container "},n.a.createElement("div",{className:"row justify-content-md-center"},n.a.createElement("div",{className:"card card-cascade wider reverse w-100"},n.a.createElement("div",{className:"view view-cascade overlay"},n.a.createElement("img",{className:"card-img-top  z-depth-1",src:i.image,alt:"Card image cap ",height:"400px"}),n.a.createElement("a",{href:"#!"},n.a.createElement("div",{className:"mask flex-center rgba-"+v(i.story)+"-slight"},n.a.createElement("h4",{className:"mask-title white-text",dir:"rtl"},b(i.story,i.chapter))))),n.a.createElement("div",{className:"card-body card-body-cascade text-center"},n.a.createElement("h2",{className:"subtitle card-title"},n.a.createElement("strong",null,y(i.story)," ")),n.a.createElement("h5",{className:"subtitle font-weight-bold "+v(i.story)+"-text py-2"},"\u0627\u0644\u0641\u0635\u0644 : ",f(i.chapter)),n.a.createElement(w,{text:i.text,speed:100,story:i.story}))))))},S=a(21),I=function(e){var t=e.story,a=t.story,c=t.desc,o=t.image,l=e.index;return n.a.createElement(r.Fragment,null,n.a.createElement("div",{className:"card card-cascade narrower my-6"},n.a.createElement("div",{className:"view view-cascade overlay"},n.a.createElement("img",{src:o,className:"card-img-top",width:"400px",height:"400px"}),n.a.createElement(s.b,{to:"/story/"+a},n.a.createElement("div",{className:"mask "+["rgba-orange","rgba-purple","rgba-green","rgba-red"][l]+"-light"}))),n.a.createElement("div",{dir:"rtl",className:"card-body card-body-cascade text-center d-flex flex-column"},n.a.createElement("h4",{className:"card-title"},y(a)),n.a.createElement("p",{className:"card-text"},c,"..."),n.a.createElement(s.b,{style:{color:"white"},to:"/story/"+a,className:"mt-auto btn "+["peach-gradient","purple-gradient","tempting-azure-gradient","young-passion-gradient"][l]},"\u0642\u0631\u0627\u0621\u0629"))))};function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(a,!0).forEach(function(t){Object(p.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var M=function(){var e=Object(r.useState)({stories:[],readyData:[]}),t=Object(d.a)(e,2),a=t[0],c=t[1];return Object(r.useEffect)(function(){try{(function(){var e=Object(m.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://shrouded-sands-99444.herokuapp.com/data");case 2:t=e.sent,c(B({},a,{stories:t.data.stories}));case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()}catch(e){console.log(e)}},[]),Object(r.useEffect)(function(){if(a.stories){var e=[],t=[],r=0,n=!0,o=!1,s=void 0;try{for(var l,i=a.stories[Symbol.iterator]();!(n=(l=i.next()).done);n=!0){var u=l.value;e=[].concat(Object(S.a)(e),[u]),r%2&&(t=[].concat(Object(S.a)(t),[e]),e=[]),r++}}catch(m){o=!0,s=m}finally{try{n||null==i.return||i.return()}finally{if(o)throw s}}c(B({},a,{readyData:t}))}},[a.stories]),n.a.createElement(r.Fragment,null,n.a.createElement(k,null),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"my-5 text-center"},n.a.createElement("h1",{className:"title"},"\u0643\u0648\u0646 \u0639\u0645\u0648\u062f\u064a")))),a.readyData.map(function(e,t){return n.a.createElement("div",{className:"row mb-5",key:t},n.a.createElement("div",{className:"card-deck"},e.map(function(e,a){return n.a.createElement(I,{story:e,index:2*t+a,key:10*t+a})})))})))},C=function(e){var t=e.chapter,a=t.chapter,c=t.desc,o=t.image,l=e.story;return n.a.createElement(r.Fragment,null,n.a.createElement("div",{dir:"rtl",className:"card col-lg-4 col-sm-4  card-cascade narrower mb-6"},n.a.createElement("div",{className:"view view-cascade overlay"},n.a.createElement("img",{src:o,className:"card-img-top",width:"400px",height:"400px"}),n.a.createElement(s.b,{to:"/chapter/"+l+"/"+a.replace(".txt","")},n.a.createElement("div",{className:"mask rgba-"+v(l)+"-slight"}))),n.a.createElement("div",{dir:"rtl",className:"card-body card-body-cascade text-center d-flex flex-column"},n.a.createElement("h4",{className:"card-title"},y(l)),n.a.createElement("h5",{className:v(l)+"-text"},n.a.createElement("strong",null,"\u0627\u0644\u0641\u0635\u0644 ",f(a.replace(".txt",""))," ")),n.a.createElement("p",{className:"card-text"},c,"..."),n.a.createElement(s.b,{style:{color:"white"},to:"/chapter/"+l+"/"+a.replace(".txt",""),className:"mt-auto btn "+h(l)},"\u0642\u0631\u0627\u0621\u0629"))))};function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach(function(t){Object(p.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var H=function(e){var t=e.match.params.story,a=Object(r.useState)({chapters:[],readyData:[],redirect:!1}),c=Object(d.a)(a,2),o=c[0],s=c[1];return Object(r.useEffect)(function(){(function(e){return["JahimAlJannah","HayatoMayet","AlfosolAlKhamsa","NouronMo3tim"].includes(e)})(t)||s(F({},o,{redirect:!0}))}),Object(r.useEffect)(function(){(function(){var e=Object(m.a)(u.a.mark(function e(){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("https://shrouded-sands-99444.herokuapp.com/data/"+t);case 3:a=e.sent,s(F({},o,{chapters:a.data.chapters})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(){return e.apply(this,arguments)}})()()},[]),Object(r.useEffect)(function(){if(o.chapters){var e=[],t=[],a=0,r=!0,n=!1,c=void 0;try{for(var l,i=o.chapters[Symbol.iterator]();!(r=(l=i.next()).done);r=!0){var u=l.value;a%3||(t=[].concat(Object(S.a)(t),[e]),e=[]),e=[].concat(Object(S.a)(e),[u]),a++}}catch(m){n=!0,c=m}finally{try{r||null==i.return||i.return()}finally{if(n)throw c}}t=[].concat(Object(S.a)(t),[e]),s(F({},o,{readyData:t}))}},[o.chapters]),n.a.createElement(r.Fragment,null,n.a.createElement(k,{title:y(t)}),o.redirect&&n.a.createElement(l.a,{to:{pathname:"/404",state:{url:y(t)}}}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"mt-5 mb-3 text-center"},n.a.createElement("h1",{className:"title "},y(t))))),o.readyData.map(function(e,a){return n.a.createElement("div",{className:"row mb-5",key:a},n.a.createElement("div",{className:"card-deck"},e.map(function(e,r){return n.a.createElement(C,{chapter:e,story:t,key:10*a+r})})))})))},K=function(e){var t;return t=e.location.state?e.location.state.url:window.location.pathname,n.a.createElement(r.Fragment,null,n.a.createElement(k,{title:"\u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u0635\u0641\u062d\u0629"}),n.a.createElement("h1",{className:"my-5 black-text text-center title"},n.a.createElement("strong",{className:"mx-2 pink-text"},t),"  \u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631"))};a(154);var z=function(){return n.a.createElement("div",{className:"App bg "},n.a.createElement(s.a,null,n.a.createElement(l.d,null,n.a.createElement(l.b,{exact:!0,path:"/",component:M}),n.a.createElement(l.b,{exact:!0,path:"/story/:story",component:H}),n.a.createElement(l.b,{exact:!0,path:"/chapter/:story/:chapter",component:D}),n.a.createElement(l.b,{exact:!0,path:"/404",component:K}),n.a.createElement(l.b,{path:"/",component:K}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},83:function(e,t,a){e.exports=a(155)}},[[83,1,2]]]);
//# sourceMappingURL=main.49124805.chunk.js.map