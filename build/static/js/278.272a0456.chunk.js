"use strict";(self.webpackChunkhomWork_08_phonebook_login=self.webpackChunkhomWork_08_phonebook_login||[]).push([[278],{7278:function(e,n,t){t.r(n),t.d(n,{default:function(){return f},initialState:function(){return h},initialTypes:function(){return p},reducer:function(){return m}});var a=t(885),r=t(8683),i=t(4298),s=t(6274),o=t(2791),l="Login_form__h9FtG",u=t(6434),d=t(8652),c=t(3329),h={email:"",password:""},p={email:"email",password:"password",reset:"reset"};function m(e,n){var t=n.type,a=n.payload;switch(t){case p.email:return(0,r.Z)((0,r.Z)({},e),{},{email:a});case p.password:return(0,r.Z)((0,r.Z)({},e),{},{password:a});case p.reset:return h}}var f=function(){var e=(0,u.I0)(),n=(0,o.useReducer)(m,h),t=(0,a.Z)(n,2),r=t[0],p=t[1],f=r.email,v=r.password,g=(0,u.v9)((function(e){return e.authorization})),b=g.authLoader,w=function(e){var n=e.target,t=n.name,a=n.value;p({type:t,payload:a})};return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("form",{className:l,onSubmit:function(n){n.preventDefault(),e((0,d.vx)(r)),p({type:"reset"})},children:[(0,c.jsxs)("label",{children:[(0,c.jsx)("h3",{children:"Email"}),(0,c.jsx)("input",{type:"tel",name:"email",value:f,title:"Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:w})]}),(0,c.jsxs)("label",{children:[(0,c.jsx)("h3",{children:"Password"}),(0,c.jsx)("input",{type:"tel",name:"password",value:v,title:"Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:w})]}),b?(0,c.jsx)(i.gy,{height:"27",width:"27",color:"red",ariaLabel:"loading"}):(0,c.jsx)(s.Z,{title:"Login",type:"submit"})]})})}},6274:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(5671),r=t(3144),i=t(9340),s=t(5716),o=t(2791),l="Button_button__9lDDD",u=t(4298),d=t(6434),c=t(3329),h=function(e){(0,i.Z)(t,e);var n=(0,s.Z)(t);function t(){return(0,a.Z)(this,t),n.apply(this,arguments)}return(0,r.Z)(t,[{key:"render",value:function(){var e,n=this.props,t=n.title,a=n.id,r=n.onClick,i=n.selected,s=n.type,o=void 0===s?"button":s,d=(null===this||void 0===this||null===(e=this.props)||void 0===e?void 0:e.loading)&&i===a&&"Delete"===t;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("button",{disabled:!!d,className:l,id:a,onClick:r,type:o,children:d?(0,c.jsx)(u.gy,{height:"15",width:"15",color:"red",ariaLabel:"loading"}):t})})}}]),t}(o.Component),p=(0,d.$j)((function(e){return{loading:e.items.removeLoader}}))(h)}}]);
//# sourceMappingURL=278.272a0456.chunk.js.map