/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./config/constants.ts":
/*!*****************************!*\
  !*** ./config/constants.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NETWORK_CONFIG\": () => (/* binding */ NETWORK_CONFIG),\n/* harmony export */   \"tags\": () => (/* binding */ tags)\n/* harmony export */ });\nconst NETWORK_CONFIG = {\n    testnet: \"https://interop-testnet.hasura.app/v1/graphql\",\n    mainnet: \"https://interop-mainnet.hasura.app/v1/graphql\"\n};\nconst tags = {\n    art: \"Art\",\n    defi: \"DeFi\",\n    fashion: \"Fashion\",\n    membership: \"Membership\",\n    music: \"Music\",\n    photography: \"Photography\",\n    ticket: \"Ticket\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvY29uc3RhbnRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sTUFBTUEsY0FBYyxHQUFHO0lBQzVCQyxPQUFPLEVBQUUsK0NBQStDO0lBQ3hEQyxPQUFPLEVBQUUsK0NBQStDO0NBQ3pELENBQUM7QUFDSyxNQUFNQyxJQUFJLEdBQUc7SUFDbEJDLEdBQUcsRUFBRSxLQUFLO0lBQ1ZDLElBQUksRUFBRSxNQUFNO0lBQ1pDLE9BQU8sRUFBRSxTQUFTO0lBQ2xCQyxVQUFVLEVBQUUsWUFBWTtJQUN4QkMsS0FBSyxFQUFFLE9BQU87SUFDZEMsV0FBVyxFQUFFLGFBQWE7SUFDMUJDLE1BQU0sRUFBRSxRQUFRO0NBQ2pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW50YmFzZS1leGFtcGxlcy1zaW1wbGUtbWludGVyLy4vY29uZmlnL2NvbnN0YW50cy50cz8yM2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBORVRXT1JLX0NPTkZJRyA9IHtcbiAgdGVzdG5ldDogJ2h0dHBzOi8vaW50ZXJvcC10ZXN0bmV0Lmhhc3VyYS5hcHAvdjEvZ3JhcGhxbCcsXG4gIG1haW5uZXQ6ICdodHRwczovL2ludGVyb3AtbWFpbm5ldC5oYXN1cmEuYXBwL3YxL2dyYXBocWwnLFxufTtcbmV4cG9ydCBjb25zdCB0YWdzID0ge1xuICBhcnQ6ICdBcnQnLFxuICBkZWZpOiAnRGVGaScsXG4gIGZhc2hpb246ICdGYXNoaW9uJyxcbiAgbWVtYmVyc2hpcDogJ01lbWJlcnNoaXAnLFxuICBtdXNpYzogJ011c2ljJyxcbiAgcGhvdG9ncmFwaHk6ICdQaG90b2dyYXBoeScsXG4gIHRpY2tldDogJ1RpY2tldCcsXG59O1xuIl0sIm5hbWVzIjpbIk5FVFdPUktfQ09ORklHIiwidGVzdG5ldCIsIm1haW5uZXQiLCJ0YWdzIiwiYXJ0IiwiZGVmaSIsImZhc2hpb24iLCJtZW1iZXJzaGlwIiwibXVzaWMiLCJwaG90b2dyYXBoeSIsInRpY2tldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/constants.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mintbase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mintbase */ \"mintbase\");\n/* harmony import */ var mintbase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mintbase__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_providers_WalletProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/providers/WalletProvider */ \"./services/providers/WalletProvider.tsx\");\n/* harmony import */ var _services_providers_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/providers/apollo */ \"./services/providers/apollo.ts\");\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const mjsKey = process.env.NEXT_PUBLIC_DEVELOPER_KEY || \"\";\n    const isValidNetworkKey = Object.values(mintbase__WEBPACK_IMPORTED_MODULE_2__.Network).includes(process.env.NEXT_PUBLIC_NETWORK);\n    const networkKey = isValidNetworkKey ? process.env.NEXT_PUBLIC_NETWORK : mintbase__WEBPACK_IMPORTED_MODULE_2__.Network.testnet;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_services_providers_WalletProvider__WEBPACK_IMPORTED_MODULE_4__.WalletProvider, {\n        network: networkKey,\n        chain: mintbase__WEBPACK_IMPORTED_MODULE_2__.Chain.near,\n        apiKey: mjsKey,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloProvider, {\n            client: (0,_services_providers_apollo__WEBPACK_IMPORTED_MODULE_5__.getClient)({\n                network: mintbase__WEBPACK_IMPORTED_MODULE_2__.Network.testnet\n            }),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/rubenmarcus/hackaton/pages/_app.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/rubenmarcus/hackaton/pages/_app.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/rubenmarcus/hackaton/pages/_app.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ1c7QUFHTTtBQUNzQjtBQUNiO0FBRXpELFNBQVNLLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQ2pELE1BQU1DLE1BQU0sR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLHlCQUF5QixJQUFJLEVBQUU7SUFFMUQsTUFBTUMsaUJBQWlCLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDYiw2Q0FBTyxDQUFDLENBQUNjLFFBQVEsQ0FBQ04sT0FBTyxDQUFDQyxHQUFHLENBQUNNLG1CQUFtQixDQUFZO0lBQ3JHLE1BQU1DLFVBQVUsR0FBR0wsaUJBQWlCLEdBQUdILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxtQkFBbUIsR0FBY2YscURBQWU7SUFFbkcscUJBQ0UsOERBQUNFLDhFQUFjO1FBQ2JnQixPQUFPLEVBQUVGLFVBQVU7UUFDbkJHLEtBQUssRUFBRXBCLGdEQUFVO1FBQ2pCc0IsTUFBTSxFQUFFZCxNQUFNO2tCQUVkLDRFQUFDTiwwREFBYztZQUFDcUIsTUFBTSxFQUFFbkIscUVBQVMsQ0FBQztnQkFBRWUsT0FBTyxFQUFFbEIscURBQWU7YUFBRSxDQUFDO3NCQUM3RCw0RUFBQ0ssU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTs7Ozs7Z0JBQ2I7Ozs7O1lBQ0YsQ0FDakI7Q0FDSDtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW50YmFzZS1leGFtcGxlcy1zaW1wbGUtbWludGVyLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgeyBDaGFpbiwgTmV0d29yayB9IGZyb20gJ21pbnRiYXNlJztcblxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgV2FsbGV0UHJvdmlkZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9wcm92aWRlcnMvV2FsbGV0UHJvdmlkZXInO1xuaW1wb3J0IHsgZ2V0Q2xpZW50IH0gZnJvbSAnLi4vc2VydmljZXMvcHJvdmlkZXJzL2Fwb2xsbyc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgbWpzS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREVWRUxPUEVSX0tFWSB8fCAnJztcblxuICBjb25zdCBpc1ZhbGlkTmV0d29ya0tleSA9IE9iamVjdC52YWx1ZXMoTmV0d29yaykuaW5jbHVkZXMocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTkVUV09SSyBhcyBOZXR3b3JrKTtcbiAgY29uc3QgbmV0d29ya0tleSA9IGlzVmFsaWROZXR3b3JrS2V5ID8gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTkVUV09SSyBhcyBOZXR3b3JrIDogTmV0d29yay50ZXN0bmV0O1xuXG4gIHJldHVybiAoXG4gICAgPFdhbGxldFByb3ZpZGVyXG4gICAgICBuZXR3b3JrPXtuZXR3b3JrS2V5fVxuICAgICAgY2hhaW49e0NoYWluLm5lYXIgYXMgQ2hhaW59XG4gICAgICBhcGlLZXk9e21qc0tleX1cbiAgICA+XG4gICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtnZXRDbGllbnQoeyBuZXR3b3JrOiBOZXR3b3JrLnRlc3RuZXQgfSl9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgIDwvV2FsbGV0UHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkNoYWluIiwiTmV0d29yayIsIkFwb2xsb1Byb3ZpZGVyIiwiV2FsbGV0UHJvdmlkZXIiLCJnZXRDbGllbnQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm1qc0tleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19ERVZFTE9QRVJfS0VZIiwiaXNWYWxpZE5ldHdvcmtLZXkiLCJPYmplY3QiLCJ2YWx1ZXMiLCJpbmNsdWRlcyIsIk5FWFRfUFVCTElDX05FVFdPUksiLCJuZXR3b3JrS2V5IiwidGVzdG5ldCIsIm5ldHdvcmsiLCJjaGFpbiIsIm5lYXIiLCJhcGlLZXkiLCJjbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./services/providers/WalletProvider.tsx":
