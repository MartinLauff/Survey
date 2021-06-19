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
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", setActive(true));

            case 3:
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

            case 4:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3VydmV5LmpzIl0sIm5hbWVzIjpbInN1cnZleSIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJjb2xsZWN0UTEiLCJkYXRhcyIsInByZXZTdGF0ZSIsInF1ZXN0aW9uMSIsImNvbGxlY3RRMiIsInF1ZXN0aW9uMiIsImNvbGxlY3RRMyIsInF1ZXN0aW9uMyIsImNvbGxlY3RRNCIsInF1ZXN0aW9uNCIsImNvbGxlY3RRNSIsInF1ZXN0aW9uNSIsImNvbGxlY3RRNiIsInF1ZXN0aW9uNiIsIm9uU3VibWl0IiwibGVuZ3RoIiwicHVzaCIsInN1cnZleVN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNPQywrQ0FBUSxDQUFDLEVBQUQsQ0FEZjtBQUFBLE1BQ1pDLEtBRFk7QUFBQSxNQUNMQyxRQURLOztBQUFBLG1CQUVTRiwrQ0FBUSxDQUFDLEtBQUQsQ0FGakI7QUFBQSxNQUVaRyxNQUZZO0FBQUEsTUFFSkMsU0FGSTs7QUFHbkIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBQyxrREFBUyxDQUFDLFlBQU07QUFDZEMsV0FBTyxDQUFDQyxHQUFSLENBQVlSLEtBQVo7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsS0FBRCxDQUZNLENBQVQ7O0FBSUEsTUFBTVMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQzNCLFFBQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2ZULGNBQVEsQ0FBQyxVQUFDVSxTQUFEO0FBQUEsK0NBQ0pBLFNBREk7QUFFUEMsbUJBQVMsRUFBRTtBQUZKO0FBQUEsT0FBRCxDQUFSO0FBSUQ7O0FBQ0QsUUFBSUYsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZlQsY0FBUSxDQUFDLFVBQUNVLFNBQUQ7QUFBQSwrQ0FDSkEsU0FESTtBQUVQQyxtQkFBUyxFQUFFO0FBRko7QUFBQSxPQUFELENBQVI7QUFJRDs7QUFDRCxRQUFJRixLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmVCxjQUFRLENBQUMsVUFBQ1UsU0FBRDtBQUFBLCtDQUNKQSxTQURJO0FBRVBDLG1CQUFTLEVBQUU7QUFGSjtBQUFBLE9BQUQsQ0FBUjtBQUlEOztBQUNELFFBQUlGLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2ZULGNBQVEsQ0FBQyxVQUFDVSxTQUFEO0FBQUEsK0NBQ0pBLFNBREk7QUFFUEMsbUJBQVMsRUFBRTtBQUZKO0FBQUEsT0FBRCxDQUFSO0FBSUQ7QUFDRixHQXpCRDs7QUEyQkEsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0gsS0FBRCxFQUFXO0FBQzNCLFFBQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2ZULGNBQVEsQ0FBQyxVQUFDVSxTQUFEO0FBQUEsK0NBQ0pBLFNBREk7QUFFUEcsbUJBQVMsRUFBRTtBQUZKO0FBQUEsT0FBRCxDQUFSO0FBSUQ7O0FBQ0QsUUFBSUosS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZlQsY0FBUSxDQUFDLFVBQUNVLFNBQUQ7QUFBQSwrQ0FDSkEsU0FESTtBQUVQRyxtQkFBUyxFQUFFO0FBRko7QUFBQSxPQUFELENBQVI7QUFJRDs7QUFDRCxRQUFJSixLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmVCxjQUFRLENBQUMsVUFBQ1UsU0FBRDtBQUFBLCtDQUNKQSxTQURJO0FBRVBHLG1CQUFTLEVBQUU7QUFGSjtBQUFBLE9BQUQsQ0FBUjtBQUlEOztBQUNELFFBQUlKLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2ZULGNBQVEsQ0FBQyxVQUFDVSxTQUFEO0FBQUEsK0NBQ0pBLFNBREk7QUFFUEcsbUJBQVMsRUFBRTtBQUZKO0FBQUEsT0FBRCxDQUFSO0FBSUQ7QUFDRixHQXpCRDs7QUEyQkEsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0wsS0FBRCxFQUFXO0FBQzNCVCxZQUFRLENBQUMsVUFBQ1UsU0FBRDtBQUFBLDZDQUNKQSxTQURJO0FBRVBLLGlCQUFTLEVBQUUsc0lBQUlOLEtBQU47QUFGRjtBQUFBLEtBQUQsQ0FBUjtBQUlELEdBTEQ7O0FBT0EsTUFBTU8sU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ1AsS0FBRCxFQUFXO0FBQzNCLFFBQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2ZULGNBQVEsQ0FBQyxVQUFDVSxTQUFEO0FBQUEsK0NBQ0pBLFNBREk7QUFFUE8sbUJBQVMsRUFBRTtBQUZKO0FBQUEsT0FBRCxDQUFSO0FBSUQ7O0FBQ0QsUUFBSVIsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZlQsY0FBUSxDQUFDLFVBQUNVLFNBQUQ7QUFBQSwrQ0FDSkEsU0FESTtBQUVQTyxtQkFBUyxFQUFFO0FBRko7QUFBQSxPQUFELENBQVI7QUFJRDs7QUFDRCxRQUFJUixLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmVCxjQUFRLENBQUMsVUFBQ1UsU0FBRDtBQUFBLCtDQUNKQSxTQURJO0FBRVBPLG1CQUFTLEVBQUU7QUFGSjtBQUFBLE9BQUQsQ0FBUjtBQUlEOztBQUNELFFBQUlSLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2ZULGNBQVEsQ0FBQyxVQUFDVSxTQUFEO0FBQUEsK0NBQ0pBLFNBREk7QUFFUE8sbUJBQVMsRUFBRTtBQUZKO0FBQUEsT0FBRCxDQUFSO0FBSUQ7O0FBQ0QsUUFBSVIsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZlQsY0FBUSxDQUFDLFVBQUNVLFNBQUQ7QUFBQSwrQ0FDSkEsU0FESTtBQUVQTyxtQkFBUyxFQUFFO0FBRko7QUFBQSxPQUFELENBQVI7QUFJRDtBQUNGLEdBL0JEOztBQWlDQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDVCxLQUFELEVBQVc7QUFDM0JULFlBQVEsQ0FBQyxVQUFDVSxTQUFEO0FBQUEsNkNBQ0pBLFNBREk7QUFFUFMsaUJBQVMsRUFBRVY7QUFGSjtBQUFBLEtBQUQsQ0FBUjtBQUlELEdBTEQ7O0FBT0EsTUFBTVcsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ1gsS0FBRCxFQUFXO0FBQzNCLFFBQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2ZULGNBQVEsQ0FBQyxVQUFDVSxTQUFEO0FBQUEsK0NBQ0pBLFNBREk7QUFFUFcsbUJBQVMsRUFBRTtBQUZKO0FBQUEsT0FBRCxDQUFSO0FBSUQ7O0FBQ0QsUUFBSVosS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZlQsY0FBUSxDQUFDLFVBQUNVLFNBQUQ7QUFBQSwrQ0FDSkEsU0FESTtBQUVQVyxtQkFBUyxFQUFFO0FBRko7QUFBQSxPQUFELENBQVI7QUFJRDtBQUNGLEdBYkQ7O0FBZUEsTUFBTUMsUUFBUTtBQUFBLHlSQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNQRCx1QkFETyxHQUNtRHRCLEtBRG5ELENBQ1BzQixTQURPLEVBQ0lKLFNBREosR0FDbURsQixLQURuRCxDQUNJa0IsU0FESixFQUNlRixTQURmLEdBQ21EaEIsS0FEbkQsQ0FDZWdCLFNBRGYsRUFDMEJGLFNBRDFCLEdBQ21EZCxLQURuRCxDQUMwQmMsU0FEMUIsRUFDcUNGLFNBRHJDLEdBQ21EWixLQURuRCxDQUNxQ1ksU0FEckM7O0FBQUEsb0JBSWIsQ0FBQ0EsU0FBRCxJQUNBLENBQUNFLFNBREQsSUFFQSxDQUFDSSxTQUZELElBR0EsQ0FBQ0ksU0FIRCxJQUlBTixTQUFTLENBQUNRLE1BQVYsSUFBb0IsQ0FSUDtBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FVTnJCLFNBQVMsQ0FBQyxJQUFELENBVkg7O0FBQUE7QUFhZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsb0JBQU0sQ0FBQ3FCLElBQVAsQ0FBWSxhQUFaOztBQXRCZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSRixRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBeUJBLHNCQUNFO0FBQU0sWUFBUSxFQUFFQSxRQUFoQjtBQUEwQixhQUFTLEVBQUVHLDZFQUFyQztBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQywwREFBRDtBQUFXLG9CQUFjLEVBQUVqQjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSw4REFBQywwREFBRDtBQUFXLG9CQUFjLEVBQUVJO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFLDhEQUFDLDJEQUFEO0FBQVcsb0JBQWMsRUFBRUU7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBS0UsOERBQUMsMkRBQUQ7QUFBVyxvQkFBYyxFQUFFRTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsZUFNRSw4REFBQywyREFBRDtBQUFXLG9CQUFjLEVBQUVFO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixlQU9FLDhEQUFDLDJEQUFEO0FBQVcsb0JBQWMsRUFBRUU7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBUUU7QUFDRSxlQUFTLFlBQUtLLHlFQUFMLGNBQ1B4QixNQUFNLEdBQUd3Qix3RUFBSCxHQUF1QkEsMEVBRHRCLENBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixlQWVFO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1CRCxDQXpLRDs7R0FBTTVCLE07VUFHV08sa0Q7OztBQXdLakIsK0RBQWVQLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3VydmV5LmQ0ZTc2OWQ1N2FhOTg1ZWZjNzc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdXJ2ZXlEYXRhIGZyb20gJy4uL2FwaXMvc3VydmV5RGF0YSc7XHJcbmltcG9ydCBzdXJ2ZXlTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1N1cnZleS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IFF1ZXN0aW9uMSBmcm9tICcuLi9jb21wb25lbnRzL1F1ZXN0aW9uMSc7XHJcbmltcG9ydCBRdWVzdGlvbjIgZnJvbSAnLi4vY29tcG9uZW50cy9RdWVzdGlvbjInO1xyXG5pbXBvcnQgUXVlc3Rpb24zIGZyb20gJy4uL2NvbXBvbmVudHMvUXVlc3Rpb24zJztcclxuaW1wb3J0IFF1ZXN0aW9uNCBmcm9tICcuLi9jb21wb25lbnRzL1F1ZXN0aW9uNCc7XHJcbmltcG9ydCBRdWVzdGlvbjUgZnJvbSAnLi4vY29tcG9uZW50cy9RdWVzdGlvbjUnO1xyXG5pbXBvcnQgUXVlc3Rpb242IGZyb20gJy4uL2NvbXBvbmVudHMvUXVlc3Rpb242JztcclxuXHJcbmNvbnN0IHN1cnZleSA9ICgpID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coc3RhdGUpO1xyXG4gIH0sIFtzdGF0ZV0pO1xyXG5cclxuICBjb25zdCBjb2xsZWN0UTEgPSAoZGF0YXMpID0+IHtcclxuICAgIGlmIChkYXRhcyA9PT0gMSkge1xyXG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgICBxdWVzdGlvbjE6IDEsXHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhcyA9PT0gMikge1xyXG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgICBxdWVzdGlvbjE6IDIsXHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhcyA9PT0gMykge1xyXG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgICBxdWVzdGlvbjE6IDMsXHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhcyA9PT0gNCkge1xyXG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgICBxdWVzdGlvbjE6IDQsXHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjb2xsZWN0UTIgPSAoZGF0YXMpID0+IHtcclxuICAgIGlmIChkYXRhcyA9PT0gMSkge1xyXG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgICBxdWVzdGlvbjI6IDEsXHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhcyA9PT0gMikge1xyXG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgICBxdWVzdGlvbjI6IDIsXHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhcyA9PT0gMykge1xyXG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgICBxdWVzdGlvbjI6IDMsXHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhcyA9PT0gNCkge1xyXG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgICBxdWVzdGlvbjI6IDQsXHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjb2xsZWN0UTMgPSAoZGF0YXMpID0+IHtcclxuICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XHJcbiAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgcXVlc3Rpb24zOiBbLi4uZGF0YXNdLFxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbGxlY3RRNCA9IChkYXRhcykgPT4ge1xyXG4gICAgaWYgKGRhdGFzID09PSAxKSB7XHJcbiAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XHJcbiAgICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICAgIHF1ZXN0aW9uNDogMSxcclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGFzID09PSAyKSB7XHJcbiAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XHJcbiAgICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICAgIHF1ZXN0aW9uNDogMixcclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGFzID09PSAzKSB7XHJcbiAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XHJcbiAgICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICAgIHF1ZXN0aW9uNDogMyxcclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGFzID09PSA0KSB7XHJcbiAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XHJcbiAgICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICAgIHF1ZXN0aW9uNDogNCxcclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGFzID09PSA1KSB7XHJcbiAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XHJcbiAgICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICAgIHF1ZXN0aW9uNDogNSxcclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbGxlY3RRNSA9IChkYXRhcykgPT4ge1xyXG4gICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcclxuICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICBxdWVzdGlvbjU6IGRhdGFzLFxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbGxlY3RRNiA9IChkYXRhcykgPT4ge1xyXG4gICAgaWYgKGRhdGFzID09PSAxKSB7XHJcbiAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XHJcbiAgICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICAgIHF1ZXN0aW9uNjogMSxcclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGFzID09PSAyKSB7XHJcbiAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XHJcbiAgICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICAgIHF1ZXN0aW9uNjogMixcclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBxdWVzdGlvbjYsIHF1ZXN0aW9uNCwgcXVlc3Rpb24zLCBxdWVzdGlvbjIsIHF1ZXN0aW9uMSB9ID0gc3RhdGU7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICAhcXVlc3Rpb24xIHx8XHJcbiAgICAgICFxdWVzdGlvbjIgfHxcclxuICAgICAgIXF1ZXN0aW9uNCB8fFxyXG4gICAgICAhcXVlc3Rpb242IHx8XHJcbiAgICAgIHF1ZXN0aW9uMy5sZW5ndGggPT0gMFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiBzZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXdhaXQgc3VydmV5RGF0YS5wb3N0KFxyXG4gICAgLy8gICAnL3N1cnZleScsXHJcbiAgICAvLyAgIHsgLi4uc3RhdGUgfSxcclxuICAgIC8vICAge1xyXG4gICAgLy8gICAgIGhlYWRlcnM6IHtcclxuICAgIC8vICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgfVxyXG4gICAgLy8gKTtcclxuICAgIHJvdXRlci5wdXNoKCcvY29tcGxldGlvbicpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IGNsYXNzTmFtZT17c3VydmV5U3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxoMT5XaGF0IERvZXMgdGhlIEZ1dHVyZSBIb2xkIGZvciBZb3U/PC9oMT5cclxuICAgICAgPFF1ZXN0aW9uMSBjb2xsZWN0QW5zd2Vycz17Y29sbGVjdFExfSAvPlxyXG4gICAgICA8UXVlc3Rpb24yIGNvbGxlY3RBbnN3ZXJzPXtjb2xsZWN0UTJ9IC8+XHJcbiAgICAgIDxRdWVzdGlvbjMgY29sbGVjdEFuc3dlcnM9e2NvbGxlY3RRM30gLz5cclxuICAgICAgPFF1ZXN0aW9uNCBjb2xsZWN0QW5zd2Vycz17Y29sbGVjdFE0fSAvPlxyXG4gICAgICA8UXVlc3Rpb241IGNvbGxlY3RBbnN3ZXJzPXtjb2xsZWN0UTV9IC8+XHJcbiAgICAgIDxRdWVzdGlvbjYgY29sbGVjdEFuc3dlcnM9e2NvbGxlY3RRNn0gLz5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3VydmV5U3R5bGVzLmVycm9yfSAke1xyXG4gICAgICAgICAgYWN0aXZlID8gc3VydmV5U3R5bGVzLmZsZXggOiBzdXJ2ZXlTdHlsZXMuaGlkZGVuXHJcbiAgICAgICAgfWB9XHJcbiAgICAgID5cclxuICAgICAgICBZb3UgbmVlZCB0byBhbnN3ZXIgYWxsIHF1ZXN0aW9uc1xyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdXJ2ZXk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=