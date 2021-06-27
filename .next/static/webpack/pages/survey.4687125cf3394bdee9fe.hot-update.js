self["webpackHotUpdate_N_E"]("pages/survey",{

/***/ "./pages/survey.js":
/*!*************************!*\
  !*** ./pages/survey.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Lenovo_Desktop_Codes_survey_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Lenovo_Desktop_Codes_survey_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lenovo_Desktop_Codes_survey_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Lenovo_Desktop_Codes_survey_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Lenovo_Desktop_Codes_survey_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_Lenovo_Desktop_Codes_survey_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_Survey_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/Survey.module.css */ "./styles/Survey.module.css");
/* harmony import */ var _styles_Survey_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_Survey_module_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Question1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Question1 */ "./components/Question1.js");
/* harmony import */ var _components_Question2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Question2 */ "./components/Question2.js");
/* harmony import */ var _components_Question3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Question3 */ "./components/Question3.js");
/* harmony import */ var _components_Question4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Question4 */ "./components/Question4.js");
/* harmony import */ var _components_Question5__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Question5 */ "./components/Question5.js");
/* harmony import */ var _components_Question6__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Question6 */ "./components/Question6.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\survey\\pages\\survey.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Lenovo_Desktop_Codes_survey_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // import surveyData from '../apis/surveyData';









