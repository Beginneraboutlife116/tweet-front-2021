(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3182d548"],{"0079":function(e,t,r){"use strict";r("4c37")},"00b4":function(e,t,r){"use strict";r("ac1f");var s=r("23e7"),a=r("da84"),i=r("c65b"),n=r("e330"),o=r("1626"),l=r("861d"),c=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),u=a.Error,d=n(/./.test);s({target:"RegExp",proto:!0,forced:!c},{test:function(e){var t=this.exec;if(!o(t))return d(this,e);var r=i(t,this,e);if(null!==r&&!l(r))throw new u("RegExp exec method returned something other than an Object or null");return!!r}})},"107c":function(e,t,r){var s=r("d039"),a=r("da84"),i=a.RegExp;e.exports=s((function(){var e=i("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"4c37":function(e,t,r){},"5c9c":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"signup-container"},[r("div",{staticClass:"signup"},[r("header",{staticClass:"signup__header"},[r("div",{staticClass:"signup__header-logo"},[r("svg",{attrs:{width:"50",height:"50",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M30.6996 23.4709C30.6996 23.4709 23.2328 35.5781 17.1109 35.5781C6.40314 35.5781 16.3821 12.5132 24.1916 12.5132C29.641 12.5132 30.6996 23.4709 30.6996 23.4709Z",fill:"#FF6600"}}),r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M39.5723 38.6972C37.4451 40.9607 34.8198 42.6976 31.9044 43.7701C28.989 44.8426 25.8639 45.2213 22.7767 44.8761C19.6895 44.5309 16.7252 43.4713 14.1188 41.7813C11.5125 40.0914 9.33573 37.8175 7.76123 35.1401C9.5314 37.5477 12.5338 39.1527 16.803 39.1527C27.3199 39.1527 33.2899 30.98 33.2899 30.98C33.2899 30.98 33.8062 37.4392 39.5593 38.6972H39.5723Z",fill:"#FF6600"}}),r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M42.7223 15.7451C44.2963 18.7527 45.0781 22.1116 44.9939 25.505C44.9096 28.8984 43.9621 32.2144 42.2407 35.1401C40.8792 34.3764 39.8725 33.1082 39.4379 31.609L37.1558 24.7724L42.7223 15.7451Z",fill:"#FF6600"}}),r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M25.0031 5.01737C30.0185 5.01403 34.8513 6.89881 38.5398 10.2967L34.7521 16.4088C33.3811 12.843 30.5957 9.2729 25.1767 9.2729C14.0784 9.2729 5.85231 21.3888 5.85231 28.9846C5.84986 29.9669 5.97528 30.9454 6.22543 31.8953C5.11558 28.8725 4.75205 25.6265 5.16572 22.4331C5.57938 19.2398 6.75802 16.1934 8.60147 13.5531C10.4449 10.9127 12.8987 8.75634 15.7542 7.26726C18.6097 5.77818 21.7826 5.00039 25.0031 5V5.01737Z",fill:"#FF6600"}})])]),r("p",{staticClass:"signup__header-title"},[e._v("建立你的帳號")])]),r("form",{staticClass:"sign__form",on:{submit:function(t){return t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[r("label",{staticClass:"sign__form-row"},[r("p",{staticClass:"sign__form-title"},[e._v("帳號")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.account,expression:"account",modifiers:{trim:!0}}],ref:"account",staticClass:"sign__form-input",attrs:{type:"text",required:""},domProps:{value:e.account},on:{input:function(t){t.target.composing||(e.account=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("p",{staticClass:"sign__form-error"},[e.accountRepeat?r("span",{staticClass:"error"},[e._v("帳號 已重複註冊！")]):e._e()])]),r("label",{staticClass:"sign__form-row"},[r("p",{staticClass:"sign__form-title"},[e._v("名稱")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.name,expression:"name",modifiers:{trim:!0}}],ref:"name",staticClass:"sign__form-input",style:{borderColor:e.nameErrorHandler.borderColor},attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("p",{staticClass:"sign__form-error"},[r("span",{directives:[{name:"show",rawName:"v-show",value:e.name.length,expression:"name.length"}],staticClass:"error",style:{color:e.nameErrorHandler.color}},[e._v(" "+e._s(e.nameErrorHandler.text)+" ")]),r("span",{directives:[{name:"show",rawName:"v-show",value:e.name.length,expression:"name.length"}],staticClass:"limit"},[e._v(" "+e._s(e.name.length)+"/50")])])]),r("label",{staticClass:"sign__form-row"},[r("p",{staticClass:"sign__form-title"},[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.email,expression:"email",modifiers:{trim:!0}}],ref:"email",staticClass:"sign__form-input",attrs:{type:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("p",{staticClass:"sign__form-error"},[e.emailRepeat?r("span",{staticClass:"error"},[e._v("Email 已重複註冊！")]):e._e()])]),r("label",{staticClass:"sign__form-row"},[r("p",{staticClass:"sign__form-title"},[e._v("密碼")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.password,expression:"password",modifiers:{trim:!0}}],ref:"password",staticClass:"sign__form-input",attrs:{type:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("label",{staticClass:"sign__form-row"},[r("p",{staticClass:"sign__form-title"},[e._v("密碼確認")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.passwordConfirm,expression:"passwordConfirm",modifiers:{trim:!0}}],ref:"passwordConfirm",staticClass:"sign__form-input",attrs:{type:"password",required:""},domProps:{value:e.passwordConfirm},on:{input:function(t){t.target.composing||(e.passwordConfirm=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("p",{staticClass:"sign__form-error"},[e.passwordError?r("span",{staticClass:"error"},[e._v("確認密碼與密碼不符，請再試一次")]):e._e()])]),r("button",{staticClass:"sign__form-submit active",attrs:{type:"submit"}},[e._v("註冊")])]),r("div",{staticClass:"signup__btns"},[r("router-link",{staticClass:"signup__btns-link",attrs:{to:"/signin"}},[e._v("取消")])],1)])])},a=[],i=r("1da1"),n=(r("96cf"),r("b0c0"),r("fb6a"),r("ac1f"),r("00b4"),r("b132")),o=r("7696"),l={name:"SignUp",data:function(){return{name:"",account:"",email:"",password:"",passwordConfirm:"",accountRepeat:!1,emailRepeat:!1,passwordError:!1}},computed:{nameErrorHandler:function(){var e={};return e.borderColor=this.name.length>50?"#fc5a5a":"",this.name.length>50||!this.name.length?e.color="#fc5a5a":e.color="#0099ff",e.text=this.name.length>50?"字數超出上限！":"字數正確",e}},methods:{handleSubmit:function(){return this.$refs.account.style.borderColor="",this.$refs.email.style.borderColor="",this.$refs.password.style.borderColor="",this.$refs.passwordConfirm.style.borderColor="",this.$refs.name.style.borderColor="",this.account?this.name?(this.name.length>50&&(this.name=this.name.slice(0,50)),this.email?this.verifyEmail(this.email)?this.password?this.passwordConfirm?this.password!==this.passwordConfirm?(n["a"].fire({icon:"error",title:"密碼不相符，請再試一次"}),this.passwordError=!0,this.$refs.passwordConfirm.focus(),void(this.$refs.passwordConfirm.style.borderColor="#fc5a5a")):void this.signUp(this.account,this.name,this.email,this.password,this.passwordConfirm):(n["a"].fire({icon:"warning",title:"請再輸入一次密碼做確認"}),this.$refs.passwordConfirm.focus(),void(this.$refs.passwordConfirm.style.borderColor="#fc5a5a")):(n["a"].fire({icon:"warning",title:"請輸入密碼"}),this.$refs.password.focus(),void(this.$refs.password.style.borderColor="#fc5a5a")):(n["a"].fire({icon:"warning",title:"無效的Email，請再次確認"}),this.$refs.email.focus(),void(this.$refs.email.style.borderColor="#fc5a5a")):(n["a"].fire({icon:"warning",title:"Email必填"}),this.$refs.email.focus(),void(this.$refs.email.style.borderColor="#fc5a5a"))):(n["a"].fire({icon:"warning",title:"名稱必填"}),this.$refs.name.focus(),void(this.$refs.name.style.borderColor="#fc5a5a")):(n["a"].fire({icon:"warning",title:"帳號必填"}),this.$refs.account.focus(),void(this.$refs.account.style.borderColor="#fc5a5a"))},verifyEmail:function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(String(e).toLowerCase())},signUp:function(e,t,r,s,a){var l=this;return Object(i["a"])(regeneratorRuntime.mark((function i(){var c,u;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,o["a"].signUp({account:e,name:t,email:r,password:s,checkPassword:a});case 3:if(c=i.sent,u=c.data,"success"===u.status){i.next=7;break}throw new Error(u.message);case 7:n["a"].fire({icon:"success",title:"成功註冊！"}),l.$router.push("/signin"),i.next=16;break;case 11:i.prev=11,i.t0=i["catch"](0),n["a"].fire({icon:"error",title:"".concat(i.t0.message)}),l.$refs.account.focus(),l.$refs.account.style.borderColor="#fc5a5a";case 16:case"end":return i.stop()}}),i,null,[[0,11]])})))()}},mounted:function(){this.$refs.account.focus()}},c=l,u=(r("0079"),r("2877")),d=Object(u["a"])(c,s,a,!1,null,null,null);t["default"]=d.exports},9263:function(e,t,r){"use strict";var s=r("c65b"),a=r("e330"),i=r("577e"),n=r("ad6d"),o=r("9f7f"),l=r("5692"),c=r("7c73"),u=r("69f3").get,d=r("fce3"),f=r("107c"),m=l("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,g=p,v=a("".charAt),h=a("".indexOf),C=a("".replace),w=a("".slice),_=function(){var e=/a/,t=/b*/g;return s(p,e,"a"),s(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),x=o.UNSUPPORTED_Y||o.BROKEN_CARET,b=void 0!==/()??/.exec("")[1],y=_||b||x||d||f;y&&(g=function(e){var t,r,a,o,l,d,f,y=this,$=u(y),E=i(e),R=$.raw;if(R)return R.lastIndex=y.lastIndex,t=s(g,R,E),y.lastIndex=R.lastIndex,t;var I=$.groups,U=x&&y.sticky,N=s(n,y),k=y.source,P=0,A=E;if(U&&(N=C(N,"y",""),-1===h(N,"g")&&(N+="g"),A=w(E,y.lastIndex),y.lastIndex>0&&(!y.multiline||y.multiline&&"\n"!==v(E,y.lastIndex-1))&&(k="(?: "+k+")",A=" "+A,P++),r=new RegExp("^(?:"+k+")",N)),b&&(r=new RegExp("^"+k+"$(?!\\s)",N)),_&&(a=y.lastIndex),o=s(p,U?r:y,A),U?o?(o.input=w(o.input,P),o[0]=w(o[0],P),o.index=y.lastIndex,y.lastIndex+=o[0].length):y.lastIndex=0:_&&o&&(y.lastIndex=y.global?o.index+o[0].length:a),b&&o&&o.length>1&&s(m,o[0],r,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)})),o&&I)for(o.groups=d=c(null),l=0;l<I.length;l++)f=I[l],d[f[0]]=o[f[1]];return o}),e.exports=g},"9f7f":function(e,t,r){var s=r("d039"),a=r("da84"),i=a.RegExp;t.UNSUPPORTED_Y=s((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=s((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var s=r("23e7"),a=r("9263");s({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},fb6a:function(e,t,r){"use strict";var s=r("23e7"),a=r("da84"),i=r("e8b5"),n=r("68ee"),o=r("861d"),l=r("23cb"),c=r("07fa"),u=r("fc6a"),d=r("8418"),f=r("b622"),m=r("1dde"),p=r("f36a"),g=m("slice"),v=f("species"),h=a.Array,C=Math.max;s({target:"Array",proto:!0,forced:!g},{slice:function(e,t){var r,s,a,f=u(this),m=c(f),g=l(e,m),w=l(void 0===t?m:t,m);if(i(f)&&(r=f.constructor,n(r)&&(r===h||i(r.prototype))?r=void 0:o(r)&&(r=r[v],null===r&&(r=void 0)),r===h||void 0===r))return p(f,g,w);for(s=new(void 0===r?h:r)(C(w-g,0)),a=0;g<w;g++,a++)g in f&&d(s,a,f[g]);return s.length=a,s}})},fce3:function(e,t,r){var s=r("d039"),a=r("da84"),i=a.RegExp;e.exports=s((function(){var e=i(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-3182d548.a07c9cdc.js.map