/*!***********************************************!*\
  !*** ./services/providers/WalletProvider.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WalletContext\": () => (/* binding */ WalletContext),\n/* harmony export */   \"WalletProvider\": () => (/* binding */ WalletProvider),\n/* harmony export */   \"useWallet\": () => (/* binding */ useWallet)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mintbase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mintbase */ \"mintbase\");\n/* harmony import */ var mintbase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mintbase__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./services/providers/constants.ts\");\n\n\n\n\n\nconst WalletContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({\n    wallet: undefined,\n    details: {\n        accountId: \"\",\n        balance: \"\",\n        allowance: \"\",\n        contractName: \"\"\n    },\n    isConnected: false,\n    loading: true,\n    signIn: ()=>Promise.resolve()\n    ,\n    signOut: ()=>null\n});\nfunction WalletProvider({ network =mintbase__WEBPACK_IMPORTED_MODULE_1__.Network.testnet , chain , apiKey , children  }) {\n    const { 0: walletInfo , 1: setWallet  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const { 0: details , 1: setDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        accountId: \"\",\n        balance: \"\",\n        allowance: \"\",\n        contractName: \"\"\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { 0: connected , 1: setConnected  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const initWallet = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{\n        const accountId = router.query.account_id;\n        const nearKeystore = `near-api-js:keystore:${accountId}:${network}`;\n        if (accountId && localStorage.getItem(nearKeystore) && localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_4__.WalletKeys.AUTH_KEY)) {\n            localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_4__.WalletKeys.AUTH_KEY);\n            localStorage.removeItem(nearKeystore);\n        }\n        const { data: walletData , error  } = await new mintbase__WEBPACK_IMPORTED_MODULE_1__.Wallet().init({\n            networkName: network ?? mintbase__WEBPACK_IMPORTED_MODULE_1__.Network.testnet,\n            chain,\n            apiKey\n        });\n        if (error) {\n            console.error(error);\n            return;\n        }\n        const { wallet , isConnected  } = walletData;\n        setWallet(wallet);\n        if (isConnected) {\n            try {\n                const { data: detailsData  } = await wallet.details();\n                setDetails(detailsData);\n                setConnected(true);\n            } catch (err) {\n                console.error(err);\n            }\n        }\n        setLoading(false);\n    }, [\n        apiKey,\n        chain,\n        network,\n        router.query.account_id\n    ]);\n    const signIn = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{\n        if (!walletInfo) {\n            return;\n        }\n        await walletInfo.connect({\n            requestSignIn: true\n        });\n    }, [\n        walletInfo\n    ]);\n    const signOut = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{\n        if (!walletInfo) {\n            return;\n        }\n        walletInfo.disconnect();\n        await router.replace(\"/\", undefined, {\n            shallow: true\n        });\n        window.location.reload();\n    }, [\n        router,\n        walletInfo\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        initWallet();\n    }, [\n        initWallet,\n        network\n    ]);\n    const walletContextData = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        const obj = {\n            wallet: walletInfo,\n            details,\n            isConnected: connected,\n            signIn,\n            signOut,\n            loading\n        };\n        return obj;\n    }, [\n        connected,\n        details,\n        loading,\n        signIn,\n        signOut,\n        walletInfo\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WalletContext.Provider, {\n        value: walletContextData,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/rubenmarcus/hackaton/services/providers/WalletProvider.tsx\",\n        lineNumber: 162,\n        columnNumber: 5\n    }, this);\n}\nconst useWallet = ()=>(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(WalletContext)\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9wcm92aWRlcnMvV2FsbGV0UHJvdmlkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQWtEO0FBU25DO0FBQ3lCO0FBQ0M7QUF1QmxDLE1BQU1VLGFBQWEsaUJBQUdSLG9EQUFhLENBWXZDO0lBQ0dTLE1BQU0sRUFBRUMsU0FBUztJQUNqQkMsT0FBTyxFQUFFO1FBQ1BDLFNBQVMsRUFBRSxFQUFFO1FBQ2JDLE9BQU8sRUFBRSxFQUFFO1FBQ1hDLFNBQVMsRUFBRSxFQUFFO1FBQ2JDLFlBQVksRUFBRSxFQUFFO0tBQ2pCO0lBQ0RDLFdBQVcsRUFBRSxLQUFLO0lBQ2xCQyxPQUFPLEVBQUUsSUFBSTtJQUNiQyxNQUFNLEVBQUUsSUFBTUMsT0FBTyxDQUFDQyxPQUFPLEVBQUU7SUFBQTtJQUMvQkMsT0FBTyxFQUFFLElBQU0sSUFBSTtDQUNwQixDQUFDLENBQUM7QUFFQSxTQUFTQyxjQUFjLENBQUMsRUFDN0JDLE9BQU8sRUFBR3pCLHFEQUFlLEdBQ3pCMkIsS0FBSyxHQUNMQyxNQUFNLEdBQ05DLFFBQVEsR0FDUSxFQUFFO0lBQ2xCLE1BQU0sRUFsRVIsR0FrRVNDLFVBQVUsR0FsRW5CLEdBa0VxQkMsU0FBUyxNQUFJM0IsK0NBQVEsRUFBc0I7SUFFOUQsTUFBTSxFQXBFUixHQW9FU1MsT0FBTyxHQXBFaEIsR0FvRWtCbUIsVUFBVSxNQUFJNUIsK0NBQVEsQ0FLbkM7UUFDRFUsU0FBUyxFQUFFLEVBQUU7UUFDYkMsT0FBTyxFQUFFLEVBQUU7UUFDWEMsU0FBUyxFQUFFLEVBQUU7UUFDYkMsWUFBWSxFQUFFLEVBQUU7S0FDakIsQ0FBQztJQUVGLE1BQU1nQixNQUFNLEdBQUd6QixzREFBUyxFQUFFO0lBRTFCLE1BQU0sRUFsRlIsR0FrRlMwQixTQUFTLEdBbEZsQixHQWtGb0JDLFlBQVksTUFBSS9CLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQ2pELE1BQU0sRUFuRlIsR0FtRlNlLE9BQU8sR0FuRmhCLEdBbUZrQmlC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RUFBRWdCLFNBQVM7WUFDdEJkLE1BQU07WUFDTkcsT0FBTztZQUNQSixPQUFPO1NBQ1I7UUFFRCxPQUFPMkMsR0FBRyxDQUFDO0tBQ1osRUFBRTtRQUFDNUIsU0FBUztRQUFFckIsT0FBTztRQUFFTSxPQUFPO1FBQUVDLE1BQU07UUFBRUcsT0FBTztRQUFFTyxVQUFVO0tBQUMsQ0FBQztJQUU5RCxxQkFDRSw4REFBQ3BCLGFBQWEsQ0FBQ3FELFFBQVE7UUFBQ0MsS0FBSyxFQUFFSCxpQkFBaUI7a0JBQzdDaEMsUUFBUTs7Ozs7WUFDYyxDQUN6QjtDQUNIO0FBRU0sTUFBTW9DLFNBQVMsR0FBRyxJQUFNNUQsaURBQVUsQ0FBa0JLLGFBQWEsQ0FBQztBQUFBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW50YmFzZS1leGFtcGxlcy1zaW1wbGUtbWludGVyLy4vc2VydmljZXMvcHJvdmlkZXJzL1dhbGxldFByb3ZpZGVyLnRzeD80NThmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYWluLCBOZXR3b3JrLCBXYWxsZXQgfSBmcm9tICdtaW50YmFzZSc7XG5pbXBvcnQge1xuICBjcmVhdGVDb250ZXh0LFxuICBSZWFjdE5vZGUsXG4gIHVzZUVmZmVjdCxcbiAgdXNlU3RhdGUsXG4gIHVzZUNvbnRleHQsXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VNZW1vLFxufSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBXYWxsZXRLZXlzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5pbnRlcmZhY2UgSVdhbGxldFByb3ZpZGVyIHtcbiAgbmV0d29yazogTmV0d29yaztcbiAgY2hhaW46IENoYWluO1xuICBhcGlLZXk6IHN0cmluZztcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxuaW50ZXJmYWNlIElXYWxsZXRDb25zdW1lciB7XG4gIHdhbGxldDogV2FsbGV0O1xuICBkZXRhaWxzOiB7XG4gICAgYWNjb3VudElkOiBzdHJpbmc7XG4gICAgYmFsYW5jZTogc3RyaW5nO1xuICAgIGFsbG93YW5jZTogc3RyaW5nO1xuICAgIGNvbnRyYWN0TmFtZTogc3RyaW5nO1xuICB9O1xuICBpc0Nvbm5lY3RlZDogYm9vbGVhbjtcbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgc2lnbkluOiAoKSA9PiB2b2lkO1xuICBzaWduT3V0OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgV2FsbGV0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8e1xuICB3YWxsZXQ6IFdhbGxldDtcbiAgZGV0YWlsczoge1xuICAgIGFjY291bnRJZDogc3RyaW5nO1xuICAgIGJhbGFuY2U6IHN0cmluZztcbiAgICBhbGxvd2FuY2U6IHN0cmluZztcbiAgICBjb250cmFjdE5hbWU6IHN0cmluZztcbiAgfTtcbiAgaXNDb25uZWN0ZWQ6IGJvb2xlYW47XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIHNpZ25JbjooKSA9PiB2b2lkO1xuICBzaWduT3V0OiAoKSA9PiB2b2lkO1xufT4oe1xuICAgICAgd2FsbGV0OiB1bmRlZmluZWQsXG4gICAgICBkZXRhaWxzOiB7XG4gICAgICAgIGFjY291bnRJZDogJycsXG4gICAgICAgIGJhbGFuY2U6ICcnLFxuICAgICAgICBhbGxvd2FuY2U6ICcnLFxuICAgICAgICBjb250cmFjdE5hbWU6ICcnLFxuICAgICAgfSxcbiAgICAgIGlzQ29ubmVjdGVkOiBmYWxzZSxcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBzaWduSW46ICgpID0+IFByb21pc2UucmVzb2x2ZSgpLFxuICAgICAgc2lnbk91dDogKCkgPT4gbnVsbCxcbiAgICB9KTtcblxuZXhwb3J0IGZ1bmN0aW9uIFdhbGxldFByb3ZpZGVyKHtcbiAgbmV0d29yayA9IE5ldHdvcmsudGVzdG5ldCxcbiAgY2hhaW4sXG4gIGFwaUtleSxcbiAgY2hpbGRyZW4sXG59OiBJV2FsbGV0UHJvdmlkZXIpIHtcbiAgY29uc3QgW3dhbGxldEluZm8sIHNldFdhbGxldF0gPSB1c2VTdGF0ZTxXYWxsZXQgfCB1bmRlZmluZWQ+KCk7XG5cbiAgY29uc3QgW2RldGFpbHMsIHNldERldGFpbHNdID0gdXNlU3RhdGU8e1xuICAgIGFjY291bnRJZDogc3RyaW5nO1xuICAgIGJhbGFuY2U6IHN0cmluZztcbiAgICBhbGxvd2FuY2U6IHN0cmluZztcbiAgICBjb250cmFjdE5hbWU6IHN0cmluZztcbiAgfT4oe1xuICAgIGFjY291bnRJZDogJycsXG4gICAgYmFsYW5jZTogJycsXG4gICAgYWxsb3dhbmNlOiAnJyxcbiAgICBjb250cmFjdE5hbWU6ICcnLFxuICB9KTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBbY29ubmVjdGVkLCBzZXRDb25uZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBpbml0V2FsbGV0ID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGFjY291bnRJZCA9IHJvdXRlci5xdWVyeS5hY2NvdW50X2lkO1xuICAgIGNvbnN0IG5lYXJLZXlzdG9yZSA9IGBuZWFyLWFwaS1qczprZXlzdG9yZToke2FjY291bnRJZH06JHtuZXR3b3JrfWA7XG5cbiAgICBpZiAoXG4gICAgICBhY2NvdW50SWRcbiAgICAgICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5lYXJLZXlzdG9yZSlcbiAgICAgICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFdhbGxldEtleXMuQVVUSF9LRVkpXG4gICAgKSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShXYWxsZXRLZXlzLkFVVEhfS0VZKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG5lYXJLZXlzdG9yZSk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBkYXRhOiB3YWxsZXREYXRhLCBlcnJvciB9ID0gYXdhaXQgbmV3IFdhbGxldCgpLmluaXQoe1xuICAgICAgbmV0d29ya05hbWU6IG5ldHdvcmsgPz8gTmV0d29yay50ZXN0bmV0LFxuICAgICAgY2hhaW4sXG4gICAgICBhcGlLZXksXG4gICAgfSk7XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgd2FsbGV0LCBpc0Nvbm5lY3RlZCB9ID0gd2FsbGV0RGF0YTtcblxuICAgIHNldFdhbGxldCh3YWxsZXQpO1xuXG4gICAgaWYgKGlzQ29ubmVjdGVkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGRhdGE6IGRldGFpbHNEYXRhIH0gPSBhd2FpdCB3YWxsZXQuZGV0YWlscygpO1xuICAgICAgICBzZXREZXRhaWxzKGRldGFpbHNEYXRhKTtcbiAgICAgICAgc2V0Q29ubmVjdGVkKHRydWUpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH0sIFthcGlLZXksIGNoYWluLCBuZXR3b3JrLCByb3V0ZXIucXVlcnkuYWNjb3VudF9pZF0pO1xuXG4gIGNvbnN0IHNpZ25JbiA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXdhbGxldEluZm8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgd2FsbGV0SW5mby5jb25uZWN0KHsgcmVxdWVzdFNpZ25JbjogdHJ1ZSB9KTtcbiAgfSwgW3dhbGxldEluZm9dKTtcblxuICBjb25zdCBzaWduT3V0ID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGlmICghd2FsbGV0SW5mbykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3YWxsZXRJbmZvLmRpc2Nvbm5lY3QoKTtcblxuICAgIGF3YWl0IHJvdXRlci5yZXBsYWNlKCcvJywgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSk7XG5cbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH0sIFtyb3V0ZXIsIHdhbGxldEluZm9dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGluaXRXYWxsZXQoKTtcbiAgfSwgW2luaXRXYWxsZXQsIG5ldHdvcmtdKTtcblxuICBjb25zdCB3YWxsZXRDb250ZXh0RGF0YSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIHdhbGxldDogd2FsbGV0SW5mbyxcbiAgICAgIGRldGFpbHMsXG4gICAgICBpc0Nvbm5lY3RlZDogY29ubmVjdGVkLFxuICAgICAgc2lnbkluLFxuICAgICAgc2lnbk91dCxcbiAgICAgIGxvYWRpbmcsXG4gICAgfTtcblxuICAgIHJldHVybiBvYmo7XG4gIH0sIFtjb25uZWN0ZWQsIGRldGFpbHMsIGxvYWRpbmcsIHNpZ25Jbiwgc2lnbk91dCwgd2FsbGV0SW5mb10pO1xuXG4gIHJldHVybiAoXG4gICAgPFdhbGxldENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3dhbGxldENvbnRleHREYXRhfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1dhbGxldENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCB1c2VXYWxsZXQgPSAoKSA9PiB1c2VDb250ZXh0PElXYWxsZXRDb25zdW1lcj4oV2FsbGV0Q29udGV4dCk7XG4iXSwibmFtZXMiOlsiTmV0d29yayIsIldhbGxldCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJ1c2VSb3V0ZXIiLCJXYWxsZXRLZXlzIiwiV2FsbGV0Q29udGV4dCIsIndhbGxldCIsInVuZGVmaW5lZCIsImRldGFpbHMiLCJhY2NvdW50SWQiLCJiYWxhbmNlIiwiYWxsb3dhbmNlIiwiY29udHJhY3ROYW1lIiwiaXNDb25uZWN0ZWQiLCJsb2FkaW5nIiwic2lnbkluIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzaWduT3V0IiwiV2FsbGV0UHJvdmlkZXIiLCJuZXR3b3JrIiwidGVzdG5ldCIsImNoYWluIiwiYXBpS2V5IiwiY2hpbGRyZW4iLCJ3YWxsZXRJbmZvIiwic2V0V2FsbGV0Iiwic2V0RGV0YWlscyIsInJvdXRlciIsImNvbm5lY3RlZCIsInNldENvbm5lY3RlZCIsInNldExvYWRpbmciLCJpbml0V2FsbGV0IiwicXVlcnkiLCJhY2NvdW50X2lkIiwibmVhcktleXN0b3JlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkFVVEhfS0VZIiwicmVtb3ZlSXRlbSIsImRhdGEiLCJ3YWxsZXREYXRhIiwiZXJyb3IiLCJpbml0IiwibmV0d29ya05hbWUiLCJjb25zb2xlIiwiZGV0YWlsc0RhdGEiLCJlcnIiLCJjb25uZWN0IiwicmVxdWVzdFNpZ25JbiIsImRpc2Nvbm5lY3QiLCJyZXBsYWNlIiwic2hhbGxvdyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwid2FsbGV0Q29udGV4dERhdGEiLCJvYmoiLCJQcm92aWRlciIsInZhbHVlIiwidXNlV2FsbGV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/providers/WalletProvider.tsx\n");

