(this["webpackJsonpviz-react"]=this["webpackJsonpviz-react"]||[]).push([[0],{280:function(e,t,n){e.exports=n(502)},501:function(e,t,n){},502:function(e,t,n){"use strict";n.r(t);var a,r,c,o=n(0),l=n.n(o),i=n(6),u=n.n(i),s=n(22),p=n(122),m=n(67),b=n(260),f=n(124),O=n(29),d=n(203),j=n.n(d),y=n(261),E=n(522),v=n(515),h=n(520),g=n(510),w=n(505);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=Object(E.a)("loadEventsRequest"),S=Object(E.a)("loadEventsSuccess"),k=Object(E.a)("loadEventsFailure"),x=Object(E.a)("editEvent"),I=Object(E.a)("deleteEvent"),_=Object(E.a)("addEvent"),M=Object(m.c)({isFetching:Object(v.a)((a={},Object(O.a)(a,P,(function(){return!0})),Object(O.a)(a,Object(h.a)(S,k),(function(){return!1})),a),!1),error:Object(v.a)((r={},Object(O.a)(r,P,(function(){return null})),Object(O.a)(r,k,(function(e,t){return t})),r),null),eventTypes:Object(v.a)(Object(O.a)({},S,(function(e,t){return t.payload.eventTypes})),[]),persons:Object(v.a)(Object(O.a)({},S,(function(e,t){return t.payload.persons})),[]),toponyms:Object(v.a)(Object(O.a)({},S,(function(e,t){return t.payload.toponyms})),[]),events:Object(v.a)((c={},Object(O.a)(c,S,(function(e,t){return Object(g.a)(t.payload.events.map((function(e){return C({},e,{startDate:new Date(e.startDate),endDate:new Date(e.endDate)})})),(function(e){return e.endDate-e.startDate}),"desc")})),Object(O.a)(c,x,(function(e,t){return e.map((function(e){return e.id===t.payload.id?t.payload:e}))})),Object(O.a)(c,I,(function(e,t){return e.filter((function(e){return e.id!==t.payload.id}))})),Object(O.a)(c,_,(function(e,t){return[].concat(Object(f.a)(e),[C({},t.payload,{id:Object(w.a)()})])})),c),[])}),T=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,L=Object(m.e)(M,T(Object(m.a)(b.a))),N=n(59),R=n(71),Y=n(506),z=n(109),A=n(8),F=n(518),H=n(266),B=n(507),J=function(e){return e.events},U=function(e){return e.toponyms},K=function(e){return e.persons},V=function(e){return e.eventTypes},X=function(e){return e.isFetching},q=function(e){return e.error},G=n(513),Q=n(263),W=n.n(Q),Z={align:"center",minHeight:"400px",maxHeight:"400px",type:"range",tooltip:{followMouse:!0,overflowMethod:"cap"},snap:null,orientation:{axis:"both"},zoomMin:432e6},$=Object(G.a)(V,(function(e){return e.map((function(e){return{id:e.id,content:e.type}}))})),ee=Object(G.a)(J,(function(e){return e.slice(0,10).map((function(e){return{start:e.startDate,end:e.endDate,content:e.name,duration:e.endDate-e.startDate,group:e.type,type:e.endDate-e.startDate<=864e5?"point":"range"}}))})),te=function(){var e=Object(s.c)(ee),t=Object(s.c)($);return l.a.createElement("div",null,e&&e.length>0&&l.a.createElement(W.a,{options:Z,items:e,groups:t}))},ne=function(){var e=Object(s.c)(X),t=Object(s.c)(q);return l.a.createElement(Y.a,null,l.a.createElement(F.a,{ghost:!1,title:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0434\u0430\u043d\u043d\u044b\u0445"}),l.a.createElement(Y.a.Content,null,e&&l.a.createElement("div",{style:{minHeight:200,display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement(H.a,{size:"large"})),t&&l.a.createElement(B.a,{message:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430",description:t,type:"error",showIcon:!0}),!e&&!t&&l.a.createElement(te,null)))},ae=n(14),re=n.n(ae),ce=n(56),oe=function(e){var t=e.filename,n=void 0===t?"events.json":t,a=Object(s.c)(J),r=Object(s.c)(V),c=Object(s.c)(K),o=Object(s.c)(U),i=JSON.stringify({events:a,eventTypes:r,toponyms:o,persons:c});return l.a.createElement(ce.a,{download:n,href:URL.createObjectURL(new Blob([i],{type:"application/json"}))},l.a.createElement(A.a,{type:"download"}),"Export to json")},le=n(521),ie=n(508),ue=n(517),se=n(511);function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var me=function(e){return e.toLocaleString("ru",{year:"numeric",month:"numeric",day:"numeric"})},be=function(e){return e.type},fe=function(e){return e.map((function(e){return"".concat(e.surname," ").concat(e.name," ").concat(e.patron)})).join()},Oe=function(e){return e.map((function(e){return e.name})).join()},de=function(e,t){return e.startDate-t.startDate},je=function(e,t){return e.endDate-t.endDate},ye=function(e){var t=e.onAdd,n=e.onSelect,a=e.deleteRow,r=Object(o.useState)(""),c=Object(N.a)(r,2),i=c[0],u=c[1],p=Object(s.c)(V),m=Object(s.c)(K),b=Object(s.c)(U),f=Object(s.c)(J),d=Object(o.useMemo)((function(){return f.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{type:p.find((function(t){return t.id===e.type})),persons:e.persons?e.persons.map((function(e){return m.find((function(t){return t.id===e}))})):[],toponyms:e.toponyms?e.toponyms.map((function(e){return b.find((function(t){return t.id===e}))})):[]})})).filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}))}),[f,p,m,b,i]),j=Object(o.useCallback)((function(e){return{onClick:n?function(){return n(e)}:void 0}}),[n]),y=Object(o.useCallback)(Object(le.a)((function(e){return u(e)})),[]);return l.a.createElement("div",null,l.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 20px"}},l.a.createElement(ce.a,{type:"primary",onClick:t},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),l.a.createElement(ue.a.Search,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430",onSearch:y,style:{width:400}})),l.a.createElement(se.a,{dataSource:d,rowKey:function(e){return e.id},onRow:j},l.a.createElement(se.a.Column,{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",dataIndex:"name",width:"35%"}),l.a.createElement(se.a.Column,{title:"\u0414\u0430\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430",dataIndex:"startDate",width:"10%",sorter:de,render:me}),l.a.createElement(se.a.Column,{title:"\u0414\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f",dataIndex:"endDate",width:"10%",sorter:je,render:me}),l.a.createElement(se.a.Column,{title:"\u0422\u0438\u043f",dataIndex:"type",width:"10%",filters:p.map((function(e){return{value:e.id,text:e.type}})),onFilter:function(e,t){return t.type.id===e},render:be}),l.a.createElement(se.a.Column,{title:"\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043b\u0438\u0446\u0430",dataIndex:"persons",width:"15%",render:fe}),l.a.createElement(se.a.Column,{title:"\u0422\u043e\u043f\u043e\u043d\u0438\u043c\u044b",dataIndex:"toponyms",width:"15%",render:Oe}),l.a.createElement(se.a.Column,{title:"",key:"delete",render:function(e,t){return l.a.createElement(ie.a,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",onConfirm:function(e){e.stopPropagation(),a(t)},onCancel:function(e){e.stopPropagation()},okText:"\u0414\u0430",cancelText:"\u041d\u0435\u0442"},l.a.createElement(ce.a,{type:"link",onClick:function(e){e.stopPropagation()}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))}})))},Ee=n(75),ve=n(519),he=n(514),ge=n(509),we=n(512),De=n(123),Ce=n(102),Pe=n(516),Se=function(e){return e.id},ke=function(e){return e.name},xe=[],Ie=Object(o.forwardRef)((function(e,t){var n=e.allOptions,a=e.value,r=void 0===a?xe:a,c=e.onChange,i=e.placeholder,u=e.count,s=void 0===u?5:u,p=e.keySelector,m=void 0===p?Se:p,b=e.valueSelector,O=void 0===b?Se:b,d=e.nameSelector,j=void 0===d?ke:d,y=Object(o.useState)([]),E=Object(N.a)(y,2),v=E[0],h=E[1],g=Object(o.useCallback)(Object(le.a)((function(e){h(n.filter((function(t){return j(t).toLowerCase().includes(e.toLocaleLowerCase())})))}),300),[n]),w=Object(o.useCallback)((function(){h([])}),[]),D=Object(o.useCallback)((function(e){h([]),c(e)}),[c]),C=Object(o.useMemo)((function(){return r.map((function(e){return n.find((function(t){return O(t)===e}))}))}),[n,r,O]),P=Object(o.useMemo)((function(){return v.length?v.slice(0,s):Object(Pe.a)([].concat(Object(f.a)(n.slice(0,s)),Object(f.a)(C)))}),[n,s,v,C]),S=Object(o.useMemo)((function(){return v.length?v.length-s:n.length-P.length}),[n,s,v,P.length]);return l.a.createElement(De.a,{ref:t,placeholder:i,mode:"multiple",filterOption:!1,onSearch:g,onChange:D,onBlur:w,value:r},P.map((function(e){return l.a.createElement(De.a.Option,{key:m(e),value:O(e)},j(e))})),S>0&&l.a.createElement(De.a.Option,{key:"__hidedOptionsCount__",value:"__hidedOptionsCount__",disabled:!0},"\u0415\u0449\u0435 ",S," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432"))}));function _e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var Me=function(e){var t=e.event,n=e.onSubmit,a=e.visible,r=e.onClose,c=e.title,o=Object(s.c)(V),i=Object(s.c)(U),u=Object(s.c)(K);return l.a.createElement(ve.a,{title:c,visible:a,onClose:r,placement:"right",width:450,closable:!0,destroyOnClose:!0},l.a.createElement(Ee.b,{initialValues:t,onSubmit:function(e){n(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_e(Object(n),!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_e(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:t?t.id:null},e))}},(function(e){var t=e.handleSubmit;return l.a.createElement(he.a,{layout:"vertical",onSubmit:t},l.a.createElement(ge.a,null,l.a.createElement(Ee.a,{name:"name",allowNull:!0,format:Ce.a,parse:Ce.a},(function(e){var t=e.input,n=t.value,a=t.onChange;return l.a.createElement(he.a.Item,{label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"},l.a.createElement(ue.a.TextArea,{rows:4,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:n,onChange:a}))}))),l.a.createElement(ge.a,null,l.a.createElement(Ee.a,{name:"startDate",allowNull:!0,format:Ce.a,parse:Ce.a},(function(e){var t=e.input,n=t.value,a=t.onChange;return l.a.createElement(he.a.Item,{label:"\u0414\u0430\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430"},l.a.createElement(we.a,{format:"DD.MM.YYYY",value:n,onChange:a}))}))),l.a.createElement(ge.a,null,l.a.createElement(Ee.a,{name:"endDate",allowNull:!0,format:Ce.a,parse:Ce.a},(function(e){var t=e.input,n=t.value,a=t.onChange;return l.a.createElement(he.a.Item,{label:"\u0414\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f"},l.a.createElement(we.a,{format:"DD.MM.YYYY",value:n,onChange:a}))}))),l.a.createElement(ge.a,null,l.a.createElement(Ee.a,{name:"type",allowNull:!0,format:Ce.a,parse:Ce.a},(function(e){var t=e.input,n=t.value,a=t.onChange;return l.a.createElement(he.a.Item,{label:"\u0422\u0438\u043f"},l.a.createElement(De.a,{placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u0441\u043e\u0431\u044b\u0442\u0438\u044f",value:n,onChange:a},o.map((function(e){return l.a.createElement(De.a.Option,{key:e.id,value:e.id},e.type)}))))}))),l.a.createElement(ge.a,null,l.a.createElement(Ee.a,{name:"toponyms",allowNull:!0,format:Ce.a,parse:Ce.a},(function(e){var t=e.input,n=t.value,a=t.onChange;return l.a.createElement(he.a.Item,{label:"\u0422\u043e\u043f\u043e\u043d\u0438\u043c\u044b"},l.a.createElement(Ie,{allOptions:i,placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u043e\u043f\u043e\u043d\u0438\u043c\u044b",value:n,onChange:a}))}))),l.a.createElement(ge.a,null,l.a.createElement(Ee.a,{name:"persons",allowNull:!0,format:Ce.a,parse:Ce.a},(function(e){var t=e.input,n=t.value,a=t.onChange;return l.a.createElement(he.a.Item,{label:"\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043b\u0438\u0446\u0430"},l.a.createElement(Ie,{allOptions:u,nameSelector:function(e){return"".concat(e.surname," ").concat(e.name," ").concat(e.patron)},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u043b\u0438\u0446",value:n,onChange:a}))}))),l.a.createElement("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right"}},l.a.createElement(ce.a,{htmlType:"submit",type:"primary"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))})))};function Te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Te(Object(n),!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ne=function(){var e=Object(s.b)(),t=Object(o.useState)(!1),n=Object(N.a)(t,2),a=n[0],r=n[1],c=Object(o.useState)(null),i=Object(N.a)(c,2),u=i[0],p=i[1],m=Object(o.useCallback)((function(e){return p(Le({},e,{startDate:re()(e.startDate),endDate:re()(e.endDate),type:e.type.id,toponyms:e.toponyms.map((function(e){return e.id})),persons:e.persons.map((function(e){return e.id}))}))}),[]),b=Object(o.useCallback)((function(){a?r(!1):p(null)}),[a]),f=Object(o.useCallback)((function(t){e(x(Le({},t,{endDate:t.endDate.toDate(),startDate:t.startDate.toDate()}))),b()}),[e,b]),O=Object(o.useCallback)((function(t){e(I(t))}),[e]),d=Object(o.useCallback)((function(t){e(_(Le({},t,{endDate:t.endDate.toDate(),startDate:t.startDate.toDate()}))),b()}),[b,e]),j=Object(o.useCallback)((function(){r(!0)}),[]);return l.a.createElement(Y.a,null,l.a.createElement(F.a,{ghost:!1,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",extra:l.a.createElement(oe,null)}),l.a.createElement(Y.a.Content,null,l.a.createElement(ye,{onAdd:j,onSelect:m,deleteRow:O}),l.a.createElement(Me,{event:u,visible:null!==u||a,onClose:b,onSubmit:a?d:f,title:a?"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"})))},Re=["/view","/editor"],Ye=function(){var e=Object(o.useState)(!0),t=Object(N.a)(e,2),a=t[0],r=t[1],c=Object(s.b)(),i=Object(R.g)().pathname,u=Object(o.useMemo)((function(){return[Re.find((function(e){return e===i}))]}),[i]);return Object(o.useEffect)((function(){c(function(){var e=Object(y.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(P()),e.prev=1,e.next=4,n.e(3).then(n.t.bind(null,523,3));case 4:a=e.sent,t(S(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(k(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[c]),l.a.createElement(Y.a,{style:{minHeight:"100vh"},hasSider:!0},l.a.createElement(Y.a.Sider,{theme:"dark",collapsible:!0,width:240,collapsed:a,onCollapse:r,style:{overflow:"auto",height:"100vh",position:"fixed",left:0}},l.a.createElement(z.a,{theme:"dark",mode:"inline",selectedKeys:u},l.a.createElement(z.a.Item,{key:"/view"},l.a.createElement(p.b,{to:"/view"},l.a.createElement(A.a,{type:"pie-chart"}),l.a.createElement("span",null,"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0434\u0430\u043d\u043d\u044b\u0445"))),l.a.createElement(z.a.Item,{key:"/editor"},l.a.createElement(p.b,{to:"/editor"},l.a.createElement(A.a,{type:"edit"}),l.a.createElement("span",null,"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"))))),l.a.createElement(Y.a,{style:{marginLeft:a?80:240,transition:"margin 0.2s"}},l.a.createElement(Y.a.Content,null,l.a.createElement(R.d,null,l.a.createElement(R.b,{path:"/view",component:ne}),l.a.createElement(R.b,{path:"/editor",component:Ne}),l.a.createElement(R.a,{to:"/view"})))))};n(501);u.a.render(l.a.createElement(p.a,null,l.a.createElement(s.a,{store:L},l.a.createElement(Ye,null))),document.getElementById("root"))}},[[280,1,2]]]);
//# sourceMappingURL=main.3a236924.chunk.js.map