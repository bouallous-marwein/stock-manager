webpackJsonp([0],[,,,,,,,,,,,,function(t,e,a){"use strict";var s=a(33),n=a.n(s),r={setToken:function(t,e,a){localStorage.setItem("tok",t),localStorage.setItem("iat",e),localStorage.setItem("eat",a)},destroyToken:function(){localStorage.removeItem("tok"),localStorage.removeItem("iat"),localStorage.removeItem("eat")},getToken:function(){var t=localStorage.getItem("tok"),e=localStorage.getItem("iat"),a=localStorage.getItem("eat");return t&&e&&a?Date.now()>parseInt(a)?(this.destroyToken(),null):t:null},loggedIn:function(){return!!this.getToken()},logout:function(){return this.destroyToken(),!0}};e.a=function(t){t.auth=r,n()(t.prototype,{$auth:{get:function(){return t.auth}}})}},function(t,e,a){"use strict";var s=a(4),n=a(100),r=a(82),o=a.n(r),i=a(81),l=a.n(i),c=a(75),u=a.n(c),d=a(76),p=a.n(d),v=a(78),m=a.n(v),f=a(80),g=a.n(f),h=a(79),_=a.n(h),C=a(77),b=a.n(C),x=a(86),y=a.n(x),w=a(85),$=a.n(w),k=a(84),E=a.n(k);s.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"main",redirect:"/home"},{path:"/home",name:"Home",component:o.a},{path:"/auth",name:"Auth",component:p.a,redirect:"/auth/login",children:[{path:"login",name:"Login",component:m.a,meta:{requiresGuest:!0}},{path:"register",name:"Register",component:g.a,meta:{requiresGuest:!0}},{path:"logout",name:"Logout",component:_.a,meta:{requiresGuest:!1}},{path:"forgot",name:"Forgot",component:b.a,meta:{requiresGuest:!0}}]},{path:"/contact",name:"Contact",component:l.a},{path:"/about",name:"About",component:u.a},{path:"/user",name:"User",component:y.a,meta:{requireAuthenticated:!0},redirect:"/user/dashboard",children:[{path:"dashboard",name:"Dashboard",component:E.a},{path:"settings",name:"Settings",component:$.a}]}]})},,,function(t,e,a){function s(t){a(68)}var n=a(0)(a(19),a(97),s,null,null);t.exports=n.exports},,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(83),n=a.n(s);e.default={name:"app",components:{navbar:n.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"about",data:function(){return{}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Authentication",mounted:function(){this.$auth.loggedIn()}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"forgot",data:function(){return{errors:null,email:""}},methods:{reset:function(){this.$http.post("/auth/forgot",{email:this.email}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"login",data:function(){return{errors:null,user:{username:"",password:""}}},methods:{login:function(){this.$http.post("/auth/login",this.user).then(function(t){if(!t.data.suc)throw"error";var e=t.body,a=JSON.parse(window.atob(e.tok.split(".")[1])),s=a.exp,n=a.iat;this.$auth.setToken(e.tok,n,s),this.$emit("update:auth",this.$auth.loggedIn()),this.$router.push("/user/dashboard")})}},mounted:function(){this.$auth.loggedIn()}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Logout",methods:{logout:function(){this.$auth.logout(),this.$router.push("/")}},created:function(){this.logout()},mounted:function(){this.$auth.loggedIn()}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"register",data:function(){return{user:{firstname:"",lastname:"",username:"",email:"",password:""}}},methods:{register:function(){this.$http.post("/auth/register",this.user).then(function(t){console.log(t),this.$router.push("/auth/login")}).catch(function(t){this.errors=t.data.error})}},mounted:function(){this.$auth.loggedIn()}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"contact",data:function(){return{}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"home",data:function(){return{user:null,msg:"Page d'accueil"}},mounted:function(){}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Navbar",props:["auth"],methods:{me:function(){var t=localStorage.getItem("tok"),e=this.extract(t);return JSON.parse(window.atob(e)).usr},extract:function(t){return t.split(".")[1]}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Dashboard"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"settings"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"user-home",mounted:function(){this.$auth.loggedIn()}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(4),n=a(18),r=a(16),o=a.n(r),i=a(13),l=a(15),c=a.n(l),u=a(17),d=a.n(u),p=a(12);s.a.config.productionTip=!1,s.a.use(n.a),s.a.use(p.a),s.a.http.interceptors.push(function(t,e){if("/"===t.url[0]){t.url="https://appstree.ovh"+t.url;var a=s.a.auth.getToken();a&&t.headers.set("Authorization","Bearer "+a)}e(function(t){422===t.status&&t.body.errors.forEach(function(t){alertify.error(t)})})}),i.a.beforeEach(function(t,e,a){t.matched.some(function(t){return t.meta.requiresGuest})&&s.a.auth.loggedIn()?a({path:"/user/dashboard"}):t.matched.some(function(t){return t.meta.requireAuthenticated})&&!s.a.auth.loggedIn()?a({path:"/auth/login"}):a()}),window.jQuery=window.$=c.a,a(14),s.a.use(d.a,{name:"vls"}),s.a.config.productionTip=!1;window.location.protocol,window.location.host;new s.a({el:"#app",router:i.a,template:"<App/>",components:{App:o.a}})},,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,a){t.exports=a.p+"assets/img/82b9c7a5a3f405032b1d.png"},,,,function(t,e,a){function s(t){a(62)}var n=a(0)(a(20),a(91),s,"data-v-24f9e625",null);t.exports=n.exports},function(t,e,a){function s(t){a(70)}var n=a(0)(a(21),a(99),s,"data-v-6bc93777",null);t.exports=n.exports},function(t,e,a){function s(t){a(59)}var n=a(0)(a(22),a(88),s,"data-v-0bb17cbc",null);t.exports=n.exports},function(t,e,a){function s(t){a(63)}var n=a(0)(a(23),a(92),s,"data-v-271ff18c",null);t.exports=n.exports},function(t,e,a){function s(t){a(61)}var n=a(0)(a(24),a(90),s,null,null);t.exports=n.exports},function(t,e,a){function s(t){a(64)}var n=a(0)(a(25),a(93),s,"data-v-3f2a0f62",null);t.exports=n.exports},function(t,e,a){function s(t){a(69)}var n=a(0)(a(26),a(98),s,"data-v-5ed47590",null);t.exports=n.exports},function(t,e,a){function s(t){a(58)}var n=a(0)(a(27),a(87),s,"data-v-07c1b177",null);t.exports=n.exports},function(t,e,a){function s(t){a(60)}var n=a(0)(a(28),a(89),s,"data-v-1afc7828",null);t.exports=n.exports},function(t,e,a){function s(t){a(67)}var n=a(0)(a(29),a(96),s,null,null);t.exports=n.exports},function(t,e,a){function s(t){a(65)}var n=a(0)(a(30),a(94),s,null,null);t.exports=n.exports},function(t,e,a){function s(t){a(66)}var n=a(0)(a(31),a(95),s,"data-v-46870d47",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"col-xs-12 col-md-6",attrs:{id:"home"}},[a("div",{staticClass:"panel panel-info",attrs:{id:"content-panel"}},[a("div",{staticClass:"panel-body"},[a("h3",[t._v("Page d'accueil")]),t._v(" "),a("p",[t._v("Exemple de projet realisé avec Nodejs/MongoDB (Backend) et VueJS (frontend)")])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel panel-info",attrs:{id:"forgot-panel"}},[a("div",{staticClass:"panel-body"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.errors,expression:"errors"}],staticClass:"alert alert-danger col-sm-12",attrs:{id:"login-alert"}},t._l(t.errors,function(e,s){return a("span",{key:[s]},[t._v("\n                "+t._s(e.properties.path)+" : "+t._s(e.properties.type)+"\n            ")])})),t._v(" "),a("form",{staticClass:"form-horizontal",attrs:{id:"forgotform",role:"form"}},[a("div",{staticClass:"input-group"},[t._m(0),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{id:"forgot-email",type:"text",name:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group",attrs:{id:"form-btn"}},[a("div",{staticClass:"col-sm-12 controls"},[a("a",{staticClass:"col-xs-12 btn btn-success",attrs:{id:"btn-login"},on:{click:t.reset}},[t._v("Reset")])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"col-md-12 control"},[a("div",{attrs:{id:"form-link"}},[a("p",[t._v("Vous avez deja un compte ? "),a("router-link",{attrs:{to:"/auth/login"}},[t._v("connectez-vous ici!")])],1)])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"input-group-addon"},[a("i",{staticClass:"glyphicon glyphicon-envelope"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-default",attrs:{id:"navigation"}},[a("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),a("div",{staticClass:"navbar-collapse collapse",attrs:{id:"navbar"}},[a("ul",{staticClass:"nav navbar-nav"},[a("li",{staticClass:"nav navbar-item"},[a("router-link",{staticClass:"router-link",attrs:{to:"/home","data-toggle":"collapse","data-target":".in"}},[t._v("Home")])],1),t._v(" "),a("li",{staticClass:"nav navbar-item"},[a("router-link",{staticClass:"router-link",attrs:{to:"/about","data-toggle":"collapse","data-target":".in"}},[t._v("About")])],1),t._v(" "),a("li",{staticClass:"nav navbar-item"},[a("router-link",{staticClass:"router-link",attrs:{to:"/contact","data-toggle":"collapse","data-target":".in"}},[t._v("Contact")])],1)]),t._v(" "),a("ul",{staticClass:"nav navbar-nav navbar-right"},[t.auth?a("li",{staticClass:"dropdown"},[a("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v(t._s(t.me())+" "),a("span",{staticClass:"caret"})]),t._v(" "),a("ul",{staticClass:"dropdown-menu"},[a("li",[a("router-link",{attrs:{to:"/user/dashboard","data-toggle":"collapse","data-target":".in"}},[t._v("Dashboard")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/user/settings","data-toggle":"collapse","data-target":".in"}},[t._v("Settings")])],1),t._v(" "),a("li",{staticClass:"divider",attrs:{role:"separator"}}),t._v(" "),a("li",[a("router-link",{attrs:{to:"/auth/logout","data-toggle":"collapse","data-target":".in"}},[t._v("Logout")])],1)])]):a("li",{staticClass:"nav navbar-item"},[a("router-link",{attrs:{to:"/auth/login","data-toggle":"collapse","data-target":".in"}},[t._v("Login")])],1)])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-header"},[a("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"}},[a("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),a("span",{staticClass:"icon-bar"}),t._v(" "),a("span",{staticClass:"icon-bar"}),t._v(" "),a("span",{staticClass:"icon-bar"})]),t._v(" "),a("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v("HDS")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"col-xs-12 col-md-6",attrs:{id:"about"}},[a("div",{staticClass:"panel panel-info",attrs:{id:"content-panel"}},[a("div",{staticClass:"panel-body"},[a("h3",[t._v("About")]),t._v(" "),a("p",[t._v("About Page")])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel panel-info",attrs:{id:"login-panel"}},[a("div",{staticClass:"panel-body"},[a("transition",{attrs:{name:"fade"}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.errors,expression:"errors"}],staticClass:"alert alert-danger col-sm-12",attrs:{id:"login-alert"}},t._l(t.errors,function(e,s){return a("span",{key:[s]},[t._v("\n                "+t._s(e.properties.path)+" : "+t._s(e.properties.type)+"\n            ")])})),t._v(" "),a("form",{staticClass:"form-horizontal",attrs:{id:"loginform",role:"form"}},[a("div",{staticClass:"input-group"},[t._m(0),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{id:"login-username",type:"text",name:"username",placeholder:"Username"},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-group"},[t._m(1),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{id:"login-password",type:"password",name:"password",placeholder:"Password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group",attrs:{id:"form-btn"}},[a("div",{staticClass:"col-sm-12 controls"},[a("a",{staticClass:"col-xs-12 btn btn-success",attrs:{id:"btn-login"},on:{click:t.login}},[t._v("Login")])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"col-md-12 control"},[a("div",{attrs:{id:"form-link pull-left"}},[a("p",[t._v("Vous n'avez pas de compte ? "),a("router-link",{attrs:{to:"/auth/register"}},[t._v("Enregistrez vous ici!")])],1),t._v(" "),a("p",[a("router-link",{staticClass:"col-xs-12 pull-left",attrs:{to:"/auth/forgot"}},[t._v("Mot de passe oublié?")])],1)])])])])],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"input-group-addon"},[a("i",{staticClass:"glyphicon glyphicon-user"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"input-group-addon"},[a("i",{staticClass:"glyphicon glyphicon-lock"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel panel-info",attrs:{id:"register-panel"}},[a("div",{staticClass:"panel-body"},[a("div",{staticClass:"alert alert-danger col-sm-12",staticStyle:{display:"none"},attrs:{id:"register-alert"}}),t._v(" "),a("form",{staticClass:"form-horizontal",attrs:{id:"registerform",role:"form"}},[a("div",{staticClass:"input-group"},[t._m(0),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"text",name:"email",placeholder:"Email Address"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-group"},[t._m(1),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.firstname,expression:"user.firstname"}],staticClass:"form-control",attrs:{type:"text",name:"firstname",placeholder:"First Name"},domProps:{value:t.user.firstname},on:{input:function(e){e.target.composing||t.$set(t.user,"firstname",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-group"},[t._m(2),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.lastname,expression:"user.lastname"}],staticClass:"form-control",attrs:{type:"text",name:"lastname",placeholder:"Last Name"},domProps:{value:t.user.lastname},on:{input:function(e){e.target.composing||t.$set(t.user,"lastname",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-group"},[t._m(3),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"text",name:"username",placeholder:"Username"},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-group"},[t._m(4),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"col-sm-12 controls"},[a("a",{staticClass:"col-xs-12 btn btn-success",attrs:{id:"btn-register"},on:{click:t.register}},[t._v("Register")])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"col-md-12 control"},[a("div",{attrs:{id:"form-link"}},[a("p",[t._v("Vous avez deja un compte ? "),a("router-link",{attrs:{to:"/auth/login"}},[t._v("connectez-vous ici!")])],1),t._v(" "),a("p",[a("router-link",{staticClass:"col-xs-12 pull-left",attrs:{to:"/auth/forgot"}},[t._v("Mot de passe oublié?")])],1)])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"input-group-addon"},[a("i",{staticClass:"glyphicon glyphicon-envelope"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"input-group-addon"},[a("i",{staticClass:"glyphicon glyphicon-user"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"input-group-addon"},[a("i",{staticClass:"glyphicon glyphicon-user"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"input-group-addon"},[a("i",{staticClass:"glyphicon glyphicon-user"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"input-group-addon"},[a("i",{staticClass:"glyphicon glyphicon-lock"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("h3",[t._v("Settings")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content",attrs:{id:"user"}},[a("h3",[t._v("User")]),t._v(" "),a("div",{staticClass:"col-xs-12 col-md-4",attrs:{id:"content"}},[a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("h3",[t._v("Dashboard")])},staticRenderFns:[]}},function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-container",attrs:{id:"app"}},[a("navbar"),t._v(" "),t._m(0),t._v(" "),a("router-view",{staticClass:"vue-container",attrs:{class:"vue-container"}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("img",{attrs:{src:a(71)}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"col-xs-12 col-md-6",attrs:{id:"about"}},[a("div",{staticClass:"panel panel-info",attrs:{id:"content-panel"}},[a("div",{staticClass:"panel-body"},[a("h3",[t._v("Contact")]),t._v(" "),a("p",[t._v("contact Page")])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content",attrs:{id:"auth"}},[a("div",{staticClass:"col-xs-12 col-md-4"},[a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1)])},staticRenderFns:[]}},,,function(t,e){}],[32]);