/***/ }),

/***/ "./services/providers/apollo.ts":
/*!**************************************!*\
  !*** ./services/providers/apollo.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getClient\": () => (/* binding */ getClient)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mintbase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mintbase */ \"mintbase\");\n/* harmony import */ var mintbase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mintbase__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/constants */ \"./config/constants.ts\");\n\n\n\nconst getClient = ({ network  })=>{\n    const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n        uri: network === mintbase__WEBPACK_IMPORTED_MODULE_1__.Network.mainnet ? _config_constants__WEBPACK_IMPORTED_MODULE_2__.NETWORK_CONFIG.mainnet : _config_constants__WEBPACK_IMPORTED_MODULE_2__.NETWORK_CONFIG.testnet,\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n    });\n    return client;\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9wcm92aWRlcnMvYXBvbGxvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2RDtBQUMxQjtBQUNxQjtBQUV4RCxNQUFNSSxTQUFTLEdBQUcsQ0FBQyxFQUFFQyxPQUFPLEdBQXVCLEdBQUs7SUFDdEQsTUFBTUMsTUFBTSxHQUFHLElBQUlOLHdEQUFZLENBQUM7UUFDOUJPLEdBQUcsRUFDREYsT0FBTyxLQUFLSCxxREFBZSxHQUN2QkMscUVBQXNCLEdBQ3RCQSxxRUFBc0I7UUFDNUJPLEtBQUssRUFBRSxJQUFJVCx5REFBYSxFQUFFO0tBQzNCLENBQUM7SUFFRixPQUFPSyxNQUFNLENBQUM7Q0FDZjtBQUVvQiIsInNvdXJjZXMiOlsid2VicGFjazovL21pbnRiYXNlLWV4YW1wbGVzLXNpbXBsZS1taW50ZXIvLi9zZXJ2aWNlcy9wcm92aWRlcnMvYXBvbGxvLnRzP2RkZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ21pbnRiYXNlJztcbmltcG9ydCB7IE5FVFdPUktfQ09ORklHIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbnN0YW50cyc7XG5cbmNvbnN0IGdldENsaWVudCA9ICh7IG5ldHdvcmsgfTogeyBuZXR3b3JrOiBzdHJpbmcgfSkgPT4ge1xuICBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICB1cmk6XG4gICAgICBuZXR3b3JrID09PSBOZXR3b3JrLm1haW5uZXRcbiAgICAgICAgPyBORVRXT1JLX0NPTkZJRy5tYWlubmV0XG4gICAgICAgIDogTkVUV09SS19DT05GSUcudGVzdG5ldCxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbiAgfSk7XG5cbiAgcmV0dXJuIGNsaWVudDtcbn07XG5cbmV4cG9ydCB7IGdldENsaWVudCB9O1xuIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJOZXR3b3JrIiwiTkVUV09SS19DT05GSUciLCJnZXRDbGllbnQiLCJuZXR3b3JrIiwiY2xpZW50IiwidXJpIiwibWFpbm5ldCIsInRlc3RuZXQiLCJjYWNoZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/providers/apollo.ts\n");

