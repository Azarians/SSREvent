webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_App_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/App.js */ "./components/App.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Vahan\\Desktop\\SSR_TEST_APP - Copy\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




id = next_router__WEBPACK_IMPORTED_MODULE_2___default.a.query;
console.log(id);
var id;

var Index = function Index(_ref) {
  var data = _ref.data;
  console.log(data);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 3
    }
  }, __jsx("meta", {
    charSet: "UTF-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "description",
    content: data[0].desc,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }), __jsx("meta", {
    property: "og:title",
    content: data[0].title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }), __jsx("meta", {
    property: "og:image",
    content: data[0].image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "twitter:title",
    content: data[0].title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "twitter:description",
    content: data[0].desc,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "twitter:image",
    content: data[0].image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }), __jsx("meta", {
    property: "og:image:width",
    content: "1200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }), __jsx("meta", {
    property: "og:image:height",
    content: "630",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  })), __jsx(_components_App_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    state: data[0],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 3
    }
  }));
};

_c = Index;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpZCIsInJvdXRlciIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsIkluZGV4IiwiZGF0YSIsImRlc2MiLCJ0aXRsZSIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLEdBQUdDLGtEQUFNLENBQUNDLEtBQVo7QUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlKLEVBQVo7QUFFQSxJQUFJQSxFQUFKOztBQWtCQSxJQUFNSyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzFCSCxTQUFPLENBQUNDLEdBQVIsQ0FBWUUsSUFBWjtBQUtGLFNBQ0UsbUVBQ0EsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxXQUFPLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFdBQU8sRUFBQyxxQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUF5QixXQUFPLEVBQUVBLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUMsSUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBTSxZQUFRLEVBQUMsU0FBZjtBQUF5QixXQUFPLEVBQUMsU0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0U7QUFBTSxZQUFRLEVBQUMsVUFBZjtBQUEwQixXQUFPLEVBQUVELElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUUsS0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUU7QUFBTSxZQUFRLEVBQUMsVUFBZjtBQUEwQixXQUFPLEVBQUVGLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUcsS0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBT0U7QUFBTSxRQUFJLEVBQUMsZUFBWDtBQUEyQixXQUFPLEVBQUVILElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUUsS0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBUUU7QUFBTSxRQUFJLEVBQUMscUJBQVg7QUFBaUMsV0FBTyxFQUFFRixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFDLElBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFO0FBQU0sUUFBSSxFQUFDLGVBQVg7QUFBMkIsV0FBTyxFQUFFRCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFHLEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQVVFO0FBQU0sUUFBSSxFQUFDLGNBQVg7QUFBMEIsV0FBTyxFQUFDLHFCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsRUFXRTtBQUFNLFlBQVEsRUFBQyxnQkFBZjtBQUFnQyxXQUFPLEVBQUMsTUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBWUU7QUFBTSxZQUFRLEVBQUMsaUJBQWY7QUFBaUMsV0FBTyxFQUFDLEtBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixDQURBLEVBZ0JBLE1BQUMsMERBQUQ7QUFBSyxTQUFLLEVBQUVILElBQUksQ0FBQyxDQUFELENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkEsQ0FERjtBQXFCQyxDQTNCRDs7S0FBTUQsSzs7QUE2QlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5jNTg4ZjAxOTJmMjIyYjU3M2U3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwLmpzXCJcbmltcG9ydCByb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmlkID0gcm91dGVyLnF1ZXJ5XG5jb25zb2xlLmxvZyhpZClcblxubGV0IGlkO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG5cblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL3NoYWhlbi5ib29tdGVjaGRldi5jb20vQVBJQ2FsZW5kYXIvYXBpL2V2ZW50LzE/Y29tcF9pZD1jb21wLWs5MnJ3cXRmJmluc3RhbmNlPXlBOEdOODkyZ1Z5QlxuICAgIEowSDdrc3A2eDNabldtV3V0dFByZ25zd3ZreVFxZUUuZXlKcGJuTjBZVzVqWlVsa0lqb2lOemN4WXpjM016TXRObVl6WmkwMFlXWXhMVGxoWkRrdE5HTTFNVFV4TlxuICAgIG1GbU16Y3pJaXdpWVhCd1JHVm1TV1FpT2lKa1pUSmlOV1UxWXkwMk16STRMVFF3TkRjdE9URmpNQzFpT0RKaU5XTmtOMkkyTXpVaUxDSnphV2R1UkdGMFpTSTZJakl3TWpBdE1ETXRNakJVTVRnNk1EUTZNVEF1TURnM1dpSXNJbVJsYlxuICAgIFc5TmIyUmxJanBtWVd4elpTd2lZV2xrSWpvaVkyRXlNVEk0TnpndFkySmhOaTAwWXpBNUxUbGpNRFl0TlRabVpHRXhZbVZpTWpnNElpd2ljMmwwWlU5M2JtVnlTV1FpT2lKalpEUTRObUUwTnkweU9EQTRMVFF4WW1VdFlqQTBOUzB4TUdJMk1EZGhaVEZpWlRRaWZRYClcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgZGF0YVswXS5pbWFnZSA9IFwiaHR0cHM6Ly93d3cud29ybGRhdGxhcy5jb20vci93MTIwMC1oNzAxLWMxMjAweDcwMS91cGxvYWQvNTIvZTUvZGEvc2h1dHRlcnN0b2NrLTQyMjUxNjMyNi5qcGdcIlxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhLFxuICAgIH0sXG4gIH1cbn1cblxuY29uc3QgSW5kZXggPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc29sZS5sb2coZGF0YSlcblxuXG5cblxucmV0dXJuKFxuICA8PlxuICA8SGVhZD5cbiAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxuICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGF0YVswXS5kZXNjfS8+XG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIi8+XG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e2RhdGFbMF0udGl0bGV9Lz5cbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17ZGF0YVswXS5pbWFnZX0vPlxuICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17ZGF0YVswXS50aXRsZX0vPlxuICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGF0YVswXS5kZXNjfS8+XG4gICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXtkYXRhWzBdLmltYWdlfS8+XG4gICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIvPlxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PVwiMTIwMFwiIC8+XG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpoZWlnaHRcIiBjb250ZW50PVwiNjMwXCIgLz5cbiAgPC9IZWFkPlxuXG4gIDxBcHAgc3RhdGU9e2RhdGFbMF19IC8+XG5cbjwvPlxuKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl0sInNvdXJjZVJvb3QiOiIifQ==