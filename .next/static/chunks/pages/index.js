/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Frubenmarcus%2Fhackaton%2Fpages%2Findex.tsx&page=%2F!":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Frubenmarcus%2Fhackaton%2Fpages%2Findex.tsx&page=%2F! ***!
  \*******************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.tsx */ \"./pages/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRnJ1YmVubWFyY3VzJTJGaGFja2F0b24lMkZwYWdlcyUyRmluZGV4LnRzeCZwYWdlPSUyRiEuanMiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyw0Q0FBbUI7QUFDMUM7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvP2I1N2IiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Frubenmarcus%2Fhackaton%2Fpages%2Findex.tsx&page=%2F!\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Minter(param) {\n    var media = param.media, posts = param.posts;\n    console.log(\"media\", media);\n    console.log(\"posts\", posts);\n    var tweets = posts.filter(function(post) {\n        var ref, ref1;\n        return ((ref = post.attachments) === null || ref === void 0 ? void 0 : (ref1 = ref.media_keys) === null || ref1 === void 0 ? void 0 : ref1.length) > 0;\n    });\n    var screenshotTweets = posts.filter(function(item) {\n        return !tweets.some(function(tweet) {\n            return tweet.id === item.id;\n        });\n    });\n    console.log(tweets, \"tweets\");\n    console.log(screenshotTweets, \"screenshot Tweets\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-1 flex-col min-h-screen text-gray-500\"\n    }, void 0, false, {\n        fileName: \"/Users/rubenmarcus/hackaton/pages/index.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_c = Minter;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Minter);\nvar _c;\n$RefreshReg$(_c, \"Minter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFNQSxTQUFTQSxNQUFNLENBQUMsS0FBa0IsRUFBZTtRQUFoQ0MsS0FBSyxHQUFOLEtBQWtCLENBQWpCQSxLQUFLLEVBQUVDLEtBQUssR0FBYixLQUFrQixDQUFWQSxLQUFLO0lBRTNCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLEVBQUVILEtBQUssQ0FBQztJQUMzQkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxFQUFFRixLQUFLLENBQUM7SUFFM0IsSUFBTUcsTUFBTSxHQUFHSCxLQUFLLENBQUNJLE1BQU0sQ0FBQyxTQUFDQyxJQUFRLEVBQUs7WUFDakNBLEdBQWdCO1FBQXZCLE9BQU9BLENBQUFBLENBQUFBLEdBQWdCLEdBQWhCQSxJQUFJLENBQUNDLFdBQVcsY0FBaEJELEdBQWdCLFdBQVksR0FBNUJBLEtBQUFBLENBQTRCLEdBQTVCQSxRQUFBQSxHQUFnQixDQUFFRSxVQUFVLGdDQUE1QkYsS0FBQUEsQ0FBNEIsUUFBRUcsTUFBTSxDQUFSLEdBQVcsQ0FBQyxDQUFDO0tBQ2hELENBQUM7SUFHSCxJQUFNQyxnQkFBZ0IsR0FDckJULEtBQUssQ0FBQ0ksTUFBTSxDQUFDLFNBQUNNLElBQVE7ZUFBSyxDQUFDUCxNQUFNLENBQUNRLElBQUksQ0FBQyxTQUFDQyxLQUFTO21CQUFLQSxLQUFLLENBQUNDLEVBQUUsS0FBS0gsSUFBSSxDQUFDRyxFQUFFO1NBQUEsQ0FBQztLQUFBLENBQUM7SUFLaEZaLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxNQUFNLEVBQUcsUUFBUSxDQUFDO0lBQzlCRixPQUFPLENBQUNDLEdBQUcsQ0FBQ08sZ0JBQWdCLEVBQUcsbUJBQW1CLENBQUM7SUFHakQscUJBQ0UsOERBQUNLLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGlEQUFpRDs7Ozs7WUFRMUQsQ0FDTjtDQUNIO0FBL0JRakIsS0FBQUEsTUFBTTs7QUFrRGYsK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0IH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb21wb25lbnRzL01haW4nO1xuaW1wb3J0IHsgZmV0Y2hUd2l0dGVyUG9zdHMgfSBmcm9tICcuLi9zZXJ2aWNlcy9mZXRjaFR3aXR0ZXJQb3N0cyc7XG5cbmZ1bmN0aW9uIE1pbnRlcih7bWVkaWEsIHBvc3RzfTphbnkpOiBKU1guRWxlbWVudCB7XG5cbiAgY29uc29sZS5sb2coJ21lZGlhJywgbWVkaWEpXG4gIGNvbnNvbGUubG9nKCdwb3N0cycsIHBvc3RzKVxuXG4gIGNvbnN0IHR3ZWV0cyA9IHBvc3RzLmZpbHRlcigocG9zdDphbnkpID0+IHsgXG4gICAgcmV0dXJuIHBvc3QuYXR0YWNobWVudHM/Lm1lZGlhX2tleXM/Lmxlbmd0aCA+IDA7XG4gICB9KVxuXG5cbiAgY29uc3Qgc2NyZWVuc2hvdFR3ZWV0cyA9XG4gICBwb3N0cy5maWx0ZXIoKGl0ZW06YW55KSA9PiAhdHdlZXRzLnNvbWUoKHR3ZWV0OmFueSkgPT4gdHdlZXQuaWQgPT09IGl0ZW0uaWQpKVxuIFxuXG5cblxuY29uc29sZS5sb2codHdlZXRzLCAgJ3R3ZWV0cycpXG5jb25zb2xlLmxvZyhzY3JlZW5zaG90VHdlZXRzLCAgJ3NjcmVlbnNob3QgVHdlZXRzJylcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBmbGV4LWNvbCBtaW4taC1zY3JlZW4gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgey8qIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TWludGJhc2UgLSBTaW1wbGUgTWludGVyIEV4YW1wbGU8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC02IHNtOm14LTI0IG10LTQgbWItNFwiPlxuICAgICAgICA8TWFpbiAvPlxuICAgICAgPC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHtcbiAgcmVzLFxuICByZXEsXG4gIHF1ZXJ5LFxufTogR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCkgPT4ge1xuIFxuXG4gIGNvbnN0IHsgcG9zdHMgfSA9IGF3YWl0IGZldGNoVHdpdHRlclBvc3RzKCdtaW50YmFzZScpO1xuXG4gIGNvbnNvbGUubG9nKHBvc3RzLCAncG9zdHMnKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHttZWRpYTogcG9zdHMuaW5jbHVkZXMubWVkaWEsIHBvc3RzOiBwb3N0cy5kYXRhfSxcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1pbnRlcjtcbiJdLCJuYW1lcyI6WyJNaW50ZXIiLCJtZWRpYSIsInBvc3RzIiwiY29uc29sZSIsImxvZyIsInR3ZWV0cyIsImZpbHRlciIsInBvc3QiLCJhdHRhY2htZW50cyIsIm1lZGlhX2tleXMiLCJsZW5ndGgiLCJzY3JlZW5zaG90VHdlZXRzIiwiaXRlbSIsInNvbWUiLCJ0d2VldCIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Frubenmarcus%2Fhackaton%2Fpages%2Findex.tsx&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);