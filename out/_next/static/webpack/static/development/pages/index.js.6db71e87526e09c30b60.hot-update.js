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
var _s = $RefreshSig$(),
    _this = undefined,
    _jsxFileName = "C:\\Users\\Vahan\\Desktop\\SSR_TEST_APP - Copy\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var id;
var url;

var Id = function Id() {
  _s();

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    var id_string = window.location.href;
    id = new URL(id_string);
    id = id.searchParams.get("id");
  }, []);
  return null;
};

_s(Id, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Id;

var Index = function Index(_ref) {
  var data = _ref.data;
  console.log(data);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 3
    }
  }, __jsx("meta", {
    charSet: "UTF-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "description",
    content: data[0].desc,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }), __jsx("meta", {
    property: "og:title",
    content: data[0].title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }), __jsx("meta", {
    property: "og:image",
    content: data[0].image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "twitter:title",
    content: data[0].title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "twitter:description",
    content: data[0].desc,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "twitter:image",
    content: data[0].image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }), __jsx("meta", {
    property: "og:image:width",
    content: "1200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }), __jsx("meta", {
    property: "og:image:height",
    content: "630",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  })), __jsx(Id, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 1
    }
  }), __jsx(_components_App_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    state: data[0],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 3
    }
  }));
};

_c2 = Index;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c, _c2;

