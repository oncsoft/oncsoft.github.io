/*! For license information please see InfiniteScroll-InfiniteScroll-stories.e4cd4038.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkonc_react_ui=self.webpackChunkonc_react_ui||[]).push([[538],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/components/InfiniteScroll/InfiniteScroll.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Docs:function(){return Docs},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return InfiniteScroll_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==(0,esm_typeof.Z)(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw new Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError((0,esm_typeof.Z)(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}var toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),utils_theme=__webpack_require__("./src/utils/theme.js"),InfiniteScroll_module_infiniteScrollContainer="InfiniteScroll_infiniteScrollContainer__6-4IN",InfiniteScroll_module_child="InfiniteScroll_child__2Te+9",Spinner=__webpack_require__("./src/components/Spinner/Spinner.js"),useInView=__webpack_require__("./src/hooks/useInView.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),InfiniteScroll=function InfiniteScroll(_ref){var _useInView,_ref$data=_ref.data,data=void 0===_ref$data?[]:_ref$data,renderItem=_ref.renderItem,itemHeight=_ref.itemHeight,containerHeight=_ref.containerHeight,fetchData=_ref.fetchData,_ref$loadingText=_ref.loadingText,loadingText=void 0===_ref$loadingText?"Yükleniyor...":_ref$loadingText,_ref$virtualized=_ref.virtualized,virtualized=void 0!==_ref$virtualized&&_ref$virtualized,_ref$spinner=_ref.spinner,spinner=void 0===_ref$spinner||_ref$spinner,lastItemRef=(0,react.useRef)(),theme=(0,utils_theme.F)(),isIntersecting=null!==(_useInView=(0,useInView.Y)(lastItemRef,{threshold:.1,rootMargin:"1px"}))&&void 0!==_useInView&&_useInView,styleVariables={"--secondaryColor":theme.secondaryColor},_useState=(0,react.useState)(0),_useState2=(0,slicedToArray.Z)(_useState,2),startIndex=_useState2[0],setStartIndex=_useState2[1],_useState3=(0,react.useState)(Math.floor(containerHeight/itemHeight)),_useState4=(0,slicedToArray.Z)(_useState3,2),endIndex=_useState4[0],setEndIndex=_useState4[1],containerRef=(0,react.useRef)(),visibleData=virtualized?data.slice(startIndex,endIndex):data;(0,react.useEffect)((function(){isIntersecting&&requestAnimationFrame(loadMoreItems)}),[isIntersecting]),(0,react.useEffect)((function(){handleScroll()}),[data,containerHeight,itemHeight]);var loadMoreItems=function loadMoreItems(){fetchData()},handleScroll=function handleScroll(){if(containerRef.current&&virtualized){var scrollTop=containerRef.current.scrollTop;setStartIndex(Math.floor(scrollTop/itemHeight)),setEndIndex(Math.min(data.length,startIndex+Math.ceil(containerHeight/itemHeight)))}};return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("div",{ref:containerRef,onScroll:handleScroll,style:{height:containerHeight,overflow:"auto"},children:(0,jsx_runtime.jsxs)("div",{className:InfiniteScroll_module_infiniteScrollContainer,style:(0,objectSpread2.Z)({height:visibleData.length<containerHeight/itemHeight-1?containerHeight:data.length*itemHeight,position:"relative",paddingTop:virtualized?startIndex*itemHeight:0},styleVariables),children:[visibleData.map((function(item,index){return(0,jsx_runtime.jsx)("div",{className:InfiniteScroll_module_child,style:{height:itemHeight},children:renderItem(item)},index)})),(0,jsx_runtime.jsx)("div",{ref:lastItemRef,children:spinner&&(0,jsx_runtime.jsx)(Spinner.Z,{text:loadingText,type:"spot",style:{position:"unset"}})})]})})})};InfiniteScroll.__docgenInfo={description:"",methods:[],displayName:"InfiniteScroll",props:{data:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},loadingText:{defaultValue:{value:"'Yükleniyor...'",computed:!1},description:"",type:{name:"string"},required:!1},virtualized:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},spinner:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},renderItem:{description:"",type:{name:"func"},required:!1},itemHeight:{description:"",type:{name:"number"},required:!1},containerHeight:{description:"",type:{name:"number"},required:!1},fetchData:{description:"",type:{name:"func"},required:!1}}};var _Docs$parameters,_Docs$parameters2,_Docs$parameters2$doc,InfiniteScroll_InfiniteScroll=InfiniteScroll,helper=__webpack_require__("./src/utils/helper.js"),InfiniteScroll_stories={title:"InfiniteScroll",component:InfiniteScroll_InfiniteScroll,parameters:{},tags:["autodocs"],argTypes:{}},Docs=function Story(args){var newData=Array.from({length:10},(function(_,i){return(0,jsx_runtime.jsxs)("span",{children:["Item ",i+1," "]},i)})),_useState=(0,react.useState)(newData),_useState2=(0,slicedToArray.Z)(_useState,2),data=_useState2[0],setData=_useState2[1],fetchData=function(){var _ref=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:setTimeout((function(){setData((function(prev){return[].concat((0,toConsumableArray.Z)(prev),newData)}))}),1e3);case 1:case"end":return _context.stop()}}),_callee)})));return function fetchData(){return _ref.apply(this,arguments)}}();return(0,jsx_runtime.jsx)(utils_theme.Z,{children:(0,jsx_runtime.jsx)(InfiniteScroll_InfiniteScroll,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{fetchData:fetchData,threshold:400,data:data,renderItem:function renderItem(item){return(0,jsx_runtime.jsx)("div",{children:item},(0,helper.E)())},itemHeight:60,containerHeight:400}))})}.bind({});Docs.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Docs.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Docs$parameters=Docs.parameters)||void 0===_Docs$parameters?void 0:_Docs$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => {\n  const newData = Array.from({\n    length: 10\n  }, (_, i) => {\n    return <span key={i}>Item {i + 1} </span>;\n  });\n  const [data, setData] = useState(newData);\n  const renderItem = item => {\n    return <div key={timeBasedUUID()}>{item}</div>;\n  };\n  const fetchData = async () => {\n    setTimeout(() => {\n      setData(prev => [...prev, ...newData]);\n    }, 1000);\n  };\n  return <ThemeProvider>\n      <InfiniteScroll {...args} fetchData={fetchData} threshold={400} data={data} renderItem={renderItem} itemHeight={60} containerHeight={400} />\n    </ThemeProvider>;\n}"},null===(_Docs$parameters2=Docs.parameters)||void 0===_Docs$parameters2||null===(_Docs$parameters2$doc=_Docs$parameters2.docs)||void 0===_Docs$parameters2$doc?void 0:_Docs$parameters2$doc.source)})});var __namedExportsOrder=["Docs"]},"./src/components/Icon/Icon.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Icon_Icon}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),utils_theme=__webpack_require__("./src/utils/theme.js"),Icon_module={icon:"Icon_icon__zcHyd",primary:"Icon_primary__p6Qbk",secondary:"Icon_secondary__2K93I",error:"Icon_error__Gh8lN",disabled:"Icon_disabled__LXMVP"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Icon=(0,react.forwardRef)((function(_ref,ref){var _ref$size=_ref.size,size=void 0===_ref$size?"1rem":_ref$size,type=_ref.type,children=_ref.children,className=_ref.className,theme=(0,utils_theme.F)(),styleVariables={"--primaryColor":theme.primaryColor,"--errorColor":theme.errorColor,"--disabledColor":theme.disabledColor};return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:react.Children.map(children,(function(child){return react.isValidElement(child)?react.cloneElement(child,{ref:ref,width:size,height:size,style:(0,objectSpread2.Z)({},styleVariables),className:"".concat(Icon_module.icon," ").concat(Icon_module[type]," ").concat(className),preserveAspectRatio:"none",version:"1.1"}):null}))})}));Icon.displayName="Icon",Icon.defaultProps={type:"primary"},Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{size:{defaultValue:{value:"'1rem'",computed:!1},description:"",type:{name:"string"},required:!1},type:{defaultValue:{value:"'primary'",computed:!1},description:"",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'disabled'",computed:!1},{value:"'error'",computed:!1}]},required:!1},className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"object"},required:!1}}};var Icon_Icon=(0,react.memo)(Icon)},"./src/components/Spinner/Spinner.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Spinner_Spinner}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),Spinner_module=(__webpack_require__("./node_modules/react/index.js"),{spinnerContainer:"Spinner_spinnerContainer__vzmN8",svgIcon:"Spinner_svgIcon__W0Nk4",spin:"Spinner_spin__Q9zsz",text:"Spinner_text__vwuWc",spot:"Spinner_spot__N30F5",spotlight:"Spinner_spotlight__Uhfpu"}),Icon=__webpack_require__("./src/components/Icon/Icon.js"),Icons=__webpack_require__("./src/components/Icons/index.js"),utils_theme=__webpack_require__("./src/utils/theme.js"),Grid=__webpack_require__("./src/components/Grid/Grid.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Spinner=function Spinner(_ref){var text=_ref.text,_ref$type=_ref.type,type=void 0===_ref$type?"default":_ref$type,_ref$size=_ref.size,size=void 0===_ref$size?"1rem":_ref$size,style=_ref.style,theme=(0,utils_theme.F)(),styleVariables={"--primaryColor":theme.primaryColor,"--secondaryColor":theme.secondaryColor,"--size":size},styles=(0,objectSpread2.Z)((0,objectSpread2.Z)({},style),styleVariables);return(0,jsx_runtime.jsxs)(Grid.Z,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",className:"".concat(Spinner_module.spinnerContainer),style:styles,children:[(0,jsx_runtime.jsx)(Grid.Z,{children:(0,jsx_runtime.jsx)(Icon.Z,{size:size,className:"".concat(Spinner_module.svgIcon),children:(0,jsx_runtime.jsx)(Icons.SpinnerSvg,{})})}),(0,jsx_runtime.jsx)(Grid.Z,{className:"".concat(Spinner_module[type]," ").concat(Spinner_module.text),style:styleVariables,children:text})]})};Spinner.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{type:{defaultValue:{value:"'default'",computed:!1},description:"",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'spot'",computed:!1}]},required:!1},size:{defaultValue:{value:"'1rem'",computed:!1},description:"",type:{name:"enum",value:[{value:"'1rem'",computed:!1},{value:"'2rem'",computed:!1},{value:"'3rem'",computed:!1}]},required:!1},text:{description:"",type:{name:"string"},required:!1},style:{description:"",type:{name:"custom",raw:"PropTypes.style"},required:!1}}};var Spinner_Spinner=Spinner},"./src/hooks/useInView.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Y:function(){return useInView}});var _Users_oncsoftwaredesignosmanasar_nurselcansuozkan_Desktop_ReactApps_onc_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useInView=function useInView(target){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),_useState2=(0,_Users_oncsoftwaredesignosmanasar_nurselcansuozkan_Desktop_ReactApps_onc_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_useState,2),isIntersecting=_useState2[0],setIsIntersecting=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),_useState4=(0,_Users_oncsoftwaredesignosmanasar_nurselcansuozkan_Desktop_ReactApps_onc_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_useState3,2),observer=_useState4[0],setObserver=_useState4[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(null==observer||observer.disconnect(),target.current){var _observer=new IntersectionObserver((function callback(entries){setIsIntersecting(entries[0].isIntersecting)}),options);_observer.observe(target.current),setObserver(_observer)}return function(){null==observer||observer.disconnect()}}),[]),isIntersecting}},"./src/utils/helper.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{E:function(){return timeBasedUUID},a:function(){return hexToRgba}});var timeBasedUUID=function timeBasedUUID(){var currentTime=(new Date).getTime();return"xxxxxxxx-xxxx-1xxx-xxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(c){var r=(currentTime+16*Math.random())%16|0;return("x"===c?r:3&r|8).toString(16)}))},hexToRgba=function hexToRgba(hex,alpha){hex=hex.replace(/^#/,"");var red=parseInt(hex.substring(0,2),16),green=parseInt(hex.substring(2,4),16),blue=parseInt(hex.substring(4,6),16);return alpha=Math.min(1,Math.max(0,alpha)),"rgba(".concat(red,", ").concat(green,", ").concat(blue,", ").concat(alpha,")")}}}]);