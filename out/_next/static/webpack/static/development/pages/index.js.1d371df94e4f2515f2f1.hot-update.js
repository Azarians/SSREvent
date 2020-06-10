webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/AddShare/AddShare.jsx":
/*!******************************************!*\
  !*** ./components/AddShare/AddShare.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddShare_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddShare.module.css */ "./components/AddShare/AddShare.module.css");
/* harmony import */ var _AddShare_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AddShare_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Vahan\\Desktop\\SSR_TEST_APP - Copy\\components\\AddShare\\AddShare.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //import Facebook from 'react-sharingbuttons/dist/buttons/Facebook'
//import 'react-sharingbuttons/dist/main.css'

var AddShare = function AddShare(props) {
  console.log("addShare");
  console.log(props);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _AddShare_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.addShare,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: _AddShare_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.asheader,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, "Add & Share"), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx("p", {
    className: _AddShare_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.addto,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, "Add to calendar"), __jsx("p", {
    className: _AddShare_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.share,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, "Share this event"), __jsx("button", {
    onClick: function onClick() {
      return window.open("http://shahen.boomtechdev.com/singleEvent.html?id=".concat(props.id), "_blank");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, "TEST"), __jsx("button", {
    onClick: function onClick() {
      return window.open("https://facebook.com/sharer/sharer.php?u=http://shahen.boomtechdev.com/singleEvent.html&title=Title", "_blank");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "Facebook"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx("button", {
    onClick: function onClick() {
      return window.open("http://twitter.com/share?url=http://shahen.boomtechdev.com/singleEvent.html", "_blank");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "twitter"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx("button", {
    onClick: function onClick() {
      return window.open("https://www.reddit.com/submit?url=http://shahen.boomtechdev.com/singleEvent.html", "_blank");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "reddit"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx("img", {
    alt: "copyLink",
    src: "https://cdn0.iconfinder.com/data/icons/feather/96/591256-link-512.png",
    className: _AddShare_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.copyLink,
    onClick: function onClick() {
      navigator.clipboard.writeText('http://shahen.boomtechdev.com/singleEvent.html');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  })));
};

_c = AddShare;
/* harmony default export */ __webpack_exports__["default"] = (AddShare);

var _c;

$RefreshReg$(_c, "AddShare");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/AddShare/AddShare.module.css":
/*!*************************************************!*\
  !*** ./components/AddShare/AddShare.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./AddShare.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/AddShare/AddShare.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./AddShare.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/AddShare/AddShare.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./AddShare.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/AddShare/AddShare.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

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

/***/ }),

/***/ "./components/App.module.css":
/*!***********************************!*\
  !*** ./components/App.module.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./App.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/App.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./App.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/App.module.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./App.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/App.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/Description/Description.jsx":
/*!************************************************!*\
  !*** ./components/Description/Description.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Description_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Description.module.css */ "./components/Description/Description.module.css");
/* harmony import */ var _Description_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Description_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Vahan\\Desktop\\SSR_TEST_APP - Copy\\components\\Description\\Description.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Decription = function Decription(props) {
  return __jsx("div", {
    className: _Description_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.desc,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: _Description_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.descheader,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "Description"), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx("img", {
    src: props.image,
    alt: "description image",
    className: _Description_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.gidimage,
    id: "descimage",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx("p", {
    className: _Description_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.descdesc,
    id: "descdesc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, " ", props.desc));
};

_c = Decription;
/* harmony default export */ __webpack_exports__["default"] = (Decription);

var _c;

$RefreshReg$(_c, "Decription");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Description/Description.module.css":
/*!*******************************************************!*\
  !*** ./components/Description/Description.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Description.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/Description/Description.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Description.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/Description/Description.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Description.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/Description/Description.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/GeneralInfo/GeneralInfo.jsx":
/*!************************************************!*\
  !*** ./components/GeneralInfo/GeneralInfo.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GeneralInfo_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeneralInfo.module.css */ "./components/GeneralInfo/GeneralInfo.module.css");
/* harmony import */ var _GeneralInfo_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_GeneralInfo_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Vahan\\Desktop\\SSR_TEST_APP - Copy\\components\\GeneralInfo\\GeneralInfo.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var GeneralInfo = function GeneralInfo(props) {
  return __jsx("div", {
    className: _GeneralInfo_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.general,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: _GeneralInfo_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.giheader,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "General Info"), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: _GeneralInfo_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.iconEventtitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("p", {
    id: "giname",
    className: _GeneralInfo_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.giname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 51
    }
  }, props.title), __jsx("span", {
    className: _GeneralInfo_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.iconStarttime,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx("p", {
    id: "gistart",
    className: _GeneralInfo_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.giname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 50
    }
  }, props.start), __jsx("span", {
    className: _GeneralInfo_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.iconEndtime,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx("p", {
    id: "giend",
    className: _GeneralInfo_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.giname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 48
    }
  }, props.end), __jsx("span", {
    className: _GeneralInfo_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.iconLocation,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx("p", {
    id: "giplace",
    className: _GeneralInfo_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.giname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 49
    }
  }, props.place));
};

_c = GeneralInfo;
/* harmony default export */ __webpack_exports__["default"] = (GeneralInfo);

var _c;

$RefreshReg$(_c, "GeneralInfo");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/GeneralInfo/GeneralInfo.module.css":
/*!*******************************************************!*\
  !*** ./components/GeneralInfo/GeneralInfo.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./GeneralInfo.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/GeneralInfo/GeneralInfo.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./GeneralInfo.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/GeneralInfo/GeneralInfo.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./GeneralInfo.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/GeneralInfo/GeneralInfo.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/VenueDetail/VenueDetail.jsx":
/*!************************************************!*\
  !*** ./components/VenueDetail/VenueDetail.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VenueDetail_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VenueDetail.module.css */ "./components/VenueDetail/VenueDetail.module.css");
/* harmony import */ var _VenueDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_VenueDetail_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Vahan\\Desktop\\SSR_TEST_APP - Copy\\components\\VenueDetail\\VenueDetail.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var VenueDetail = function VenueDetail(props) {
  return __jsx("div", {
    className: _VenueDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.venue,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: _VenueDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.vdheader,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "Venue Detail"), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx("span", {
    className: _VenueDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.iconOrgnizerName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx("p", {
    id: "vdname",
    className: _VenueDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.vdname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 51
    }
  }, props.name), __jsx("span", {
    className: _VenueDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.iconPhone,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx("p", {
    id: "vdphone",
    className: _VenueDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.vdname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 44
    }
  }, props.phone), __jsx("span", {
    className: _VenueDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.iconEmail5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx("p", {
    id: "vdemail",
    className: _VenueDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.vdname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 45
    }
  }, props.email), __jsx("span", {
    className: _VenueDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.iconWebsite,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx("p", {
    id: "vdwebsite",
    className: _VenueDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.vdname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 46
    }
  }, props.website));

  if (props.venue) {
    return __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }
    });
  }
};

_c = VenueDetail;
/* harmony default export */ __webpack_exports__["default"] = (VenueDetail);

var _c;

$RefreshReg$(_c, "VenueDetail");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/VenueDetail/VenueDetail.module.css":
/*!*******************************************************!*\
  !*** ./components/VenueDetail/VenueDetail.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./VenueDetail.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/VenueDetail/VenueDetail.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./VenueDetail.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/VenueDetail/VenueDetail.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./VenueDetail.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/VenueDetail/VenueDetail.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/fonts/icomoon.eot":
/*!**************************************!*\
  !*** ./components/fonts/icomoon.eot ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/icomoon.7f70456377e4356b2549399422b347a6.eot");

/***/ }),

/***/ "./components/fonts/icomoon.ttf":
/*!**************************************!*\
  !*** ./components/fonts/icomoon.ttf ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/icomoon.d3127d13d4a0d7eb2b78fb4b2efa9d4c.ttf");

/***/ }),

/***/ "./components/fonts/icomoon.woff":
/*!***************************************!*\
  !*** ./components/fonts/icomoon.woff ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/icomoon.1c7532a633fe0835542725c6d66b07b0.woff");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/AddShare/AddShare.module.css":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/AddShare/AddShare.module.css ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".AddShare_asheader__3HTSc{\r\n  margin-bottom: 0px;\r\n  color: black;\r\n  font-size: 19px;\r\n  font-family:sans-serif;\r\n}\r\n\r\n.AddShare_addto__1pTQD, .AddShare_share__wQ3fj{\r\n  margin:0;\r\n  font-size: 18px;\r\n}\r\n\r\n.AddShare_share__wQ3fj{\r\n  float: left;\r\n}\r\n\r\n.AddShare_fb__3hXea{\r\n  margin-left: 20px;\r\n  margin-right: 5px;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  text-decoration: none;\r\n  outline: none\r\n\r\n}\r\n\r\n.AddShare_tw__1JwJh{\r\n   margin-right: 6px;\r\n}\r\n\r\n.AddShare_rd__Jwc8V{\r\n  margin-right: 5px\r\n}\r\n\r\n.AddShare_copyLink__2tu2u{\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  text-decoration: none;\r\n  outline: none;\r\n  height: 30px;\r\n  cursor: pointer;\r\n}\r\n\r\n.AddShare_bt__m_KQA{\r\n  float: right;\r\n  display:inline-block;\r\n\r\n}\r\n", "",{"version":3,"sources":["C:/Users/Vahan/Desktop/SSR_TEST_APP - Copy/components/AddShare/AddShare.module.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,QAAQ;EACR,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,yBAAiB;KAAjB,sBAAiB;MAAjB,qBAAiB;UAAjB,iBAAiB;EACjB,qBAAqB;EACrB;;AAEF;;AAEA;GACG,iBAAiB;AACpB;;AAEA;EACE;AACF;;AAEA;EACE,yBAAiB;KAAjB,sBAAiB;MAAjB,qBAAiB;UAAjB,iBAAiB;EACjB,qBAAqB;EACrB,aAAa;EACb,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,oBAAoB;;AAEtB","file":"AddShare.module.css","sourcesContent":[".asheader{\r\n  margin-bottom: 0px;\r\n  color: black;\r\n  font-size: 19px;\r\n  font-family:sans-serif;\r\n}\r\n\r\n.addto, .share{\r\n  margin:0;\r\n  font-size: 18px;\r\n}\r\n\r\n.share{\r\n  float: left;\r\n}\r\n\r\n.fb{\r\n  margin-left: 20px;\r\n  margin-right: 5px;\r\n  user-select: none;\r\n  text-decoration: none;\r\n  outline: none\r\n\r\n}\r\n\r\n.tw{\r\n   margin-right: 6px;\r\n}\r\n\r\n.rd{\r\n  margin-right: 5px\r\n}\r\n\r\n.copyLink{\r\n  user-select: none;\r\n  text-decoration: none;\r\n  outline: none;\r\n  height: 30px;\r\n  cursor: pointer;\r\n}\r\n\r\n.bt{\r\n  float: right;\r\n  display:inline-block;\r\n\r\n}\r\n"]}]);
// Exports
exports.locals = {
	"asheader": "AddShare_asheader__3HTSc",
	"addto": "AddShare_addto__1pTQD",
	"share": "AddShare_share__wQ3fj",
	"fb": "AddShare_fb__3hXea",
	"tw": "AddShare_tw__1JwJh",
	"rd": "AddShare_rd__Jwc8V",
	"copyLink": "AddShare_copyLink__2tu2u",
	"bt": "AddShare_bt__m_KQA"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/App.module.css":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/App.module.css ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./fonts/icomoon.eot */ "./components/fonts/icomoon.eot");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./fonts/icomoon.ttf */ "./components/fonts/icomoon.ttf");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ./fonts/icomoon.woff */ "./components/fonts/icomoon.woff");
exports = ___CSS_LOADER_API_IMPORT___(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
exports.push([module.i, "@font-face {\r\n  font-family: 'icomoon';\r\n  src:  url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  src:  url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('embedded-opentype'),\r\n  url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype'),\r\n  url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-display: block;\r\n}\r\n\r\n\r\n\r\n.App_App-logo__1Xjlg {\r\n  height: 40vmin;\r\n  pointer-events: none;\r\n}\r\n\r\n\r\n\r\n@media (prefers-reduced-motion: no-preference) {\r\n  .App_App-logo__1Xjlg {\r\n    animation: App_App-logo-spin__xeeg9 infinite 20s linear;\r\n  }\r\n}\r\n\r\n.App_App-header__20dsz {\r\n  background-color: #282c34;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: calc(10px + 2vmin);\r\n  color: white;\r\n}\r\n\r\n.App_App-link__1ZwwQ {\r\n  color: #61dafb;\r\n}\r\n\r\n@keyframes App_App-logo-spin__xeeg9 {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.App_content__oklUs{\r\n    margin-left: 22.2%;\r\n    width: 51%;\r\n    float: left;\r\n}\r\n\r\n.App_goToCalendar__3Dsm5{\r\n  background: #3899EC;\r\n  height: 55px;\r\n  outline: none;\r\n  border:none;\r\n  float: right;\r\n  margin-top:3%;\r\n  color:white;\r\n  font-family: sans-serif;\r\n  font-size: 120%;\r\n  transition: 0.4s;\r\n  min-width: 100px;\r\n  margin-right:10%;\r\n  width: 10%;\r\n\r\n\r\n}\r\n\r\n.App_btn__2z22D:hover{\r\n  transition: 0.4s;\r\n  background: white;\r\n  color: #3899EC;\r\n  cursor:pointer;\r\n}\r\n\r\n/* p{\r\n    color: #636363;\r\n} */\r\n", "",{"version":3,"sources":["C:/Users/Vahan/Desktop/SSR_TEST_APP - Copy/components/App.module.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,6CAA8B;EAC9B;;wDAEwC;EACxC,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;AACrB;;;;AAIA;EACE,cAAc;EACd,oBAAoB;AACtB;;;;AAIA;EACE;IACE,uDAA4C;EAC9C;AACF;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;AACf;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,YAAY;EACZ,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;EAChB,UAAU;;;AAGZ;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,cAAc;EACd,cAAc;AAChB;;AAEA;;GAEG","file":"App.module.css","sourcesContent":["@font-face {\r\n  font-family: 'icomoon';\r\n  src:  url('fonts/icomoon.eot');\r\n  src:  url('fonts/icomoon.eot') format('embedded-opentype'),\r\n  url('fonts/icomoon.ttf') format('truetype'),\r\n  url('fonts/icomoon.woff') format('woff');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-display: block;\r\n}\r\n\r\n\r\n\r\n.App-logo {\r\n  height: 40vmin;\r\n  pointer-events: none;\r\n}\r\n\r\n\r\n\r\n@media (prefers-reduced-motion: no-preference) {\r\n  .App-logo {\r\n    animation: App-logo-spin infinite 20s linear;\r\n  }\r\n}\r\n\r\n.App-header {\r\n  background-color: #282c34;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: calc(10px + 2vmin);\r\n  color: white;\r\n}\r\n\r\n.App-link {\r\n  color: #61dafb;\r\n}\r\n\r\n@keyframes App-logo-spin {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.content{\r\n    margin-left: 22.2%;\r\n    width: 51%;\r\n    float: left;\r\n}\r\n\r\n.goToCalendar{\r\n  background: #3899EC;\r\n  height: 55px;\r\n  outline: none;\r\n  border:none;\r\n  float: right;\r\n  margin-top:3%;\r\n  color:white;\r\n  font-family: sans-serif;\r\n  font-size: 120%;\r\n  transition: 0.4s;\r\n  min-width: 100px;\r\n  margin-right:10%;\r\n  width: 10%;\r\n\r\n\r\n}\r\n\r\n.btn:hover{\r\n  transition: 0.4s;\r\n  background: white;\r\n  color: #3899EC;\r\n  cursor:pointer;\r\n}\r\n\r\n/* p{\r\n    color: #636363;\r\n} */\r\n"]}]);
// Exports
exports.locals = {
	"App-logo": "App_App-logo__1Xjlg",
	"App-logo-spin": "App_App-logo-spin__xeeg9",
	"App-header": "App_App-header__20dsz",
	"App-link": "App_App-link__1ZwwQ",
	"content": "App_content__oklUs",
	"goToCalendar": "App_goToCalendar__3Dsm5",
	"btn": "App_btn__2z22D"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/Description/Description.module.css":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/Description/Description.module.css ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".Description_descheader__1awHA{\r\n  font-size: 19px;\r\n  margin-bottom: 0px;\r\n  color: black;\r\n  font-family:sans-serif;\r\n\r\n}\r\n\r\n.Description_decdesc__KJaI5 hr{\r\n    margin-top: 3px;\r\n\r\n}\r\n\r\n.Description_desc__2k_9r img{\r\n  width: 30%;\r\n  margin-top: 14px\r\n}\r\n", "",{"version":3,"sources":["C:/Users/Vahan/Desktop/SSR_TEST_APP - Copy/components/Description/Description.module.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,sBAAsB;;AAExB;;AAEA;IACI,eAAe;;AAEnB;;AAEA;EACE,UAAU;EACV;AACF","file":"Description.module.css","sourcesContent":[".descheader{\r\n  font-size: 19px;\r\n  margin-bottom: 0px;\r\n  color: black;\r\n  font-family:sans-serif;\r\n\r\n}\r\n\r\n.decdesc hr{\r\n    margin-top: 3px;\r\n\r\n}\r\n\r\n.desc img{\r\n  width: 30%;\r\n  margin-top: 14px\r\n}\r\n"]}]);
// Exports
exports.locals = {
	"descheader": "Description_descheader__1awHA",
	"decdesc": "Description_decdesc__KJaI5",
	"desc": "Description_desc__2k_9r"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/GeneralInfo/GeneralInfo.module.css":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/GeneralInfo/GeneralInfo.module.css ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".GeneralInfo_general__3QU_4{\r\n  margin-top: 17%;\r\n\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.GeneralInfo_general__3QU_4 hr{\r\n  margin-top: 3px;\r\n\r\n}\r\n\r\n.GeneralInfo_giname__g4jxM{\r\n  margin:0;\r\n  margin-left:32px;\r\n  font-size: 18px;\r\n  font-family: sans-serif;\r\n  color: #636363;\r\n  margin-bottom: 4px\r\n}\r\n.GeneralInfo_giheader__HZq46{\r\n  font-size: 19px;\r\n  margin-bottom: 0px;\r\n  color: black;\r\n  font-family:sans-serif;\r\n}\r\n\r\n.GeneralInfo_iconEventtitle__28RuJ:before {\r\nfont-family:'icomoon';\r\n  content: \"\\e909\";\r\n  float: left;\r\n\r\n\r\n}\r\n\r\n.GeneralInfo_iconStarttime__2upx6:before {\r\n  font-family:'icomoon';\r\n  content: \"\\e91b\";\r\n  float: left;\r\n\r\n}\r\n\r\n.GeneralInfo_iconEndtime__109fS:before {\r\n  content: \"\\e908\";\r\n  float: left;\r\n  font-family:'icomoon';\r\n\r\n}\r\n\r\n.GeneralInfo_iconLocation__3t3dn:before {\r\n  content: \"\\e90f\";\r\n  font-family:'icomoon';\r\n  float: left;\r\n\r\n\r\n}\r\n", "",{"version":3,"sources":["C:/Users/Vahan/Desktop/SSR_TEST_APP - Copy/components/GeneralInfo/GeneralInfo.module.css"],"names":[],"mappings":"AAAA;EACE,eAAe;;EAEf,kBAAkB;AACpB;;AAEA;EACE,eAAe;;AAEjB;;AAEA;EACE,QAAQ;EACR,gBAAgB;EAChB,eAAe;EACf,uBAAuB;EACvB,cAAc;EACd;AACF;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,sBAAsB;AACxB;;AAEA;AACA,qBAAqB;EACnB,gBAAgB;EAChB,WAAW;;;AAGb;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,WAAW;;AAEb;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,qBAAqB;;AAEvB;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,WAAW;;;AAGb","file":"GeneralInfo.module.css","sourcesContent":[".general{\r\n  margin-top: 17%;\r\n\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.general hr{\r\n  margin-top: 3px;\r\n\r\n}\r\n\r\n.giname{\r\n  margin:0;\r\n  margin-left:32px;\r\n  font-size: 18px;\r\n  font-family: sans-serif;\r\n  color: #636363;\r\n  margin-bottom: 4px\r\n}\r\n.giheader{\r\n  font-size: 19px;\r\n  margin-bottom: 0px;\r\n  color: black;\r\n  font-family:sans-serif;\r\n}\r\n\r\n.iconEventtitle:before {\r\nfont-family:'icomoon';\r\n  content: \"\\e909\";\r\n  float: left;\r\n\r\n\r\n}\r\n\r\n.iconStarttime:before {\r\n  font-family:'icomoon';\r\n  content: \"\\e91b\";\r\n  float: left;\r\n\r\n}\r\n\r\n.iconEndtime:before {\r\n  content: \"\\e908\";\r\n  float: left;\r\n  font-family:'icomoon';\r\n\r\n}\r\n\r\n.iconLocation:before {\r\n  content: \"\\e90f\";\r\n  font-family:'icomoon';\r\n  float: left;\r\n\r\n\r\n}\r\n"]}]);
// Exports
exports.locals = {
	"general": "GeneralInfo_general__3QU_4",
	"giname": "GeneralInfo_giname__g4jxM",
	"giheader": "GeneralInfo_giheader__HZq46",
	"iconEventtitle": "GeneralInfo_iconEventtitle__28RuJ",
	"iconStarttime": "GeneralInfo_iconStarttime__2upx6",
	"iconEndtime": "GeneralInfo_iconEndtime__109fS",
	"iconLocation": "GeneralInfo_iconLocation__3t3dn"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/VenueDetail/VenueDetail.module.css":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/VenueDetail/VenueDetail.module.css ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".VenueDetail_vdname__2nFqz{\r\n  margin:0;\r\n  margin-left:32px;\r\n  font-size: 18px;\r\nfont-family:sans-serif;\r\n  color: #636363;\r\n}\r\n\r\n.VenueDetail_vdheader__1Zhh_{\r\n  font-size: 19px;\r\n  margin-bottom: 0px;\r\n    color: black;\r\n    font-family:sans-serif;\r\n\r\n}\r\n\r\n.VenueDetail_iconOrgnizerName__DT4fh:before {\r\n  content: \"\\e916\";\r\n  font-family:'icomoon';\r\n    float: left;\r\n}\r\n\r\n.VenueDetail_iconPhone__1CStT:before {\r\n  content: \"\\e91a\";\r\n  font-family:'icomoon';\r\n    float: left;\r\n}\r\n\r\n.VenueDetail_iconEmail5__3dNpx:before {\r\n  content: \"\\e907\";\r\n  font-family:'icomoon';\r\n    float: left;\r\n}\r\n\r\n.VenueDetail_iconWebsite__33GZW:before {\r\n  content: \"\\e900\";\r\n  font-family:'icomoon';\r\n    float: left;\r\n}\r\n", "",{"version":3,"sources":["C:/Users/Vahan/Desktop/SSR_TEST_APP - Copy/components/VenueDetail/VenueDetail.module.css"],"names":[],"mappings":"AAAA;EACE,QAAQ;EACR,gBAAgB;EAChB,eAAe;AACjB,sBAAsB;EACpB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,kBAAkB;IAChB,YAAY;IACZ,sBAAsB;;AAE1B;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;IACnB,WAAW;AACf;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;IACnB,WAAW;AACf;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;IACnB,WAAW;AACf;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;IACnB,WAAW;AACf","file":"VenueDetail.module.css","sourcesContent":[".vdname{\r\n  margin:0;\r\n  margin-left:32px;\r\n  font-size: 18px;\r\nfont-family:sans-serif;\r\n  color: #636363;\r\n}\r\n\r\n.vdheader{\r\n  font-size: 19px;\r\n  margin-bottom: 0px;\r\n    color: black;\r\n    font-family:sans-serif;\r\n\r\n}\r\n\r\n.iconOrgnizerName:before {\r\n  content: \"\\e916\";\r\n  font-family:'icomoon';\r\n    float: left;\r\n}\r\n\r\n.iconPhone:before {\r\n  content: \"\\e91a\";\r\n  font-family:'icomoon';\r\n    float: left;\r\n}\r\n\r\n.iconEmail5:before {\r\n  content: \"\\e907\";\r\n  font-family:'icomoon';\r\n    float: left;\r\n}\r\n\r\n.iconWebsite:before {\r\n  content: \"\\e900\";\r\n  font-family:'icomoon';\r\n    float: left;\r\n}\r\n"]}]);
// Exports
exports.locals = {
	"vdname": "VenueDetail_vdname__2nFqz",
	"vdheader": "VenueDetail_vdheader__1Zhh_",
	"iconOrgnizerName": "VenueDetail_iconOrgnizerName__DT4fh",
	"iconPhone": "VenueDetail_iconPhone__1CStT",
	"iconEmail5": "VenueDetail_iconEmail5__3dNpx",
	"iconWebsite": "VenueDetail_iconWebsite__33GZW"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

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
/* harmony import */ var _components_App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/App.js */ "./components/App.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Vahan\\Desktop\\SSR_TEST_APP - Copy\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Index = function Index(_ref) {
  var data = _ref.data;
  console.log(data);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 3
    }
  }, __jsx("meta", {
    charSet: "UTF-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "description",
    content: data[0].desc,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }), __jsx("meta", {
    property: "og:title",
    content: data[0].title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }), __jsx("meta", {
    property: "og:image",
    content: data[0].image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "twitter:title",
    content: data[0].title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "twitter:description",
    content: data[0].desc,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "twitter:image",
    content: data[0].image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }), __jsx("meta", {
    property: "og:image:width",
    content: "1200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }), __jsx("meta", {
    property: "og:image:height",
    content: "630",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  })), __jsx(_components_App_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    state: props,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FkZFNoYXJlL0FkZFNoYXJlLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FkZFNoYXJlL0FkZFNoYXJlLm1vZHVsZS5jc3M/MDM3NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5tb2R1bGUuY3NzP2RjODYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EZXNjcmlwdGlvbi9EZXNjcmlwdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EZXNjcmlwdGlvbi9EZXNjcmlwdGlvbi5tb2R1bGUuY3NzP2MzNTEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HZW5lcmFsSW5mby9HZW5lcmFsSW5mby5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HZW5lcmFsSW5mby9HZW5lcmFsSW5mby5tb2R1bGUuY3NzP2FlYzYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9WZW51ZURldGFpbC9WZW51ZURldGFpbC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9WZW51ZURldGFpbC9WZW51ZURldGFpbC5tb2R1bGUuY3NzP2Y0ODMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb250cy9pY29tb29uLmVvdCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZvbnRzL2ljb21vb24udHRmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9udHMvaWNvbW9vbi53b2ZmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWRkU2hhcmUvQWRkU2hhcmUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGVzY3JpcHRpb24vRGVzY3JpcHRpb24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dlbmVyYWxJbmZvL0dlbmVyYWxJbmZvLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9WZW51ZURldGFpbC9WZW51ZURldGFpbC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQWRkU2hhcmUiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJzIiwiYWRkU2hhcmUiLCJhc2hlYWRlciIsImFkZHRvIiwic2hhcmUiLCJ3aW5kb3ciLCJvcGVuIiwiaWQiLCJjb3B5TGluayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsIkFwcCIsImdvVG9DYWxlbmRhciIsImNvbnRlbnQiLCJzdGF0ZSIsInRpdGxlIiwic3RhcnQiLCJlbmQiLCJkZXNjIiwiaW1hZ2UiLCJEZWNyaXB0aW9uIiwiZGVzY2hlYWRlciIsImdpZGltYWdlIiwiZGVzY2Rlc2MiLCJHZW5lcmFsSW5mbyIsImdlbmVyYWwiLCJnaWhlYWRlciIsImljb25FdmVudHRpdGxlIiwiZ2luYW1lIiwiaWNvblN0YXJ0dGltZSIsImljb25FbmR0aW1lIiwiaWNvbkxvY2F0aW9uIiwicGxhY2UiLCJWZW51ZURldGFpbCIsInZlbnVlIiwidmRoZWFkZXIiLCJpY29uT3Jnbml6ZXJOYW1lIiwidmRuYW1lIiwibmFtZSIsImljb25QaG9uZSIsInBob25lIiwiaWNvbkVtYWlsNSIsImVtYWlsIiwiaWNvbldlYnNpdGUiLCJ3ZWJzaXRlIiwiSW5kZXgiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTtB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCQSxDQURGO0FBcUJDLENBeEJEOztLQUFNaUQsSzs7QUEwQlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4xZDM3MWRmOTRlNGYyNTE1ZjJmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzIGZyb20gXCIuL0FkZFNoYXJlLm1vZHVsZS5jc3NcIlxyXG4vL2ltcG9ydCBGYWNlYm9vayBmcm9tICdyZWFjdC1zaGFyaW5nYnV0dG9ucy9kaXN0L2J1dHRvbnMvRmFjZWJvb2snXHJcbi8vaW1wb3J0ICdyZWFjdC1zaGFyaW5nYnV0dG9ucy9kaXN0L21haW4uY3NzJ1xyXG5cclxuXHJcblxyXG5jb25zdCBBZGRTaGFyZSA9IChwcm9wcykgPT57XHJcbiAgY29uc29sZS5sb2coXCJhZGRTaGFyZVwiKVxyXG4gIGNvbnNvbGUubG9nKHByb3BzKVxyXG5cclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPD5cclxuXHJcblxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmFkZFNoYXJlfT5cclxuICAgICAgPHAgY2xhc3NOYW1lPXtzLmFzaGVhZGVyfT5BZGQgJiBTaGFyZTwvcD5cclxuICAgICAgPGhyLz5cclxuICAgICAgPHAgY2xhc3NOYW1lPXtzLmFkZHRvfT5BZGQgdG8gY2FsZW5kYXI8L3A+XHJcblxyXG4gICAgICA8cCBjbGFzc05hbWU9e3Muc2hhcmV9PlNoYXJlIHRoaXMgZXZlbnQ8L3A+XHJcblxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKGBodHRwOi8vc2hhaGVuLmJvb210ZWNoZGV2LmNvbS9zaW5nbGVFdmVudC5odG1sP2lkPSR7cHJvcHMuaWR9YCxcIl9ibGFua1wiKX0+VEVTVDwvYnV0dG9uPlxyXG5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbihcImh0dHBzOi8vZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9aHR0cDovL3NoYWhlbi5ib29tdGVjaGRldi5jb20vc2luZ2xlRXZlbnQuaHRtbCZ0aXRsZT1UaXRsZVwiLFwiX2JsYW5rXCIpfT5GYWNlYm9vazwvYnV0dG9uPlxyXG4gICAgICA8YnIvPlxyXG4gICAgICA8YnV0dG9uICBvbkNsaWNrPXsoKSA9PiAgIHdpbmRvdy5vcGVuKFwiaHR0cDovL3R3aXR0ZXIuY29tL3NoYXJlP3VybD1odHRwOi8vc2hhaGVuLmJvb210ZWNoZGV2LmNvbS9zaW5nbGVFdmVudC5odG1sXCIsXCJfYmxhbmtcIil9PnR3aXR0ZXI8L2J1dHRvbj5cclxuICAgICAgPGJyLz5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbihcImh0dHBzOi8vd3d3LnJlZGRpdC5jb20vc3VibWl0P3VybD1odHRwOi8vc2hhaGVuLmJvb210ZWNoZGV2LmNvbS9zaW5nbGVFdmVudC5odG1sXCIsXCJfYmxhbmtcIil9PnJlZGRpdDwvYnV0dG9uPlxyXG4gICAgICA8YnIvPlxyXG5cclxuICAgICAgPGltZyBhbHQ9XCJjb3B5TGlua1wiIHNyYz1cImh0dHBzOi8vY2RuMC5pY29uZmluZGVyLmNvbS9kYXRhL2ljb25zL2ZlYXRoZXIvOTYvNTkxMjU2LWxpbmstNTEyLnBuZ1wiIGNsYXNzTmFtZT17cy5jb3B5TGlua31cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PntcclxuICAgICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoJ2h0dHA6Ly9zaGFoZW4uYm9vbXRlY2hkZXYuY29tL3NpbmdsZUV2ZW50Lmh0bWwnKTtcclxuXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgPC9pbWc+XHJcblxyXG5cclxuXHJcbiAgICA8L2Rpdj5cclxuPC8+XHJcbiAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkU2hhcmVcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vQWRkU2hhcmUubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KS8vIFJlbWVtYmVyOiB0aGlzIGlzIGRldmVsb3BtZW50IG9ubHkgY29kZS5cbi8vXG4vLyBBZnRlciBzdHlsZXMgYXJlIGluamVjdGVkLCB3ZSBuZWVkIHRvIHJlbW92ZSB0aGVcbi8vIDxzdHlsZT4gdGFncyB0aGF0IHNldCBgYm9keSB7IGRpc3BsYXk6IG5vbmU7IH1gLlxuLy9cbi8vIFdlIHVzZSBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBhcyBhIHdheSB0byBkZWZlclxuLy8gdGhpcyBvcGVyYXRpb24gc2luY2UgdGhlcmUgbWF5IGJlIG11bHRpcGxlIHN0eWxlXG4vLyB0YWdzLlxuOyhzZWxmLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8c2V0VGltZW91dCkoZnVuY3Rpb24oKXtmb3IodmFyIHg9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmV4dC1oaWRlLWZvdWNdJyksaT14Lmxlbmd0aDtpLS07KXt4W2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeFtpXSk7fX0pO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vQWRkU2hhcmUubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL0FkZFNoYXJlLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzIGZyb20gJy4vQXBwLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgR2VuZXJhbEluZm8gZnJvbSBcIi4vR2VuZXJhbEluZm8vR2VuZXJhbEluZm8uanN4XCJcclxuaW1wb3J0IERlc2NyaXB0aW9uIGZyb20gXCIuL0Rlc2NyaXB0aW9uL0Rlc2NyaXB0aW9uLmpzeFwiXHJcbmltcG9ydCBWZW51ZURldGFpbCBmcm9tIFwiLi9WZW51ZURldGFpbC9WZW51ZURldGFpbC5qc3hcIlxyXG5pbXBvcnQgQWRkU2hhcmUgZnJvbSBcIi4vQWRkU2hhcmUvQWRkU2hhcmUuanN4XCJcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEFwcCA9IChwcm9wcykgPT4ge1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcblxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3MuQXBwfT5cclxuXHJcbiAgPGJ1dHRvbiBjbGFzc05hbWU9e3MuZ29Ub0NhbGVuZGFyfT5HbyB0byBDYWxlbmRhcjwvYnV0dG9uPlxyXG48ZGl2IGNsYXNzTmFtZT17cy5jb250ZW50fT5cclxuXHJcbiAgICAgIDxHZW5lcmFsSW5mbyB0aXRsZT17cHJvcHMuc3RhdGUudGl0bGV9IHN0YXJ0PXtwcm9wcy5zdGF0ZS5zdGFydH0gZW5kPXtwcm9wcy5zdGF0ZS5lbmR9IHBsYWNlPVwicGxhY2VcIiAvPlxyXG4gICAgICA8RGVzY3JpcHRpb24gZGVzYz17cHJvcHMuc3RhdGUuZGVzY30gaW1hZ2U9e3Byb3BzLnN0YXRlLmltYWdlfS8+XHJcblxyXG48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuPC8+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFxyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi9BcHAubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KS8vIFJlbWVtYmVyOiB0aGlzIGlzIGRldmVsb3BtZW50IG9ubHkgY29kZS5cbi8vXG4vLyBBZnRlciBzdHlsZXMgYXJlIGluamVjdGVkLCB3ZSBuZWVkIHRvIHJlbW92ZSB0aGVcbi8vIDxzdHlsZT4gdGFncyB0aGF0IHNldCBgYm9keSB7IGRpc3BsYXk6IG5vbmU7IH1gLlxuLy9cbi8vIFdlIHVzZSBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBhcyBhIHdheSB0byBkZWZlclxuLy8gdGhpcyBvcGVyYXRpb24gc2luY2UgdGhlcmUgbWF5IGJlIG11bHRpcGxlIHN0eWxlXG4vLyB0YWdzLlxuOyhzZWxmLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8c2V0VGltZW91dCkoZnVuY3Rpb24oKXtmb3IodmFyIHg9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmV4dC1oaWRlLWZvdWNdJyksaT14Lmxlbmd0aDtpLS07KXt4W2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeFtpXSk7fX0pO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vQXBwLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi9BcHAubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHMgZnJvbSBcIi4vRGVzY3JpcHRpb24ubW9kdWxlLmNzc1wiXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IERlY3JpcHRpb24gPSAocHJvcHMpID0+e1xyXG5cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5kZXNjfT5cclxuICAgICAgPHAgY2xhc3NOYW1lPXtzLmRlc2NoZWFkZXJ9PkRlc2NyaXB0aW9uPC9wPlxyXG4gICAgICA8aHIvPlxyXG4gICAgICA8aW1nIHNyYz17cHJvcHMuaW1hZ2V9IGFsdD1cImRlc2NyaXB0aW9uIGltYWdlXCIgY2xhc3NOYW1lPXtzLmdpZGltYWdlfSBpZD1cImRlc2NpbWFnZVwiLz5cclxuICAgICAgPHAgY2xhc3NOYW1lPXtzLmRlc2NkZXNjfSBpZD1cImRlc2NkZXNjXCI+IHtwcm9wcy5kZXNjfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlY3JpcHRpb25cclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vRGVzY3JpcHRpb24ubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KS8vIFJlbWVtYmVyOiB0aGlzIGlzIGRldmVsb3BtZW50IG9ubHkgY29kZS5cbi8vXG4vLyBBZnRlciBzdHlsZXMgYXJlIGluamVjdGVkLCB3ZSBuZWVkIHRvIHJlbW92ZSB0aGVcbi8vIDxzdHlsZT4gdGFncyB0aGF0IHNldCBgYm9keSB7IGRpc3BsYXk6IG5vbmU7IH1gLlxuLy9cbi8vIFdlIHVzZSBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBhcyBhIHdheSB0byBkZWZlclxuLy8gdGhpcyBvcGVyYXRpb24gc2luY2UgdGhlcmUgbWF5IGJlIG11bHRpcGxlIHN0eWxlXG4vLyB0YWdzLlxuOyhzZWxmLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8c2V0VGltZW91dCkoZnVuY3Rpb24oKXtmb3IodmFyIHg9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmV4dC1oaWRlLWZvdWNdJyksaT14Lmxlbmd0aDtpLS07KXt4W2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeFtpXSk7fX0pO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vRGVzY3JpcHRpb24ubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL0Rlc2NyaXB0aW9uLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHMgZnJvbSBcIi4vR2VuZXJhbEluZm8ubW9kdWxlLmNzc1wiXHJcblxyXG5cclxuY29uc3QgR2VuZXJhbEluZm8gPSAocHJvcHMpID0+e1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZ2VuZXJhbH0+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzLmdpaGVhZGVyfT5HZW5lcmFsIEluZm88L3A+XHJcbiAgICAgICAgPGhyLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MuaWNvbkV2ZW50dGl0bGV9Pjwvc3Bhbj48cCBpZD1cImdpbmFtZVwiIGNsYXNzTmFtZT17cy5naW5hbWV9Pntwcm9wcy50aXRsZX08L3A+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLmljb25TdGFydHRpbWV9Pjwvc3Bhbj48cCBpZD1cImdpc3RhcnRcIiBjbGFzc05hbWU9e3MuZ2luYW1lfT57cHJvcHMuc3RhcnR9PC9wPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5pY29uRW5kdGltZX0+PC9zcGFuPjxwIGlkPVwiZ2llbmRcIiBjbGFzc05hbWU9e3MuZ2luYW1lfT57cHJvcHMuZW5kfTwvcD5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MuaWNvbkxvY2F0aW9ufT48L3NwYW4+PHAgaWQ9XCJnaXBsYWNlXCIgY2xhc3NOYW1lPXtzLmdpbmFtZX0+e3Byb3BzLnBsYWNlfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZW5lcmFsSW5mbztcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vR2VuZXJhbEluZm8ubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KS8vIFJlbWVtYmVyOiB0aGlzIGlzIGRldmVsb3BtZW50IG9ubHkgY29kZS5cbi8vXG4vLyBBZnRlciBzdHlsZXMgYXJlIGluamVjdGVkLCB3ZSBuZWVkIHRvIHJlbW92ZSB0aGVcbi8vIDxzdHlsZT4gdGFncyB0aGF0IHNldCBgYm9keSB7IGRpc3BsYXk6IG5vbmU7IH1gLlxuLy9cbi8vIFdlIHVzZSBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBhcyBhIHdheSB0byBkZWZlclxuLy8gdGhpcyBvcGVyYXRpb24gc2luY2UgdGhlcmUgbWF5IGJlIG11bHRpcGxlIHN0eWxlXG4vLyB0YWdzLlxuOyhzZWxmLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8c2V0VGltZW91dCkoZnVuY3Rpb24oKXtmb3IodmFyIHg9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmV4dC1oaWRlLWZvdWNdJyksaT14Lmxlbmd0aDtpLS07KXt4W2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeFtpXSk7fX0pO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vR2VuZXJhbEluZm8ubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL0dlbmVyYWxJbmZvLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzIGZyb20gXCIuL1ZlbnVlRGV0YWlsLm1vZHVsZS5jc3NcIlxyXG5cclxuXHJcblxyXG5jb25zdCBWZW51ZURldGFpbCA9IChwcm9wcykgPT57XHJcblxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy52ZW51ZX0+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17cy52ZGhlYWRlcn0+VmVudWUgRGV0YWlsPC9wPlxyXG4gICAgICA8aHIvPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3MuaWNvbk9yZ25pemVyTmFtZX0+PC9zcGFuPjxwIGlkPVwidmRuYW1lXCIgY2xhc3NOYW1lPXtzLnZkbmFtZX0+e3Byb3BzLm5hbWV9PC9wPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3MuaWNvblBob25lfT48L3NwYW4+PHAgaWQ9XCJ2ZHBob25lXCIgY2xhc3NOYW1lPXtzLnZkbmFtZX0+e3Byb3BzLnBob25lfTwvcD5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLmljb25FbWFpbDV9Pjwvc3Bhbj48cCBpZD1cInZkZW1haWxcIiBjbGFzc05hbWU9e3MudmRuYW1lfT57cHJvcHMuZW1haWx9PC9wPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3MuaWNvbldlYnNpdGV9Pjwvc3Bhbj48cCBpZD1cInZkd2Vic2l0ZVwiIGNsYXNzTmFtZT17cy52ZG5hbWV9Pntwcm9wcy53ZWJzaXRlfTwvcD5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5pZihwcm9wcy52ZW51ZSl7XHJcbiAgcmV0dXJuKFxyXG4gICAgPHNwYW4+PC9zcGFuPlxyXG4gIClcclxuXHJcbn1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmVudWVEZXRhaWxcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vVmVudWVEZXRhaWwubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KS8vIFJlbWVtYmVyOiB0aGlzIGlzIGRldmVsb3BtZW50IG9ubHkgY29kZS5cbi8vXG4vLyBBZnRlciBzdHlsZXMgYXJlIGluamVjdGVkLCB3ZSBuZWVkIHRvIHJlbW92ZSB0aGVcbi8vIDxzdHlsZT4gdGFncyB0aGF0IHNldCBgYm9keSB7IGRpc3BsYXk6IG5vbmU7IH1gLlxuLy9cbi8vIFdlIHVzZSBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBhcyBhIHdheSB0byBkZWZlclxuLy8gdGhpcyBvcGVyYXRpb24gc2luY2UgdGhlcmUgbWF5IGJlIG11bHRpcGxlIHN0eWxlXG4vLyB0YWdzLlxuOyhzZWxmLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8c2V0VGltZW91dCkoZnVuY3Rpb24oKXtmb3IodmFyIHg9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmV4dC1oaWRlLWZvdWNdJyksaT14Lmxlbmd0aDtpLS07KXt4W2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeFtpXSk7fX0pO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vVmVudWVEZXRhaWwubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL1ZlbnVlRGV0YWlsLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9pY29tb29uLjdmNzA0NTYzNzdlNDM1NmIyNTQ5Mzk5NDIyYjM0N2E2LmVvdFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvaWNvbW9vbi5kMzEyN2QxM2Q0YTBkN2ViMmI3OGZiNGIyZWZhOWQ0Yy50dGZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL2ljb21vb24uMWM3NTMyYTYzM2ZlMDgzNTU0MjcyNWM2ZDY2YjA3YjAud29mZlwiOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5BZGRTaGFyZV9hc2hlYWRlcl9fM0hUU2N7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBmb250LXNpemU6IDE5cHg7XFxyXFxuICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uQWRkU2hhcmVfYWRkdG9fXzFwVFFELCAuQWRkU2hhcmVfc2hhcmVfX3dRM2Zqe1xcclxcbiAgbWFyZ2luOjA7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi5BZGRTaGFyZV9zaGFyZV9fd1EzZmp7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLkFkZFNoYXJlX2ZiX18zaFhlYXtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uQWRkU2hhcmVfdHdfXzFKd0poe1xcclxcbiAgIG1hcmdpbi1yaWdodDogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uQWRkU2hhcmVfcmRfX0p3YzhWe1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHhcXHJcXG59XFxyXFxuXFxyXFxuLkFkZFNoYXJlX2NvcHlMaW5rX18ydHUydXtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uQWRkU2hhcmVfYnRfX21fS1FBe1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XFxyXFxuXFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L1VzZXJzL1ZhaGFuL0Rlc2t0b3AvU1NSX1RFU1RfQVBQIC0gQ29weS9jb21wb25lbnRzL0FkZFNoYXJlL0FkZFNoYXJlLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQjs7QUFFRjs7QUFFQTtHQUNHLGlCQUFpQjtBQUNwQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7O0FBRXRCXCIsXCJmaWxlXCI6XCJBZGRTaGFyZS5tb2R1bGUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5hc2hlYWRlcntcXHJcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtc2l6ZTogMTlweDtcXHJcXG4gIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5hZGR0bywgLnNoYXJle1xcclxcbiAgbWFyZ2luOjA7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi5zaGFyZXtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZmJ7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lXFxyXFxuXFxyXFxufVxcclxcblxcclxcbi50d3tcXHJcXG4gICBtYXJnaW4tcmlnaHQ6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJke1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHhcXHJcXG59XFxyXFxuXFxyXFxuLmNvcHlMaW5re1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnR7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcXHJcXG5cXHJcXG59XFxyXFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiYXNoZWFkZXJcIjogXCJBZGRTaGFyZV9hc2hlYWRlcl9fM0hUU2NcIixcblx0XCJhZGR0b1wiOiBcIkFkZFNoYXJlX2FkZHRvX18xcFRRRFwiLFxuXHRcInNoYXJlXCI6IFwiQWRkU2hhcmVfc2hhcmVfX3dRM2ZqXCIsXG5cdFwiZmJcIjogXCJBZGRTaGFyZV9mYl9fM2hYZWFcIixcblx0XCJ0d1wiOiBcIkFkZFNoYXJlX3R3X18xSndKaFwiLFxuXHRcInJkXCI6IFwiQWRkU2hhcmVfcmRfX0p3YzhWXCIsXG5cdFwiY29weUxpbmtcIjogXCJBZGRTaGFyZV9jb3B5TGlua19fMnR1MnVcIixcblx0XCJidFwiOiBcIkFkZFNoYXJlX2J0X19tX0tRQVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuL2ZvbnRzL2ljb21vb24uZW90XCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi4vZm9udHMvaWNvbW9vbi50dGZcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSByZXF1aXJlKFwiLi9mb250cy9pY29tb29uLndvZmZcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnaWNvbW9vbic7XFxyXFxuICBzcmM6ICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgc3JjOiAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxyXFxuICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXHJcXG4gIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC1kaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLkFwcF9BcHAtbG9nb19fMVhqbGcge1xcclxcbiAgaGVpZ2h0OiA0MHZtaW47XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiBuby1wcmVmZXJlbmNlKSB7XFxyXFxuICAuQXBwX0FwcC1sb2dvX18xWGpsZyB7XFxyXFxuICAgIGFuaW1hdGlvbjogQXBwX0FwcC1sb2dvLXNwaW5fX3hlZWc5IGluZmluaXRlIDIwcyBsaW5lYXI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5BcHBfQXBwLWhlYWRlcl9fMjBkc3oge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IGNhbGMoMTBweCArIDJ2bWluKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLkFwcF9BcHAtbGlua19fMVp3d1Ege1xcclxcbiAgY29sb3I6ICM2MWRhZmI7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgQXBwX0FwcC1sb2dvLXNwaW5fX3hlZWc5IHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLkFwcF9jb250ZW50X19va2xVc3tcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIyLjIlO1xcclxcbiAgICB3aWR0aDogNTElO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLkFwcF9nb1RvQ2FsZW5kYXJfXzNEc201e1xcclxcbiAgYmFja2dyb3VuZDogIzM4OTlFQztcXHJcXG4gIGhlaWdodDogNTVweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6bm9uZTtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIG1hcmdpbi10b3A6MyU7XFxyXFxuICBjb2xvcjp3aGl0ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxMjAlO1xcclxcbiAgdHJhbnNpdGlvbjogMC40cztcXHJcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6MTAlO1xcclxcbiAgd2lkdGg6IDEwJTtcXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLkFwcF9idG5fXzJ6MjJEOmhvdmVye1xcclxcbiAgdHJhbnNpdGlvbjogMC40cztcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgY29sb3I6ICMzODk5RUM7XFxyXFxuICBjdXJzb3I6cG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogcHtcXHJcXG4gICAgY29sb3I6ICM2MzYzNjM7XFxyXFxufSAqL1xcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L1VzZXJzL1ZhaGFuL0Rlc2t0b3AvU1NSX1RFU1RfQVBQIC0gQ29weS9jb21wb25lbnRzL0FwcC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLDZDQUE4QjtFQUM5Qjs7d0RBRXdDO0VBQ3hDLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOzs7O0FBSUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0FBQ3RCOzs7O0FBSUE7RUFDRTtJQUNFLHVEQUE0QztFQUM5QztBQUNGOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFVBQVU7OztBQUdaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTs7R0FFR1wiLFwiZmlsZVwiOlwiQXBwLm1vZHVsZS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ2ljb21vb24nO1xcclxcbiAgc3JjOiAgdXJsKCdmb250cy9pY29tb29uLmVvdCcpO1xcclxcbiAgc3JjOiAgdXJsKCdmb250cy9pY29tb29uLmVvdCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXHJcXG4gIHVybCgnZm9udHMvaWNvbW9vbi50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXFxyXFxuICB1cmwoJ2ZvbnRzL2ljb21vb24ud29mZicpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5BcHAtbG9nbyB7XFxyXFxuICBoZWlnaHQ6IDQwdm1pbjtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IG5vLXByZWZlcmVuY2UpIHtcXHJcXG4gIC5BcHAtbG9nbyB7XFxyXFxuICAgIGFuaW1hdGlvbjogQXBwLWxvZ28tc3BpbiBpbmZpbml0ZSAyMHMgbGluZWFyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uQXBwLWhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyYzM0O1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogY2FsYygxMHB4ICsgMnZtaW4pO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uQXBwLWxpbmsge1xcclxcbiAgY29sb3I6ICM2MWRhZmI7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgQXBwLWxvZ28tc3BpbiB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50e1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjIuMiU7XFxyXFxuICAgIHdpZHRoOiA1MSU7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZ29Ub0NhbGVuZGFye1xcclxcbiAgYmFja2dyb3VuZDogIzM4OTlFQztcXHJcXG4gIGhlaWdodDogNTVweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6bm9uZTtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIG1hcmdpbi10b3A6MyU7XFxyXFxuICBjb2xvcjp3aGl0ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxMjAlO1xcclxcbiAgdHJhbnNpdGlvbjogMC40cztcXHJcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6MTAlO1xcclxcbiAgd2lkdGg6IDEwJTtcXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlcntcXHJcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIGNvbG9yOiAjMzg5OUVDO1xcclxcbiAgY3Vyc29yOnBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIHB7XFxyXFxuICAgIGNvbG9yOiAjNjM2MzYzO1xcclxcbn0gKi9cXHJcXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJBcHAtbG9nb1wiOiBcIkFwcF9BcHAtbG9nb19fMVhqbGdcIixcblx0XCJBcHAtbG9nby1zcGluXCI6IFwiQXBwX0FwcC1sb2dvLXNwaW5fX3hlZWc5XCIsXG5cdFwiQXBwLWhlYWRlclwiOiBcIkFwcF9BcHAtaGVhZGVyX18yMGRzelwiLFxuXHRcIkFwcC1saW5rXCI6IFwiQXBwX0FwcC1saW5rX18xWnd3UVwiLFxuXHRcImNvbnRlbnRcIjogXCJBcHBfY29udGVudF9fb2tsVXNcIixcblx0XCJnb1RvQ2FsZW5kYXJcIjogXCJBcHBfZ29Ub0NhbGVuZGFyX18zRHNtNVwiLFxuXHRcImJ0blwiOiBcIkFwcF9idG5fXzJ6MjJEXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuRGVzY3JpcHRpb25fZGVzY2hlYWRlcl9fMWF3SEF7XFxyXFxuICBmb250LXNpemU6IDE5cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uRGVzY3JpcHRpb25fZGVjZGVzY19fS0phSTUgaHJ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDNweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLkRlc2NyaXB0aW9uX2Rlc2NfXzJrXzlyIGltZ3tcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBtYXJnaW4tdG9wOiAxNHB4XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L1VzZXJzL1ZhaGFuL0Rlc2t0b3AvU1NSX1RFU1RfQVBQIC0gQ29weS9jb21wb25lbnRzL0Rlc2NyaXB0aW9uL0Rlc2NyaXB0aW9uLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixzQkFBc0I7O0FBRXhCOztBQUVBO0lBQ0ksZUFBZTs7QUFFbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Y7QUFDRlwiLFwiZmlsZVwiOlwiRGVzY3JpcHRpb24ubW9kdWxlLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZGVzY2hlYWRlcntcXHJcXG4gIGZvbnQtc2l6ZTogMTlweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5kZWNkZXNjIGhye1xcclxcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5kZXNjIGltZ3tcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBtYXJnaW4tdG9wOiAxNHB4XFxyXFxufVxcclxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImRlc2NoZWFkZXJcIjogXCJEZXNjcmlwdGlvbl9kZXNjaGVhZGVyX18xYXdIQVwiLFxuXHRcImRlY2Rlc2NcIjogXCJEZXNjcmlwdGlvbl9kZWNkZXNjX19LSmFJNVwiLFxuXHRcImRlc2NcIjogXCJEZXNjcmlwdGlvbl9kZXNjX18ya185clwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkdlbmVyYWxJbmZvX2dlbmVyYWxfXzNRVV80e1xcclxcbiAgbWFyZ2luLXRvcDogMTclO1xcclxcblxcclxcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uR2VuZXJhbEluZm9fZ2VuZXJhbF9fM1FVXzQgaHJ7XFxyXFxuICBtYXJnaW4tdG9wOiAzcHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5HZW5lcmFsSW5mb19naW5hbWVfX2c0anhNe1xcclxcbiAgbWFyZ2luOjA7XFxyXFxuICBtYXJnaW4tbGVmdDozMnB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogIzYzNjM2MztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDRweFxcclxcbn1cXHJcXG4uR2VuZXJhbEluZm9fZ2loZWFkZXJfX0hacTQ2e1xcclxcbiAgZm9udC1zaXplOiAxOXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLkdlbmVyYWxJbmZvX2ljb25FdmVudHRpdGxlX18yOFJ1SjpiZWZvcmUge1xcclxcbmZvbnQtZmFtaWx5OidpY29tb29uJztcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwOVxcXCI7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLkdlbmVyYWxJbmZvX2ljb25TdGFydHRpbWVfXzJ1cHg2OmJlZm9yZSB7XFxyXFxuICBmb250LWZhbWlseTonaWNvbW9vbic7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXGU5MWJcXFwiO1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5HZW5lcmFsSW5mb19pY29uRW5kdGltZV9fMTA5ZlM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwOFxcXCI7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIGZvbnQtZmFtaWx5OidpY29tb29uJztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLkdlbmVyYWxJbmZvX2ljb25Mb2NhdGlvbl9fM3QzZG46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwZlxcXCI7XFxyXFxuICBmb250LWZhbWlseTonaWNvbW9vbic7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovVXNlcnMvVmFoYW4vRGVza3RvcC9TU1JfVEVTVF9BUFAgLSBDb3B5L2NvbXBvbmVudHMvR2VuZXJhbEluZm8vR2VuZXJhbEluZm8ubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7O0VBRWYsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTs7QUFFakI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsY0FBYztFQUNkO0FBQ0Y7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtBQUNBLHFCQUFxQjtFQUNuQixnQkFBZ0I7RUFDaEIsV0FBVzs7O0FBR2I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFdBQVc7O0FBRWI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHFCQUFxQjs7QUFFdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFdBQVc7OztBQUdiXCIsXCJmaWxlXCI6XCJHZW5lcmFsSW5mby5tb2R1bGUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5nZW5lcmFse1xcclxcbiAgbWFyZ2luLXRvcDogMTclO1xcclxcblxcclxcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2VuZXJhbCBocntcXHJcXG4gIG1hcmdpbi10b3A6IDNweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmdpbmFtZXtcXHJcXG4gIG1hcmdpbjowO1xcclxcbiAgbWFyZ2luLWxlZnQ6MzJweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6ICM2MzYzNjM7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0cHhcXHJcXG59XFxyXFxuLmdpaGVhZGVye1xcclxcbiAgZm9udC1zaXplOiAxOXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmljb25FdmVudHRpdGxlOmJlZm9yZSB7XFxyXFxuZm9udC1mYW1pbHk6J2ljb21vb24nO1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTA5XFxcIjtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uaWNvblN0YXJ0dGltZTpiZWZvcmUge1xcclxcbiAgZm9udC1mYW1pbHk6J2ljb21vb24nO1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTFiXFxcIjtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uaWNvbkVuZHRpbWU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwOFxcXCI7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIGZvbnQtZmFtaWx5OidpY29tb29uJztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmljb25Mb2NhdGlvbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTBmXFxcIjtcXHJcXG4gIGZvbnQtZmFtaWx5OidpY29tb29uJztcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcblxcclxcblxcclxcbn1cXHJcXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJnZW5lcmFsXCI6IFwiR2VuZXJhbEluZm9fZ2VuZXJhbF9fM1FVXzRcIixcblx0XCJnaW5hbWVcIjogXCJHZW5lcmFsSW5mb19naW5hbWVfX2c0anhNXCIsXG5cdFwiZ2loZWFkZXJcIjogXCJHZW5lcmFsSW5mb19naWhlYWRlcl9fSFpxNDZcIixcblx0XCJpY29uRXZlbnR0aXRsZVwiOiBcIkdlbmVyYWxJbmZvX2ljb25FdmVudHRpdGxlX18yOFJ1SlwiLFxuXHRcImljb25TdGFydHRpbWVcIjogXCJHZW5lcmFsSW5mb19pY29uU3RhcnR0aW1lX18ydXB4NlwiLFxuXHRcImljb25FbmR0aW1lXCI6IFwiR2VuZXJhbEluZm9faWNvbkVuZHRpbWVfXzEwOWZTXCIsXG5cdFwiaWNvbkxvY2F0aW9uXCI6IFwiR2VuZXJhbEluZm9faWNvbkxvY2F0aW9uX18zdDNkblwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLlZlbnVlRGV0YWlsX3ZkbmFtZV9fMm5GcXp7XFxyXFxuICBtYXJnaW46MDtcXHJcXG4gIG1hcmdpbi1sZWZ0OjMycHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiAjNjM2MzYzO1xcclxcbn1cXHJcXG5cXHJcXG4uVmVudWVEZXRhaWxfdmRoZWFkZXJfXzFaaGhfe1xcclxcbiAgZm9udC1zaXplOiAxOXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5WZW51ZURldGFpbF9pY29uT3Jnbml6ZXJOYW1lX19EVDRmaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTE2XFxcIjtcXHJcXG4gIGZvbnQtZmFtaWx5OidpY29tb29uJztcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5WZW51ZURldGFpbF9pY29uUGhvbmVfXzFDU3RUOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXGU5MWFcXFwiO1xcclxcbiAgZm9udC1mYW1pbHk6J2ljb21vb24nO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLlZlbnVlRGV0YWlsX2ljb25FbWFpbDVfXzNkTnB4OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXGU5MDdcXFwiO1xcclxcbiAgZm9udC1mYW1pbHk6J2ljb21vb24nO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLlZlbnVlRGV0YWlsX2ljb25XZWJzaXRlX18zM0daVzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTAwXFxcIjtcXHJcXG4gIGZvbnQtZmFtaWx5OidpY29tb29uJztcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L1VzZXJzL1ZhaGFuL0Rlc2t0b3AvU1NSX1RFU1RfQVBQIC0gQ29weS9jb21wb25lbnRzL1ZlbnVlRGV0YWlsL1ZlbnVlRGV0YWlsLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakIsc0JBQXNCO0VBQ3BCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0lBQ2hCLFlBQVk7SUFDWixzQkFBc0I7O0FBRTFCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtJQUNuQixXQUFXO0FBQ2ZcIixcImZpbGVcIjpcIlZlbnVlRGV0YWlsLm1vZHVsZS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnZkbmFtZXtcXHJcXG4gIG1hcmdpbjowO1xcclxcbiAgbWFyZ2luLWxlZnQ6MzJweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG5mb250LWZhbWlseTpzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6ICM2MzYzNjM7XFxyXFxufVxcclxcblxcclxcbi52ZGhlYWRlcntcXHJcXG4gIGZvbnQtc2l6ZTogMTlweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uaWNvbk9yZ25pemVyTmFtZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTE2XFxcIjtcXHJcXG4gIGZvbnQtZmFtaWx5OidpY29tb29uJztcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5pY29uUGhvbmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkxYVxcXCI7XFxyXFxuICBmb250LWZhbWlseTonaWNvbW9vbic7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbkVtYWlsNTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTA3XFxcIjtcXHJcXG4gIGZvbnQtZmFtaWx5OidpY29tb29uJztcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5pY29uV2Vic2l0ZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTAwXFxcIjtcXHJcXG4gIGZvbnQtZmFtaWx5OidpY29tb29uJztcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInZkbmFtZVwiOiBcIlZlbnVlRGV0YWlsX3ZkbmFtZV9fMm5GcXpcIixcblx0XCJ2ZGhlYWRlclwiOiBcIlZlbnVlRGV0YWlsX3ZkaGVhZGVyX18xWmhoX1wiLFxuXHRcImljb25PcmduaXplck5hbWVcIjogXCJWZW51ZURldGFpbF9pY29uT3Jnbml6ZXJOYW1lX19EVDRmaFwiLFxuXHRcImljb25QaG9uZVwiOiBcIlZlbnVlRGV0YWlsX2ljb25QaG9uZV9fMUNTdFRcIixcblx0XCJpY29uRW1haWw1XCI6IFwiVmVudWVEZXRhaWxfaWNvbkVtYWlsNV9fM2ROcHhcIixcblx0XCJpY29uV2Vic2l0ZVwiOiBcIlZlbnVlRGV0YWlsX2ljb25XZWJzaXRlX18zM0daV1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi9jb21wb25lbnRzL0FwcC5qc1wiIFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vc2hhaGVuLmJvb210ZWNoZGV2LmNvbS9BUElDYWxlbmRhci9hcGkvZXZlbnQvMT9jb21wX2lkPWNvbXAtazkycndxdGYmaW5zdGFuY2U9eUE4R044OTJnVnlCXG4gICAgSjBIN2tzcDZ4M1puV21XdXR0UHJnbnN3dmt5UXFlRS5leUpwYm5OMFlXNWpaVWxrSWpvaU56Y3hZemMzTXpNdE5tWXpaaTAwWVdZeExUbGhaRGt0TkdNMU1UVXhOXG4gICAgbUZtTXpjeklpd2lZWEJ3UkdWbVNXUWlPaUprWlRKaU5XVTFZeTAyTXpJNExUUXdORGN0T1RGak1DMWlPREppTldOa04ySTJNelVpTENKemFXZHVSR0YwWlNJNklqSXdNakF0TURNdE1qQlVNVGc2TURRNk1UQXVNRGczV2lJc0ltUmxiXG4gICAgVzlOYjJSbElqcG1ZV3h6WlN3aVlXbGtJam9pWTJFeU1USTROemd0WTJKaE5pMDBZekE1TFRsak1EWXROVFptWkdFeFltVmlNamc0SWl3aWMybDBaVTkzYm1WeVNXUWlPaUpqWkRRNE5tRTBOeTB5T0RBNExUUXhZbVV0WWpBME5TMHhNR0kyTURkaFpURmlaVFFpZlFgKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhLFxuICAgIH0sXG4gIH1cbn1cblxuY29uc3QgSW5kZXggPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc29sZS5sb2coZGF0YSlcblxucmV0dXJuKFxuICA8PlxuICA8SGVhZD5cbiAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxuICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGF0YVswXS5kZXNjfS8+XG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIi8+XG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e2RhdGFbMF0udGl0bGV9Lz5cbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17ZGF0YVswXS5pbWFnZX0vPlxuICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17ZGF0YVswXS50aXRsZX0vPlxuICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGF0YVswXS5kZXNjfS8+XG4gICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXtkYXRhWzBdLmltYWdlfS8+XG4gICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIvPlxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PVwiMTIwMFwiIC8+XG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpoZWlnaHRcIiBjb250ZW50PVwiNjMwXCIgLz5cbiAgPC9IZWFkPlxuXG4gIDxBcHAgc3RhdGU9e3Byb3BzfSAvPlxuXG48Lz5cbilcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdLCJzb3VyY2VSb290IjoiIn0=