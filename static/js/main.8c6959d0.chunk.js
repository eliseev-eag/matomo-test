(this["webpackJsonpviz-react"]=this["webpackJsonpviz-react"]||[]).push([[0],{281:function(e,t,n){e.exports=n(503)},502:function(e,t,n){},503:function(e,t,n){"use strict";n.r(t);var a,r,c,o=n(0),i=n.n(o),l=n(6),u=n.n(l),s=n(22),p=n(121),b=n(68),m=n(261),f=n(123),d=n(29),O=n(204),j=n.n(O),y=n(262),E=n(523),v=n(515),h=n(521),g=n(511),w=n(506);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=Object(E.a)("loadEventsRequest"),P=Object(E.a)("loadEventsSuccess"),k=Object(E.a)("loadEventsFailure"),x=Object(E.a)("editEvent"),_=Object(E.a)("deleteEvent"),I=Object(E.a)("addEvent"),M=Object(b.c)({isFetching:Object(v.a)((a={},Object(d.a)(a,S,(function(){return!0})),Object(d.a)(a,Object(h.a)(P,k),(function(){return!1})),a),!1),error:Object(v.a)((r={},Object(d.a)(r,S,(function(){return null})),Object(d.a)(r,k,(function(e,t){return t})),r),null),eventTypes:Object(v.a)(Object(d.a)({},P,(function(e,t){return t.payload.eventTypes})),[]),persons:Object(v.a)(Object(d.a)({},P,(function(e,t){return t.payload.persons})),[]),toponyms:Object(v.a)(Object(d.a)({},P,(function(e,t){return t.payload.toponyms})),[]),events:Object(v.a)((c={},Object(d.a)(c,P,(function(e,t){return Object(g.a)(t.payload.events.map((function(e){return C({},e,{startDate:new Date(e.startDate),endDate:new Date(e.endDate)})})),(function(e){return e.endDate-e.startDate}),"desc")})),Object(d.a)(c,x,(function(e,t){return e.map((function(e){return e.id===t.payload.id?t.payload:e}))})),Object(d.a)(c,_,(function(e,t){return e.filter((function(e){return e.id!==t.payload.id}))})),Object(d.a)(c,I,(function(e,t){return[].concat(Object(f.a)(e),[C({},t.payload,{id:Object(w.a)()})])})),c),[])}),F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,T=Object(b.e)(M,F(Object(b.a)(m.a))),L=n(59),R=n(72),Y=n(507),N=n(108),z=n(8),A=n(519),H=n(267),K=n(508),V=function(e){return e.events},B=function(e){return e.toponyms},J=function(e){return e.persons},U=function(e){return e.eventTypes},X=function(e){return e.isFetching},q=function(e){return e.error},G=n(514),Q=n(264),W=n.n(Q),Z={align:"center",minHeight:"400px",maxHeight:"400px",type:"range",tooltip:{followMouse:!0,overflowMethod:"cap"},snap:null,orientation:{axis:"both"},zoomMin:432e6},$=Object(G.a)(U,(function(e){return e.map((function(e){return{id:e.id,content:e.type}}))})),ee=Object(G.a)(V,(function(e){return e.slice(0,10).map((function(e){return{start:e.startDate,end:e.endDate,content:e.name,duration:e.endDate-e.startDate,group:e.type,type:e.endDate-e.startDate<=864e5?"point":"range"}}))})),te=function(){var e=Object(s.c)(ee),t=Object(s.c)($);return i.a.createElement("div",null,e&&e.length>0&&i.a.createElement(W.a,{options:Z,items:e,groups:t}))},ne=function(){var e=Object(s.c)(X),t=Object(s.c)(q);return i.a.createElement(Y.a,null,i.a.createElement(A.a,{ghost:!1,title:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0434\u0430\u043d\u043d\u044b\u0445"}),i.a.createElement(Y.a.Content,null,e&&i.a.createElement("div",{style:{minHeight:200,display:"flex",alignItems:"center",justifyContent:"center"}},i.a.createElement(H.a,{size:"large"})),t&&i.a.createElement(K.a,{message:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430",description:t,type:"error",showIcon:!0}),!e&&!t&&i.a.createElement(te,null)))},ae=n(14),re=n.n(ae),ce=n(56),oe=function(e){var t=e.filename,n=void 0===t?"events.json":t,a=Object(s.c)(V),r=Object(s.c)(U),c=Object(s.c)(J),o=Object(s.c)(B),l=JSON.stringify({events:a,eventTypes:r,toponyms:o,persons:c});return i.a.createElement(ce.a,{download:n,href:URL.createObjectURL(new Blob([l],{type:"application/json"}))},i.a.createElement(z.a,{type:"download"}),"Export to json")},ie=n(522),le=n(509),ue=n(518),se=n(512);function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var be=function(e){return e.toLocaleString("ru",{year:"numeric",month:"numeric",day:"numeric"})},me=function(e){return e.type},fe=function(e){return e.map((function(e){return"".concat(e.surname," ").concat(e.name," ").concat(e.patron)})).join()},de=function(e){return e.map((function(e){return e.name})).join()},Oe=function(e,t){return e.startDate-t.startDate},je=function(e,t){return e.endDate-t.endDate},ye=function(e){var t=e.onAdd,n=e.onSelect,a=e.deleteRow,r=Object(o.useState)(""),c=Object(L.a)(r,2),l=c[0],u=c[1],p=Object(s.c)(U),b=Object(s.c)(J),m=Object(s.c)(B),f=Object(s.c)(V),O=Object(o.useMemo)((function(){return f.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{type:p.find((function(t){return t.id===e.type})),persons:e.persons?e.persons.map((function(e){return b.find((function(t){return t.id===e}))})):[],toponyms:e.toponyms?e.toponyms.map((function(e){return m.find((function(t){return t.id===e}))})):[]})})).filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}))}),[f,p,b,m,l]),j=Object(o.useCallback)((function(e){return{onClick:n?function(){return n(e)}:void 0}}),[n]),y=Object(o.useCallback)(Object(ie.a)((function(e){return u(e)})),[]);return i.a.createElement("div",null,i.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 20px"}},i.a.createElement(ce.a,{type:"primary",onClick:t},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),i.a.createElement(ue.a.Search,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430",onSearch:y,style:{width:400}})),i.a.createElement(se.a,{dataSource:O,rowKey:function(e){return e.id},onRow:j},i.a.createElement(se.a.Column,{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",dataIndex:"name",width:"35%"}),i.a.createElement(se.a.Column,{title:"\u0414\u0430\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430",dataIndex:"startDate",width:"10%",sorter:Oe,render:be}),i.a.createElement(se.a.Column,{title:"\u0414\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f",dataIndex:"endDate",width:"10%",sorter:je,render:be}),i.a.createElement(se.a.Column,{title:"\u0422\u0438\u043f",dataIndex:"type",width:"10%",filters:p.map((function(e){return{value:e.id,text:e.type}})),onFilter:function(e,t){return t.type.id===e},render:me}),i.a.createElement(se.a.Column,{title:"\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043b\u0438\u0446\u0430",dataIndex:"persons",width:"15%",render:fe}),i.a.createElement(se.a.Column,{title:"\u0422\u043e\u043f\u043e\u043d\u0438\u043c\u044b",dataIndex:"toponyms",width:"15%",render:de}),i.a.createElement(se.a.Column,{title:"",key:"delete",render:function(e,t){return i.a.createElement(le.a,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",onConfirm:function(e){e.stopPropagation(),a(t)},onCancel:function(e){e.stopPropagation()},okText:"\u0414\u0430",cancelText:"\u041d\u0435\u0442"},i.a.createElement(ce.a,{type:"link",onClick:function(e){e.stopPropagation()}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))}})))},Ee=n(162),ve=n(520),he=n(516),ge=n(510),we=n(164),De=n(101),Ce=n(513),Se=n(122),Pe=function(e){return e.id},ke=function(e){return e.name},xe=[],_e=function(e){var t=e.options,n=void 0===t?xe:t,a=e.optionKeyFactory,r=void 0===a?Pe:a,c=e.optionValueFactory,o=void 0===c?Pe:c,l=e.optionNameFactory,u=void 0===l?ke:l,s=Object(we.a)(e,["options","optionKeyFactory","optionValueFactory","optionNameFactory"]);return i.a.createElement(Se.a,s,n.map((function(e){return i.a.createElement(Se.a.Option,{key:r(e),value:o(e)},u(e))})))},Ie=n(517),Me=function(e){return e.id},Fe=function(e){return e.name},Te=[],Le=Object(o.forwardRef)((function(e,t){var n=e.allOptions,a=e.value,r=void 0===a?Te:a,c=e.onChange,l=e.placeholder,u=e.count,s=void 0===u?5:u,p=e.keySelector,b=void 0===p?Me:p,m=e.valueSelector,d=void 0===m?Me:m,O=e.nameSelector,j=void 0===O?Fe:O,y=Object(o.useState)([]),E=Object(L.a)(y,2),v=E[0],h=E[1],g=Object(o.useCallback)(Object(ie.a)((function(e){h(n.filter((function(t){return j(t).toLowerCase().includes(e.toLocaleLowerCase())})))}),300),[n]),w=Object(o.useCallback)((function(){h([])}),[]),D=Object(o.useCallback)((function(e){h([]),c(e)}),[c]),C=Object(o.useMemo)((function(){return r.map((function(e){return n.find((function(t){return d(t)===e}))}))}),[n,r,d]),S=Object(o.useMemo)((function(){return v.length?v.slice(0,s):Object(Ie.a)([].concat(Object(f.a)(n.slice(0,s)),Object(f.a)(C)))}),[n,s,v,C]),P=Object(o.useMemo)((function(){return v.length?v.length-s:n.length-S.length}),[n,s,v,S.length]);return i.a.createElement(Se.a,{ref:t,placeholder:l,mode:"multiple",filterOption:!1,onSearch:g,onChange:D,onBlur:w,value:r},S.map((function(e){return i.a.createElement(Se.a.Option,{key:b(e),value:d(e)},j(e))})),P>0&&i.a.createElement(Se.a.Option,{key:"__hidedOptionsCount__",value:"__hidedOptionsCount__",disabled:!0},"\u0415\u0449\u0435 ",P," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432"))})),Re=function(e){return function(t){var n=t.name,a=t.label,r=Object(we.a)(t,["name","label"]);return i.a.createElement(Ee.a,{name:n,format:De.a,parse:De.a,allowNull:!0},(function(t){var n=t.input,c=n.value,o=n.onChange,l=t.meta,u=l.invalid,s=l.touched,p=l.error;return i.a.createElement(he.a.Item,{label:a,validateStatus:s&&u?"error":"success",help:p},i.a.createElement(e,Object.assign({value:c,onChange:o},r)))}))}},Ye=(Re(ue.a),Re(ue.a.TextArea)),Ne=Re(Ce.a),ze=Re(_e),Ae=Re(Le);function He(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var Ke=function(e){return e.type},Ve=function(e){var t=e.event,n=e.onSubmit,a=e.visible,r=e.onClose,c=e.title,o=Object(s.c)(U),l=Object(s.c)(B),u=Object(s.c)(J);return i.a.createElement(ve.a,{title:c,visible:a,onClose:r,placement:"right",width:450,closable:!0,destroyOnClose:!0},i.a.createElement(Ee.b,{initialValues:t,onSubmit:function(e){n(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?He(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):He(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:t?t.id:null},e))}},(function(e){var t=e.handleSubmit;return i.a.createElement(he.a,{layout:"vertical",onSubmit:t},i.a.createElement(ge.a,null,i.a.createElement(Ye,{name:"name",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",rows:4,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"})),i.a.createElement(ge.a,null,i.a.createElement(Ne,{name:"startDate",label:"\u0414\u0430\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430",format:"DD.MM.YYYY"})),i.a.createElement(ge.a,null,i.a.createElement(Ne,{name:"endDate",label:"\u0414\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f",format:"DD.MM.YYYY"})),i.a.createElement(ge.a,null,i.a.createElement(ze,{name:"type",label:"\u0422\u0438\u043f",options:o,optionNameFactory:Ke})),i.a.createElement(ge.a,null,i.a.createElement(Ae,{name:"toponyms",label:"\u0422\u043e\u043f\u043e\u043d\u0438\u043c\u044b",allOptions:l,placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u043e\u043f\u043e\u043d\u0438\u043c\u044b"})),i.a.createElement(ge.a,null,i.a.createElement(Ae,{name:"persons",label:"\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043b\u0438\u0446\u0430",allOptions:u,nameSelector:function(e){return"".concat(e.surname," ").concat(e.name," ").concat(e.patron)},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u043b\u0438\u0446"})),i.a.createElement("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right"}},i.a.createElement(ce.a,{htmlType:"submit",type:"primary"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))})))};function Be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Be(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Be(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ue=function(){var e=Object(s.b)(),t=Object(o.useState)(!1),n=Object(L.a)(t,2),a=n[0],r=n[1],c=Object(o.useState)(null),l=Object(L.a)(c,2),u=l[0],p=l[1],b=Object(o.useCallback)((function(e){return p(Je({},e,{startDate:re()(e.startDate),endDate:re()(e.endDate),type:e.type.id,toponyms:e.toponyms.map((function(e){return e.id})),persons:e.persons.map((function(e){return e.id}))}))}),[]),m=Object(o.useCallback)((function(){a?r(!1):p(null)}),[a]),f=Object(o.useCallback)((function(t){e(x(Je({},t,{endDate:t.endDate.toDate(),startDate:t.startDate.toDate()}))),m()}),[e,m]),d=Object(o.useCallback)((function(t){e(_(t))}),[e]),O=Object(o.useCallback)((function(t){e(I(Je({},t,{endDate:t.endDate.toDate(),startDate:t.startDate.toDate()}))),m()}),[m,e]),j=Object(o.useCallback)((function(){r(!0)}),[]);return i.a.createElement(Y.a,null,i.a.createElement(A.a,{ghost:!1,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",extra:i.a.createElement(oe,null)}),i.a.createElement(Y.a.Content,null,i.a.createElement(ye,{onAdd:j,onSelect:b,deleteRow:d}),i.a.createElement(Ve,{event:u,visible:null!==u||a,onClose:m,onSubmit:a?O:f,title:a?"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"})))},Xe=["/view","/editor"],qe=function(){var e=Object(o.useState)(!0),t=Object(L.a)(e,2),a=t[0],r=t[1],c=Object(s.b)(),l=Object(R.g)().pathname,u=Object(o.useMemo)((function(){return[Xe.find((function(e){return e===l}))]}),[l]);return Object(o.useEffect)((function(){c(function(){var e=Object(y.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(S()),e.prev=1,e.next=4,n.e(3).then(n.t.bind(null,524,3));case 4:a=e.sent,t(P(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(k(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[c]),i.a.createElement(Y.a,{style:{minHeight:"100vh"},hasSider:!0},i.a.createElement(Y.a.Sider,{theme:"dark",collapsible:!0,width:240,collapsed:a,onCollapse:r,style:{overflow:"auto",height:"100vh",position:"fixed",left:0}},i.a.createElement(N.a,{theme:"dark",mode:"inline",selectedKeys:u},i.a.createElement(N.a.Item,{key:"/view"},i.a.createElement(p.b,{to:"/view"},i.a.createElement(z.a,{type:"pie-chart"}),i.a.createElement("span",null,"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0434\u0430\u043d\u043d\u044b\u0445"))),i.a.createElement(N.a.Item,{key:"/editor"},i.a.createElement(p.b,{to:"/editor"},i.a.createElement(z.a,{type:"edit"}),i.a.createElement("span",null,"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"))))),i.a.createElement(Y.a,{style:{marginLeft:a?80:240,transition:"margin 0.2s"}},i.a.createElement(Y.a.Content,null,i.a.createElement(R.d,null,i.a.createElement(R.b,{path:"/view",component:ne}),i.a.createElement(R.b,{path:"/editor",component:Ue}),i.a.createElement(R.a,{to:"/view"})))))};n(502);u.a.render(i.a.createElement(p.a,null,i.a.createElement(s.a,{store:T},i.a.createElement(qe,null))),document.getElementById("root"))}},[[281,1,2]]]);
//# sourceMappingURL=main.8c6959d0.chunk.js.map