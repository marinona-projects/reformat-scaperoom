(this["webpackJsonpcovid-scape-room"]=this["webpackJsonpcovid-scape-room"]||[]).push([[0],{143:function(e,t,a){e.exports=a.p+"static/media/kid.cb6ffe3d.png"},144:function(e,t,a){e.exports=a.p+"static/media/healthy.27d4e171.png"},145:function(e,t,a){e.exports=a.p+"static/media/sick.417f8e76.png"},146:function(e,t,a){e.exports=a.p+"static/media/doctor.a5b23587.png"},147:function(e,t,a){e.exports=a.p+"static/media/boat-right.46089fb7.png"},148:function(e,t,a){e.exports=a.p+"static/media/boat-left.3b7050e8.png"},159:function(e,t,a){e.exports=a(329)},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},329:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),i=a.n(c),l=(a(164),a(9)),o=(a(165),a(166),a(167),a(333)),s=a(335),m=a(338),d=a(102),u={labelCol:{span:8},wrapperCol:{span:16}},p=function(e){var t=e.onSubmit;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"my-4"},"Scape room Coronavirus"),r.a.createElement(o.a,Object.assign({},u,{name:"initial",onFinish:t}),r.a.createElement(o.a.Item,{label:"Nom complet",name:"name",rules:[{required:!0,message:"Introdueix el teu nom!"}]},r.a.createElement(s.a,null)),r.a.createElement(o.a.Item,{label:"N\xfamero de jugador",name:"player",rules:[{required:!0,message:"Es necessari que indiquis el teu n\xfamero de jugador!"}]},r.a.createElement(m.a,{min:1,max:5})),r.a.createElement(o.a.Item,null,r.a.createElement(d.a,{type:"primary",htmlType:"submit"},"Juga!"))))},g=a(331),f=a(332),b=a(336),E=a(334),h=a(339),v=function(e){var t=e.name,a=e.player;return r.a.createElement(E.a,{title:t,subTitle:"(Jugador n\xfamero ".concat(a,")"),avatar:{style:{backgroundColor:"#87d068"},icon:r.a.createElement(h.a,null)}})},y=a(56),j=a(45),O=function(e,t){return Object(y.a)({userSelect:"none",padding:16,margin:"0 0 ".concat(8,"px 0"),color:e?"black":"white",background:e?"lightgreen":"grey"},t)},N=function(e){return{background:e?"lightblue":"lightgrey",padding:8,width:250}},k=function(e){var t=e.handleFinish,a=Object(n.useState)([]),c=Object(l.a)(a,2),i=c[0],o=c[1],s=Object(n.useState)(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Array.from({length:e},(function(e,t){return t})).map((function(e){return{id:"item-".concat(e+t),content:"item ".concat(e+t)}}))}(6)),m=Object(l.a)(s,2),u=m[0],p=m[1],g=function(e){return"droppable"===e?i:"droppable2"===e?u:void 0};return r.a.createElement("div",{className:"d-flex align-items-center flex-column"},r.a.createElement("div",{className:"d-flex align-items-center",style:{height:400}},r.a.createElement(j.a,{onDragEnd:function(e){var t=e.source,a=e.destination;if(console.log("destination",a),a)if(t.droppableId===a.droppableId){var n=function(e,t,a){var n=Array.from(e),r=n.splice(t,1),c=Object(l.a)(r,1)[0];return n.splice(a,0,c),n}(g(t.droppableId),t.index,a.index);"droppable2"===t.droppableId?p(n):o(n)}else{var r=function(e,t,a,n){var r=Array.from(e),c=Array.from(t),i=r.splice(a.index,1),o=Object(l.a)(i,1)[0];c.splice(n.index,0,o);var s={};return s[a.droppableId]=r,s[n.droppableId]=c,s}(g(t.droppableId),g(a.droppableId),t,a);o(r.droppable),p(r.droppable2)}}},r.a.createElement(j.c,{droppableId:"droppable"},(function(e,t){return r.a.createElement("div",{ref:e.innerRef,style:N(t.isDraggingOver)},i.map((function(e,t){return r.a.createElement(j.b,{key:e.id,draggableId:e.id,index:t},(function(t,a){return r.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:O(a.isDragging,t.draggableProps.style)}),e.content)}))})),e.placeholder)})),r.a.createElement(j.c,{droppableId:"droppable2"},(function(e,t){return r.a.createElement("div",{ref:e.innerRef,style:N(t.isDraggingOver)},u.map((function(e,t){return r.a.createElement(j.b,{key:e.id,draggableId:e.id,index:t},(function(t,a){return r.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:O(a.isDragging,t.draggableProps.style)}),e.content)}))})),e.placeholder)}))),r.a.createElement(d.a,{onClick:function(){JSON.stringify(i.map((function(e){return e.id})))===JSON.stringify(["item-0","item-1","item-2","item-3","item-4","item-5"])&&t()},className:"ml-2"},"RESOLDRE")))},x=function(e){var t=e.handleFinish;return r.a.createElement("div",{className:"d-flex align-items-center justify-content-center"},r.a.createElement("img",{src:"https://www.wikihow.com/images/thumb/4/40/Capture-21.jpg/339px-Capture-21.jpg",className:"mb-2"}),r.a.createElement("div",{className:"ml-2"},r.a.createElement(s.a,{placeholder:"Reposta"}),r.a.createElement(d.a,{onClick:t,className:"mt-2"},"RESOLDRE PROVA 3")))},I=a(19),w=a(337),C=a(143),S=a.n(C),F=a(144),R=a.n(F),P=a(145),T=a.n(P),D=a(146),L=a.n(D),q=a(147),A=a.n(q),J=a(148),G=a.n(J),H="RIGHT",W=[{id:"kid",name:"Nen",img:S.a},{id:"sick",name:"Infectat",img:T.a},{id:"healthy",name:"Sa",img:R.a},{id:"doctor",name:"Doctora",img:L.a}],B=function(e){var t=e.handleFinish,a=Object(n.useState)(W),c=Object(l.a)(a,2),i=c[0],s=c[1],m=Object(n.useState)([]),u=Object(l.a)(m,2),p=u[0],g=u[1],f=o.a.useForm(),b=Object(l.a)(f,1)[0],E=Object(n.useState)([]),h=Object(l.a)(E,2),v=h[0],y=h[1],j=Object(n.useState)(H),O=Object(l.a)(j,2),N=O[0],k=O[1],x=Object(n.useState)(null),C=Object(l.a)(x,2),S=C[0],F=C[1],R=Object(n.useState)([]),P=Object(l.a)(R,2),T=P[0],D=P[1],L=function(){s(W),g([]),D([]),k(H),F(null),y([])},q=function(e){if(v.find((function(t){return t.id===e})))y(v.filter((function(t){return t.id!==e})));else{var t=W.find((function(t){return t.id==e}));y([].concat(Object(I.a)(v),[t]))}},A=S&&S.includes(!0),J=4===p.length&&!A;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mb-3"},T&&T.map((function(e,t){return r.a.createElement(M,Object.assign({},e,{key:t}))})),r.a.createElement(o.a,{name:"boatForm",form:b,onFinish:function(e){var t=v.map((function(e){return e.id}));D([].concat(Object(I.a)(T),[{firstColItems:Object(I.a)(i),secondColItems:Object(I.a)(p),boatItems:v,direction:N}])),v&&(N==H?(s(i.filter((function(e){return!t.includes(e.id)}))),g([].concat(Object(I.a)(p),Object(I.a)(v)))):(g(p.filter((function(e){return!t.includes(e.id)}))),s([].concat(Object(I.a)(i),Object(I.a)(v))))),k(N===H?"LEFT":H),y([])}},r.a.createElement("div",{className:"d-flex align-items-center justify-content-center"},r.a.createElement(V,{characters:i,clickable:N===H,handleClick:q}),r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement($,{direction:N}),v&&v.map((function(e){return r.a.createElement("img",{key:e.id,src:e.img,style:{height:100,border:"solid 3px"},className:"m-2"})}))),r.a.createElement(V,{characters:p,clickable:"LEFT"===N,handleClick:q}),!A&&r.a.createElement(d.a,{htmlType:"submit",className:"ml-2"},"Seg\xfcent viatge")))),!A&&r.a.createElement("div",{className:"mt-3"},r.a.createElement(d.a,{className:"mt-3",onClick:function(){return L()}},"Reset"),J&&r.a.createElement(d.a,{type:"primary",onClick:function(){var e=[!1,!1,!1];T.forEach((function(t){var a=t.boatItems&&t.boatItems.map((function(e){return e.id})),n=t.firstColItems&&t.firstColItems.map((function(e){return e.id})),r=t.secondColItems&&t.secondColItems.map((function(e){return e.id}));a&&(a.length>2||!a.includes("doctor"))&&(e[0]=!0),n&&n.includes("sick")&&!n.includes("doctor")&&n.length>1&&(e[1]=!0),r&&r.includes("sick")&&!r.includes("doctor")&&r.length>1&&(e[1]=!0)})),T.length>7&&(e[2]=!0),e.includes(!0)?F(e):t()},className:"ml-2"},"Comprova resposta")),A&&r.a.createElement("div",{className:"p-5"},r.a.createElement(w.a,{message:"Resposta incorrecta!",description:r.a.createElement("div",null,r.a.createElement("ul",null,S[0]&&r.a.createElement("li",null,"Nom\xe9s pot viatjar el doctor amb, com a molt, un altre personatge!"),S[1]&&r.a.createElement("li",null,"L'infectat no pot estar mai amb un altre personatge si no hi ha el doctor!"),S[2]&&r.a.createElement("li",null,"La soluci\xf3 \xf2ptima t\xe9 menys viatges!")),r.a.createElement(d.a,{className:"mt-2",onClick:L},"Torna-ho a provar!")),type:"error",showIcon:!0})))},M=function(e){var t=e.firstColItems,a=e.secondColItems,n=e.boatItems,c=e.direction;return r.a.createElement("div",{className:"d-flex align-items-center justify-content-center my-2"},r.a.createElement(V,{characters:t}),r.a.createElement("div",{className:"ml-2"},r.a.createElement($,{direction:c,style:{border:"solid 5px red"}}),n&&n.map((function(e){return r.a.createElement("img",{key:e.id,src:e.img,style:{height:100,border:"solid 5px red"},className:"m-2"})}))),r.a.createElement(V,{characters:a}))},V=function(e){var t=e.characters,a=e.clickable,n=void 0!==a&&a,c=e.handleClick;return r.a.createElement("div",{style:{width:400,height:120,border:"solid 2px",backgroundColor:n?"#efefef":""},className:"mx-3"},t.map((function(e){return n?r.a.createElement(d.a,{onClick:function(){return c(e.id)},style:{height:100},className:"m-2"},r.a.createElement("img",{key:e.id,src:e.img,className:"h-100"})):r.a.createElement("img",{key:e.id,src:e.img,style:{height:100},className:"m-2"})})))},$=function(e){var t=e.direction,a=e.style;return r.a.createElement("img",{src:t===H?A.a:G.a,style:a?Object(y.a)(Object(y.a)({},a),{},{height:100}):{height:100},className:"m-2"})},z=[{desc:"L'objectiu \xe9s aconseguir que tots els personatge creuin el riu, per\xf2 el doctor nom\xe9s pot transportar un pacient per viatge. A m\xe9s, el malalt no pot quedar-se sol amb cap dels dos altres personatges sense el doctor present. Per tant, hauran de trobar la combinaci\xf3 correcta per aconseguir atravessar el riu tots."},{desc:"drag and drop description"},{desc:"descripcio prov imatge"}],K=function(e){var t=e.numGame,a=e.handleFinish;switch(t){case 1:return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,{val:z[0].desc}),r.a.createElement(B,{handleFinish:a}));case 2:return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,{val:z[1].desc}),r.a.createElement(k,{handleFinish:a}));case 3:return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,{val:z[2].desc}),r.a.createElement(x,{handleFinish:a}))}},Q=function(e){var t=e.val;return r.a.createElement("div",{className:"d-flex flex-column align-items-center mt-4"},r.a.createElement("p",{className:"w-50"},t))},U=a(340),X=function(){return r.a.createElement(g.a,{className:"d-flex flex-column align-content-center"},r.a.createElement("h1",null,"Felicitats!"),r.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/W1Lq3rjg8R4",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),r.a.createElement("div",null,r.a.createElement(d.a,{type:"primary",icon:r.a.createElement(U.a,null),className:"mt-2"},"Descarrega diploma")))};var Y=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(1),o=Object(l.a)(i,2),s=o[0],m=o[1];return r.a.createElement("div",{className:"App"},a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v,a),s<4?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null,r.a.createElement(f.a,{span:18,offset:3},r.a.createElement(b.a,{current:s-1},r.a.createElement(b.a.Step,{title:"Prova 1",description:"Descripci\xf3..."}),r.a.createElement(b.a.Step,{title:"Prova 2",subTitle:"subtitol",description:"This is a description."}),r.a.createElement(b.a.Step,{title:"Prova 3",description:"This is a description."}),r.a.createElement(b.a.Step,{title:"Completat!",description:"This is a description."})))),r.a.createElement(K,{numGame:s,handleFinish:function(){s<4&&m(s+1)}})):r.a.createElement(X,null)),r.a.createElement(g.a,{className:"mt-3"},r.a.createElement(f.a,{span:12,offset:6},!a&&r.a.createElement(p,{onSubmit:c}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[159,1,2]]]);
//# sourceMappingURL=main.49927e58.chunk.js.map