/***/ }),

/***/ "./services/providers/constants.ts":
/*!*****************************************!*\
  !*** ./services/providers/constants.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MAINNET_CONFIG\": () => (/* binding */ MAINNET_CONFIG),\n/* harmony export */   \"TESTNET_CONFIG\": () => (/* binding */ TESTNET_CONFIG),\n/* harmony export */   \"WalletKeys\": () => (/* binding */ WalletKeys)\n/* harmony export */ });\nconst TESTNET_CONFIG = {\n    networkId: \"testnet\",\n    nodeUrl: \"https://rpc.testnet.near.org\",\n    walletUrl: \"https://wallet.testnet.near.org\",\n    helperUrl: \"https://helper.testnet.near.org\",\n    explorerUrl: \"https://explorer.testnet.near.org\",\n    headers: {\n        \"Content-Type\": \"application/json\"\n    }\n};\nconst MAINNET_CONFIG = {\n    networkId: \"mainnet\",\n    nodeUrl: \"https://rpc.mainnet.near.org\",\n    walletUrl: \"https://wallet.mainnet.near.org\",\n    helperUrl: \"https://helper.mainnet.near.org\",\n    explorerUrl: \"https://explorer.mainnet.near.org\",\n    headers: {\n        \"Content-Type\": \"application/json\"\n    }\n};\nconst WalletKeys = {\n    AUTH_KEY: process.env.NEXT_PUBLIC_DEVELOPER_KEY\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9wcm92aWRlcnMvY29uc3RhbnRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLE1BQU1BLGNBQWMsR0FBRztJQUM1QkMsU0FBUyxFQUFFLFNBQVM7SUFDcEJDLE9BQU8sRUFBRSw4QkFBOEI7SUFDdkNDLFNBQVMsRUFBRSxpQ0FBaUM7SUFDNUNDLFNBQVMsRUFBRSxpQ0FBaUM7SUFDNUNDLFdBQVcsRUFBRSxtQ0FBbUM7SUFDaERDLE9BQU8sRUFBRTtRQUNQLGNBQWMsRUFBRSxrQkFBa0I7S0FDbkM7Q0FDRixDQUFDO0FBRUssTUFBTUMsY0FBYyxHQUFHO0lBQzVCTixTQUFTLEVBQUUsU0FBUztJQUNwQkMsT0FBTyxFQUFFLDhCQUE4QjtJQUN2Q0MsU0FBUyxFQUFFLGlDQUFpQztJQUM1Q0MsU0FBUyxFQUFFLGlDQUFpQztJQUM1Q0MsV0FBVyxFQUFFLG1DQUFtQztJQUNoREMsT0FBTyxFQUFFO1FBQ1AsY0FBYyxFQUFFLGtCQUFrQjtLQUNuQztDQUNGLENBQUM7QUFFSyxNQUFNRSxVQUFVLEdBQUc7SUFDeEJDLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLHlCQUF5QjtDQUNoRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWludGJhc2UtZXhhbXBsZXMtc2ltcGxlLW1pbnRlci8uL3NlcnZpY2VzL3Byb3ZpZGVycy9jb25zdGFudHMudHM/ZjUxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgVEVTVE5FVF9DT05GSUcgPSB7XG4gIG5ldHdvcmtJZDogJ3Rlc3RuZXQnLFxuICBub2RlVXJsOiAnaHR0cHM6Ly9ycGMudGVzdG5ldC5uZWFyLm9yZycsXG4gIHdhbGxldFVybDogJ2h0dHBzOi8vd2FsbGV0LnRlc3RuZXQubmVhci5vcmcnLFxuICBoZWxwZXJVcmw6ICdodHRwczovL2hlbHBlci50ZXN0bmV0Lm5lYXIub3JnJyxcbiAgZXhwbG9yZXJVcmw6ICdodHRwczovL2V4cGxvcmVyLnRlc3RuZXQubmVhci5vcmcnLFxuICBoZWFkZXJzOiB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBNQUlOTkVUX0NPTkZJRyA9IHtcbiAgbmV0d29ya0lkOiAnbWFpbm5ldCcsXG4gIG5vZGVVcmw6ICdodHRwczovL3JwYy5tYWlubmV0Lm5lYXIub3JnJyxcbiAgd2FsbGV0VXJsOiAnaHR0cHM6Ly93YWxsZXQubWFpbm5ldC5uZWFyLm9yZycsXG4gIGhlbHBlclVybDogJ2h0dHBzOi8vaGVscGVyLm1haW5uZXQubmVhci5vcmcnLFxuICBleHBsb3JlclVybDogJ2h0dHBzOi8vZXhwbG9yZXIubWFpbm5ldC5uZWFyLm9yZycsXG4gIGhlYWRlcnM6IHtcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IFdhbGxldEtleXMgPSB7XG4gIEFVVEhfS0VZOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ERVZFTE9QRVJfS0VZLFxufTtcbiJdLCJuYW1lcyI6WyJURVNUTkVUX0NPTkZJRyIsIm5ldHdvcmtJZCIsIm5vZGVVcmwiLCJ3YWxsZXRVcmwiLCJoZWxwZXJVcmwiLCJleHBsb3JlclVybCIsImhlYWRlcnMiLCJNQUlOTkVUX0NPTkZJRyIsIldhbGxldEtleXMiLCJBVVRIX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19ERVZFTE9QRVJfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/providers/constants.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "mintbase":
/*!***************************!*\
  !*** external "mintbase" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mintbase");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();