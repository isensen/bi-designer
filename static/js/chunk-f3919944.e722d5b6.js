(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f3919944"],{"01d0":function(e,t,a){},1450:function(e,t,a){"use strict";a("01d0")},"22c6":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"view",style:e.divTrans},[a("view-page",{ref:"viewPage",attrs:{ele:e.ele,"project-data":e.projectData}})],1)},r=[],o=(a("4194"),a("fe59"),a("08ba"),a("6a61"),a("2e91")),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"view-main",style:{transform:"scale("+e.scale+")",width:e.projectData.width+"px",height:e.projectData.height+"px"}},[a("div",{ref:"canvas-panel",staticClass:"view-page-preview-wrapper",style:e.getCommonStyle(e.ele.commonStyle),attrs:{id:"canvas-panel"}},[e.projectData.bgMapObj?a("div",{staticStyle:{position:"relative",width:"100%",height:"100%"}},[a("div",{staticClass:"baMap"},[a(e.projectData.bgMapObj.elName,e._b({tag:"component",staticClass:"element-on-edit-pane"},"component",Object.assign({},e.projectData.bgMapObj.propsValue),!1))],1)]):e._e(),e._l(e.ele,(function(t){return a("div",{key:t.uuid,class:{"components-edit-shape-bg":t.isBackground},style:e.getCommonStyle(t.commonStyle),attrs:{uuid:t.uuid,"default-style":t.commonStyle}},[a(t.elName,e._b({tag:"component",staticClass:"element-on-edit-pane"},"component",Object.assign({},t.propsValue,{value:t.value}),!1))],1)}))],2)])},s=[],i=(a("053b"),a("513c"),a("28f8")),u=a("d211"),l=a("9198"),p=a("0969"),d=a("5171"),g=a("52c1");window._qk_register_components_object=l["a"];var m={components:Object(u["a"])(Object(u["a"])({},l["a"]),{},Object(i["a"])({},p["a"].name,p["a"])),props:{scale:{type:Number,default:1},ele:{type:Array,default:function(){return[]}},projectData:{type:Object,default:function(){return{}}}},data:function(){return{getCommonStyle:d["a"].getCommonStyle}},computed:Object(u["a"])(Object(u["a"])({},Object(g["d"])({activePageUUID:function(e){return e.editor.activePageUUID},activeElementUUID:function(e){return e.editor.activeElementUUID}})),Object(g["c"])(["currentPageIndex","activeElementIndex","activeElement","activePage","pageMode"]))},b=m,f=(a("85e1"),a("5d22")),v=Object(f["a"])(b,c,s,!1,null,"86913ae4",null),j=v.exports,h=a("b5c8"),w=a.n(h),y=a("69ed"),D={components:{viewPage:j},data:function(){return{divTrans:{},projectData:{},ele:[]}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e,n=e.$route.query.id,r=e.$route.query.id,o=[],o.push({id:e.$route.query.point_id,objectId:e.$route.query.objectId}),console.log("event",o),r&&(y["a"].$data.secondList=o),!n){t.next=12;break}return t.next=10,a.getProjectData(n);case 10:t.next=15;break;case 12:e.projectData=JSON.parse(localStorage.getItem("projectData")),console.log(),e.ele=e.projectData.pages[0].elements;case 15:e.projectData.pisProportionalScaling?(a.trans(),window.onresize=function(){return function(){a.trans()}()}):e.divTrans={overflow:"auto"};case 16:case"end":return t.stop()}}),t)})))()},methods:{trans:function(){console.log("trans");var e=document.body.clientWidth,t=document.body.clientHeight;console.log(e,t);var a=this.projectData.width/this.projectData.height;console.log(a);var n=e/t;if(console.log(n),a<=n){var r=t/this.projectData.height,o=(e-this.projectData.width*r)/2/r;console.log("translate_w",o),this.divTrans={transform:"scale("+r+") translate("+o+"px,0px)"}}else{var c=document.body.clientWidth/this.projectData.width,s=(t-this.projectData.height*c)/2/c;console.log("translate_h",s),this.divTrans={transform:"scale("+c+") translate(0px,"+s+"px)"}}},getProjectData:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,r,o,c,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=w.a.DataQueryBuilder.create(),n.setSortBy(["created desc"]),n.setWhereClause("objectId = '".concat(e,"'")),n.setRelated(["project"]),n.setPageSize(1e3),a.next=7,w.a.Data.of("LSE_BigScreen").find(n);case 7:return r=a.sent,o=r[0],a.next=11,t.getPageData(o.objectId);case 11:return c=a.sent,t.pageObj=c[0],s=c[0],a.next=16,t.getElementData(s.objectId);case 16:i=a.sent,s.commonStyle=JSON.parse(s.commonStyle),s.config=JSON.parse(s.config),i.forEach((function(e){e.attributeTab=JSON.parse(e.attributeTab),e.attributeTabNavigation=JSON.parse(e.attributeTabNavigation),e.commonStyle=JSON.parse(e.commonStyle),e.propsValue=JSON.parse(e.propsValue)})),o.bgMapObj=JSON.parse(o.bgMapObj),o.pages=c,o.pages[0].elements=i,t.projectData=o,t.ele=i;case 25:case"end":return a.stop()}}),a)})))()},getPageData:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=w.a.DataQueryBuilder.create(),a.setSortBy(["created desc"]),a.setWhereClause("bigScreen.objectId = '".concat(e,"'")),a.setRelated(["bigScreen"]),a.setPageSize(1e3),t.next=7,w.a.Data.of("LSE_Page").find(a);case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})))()},getElementData:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=w.a.DataQueryBuilder.create(),a.setSortBy(["created desc"]),a.setWhereClause("page.objectId = '".concat(e,"'")),a.setRelated(["page","animations","events"]),a.setPageSize(1e3),t.next=7,w.a.Data.of("LSE_Element").find(a);case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})))()}}},S=D,O=(a("1450"),Object(f["a"])(S,n,r,!1,null,"43b5c21a",null));t["default"]=O.exports},"85e1":function(e,t,a){"use strict";a("f940")},f940:function(e,t,a){}}]);