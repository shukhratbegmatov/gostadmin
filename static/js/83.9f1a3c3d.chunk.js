(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1200:function(e,a,t){"use strict";t.r(a);var n=t(42),r=t(0),i=t.n(r),l=t(73),o=t(76),c=t(90),s=t(159),m=t(976),u=t(14),d=t.n(u),p=t(187),f=t(1019),b=t.n(f),y=t(987),v=t(988),h=t(95),E=t(984),g=t(12),O=t(336),j=t(981),S=t(334);a.default=Object(s.a)(Object(c.c)("main"))(function(e){var a=e.t,t=e.match,r=Object(l.d)(function(e){return d()(e,["auth","data"])}),c=t.params.id,s=[{name:a("\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439"),value:10},{name:a("\u041d\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439"),value:2}],u=[{name:a("\u041c\u043e\u0434\u0435\u0440\u0430\u0442\u043e\u0440"),value:"moder"},{name:a("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"),value:"user"}];return"admin"==d()(r,["role","name"])&&(u=[].concat(Object(n.a)(u),[{name:a("\u041a\u043e\u043d\u0442\u0435\u043d\u0442 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440"),value:"content"}])),i.a.createElement(i.a.Fragment,null,i.a.createElement(S.d,{breadcrumbs:[{title:a("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"),link:"/users"},{title:a("\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")}]}),i.a.createElement(E.a,{title:a("\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),extra:[i.a.createElement(o.a,{key:"1",to:"/user/create"},i.a.createElement(g.a,{type:"file-add"}),i.a.createElement("span",null,a("\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"))),i.a.createElement(o.a,{key:"2",to:"/users"},i.a.createElement(g.a,{type:"edit"}),i.a.createElement("span",null,a("\u0412\u0441\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438")))]}),i.a.createElement(O.a.One,{id:c,entity:"user",name:"user",url:"/user/".concat(c),primaryKey:"user_id"},function(e){var t=e.item,n=e.isFetched;return i.a.createElement(S.g,{spinning:!n},i.a.createElement("div",{className:"page-content page-content__transparent"},i.a.createElement(j.a,{id:c,entity:"user",name:"all",url:"/user/".concat(c),fields:[{name:"username",required:!0,value:d()(t,"username")},{name:"password",required:!1},{name:"email",type:"email",required:!0,value:d()(t,"email")},{name:"fullname",value:d()(t,"fullname")},{name:"phone",required:!0,value:d()(t,"phone"),onSubmitValue:function(e){return e.split(" ").join("")}},{name:"status",required:!0,value:d()(t,"status")},{name:"museum_id",required:!1,value:d()(t,"museum_id"),onSubmitValue:function(e){return d()(e,"model_item_id")}},{name:"role",required:!0,value:d()(t,["role","name"])}]},function(e){var t=e.isSubmitting,r=e.setFieldValue,l=e.values;return i.a.createElement(S.g,{spinning:t},function(e){var t=e.values;return i.a.createElement(y.a,{gutter:20,type:"flex"},i.a.createElement(v.a,{className:"gutter-row",lg:16},i.a.createElement(S.f,{title:a("\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f")},i.a.createElement(m.a,{component:S.c.AntInput,name:"username",type:"text",label:a("\u041b\u043e\u0433\u0438\u043d"),placeholder:a("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d"),hasFeedback:!0}),i.a.createElement(m.a,{component:S.c.AntInput,name:"password",type:"password",label:a("\u041f\u0430\u0440\u043e\u043b\u044c"),placeholder:a("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"),hasFeedback:!0}),i.a.createElement(m.a,{component:S.c.AntInput,name:"email",type:"email",label:a("\u042d\u043b. \u0430\u0434\u0440\u0435\u0441"),placeholder:a("example@gmail.com"),hasFeedback:!0}),i.a.createElement(m.a,{component:S.c.AntInput,name:"fullname",type:"text",label:a("\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f"),placeholder:a("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"),hasFeedback:!0}),i.a.createElement(m.a,{name:"phone",type:"text",label:a("\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"),placeholder:a("+998 99 123 45 67"),render:function(e){var n=e.field,r=e.form,l=r.errors[n.name],o=r.touched[n.name],c=Object(p.a)("ant-form-item-control",o&&l&&"has-error");return i.a.createElement("div",{className:"field-container"},i.a.createElement("div",{className:"ant-row ant-form-item"},i.a.createElement("div",{className:c},i.a.createElement("span",{className:"ant-form-item-children"},i.a.createElement("div",{className:"ant-label"},a("\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430")),i.a.createElement(b.a,{className:"phone-input",displayType:"input",format:"### ## ### ## ##",value:t.phone,placeholder:"998 99 123 45 67",onChange:function(e){var a=e.target;r.setFieldValue(n.name,a.value)},onBlur:function(){r.setFieldTouched(n.name,!0)}})),o&&l&&i.a.createElement("div",{className:"ant-form-explain"},l))))}}),i.a.createElement(h.a,{type:"primary",htmlType:"submit"},a("\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c")))),i.a.createElement(v.a,{className:"gutter-row",lg:8},i.a.createElement(S.f,{title:a("\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b")},i.a.createElement(m.a,{component:S.c.AsyncSelect,name:"museum_id",label:a("\u041c\u0443\u0437\u0435\u0439"),placeholder:a("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u0443\u0437\u0435\u0439"),optionLabel:function(e){return d()(e,"item.title")},optionValue:"model_item_id",loadOptionsUrl:"/items/search/result/museum",loadOptionsParams:function(e){return{filter:{name:e}}},loadOptionsKey:"items",isDisabled:!("user"==t.role),isSearchable:!0}),i.a.createElement(m.a,{component:S.c.AntSelect,name:"role",label:a("\u0420\u043e\u043b\u044c"),placeholder:a("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u043e\u043b\u044c"),selectOptions:u}),i.a.createElement(m.a,{component:S.c.AntSelect,name:"status",label:a("\u0421\u0442\u0430\u0442\u0443\u0441"),placeholder:a("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441"),selectOptions:s}))))}({isSubmitting:t,setFieldValue:r,values:l,isFetched:n}))})))}))})},981:function(e,a,t){"use strict";var n=t(25),r=t(4),i=t(0),l=t.n(i),o=t(73),c=t(63),s=t(90),m=t(976),u=t(985),d=t(14),p=t.n(d),f=t(108),b=t.n(f),y=t(974),v=t(52),h=function(e){var a=e.children,t=e.handleSubmit,n=e.values,r=e.isSubmitting,i=e.setFieldValue,o=e.isValid,c=e.errors;return l.a.createElement("form",{onSubmit:t,autoComplete:"off"},a({handleSubmit:t,values:n,setFieldValue:i,isSubmitting:r,isValid:o,errors:c}))},E=Object(m.c)({enableReinitialize:!0,validationSchema:function(e){var a=e.fields,t=e.t;if(!b()(a))return u.object().shape({});var n={};return a.forEach(function(e){var a;switch(e.type){case"email":a=u.string().email(t("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 email"));break;case"string":a=u.string().typeError(t("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0430"));break;case"object":a=u.object();break;case"number":a=u.number().typeError(t("\u0414\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c"));break;case"array":a=u.array();break;case"boolean":a=u.boolean();break;case"date":a=u.date();break;default:a=u.string()}e.required&&(a=a.required(t("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"))),e.min&&(a=a.min(e.min,t("\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u043e!"))),e.max&&(a=a.max(e.max,t("\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043e\u043b\u0433\u043e!"))),a=a.nullable(),n[e.name]=a}),u.object().shape(n)},mapPropsToValues:function(e){var a=e.fields;return b()(a)?a.reduce(function(e,a){return Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},a.name,p()(a,"value","")))},{}):{}},handleSubmit:function(e,a){var t=a.props,n=a.setFieldError,i=a.setSubmitting,l=a.resetForm,o=t.fields,c=t.entity,s=t.name,m=t.id,u=t.url,d=t.params,p=t.isCreate,f=t.isDelete,b=t.loadEntity,v=t.primaryKey,h=t.CreateAction,E=t.appendIds,g=void 0!==E&&E,O=t.prependIds,j=void 0!==O&&O,S=t.DeleteAction,w=t.UpdateAction,k=t.valuesAsFormData,F=void 0===k||k,A=t.onSuccess,V=void 0===A?function(){}:A,q=t.onError,K=void 0===q?function(){}:q;e=Object(r.a)({},e),"function"===typeof u&&(u=u(Object(r.a)({},e))),o.forEach(function(a){a.hasOwnProperty("onSubmitValue")&&"function"===typeof a.onSubmitValue&&(a.hasOwnProperty("onSubmitKey")?(e[a.onSubmitKey]=a.onSubmitValue(e[a.name],e),delete e[a.name]):e[a.name]=a.onSubmitValue(e[a.name],e)),a.hasOwnProperty("optionTitle")&&a.hasOwnProperty("optionTitleKey")&&(e[a.optionTitle]=e[a.name][a.optionTitleKey]),a.hasOwnProperty("optionKey")&&a.hasOwnProperty("optionValue")&&(e[a.optionKey]=e[a.name][a.optionValue],delete e[a.name]),a.hasOwnProperty("disabled")&&delete e[a.name]});var x=e;F&&(x=new FormData,Object.keys(e).forEach(function(a){e[a]instanceof Array?e[a].forEach(function(e){x.append("".concat(a,"[]"),e)}):x.append(a,e[a])})),f?S({id:m,entity:c,name:s,url:u,params:d,values:x,cb:{success:function(){y.a.success({message:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d",duration:2}),V({},{resetForm:l})},error:function(e){y.a.error({message:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a",duration:2}),e instanceof Array?e.map(function(e){var a=e.field,t=e.message;n(a,t)}):e instanceof Object&&Object.keys(e).map(function(a){var t=e[a][0];n(a,t)}),K(e)},finally:function(){i(!1)}}}):p?h({entity:c,name:s,url:u,params:d,values:e,appendIds:g,prependIds:j,loadEntity:b,primaryKey:v,cb:{success:function(e){y.a.success({message:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d",duration:2}),V(e,{resetForm:l})},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];y.a.error({message:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a",duration:2}),e instanceof Array?e.map(function(e){var a=e.field,t=e.message;n(a,t)}):e instanceof Object&&Object.keys(e).map(function(a){var t=e[a][0];n(a,t)}),K()},finally:function(){i(!1)}}}):w({entity:c,name:s,url:u,id:m,params:d,values:e,loadEntity:b,primaryKey:v,cb:{success:function(e){y.a.success({message:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e",duration:2}),V(e,{resetForm:l})},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];y.a.error({message:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a",duration:2}),e instanceof Array?e.map(function(e){var a=e.field,t=e.message;n(a,t)}):e instanceof Object&&Object.keys(e).map(function(a){var t=e[a][0];n(a,t)}),K()},finally:function(){i(!1)}}})}})(h);h.defaultProps={loadEntity:!0};a.a=Object(o.b)(null,function(e){return Object(c.bindActionCreators)({CreateAction:v.default.Create.request,UpdateAction:v.default.Update.request,DeleteAction:v.default.Delete.request},e)})(Object(s.c)("main")(E))}}]);