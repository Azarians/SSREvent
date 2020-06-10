webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.module.css */ "./components/App.module.css");
/* harmony import */ var _App_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GeneralInfo_GeneralInfo_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GeneralInfo/GeneralInfo.jsx */ "./components/GeneralInfo/GeneralInfo.jsx");
/* harmony import */ var _Description_Description_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Description/Description.jsx */ "./components/Description/Description.jsx");
/* harmony import */ var _VenueDetail_VenueDetail_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VenueDetail/VenueDetail.jsx */ "./components/VenueDetail/VenueDetail.jsx");
/* harmony import */ var _AddShare_AddShare_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddShare/AddShare.jsx */ "./components/AddShare/AddShare.jsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Vahan\\Desktop\\SSR_TEST_APP - Copy\\components\\App.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var App = function App(props) {
  console.log(props.id);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _App_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.App,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: _App_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.goToCalendar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }
  }, "Go to Calendar"), __jsx("div", {
    className: _App_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 1
    }
  }, __jsx(_GeneralInfo_GeneralInfo_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: props.state.title,
    start: props.state.start,
    end: props.state.end,
    place: "place",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx(_Description_Description_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    desc: props.state.desc,
    image: props.state.image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx(_VenueDetail_VenueDetail_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: props.state.venue.name,
    phone: props.state.venue.phone,
    email: props.state.venue.email,
    website: props.state.venue.website,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx(_VenueDetail_VenueDetail_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: props.state.venue.name,
    phone: props.state.venue.phone,
    email: props.state.venue.email,
    website: props.state.venue.website,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }))));
};

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInMiLCJnb1RvQ2FsZW5kYXIiLCJjb250ZW50Iiwic3RhdGUiLCJ0aXRsZSIsInN0YXJ0IiwiZW5kIiwiZGVzYyIsImltYWdlIiwidmVudWUiLCJuYW1lIiwicGhvbmUiLCJlbWFpbCIsIndlYnNpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUtBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEtBQUQsRUFBVztBQUV2QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0csRUFBbEI7QUFDRSxTQUNFLG1FQUdFO0FBQUssYUFBUyxFQUFFQyxzREFBQyxDQUFDTCxHQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUo7QUFBUSxhQUFTLEVBQUVLLHNEQUFDLENBQUNDLFlBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkksRUFHTjtBQUFLLGFBQVMsRUFBRUQsc0RBQUMsQ0FBQ0UsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVNLE1BQUMsb0VBQUQ7QUFBYSxTQUFLLEVBQUVOLEtBQUssQ0FBQ08sS0FBTixDQUFZQyxLQUFoQztBQUF1QyxTQUFLLEVBQUVSLEtBQUssQ0FBQ08sS0FBTixDQUFZRSxLQUExRDtBQUFpRSxPQUFHLEVBQUVULEtBQUssQ0FBQ08sS0FBTixDQUFZRyxHQUFsRjtBQUF1RixTQUFLLEVBQUMsT0FBN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZOLEVBR00sTUFBQyxvRUFBRDtBQUFhLFFBQUksRUFBRVYsS0FBSyxDQUFDTyxLQUFOLENBQVlJLElBQS9CO0FBQXFDLFNBQUssRUFBRVgsS0FBSyxDQUFDTyxLQUFOLENBQVlLLEtBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFITixFQUlNLE1BQUMsb0VBQUQ7QUFBYSxRQUFJLEVBQUVaLEtBQUssQ0FBQ08sS0FBTixDQUFZTSxLQUFaLENBQWtCQyxJQUFyQztBQUEyQyxTQUFLLEVBQUVkLEtBQUssQ0FBQ08sS0FBTixDQUFZTSxLQUFaLENBQWtCRSxLQUFwRTtBQUEyRSxTQUFLLEVBQUVmLEtBQUssQ0FBQ08sS0FBTixDQUFZTSxLQUFaLENBQWtCRyxLQUFwRztBQUEyRyxXQUFPLEVBQUVoQixLQUFLLENBQUNPLEtBQU4sQ0FBWU0sS0FBWixDQUFrQkksT0FBdEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpOLEVBS00sTUFBQyxvRUFBRDtBQUFhLFFBQUksRUFBRWpCLEtBQUssQ0FBQ08sS0FBTixDQUFZTSxLQUFaLENBQWtCQyxJQUFyQztBQUEyQyxTQUFLLEVBQUVkLEtBQUssQ0FBQ08sS0FBTixDQUFZTSxLQUFaLENBQWtCRSxLQUFwRTtBQUEyRSxTQUFLLEVBQUVmLEtBQUssQ0FBQ08sS0FBTixDQUFZTSxLQUFaLENBQWtCRyxLQUFwRztBQUEyRyxXQUFPLEVBQUVoQixLQUFLLENBQUNPLEtBQU4sQ0FBWU0sS0FBWixDQUFrQkksT0FBdEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxOLENBSE0sQ0FIRixDQURGO0FBbUJELENBdEJEOztLQUFNbEIsRztBQTBCU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjM1NjdhNmYzODQ2NTY3NmI4MzA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHMgZnJvbSAnLi9BcHAubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBHZW5lcmFsSW5mbyBmcm9tIFwiLi9HZW5lcmFsSW5mby9HZW5lcmFsSW5mby5qc3hcIlxyXG5pbXBvcnQgRGVzY3JpcHRpb24gZnJvbSBcIi4vRGVzY3JpcHRpb24vRGVzY3JpcHRpb24uanN4XCJcclxuaW1wb3J0IFZlbnVlRGV0YWlsIGZyb20gXCIuL1ZlbnVlRGV0YWlsL1ZlbnVlRGV0YWlsLmpzeFwiXHJcbmltcG9ydCBBZGRTaGFyZSBmcm9tIFwiLi9BZGRTaGFyZS9BZGRTaGFyZS5qc3hcIlxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgQXBwID0gKHByb3BzKSA9PiB7XHJcblxyXG5jb25zb2xlLmxvZyhwcm9wcy5pZClcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuXHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5BcHB9PlxyXG5cclxuICA8YnV0dG9uIGNsYXNzTmFtZT17cy5nb1RvQ2FsZW5kYXJ9PkdvIHRvIENhbGVuZGFyPC9idXR0b24+XHJcbjxkaXYgY2xhc3NOYW1lPXtzLmNvbnRlbnR9PlxyXG5cclxuICAgICAgPEdlbmVyYWxJbmZvIHRpdGxlPXtwcm9wcy5zdGF0ZS50aXRsZX0gc3RhcnQ9e3Byb3BzLnN0YXRlLnN0YXJ0fSBlbmQ9e3Byb3BzLnN0YXRlLmVuZH0gcGxhY2U9XCJwbGFjZVwiIC8+XHJcbiAgICAgIDxEZXNjcmlwdGlvbiBkZXNjPXtwcm9wcy5zdGF0ZS5kZXNjfSBpbWFnZT17cHJvcHMuc3RhdGUuaW1hZ2V9Lz5cclxuICAgICAgPFZlbnVlRGV0YWlsIG5hbWU9e3Byb3BzLnN0YXRlLnZlbnVlLm5hbWV9IHBob25lPXtwcm9wcy5zdGF0ZS52ZW51ZS5waG9uZX0gZW1haWw9e3Byb3BzLnN0YXRlLnZlbnVlLmVtYWlsfSB3ZWJzaXRlPXtwcm9wcy5zdGF0ZS52ZW51ZS53ZWJzaXRlfS8+XHJcbiAgICAgIDxWZW51ZURldGFpbCBuYW1lPXtwcm9wcy5zdGF0ZS52ZW51ZS5uYW1lfSBwaG9uZT17cHJvcHMuc3RhdGUudmVudWUucGhvbmV9IGVtYWlsPXtwcm9wcy5zdGF0ZS52ZW51ZS5lbWFpbH0gd2Vic2l0ZT17cHJvcHMuc3RhdGUudmVudWUud2Vic2l0ZX0vPlxyXG5cclxuPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbjwvPlxyXG4gIClcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==