(this["webpackJsonptodo-week-1"]=this["webpackJsonptodo-week-1"]||[]).push([[0],{16:function(e,t,a){},28:function(e,t,a){e.exports=a(40)},33:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(25),o=a.n(s),c=(a(33),a(34),a(8)),l=a(9),i=a(11),u=a(10),m=(a(16),a(15)),h=a(41),p=a(42),d=a(43),f=a(44),g=a(45),y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.changeHandler=function(t){e.setState(Object(m.a)({},t.target.name,t.target.value))},e.submitHandler=function(t){t.preventDefault(),e.props.submitHandler(e.state)},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement(h.a,{className:"login-form",onSubmit:this.submitHandler},r.a.createElement("h1",{className:"text-center"},"Create an Account"),r.a.createElement(p.a,null,"Please enter a different username"===this.props.error?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{invalid:!0,type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.changeHandler})," ",r.a.createElement(f.a,null,"Sorry! That name is already taken")):r.a.createElement(d.a,{type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.changeHandler})),r.a.createElement(p.a,null,r.a.createElement(d.a,{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.changeHandler})),r.a.createElement("br",null),r.a.createElement("div",{className:"buttons-form"},r.a.createElement(g.a,{color:"success",type:"submit",value:"Sign Up"},"Sign Up"))))}}]),a}(r.a.Component),v=a(27),E=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={categories:[]},e.fetchUser=function(){var t=localStorage.getItem("token");fetch("http://localhost:3000/api/v1/profile",{method:"GET",headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).then((function(t){e.setState({categories:t.user.categories.sort((function(e,t){return e.id-t.id}))})}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.mounted=!0,!0===this.mounted&&this.fetchUser()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this,t=this.state.categories.map((function(t,a){return r.a.createElement("button",{className:e.props.selectedState===t.name?"selected":null,onClick:function(t){return e.props.selectedCategory(t)},key:a}," ",t.name," ")}));return r.a.createElement("div",{className:"categories"},r.a.createElement("h5",null,"Category Filters"),t)}}]),a}(r.a.Component),b=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"task"},r.a.createElement("div",{className:"label"},this.props.category),r.a.createElement("div",{className:"text"},this.props.text),r.a.createElement("button",{className:"delete",onClick:function(t){return e.props.deleteTask(e.props.task)}},"X"))}}]),a}(r.a.Component),k=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={task:"",categoryArray:[],category:"",user:[]},e.fetchCategories=function(){var t=localStorage.getItem("token");fetch("http://localhost:3000/api/v1/profile",{method:"GET",headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).then((function(t){e.setState({user:t.user,categoryArray:t.user.categories.sort((function(e,t){return e.id-t.id}))})}))},e.submitHandler=function(t){t.preventDefault();var a={text:e.state.task,category:e.state.category,user_id:e.state.user.id};e.props.addTask(a)},e.changeHandler=function(t,a){e.setState(Object(m.a)({},t.target.name,t.target.value))},e.selectCategory=function(){return e.state.categoryArray.map((function(e){return e.name})).slice(1,5).map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})).slice(0,4)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.mounted=!0,!0===this.mounted&&this.fetchCategories()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"new-task-form",onSubmit:function(t){return e.submitHandler(t)}},r.a.createElement("input",{onChange:function(t){return e.changeHandler(t)},name:"task",value:this.state.task,placeholder:"Enter a New Task",type:"text"}),r.a.createElement("select",{onChange:function(t){return e.changeHandler(t)},name:"category",defaultValue:"first"},r.a.createElement("option",{value:"first",disabled:!0},"Category"),this.selectCategory()),r.a.createElement("input",{type:"submit"}))}}]),a}(r.a.Component),j=function(e){return r.a.createElement("div",{className:"tasks"},r.a.createElement("h5",null,"Tasks"),r.a.createElement(k,{addTask:e.addTask}),e.tasks.map((function(t,a){return r.a.createElement(b,{key:a,task:t,category:t.category,text:t.text,deleteTask:e.deleteTask})})))},C=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={selectedCategory:"All",tasks:[],user:!1},e.filterTasks=function(){return"All"===e.state.selectedCategory?e.state.tasks:e.state.tasks.filter((function(t){return t.category===e.state.selectedCategory}))},e.selectedCategory=function(t){var a=t.target.innerText;e.setState({selectedCategory:a})},e.addTask=function(t){fetch("http://localhost:3000/tasks",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){return e.setState({tasks:[].concat(Object(v.a)(e.state.tasks),[t])})}))},e.deleteTask=function(t){var a=e.state.tasks.filter((function(e){return!(e.text===t.text&&e.category===t.category)}));e.setState({tasks:a}),fetch("http://localhost:3000/tasks/".concat(t.id),{method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;if(this.mounted=!0,!0===this.mounted){var t=localStorage.getItem("token");null!==t?fetch("http://localhost:3000/api/v1/profile",{method:"GET",headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).then((function(t){return e.setState({user:t.user,tasks:t.user.tasks})}),(function(){return e.props.history.push("/")})):this.props.history.push("/login")}}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("br",null),r.a.createElement(E,{user:this.state.user,selectedState:this.state.selectedCategory,selectedCategory:this.selectedCategory}),r.a.createElement(j,{user:this.state.user,addTask:this.addTask,deleteTask:this.deleteTask,category:this.state.selectedCategory,tasks:this.filterTasks()}))}}]),a}(r.a.Component),O=a(6),S=a(14),w=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.changeHandler=function(t){e.setState(Object(m.a)({},t.target.name,t.target.value))},e.submitHandler=function(t){t.preventDefault(),e.props.submitHandler(e.state)},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement(h.a,{className:"login-form",onSubmit:this.submitHandler},r.a.createElement("h2",{className:"text-center"},"Community ToDo List"),r.a.createElement(p.a,null,"Invalid username or password"===this.props.error?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{invalid:!0,type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.changeHandler})," ",r.a.createElement(f.a,null,"Incorrect Username or Password.")):r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.changeHandler}))),r.a.createElement(p.a,null,"Invalid username or password"===this.props.error?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{invalid:!0,type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.changeHandler})," ",r.a.createElement(f.a,null,"Incorrect Username or Password.")):r.a.createElement(d.a,{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.changeHandler})),r.a.createElement("br",null),r.a.createElement("div",{className:"buttons-form"},r.a.createElement(g.a,{color:"primary",type:"submit",value:"Login"},"Login"),r.a.createElement(S.b,{to:"/signup"},r.a.createElement(g.a,{color:"warning"},"Register")))))}}]),a}(r.a.Component),H=a(46),T=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={categories:[],id:"",name:"",user:[],task:[]},e.changeHandler=function(t){e.setState({name:t.target.value})},e.editCategory=function(t){var a=t.id,n=t.name,r=t.user;e.setState({id:a,name:n,user:r})},e.submitHandler=function(t){t.preventDefault();var a=e.state.id,n=e.state.name,r={method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:n})};fetch("http://localhost:3000/categories/".concat(a),r).then((function(){return e.fetchCategories()}))},e.fetchCategories=function(){var t=localStorage.getItem("token");fetch("http://localhost:3000/api/v1/profile",{method:"GET",headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).then((function(t){e.setState({categories:t.user.categories.sort((function(e,t){return e.id-t.id}))})}))},e.categoryMap=function(){return e.state.categories.map((function(t){return r.a.createElement("span",{className:"category-span",key:t.id,value:t.name,onClick:function(){return e.editCategory(t)},name:"category"},t.name)})).slice(1,5)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchCategories()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"text-center"},this.categoryMap()),r.a.createElement("br",null),r.a.createElement(h.a,{className:"category-form",onSubmit:this.submitHandler},r.a.createElement(p.a,null,r.a.createElement(d.a,{value:this.state.name,onChange:this.changeHandler,placeholder:"Selected Category",name:"category"}),r.a.createElement("div",{className:"text-center"},r.a.createElement(H.a,{style:{color:"rgb(2, 16, 139)"}},"Click on a Category to Begin Editing"))),r.a.createElement("div",{className:"text-center"},r.a.createElement("br",null),r.a.createElement(g.a,{type:"submit"},"Submit Changes"))))}}]),a}(r.a.Component),N=a(47),x=a(48),A=a(49),I=a(50),U=a(51),D=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N.a,{expand:"md"},r.a.createElement(x.a,{pills:!0},r.a.createElement("div",{className:"logout"},r.a.createElement(A.a,{onClick:this.props.clickHandler},r.a.createElement("h6",null,r.a.createElement(I.a,{color:"danger"},r.a.createElement(U.a,{style:{color:"white"}},"Logout"))))),r.a.createElement("br",null),r.a.createElement(A.a,null,r.a.createElement(U.a,{tag:S.b,className:"nav-link",to:"/",activeClassName:"active",exact:!0,path:"/"},"My Tasks")),r.a.createElement(A.a,null,r.a.createElement(U.a,{tag:S.b,className:"nav-link",to:"/edit",activeClassName:"active",exact:!0,path:"/edit"},"Change Categories")))))}}]),a}(r.a.Component),P=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={user:void 0,error:""},e.signupHandler=function(t){fetch("http://localhost:3000/api/v1/users",{method:"POST",headers:{accepts:"application/json","content-type":"application/json"},body:JSON.stringify({user:t})}).then((function(e){return e.json()})).then((function(t){"failed to create user"===t.error?e.setState({error:"Please enter a different username"}):(e.setState({error:""}),e.props.history.push("/login"))}))},e.loginHandler=function(t){fetch("http://localhost:3000/api/v1/login",{method:"POST",headers:{accepts:"application/json","content-type":"application/json"},body:JSON.stringify({user:t})}).then((function(e){return e.json()})).then((function(t){void 0!==t.jwt?(localStorage.setItem("token",t.jwt),e.setState({user:t.user,error:""},(function(){return e.props.history.push("/")}))):"Invalid username or password"===t.message&&e.setState({error:"Invalid username or password"})}))},e.logoutHandler=function(){localStorage.removeItem("token"),e.props.history.push("/login"),e.setState({user:!1})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("token");null!==t?fetch("http://localhost:3000/api/v1/profile",{method:"GET",headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).then((function(t){return e.setState({user:t.user})}),(function(){return e.props.history.push("/")})):this.props.history.push("/login")}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this;return r.a.createElement(O.c,null,this.state.user?r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement(D,{clickHandler:this.logoutHandler,user:this.state.user}),r.a.createElement("br",null),r.a.createElement(O.a,{exact:!0,path:"/",component:C}),r.a.createElement(O.a,{exact:!0,path:"/edit",render:function(){return r.a.createElement(T,null)}})):r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{exact:!0,path:"/signup",render:function(){return r.a.createElement(y,{error:e.state.error,submitHandler:e.signupHandler})}}),r.a.createElement(O.a,{exact:!0,path:"/login",render:function(){return r.a.createElement(w,{error:e.state.error,submitHandler:e.loginHandler})}})))}}]),a}(r.a.Component),F=Object(O.f)(P);o.a.render(r.a.createElement(S.a,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.7bcf802b.chunk.js.map