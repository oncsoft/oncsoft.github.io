/*! For license information please see VirtualList-VirtualList-stories.bc7002db.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkonc_react_ui=self.webpackChunkonc_react_ui||[]).push([[636],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/components/VirtualList/VirtualList.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Docs:function(){return Docs},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return VirtualList_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),utils_theme=__webpack_require__("./src/utils/theme.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),VirtualList_module_virtualListContainer="VirtualList_virtualListContainer__AEE6R",VirtualList_module_content="VirtualList_content__X3+rv",VirtualList_module_item="VirtualList_item__NxIoX",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),VirtualList=function VirtualList(_ref){var data=_ref.data,itemHeight=_ref.itemHeight,containerHeight=_ref.containerHeight,_ref$type=_ref.type,type=void 0===_ref$type?"primary":_ref$type,theme=(0,utils_theme.F)(),constColor="primary"===type?theme.secondaryColor:theme.primaryColor,_useState=(0,react.useState)(0),_useState2=(0,slicedToArray.Z)(_useState,2),startIndex=_useState2[0],setStartIndex=_useState2[1],_useState3=(0,react.useState)(Math.ceil(containerHeight/itemHeight)),_useState4=(0,slicedToArray.Z)(_useState3,2),endIndex=_useState4[0],setEndIndex=_useState4[1],containerRef=(0,react.useRef)(),handleScroll=function handleScroll(){if(containerRef.current){var scrollTop=containerRef.current.scrollTop;setStartIndex(Math.floor(scrollTop/itemHeight)),setEndIndex(Math.min(data.length,startIndex+Math.ceil(containerHeight/itemHeight)))}};(0,react.useEffect)((function(){handleScroll()}),[data,containerHeight,itemHeight]);var visibleData=data.slice(startIndex,endIndex),styleVariables={"--primaryColor":theme["".concat(type+"Color")],"--secondaryColor":constColor,"--containerHeight":containerHeight+"px","--contentHeight":(visibleData.length<containerHeight/itemHeight-1?containerHeight:data.length*itemHeight)+"px","--itemHeight":itemHeight+"px"};return(0,jsx_runtime.jsx)("div",{ref:containerRef,className:"".concat(VirtualList_module_virtualListContainer),style:styleVariables,onScroll:handleScroll,children:(0,jsx_runtime.jsx)("div",{className:"".concat(VirtualList_module_content),style:(0,objectSpread2.Z)({paddingTop:startIndex*itemHeight},styleVariables),children:visibleData.map((function(item,index){return(0,jsx_runtime.jsx)("div",{className:"".concat(VirtualList_module_item),style:styleVariables,children:item},"virtualList"+index)}))})})};VirtualList.__docgenInfo={description:"",methods:[],displayName:"VirtualList",props:{type:{defaultValue:{value:"'primary'",computed:!1},description:"",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1}]},required:!1},data:{description:"",type:{name:"array"},required:!1},itemHeight:{description:"",type:{name:"number"},required:!1},containerHeight:{description:"",type:{name:"number"},required:!1}}};var _Docs$parameters,_Docs$parameters2,_Docs$parameters2$doc,VirtualList_VirtualList=VirtualList,VirtualList_stories={title:"VirtualList",component:VirtualList_VirtualList,parameters:{},tags:["autodocs"],argTypes:{}},Docs=function Story(args){var data=Array.from({length:200},(function(_,i){return(0,jsx_runtime.jsxs)("span",{children:["Item ",i+1," "]},i)}));return(0,jsx_runtime.jsx)(utils_theme.Z,{children:(0,jsx_runtime.jsx)(VirtualList_VirtualList,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{data:data,itemHeight:40,containerHeight:400}))})}.bind({});Docs.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Docs.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Docs$parameters=Docs.parameters)||void 0===_Docs$parameters?void 0:_Docs$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => {\n  const data = Array.from({\n    length: 200\n  }, (_, i) => {\n    return <span key={i}>Item {i + 1} </span>;\n  });\n  return <ThemeProvider>\n      <VirtualList {...args} data={data} itemHeight={40} containerHeight={400} />\n    </ThemeProvider>;\n}"},null===(_Docs$parameters2=Docs.parameters)||void 0===_Docs$parameters2||null===(_Docs$parameters2$doc=_Docs$parameters2.docs)||void 0===_Docs$parameters2$doc?void 0:_Docs$parameters2$doc.source)})});var __namedExportsOrder=["Docs"]},"./src/utils/defaultTheme.js":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.Z={primaryColor:"#6bb8e6",secondaryColor:"#282c34",shadowColor:"#1c1d1d",errorColor:"red",disabledColor:"#393737"}},"./src/utils/theme.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{F:function(){return useTheme}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_defaultTheme_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/defaultTheme.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(),useTheme=function useTheme(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext)},ThemeProvider=function ThemeProvider(_ref){var children=_ref.children,selectedTheme=_ref.theme||_defaultTheme_js__WEBPACK_IMPORTED_MODULE_1__.Z;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((function(){var root=document.documentElement;root.style.setProperty("--primary",selectedTheme.primaryColor),root.style.setProperty("--secondary",selectedTheme.secondaryColor)}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ThemeContext.Provider,{value:selectedTheme,children:children})};ThemeProvider.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider",props:{children:{description:"",type:{name:"object"},required:!1},theme:{description:"",type:{name:"object"},required:!1}}},__webpack_exports__.Z=ThemeProvider},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);