(window.webpackJsonp=window.webpackJsonp||[]).push([["login"],{"4ffd":function(e,t,o){e.exports=o.p+"img/logo.dc3be0d4.png"},5513:function(e,t,o){},"89a3":function(e,t,o){"use strict";o("5513")},dd1d:function(e,t,o){"use strict";o.r(t);var c=o("7a23"),n=o("4ffd"),r=o.n(n);Object(c.pushScopeId)("data-v-84e7c742");var a={class:"login_wrapper"},l=Object(c.createElementVNode)("div",{class:"row_div",style:{width:"100%",height:"10px"}},[Object(c.createElementVNode)("div",{class:"color_block_1"}),Object(c.createElementVNode)("div",{class:"color_block_2"}),Object(c.createElementVNode)("div",{class:"color_block_3"})],-1),s=Object(c.createElementVNode)("div",{class:"title"},"即时通信",-1),d=Object(c.createElementVNode)("img",{src:r.a,class:"logo"},null,-1),i={class:"login_body"},u=Object(c.createElementVNode)("label",{for:"userID",class:"user_label"},"手机号码",-1),b={class:"btn_cont"},m=Object(c.createTextVNode)("登录"),g={class:"btn_cont"},p=Object(c.createTextVNode)("注册");Object(c.popScopeId)();var j=o("5502"),O=o("6c02"),w={setup:function(){var e=Object(c.getCurrentInstance)().appContext.config.globalProperties,t=Object(j.b)(),o=Object(O.d)(),n=Object(c.reactive)({userId:""});function r(c,r,a){e.$msim.login({wsUrl:c,imToken:r,subAppId:1}).then((function(e){t.commit("clear"),a.close(),window.localStorage.setItem("userId",n.userId),window.localStorage.setItem("wsUrL",c),window.localStorage.setItem("imToken",r),t.commit("setUserId",n.userId),o.push({name:"home"})})).catch((function(t){return a.close(),e.$message.error({message:(null==t?void 0:t.msg)||t})}))}return Object(c.onMounted)((function(){var e=window.localStorage.getItem("userId");e&&(n.userId=e)})),{data:n,register:function(){o.push({name:"register"})},login:function(){if(!n.userId)return e.$message.warning({message:"请输入手机号码"});var o=e.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});n.userId==t.state.curUserId?r(window.localStorage.getItem("wsUrL"),window.localStorage.getItem("imToken"),o):e.$http.post("user/iminit",{uid:n.userId,ctype:1}).then((function(e){r(e.data.url,e.data.token,o)})).catch((function(t){return o.close(),e.$message.error({message:(null==t?void 0:t.msg)||t})}))}}}};o("89a3");w.render=function(e,t,o,n,r,j){var O=Object(c.resolveComponent)("el-input"),w=Object(c.resolveComponent)("el-button");return Object(c.openBlock)(),Object(c.createElementBlock)("div",a,[l,s,d,Object(c.createElementVNode)("div",i,[u,Object(c.createVNode)(O,{id:"userID",placeholder:"请输入手机号码",modelValue:n.data.userId,"onUpdate:modelValue":t[0]||(t[0]=function(e){return n.data.userId=e}),clearable:"",maxlength:"11",onKeyup:Object(c.withKeys)(n.login,["enter"])},null,8,["modelValue","onKeyup"]),Object(c.createElementVNode)("div",b,[Object(c.createVNode)(w,{type:"primary",class:"block_btn",onClick:n.login},{default:Object(c.withCtx)((function(){return[m]})),_:1},8,["onClick"])]),Object(c.createElementVNode)("div",g,[Object(c.createVNode)(w,{class:"block_btn",onClick:n.register},{default:Object(c.withCtx)((function(){return[p]})),_:1},8,["onClick"])])])])},w.__scopeId="data-v-84e7c742";t.default=w}}]);