(this["webpackJsonpviz-react"]=this["webpackJsonpviz-react"]||[]).push([[0],{285:function(e,t,n){e.exports=n(507)},506:function(e,t,n){},507:function(e,t,n){"use strict";n.r(t);var r,a,c=n(0),o=n.n(c),l=n(6),i=n.n(l),u=n(22),s=n(128),p=n(67),m=n(266),b=n(30),f=n(208),d=n.n(f),O=n(267),j=n(526),y=n(517),E=n(524),v=n(513);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var g=Object(j.a)("loadEventsRequest"),w=Object(j.a)("loadEventsSuccess"),D=Object(j.a)("loadEventsFailure"),P=Object(j.a)("changeTimelineRange"),C=Object(j.a)("editEvent"),k=Object(j.a)("deleteEvent"),S={start:new Date(100,0,0),end:new Date},x=Object(p.c)({requestWorking:Object(y.a)((r={},Object(b.a)(r,g,(function(){return!0})),Object(b.a)(r,Object(E.a)(w,D),(function(){return!1})),r),!1),eventTypes:Object(y.a)(Object(b.a)({},w,(function(e,t){return t.payload.eventTypes})),[]),persons:Object(y.a)(Object(b.a)({},w,(function(e,t){return t.payload.persons})),[]),toponyms:Object(y.a)(Object(b.a)({},w,(function(e,t){return t.payload.toponyms})),[]),events:Object(y.a)((a={},Object(b.a)(a,w,(function(e,t){return Object(v.a)(t.payload.events.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{startDate:new Date(e.startDate),endDate:new Date(e.endDate)})})),(function(e){return e.endDate-e.startDate}),"desc")})),Object(b.a)(a,C,(function(e,t){return e.map((function(e){return e.id===t.payload.id?t.payload:e}))})),Object(b.a)(a,k,(function(e,t){return e.filter((function(e){return e.id!==t.payload.id}))})),a),[]),errorOccured:Object(y.a)(Object(b.a)({},D,(function(){return!0})),!1),timeline:Object(y.a)(Object(b.a)({},P,(function(e,t){var n=t.payload;return{start:n.start,end:n.end}})),S)}),I=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||p.d,_=Object(p.e)(x,I(Object(p.a)(m.a))),M=n(111),T=n(72),R=n(510),L=n(115),Y=n(9),q=n(521),F=n(516),H=n(269),z=n.n(H),B=function(e){return e.events},J=function(e){return e.toponyms},N=function(e){return e.persons},U=function(e){return e.eventTypes},A={align:"center",minHeight:"400px",maxHeight:"400px",type:"range",tooltip:{followMouse:!0,overflowMethod:"cap"},snap:null,orientation:{axis:"both"},zoomMin:432e6},K=Object(F.a)(U,(function(e){return e.map((function(e){return{id:e.id,content:e.type}}))})),V=Object(F.a)(B,(function(e){return e.slice(0,10).map((function(e){return{start:e.startDate,end:e.endDate,content:e.name,duration:e.endDate-e.startDate,group:e.type,type:e.endDate-e.startDate<=864e5?"point":"range"}}))})),X=function(){var e=Object(u.b)(),t=Object(u.c)(V),n=Object(u.c)(K),r=Object(c.useCallback)((function(t){var n=t.start,r=t.end;e(P({start:n,end:r}))}),[e]);return o.a.createElement("div",null,t&&t.length>0&&o.a.createElement(z.a,{options:A,items:t,groups:n,rangechangedHandler:r}))},W=function(){return o.a.createElement(R.a,null,o.a.createElement(q.a,{ghost:!1,title:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0434\u0430\u043d\u043d\u044b\u0445"}),o.a.createElement(R.a.Content,null,o.a.createElement(X,null)))},G=n(13),Q=n.n(G),Z=n(56),$=function(e){var t=e.filename,n=void 0===t?"events.json":t,r=Object(u.c)(B),a=Object(u.c)(U),c=Object(u.c)(N),l=Object(u.c)(J),i=JSON.stringify({events:r,eventTypes:a,toponyms:l,persons:c});return o.a.createElement(Z.a,{download:n,href:URL.createObjectURL(new Blob([i],{type:"application/json"}))},o.a.createElement(Y.a,{type:"download"}),"Export to json")},ee=n(511),te=n(514);function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var re=function(e){return e.toLocaleString("ru",{year:"numeric",month:"numeric",day:"numeric"})},ae=function(e){return e.type},ce=function(e){return e.map((function(e){return"".concat(e.surname," ").concat(e.name," ").concat(e.patron)})).join()},oe=function(e){return e.map((function(e){return e.name})).join()},le=function(e,t){return e.startDate-t.startDate},ie=function(e,t){return e.endDate-t.endDate},ue=function(e){var t=e.onSelect,n=e.deleteRow,r=Object(u.c)(U),a=Object(u.c)(N),l=Object(u.c)(J),i=Object(u.c)(B),s=Object(c.useMemo)((function(){return i.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{type:r.find((function(t){return t.id===e.type})),persons:e.persons?e.persons.map((function(e){return a.find((function(t){return t.id===e}))})):[],toponyms:e.toponyms?e.toponyms.map((function(e){return l.find((function(t){return t.id===e}))})):[]})}))}),[r,a,l,i]),p=Object(c.useCallback)((function(e){return{onClick:t?function(){return t(e)}:void 0}}),[t]);return o.a.createElement(te.a,{dataSource:s,rowKey:function(e){return e.id},onRow:p},o.a.createElement(te.a.Column,{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",dataIndex:"name",width:"35%"}),o.a.createElement(te.a.Column,{title:"\u0414\u0430\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430",dataIndex:"startDate",width:"10%",sorter:le,render:re}),o.a.createElement(te.a.Column,{title:"\u0414\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f",dataIndex:"endDate",width:"10%",sorter:ie,render:re}),o.a.createElement(te.a.Column,{title:"\u0422\u0438\u043f",dataIndex:"type",width:"10%",filters:r.map((function(e){return{value:e.id,text:e.type}})),onFilter:function(e,t){return t.type.id===e},render:ae}),o.a.createElement(te.a.Column,{title:"\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043b\u0438\u0446\u0430",dataIndex:"persons",width:"15%",render:ce}),o.a.createElement(te.a.Column,{title:"\u0422\u043e\u043f\u043e\u043d\u0438\u043c\u044b",dataIndex:"toponyms",width:"15%",render:oe}),o.a.createElement(te.a.Column,{title:"",key:"delete",render:function(e,t){return o.a.createElement(ee.a,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",onConfirm:function(e){e.stopPropagation(),n(t)},onCancel:function(e){e.stopPropagation()},okText:"\u0414\u0430",cancelText:"\u041d\u0435\u0442"},o.a.createElement(Z.a,{type:"link",onClick:function(e){e.stopPropagation()}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))}}))},se=n(522),pe=n(523),me=n(518),be=n(512),fe=n(519),de=n(515),Oe=n(129),je=n(214),ye=n(525),Ee=n(520),ve=function(e){return e.id},he=function(e){return e.name},ge=Object(c.forwardRef)((function(e,t){var n=e.allOptions,r=e.value,a=e.onChange,l=e.placeholder,i=e.count,u=void 0===i?5:i,s=e.keySelector,p=void 0===s?ve:s,m=e.valueSelector,b=void 0===m?ve:m,f=e.nameSelector,d=void 0===f?he:f,O=Object(c.useState)([]),j=Object(M.a)(O,2),y=j[0],E=j[1],v=Object(c.useCallback)(Object(ye.a)((function(e){E(n.filter((function(t){return d(t).toLowerCase().includes(e.toLocaleLowerCase())})))}),300),[n]),h=Object(c.useCallback)((function(){E([])}),[]),g=Object(c.useCallback)((function(e){E([]),a(e)}),[a]),w=Object(c.useMemo)((function(){return r.map((function(e){return n.find((function(t){return b(t)===e}))}))}),[n,r,b]),D=Object(c.useMemo)((function(){return y.length?y.slice(0,u):Object(Ee.a)([].concat(Object(je.a)(n.slice(0,u)),Object(je.a)(w)))}),[n,u,y,w]),P=Object(c.useMemo)((function(){return y.length?y.length-u:n.length-D.length}),[n,u,y,D.length]);return o.a.createElement(Oe.a,{ref:t,placeholder:l,mode:"multiple",filterOption:!1,onSearch:v,onChange:g,onBlur:h,value:r},D.map((function(e){return o.a.createElement(Oe.a.Option,{key:p(e),value:b(e)},d(e))})),P>0&&o.a.createElement(Oe.a.Option,{key:"__hidedOptionsCount__",value:"__hidedOptionsCount__",disabled:!0},"\u0415\u0449\u0435 ",P," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432"))}));function we(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var De={name:{rules:[{required:!0}]},startDate:{rules:[{type:"object",required:!0,message:"Please select time!"}]},endDate:{rules:[{type:"object",required:!0,message:"Please select time!"}]},type:{rules:[{required:!0}]},persons:{rules:[{type:"array"}]},toponyms:{rules:[{type:"array"}]}},Pe=me.a.create()((function(e){var t=e.event,n=e.onSubmit,r=e.form,a=r.getFieldDecorator,l=r.setFieldsValue,i=r.validateFields,s=e.visible,p=e.onClose,m=Object(u.c)(U),f=Object(u.c)(J),d=Object(u.c)(N);return Object(c.useEffect)((function(){l(Object(se.a)(t,Object.keys(De)))}),[t,l]),o.a.createElement(pe.a,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f",visible:s,onClose:p,placement:"right",width:450,closable:!0},o.a.createElement(me.a,{layout:"vertical"},o.a.createElement(be.a,null,o.a.createElement(me.a.Item,{label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"},a("name",De.name)(o.a.createElement(fe.a.TextArea,{rows:4,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"})))),o.a.createElement(be.a,null,o.a.createElement(me.a.Item,{label:"\u0414\u0430\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430"},a("startDate",De.startDate)(o.a.createElement(de.a,{format:"DD.MM.YYYY"})))),o.a.createElement(be.a,null,o.a.createElement(me.a.Item,{label:"\u0414\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f"},a("endDate",De.endDate)(o.a.createElement(de.a,{format:"DD.MM.YYYY"})))),o.a.createElement(be.a,null,o.a.createElement(me.a.Item,{label:"\u0422\u0438\u043f"},a("type",De.type)(o.a.createElement(Oe.a,{placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u0441\u043e\u0431\u044b\u0442\u0438\u044f"},m.map((function(e){return o.a.createElement(Oe.a.Option,{key:e.id,value:e.id},e.type)})))))),o.a.createElement(be.a,null,o.a.createElement(me.a.Item,{label:"\u0422\u043e\u043f\u043e\u043d\u0438\u043c\u044b"},a("toponyms",De.toponyms)(o.a.createElement(ge,{allOptions:f,placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u043e\u043f\u043e\u043d\u0438\u043c\u044b"})))),o.a.createElement(be.a,null,o.a.createElement(me.a.Item,{label:"\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043b\u0438\u0446\u0430"},a("persons",De.persons)(o.a.createElement(ge,{allOptions:d,nameSelector:function(e){return"".concat(e.surname," ").concat(e.name," ").concat(e.patron)},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u043b\u0438\u0446"})))),o.a.createElement("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right"}},o.a.createElement(Z.a,{onClick:function(e){e.preventDefault(),i((function(e,r){e||n(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?we(Object(n),!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:t.id},r))}))},type:"primary"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))}));function Ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ke(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ce(Object(n),!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Se=function(){var e=Object(u.b)(),t=Object(c.useState)(null),n=Object(M.a)(t,2),r=n[0],a=n[1],l=Object(c.useCallback)((function(e){return a(ke({},e,{startDate:Q()(e.startDate),endDate:Q()(e.endDate),type:e.type.id,toponyms:e.toponyms.map((function(e){return e.id})),persons:e.persons.map((function(e){return e.id}))}))}),[]),i=Object(c.useCallback)((function(){return a(null)}),[]),s=Object(c.useCallback)((function(t){e(C(ke({},t,{endDate:t.endDate.toDate(),startDate:t.startDate.toDate()}))),i()}),[e,i]),p=Object(c.useCallback)((function(t){e(k(t))}),[e]);return o.a.createElement(R.a,null,o.a.createElement(q.a,{ghost:!1,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",extra:o.a.createElement($,null)}),o.a.createElement(R.a.Content,null,o.a.createElement(ue,{onSelect:l,deleteRow:p}),o.a.createElement(Pe,{event:r,visible:null!==r,onClose:i,onSubmit:s})))},xe=["/view","/editor"],Ie=function(){var e=Object(c.useState)(!0),t=Object(M.a)(e,2),r=t[0],a=t[1],l=Object(u.b)(),i=Object(T.g)().pathname,p=Object(c.useMemo)((function(){return[xe.find((function(e){return e===i}))]}),[i]);return Object(c.useEffect)((function(){l(function(){var e=Object(O.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g()),e.prev=1,e.next=4,n.e(3).then(n.t.bind(null,527,3));case 4:r=e.sent,t(w(r)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(D(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[l]),o.a.createElement(R.a,{style:{minHeight:"100vh"},hasSider:!0},o.a.createElement(R.a.Sider,{theme:"dark",collapsible:!0,width:240,collapsed:r,onCollapse:a,style:{overflow:"auto",height:"100vh",position:"fixed",left:0}},o.a.createElement(L.a,{theme:"dark",mode:"inline",selectedKeys:p},o.a.createElement(L.a.Item,{key:"/view"},o.a.createElement(s.b,{to:"/view"},o.a.createElement(Y.a,{type:"pie-chart"}),o.a.createElement("span",null,"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0434\u0430\u043d\u043d\u044b\u0445"))),o.a.createElement(L.a.Item,{key:"/editor"},o.a.createElement(s.b,{to:"/editor"},o.a.createElement(Y.a,{type:"edit"}),o.a.createElement("span",null,"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"))))),o.a.createElement(R.a,{style:{marginLeft:r?80:240,transition:"margin 0.2s"}},o.a.createElement(R.a.Content,null,o.a.createElement(T.d,null,o.a.createElement(T.b,{path:"/view",component:W}),o.a.createElement(T.b,{path:"/editor",component:Se}),o.a.createElement(T.a,{to:"/view"})))))};n(506);i.a.render(o.a.createElement(s.a,null,o.a.createElement(u.a,{store:_},o.a.createElement(Ie,null))),document.getElementById("root"))}},[[285,1,2]]]);
//# sourceMappingURL=main.2eec32b4.chunk.js.map