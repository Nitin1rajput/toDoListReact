(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{14:function(t,e,o){},15:function(t,e,o){"use strict";o.r(e);var c=o(0),s=o(1),n=o(7),a=o.n(n),l=o(3),i=(o(14),o(8)),d=function(t){var e=t.setInputText,o=t.setTodos,s=t.todos,n=t.inputText,a=t.setStatus;return Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{value:n,onChange:function(t){e(t.target.value)},type:"text",className:"todo-input"}),Object(c.jsx)("button",{onClick:function(t){t.preventDefault(),o([].concat(Object(i.a)(s),[{text:n,completed:!1,id:Date.now()}])),e("")},className:"todo-button",type:"submit",children:Object(c.jsx)("i",{className:"fas fa-plus-square"})}),Object(c.jsx)("div",{className:"select",children:Object(c.jsxs)("select",{onChange:function(t){a(t.target.value)},name:"todos",className:"filter-todo",children:[Object(c.jsx)("option",{value:"all",children:"All"}),Object(c.jsx)("option",{value:"completed",children:"Completed"}),Object(c.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},r=o(6),u=function(t){var e=t.todo,o=t.setTodos,s=t.todos;return Object(c.jsxs)("div",{className:"todo",children:[Object(c.jsx)("li",{className:"todo-item ".concat(e.completed&&"completed"),children:e.text}),Object(c.jsx)("button",{onClick:function(){o(s.map((function(t){return t.id===e.id?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t})))},className:"complete-btn",children:Object(c.jsx)("i",{className:"fas fa-check"})}),Object(c.jsx)("button",{onClick:function(){o(s.filter((function(t){return t.id!==e.id})))},className:"trash-btn",children:Object(c.jsx)("i",{className:"fas fa-trash"})})]})},j=function(t){var e=t.todos,o=t.setTodos,s=t.filteredTodos;return Object(c.jsx)("div",{className:"todo-container",children:Object(c.jsx)("ul",{className:"todo-list",children:s.map((function(t){return Object(c.jsx)(u,{todos:e,setTodos:o,todo:t},t.id)}))})})};var b=function(){var t=Object(s.useState)(""),e=Object(l.a)(t,2),o=e[0],n=e[1],a=Object(s.useState)([]),i=Object(l.a)(a,2),r=i[0],u=i[1],b=Object(s.useState)("all"),f=Object(l.a)(b,2),m=f[0],O=f[1],p=Object(s.useState)([]),x=Object(l.a)(p,2),h=x[0],v=x[1];Object(s.useEffect)((function(){g()}),[]),Object(s.useEffect)((function(){!function(){switch(m){case"completed":v(r.filter((function(t){return!0===t.completed})));break;case"uncompleted":v(r.filter((function(t){return!1===t.completed})));break;default:v(r)}}(),N()}),[r,m]);var N=function(){return localStorage.setItem("todos",JSON.stringify(r))},g=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));u(t)}};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{children:Object(c.jsx)("h1",{children:"Nitin To Do List"})}),Object(c.jsx)(d,{inputText:o,todos:r,setTodos:u,setInputText:n,setStatus:O}),Object(c.jsx)(j,{filteredTodos:h,setTodos:u,todos:r})]})};a.a.render(Object(c.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3cd2a900.chunk.js.map