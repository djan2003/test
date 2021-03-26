(this["webpackJsonptodo-16"]=this["webpackJsonptodo-16"]||[]).push([[0],{106:function(t,e,n){},107:function(t,e,n){},131:function(t,e,n){"use strict";n.r(e);var a,i,c=n(3),o=n(0),r=n.n(o),s=n(10),l=n.n(s),d=(n(106),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,187)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),c(t),o(t)}))}),u=(n(107),n(175)),j=n(176),b=n(177),O=n(168),f=n(133),h=n(171),T=n(179),m=n(180),p=n(178),g=n(17),v=n(8),x=n(60),k=n(82),I=n.n(k).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"6914c902-ebb2-47bd-8235-de43c8962e59"}}),S=function(){return I.get("todo-lists")},C=function(t){return I.post("todo-lists",{title:t})},E=function(t){return I.delete("todo-lists/".concat(t))},y=function(t,e){return I.put("todo-lists/".concat(t),{title:e})},A=function(t){return I.get("todo-lists/".concat(t,"/tasks"))},D=function(t,e){return I.delete("todo-lists/".concat(t,"/tasks/").concat(e))},L=function(t,e){return I.post("todo-lists/".concat(t,"/tasks"),{title:e})},w=function(t,e,n){return I.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},P=function(t){return I.post("auth/login",t)},F=function(){return I.delete("auth/login")},N=function(){return I.get("auth/me")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(a||(a={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(i||(i={}));var R=function(t,e){t.messages.length?e(H(t.messages[0])):e(H("Some error occurred")),e(z("failed"))},G=function(t,e){e(H(t.message?t.message:"Some error occurred")),e(z("failed"))},M={isLoggedIn:!1},K=function(t){return{type:"login/SET-IS-LOGGED-IN",value:t}},U={status:"idle",error:null,isInitialized:!1},H=function(t){return{type:"APP/SET-ERROR",error:t}},V=function(t){return{type:"APP/SET-ISINITIALIZED",isInitialized:t}},z=function(t){return{type:"APP/SET-STATUS",status:t}},Z=[],q=n(36),B={},Y=function(t,e,n){return function(a,i){var c=i().tasks[n].find((function(e){return e.id===t}));if(c){var o=Object(v.a)({deadline:c.deadline,description:c.description,priority:c.priority,startDate:c.startDate,title:c.title,status:c.status},e);w(n,t,o).then((function(i){if(0===i.data.resultCode){var c=function(t,e,n){return{type:"UPDATE-TASK",model:e,todolistId:n,taskId:t}}(t,e,n);a(c)}else R(i.data,a)})).catch((function(t){G(t,a)}))}else console.warn("task not found in the state")}},J=n(172),_=n(132),$=n(44),Q=n(181),W=n(169),X=r.a.memo((function(t){var e=t.addItem,n=t.disabled,a=void 0!==n&&n;console.log("AddItemForm called");var i=Object(o.useState)(""),r=Object($.a)(i,2),s=r[0],l=r[1],d=Object(o.useState)(null),u=Object($.a)(d,2),j=u[0],b=u[1],f=function(){""!==s.trim()?(e(s),l("")):b("Title is required")};return Object(c.jsxs)("div",{children:[Object(c.jsx)(Q.a,{variant:"outlined",disabled:a,error:!!j,value:s,onChange:function(t){l(t.currentTarget.value)},onKeyPress:function(t){null!==j&&b(null),13===t.charCode&&f()},label:"Title",helperText:j}),Object(c.jsx)(O.a,{color:"primary",onClick:f,disabled:a,children:Object(c.jsx)(W.a,{})})]})})),tt=n(90),et=r.a.memo((function(t){console.log("EditableSpan called");var e=Object(o.useState)(!1),n=Object($.a)(e,2),a=n[0],i=n[1],r=Object(o.useState)(t.value),s=Object($.a)(r,2),l=s[0],d=s[1];return a?Object(c.jsx)(Q.a,{value:l,onChange:function(t){d(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.onChange(l)}}):Object(c.jsx)("span",{onDoubleClick:function(){i(!0),d(t.value)},children:t.value})})),nt=n(170),at=n(183),it=r.a.memo((function(t){var e=Object(o.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),n=Object(o.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?a.Completed:a.New,t.todolistId)}),[t.task.id,t.todolistId]),i=Object(o.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(c.jsxs)("div",{className:t.task.status===a.Completed?"is-done":"",children:[Object(c.jsx)(at.a,{checked:t.task.status===a.Completed,color:"primary",onChange:n}),Object(c.jsx)(et,{value:t.task.title,onChange:i}),Object(c.jsx)(O.a,{onClick:e,children:Object(c.jsx)(nt.a,{})})]},t.task.id)})),ct=r.a.memo((function(t){var e=t.demo,n=void 0!==e&&e,i=Object(tt.a)(t,["demo"]);console.log("Todolist called");var r=Object(g.b)();Object(o.useEffect)((function(){if(!n){var t,e=(t=i.todolist.id,function(e){e(z("loading")),A(t).then((function(n){var a=n.data.items;e(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(a,t)),e(z("succeeded"))}))});r(e)}}),[]);var s=Object(o.useCallback)((function(t){i.addTask(t,i.todolist.id)}),[i.addTask,i.todolist.id]),l=Object(o.useCallback)((function(t){i.changeTodolistTitle(i.todolist.id,t)}),[i.todolist.id,i.changeTodolistTitle]),d=Object(o.useCallback)((function(){return i.changeFilter("all",i.todolist.id)}),[i.todolist.id,i.changeFilter]),u=Object(o.useCallback)((function(){return i.changeFilter("active",i.todolist.id)}),[i.todolist.id,i.changeFilter]),j=Object(o.useCallback)((function(){return i.changeFilter("completed",i.todolist.id)}),[i.todolist.id,i.changeFilter]),b=i.tasks;return"active"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===a.New}))),"completed"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===a.Completed}))),Object(c.jsxs)("div",{children:[Object(c.jsxs)("h3",{children:[Object(c.jsx)(et,{value:i.todolist.title,onChange:l}),Object(c.jsx)(O.a,{onClick:function(){i.removeTodolist(i.todolist.id)},disabled:"loading"===i.todolist.entityStatus,children:Object(c.jsx)(nt.a,{})})]}),Object(c.jsx)(X,{addItem:s,disabled:"loading"===i.todolist.entityStatus}),Object(c.jsx)("div",{children:b.map((function(t){return Object(c.jsx)(it,{task:t,todolistId:i.todolist.id,removeTask:i.removeTask,changeTaskTitle:i.changeTaskTitle,changeTaskStatus:i.changeTaskStatus},t.id)}))}),Object(c.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(c.jsx)(h.a,{variant:"all"===i.todolist.filter?"outlined":"text",onClick:d,color:"default",children:"All"}),Object(c.jsx)(h.a,{variant:"active"===i.todolist.filter?"outlined":"text",onClick:u,color:"primary",children:"Active"}),Object(c.jsx)(h.a,{variant:"completed"===i.todolist.filter?"outlined":"text",onClick:j,color:"secondary",children:"Completed"})]})]})})),ot=n(14),rt=function(t){var e=t.demo,n=void 0!==e&&e,a=Object(g.c)((function(t){return t.todolists})),i=Object(g.c)((function(t){return t.tasks})),r=Object(g.c)((function(t){return t.auth.isLoggedIn})),s=Object(g.b)();Object(o.useEffect)((function(){if(!n&&r){var t=function(t){t(z("loading")),S().then((function(e){t({type:"SET-TODOLISTS",todolists:e.data}),t(z("succeeded"))}))};s(t)}}),[]);var l=Object(o.useCallback)((function(t,e){var n=function(t,e){return function(n){D(e,t).then((function(a){var i=function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(t,e);n(i)}))}}(t,e);s(n)}),[]),d=Object(o.useCallback)((function(t,e){var n=function(t,e){return function(n){n(z("loading")),L(e,t).then((function(t){if(0===t.data.resultCode){var e={type:"ADD-TASK",task:t.data.data.item};n(e),n(z("succeeded"))}else R(t.data,n)})).catch((function(t){G(t,n)}))}}(t,e);s(n)}),[]),u=Object(o.useCallback)((function(t,e,n){var a=Y(t,{status:e},n);s(a)}),[]),j=Object(o.useCallback)((function(t,e,n){var a=Y(t,{title:e},n);s(a)}),[]),b=Object(o.useCallback)((function(t,e){var n={type:"CHANGE-TODOLIST-FILTER",id:e,filter:t};s(n)}),[]),O=Object(o.useCallback)((function(t){var e,n=(e=t,function(t){t(z("loading")),t({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:e,status:"loading"}),E(e).then((function(n){t(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e)),t(z("succeeded"))}))});s(n)}),[]),f=Object(o.useCallback)((function(t,e){var n=function(t,e){return function(n){y(t,e).then((function(a){n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e))}))}}(t,e);s(n)}),[]),h=Object(o.useCallback)((function(t){var e=function(t){return function(e){e(z("loading")),C(t).then((function(t){e({type:"ADD-TODOLIST",todolist:t.data.data.item}),e(z("succeeded"))}))}}(t);s(e)}),[s]);return r?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(J.a,{container:!0,style:{padding:"20px"},children:Object(c.jsx)(X,{addItem:h})}),Object(c.jsx)(J.a,{container:!0,spacing:3,children:a.map((function(t){var e=i[t.id];return Object(c.jsx)(J.a,{item:!0,children:Object(c.jsx)(_.a,{style:{padding:"10px"},children:Object(c.jsx)(ct,{todolist:t,tasks:e,removeTask:l,changeFilter:b,addTask:d,changeTaskStatus:u,removeTodolist:O,changeTaskTitle:j,changeTodolistTitle:f,demo:n})})},t.id)}))})]}):Object(c.jsx)(ot.a,{to:"/login"})},st=n(185),lt=n(182);function dt(t){return Object(c.jsx)(lt.a,Object(v.a)({elevation:6,variant:"filled"},t))}function ut(){var t=Object(g.c)((function(t){return t.app.error})),e=Object(g.b)(),n=function(t,n){"clickaway"!==n&&e(H(null))},a=null!==t;return Object(c.jsx)(st.a,{open:a,autoHideDuration:6e3,onClose:n,children:Object(c.jsx)(dt,{onClose:n,severity:"error",children:t})})}var jt=n(186),bt=n(167),Ot=n(173),ft=n(174),ht=n(89),Tt=function(){var t=Object(g.c)((function(t){return t.auth.isLoggedIn})),e=Object(g.b)(),n=Object(ht.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)?t.password?t.password.length<3&&(e.password="minimum 3 symbol"):e.password="Required":e.email="Invalid email address":e.email="Required",e},onSubmit:function(t){e(function(t){return function(e){e(z("loading")),P(t).then((function(t){0===t.data.resultCode?e(K(!0)):e(R(t.data,e))})).catch((function(t){G(t,e)})).finally((function(){e(z("idle"))}))}}(t)),n.resetForm()}});return t?Object(c.jsx)(ot.a,{to:"/"}):Object(c.jsx)(J.a,{container:!0,justify:"center",children:Object(c.jsx)(J.a,{item:!0,xs:4,children:Object(c.jsx)("form",{onSubmit:n.handleSubmit,children:Object(c.jsxs)(jt.a,{children:[Object(c.jsxs)(bt.a,{children:[Object(c.jsxs)("p",{children:["To log in get registered",Object(c.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:"here"})]}),Object(c.jsx)("p",{children:"or use common test account credentials:"}),Object(c.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(c.jsx)("p",{children:"Password: free"})]}),Object(c.jsxs)(Ot.a,{children:[Object(c.jsx)(Q.a,Object(v.a)({label:"email",margin:"normal"},n.getFieldProps("email"))),n.errors.email&&n.touched.email?Object(c.jsx)("div",{style:{color:"red"},children:n.errors.email}):null,Object(c.jsx)(Q.a,Object(v.a)({type:"password",label:"password",margin:"normal"},n.getFieldProps("password"))),n.errors.password&&n.touched.password?Object(c.jsx)("div",{style:{color:"red"},children:n.errors.password}):null,Object(c.jsx)(ft.a,Object(v.a)({label:"rememberMe",control:Object(c.jsx)(at.a,{})},n.getFieldProps("rememberMe"))),Object(c.jsx)(h.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})};var mt=function(t){t.demo;var e=Object(g.b)(),n=Object(g.c)((function(t){return t.app.status})),a=Object(g.c)((function(t){return t.app.isInitialized})),i=Object(g.c)((function(t){return t.auth.isLoggedIn}));return Object(o.useEffect)((function(){e((function(t){N().then((function(e){0===e.data.resultCode?(t(K(!0)),t(V(!0))):t(V(!0))}))}))}),[]),a?Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(ut,{}),Object(c.jsxs)(j.a,{position:"static",children:[Object(c.jsxs)(b.a,{children:[Object(c.jsx)(O.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(c.jsx)(p.a,{})}),Object(c.jsx)(f.a,{variant:"h6",children:"News"}),i&&Object(c.jsx)(h.a,{color:"inherit",onClick:function(){e((function(t){t(z("loading")),F().then((function(e){0===e.data.resultCode?(t(K(!1)),t(z("succeeded"))):R(e.data,t)})).catch((function(e){G(e,t)}))}))},children:"Log out"})]}),"loading"===n&&Object(c.jsx)(T.a,{})]}),Object(c.jsx)(m.a,{fixed:!0,children:Object(c.jsxs)(ot.d,{children:[Object(c.jsx)(ot.b,{exact:!0,path:"/",render:function(){return Object(c.jsx)(rt,{})}}),Object(c.jsx)(ot.b,{path:"/login",render:function(){return Object(c.jsx)(Tt,{})}}),Object(c.jsx)(ot.b,{path:"/404",render:function(){return Object(c.jsx)("h1",{children:"404: PAGE NOT FOUND"})}}),Object(c.jsx)(ot.a,{path:"*",to:"404"})]})})]}):Object(c.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(c.jsx)(u.a,{})})},pt=n(41),gt=n(88),vt=Object(pt.c)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(v.a)(Object(v.a)({},t),{},Object(q.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!=e.taskId}))));case"ADD-TASK":return Object(v.a)(Object(v.a)({},t),{},Object(q.a)({},e.task.todoListId,[e.task].concat(Object(x.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(v.a)(Object(v.a)({},t),{},Object(q.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(v.a)(Object(v.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(v.a)(Object(v.a)({},t),{},Object(q.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var n=Object(v.a)({},t);return delete n[e.id],n;case"SET-TODOLISTS":var a=Object(v.a)({},t);return e.todolists.forEach((function(t){a[t.id]=[]})),a;case"SET-TASKS":return Object(v.a)(Object(v.a)({},t),{},Object(q.a)({},e.todolistId,e.tasks));default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!=e.id}));case"ADD-TODOLIST":return[Object(v.a)(Object(v.a)({},e.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(x.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(v.a)(Object(v.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(v.a)(Object(v.a)({},t),{},{filter:e.filter}):t}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(v.a)(Object(v.a)({},t),{},{entityStatus:e.status}):t}));case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(v.a)(Object(v.a)({},t),{},{filter:"all",entityStatus:"idle"})}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(v.a)(Object(v.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(v.a)(Object(v.a)({},t),{},{error:e.error});case"APP/SET-ISINITIALIZED":return Object(v.a)(Object(v.a)({},t),{},{isInitialized:e.isInitialized});default:return Object(v.a)({},t)}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"login/SET-IS-LOGGED-IN":return Object(v.a)(Object(v.a)({},t),{},{isLoggedIn:e.value});default:return t}}}),xt=Object(pt.d)(vt,Object(pt.a)(gt.a));window.store=xt;var kt=n(46);l.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(g.a,{store:xt,children:Object(c.jsx)(kt.a,{children:Object(c.jsx)(mt,{})})})}),document.getElementById("root")),d()}},[[131,1,2]]]);
//# sourceMappingURL=main.fbf02315.chunk.js.map