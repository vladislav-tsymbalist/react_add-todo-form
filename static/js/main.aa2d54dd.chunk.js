(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),s=(a(14),a(6)),r=a(2),c=a(7),l=a(1),o=(a(15),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),d=a(9),u=a.n(d),m=a(0),j=function(e){var t=e.user,a=t.email,n=t.name;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},b=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,s=t.user;return Object(m.jsxs)("article",{"data-id":"".concat(a),className:u()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:n}),s&&Object(m.jsx)(j,{user:s})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})};function O(e){return o.find((function(t){return t.id===e}))||null}var f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:O(e.userId)})})),p=function(){var e=Object(l.useState)(f),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(l.useState)(""),c=Object(r.a)(i,2),d=c[0],u=c[1],j=Object(l.useState)(!1),b=Object(r.a)(j,2),p=b[0],x=b[1],v=Object(l.useState)(0),N=Object(r.a)(v,2),y=N[0],S=N[1],I=Object(l.useState)(!1),g=Object(r.a)(I,2),C=g[0],_=g[1],k=function(){var e={id:Math.max.apply(Math,Object(s.a)(a.map((function(e){return e.id}))))+1,title:d,completed:!1,userId:y,user:O(y)};n((function(t){return[].concat(Object(s.a)(t),[e])})),u(""),S(0)};return Object(m.jsxs)("div",{className:"App section box",children:[Object(m.jsx)("h1",{className:"title",children:"Add todo form"}),Object(m.jsxs)("form",{onSubmit:function(e){return e.preventDefault(),x(!d),_(!y),d&&y?k():null},action:"/api/todos",method:"POST",children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{htmlFor:"title",className:"label",children:["Title: ",Object(m.jsx)("input",{value:d,placeholder:"Enter title",id:"title",type:"text","data-cy":"titleInput",onChange:function(e){u(e.target.value),x(!1)},className:"input is-small"})]}),p&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{htmlFor:"users",className:"label",children:["Users: ",Object(m.jsxs)("select",{id:"users","data-cy":"userSelect",value:y,onChange:function(e){S(+e.target.value),_(!1)},className:"select is-small",children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),o.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),C&&Object(m.jsx)("p",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",className:"button",children:"Add"})]}),Object(m.jsx)(h,{todos:a})]})};i.a.render(Object(m.jsx)(p,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.aa2d54dd.chunk.js.map