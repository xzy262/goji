"use strict";var e=require("react/jsx-runtime"),o=require("framer-motion");function t(e,o){void 0===o&&(o={});var t=o.insertAt;if(e&&"undefined"!=typeof document){var l=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css","top"===t&&l.firstChild?l.insertBefore(d,l.firstChild):l.appendChild(d),d.styleSheet?d.styleSheet.cssText=e:d.appendChild(document.createTextNode(e))}}var l={upload:"upload-module_upload__sdJ3u"};t(".upload-module_upload__sdJ3u{color:red}");var d={modal:"modal-module_modal__6lMO2",mask:"modal-module_mask__4ikYm",modalContent:"modal-module_modalContent__h8nfh"};t(".modal-module_modal__6lMO2{bottom:0;left:0;position:fixed;right:0;top:0;width:100%}.modal-module_modal__6lMO2 .modal-module_mask__4ikYm{background-color:rgba(92,93,93,.385);bottom:0;left:0;position:fixed;right:0;top:0;z-index:10000}.modal-module_modal__6lMO2 .modal-module_modalContent__h8nfh{background-color:#fff;left:0;margin:0 auto;min-height:200px;position:absolute;right:0;top:100px;z-index:10001}"),exports.Modal=function(t){const{width:l=800,children:a,dontDestroyOnClose:i=!1,visible:n,onClose:s,style:m={},motionConfig:r={initial:{opacity:.1,y:0,scale:.2},animate:{opacity:1,y:100,scale:1}}}=t,c={};if(i)c.display=n?"block":"none";else if(!n)return null;return e.jsxs("div",Object.assign({style:Object.assign({},c),className:d.modal},{children:[e.jsx("div",{onClick:()=>{null==s||s()},className:d.mask}),e.jsx(o.motion.div,Object.assign({},r,{style:Object.assign({width:`${l}px`},m),className:d.modalContent},{children:a}))]}))},exports.Upload=function(o){const{onClick:t,url:d,name:a}=o;return e.jsx("div",Object.assign({title:a,onClick:t,className:l.upload},{children:a}))};
//# sourceMappingURL=index.js.map