$RefreshReg$(_c, "Id");
$RefreshReg$(_c2, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpZCIsInVybCIsIklkIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJpZF9zdHJpbmciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJVUkwiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJJbmRleCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGVzYyIsInRpdGxlIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxFQUFKO0FBQ0EsSUFBSUMsR0FBSjs7QUFFQSxJQUFNQyxFQUFFLEdBQUcsU0FBTEEsRUFBSyxHQUFLO0FBQUE7O0FBQ1pDLDhDQUFLLENBQUNDLFNBQU4sQ0FBZ0IsWUFBTTtBQUVwQixRQUFJQyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEM7QUFDQVIsTUFBRSxHQUFHLElBQUlTLEdBQUosQ0FBUUosU0FBUixDQUFMO0FBQ0FMLE1BQUUsR0FBR0EsRUFBRSxDQUFDVSxZQUFILENBQWdCQyxHQUFoQixDQUFvQixJQUFwQixDQUFMO0FBRUwsR0FORyxFQU1ELEVBTkM7QUFPSixTQUFPLElBQVA7QUFDQyxDQVREOztHQUFNVCxFOztLQUFBQSxFOztBQTZCTixJQUFNVSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzFCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUdGLFNBQ0UsbUVBQ0EsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxXQUFPLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFdBQU8sRUFBQyxxQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUF5QixXQUFPLEVBQUVBLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUcsSUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBTSxZQUFRLEVBQUMsU0FBZjtBQUF5QixXQUFPLEVBQUMsU0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0U7QUFBTSxZQUFRLEVBQUMsVUFBZjtBQUEwQixXQUFPLEVBQUVILElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUksS0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUU7QUFBTSxZQUFRLEVBQUMsVUFBZjtBQUEwQixXQUFPLEVBQUVKLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUssS0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBT0U7QUFBTSxRQUFJLEVBQUMsZUFBWDtBQUEyQixXQUFPLEVBQUVMLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUksS0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBUUU7QUFBTSxRQUFJLEVBQUMscUJBQVg7QUFBaUMsV0FBTyxFQUFFSixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFHLElBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFO0FBQU0sUUFBSSxFQUFDLGVBQVg7QUFBMkIsV0FBTyxFQUFFSCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFLLEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQVVFO0FBQU0sUUFBSSxFQUFDLGNBQVg7QUFBMEIsV0FBTyxFQUFDLHFCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsRUFXRTtBQUFNLFlBQVEsRUFBQyxnQkFBZjtBQUFnQyxXQUFPLEVBQUMsTUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBWUU7QUFBTSxZQUFRLEVBQUMsaUJBQWY7QUFBaUMsV0FBTyxFQUFDLEtBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixDQURBLEVBZUYsTUFBQyxFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmRSxFQWdCQSxNQUFDLDBEQUFEO0FBQUssU0FBSyxFQUFFTCxJQUFJLENBQUMsQ0FBRCxDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJBLENBREY7QUFxQkMsQ0F6QkQ7O01BQU1ELEs7O0FBMkJTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNmRiNzFlODc1MjZlMDljMzBiNjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyLCB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi9jb21wb25lbnRzL0FwcC5qc1wiXG5cbmxldCBpZDtcbmxldCB1cmw7XG5cbmNvbnN0IElkID0gKCkgPT57XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIFxuICAgICAgbGV0IGlkX3N0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgaWQgPSBuZXcgVVJMKGlkX3N0cmluZyk7XG4gICAgICBpZCA9IGlkLnNlYXJjaFBhcmFtcy5nZXQoXCJpZFwiKTtcblxufSwgW10pO1xucmV0dXJuIG51bGxcbn1cblxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcblxuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vc2hhaGVuLmJvb210ZWNoZGV2LmNvbS9BUElDYWxlbmRhci9hcGkvZXZlbnQvMT9jb21wX2lkPWNvbXAtazkycndxdGYmaW5zdGFuY2U9eUE4R044OTJnVnlCXG4gICAgSjBIN2tzcDZ4M1puV21XdXR0UHJnbnN3dmt5UXFlRS5leUpwYm5OMFlXNWpaVWxrSWpvaU56Y3hZemMzTXpNdE5tWXpaaTAwWVdZeExUbGhaRGt0TkdNMU1UVXhOXG4gICAgbUZtTXpjeklpd2lZWEJ3UkdWbVNXUWlPaUprWlRKaU5XVTFZeTAyTXpJNExUUXdORGN0T1RGak1DMWlPREppTldOa04ySTJNelVpTENKemFXZHVSR0YwWlNJNklqSXdNakF0TURNdE1qQlVNVGc2TURRNk1UQXVNRGczV2lJc0ltUmxiXG4gICAgVzlOYjJSbElqcG1ZV3h6WlN3aVlXbGtJam9pWTJFeU1USTROemd0WTJKaE5pMDBZekE1TFRsak1EWXROVFptWkdFeFltVmlNamc0SWl3aWMybDBaVTkzYm1WeVNXUWlPaUpqWkRRNE5tRTBOeTB5T0RBNExUUXhZbVV0WWpBME5TMHhNR0kyTURkaFpURmlaVFFpZlFgKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICBkYXRhWzBdLmltYWdlID0gXCJodHRwczovL3d3dy53b3JsZGF0bGFzLmNvbS9yL3cxMjAwLWg3MDEtYzEyMDB4NzAxL3VwbG9hZC81Mi9lNS9kYS9zaHV0dGVyc3RvY2stNDIyNTE2MzI2LmpwZ1wiXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGRhdGEsXG4gICAgfSxcbiAgfVxufVxuXG5jb25zdCBJbmRleCA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhkYXRhKVxuXG5cbnJldHVybihcbiAgPD5cbiAgPEhlYWQ+XG4gICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2RhdGFbMF0uZGVzY30vPlxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIvPlxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtkYXRhWzBdLnRpdGxlfS8+XG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2RhdGFbMF0uaW1hZ2V9Lz5cbiAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e2RhdGFbMF0udGl0bGV9Lz5cbiAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2RhdGFbMF0uZGVzY30vPlxuICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17ZGF0YVswXS5pbWFnZX0vPlxuICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLz5cbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOndpZHRoXCIgY29udGVudD1cIjEyMDBcIiAvPlxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjYzMFwiIC8+XG4gIDwvSGVhZD5cbjxJZC8+XG4gIDxBcHAgc3RhdGU9e2RhdGFbMF19IC8+XG5cbjwvPlxuKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl0sInNvdXJjZVJvb3QiOiIifQ==