var survey = function survey() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({}),
      state = _useState[0],
      setState = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      active = _useState2[0],
      setActive = _useState2[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  var collectQ1 = function collectQ1(datas) {
    setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        question1: datas
      });
    });
  };

  var collectQ2 = function collectQ2(datas) {
    setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        question2: datas
      });
    });
  };

  var collectQ3 = function collectQ3(datas) {
    setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        question3: (0,C_Users_Lenovo_Desktop_Codes_survey_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(datas)
      });
    });
  };

  var collectQ4 = function collectQ4(datas) {
    setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        question4: datas
      });
    });
  };

  var collectQ5 = function collectQ5(datas) {
    setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        question5: datas
      });
    });
  };

  var collectQ6 = function collectQ6(datas) {
    setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        question6: datas
      });
    });
  };

  var onSubmit = /*#__PURE__*/function () {
    var _ref = (0,C_Users_Lenovo_Desktop_Codes_survey_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Lenovo_Desktop_Codes_survey_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var question6, question4, question3, question2, question1;
      return C_Users_Lenovo_Desktop_Codes_survey_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              question6 = state.question6, question4 = state.question4, question3 = state.question3, question2 = state.question2, question1 = state.question1;

              if (!(!question1 || !question2 || !question4 || !question6 || question3.length == 0)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", setActive(true));

            case 4:
              ///////////////////////
              // Code below is for production
              // await surveyData.post(
              //   '/survey',
              //   { ...state },
              //   {
              //     headers: {
              //       'Content-Type': 'application/json',
              //     },
              //   }
              // );
              router.push('/completion');

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    onSubmit: onSubmit,
    className: (_styles_Survey_module_css__WEBPACK_IMPORTED_MODULE_13___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "What Does the Future Hold for You?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Question1__WEBPACK_IMPORTED_MODULE_7__.default, {
      collectAnswers: collectQ1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Question2__WEBPACK_IMPORTED_MODULE_8__.default, {
      collectAnswers: collectQ2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Question3__WEBPACK_IMPORTED_MODULE_9__.default, {
      collectAnswers: collectQ3
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Question4__WEBPACK_IMPORTED_MODULE_10__.default, {
      collectAnswers: collectQ4
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Question5__WEBPACK_IMPORTED_MODULE_11__.default, {
      collectAnswers: collectQ5
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Question6__WEBPACK_IMPORTED_MODULE_12__.default, {
      collectAnswers: collectQ6
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "".concat((_styles_Survey_module_css__WEBPACK_IMPORTED_MODULE_13___default().error), " ").concat(active ? (_styles_Survey_module_css__WEBPACK_IMPORTED_MODULE_13___default().flex) : (_styles_Survey_module_css__WEBPACK_IMPORTED_MODULE_13___default().hidden)),
      children: "You need to answer all questions"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      type: "submit",
      children: "Submit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 5
  }, _this);
};

_s(survey, "twvqQljo1+8P9ixCXwKf+WkN2to=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

/* harmony default export */ __webpack_exports__["default"] = (survey);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3VydmV5LmpzIl0sIm5hbWVzIjpbInN1cnZleSIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbGxlY3RRMSIsImRhdGFzIiwicHJldlN0YXRlIiwicXVlc3Rpb24xIiwiY29sbGVjdFEyIiwicXVlc3Rpb24yIiwiY29sbGVjdFEzIiwicXVlc3Rpb24zIiwiY29sbGVjdFE0IiwicXVlc3Rpb240IiwiY29sbGVjdFE1IiwicXVlc3Rpb241IiwiY29sbGVjdFE2IiwicXVlc3Rpb242Iiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJwdXNoIiwic3VydmV5U3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNPQywrQ0FBUSxDQUFDLEVBQUQsQ0FEZjtBQUFBLE1BQ1pDLEtBRFk7QUFBQSxNQUNMQyxRQURLOztBQUFBLG1CQUVTRiwrQ0FBUSxDQUFDLEtBQUQsQ0FGakI7QUFBQSxNQUVaRyxNQUZZO0FBQUEsTUFFSkMsU0FGSTs7QUFHbkIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFFQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFDM0JOLFlBQVEsQ0FBQyxVQUFDTyxTQUFEO0FBQUEsNkNBQ0pBLFNBREk7QUFFUEMsaUJBQVMsRUFBRUY7QUFGSjtBQUFBLEtBQUQsQ0FBUjtBQUlELEdBTEQ7O0FBT0EsTUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0gsS0FBRCxFQUFXO0FBQzNCTixZQUFRLENBQUMs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QUFILEdBQXVCQSwwRUFEdEIsQ0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGLGVBZUU7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBL0ZEOztHQUFNM0IsTTtVQUdXTyxrRDs7O0FBOEZqQiwrREFBZVAsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdXJ2ZXkuNDY4NzEyNWNmMzM5NGJkZWU5ZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IHN1cnZleURhdGEgZnJvbSAnLi4vYXBpcy9zdXJ2ZXlEYXRhJztcclxuaW1wb3J0IHN1cnZleVN0eWxlcyBmcm9tICcuLi9zdHlsZXMvU3VydmV5Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgUXVlc3Rpb24xIGZyb20gJy4uL2NvbXBvbmVudHMvUXVlc3Rpb24xJztcclxuaW1wb3J0IFF1ZXN0aW9uMiBmcm9tICcuLi9jb21wb25lbnRzL1F1ZXN0aW9uMic7XHJcbmltcG9ydCBRdWVzdGlvbjMgZnJvbSAnLi4vY29tcG9uZW50cy9RdWVzdGlvbjMnO1xyXG5pbXBvcnQgUXVlc3Rpb240IGZyb20gJy4uL2NvbXBvbmVudHMvUXVlc3Rpb240JztcclxuaW1wb3J0IFF1ZXN0aW9uNSBmcm9tICcuLi9jb21wb25lbnRzL1F1ZXN0aW9uNSc7XHJcbmltcG9ydCBRdWVzdGlvbjYgZnJvbSAnLi4vY29tcG9uZW50cy9RdWVzdGlvbjYnO1xyXG5cclxuY29uc3Qgc3VydmV5ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGNvbGxlY3RRMSA9IChkYXRhcykgPT4ge1xyXG4gICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcclxuICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICBxdWVzdGlvbjE6IGRhdGFzLFxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbGxlY3RRMiA9IChkYXRhcykgPT4ge1xyXG4gICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcclxuICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICBxdWVzdGlvbjI6IGRhdGFzLFxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbGxlY3RRMyA9IChkYXRhcykgPT4ge1xyXG4gICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcclxuICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICBxdWVzdGlvbjM6IFsuLi5kYXRhc10sXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29sbGVjdFE0ID0gKGRhdGFzKSA9PiB7XHJcbiAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgIHF1ZXN0aW9uNDogZGF0YXMsXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29sbGVjdFE1ID0gKGRhdGFzKSA9PiB7XHJcbiAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgIHF1ZXN0aW9uNTogZGF0YXMsXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29sbGVjdFE2ID0gKGRhdGFzKSA9PiB7XHJcbiAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgIHF1ZXN0aW9uNjogZGF0YXMsXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgeyBxdWVzdGlvbjYsIHF1ZXN0aW9uNCwgcXVlc3Rpb24zLCBxdWVzdGlvbjIsIHF1ZXN0aW9uMSB9ID0gc3RhdGU7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICAhcXVlc3Rpb24xIHx8XHJcbiAgICAgICFxdWVzdGlvbjIgfHxcclxuICAgICAgIXF1ZXN0aW9uNCB8fFxyXG4gICAgICAhcXVlc3Rpb242IHx8XHJcbiAgICAgIHF1ZXN0aW9uMy5sZW5ndGggPT0gMFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiBzZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIENvZGUgYmVsb3cgaXMgZm9yIHByb2R1Y3Rpb25cclxuXHJcbiAgICAvLyBhd2FpdCBzdXJ2ZXlEYXRhLnBvc3QoXHJcbiAgICAvLyAgICcvc3VydmV5JyxcclxuICAgIC8vICAgeyAuLi5zdGF0ZSB9LFxyXG4gICAgLy8gICB7XHJcbiAgICAvLyAgICAgaGVhZGVyczoge1xyXG4gICAgLy8gICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICB9XHJcbiAgICAvLyApO1xyXG4gICAgcm91dGVyLnB1c2goJy9jb21wbGV0aW9uJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gY2xhc3NOYW1lPXtzdXJ2ZXlTdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGgxPldoYXQgRG9lcyB0aGUgRnV0dXJlIEhvbGQgZm9yIFlvdT88L2gxPlxyXG4gICAgICA8UXVlc3Rpb24xIGNvbGxlY3RBbnN3ZXJzPXtjb2xsZWN0UTF9IC8+XHJcbiAgICAgIDxRdWVzdGlvbjIgY29sbGVjdEFuc3dlcnM9e2NvbGxlY3RRMn0gLz5cclxuICAgICAgPFF1ZXN0aW9uMyBjb2xsZWN0QW5zd2Vycz17Y29sbGVjdFEzfSAvPlxyXG4gICAgICA8UXVlc3Rpb240IGNvbGxlY3RBbnN3ZXJzPXtjb2xsZWN0UTR9IC8+XHJcbiAgICAgIDxRdWVzdGlvbjUgY29sbGVjdEFuc3dlcnM9e2NvbGxlY3RRNX0gLz5cclxuICAgICAgPFF1ZXN0aW9uNiBjb2xsZWN0QW5zd2Vycz17Y29sbGVjdFE2fSAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdXJ2ZXlTdHlsZXMuZXJyb3J9ICR7XHJcbiAgICAgICAgICBhY3RpdmUgPyBzdXJ2ZXlTdHlsZXMuZmxleCA6IHN1cnZleVN0eWxlcy5oaWRkZW5cclxuICAgICAgICB9YH1cclxuICAgICAgPlxyXG4gICAgICAgIFlvdSBuZWVkIHRvIGFuc3dlciBhbGwgcXVlc3Rpb25zXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+U3VibWl0PC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN1cnZleTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==