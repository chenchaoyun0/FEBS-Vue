webpackJsonp([14],{iUDE:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-modal",{attrs:{centered:!0,keyboard:!1,footer:null,width:750,title:"用户信息"},on:{cancel:t.handleCancleClick},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[e("a-layout",{staticClass:"user-info"},[e("a-layout-sider",{staticClass:"user-info-side"},[e("a-avatar",{attrs:{shape:"square",size:115,icon:"user",src:"static/avatar/"+t.userInfoData.avatar}})],1),t._v(" "),e("a-layout-content",{staticClass:"user-content-one"},[e("p",[e("a-icon",{attrs:{type:"user"}}),t._v("账户："+t._s(t.userInfoData.username))],1),t._v(" "),e("p",{attrs:{title:t.userInfoData.roleName}},[e("a-icon",{attrs:{type:"star"}}),t._v("角色："+t._s(t.userInfoData.roleName?t.userInfoData.roleName:"暂无角色"))],1),t._v(" "),e("p",[e("a-icon",{attrs:{type:"skin"}}),t._v("性别："+t._s(t.sex))],1),t._v(" "),e("p",[e("a-icon",{attrs:{type:"phone"}}),t._v("电话："+t._s(t.userInfoData.mobile?t.userInfoData.mobile:"暂未绑定电话"))],1),t._v(" "),e("p",[e("a-icon",{attrs:{type:"mail"}}),t._v("邮箱："+t._s(t.userInfoData.email?t.userInfoData.email:"暂未绑定邮箱"))],1)]),t._v(" "),e("a-layout-content",{staticClass:"user-content-two"},[e("p",[e("a-icon",{attrs:{type:"home"}}),t._v("部门："+t._s(t.userInfoData.deptName?t.userInfoData.deptName:"暂无部门信息"))],1),t._v(" "),e("p",["1"===t.userInfoData.status?e("a-icon",{attrs:{type:"smile"}}):e("a-icon",{attrs:{type:"frown"}}),t._v("状态：\n        "),"0"===t.userInfoData.status?[e("a-tag",{attrs:{color:"red"}},[t._v("锁定")])]:"1"===t.userInfoData.status?[e("a-tag",{attrs:{color:"cyan"}},[t._v("有效")])]:[t._v("\n          "+t._s(t.userInfoData.status)+"\n        ")]],2),t._v(" "),e("p",[e("a-icon",{attrs:{type:"clock-circle"}}),t._v("创建时间："+t._s(t.userInfoData.createTime))],1),t._v(" "),e("p",[e("a-icon",{attrs:{type:"login"}}),t._v("最近登录："+t._s(t.userInfoData.lastLoginTime))],1),t._v(" "),e("p",{attrs:{title:t.userInfoData.description}},[e("a-icon",{attrs:{type:"message"}}),t._v("描述："+t._s(t.userInfoData.description))],1)])],1)],1)},staticRenderFns:[]},n=e("VU/8")({name:"UserInfo",props:{userInfoVisiable:{require:!0,default:!1},userInfoData:{require:!0}},computed:{show:{get:function(){return this.userInfoVisiable},set:function(){}},sex:function(){switch(this.userInfoData.ssex){case"0":return"男";case"1":return"女";case"2":return"保密";default:return this.userInfoData.ssex}}},methods:{handleCancleClick:function(){this.$emit("close")}}},s,!1,function(t){e("uWXJ")},"data-v-7b98c332",null);a.default=n.exports},uWXJ:function(t,a){}});