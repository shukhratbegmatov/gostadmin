(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1187:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(73),c=n(90),i=n(159),s=n(976),l=n(14),u=n.n(l),f=n(984),m=n(12),p=n(987),d=n(988),y=n(95),b=n(983),v=n(334),h=n(989),g=n(76);t.default=Object(i.a)(Object(c.c)("main"))(function(e){var t=e.t,n=e.history,a=Object(o.d)(function(e){return e.system.language});return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.d,{breadcrumbs:[{title:t("\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"),link:"/companies"},{title:t("\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044e")}]}),r.a.createElement(f.a,{title:t("\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044e"),extra:[r.a.createElement(g.a,{key:"2",to:"/companies"},r.a.createElement(m.a,{type:"edit"}),r.a.createElement("span",null,t("\u0412\u0441\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438")))]}),r.a.createElement("div",{className:"page-content page-content__transparent"},r.a.createElement(b.a,{isCreate:!0,entity:"company",name:"all",url:"/items/company",params:{extra:{_l:a}},loadEntity:!1,appendIds:!0,primaryKey:"model_item_id",fields:[{name:"title",required:!0}],onSuccess:function(e){n.push("/company/update/".concat(e.model_item_id,"?lang=").concat(h.a[u()(e,"lang")]))}},function(e){var n=e.isSubmitting;return e.values,e.setFieldValue,r.a.createElement(v.g,{spinning:n},r.a.createElement(p.a,{gutter:20,type:"flex"},r.a.createElement(d.a,{className:"gutter-row",lg:16},r.a.createElement(v.f,{title:t("\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f")},r.a.createElement(s.a,{component:v.c.AntInput,name:"title",type:"text",label:t("\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"),placeholder:t("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"),hasFeedback:!0}),r.a.createElement(y.a,{type:"primary",htmlType:"submit"},t("\u0421\u043e\u0437\u0434\u0430\u0442\u044c")))),r.a.createElement(d.a,{className:"gutter-row",lg:8},r.a.createElement(v.f,{title:t("\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b")}))))})))})},981:function(e,t,n){"use strict";var a=n(25),r=n(4),o=n(0),c=n.n(o),i=n(73),s=n(63),l=n(90),u=n(976),f=n(985),m=n(14),p=n.n(m),d=n(108),y=n.n(d),b=n(974),v=n(52),h=function(e){var t=e.children,n=e.handleSubmit,a=e.values,r=e.isSubmitting,o=e.setFieldValue,i=e.isValid,s=e.errors;return c.a.createElement("form",{onSubmit:n,autoComplete:"off"},t({handleSubmit:n,values:a,setFieldValue:o,isSubmitting:r,isValid:i,errors:s}))},g=Object(u.c)({enableReinitialize:!0,validationSchema:function(e){var t=e.fields,n=e.t;if(!y()(t))return f.object().shape({});var a={};return t.forEach(function(e){var t;switch(e.type){case"email":t=f.string().email(n("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 email"));break;case"string":t=f.string().typeError(n("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0430"));break;case"object":t=f.object();break;case"number":t=f.number().typeError(n("\u0414\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c"));break;case"array":t=f.array();break;case"boolean":t=f.boolean();break;case"date":t=f.date();break;default:t=f.string()}e.required&&(t=t.required(n("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"))),e.min&&(t=t.min(e.min,n("\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u043e!"))),e.max&&(t=t.max(e.max,n("\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043e\u043b\u0433\u043e!"))),t=t.nullable(),a[e.name]=t}),f.object().shape(a)},mapPropsToValues:function(e){var t=e.fields;return y()(t)?t.reduce(function(e,t){return Object(r.a)(Object(r.a)({},e),{},Object(a.a)({},t.name,p()(t,"value","")))},{}):{}},handleSubmit:function(e,t){var n=t.props,a=t.setFieldError,o=t.setSubmitting,c=t.resetForm,i=n.fields,s=n.entity,l=n.name,u=n.id,f=n.url,m=n.params,p=n.isCreate,d=n.isDelete,y=n.loadEntity,v=n.primaryKey,h=n.CreateAction,g=n.appendIds,E=void 0!==g&&g,O=n.prependIds,j=void 0!==O&&O,S=n.DeleteAction,w=n.UpdateAction,k=n.valuesAsFormData,P=void 0===k||k,N=n.onSuccess,x=void 0===N?function(){}:N,C=n.onError,A=void 0===C?function(){}:C;e=Object(r.a)({},e),"function"===typeof f&&(f=f(Object(r.a)({},e))),i.forEach(function(t){t.hasOwnProperty("onSubmitValue")&&"function"===typeof t.onSubmitValue&&(t.hasOwnProperty("onSubmitKey")?(e[t.onSubmitKey]=t.onSubmitValue(e[t.name],e),delete e[t.name]):e[t.name]=t.onSubmitValue(e[t.name],e)),t.hasOwnProperty("optionTitle")&&t.hasOwnProperty("optionTitleKey")&&(e[t.optionTitle]=e[t.name][t.optionTitleKey]),t.hasOwnProperty("optionKey")&&t.hasOwnProperty("optionValue")&&(e[t.optionKey]=e[t.name][t.optionValue],delete e[t.name]),t.hasOwnProperty("disabled")&&delete e[t.name]});var I=e;P&&(I=new FormData,Object.keys(e).forEach(function(t){e[t]instanceof Array?e[t].forEach(function(e){I.append("".concat(t,"[]"),e)}):I.append(t,e[t])})),d?S({id:u,entity:s,name:l,url:f,params:m,values:I,cb:{success:function(){b.a.success({message:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d",duration:2}),x({},{resetForm:c})},error:function(e){b.a.error({message:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a",duration:2}),e instanceof Array?e.map(function(e){var t=e.field,n=e.message;a(t,n)}):e instanceof Object&&Object.keys(e).map(function(t){var n=e[t][0];a(t,n)}),A(e)},finally:function(){o(!1)}}}):p?h({entity:s,name:l,url:f,params:m,values:e,appendIds:E,prependIds:j,loadEntity:y,primaryKey:v,cb:{success:function(e){b.a.success({message:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d",duration:2}),x(e,{resetForm:c})},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];b.a.error({message:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a",duration:2}),e instanceof Array?e.map(function(e){var t=e.field,n=e.message;a(t,n)}):e instanceof Object&&Object.keys(e).map(function(t){var n=e[t][0];a(t,n)}),A()},finally:function(){o(!1)}}}):w({entity:s,name:l,url:f,id:u,params:m,values:e,loadEntity:y,primaryKey:v,cb:{success:function(e){b.a.success({message:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e",duration:2}),x(e,{resetForm:c})},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];b.a.error({message:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a",duration:2}),e instanceof Array?e.map(function(e){var t=e.field,n=e.message;a(t,n)}):e instanceof Object&&Object.keys(e).map(function(t){var n=e[t][0];a(t,n)}),A()},finally:function(){o(!1)}}})}})(h);h.defaultProps={loadEntity:!0};t.a=Object(i.b)(null,function(e){return Object(s.bindActionCreators)({CreateAction:v.default.Create.request,UpdateAction:v.default.Update.request,DeleteAction:v.default.Delete.request},e)})(Object(l.c)("main")(g))},983:function(e,t,n){"use strict";var a=n(981);t.a=a.a},984:function(e,t,n){"use strict";var a=n(0),r=n(2),o=n.n(r),c=n(268),i=n(12),s=n(962);function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=y(e);if(t){var r=y(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===l(t)||"function"===typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(l,a["Component"]);var t,n,r,s=d(l);function l(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(e=s.apply(this,arguments)).state={scale:1,mounted:!1,isImgExist:!0},e.setScale=function(){if(e.avatarChildren&&e.avatarNode){var t=e.avatarChildren.offsetWidth,n=e.avatarNode.offsetWidth;0===t||0===n||e.lastChildrenWidth===t&&e.lastNodeWidth===n||(e.lastChildrenWidth=t,e.lastNodeWidth=n,e.setState({scale:n-8<t?(n-8)/t:1}))}},e.handleImgLoadError=function(){var t=e.props.onError;!1!==(t?t():void 0)&&e.setState({isImgExist:!1})},e.renderAvatar=function(t){var n,r,c=t.getPrefixCls,s=e.props,l=s.prefixCls,m=s.shape,p=s.size,d=s.src,y=s.srcSet,v=s.icon,h=s.className,g=s.alt,E=b(s,["prefixCls","shape","size","src","srcSet","icon","className","alt"]),O=e.state,j=O.isImgExist,S=O.scale,w=(O.mounted,c("avatar",l)),k=o()((f(n={},"".concat(w,"-lg"),"large"===p),f(n,"".concat(w,"-sm"),"small"===p),n)),P=o()(w,h,k,(f(r={},"".concat(w,"-").concat(m),m),f(r,"".concat(w,"-image"),d&&j),f(r,"".concat(w,"-icon"),v),r)),N="number"===typeof p?{width:p,height:p,lineHeight:"".concat(p,"px"),fontSize:v?p/2:18}:{},x=e.props.children;if(d&&j)x=a.createElement("img",{src:d,srcSet:y,onError:e.handleImgLoadError,alt:g});else if(v)x="string"===typeof v?a.createElement(i.a,{type:v}):v;else{if(e.avatarChildren||1!==S){var C="scale(".concat(S,") translateX(-50%)"),A={msTransform:C,WebkitTransform:C,transform:C},I="number"===typeof p?{lineHeight:"".concat(p,"px")}:{};x=a.createElement("span",{className:"".concat(w,"-string"),ref:function(t){return e.avatarChildren=t},style:u(u({},I),A)},x)}else{x=a.createElement("span",{className:"".concat(w,"-string"),style:{opacity:0},ref:function(t){return e.avatarChildren=t}},x)}}return a.createElement("span",u({},E,{style:u(u({},N),E.style),className:P,ref:function(t){return e.avatarNode=t}}),x)},e}return t=l,(n=[{key:"componentDidMount",value:function(){this.setScale(),this.setState({mounted:!0})}},{key:"componentDidUpdate",value:function(e){this.setScale(),e.src!==this.props.src&&this.setState({isImgExist:!0,scale:1})}},{key:"render",value:function(){return a.createElement(c.a,null,this.renderAvatar)}}])&&m(t.prototype,n),r&&m(t,r),l}();v.defaultProps={shape:"circle",size:"default"};var h=n(335),g=n(62);var E=function(e,t){var n=t.title,r=t.avatar,o=t.subTitle,c=t.tags,i=t.extra,s=t.backIcon,l=t.onBack,u="".concat(e,"-heading");if(n||o||c||i){var f=function(e,t,n){return t&&n?a.createElement(g.a,{componentName:"PageHeader"},function(r){var o=r.back;return a.createElement("div",{className:"".concat(e,"-back")},a.createElement(h.a,{onClick:function(e){n&&n(e)},className:"".concat(e,"-back-button"),"aria-label":o},t))}):null}(e,s,l);return a.createElement("div",{className:u},f,r&&a.createElement(v,r),n&&a.createElement("span",{className:"".concat(u,"-title")},n),o&&a.createElement("span",{className:"".concat(u,"-sub-title")},o),c&&a.createElement("span",{className:"".concat(u,"-tags")},c),i&&a.createElement("span",{className:"".concat(u,"-extra")},i))}return null},O=function(e){return a.createElement(c.a,null,function(t){var n=t.getPrefixCls,r=t.pageHeader,c=e.prefixCls,i=e.style,l=e.footer,u=e.children,f=e.breadcrumb,m=e.className,p=!0;"ghost"in e?p=e.ghost:r&&"ghost"in r&&(p=r.ghost);var d,y,b,v=n("page-header",c),h=f&&f.routes?function(e){return a.createElement(s.a,e)}(f):null,g=o()(v,m,(d={"has-breadcrumb":h,"has-footer":l},y="".concat(v,"-ghost"),b=p,y in d?Object.defineProperty(d,y,{value:b,enumerable:!0,configurable:!0,writable:!0}):d[y]=b,d));return a.createElement("div",{className:g,style:i},h,E(v,e),u&&function(e,t){return a.createElement("div",{className:"".concat(e,"-content")},t)}(v,u),function(e,t){return t?a.createElement("div",{className:"".concat(e,"-footer")},t):null}(v,l))})};O.defaultProps={backIcon:a.createElement(i.a,{type:"arrow-left"})};t.a=O},987:function(e,t,n){"use strict";var a=n(490);t.a=a.a},988:function(e,t,n){"use strict";var a=n(330);t.a=a.a},989:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={1:"ru",2:"uz",3:"en"}}}]);