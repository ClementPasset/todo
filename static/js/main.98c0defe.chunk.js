(this["webpackJsonptest-react"]=this["webpackJsonptest-react"]||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var c,r,i,s,a,o=n(0),l=n.n(o),u=n(12),j=n.n(u),b=n(6),d=n(2),O=n(3),h="#66B3BA",f="#8EB19D",x="#F6EFA6",m=n(1),g=O.a.h1(c||(c=Object(d.a)(["\n  text-align:center;\n  color:","\n"])),h),p=function(){return Object(m.jsx)("header",{children:Object(m.jsx)(g,{children:"ToDo List"})})},v=n(4),k=function(t){var e=t.lists,n=t.setLists,c=t.todo,r=Object(o.useState)(!1),i=Object(b.a)(r,2),s=i[0],a=i[1],u=Object(o.useState)(c.name),j=Object(b.a)(u,2),d=j[0],O=j[1],h=function(t){if(""!==t.target.value){var r=Object(v.a)(e),i=r.findIndex((function(t){return t.name===c.name}));r[i].list.push(t.target.value),n(r),t.target.value=""}},f=function(){var t=Object(v.a)(e),r=t.findIndex((function(t){return t.name===c.name}));t.splice(r,1),n(t)},x=function(t){if(""!==t.target.value){var r=Object(v.a)(e),i=r.findIndex((function(t){return t.name===c.name}));r[i].name=d,n(r),a(!1)}};return Object(m.jsxs)("div",{children:[!s&&Object(m.jsxs)("h3",{onClick:function(){return a(!0)},children:[d,Object(m.jsx)("span",{onClick:f,style:{cursor:"pointer"},children:"    \u274c     "})]}),s&&Object(m.jsxs)(l.a.Fragment,{children:[Object(m.jsx)("input",{onChange:function(t){O(t.target.value)},onKeyDown:function(t){"NumpadEnter"!==t.code&&"Enter"!==t.code||x(t)},onBlur:x,style:{margin:"1.5rem"},type:"text",value:d}),Object(m.jsx)("span",{onClick:f,style:{cursor:"pointer"},children:"    \u274c     "})]}),Object(m.jsxs)("ul",{children:[c.list.length>0&&c.list.map((function(t,r){return Object(m.jsxs)("li",{children:[Object(m.jsx)("input",{type:"checkbox",id:"task-".concat(t,"-").concat(r)}),Object(m.jsxs)("label",{htmlFor:"task-".concat(t,"-").concat(r),children:[t,Object(m.jsx)("span",{onClick:function(){return function(t,c){t.list.splice(c,1);var r=Object(v.a)(e);r.filter((function(e){return e.name!==t.name})),n(r)}(c,r)},style:{cursor:"pointer"},children:"     \u274c     "})]})]},"task-".concat(t,"-").concat(r))})),Object(m.jsx)("li",{children:Object(m.jsx)("input",{onKeyDown:function(t){13===t.keyCode&&h(t)},onBlur:h,type:"text"})})]})]})},y=(n(23),function(t){var e=t.lists,n=t.setLists;Object(o.useEffect)((function(){var t;n(null!==(t=JSON.parse(localStorage.getItem("todoLists")))&&void 0!==t?t:[])}),[]),Object(o.useEffect)((function(){localStorage.setItem("todoLists",JSON.stringify(e))}),[e]);var c=O.a.h2(r||(r=Object(d.a)(["\n        text-align:center;\n        padding-right:10rem;\n    "]))),s=O.a.ul(i||(i=Object(d.a)(["\n        width:fit-content;\n        margin: 0 auto;\n    "])));return Object(m.jsxs)(l.a.Fragment,{children:[e.length>0&&Object(m.jsx)(c,{children:"Mes listes : "}),Object(m.jsx)(s,{children:e.map((function(t,c){return Object(m.jsx)(k,{lists:e,setLists:n,todo:t},"".concat(t.name,"-").concat(c))}))})]})}),L=O.a.button(s||(s=Object(d.a)(["\n    width: 60%;\n    display:block;\n    margin: 1rem auto;\n    height:50px;\n    border: none;\n    background: linear-gradient(to bottom right, ",", ",");\n    color: ",";\n    font-size: 1.5rem;\n    cursor: pointer;\n    &:hover{\n        background: linear-gradient(to bottom right, ",", ",");\n    }\n"])),h,f,x,f,h),S=function(t){var e=t.lists,n=t.setLists;return Object(m.jsx)(L,{onClick:function(){return function(){var t=e.length+1;n([].concat(Object(v.a)(e),[{name:"Liste ".concat(t),list:[]}]))}()},children:"Ajouter une liste"})},w=(n(24),O.a.main(a||(a=Object(d.a)(["\n  width: 60%;\n  margin: 2rem auto;\n"])))),C=function(){var t=Object(o.useState)([]),e=Object(b.a)(t,2),n=e[0],c=e[1];return Object(m.jsxs)(l.a.Fragment,{children:[Object(m.jsx)(p,{}),Object(m.jsxs)(w,{children:[Object(m.jsx)(y,{lists:n,setLists:c}),Object(m.jsx)(S,{lists:n,setLists:c})]})]})};j.a.render(Object(m.jsx)(l.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.98c0defe.chunk.js.map