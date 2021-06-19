(function() {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 485:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _document; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(6859);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./components/Footer.js




const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "Copyright by Martin Lauff"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "\xA9 Quizeck 2021"
      })]
    })
  });
};

/* harmony default export */ var components_Footer = (Footer);
;// CONCATENATED MODULE: ./pages/_document.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class MyDocument extends next_document.default {
  static async getInitialProps(ctx) {
    const initialProps = await next_document.default.getInitialProps(ctx);
    return _objectSpread({}, initialProps);
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(next_document.Html, {
      lang: "en",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_document.Head, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("body", {
        style: {
          backgroundImage: 'linear-gradient(to right bottom, #ff3366, #ba265d)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_document.Main, {}), /*#__PURE__*/jsx_runtime_.jsx(next_document.NextScript, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
      })]
    });
  }

}

/* harmony default export */ var _document = (MyDocument);

/***/ }),

/***/ 227:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/constants.js");;

/***/ }),

/***/ 3932:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/document-context.js");;

/***/ }),

/***/ 816:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head-manager-context.js");;

/***/ }),

/***/ 7579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ 6171:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/get-page-files.js");;

/***/ }),

/***/ 5105:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/utils.js");;

/***/ }),

/***/ 4229:
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 1168:
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/server");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [198], function() { return __webpack_exec__(485); });
module.exports = __webpack_exports__;

})();