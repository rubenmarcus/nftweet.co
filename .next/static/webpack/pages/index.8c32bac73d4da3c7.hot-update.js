"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Minter(param) {\n    var media = param.media, posts = param.posts;\n    console.log(\"media\", media);\n    console.log(\"posts\", posts);\n    var filteredPosts = posts.filter(function(post) {\n        var ref, ref1;\n        var postsWithMedia = ((ref = post.attachments) === null || ref === void 0 ? void 0 : (ref1 = ref.media_keys) === null || ref1 === void 0 ? void 0 : ref1.length) > 0;\n        var postsWithoutMedia = !postsWithMedia;\n        console.log(postsWithMedia, !postsWithMedia);\n        return {\n            tweets: postsWithMedia,\n            screenshotTweets: postsWithoutMedia\n        };\n    });\n    var tweets = filteredPosts.tweets, screenshotTweets = filteredPosts.screenshotTweets;\n    console.log(tweets, \"tweets\");\n    console.log(screenshotTweets, \"screenshotTweets\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-1 flex-col min-h-screen text-gray-500\"\n    }, void 0, false, {\n        fileName: \"/Users/rubenmarcus/hackaton/pages/index.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_c = Minter;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Minter);\nvar _c;\n$RefreshReg$(_c, \"Minter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFNQSxTQUFTQSxNQUFNLENBQUMsS0FBa0IsRUFBZTtRQUFoQ0MsS0FBSyxHQUFOLEtBQWtCLENBQWpCQSxLQUFLLEVBQUVDLEtBQUssR0FBYixLQUFrQixDQUFWQSxLQUFLO0lBRTNCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLEVBQUVILEtBQUssQ0FBQztJQUMzQkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxFQUFFRixLQUFLLENBQUM7SUFFM0IsSUFBTUcsYUFBYSxHQUFHSCxLQUFLLENBQUNJLE1BQU0sQ0FBQyxTQUFDQyxJQUFRLEVBQUs7WUFFeEJBLEdBQWdCO1FBQXZDLElBQU1DLGNBQWMsR0FBR0QsQ0FBQUEsQ0FBQUEsR0FBZ0IsR0FBaEJBLElBQUksQ0FBQ0UsV0FBVyxjQUFoQkYsR0FBZ0IsV0FBWSxHQUE1QkEsS0FBQUEsQ0FBNEIsR0FBNUJBLFFBQUFBLEdBQWdCLENBQUVHLFVBQVUsZ0NBQTVCSCxLQUFBQSxDQUE0QixRQUFFSSxNQUFNLENBQVIsR0FBVyxDQUFDO1FBQy9ELElBQU1DLGlCQUFpQixHQUFHLENBQUNKLGNBQWM7UUFFekNMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxjQUFjLEVBQUcsQ0FBQ0EsY0FBYyxDQUFDO1FBRTdDLE9BQU87WUFBQ0ssTUFBTSxFQUFFTCxjQUFjO1lBQUdNLGdCQUFnQixFQUFHRixpQkFBaUI7U0FBQztLQUVwRSxDQUFDO0lBRUwsSUFBT0MsTUFBTSxHQUFzQlIsYUFBYSxDQUF6Q1EsTUFBTSxFQUFFQyxnQkFBZ0IsR0FBSVQsYUFBYSxDQUFqQ1MsZ0JBQWdCO0lBRWpDWCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1MsTUFBTSxFQUFHLFFBQVEsQ0FBQztJQUU5QlYsT0FBTyxDQUFDQyxHQUFHLENBQUNVLGdCQUFnQixFQUFHLGtCQUFrQixDQUFDO0lBRWhELHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxpREFBaUQ7Ozs7O1lBUTFELENBQ047Q0FDSDtBQWpDUWhCLEtBQUFBLE1BQU07O0FBb0RmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCB9IGZyb20gJ25leHQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29tcG9uZW50cy9NYWluJztcbmltcG9ydCB7IGZldGNoVHdpdHRlclBvc3RzIH0gZnJvbSAnLi4vc2VydmljZXMvZmV0Y2hUd2l0dGVyUG9zdHMnO1xuXG5mdW5jdGlvbiBNaW50ZXIoe21lZGlhLCBwb3N0c306YW55KTogSlNYLkVsZW1lbnQge1xuXG4gIGNvbnNvbGUubG9nKCdtZWRpYScsIG1lZGlhKVxuICBjb25zb2xlLmxvZygncG9zdHMnLCBwb3N0cylcblxuICBjb25zdCBmaWx0ZXJlZFBvc3RzID0gcG9zdHMuZmlsdGVyKChwb3N0OmFueSkgPT4geyBcblxuICAgIGNvbnN0IHBvc3RzV2l0aE1lZGlhID0gcG9zdC5hdHRhY2htZW50cz8ubWVkaWFfa2V5cz8ubGVuZ3RoID4gMDtcbiAgICBjb25zdCBwb3N0c1dpdGhvdXRNZWRpYSA9ICFwb3N0c1dpdGhNZWRpYTtcblxuICAgIGNvbnNvbGUubG9nKHBvc3RzV2l0aE1lZGlhICwgIXBvc3RzV2l0aE1lZGlhKVxuXG4gICAgcmV0dXJuIHt0d2VldHM6IHBvc3RzV2l0aE1lZGlhICwgc2NyZWVuc2hvdFR3ZWV0cyA6IHBvc3RzV2l0aG91dE1lZGlhfVxuXG4gICAgIH0pXG5cbiAgY29uc3Qge3R3ZWV0cywgc2NyZWVuc2hvdFR3ZWV0c30gPSBmaWx0ZXJlZFBvc3RzO1xuXG5jb25zb2xlLmxvZyh0d2VldHMsICAndHdlZXRzJylcblxuY29uc29sZS5sb2coc2NyZWVuc2hvdFR3ZWV0cywgICdzY3JlZW5zaG90VHdlZXRzJylcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgZmxleC1jb2wgbWluLWgtc2NyZWVuIHRleHQtZ3JheS01MDBcIj5cbiAgICAgIHsvKiA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk1pbnRiYXNlIC0gU2ltcGxlIE1pbnRlciBFeGFtcGxlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNiBzbTpteC0yNCBtdC00IG1iLTRcIj5cbiAgICAgICAgPE1haW4gLz5cbiAgICAgIDwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7XG4gIHJlcyxcbiAgcmVxLFxuICBxdWVyeSxcbn06IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHQpID0+IHtcbiBcblxuICBjb25zdCB7IHBvc3RzIH0gPSBhd2FpdCBmZXRjaFR3aXR0ZXJQb3N0cygnbWludGJhc2UnKTtcblxuICBjb25zb2xlLmxvZyhwb3N0cywgJ3Bvc3RzJylcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7bWVkaWE6IHBvc3RzLmluY2x1ZGVzLm1lZGlhLCBwb3N0czogcG9zdHMuZGF0YX0sXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBNaW50ZXI7XG4iXSwibmFtZXMiOlsiTWludGVyIiwibWVkaWEiLCJwb3N0cyIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXJlZFBvc3RzIiwiZmlsdGVyIiwicG9zdCIsInBvc3RzV2l0aE1lZGlhIiwiYXR0YWNobWVudHMiLCJtZWRpYV9rZXlzIiwibGVuZ3RoIiwicG9zdHNXaXRob3V0TWVkaWEiLCJ0d2VldHMiLCJzY3JlZW5zaG90VHdlZXRzIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});