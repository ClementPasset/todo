(this["webpackJsonptest-react"]=this["webpackJsonptest-react"]||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var c,i,r,s,o,a=n(0),u=n.n(a),l=n(12),j=n.n(l),d=n(6),b=n(2),O=n(3),h="#66B3BA",x="#8EB19D",f="#F6EFA6",m=n(1),g=O.a.h1(c||(c=Object(b.a)(["\n  text-align:center;\n  color:","\n"])),h),p=function(){return Object(m.jsx)("header",{children:Object(m.jsx)(g,{children:"ToDo List"})})},v=n(4),k=function(t){var e=t.item,n=t.index,c=t.removeItem,i=t.todo,r=t.lists,s=t.setLists;return Object(m.jsxs)("li",{children:[Object(m.jsx)("input",{onChange:function(t){var n=r.findIndex((function(t){return t.name===i.name})),c=i.list.findIndex((function(t){return t.text===e.text})),o=Object(v.a)(r);o[n].list[c].checked=!o[n].list[c].checked,s(o)},type:"checkbox",checked:e.checked,id:"".concat(e.text,"-").concat(n)}),Object(m.jsxs)("label",{htmlFor:"".concat(e.text,"-").concat(n),children:[e.text,Object(m.jsx)("span",{onClick:function(){return c(i,n)},style:{cursor:"pointer"},children:"     \u274c     "})]})]})},y=function(t){var e=t.lists,n=t.setLists,c=t.todo,i=Object(a.useState)(!1),r=Object(d.a)(i,2),s=r[0],o=r[1],l=Object(a.useState)(c.name),j=Object(d.a)(l,2),b=j[0],O=j[1],h=function(t){if(""!==t.target.value){var i=Object(v.a)(e),r=i.findIndex((function(t){return t.name===c.name}));i[r].list.push({text:t.target.value,checked:!1}),n(i),t.target.value=""}},x=function(t,c){t.list.splice(c,1);var i=Object(v.a)(e);i.filter((function(e){return e.name!==t.name})),n(i)},f=function(){var t=Object(v.a)(e),i=t.findIndex((function(t){return t.name===c.name}));t.splice(i,1),n(t)},g=function(t){if(""!==t.target.value){var i=Object(v.a)(e),r=i.findIndex((function(t){return t.name===c.name}));i[r].name=b,n(i),o(!1)}};return Object(m.jsxs)("div",{children:[!s&&Object(m.jsxs)("h3",{onClick:function(){return o(!0)},children:[b,Object(m.jsx)("span",{onClick:f,style:{cursor:"pointer"},children:"    \u274c     "})]}),s&&Object(m.jsxs)(u.a.Fragment,{children:[Object(m.jsx)("input",{onChange:function(t){O(t.target.value)},onKeyDown:function(t){13===t.keyCode&&g(t)},onBlur:g,style:{margin:"1.5rem"},type:"text",value:b}),Object(m.jsx)("span",{onClick:f,style:{cursor:"pointer"},children:"    \u274c     "})]}),Object(m.jsxs)("ul",{children:[c.list.length>0&&c.list.map((function(t,i){return Object(m.jsx)(k,{lists:e,setLists:n,item:t,index:i,todo:c,removeItem:x},"task-".concat(t.text,"-").concat(i))})),Object(m.jsx)("li",{children:Object(m.jsx)("input",{onKeyDown:function(t){13===t.keyCode&&h(t)},onBlur:h,type:"text"})})]})]})},L=(n(23),O.a.h2(i||(i=Object(b.a)(["\ntext-align:center;\npadding-right:10rem;\n"])))),I=O.a.ul(r||(r=Object(b.a)(["\nwidth:fit-content;\nmargin: 0 auto;\n"]))),C=function(t){var e=t.lists,n=t.setLists;return Object(a.useEffect)((function(){var t;n(null!==(t=JSON.parse(localStorage.getItem("todoLists")))&&void 0!==t?t:[])}),[]),Object(a.useEffect)((function(){localStorage.setItem("todoLists",JSON.stringify(e))}),[e]),Object(m.jsxs)(u.a.Fragment,{children:[e.length>0&&Object(m.jsx)(L,{children:"Mes listes : "}),Object(m.jsx)(I,{children:e.map((function(t,c){return Object(m.jsx)(y,{lists:e,setLists:n,todo:t},"".concat(t.name,"-").concat(c))}))})]})},S=O.a.button(s||(s=Object(b.a)(["\n    width: 60%;\n    display:block;\n    margin: 1rem auto;\n    height:50px;\n    border: none;\n    background: linear-gradient(to bottom right, ",", ",");\n    color: ",";\n    font-size: 1.5rem;\n    cursor: pointer;\n    &:hover{\n        background: linear-gradient(to bottom right, ",", ",");\n    }\n"])),h,x,f,x,h),w=function(t){var e=t.lists,n=t.setLists;return Object(m.jsx)(S,{onClick:function(){return function(){var t=e.length+1;n([].concat(Object(v.a)(e),[{name:"Liste ".concat(t),list:[]}]))}()},children:"Ajouter une liste"})},B=(n(24),O.a.main(o||(o=Object(b.a)(["\n  width: 60%;\n  margin: 2rem auto;\n"])))),F=function(){var t=Object(a.useState)([]),e=Object(d.a)(t,2),n=e[0],c=e[1];return Object(m.jsxs)(u.a.Fragment,{children:[Object(m.jsx)(p,{}),Object(m.jsxs)(B,{children:[Object(m.jsx)(C,{lists:n,setLists:c}),Object(m.jsx)(w,{lists:n,setLists:c})]})]})};j.a.render(Object(m.jsx)(u.a.StrictMode,{children:Object(m.jsx)(F,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.3cf16994.chunk.js.map