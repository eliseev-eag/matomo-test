(this["webpackJsonpviz-react"]=this["webpackJsonpviz-react"]||[]).push([[0],{277:function(e,t,n){e.exports=n(499)},498:function(e,t,n){},499:function(e,t,n){"use strict";n.r(t);var a,r,c,o=n(0),i=n.n(o),l=n(6),u=n.n(l),s=n(21),p=n(83),d=n(68),b=n(257),m=n(122),f=n(29),O=n(200),j=n.n(O),y=n(258),v=n(519),E=n(512),h=n(517),g=n(508),w=n(502);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=Object(v.a)("loadEventsRequest"),k=Object(v.a)("loadEventsSuccess"),S=Object(v.a)("loadEventsFailure"),x=Object(v.a)("editEvent"),F=Object(v.a)("deleteEvent"),I=Object(v.a)("addEvent"),_=Object(d.c)({isFetching:Object(E.a)((a={},Object(f.a)(a,P,(function(){return!0})),Object(f.a)(a,Object(h.a)(k,S),(function(){return!1})),a),!1),error:Object(E.a)((r={},Object(f.a)(r,P,(function(){return null})),Object(f.a)(r,S,(function(e,t){return t})),r),null),eventTypes:Object(E.a)(Object(f.a)({},k,(function(e,t){return t.payload.eventTypes})),[]),persons:Object(E.a)(Object(f.a)({},k,(function(e,t){return t.payload.persons})),[]),toponyms:Object(E.a)(Object(f.a)({},k,(function(e,t){return t.payload.toponyms})),[]),events:Object(E.a)((c={},Object(f.a)(c,k,(function(e,t){return Object(g.a)(t.payload.events.map((function(e){return C({},e,{startDate:new Date(e.startDate),endDate:new Date(e.endDate)})})),(function(e){return e.endDate-e.startDate}),"desc")})),Object(f.a)(c,x,(function(e,t){return e.map((function(e){return e.id===t.payload.id?t.payload:e}))})),Object(f.a)(c,F,(function(e,t){return e.filter((function(e){return e.id!==t.payload.id}))})),Object(f.a)(c,I,(function(e,t){return[].concat(Object(m.a)(e),[C({},t.payload,{id:Object(w.a)()})])})),c),[])}),M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.d,N=Object(d.e)(_,M(Object(d.a)(b.a))),T=n(67),L=n(72),R=n(503),A=n(107),z=n(8),H=n(515),K=n(263),V=n(504),B=function(e){return e.events},Y=function(e){return e.toponyms},J=function(e){return e.persons},U=function(e){return e.eventTypes},X=function(e){return e.isFetching},q=function(e){return e.error},G=n(260),Q=n.n(G),W={align:"center",minHeight:"400px",maxHeight:"400px",type:"range",tooltip:{followMouse:!0,overflowMethod:"cap"},snap:null,orientation:{axis:"both"},zoomMin:432e6},Z=function(){var e=Object(s.c)(B),t=Object(s.c)(U),n=Object(o.useMemo)((function(){return e.slice(0,10).map((function(e){return{start:e.startDate,end:e.endDate,content:e.name,duration:e.endDate-e.startDate,group:e.type,type:e.endDate-e.startDate<=864e5?"point":"range",title:(t=e,'\n  <div>\n    <h3 className="event-name">'.concat(t.name,'</h3>\n    <hr />\n    <div className="dates">\n      <div>\n        ').concat(t.startDate.toLocaleDateString()," - ").concat(t.endDate.toLocaleDateString(),"\n      </div>\n      <div>\n        <b>\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c: </b>\n        ").concat(Math.floor((t.endDate-t.startDate)/864e5)," \u0434\u043d.\n      </div>\n    </div>\n  </div>\n"))};var t}))}),[e]),a=Object(o.useMemo)((function(){return t.map((function(e){return{id:e.id,content:e.type}}))}),[t]);return i.a.createElement("div",null,n&&n.length>0&&i.a.createElement(Q.a,{options:W,items:n,groups:a}))},$=function(){var e=Object(s.c)(X),t=Object(s.c)(q);return i.a.createElement(R.a,null,i.a.createElement(H.a,{ghost:!1,title:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0434\u0430\u043d\u043d\u044b\u0445"}),i.a.createElement(R.a.Content,null,e&&i.a.createElement("div",{style:{minHeight:200,display:"flex",alignItems:"center",justifyContent:"center"}},i.a.createElement(K.a,{size:"large"})),t&&i.a.createElement(V.a,{message:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430",description:t,type:"error",showIcon:!0}),!e&&!t&&i.a.createElement(Z,null)))},ee=n(56),te=function(e){var t=e.filename,n=void 0===t?"events.json":t,a=Object(s.c)(B),r=Object(s.c)(U),c=Object(s.c)(J),o=Object(s.c)(Y),l=JSON.stringify({events:a,eventTypes:r,toponyms:o,persons:c});return i.a.createElement(ee.a,{download:n,href:URL.createObjectURL(new Blob([l],{type:"application/json"}))},i.a.createElement(z.a,{type:"download"}),"Export to json")},ne=n(518),ae=n(505),re=n(514),ce=n(509);function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var ie=function(e){return e.toLocaleString("ru",{year:"numeric",month:"numeric",day:"numeric"})},le=function(e){return e.type},ue=function(e){return e.map((function(e){return"".concat(e.surname," ").concat(e.name," ").concat(e.patron)})).join()},se=function(e){return e.map((function(e){return e.name})).join()},pe=function(e,t){return e.startDate-t.startDate},de=function(e,t){return e.endDate-t.endDate},be=function(e){var t=e.onAdd,n=e.onSelect,a=e.deleteRow,r=Object(o.useState)(""),c=Object(T.a)(r,2),l=c[0],u=c[1],p=Object(s.c)(U),d=Object(s.c)(J),b=Object(s.c)(Y),m=Object(s.c)(B),O=Object(o.useMemo)((function(){return m.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{type:p.find((function(t){return t.id===e.type})),persons:e.persons?e.persons.map((function(e){return d.find((function(t){return t.id===e}))})):[],toponyms:e.toponyms?e.toponyms.map((function(e){return b.find((function(t){return t.id===e}))})):[]})})).filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}))}),[m,p,d,b,l]),j=Object(o.useCallback)((function(e){return{onClick:n?function(){return n(e)}:void 0}}),[n]),y=Object(o.useCallback)(Object(ne.a)((function(e){return u(e)})),[]);return i.a.createElement("div",null,i.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 20px"}},i.a.createElement(ee.a,{type:"primary",onClick:t},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),i.a.createElement(re.a.Search,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430",onSearch:y,style:{width:400}})),i.a.createElement(ce.a,{dataSource:O,rowKey:function(e){return e.id},onRow:j},i.a.createElement(ce.a.Column,{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",dataIndex:"name",width:"35%"}),i.a.createElement(ce.a.Column,{title:"\u0414\u0430\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430",dataIndex:"startDate",width:"10%",sorter:pe,render:ie}),i.a.createElement(ce.a.Column,{title:"\u0414\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f",dataIndex:"endDate",width:"10%",sorter:de,render:ie}),i.a.createElement(ce.a.Column,{title:"\u0422\u0438\u043f",dataIndex:"type",width:"10%",filters:p.map((function(e){return{value:e.id,text:e.type}})),onFilter:function(e,t){return t.type.id===e},render:le}),i.a.createElement(ce.a.Column,{title:"\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043b\u0438\u0446\u0430",dataIndex:"persons",width:"15%",render:ue}),i.a.createElement(ce.a.Column,{title:"\u0422\u043e\u043f\u043e\u043d\u0438\u043c\u044b",dataIndex:"toponyms",width:"15%",render:se}),i.a.createElement(ce.a.Column,{title:"",key:"delete",render:function(e,t){return i.a.createElement(ae.a,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",onConfirm:function(e){e.stopPropagation(),a(t)},onCancel:function(e){e.stopPropagation()},okText:"\u0414\u0430",cancelText:"\u041d\u0435\u0442"},i.a.createElement(ee.a,{type:"link",onClick:function(e){e.stopPropagation()}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))}})))},me=n(159),fe=n(516),Oe=n(511),je=n(507),ye=n(14),ve=n.n(ye),Ee=n(88),he=n(141),ge=n(510),we=function(e){var t=e.dateFormat,n=void 0===t?"DD.MM.YYYY":t,a=Object(Ee.a)(e,["dateFormat"]);return i.a.createElement(ge.a,Object.assign({format:n},a))},De=n(121),Ce=function(e){return e.id},Pe=function(e){return e.name},ke=[],Se=function(e){var t=e.options,n=void 0===t?ke:t,a=e.optionKeyFactory,r=void 0===a?Ce:a,c=e.optionValueFactory,o=void 0===c?Ce:c,l=e.optionNameFactory,u=void 0===l?Pe:l,s=Object(Ee.a)(e,["options","optionKeyFactory","optionValueFactory","optionNameFactory"]);return i.a.createElement(De.a,s,n.map((function(e){return i.a.createElement(De.a.Option,{key:r(e),value:o(e)},u(e))})))},xe=n(513),Fe=[],Ie=function(e){var t=e.allOptions,n=e.value,a=void 0===n?Fe:n,r=e.onChange,c=e.placeholder,l=e.count,u=void 0===l?5:l,s=e.optionKeyFactory,p=void 0===s?Ce:s,d=e.optionValueFactory,b=void 0===d?Ce:d,f=e.optionNameFactory,O=void 0===f?Pe:f,j=Object(o.useState)([]),y=Object(T.a)(j,2),v=y[0],E=y[1],h=Object(o.useCallback)(Object(ne.a)((function(e){E(t.filter((function(t){return O(t).toLowerCase().includes(e.toLocaleLowerCase())})))}),300),[t]),g=Object(o.useCallback)((function(){E([])}),[]),w=Object(o.useCallback)((function(e){E([]),r(e)}),[r]),D=Object(o.useMemo)((function(){return a.map((function(e){return t.find((function(t){return b(t)===e}))}))}),[t,a,b]),C=Object(o.useMemo)((function(){return v.length?v.slice(0,u):Object(xe.a)([].concat(Object(m.a)(t.slice(0,u)),Object(m.a)(D)))}),[t,u,v,D]),P=Object(o.useMemo)((function(){return v.length?v.length-u:t.length-C.length}),[t,u,v,C.length]);return i.a.createElement(De.a,{placeholder:c,mode:"multiple",filterOption:!1,onSearch:h,onChange:w,onBlur:g,value:a},C.map((function(e){return i.a.createElement(De.a.Option,{key:p(e),value:b(e)},O(e))})),P>0&&i.a.createElement(De.a.Option,{key:"__hidedOptionsCount__",value:"__hidedOptionsCount__",disabled:!0},"\u0415\u0449\u0435 ",P," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432"))},_e=function(e){return function(t){var n=t.name,a=t.label,r=t.validate,c=t.allowNull,o=void 0===c||c,l=t.format,u=void 0===l?he.a:l,s=t.parse,p=void 0===s?he.a:s,d=Object(Ee.a)(t,["name","label","validate","allowNull","format","parse"]);return i.a.createElement(me.a,{name:n,format:u,parse:p,allowNull:o,validate:r},(function(t){var n=t.input,r=n.value,c=n.onChange,o=t.meta,l=o.invalid,u=o.touched,s=o.error;return i.a.createElement(Oe.a.Item,{label:a,validateStatus:u&&l?"error":"success",help:s},i.a.createElement(e,Object.assign({value:r,onChange:c},d)))}))}},Me=function(e){return function(t){var n=t.debounceTimeout,a=void 0===n?300:n,r=t.onChange,c=t.value,l=Object(Ee.a)(t,["debounceTimeout","onChange","value"]),u=Object(o.useState)(c),s=Object(T.a)(u,2),p=s[0],d=s[1],b=Object(o.useCallback)(Object(ne.a)((function(e){r(e)}),a),[]),m=Object(o.useCallback)((function(e){var t=e.target.value;d(t),b(t)}),[b]);return i.a.createElement(e,Object.assign({value:p,onChange:m},l))}},Ne=(_e(Me(re.a)),_e(Me(re.a.TextArea))),Te=_e(we),Le=_e(Se),Re=_e(Ie),Ae=n(506),ze=n(27),He=function(e){return Object(Ae.a)(e)||""===e||Object(ze.a)(e)&&0===e.length?"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e":void 0},Ke=function(e,t){return function(n,a){return n.isBefore(a[e],"day")?"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c ".concat(t):void 0}},Ve=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e,n,a){return t.reduce((function(t,r){return t||r(e,n,a)}),void 0)}};function Be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var Ye=function(e){return e.type},Je=function(e){return"".concat(e.surname," ").concat(e.name," ").concat(e.patron)},Ue=function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Be(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Be(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{startDate:ve()(e.startDate),endDate:ve()(e.endDate)})},Xe={name:null,startDate:null,endDate:null,type:null,toponyms:[],persons:[]},qe=function(e){var t=e.onSubmit,n=e.onClose,a=e.title,r=Object(s.c)(U),c=Object(s.c)(Y),o=Object(s.c)(J),l=Object(s.c)(B),u=Object(L.j)().id;if(l.length<1)return i.a.createElement("div",{style:{minHeight:200,display:"flex",alignItems:"center",justifyContent:"center"}},i.a.createElement(K.a,{size:"large"}));var p=l.find((function(e){return e.id===Number(u)})),d=p?Ue(p):Xe;return i.a.createElement(fe.a,{title:a,onClose:n,placement:"right",width:450,visible:!0,closable:!0,destroyOnClose:!0},i.a.createElement(me.b,{initialValues:d,onSubmit:function(e){t(e)}},(function(e){var t,n,a=e.handleSubmit;return i.a.createElement(Oe.a,{layout:"vertical",onSubmit:a},i.a.createElement(je.a,null,i.a.createElement(Ne,{name:"name",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",rows:4,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",validate:He})),i.a.createElement(je.a,null,i.a.createElement(Te,{name:"startDate",label:"\u0414\u0430\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430",validate:Ve(He,(t="endDate",n="\u0414\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f",function(e,a){return e.isAfter(a[t],"day")?"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 \u0447\u0435\u043c ".concat(n):void 0}))})),i.a.createElement(je.a,null,i.a.createElement(Te,{name:"endDate",label:"\u0414\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f",validate:Ve(He,Ke("startDate","\u0414\u0430\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430"))})),i.a.createElement(je.a,null,i.a.createElement(Le,{name:"type",label:"\u0422\u0438\u043f",options:r,optionNameFactory:Ye,validate:He})),i.a.createElement(je.a,null,i.a.createElement(Re,{name:"toponyms",label:"\u0422\u043e\u043f\u043e\u043d\u0438\u043c\u044b",allOptions:c,placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u043e\u043f\u043e\u043d\u0438\u043c\u044b"})),i.a.createElement(je.a,null,i.a.createElement(Re,{name:"persons",label:"\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043b\u0438\u0446\u0430",allOptions:o,optionNameFactory:Je,placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u043b\u0438\u0446"})),i.a.createElement("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right"}},i.a.createElement(ee.a,{htmlType:"submit",type:"primary"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))})))},Ge="".concat("/editor","/add"),Qe="".concat("/editor","/edit/:id");function We(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ze(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?We(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):We(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $e=function(){var e=Object(s.b)(),t=Object(L.h)(),n=Object(o.useCallback)((function(e){t.push(Object(L.f)(Qe,{id:e.id}))}),[t]),a=Object(o.useCallback)((function(){t.push("/editor")}),[t]),r=Object(o.useCallback)((function(t){e(x(Ze({},t,{endDate:t.endDate.toDate(),startDate:t.startDate.toDate()}))),a()}),[e,a]),c=Object(o.useCallback)((function(t){e(F(t))}),[e]),l=Object(o.useCallback)((function(t){e(I(Ze({},t,{id:Object(w.a)(),endDate:t.endDate.toDate(),startDate:t.startDate.toDate()}))),a()}),[a,e]),u=Object(o.useCallback)((function(){t.push(Ge)}),[t]);return i.a.createElement(R.a,null,i.a.createElement(H.a,{ghost:!1,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",extra:i.a.createElement(te,null)}),i.a.createElement(R.a.Content,null,i.a.createElement(be,{onAdd:u,onSelect:n,deleteRow:c}),i.a.createElement(L.b,{path:Ge,render:function(){return i.a.createElement(qe,{onClose:a,onSubmit:l,title:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"})}}),i.a.createElement(L.b,{path:Qe,render:function(){return i.a.createElement(qe,{onClose:a,onSubmit:r,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"})}})))},et=["/view","/editor"],tt=function(){var e=Object(o.useState)(!0),t=Object(T.a)(e,2),a=t[0],r=t[1],c=Object(s.b)(),l=Object(L.i)().pathname,u=Object(o.useMemo)((function(){return[et.find((function(e){return e===l}))]}),[l]);return Object(o.useEffect)((function(){c(function(){var e=Object(y.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(P()),e.prev=1,e.next=4,n.e(3).then(n.t.bind(null,520,3));case 4:a=e.sent,t(k(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(S(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[c]),i.a.createElement(R.a,{style:{minHeight:"100vh"},hasSider:!0},i.a.createElement(R.a.Sider,{theme:"dark",collapsible:!0,width:240,collapsed:a,onCollapse:r,style:{overflow:"auto",height:"100vh",position:"fixed",left:0}},i.a.createElement(A.a,{theme:"dark",mode:"inline",selectedKeys:u},i.a.createElement(A.a.Item,{key:"/view"},i.a.createElement(p.b,{to:"/view"},i.a.createElement(z.a,{type:"pie-chart"}),i.a.createElement("span",null,"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0434\u0430\u043d\u043d\u044b\u0445"))),i.a.createElement(A.a.Item,{key:"/editor"},i.a.createElement(p.b,{to:"/editor"},i.a.createElement(z.a,{type:"edit"}),i.a.createElement("span",null,"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"))))),i.a.createElement(R.a,{style:{marginLeft:a?80:240,transition:"margin 0.2s"}},i.a.createElement(R.a.Content,null,i.a.createElement(L.d,null,i.a.createElement(L.b,{path:"/view",component:$}),i.a.createElement(L.b,{path:"/editor",component:$e}),i.a.createElement(L.a,{to:"/view"})))))};n(498);u.a.render(i.a.createElement(p.a,null,i.a.createElement(s.a,{store:N},i.a.createElement(tt,null))),document.getElementById("root"))}},[[277,1,2]]]);
//# sourceMappingURL=main.c515c3db.chunk.js.map