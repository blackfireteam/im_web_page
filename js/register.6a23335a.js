(window.webpackJsonp=window.webpackJsonp||[]).push([["register"],{1895:function(e,t,c){"use strict";c("5043")},"4ffd":function(e,t,c){e.exports=c.p+"img/logo.dc3be0d4.png"},5043:function(e,t,c){},cbf3:function(e,t,c){"use strict";c.r(t);var o=c("7a23"),n=c("4ffd"),a=c.n(n);Object(o.pushScopeId)("data-v-6ebb1466");var l={class:"register_wrapper"},r=Object(o.createElementVNode)("div",{class:"row_div",style:{width:"100%",height:"10px"}},[Object(o.createElementVNode)("div",{class:"color_block_1"}),Object(o.createElementVNode)("div",{class:"color_block_2"}),Object(o.createElementVNode)("div",{class:"color_block_3"})],-1),d=Object(o.createElementVNode)("div",{class:"title"},"即时通信",-1),i=Object(o.createElementVNode)("img",{src:a.a,class:"logo"},null,-1),s={class:"register_body"},b=Object(o.createElementVNode)("label",{for:"phone",class:"user_label"},"手机号码",-1),p=Object(o.createElementVNode)("label",{for:"nickName",class:"user_label"},"昵称",-1),u={class:"btn_cont"},m=Object(o.createTextVNode)("注册");Object(o.popScopeId)();c("d3b7");var g=c("6c02"),j={setup:function(){var e=Object(o.getCurrentInstance)().appContext.config.globalProperties,t=Object(g.d)(),c=Object(o.reactive)({phone:"",nickName:""});return{data:c,register:function(){var o=e.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});e.$http.post("user/reg",{uid:c.phone,nick_name:c.nickName,avatar:"https://msim-test-1252460681.cos.na-siliconvalley.myqcloud.com/pers/612FA7A3-144E-4978-A75C-9D9277167292.jpeg",gender:1,verified:!0,gold:!0,gold_exp_time:0,approved:!0,disabled:!1,blocked:!1,hold:!1,deleted:!1}).then((function(c){e.$message.success({message:"注册成功"}),t.push({name:"login"})})).finally((function(){o.close()}))}}}};c("1895");j.render=function(e,t,c,n,a,g){var j=Object(o.resolveComponent)("el-input"),O=Object(o.resolveComponent)("el-button");return Object(o.openBlock)(),Object(o.createElementBlock)("div",l,[r,d,i,Object(o.createElementVNode)("div",s,[b,Object(o.createVNode)(j,{id:"phone",placeholder:"请输入手机号码",modelValue:n.data.phone,"onUpdate:modelValue":t[0]||(t[0]=function(e){return n.data.phone=e}),clearable:"",onKeyup:Object(o.withKeys)(n.register,["enter"])},null,8,["modelValue","onKeyup"]),p,Object(o.createVNode)(j,{id:"nickName",placeholder:"昵称",modelValue:n.data.nickName,"onUpdate:modelValue":t[1]||(t[1]=function(e){return n.data.nickName=e}),clearable:"",onKeyup:Object(o.withKeys)(n.register,["enter"])},null,8,["modelValue","onKeyup"]),Object(o.createElementVNode)("div",u,[Object(o.createVNode)(O,{type:"primary",class:"block_btn",onClick:n.register},{default:Object(o.withCtx)((function(){return[m]})),_:1},8,["onClick"])])])])},j.__scopeId="data-v-6ebb1466";t.default=j}}]);