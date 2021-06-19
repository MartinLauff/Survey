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
/* harmony import */ var _apis_surveyData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../apis/surveyData */ "./apis/surveyData.js");
/* harmony import */ var _styles_Survey_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/Survey.module.css */ "./styles/Survey.module.css");
/* harmony import */ var _styles_Survey_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_Survey_module_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_Question1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Question1 */ "./components/Question1.js");
/* harmony import */ var _components_Question2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Question2 */ "./components/Question2.js");
/* harmony import */ var _components_Question3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Question3 */ "./components/Question3.js");
/* harmony import */ var _components_Question4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Question4 */ "./components/Question4.js");
/* harmony import */ var _components_Question5__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Question5 */ "./components/Question5.js");
/* harmony import */ var _components_Question6__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Question6 */ "./components/Question6.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\Codes\\survey\\pages\\survey.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Lenovo_Desktop_Codes_survey_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var survey = function survey() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({}),
      state = _useState[0],
      setState = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      active = _useState2[0],
      setActive = _useState2[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    console.log(state);
  }, [state]);

  var collectQ1 = function collectQ1(datas) {
    if (datas === 1) {
      setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          question1: 1
        });
      });
    }

    if (datas === 2) {
      setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          question1: 2
        });
      });
    }

    if (datas === 3) {
      setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          question1: 3
        });
      });
    }

    if (datas === 4) {
      setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          question1: 4
        });
      });
    }
  };

  var collectQ2 = function collectQ2(datas) {
    if (datas === 1) {
      setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          question2: 1
        });
      });
    }

    if (datas === 2) {
      setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          question2: 2
        });
      });
    }

    if (datas === 3) {
      setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          question2: 3
        });
      });
    }

    if (datas === 4) {
      setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          question2: 4
        });
      });
    }
  };

  var collectQ3 = function collectQ3(datas) {
    setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        question3: (0,C_Users_Lenovo_Desktop_Codes_survey_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(datas)
      });
    });
  };

  var collectQ4 = function collectQ4(datas) {
    if (datas === 1) {
      setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          question4: 1
        });
      });
    }

    if (datas === 2) {
      setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          question4: 2
        });
      });
    }

    if (datas === 3) {
      setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          question4: 3
        });
      });
    }

    if (datas === 4) {
      setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          question4: 4
        });
      });
    }

    if (datas === 5) {
      setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          question4: 5
        });
      });
    }
  };

  var collectQ5 = function collectQ5(datas) {
    setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        question5: datas
      });
    });
  };

  var collectQ6 = function collectQ6(datas) {
    if (datas === 1) {
      setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          question6: 1
        });
      });
    }

    if (datas === 2) {
      setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          question6: 2
        });
      });
    }
  };

  var onSubmit = /*#__PURE__*/function () {
    var _ref = (0,C_Users_Lenovo_Desktop_Codes_survey_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Lenovo_Desktop_Codes_survey_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var question6, question4, question3, question2, question1;
      return C_Users_Lenovo_Desktop_Codes_survey_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              question6 = state.question6, question4 = state.question4, question3 = state.question3, question2 = state.question2, question1 = state.question1;

              if (!(!question1 || !question2 || !question4 || !question6 || question3.length == 0)) {
                _context.next = 4;
                break;
              }

              setActive(true);
              return _context.abrupt("return");

            case 4:
              _context.next = 6;
              return _apis_surveyData__WEBPACK_IMPORTED_MODULE_7__.default.post('/survey', _objectSpread({}, state), {
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 6:
              router.push('/completion');

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    onSubmit: onSubmit,
    className: (_styles_Survey_module_css__WEBPACK_IMPORTED_MODULE_14___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "What Does the Future Hold for You?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Question1__WEBPACK_IMPORTED_MODULE_8__.default, {
      collectAnswers: collectQ1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Question2__WEBPACK_IMPORTED_MODULE_9__.default, {
      collectAnswers: collectQ2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Question3__WEBPACK_IMPORTED_MODULE_10__.default, {
      collectAnswers: collectQ3
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Question4__WEBPACK_IMPORTED_MODULE_11__.default, {
      collectAnswers: collectQ4
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Question5__WEBPACK_IMPORTED_MODULE_12__.default, {
      collectAnswers: collectQ5
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Question6__WEBPACK_IMPORTED_MODULE_13__.default, {
      collectAnswers: collectQ6
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "".concat((_styles_Survey_module_css__WEBPACK_IMPORTED_MODULE_14___default().error), " ").concat(active ? (_styles_Survey_module_css__WEBPACK_IMPORTED_MODULE_14___default().flex) : (_styles_Survey_module_css__WEBPACK_IMPORTED_MODULE_14___default().hidden)),
      children: "You need to answer all questions"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      type: "submit",
      children: "Submit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 163,
    columnNumber: 5
  }, _this);
};

_s(survey, "HANdyNPk40xDaDYyeLpmdUA8Pv0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3VydmV5LmpzIl0sIm5hbWVzIjpbInN1cnZleSIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJjb2xsZWN0UTEiLCJkYXRhcyIsInByZXZTdGF0ZSIsInF1ZXN0aW9uMSIsImNvbGxlY3RRMiIsInF1ZXN0aW9uMiIsImNvbGxlY3RRMyIsInF1ZXN0aW9uMyIsImNvbGxlY3RRNCIsInF1ZXN0aW9uNCIsImNvbGxlY3RRNSIsInF1ZXN0aW9uNSIsImNvbGxlY3RRNiIsInF1ZXN0aW9uNiIsIm9uU3VibWl0IiwibGVuZ3RoIiwic3VydmV5RGF0YSIsImhlYWRlcnMiLCJwdXNoIiwic3VydmV5U3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBQ09DLCtDQUFRLENBQUMsRUFBRCxDQURmO0FBQUEsTUFDWkMsS0FEWTtBQUFBLE1BQ0xDLFFBREs7O0FBQUEsbUJBRVNGLCtDQUFRLENBQUMsS0FBRCxDQUZqQjtBQUFBLE1BRVpHLE1BRlk7QUFBQSxNQUVKQyxTQUZJOztBQUduQixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRUFDLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWVIsS0FBWjtBQUNELEdBRlEsRUFFTixDQUFDQSxLQUFELENBRk0sQ0FBVDs7QUFJQSxNQUFNUyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFDM0IsUUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZlQsY0FBUSxDQUFDLFVBQUNVLFNBQUQ7QUFBQSwrQ0FDSkEsU0FESTtBQUVQQyxtQkFBUyxFQUFFO0FBRko7QUFBQSxPQUFELENBQVI7QUFJRDs7QUFDRCxRQUFJRixLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmVCxjQUFRLENBQUMsVUFBQ1UsU0FBRDtBQUFBLCtDQUNKQSxTQURJO0FBRVBDLG1CQUFTLEVBQUU7QUFGSjtBQUFBLE9BQUQsQ0FBUjtBQUlEOztBQUNELFFBQUlGLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2ZULGNBQVEsQ0FBQyxVQUFDVSxTQUFEO0FBQUEsK0NBQ0pBLFNBREk7QUFFUEMsbUJBQVMsRUFBRTtBQUZKO0FBQUEsT0FBRCxDQUFSO0FBSUQ7O0FBQ0QsUUFBSUYsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZlQsY0FBUSxDQUFDLFVBQUNVLFNBQUQ7QUFBQSwrQ0FDSkEsU0FESTtBQUVQQyxtQkFBUyxFQUFFO0FBRko7QUFBQSxPQUFELENBQVI7QUFJRDtBQUNGLEdBekJEOztBQTJCQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDSCxLQUFELEVBQVc7QUFDM0IsUUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZlQsY0FBUSxDQUFDLFVBQUNVLFNBQUQ7QUFBQSwrQ0FDSkEsU0FESTtBQUVQRyxtQkFBUyxFQUFFO0FBRko7QUFBQSxPQUFELENBQVI7QUFJRDs7QUFDRCxRQUFJSixLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmVCxjQUFRLENBQUMsVUFBQ1UsU0FBRDtBQUFBLCtDQUNKQSxTQURJO0FBRVBHLG1CQUFTLEVBQUU7QUFGSjtBQUFBLE9BQUQsQ0FBUjtBQUlEOztBQUNELFFBQUlKLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2ZULGNBQVEsQ0FBQyxVQUFDVSxTQUFEO0FBQUEsK0NBQ0pBLFNBREk7QUFFUEcsbUJBQVMsRUFBRTtBQUZKO0FBQUEsT0FBRCxDQUFSO0FBSUQ7O0FBQ0QsUUFBSUosS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZlQsY0FBUSxDQUFDLFVBQUNVLFNBQUQ7QUFBQSwrQ0FDSkEsU0FESTtBQUVQRyxtQkFBUyxFQUFFO0FBRko7QUFBQSxPQUFELENBQVI7QUFJRDtBQUNGLEdBekJEOztBQTJCQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDTCxLQUFELEVBQVc7QUFDM0JULFlBQVEsQ0FBQyxVQUFDVSxTQUFEO0FBQUEsNkNBQ0pBLFNBREk7QUFFUEssaUJBQVMsRUFBRSxzSUFBSU4sS0FBTjtBQUZGO0FBQUEsS0FBRCxDQUFSO0FBSUQsR0FMRDs7QUFPQSxNQUFNTyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDUCxLQUFELEVBQVc7QUFDM0IsUUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZlQsY0FBUSxDQUFDLFVBQUNVLFNBQUQ7QUFBQSwrQ0FDSkEsU0FESTtBQUVQTyxtQkFBUyxFQUFFO0FBRko7QUFBQSxPQUFELENBQVI7QUFJRDs7QUFDRCxRQUFJUixLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmVCxjQUFRLENBQUMsVUFBQ1UsU0FBRDtBQUFBLCtDQUNKQSxTQURJO0FBRVBPLG1CQUFTLEVBQUU7QUFGSjtBQUFBLE9BQUQsQ0FBUjtBQUlEOztBQUNELFFBQUlSLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2ZULGNBQVEsQ0FBQyxVQUFDVSxTQUFEO0FBQUEsK0NBQ0pBLFNBREk7QUFFUE8sbUJBQVMsRUFBRTtBQUZKO0FBQUEsT0FBRCxDQUFSO0FBSUQ7O0FBQ0QsUUFBSVIsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZlQsY0FBUSxDQUFDLFVBQUNVLFNBQUQ7QUFBQSwrQ0FDSkEsU0FESTtBQUVQTyxtQkFBUyxFQUFFO0FBRko7QUFBQSxPQUFELENBQVI7QUFJRDs7QUFDRCxRQUFJUixLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmVCxjQUFRLENBQUMsVUFBQ1UsU0FBRDtBQUFBLCtDQUNKQSxTQURJO0FBRVBPLG1CQUFTLEVBQUU7QUFGSjtBQUFBLE9BQUQsQ0FBUjtBQUlEO0FBQ0YsR0EvQkQ7O0FBaUNBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNULEtBQUQsRUFBVztBQUMzQlQsWUFBUSxDQUFDLFVBQUNVLFNBQUQ7QUFBQSw2Q0FDSkEsU0FESTtBQUVQUyxpQkFBUyxFQUFFVjtBQUZKO0FBQUEsS0FBRCxDQUFSO0FBSUQsR0FMRDs7QUFPQSxNQUFNVyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDWCxLQUFELEVBQVc7QUFDM0IsUUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZlQsY0FBUSxDQUFDLFVBQUNVLFNBQUQ7QUFBQSwrQ0FDSkEsU0FESTtBQUVQVyxtQkFBUyxFQUFFO0FBRko7QUFBQSxPQUFELENBQVI7QUFJRDs7QUFDRCxRQUFJWixLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmVCxjQUFRLENBQUMsVUFBQ1UsU0FBRDtBQUFBLCtDQUNKQSxTQURJO0FBRVBXLG1CQUFTLEVBQUU7QUFGSjtBQUFBLE9BQUQsQ0FBUjtBQUlEO0FBQ0YsR0FiRDs7QUFlQSxNQUFNQyxRQUFRO0FBQUEseVJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1BELHVCQURPLEdBQ21EdEIsS0FEbkQsQ0FDUHNCLFNBRE8sRUFDSUosU0FESixHQUNtRGxCLEtBRG5ELENBQ0lrQixTQURKLEVBQ2VGLFNBRGYsR0FDbURoQixLQURuRCxDQUNlZ0IsU0FEZixFQUMwQkYsU0FEMUIsR0FDbURkLEtBRG5ELENBQzBCYyxTQUQxQixFQUNxQ0YsU0FEckMsR0FDbURaLEtBRG5ELENBQ3FDWSxTQURyQzs7QUFBQSxvQkFJYixDQUFDQSxTQUFELElBQ0EsQ0FBQ0UsU0FERCxJQUVBLENBQUNJLFNBRkQsSUFHQSxDQUFDSSxTQUhELElBSUFOLFNBQVMsQ0FBQ1EsTUFBVixJQUFvQixDQVJQO0FBQUE7QUFBQTtBQUFBOztBQVVickIsdUJBQVMsQ0FBQyxJQUFELENBQVQ7QUFWYTs7QUFBQTtBQUFBO0FBQUEscUJBYVRzQiwwREFBQSxDQUNKLFNBREksb0JBRUN6QixLQUZELEdBR0o7QUFDRTBCLHVCQUFPLEVBQUU7QUFDUCxrQ0FBZ0I7QUFEVDtBQURYLGVBSEksQ0FiUzs7QUFBQTtBQXNCZnRCLG9CQUFNLENBQUN1QixJQUFQLENBQVksYUFBWjs7QUF0QmU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUkosUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQXlCQSxzQkFDRTtBQUFNLFlBQVEsRUFBRUEsUUFBaEI7QUFBMEIsYUFBUyxFQUFFSyw2RUFBckM7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsMERBQUQ7QUFBVyxvQkFBYyxFQUFFbkI7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0UsOERBQUMsMERBQUQ7QUFBVyxvQkFBYyxFQUFFSTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFJRSw4REFBQywyREFBRDtBQUFXLG9CQUFjLEVBQUVFO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQUtFLDhEQUFDLDJEQUFEO0FBQVcsb0JBQWMsRUFBRUU7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLGVBTUUsOERBQUMsMkRBQUQ7QUFBVyxvQkFBYyxFQUFFRTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsZUFPRSw4REFBQywyREFBRDtBQUFXLG9CQUFjLEVBQUVFO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQVFFO0FBQ0UsZUFBUyxZQUFLTyx5RUFBTCxjQUNQMUIsTUFBTSxHQUFHMEIsd0VBQUgsR0FBdUJBLDBFQUR0QixDQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkYsZUFlRTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQkQsQ0F6S0Q7O0dBQU05QixNO1VBR1dPLGtEOzs7QUF3S2pCLCtEQUFlUCxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N1cnZleS4zMjA3OTU2Y2M5MjA1YzM3ZWRjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3VydmV5RGF0YSBmcm9tICcuLi9hcGlzL3N1cnZleURhdGEnO1xyXG5pbXBvcnQgc3VydmV5U3R5bGVzIGZyb20gJy4uL3N0eWxlcy9TdXJ2ZXkubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBRdWVzdGlvbjEgZnJvbSAnLi4vY29tcG9uZW50cy9RdWVzdGlvbjEnO1xyXG5pbXBvcnQgUXVlc3Rpb24yIGZyb20gJy4uL2NvbXBvbmVudHMvUXVlc3Rpb24yJztcclxuaW1wb3J0IFF1ZXN0aW9uMyBmcm9tICcuLi9jb21wb25lbnRzL1F1ZXN0aW9uMyc7XHJcbmltcG9ydCBRdWVzdGlvbjQgZnJvbSAnLi4vY29tcG9uZW50cy9RdWVzdGlvbjQnO1xyXG5pbXBvcnQgUXVlc3Rpb241IGZyb20gJy4uL2NvbXBvbmVudHMvUXVlc3Rpb241JztcclxuaW1wb3J0IFF1ZXN0aW9uNiBmcm9tICcuLi9jb21wb25lbnRzL1F1ZXN0aW9uNic7XHJcblxyXG5jb25zdCBzdXJ2ZXkgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICB9LCBbc3RhdGVdKTtcclxuXHJcbiAgY29uc3QgY29sbGVjdFExID0gKGRhdGFzKSA9PiB7XHJcbiAgICBpZiAoZGF0YXMgPT09IDEpIHtcclxuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcclxuICAgICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgICAgcXVlc3Rpb24xOiAxLFxyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YXMgPT09IDIpIHtcclxuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcclxuICAgICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgICAgcXVlc3Rpb24xOiAyLFxyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YXMgPT09IDMpIHtcclxuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcclxuICAgICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgICAgcXVlc3Rpb24xOiAzLFxyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YXMgPT09IDQpIHtcclxuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcclxuICAgICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgICAgcXVlc3Rpb24xOiA0LFxyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29sbGVjdFEyID0gKGRhdGFzKSA9PiB7XHJcbiAgICBpZiAoZGF0YXMgPT09IDEpIHtcclxuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcclxuICAgICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgICAgcXVlc3Rpb24yOiAxLFxyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YXMgPT09IDIpIHtcclxuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcclxuICAgICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgICAgcXVlc3Rpb24yOiAyLFxyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YXMgPT09IDMpIHtcclxuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcclxuICAgICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgICAgcXVlc3Rpb24yOiAzLFxyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YXMgPT09IDQpIHtcclxuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcclxuICAgICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgICAgcXVlc3Rpb24yOiA0LFxyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29sbGVjdFEzID0gKGRhdGFzKSA9PiB7XHJcbiAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgIHF1ZXN0aW9uMzogWy4uLmRhdGFzXSxcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb2xsZWN0UTQgPSAoZGF0YXMpID0+IHtcclxuICAgIGlmIChkYXRhcyA9PT0gMSkge1xyXG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgICBxdWVzdGlvbjQ6IDEsXHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhcyA9PT0gMikge1xyXG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgICBxdWVzdGlvbjQ6IDIsXHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhcyA9PT0gMykge1xyXG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgICBxdWVzdGlvbjQ6IDMsXHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhcyA9PT0gNCkge1xyXG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgICBxdWVzdGlvbjQ6IDQsXHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhcyA9PT0gNSkge1xyXG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgICBxdWVzdGlvbjQ6IDUsXHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjb2xsZWN0UTUgPSAoZGF0YXMpID0+IHtcclxuICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XHJcbiAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgcXVlc3Rpb241OiBkYXRhcyxcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb2xsZWN0UTYgPSAoZGF0YXMpID0+IHtcclxuICAgIGlmIChkYXRhcyA9PT0gMSkge1xyXG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgICBxdWVzdGlvbjY6IDEsXHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhcyA9PT0gMikge1xyXG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgICBxdWVzdGlvbjY6IDIsXHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHsgcXVlc3Rpb242LCBxdWVzdGlvbjQsIHF1ZXN0aW9uMywgcXVlc3Rpb24yLCBxdWVzdGlvbjEgfSA9IHN0YXRlO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgIXF1ZXN0aW9uMSB8fFxyXG4gICAgICAhcXVlc3Rpb24yIHx8XHJcbiAgICAgICFxdWVzdGlvbjQgfHxcclxuICAgICAgIXF1ZXN0aW9uNiB8fFxyXG4gICAgICBxdWVzdGlvbjMubGVuZ3RoID09IDBcclxuICAgICkge1xyXG4gICAgICBzZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGF3YWl0IHN1cnZleURhdGEucG9zdChcclxuICAgICAgJy9zdXJ2ZXknLFxyXG4gICAgICB7IC4uLnN0YXRlIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICByb3V0ZXIucHVzaCgnL2NvbXBsZXRpb24nKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBjbGFzc05hbWU9e3N1cnZleVN0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8aDE+V2hhdCBEb2VzIHRoZSBGdXR1cmUgSG9sZCBmb3IgWW91PzwvaDE+XHJcbiAgICAgIDxRdWVzdGlvbjEgY29sbGVjdEFuc3dlcnM9e2NvbGxlY3RRMX0gLz5cclxuICAgICAgPFF1ZXN0aW9uMiBjb2xsZWN0QW5zd2Vycz17Y29sbGVjdFEyfSAvPlxyXG4gICAgICA8UXVlc3Rpb24zIGNvbGxlY3RBbnN3ZXJzPXtjb2xsZWN0UTN9IC8+XHJcbiAgICAgIDxRdWVzdGlvbjQgY29sbGVjdEFuc3dlcnM9e2NvbGxlY3RRNH0gLz5cclxuICAgICAgPFF1ZXN0aW9uNSBjb2xsZWN0QW5zd2Vycz17Y29sbGVjdFE1fSAvPlxyXG4gICAgICA8UXVlc3Rpb242IGNvbGxlY3RBbnN3ZXJzPXtjb2xsZWN0UTZ9IC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Ake3N1cnZleVN0eWxlcy5lcnJvcn0gJHtcclxuICAgICAgICAgIGFjdGl2ZSA/IHN1cnZleVN0eWxlcy5mbGV4IDogc3VydmV5U3R5bGVzLmhpZGRlblxyXG4gICAgICAgIH1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgWW91IG5lZWQgdG8gYW5zd2VyIGFsbCBxdWVzdGlvbnNcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5TdWJtaXQ8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3VydmV5O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9