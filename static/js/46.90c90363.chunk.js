(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1202:function(e,t,a){"use strict";a.r(t);var n=a(42),r=a(0),c=a.n(r),o=a(73),i=a(76),l=a(90),s=a(159),u=a(976),f=a(14),m=a.n(f),p=a(984),d=a(12),b=a(987),y=a(988),v=a(95),h=a(186),g=a(989),E=a(983),O=a(334);t.default=Object(s.a)(Object(l.c)("main"))(function(e){var t=e.t,a=e.history,r=Object(o.d)(function(e){return e.system}),l=[{value:1,name:t("\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439")},{value:0,name:t("\u041d\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439")}];return c.a.createElement(c.a.Fragment,null,c.a.createElement(O.d,{breadcrumbs:[{title:t("\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u044b"),link:"/pages"},{title:t("\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443")}]}),c.a.createElement(p.a,{title:t("\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"),extra:[c.a.createElement(i.a,{key:"2",to:"/pages"},c.a.createElement(d.a,{type:"edit"}),c.a.createElement("span",null,t("\u0412\u0441\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b")))]}),c.a.createElement("div",{className:"page-content page-content__transparent"},c.a.createElement(E.a,{isCreate:!0,entity:"page",name:"all",url:"/pages",params:{extra:{_l:r.language}},loadEntity:!1,appendIds:!0,primaryKey:"id",fields:[{name:"title",required:!0},{name:"description",required:!0},{name:"content",required:!0},{name:"files",value:[],onSubmitValue:function(e){return e&&e.reduce(function(e,t){return[].concat(Object(n.a)(e),[t.uid])},[]).join(",")}},{name:"status",value:1}],onSuccess:function(e){a.push("/pages/update/".concat(e.id,"?lang=").concat(g.a[m()(e,"lang")]))}},function(e){var a=e.isSubmitting;return e.values,e.setFieldValue,c.a.createElement(O.g,{spinning:a},c.a.createElement(b.a,{gutter:20,type:"flex"},c.a.createElement(y.a,{className:"gutter-row",lg:16},c.a.createElement(O.f,{title:t("\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f")},c.a.createElement(u.a,{component:O.c.AntInput,name:"title",type:"text",label:t("\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"),placeholder:t("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"),hasFeedback:!0}),c.a.createElement(u.a,{component:O.c.AntTextarea,name:"description",type:"text",label:t("\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),placeholder:t("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),hasFeedback:!0,autosize:!0}),c.a.createElement(u.a,{name:"content",label:t("\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435"),placeholder:t("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435"),component:O.c.CKEditor}),c.a.createElement("div",{className:"field-container image-field"},c.a.createElement("div",{className:"ant-form-item mb-40"},c.a.createElement("div",{className:"ant-label"},t("\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439")),c.a.createElement("div",null,c.a.createElement(u.a,{name:"files",render:function(e){var a=e.field,r=e.form.setFieldValue,o=m()(a,"value",[]);return c.a.createElement(O.c.Upload,{action:"".concat(h.a.API_ROOT,"/filemanager/uploads"),listType:"picture-card",defaultFileList:o,multiple:!0,onChange:function(e){var t=e.file,a=Object(n.a)(o);Object.values(m()(t,"response",{})).forEach(function(e){"done"==t.status&&(a=[].concat(Object(n.a)(a),[{uid:e.id,url:m()(e,"link"),name:e.title}]))}),r("files",Object(n.a)(a))},onRemove:function(e){r("files",[])}},o.length?null:c.a.createElement(O.i,{title:t("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0444\u043e\u0442\u043e")}))}})))),c.a.createElement(v.a,{type:"primary",htmlType:"submit"},t("\u0421\u043e\u0437\u0434\u0430\u0442\u044c")))),c.a.createElement(y.a,{className:"gutter-row",lg:8},c.a.createElement(O.f,{title:t("\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b")},c.a.createElement(u.a,{component:O.c.AntSelect,name:"status",label:t("\u0421\u0442\u0430\u0442\u0443\u0441"),placeholder:t("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441"),selectOptions:l})))))})))})},981:function(e,t,a){"use strict";var n=a(25),r=a(4),c=a(0),o=a.n(c),i=a(73),l=a(63),s=a(90),u=a(976),f=a(985),m=a(14),p=a.n(m),d=a(108),b=a.n(d),y=a(974),v=a(52),h=function(e){var t=e.children,a=e.handleSubmit,n=e.values,r=e.isSubmitting,c=e.setFieldValue,i=e.isValid,l=e.errors;return o.a.createElement("form",{onSubmit:a,autoComplete:"off"},t({handleSubmit:a,values:n,setFieldValue:c,isSubmitting:r,isValid:i,errors:l}))},g=Object(u.c)({enableReinitialize:!0,validationSchema:function(e){var t=e.fields,a=e.t;if(!b()(t))return f.object().shape({});var n={};return t.forEach(function(e){var t;switch(e.type){case"email":t=f.string().email(a("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 email"));break;case"string":t=f.string().typeError(a("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0430"));break;case"object":t=f.object();break;case"number":t=f.number().typeError(a("\u0414\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c"));break;case"array":t=f.array();break;case"boolean":t=f.boolean();break;case"date":t=f.date();break;default:t=f.string()}e.required&&(t=t.required(a("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"))),e.min&&(t=t.min(e.min,a("\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u043e!"))),e.max&&(t=t.max(e.max,a("\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043e\u043b\u0433\u043e!"))),t=t.nullable(),n[e.name]=t}),f.object().shape(n)},mapPropsToValues:function(e){var t=e.fields;return b()(t)?t.reduce(function(e,t){return Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},t.name,p()(t,"value","")))},{}):{}},handleSubmit:function(e,t){var a=t.props,n=t.setFieldError,c=t.setSubmitting,o=t.resetForm,i=a.fields,l=a.entity,s=a.name,u=a.id,f=a.url,m=a.params,p=a.isCreate,d=a.isDelete,b=a.loadEntity,v=a.primaryKey,h=a.CreateAction,g=a.appendIds,E=void 0!==g&&g,O=a.prependIds,j=void 0!==O&&O,S=a.DeleteAction,w=a.UpdateAction,k=a.valuesAsFormData,N=void 0===k||k,P=a.onSuccess,x=void 0===P?function(){}:P,C=a.onError,A=void 0===C?function(){}:C;e=Object(r.a)({},e),"function"===typeof f&&(f=f(Object(r.a)({},e))),i.forEach(function(t){t.hasOwnProperty("onSubmitValue")&&"function"===typeof t.onSubmitValue&&(t.hasOwnProperty("onSubmitKey")?(e[t.onSubmitKey]=t.onSubmitValue(e[t.name],e),delete e[t.name]):e[t.name]=t.onSubmitValue(e[t.name],e)),t.hasOwnProperty("optionTitle")&&t.hasOwnProperty("optionTitleKey")&&(e[t.optionTitle]=e[t.name][t.optionTitleKey]),t.hasOwnProperty("optionKey")&&t.hasOwnProperty("optionValue")&&(e[t.optionKey]=e[t.name][t.optionValue],delete e[t.name]),t.hasOwnProperty("disabled")&&delete e[t.name]});var I=e;N&&(I=new FormData,Object.keys(e).forEach(function(t){e[t]instanceof Array?e[t].forEach(function(e){I.append("".concat(t,"[]"),e)}):I.append(t,e[t])})),d?S({id:u,entity:l,name:s,url:f,params:m,values:I,cb:{success:function(){y.a.success({message:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d",duration:2}),x({},{resetForm:o})},error:function(e){y.a.error({message:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a",duration:2}),e instanceof Array?e.map(function(e){var t=e.field,a=e.message;n(t,a)}):e instanceof Object&&Object.keys(e).map(function(t){var a=e[t][0];n(t,a)}),A(e)},finally:function(){c(!1)}}}):p?h({entity:l,name:s,url:f,params:m,values:e,appendIds:E,prependIds:j,loadEntity:b,primaryKey:v,cb:{success:function(e){y.a.success({message:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d",duration:2}),x(e,{resetForm:o})},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];y.a.error({message:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a",duration:2}),e instanceof Array?e.map(function(e){var t=e.field,a=e.message;n(t,a)}):e instanceof Object&&Object.keys(e).map(function(t){var a=e[t][0];n(t,a)}),A()},finally:function(){c(!1)}}}):w({entity:l,name:s,url:f,id:u,params:m,values:e,loadEntity:b,primaryKey:v,cb:{success:function(e){y.a.success({message:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e",duration:2}),x(e,{resetForm:o})},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];y.a.error({message:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a",duration:2}),e instanceof Array?e.map(function(e){var t=e.field,a=e.message;n(t,a)}):e instanceof Object&&Object.keys(e).map(function(t){var a=e[t][0];n(t,a)}),A()},finally:function(){c(!1)}}})}})(h);h.defaultProps={loadEntity:!0};t.a=Object(i.b)(null,function(e){return Object(l.bindActionCreators)({CreateAction:v.default.Create.request,UpdateAction:v.default.Update.request,DeleteAction:v.default.Delete.request},e)})(Object(s.c)("main")(g))},983:function(e,t,a){"use strict";var n=a(981);t.a=n.a},984:function(e,t,a){"use strict";var n=a(0),r=a(2),c=a.n(r),o=a(268),i=a(12),l=a(962);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=b(e);if(t){var r=b(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return function(e,t){if(t&&("object"===s(t)||"function"===typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,a)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(s,n["Component"]);var t,a,r,l=d(s);function s(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(e=l.apply(this,arguments)).state={scale:1,mounted:!1,isImgExist:!0},e.setScale=function(){if(e.avatarChildren&&e.avatarNode){var t=e.avatarChildren.offsetWidth,a=e.avatarNode.offsetWidth;0===t||0===a||e.lastChildrenWidth===t&&e.lastNodeWidth===a||(e.lastChildrenWidth=t,e.lastNodeWidth=a,e.setState({scale:a-8<t?(a-8)/t:1}))}},e.handleImgLoadError=function(){var t=e.props.onError;!1!==(t?t():void 0)&&e.setState({isImgExist:!1})},e.renderAvatar=function(t){var a,r,o=t.getPrefixCls,l=e.props,s=l.prefixCls,m=l.shape,p=l.size,d=l.src,b=l.srcSet,v=l.icon,h=l.className,g=l.alt,E=y(l,["prefixCls","shape","size","src","srcSet","icon","className","alt"]),O=e.state,j=O.isImgExist,S=O.scale,w=(O.mounted,o("avatar",s)),k=c()((f(a={},"".concat(w,"-lg"),"large"===p),f(a,"".concat(w,"-sm"),"small"===p),a)),N=c()(w,h,k,(f(r={},"".concat(w,"-").concat(m),m),f(r,"".concat(w,"-image"),d&&j),f(r,"".concat(w,"-icon"),v),r)),P="number"===typeof p?{width:p,height:p,lineHeight:"".concat(p,"px"),fontSize:v?p/2:18}:{},x=e.props.children;if(d&&j)x=n.createElement("img",{src:d,srcSet:b,onError:e.handleImgLoadError,alt:g});else if(v)x="string"===typeof v?n.createElement(i.a,{type:v}):v;else{if(e.avatarChildren||1!==S){var C="scale(".concat(S,") translateX(-50%)"),A={msTransform:C,WebkitTransform:C,transform:C},I="number"===typeof p?{lineHeight:"".concat(p,"px")}:{};x=n.createElement("span",{className:"".concat(w,"-string"),ref:function(t){return e.avatarChildren=t},style:u(u({},I),A)},x)}else{x=n.createElement("span",{className:"".concat(w,"-string"),style:{opacity:0},ref:function(t){return e.avatarChildren=t}},x)}}return n.createElement("span",u({},E,{style:u(u({},P),E.style),className:N,ref:function(t){return e.avatarNode=t}}),x)},e}return t=s,(a=[{key:"componentDidMount",value:function(){this.setScale(),this.setState({mounted:!0})}},{key:"componentDidUpdate",value:function(e){this.setScale(),e.src!==this.props.src&&this.setState({isImgExist:!0,scale:1})}},{key:"render",value:function(){return n.createElement(o.a,null,this.renderAvatar)}}])&&m(t.prototype,a),r&&m(t,r),s}();v.defaultProps={shape:"circle",size:"default"};var h=a(335),g=a(62);var E=function(e,t){var a=t.title,r=t.avatar,c=t.subTitle,o=t.tags,i=t.extra,l=t.backIcon,s=t.onBack,u="".concat(e,"-heading");if(a||c||o||i){var f=function(e,t,a){return t&&a?n.createElement(g.a,{componentName:"PageHeader"},function(r){var c=r.back;return n.createElement("div",{className:"".concat(e,"-back")},n.createElement(h.a,{onClick:function(e){a&&a(e)},className:"".concat(e,"-back-button"),"aria-label":c},t))}):null}(e,l,s);return n.createElement("div",{className:u},f,r&&n.createElement(v,r),a&&n.createElement("span",{className:"".concat(u,"-title")},a),c&&n.createElement("span",{className:"".concat(u,"-sub-title")},c),o&&n.createElement("span",{className:"".concat(u,"-tags")},o),i&&n.createElement("span",{className:"".concat(u,"-extra")},i))}return null},O=function(e){return n.createElement(o.a,null,function(t){var a=t.getPrefixCls,r=t.pageHeader,o=e.prefixCls,i=e.style,s=e.footer,u=e.children,f=e.breadcrumb,m=e.className,p=!0;"ghost"in e?p=e.ghost:r&&"ghost"in r&&(p=r.ghost);var d,b,y,v=a("page-header",o),h=f&&f.routes?function(e){return n.createElement(l.a,e)}(f):null,g=c()(v,m,(d={"has-breadcrumb":h,"has-footer":s},b="".concat(v,"-ghost"),y=p,b in d?Object.defineProperty(d,b,{value:y,enumerable:!0,configurable:!0,writable:!0}):d[b]=y,d));return n.createElement("div",{className:g,style:i},h,E(v,e),u&&function(e,t){return n.createElement("div",{className:"".concat(e,"-content")},t)}(v,u),function(e,t){return t?n.createElement("div",{className:"".concat(e,"-footer")},t):null}(v,s))})};O.defaultProps={backIcon:n.createElement(i.a,{type:"arrow-left"})};t.a=O},987:function(e,t,a){"use strict";var n=a(490);t.a=n.a},988:function(e,t,a){"use strict";var n=a(330);t.a=n.a},989:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n={1:"ru",2:"uz",3:"en"}}}]);