(window.webpackJsonp=window.webpackJsonp||[]).push([["register"],{"4ffd":function(e,c,t){e.exports=t.p+"img/logo.dc3be0d4.png"},"70ac":function(e,c,t){},"7cdc":function(e,c,t){"use strict";t("70ac")},cbf3:function(e,c,t){"use strict";t.r(c);var n=t("7a23"),a=t("4ffd"),l=t.n(a);Object(n.L)("data-v-b70e06ca");var o={class:"register_wrapper"},i=Object(n.n)("div",{class:"row_div",style:{width:"100%",height:"10px"}},[Object(n.n)("div",{class:"color_block_1"}),Object(n.n)("div",{class:"color_block_2"}),Object(n.n)("div",{class:"color_block_3"})],-1),r=Object(n.n)("div",{class:"title"},"即时通信",-1),s=Object(n.n)("img",{src:l.a,class:"logo"},null,-1),d={class:"register_body"},b=Object(n.n)("label",{for:"phone",class:"user_label"},"手机号码",-1),u=Object(n.n)("label",{for:"nickName",class:"user_label"},"昵称",-1),p={class:"btn_cont"},g=Object(n.p)("注册");Object(n.J)();t("d3b7");var j=t("5502"),O=t("6c02"),m={setup:function(){var e=Object(n.s)().appContext.config.globalProperties,c=(Object(j.b)(),Object(O.d)()),t=Object(n.M)({phone:"",nickName:""});return{data:t,register:function(){var n=e.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});e.$http.post("user/reg",{uid:t.phone,nick_name:t.nickName,avatar:"https://msim-test-1252460681.cos.na-siliconvalley.myqcloud.com/pers/612FA7A3-144E-4978-A75C-9D9277167292.jpeg",verified:!0,gold:!0,gold_exp_time:0,approved:!0,disabled:!1,blocked:!1,hold:!1,deleted:!1}).then((function(t){e.$message.success({message:"注册成功"}),c.push({name:"login"})})).finally((function(){n.close()}))}}}};t("7cdc");m.render=function(e,c,t,a,l,j){var O=Object(n.R)("el-input"),m=Object(n.R)("el-button");return Object(n.I)(),Object(n.m)("div",o,[i,r,s,Object(n.n)("div",d,[b,Object(n.q)(O,{id:"phone",placeholder:"请输入手机号码",modelValue:a.data.phone,"onUpdate:modelValue":c[0]||(c[0]=function(e){return a.data.phone=e}),clearable:"",onKeyup:Object(n.ib)(a.register,["enter"])},null,8,["modelValue","onKeyup"]),u,Object(n.q)(O,{id:"nickName",placeholder:"昵称",modelValue:a.data.nickName,"onUpdate:modelValue":c[1]||(c[1]=function(e){return a.data.nickName=e}),clearable:"",onKeyup:Object(n.ib)(a.register,["enter"])},null,8,["modelValue","onKeyup"]),Object(n.n)("div",p,[Object(n.q)(m,{type:"primary",class:"block_btn",onClick:a.register},{default:Object(n.gb)((function(){return[g]})),_:1},8,["onClick"])])])])},m.__scopeId="data-v-b70e06ca";c.default=m}}]);