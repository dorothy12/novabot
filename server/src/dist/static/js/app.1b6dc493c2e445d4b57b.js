webpackJsonp([1],{"+Gxq":function(t,n,e){"use strict";var a=e("fnDg").a;var r=e("VU/8")(a,null,!1,function(t){e("4veK")},null,null);n.a=r.exports},"4veK":function(t,n){},"9M+g":function(t,n){},"BB++":function(t,n){},"HUt/":function(t,n,e){"use strict";var a=e("qRo1").a;var r=e("VU/8")(a,null,!1,function(t){e("n9mN")},null,null);n.a=r.exports},JCpY:function(t,n,e){"use strict";var a=e("rKsW").a;var r=e("VU/8")(a,null,!1,function(t){e("xBwK")},null,null);n.a=r.exports},JDVb:function(t,n,e){"use strict";var a=e("9NuQ").a;var r=e("VU/8")(a,null,!1,function(t){e("Y9O/")},null,null);n.a=r.exports},Jmt5:function(t,n){},MeBG:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),r=e("e6fC"),o=e("Xxa5"),s=e.n(o),i=e("exGp"),c=e.n(i),u=(e("Jmt5"),e("9M+g"),e("mtWM")),l=e.n(u),d=function(){return l.a.create({baseURL:"http://novabot.me",withCredentials:!0})},h=function(){var t="?";return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).refresh&&(t+="refresh=true"),d().get("self"+t)},p={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"navbar"},[e("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark",fixed:"top"}},[e("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),e("b-navbar-brand",{attrs:{to:"/"}},[t._v("NovaBot")]),t._v(" "),e("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[e("b-navbar-nav",[e("b-nav-item",{attrs:{to:"dashboard"}},[t._v("Dashboard")]),t._v(" "),e("b-nav-item",{attrs:{to:"commands"}},[t._v("Commands")])],1),t._v(" "),t.user?e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-item-dropdown",{attrs:{right:""}},[e("template",{slot:"button-content"},[t._v("\n            "+t._s(t.user.displayName)+"\n          ")]),t._v(" "),e("b-dropdown-item",[e("router-link",{attrs:{to:"/logout"}},[t._v("Signout")])],1)],2)],1):e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-item",{attrs:{to:"login",right:""}},[t._v("Login")])],1)],1)],1)],1)},staticRenderFns:[]},v={name:"App",components:{navbar:e("VU/8")({props:["user"],name:"navbar"},p,!1,null,null,null).exports},data:function(){return{user:null}},mounted:function(){this.getSelf()},methods:{getSelf:function(){var t=this;return c()(s.a.mark(function n(){var e;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h();case 3:e=n.sent,t.user=e.data,n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}},n,t,[[0,7]])}))()}},computed:{shouldDisplay:function(){return(this.user||"/commands"===this.$route.path||"/"===this.$route.path)&&"/login"!==this.$route.path}}},f={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[this.shouldDisplay?n("navbar",{attrs:{user:this.user}}):this._e(),this._v(" "),n("router-view",{attrs:{user:this.user}})],1)},staticRenderFns:[]};var m=e("VU/8")(v,f,!1,function(t){e("OLbe")},null,null).exports,b=e("/ocq"),g={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"landing"},[n("b-button",{attrs:{to:"login"}},[this._v("Get Started")]),this._v(" "),n("b-img",{staticStyle:{"padding-top":"22px"},attrs:{fluid:"",center:"",block:"",src:"static/img/donation.gif"}})],1)},staticRenderFns:[]};var _=e("VU/8")({name:"landing",data:function(){return{}}},g,!1,function(t){e("bl48")},null,null).exports,x=function(){return d().post("bot/join")},w=function(){return d().post("bot/part")},C=function(){return d().get("balance")},y={props:["user"],name:"depositcard",data:function(){return{balance:0,currency:""}},mounted:function(){this.setBalance()},methods:{setBalance:function(){var t=this;return c()(s.a.mark(function n(){var e;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,C();case 3:e=n.sent,t.balance=e.data.amount,t.currency=e.data.currency,n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}},n,t,[[0,8]])}))()}}},k={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"depositcard"},[e("b-card",{attrs:{"bg-variant":"dark","text-variant":"white",title:""}},[e("p",{staticClass:"card-text"},[e("strong",[t._v("Current Balance:")]),t._v(" "+t._s(t.balance)+" "),e("a",{attrs:{href:"https://coinmarketcap.com/currencies/stellar/"}},[t._v(t._s(t.currency))])]),t._v(" "),e("p",[t._v("Deposit some Stellar and use NovaBot "),e("router-link",{attrs:{to:"commands"}},[t._v("commands")]),t._v(" to donate crypto to other streamers.")],1),t._v(" "),e("p",{staticClass:"card-text"},[e("strong",[t._v("Stellar Deposit Address:")]),t._v(" GBTFU5DBANNJII73SF2S5ZOCLYJK73Y3774CYAE36W4SVMRJ6NR5ZEUT")]),t._v(" "),e("p",{staticClass:"card-text"},[e("strong",[t._v("Your Stellar Memo:")]),t._v(" "+t._s(t.user?t.user.id:""))])])],1)},staticRenderFns:[]},E={props:["user"],name:"dashboard",components:{depositcard:e("VU/8")(y,k,!1,null,null,null).exports},data:function(){return{botEnabled:!1}},mounted:function(){this.setBotEnabled()},methods:{joinChannel:function(){var t=this;return c()(s.a.mark(function n(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}},n,t,[[0,5]])}))()},partChannel:function(){var t=this;return c()(s.a.mark(function n(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}},n,t,[[0,5]])}))()},setBotEnabled:function(){var t=this;return c()(s.a.mark(function n(){var e;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h({refresh:!0});case 3:e=n.sent,t.botEnabled=e.data.botEnabled,n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}},n,t,[[0,7]])}))()},onToggleEventHandler:function(t){t.value?this.joinChannel():this.partChannel()}}},B={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"dashboard"},[n("p",{staticStyle:{color:"white"}}),this._v(" "),n("toggle-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{id:"bot-toggle",value:this.botEnabled,color:"green",sync:!0,labels:{checked:"Bot Enabled",unchecked:"Bot Disabled"},width:140,height:40,speed:120,title:"Enable NovaBot on your Twitch channel to help facilitate donations through your chat."},on:{change:this.onToggleEventHandler}}),this._v(" "),n("depositcard",{attrs:{user:this.user}})],1)},staticRenderFns:[]};var S=e("VU/8")(E,B,!1,function(t){e("iCKi")},null,null).exports,U=[{command:"See list of commands.",description:"See the list of NovaBot commands.",example:"!commands"},{command:"Check your balance.",description:"See your current withdrawable balance of cryptocurrencies.",example:"!balance"},{command:"Donate to streamer.",description:"Donate a specified amount of cryptocurrency to the streamer.",example:"!tip 5"},{command:"What is Stellar?",description:"Provides information about Stellar Lumens cryptocurrency.",example:"!stellar"}],N={name:"commands",data:function(){return{commands:U}}},V={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"commands"},[this._m(0),this._v(" "),n("b-table",{attrs:{dark:"",striped:"",hover:"",items:this.commands}})],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("p",{staticStyle:{color:"white"}},[this._v("Commands supported by NovaBot on "),n("a",{attrs:{href:"https://twitch.tv"}},[this._v("Twitch")])])}]},D=e("VU/8")(N,V,!1,null,null,null).exports,R="http://novabot.me/auth/twitch",$="http://novabot.me/logout",F={login:function(){window.location=R},logout:function(){window.location=$},requireAuth:function(t,n,e){h().then(function(t){e()}).catch(function(){e({path:"/login",query:{redirect:t.fullPath}})})},redirectIfAuthed:function(t,n,e){h().then(function(t){e({path:"/dashboard"})}).catch(function(){e()})}},A={name:"login",data:function(){return{}},methods:{login:function(){var t=this;return c()(s.a.mark(function n(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:F.login();case 1:case"end":return t.stop()}},n,t)}))()}}},L={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"login"},[n("b-button",{staticClass:"btn-twitch",attrs:{variant:"secondary"},on:{click:this.login}},[n("b-img",{attrs:{width:"25",height:"25",left:"",src:"static/img/twitch.png"}}),this._v("\n      Login with Twitch\n  ")],1)],1)},staticRenderFns:[]};var J=e("VU/8")(A,L,!1,function(t){e("BB++")},null,null).exports,K={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"notfound"},[this._v("\n  Not Found 404\n")])},staticRenderFns:[]},M=e("VU/8")({name:"notfound"},K,!1,null,null,null).exports;a.default.use(b.a);var T=[{path:"/",name:"Landing",component:_,beforeEnter:F.redirectIfAuthed},{path:"/dashboard",name:"Dashboard",component:S,beforeEnter:F.requireAuth},{path:"/commands",name:"Commands",component:D},{path:"/login",name:"Login",component:J},{path:"/logout",beforeEnter:function(t,n,e){F.logout()}},{path:"*",component:M}],W=new b.a({mode:"history",routes:T}),Y=e("nkUn"),q=e.n(Y);e("MeBG"),a.default.use(r.a),a.default.use(q.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:W,components:{App:m},template:"<App/>"})},OLbe:function(t,n){},"Y9O/":function(t,n){},bl48:function(t,n){},dW2o:function(t,n){},iCKi:function(t,n){},n9mN:function(t,n){},r15W:function(t,n,e){"use strict";var a=e("E9Zr").a;var r=e("VU/8")(a,null,!1,function(t){e("dW2o")},null,null);n.a=r.exports},xBwK:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.1b6dc493c2e445d4b57b.js.map