"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/reference/repository/imagezoom/1/page.js":
/*!**********************************************************!*\
  !*** ./src/app/reference/repository/imagezoom/1/page.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./src/app/reference/repository/imagezoom/1/style.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst CustomApp = ()=>{\n    _s();\n    const data = [\n        {\n            imageUrl: \"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg\"\n        },\n        {\n            imageUrl: \"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg\"\n        }\n    ];\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageZoom, {\n            imageUrl: data\n        }, void 0, false, {\n            fileName: \"D:\\\\Nitesh\\\\practical\\\\reference-upskills\\\\js-framework\\\\next.js\\\\nextjs-app-mini-project-effort\\\\src\\\\app\\\\reference\\\\repository\\\\imagezoom\\\\1\\\\page.js\",\n            lineNumber: 14,\n            columnNumber: 8\n        }, undefined)\n    }, void 0, false);\n};\n_s(CustomApp, \"zXDeq4m9Y7WtdC+23XKUkFqqrmM=\");\n_c = CustomApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomApp);\nconst ImageZoom = (param)=>{\n    let { imageUrl } = param;\n    _s1();\n    const [zoomLevel, setZoomLevel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const handleZoomIn = ()=>{\n        setZoomLevel((prevZoom)=>prevZoom + 0.2);\n    };\n    const handleZoomOut = ()=>{\n        setZoomLevel((prevZoom)=>Math.max(1, prevZoom - 0.2));\n    };\n    const handleMouseMove = (e)=>{\n        setPosition({\n            x: e.nativeEvent.offsetX,\n            y: e.nativeEvent.offsetY\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"image-zoom-container\",\n        style: {\n            position: \"relative\",\n            overflow: \"hidden\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imageUrl,\n                alt: \"Zoomable Image\",\n                style: {\n                    width: \"calc(100% * \".concat(zoomLevel, \")\"),\n                    transform: \"translate(-\".concat(position.x * (zoomLevel - 1), \"px, -\").concat(position.y * (zoomLevel - 1), \"px)\"),\n                    transition: \"transform 0.2s ease-in-out\"\n                },\n                onMouseMove: handleMouseMove\n            }, void 0, false, {\n                fileName: \"D:\\\\Nitesh\\\\practical\\\\reference-upskills\\\\js-framework\\\\next.js\\\\nextjs-app-mini-project-effort\\\\src\\\\app\\\\reference\\\\repository\\\\imagezoom\\\\1\\\\page.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"zoom-controls\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleZoomIn,\n                        children: \"Zoom In\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Nitesh\\\\practical\\\\reference-upskills\\\\js-framework\\\\next.js\\\\nextjs-app-mini-project-effort\\\\src\\\\app\\\\reference\\\\repository\\\\imagezoom\\\\1\\\\page.js\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleZoomOut,\n                        children: \"Zoom Out\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Nitesh\\\\practical\\\\reference-upskills\\\\js-framework\\\\next.js\\\\nextjs-app-mini-project-effort\\\\src\\\\app\\\\reference\\\\repository\\\\imagezoom\\\\1\\\\page.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Nitesh\\\\practical\\\\reference-upskills\\\\js-framework\\\\next.js\\\\nextjs-app-mini-project-effort\\\\src\\\\app\\\\reference\\\\repository\\\\imagezoom\\\\1\\\\page.js\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Nitesh\\\\practical\\\\reference-upskills\\\\js-framework\\\\next.js\\\\nextjs-app-mini-project-effort\\\\src\\\\app\\\\reference\\\\repository\\\\imagezoom\\\\1\\\\page.js\",\n        lineNumber: 41,\n        columnNumber: 7\n    }, undefined);\n};\n_s1(ImageZoom, \"nEr8vmwtMKBbGkMn1DmxZ0ieAUk=\");\n_c1 = ImageZoom;\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomApp\");\n$RefreshReg$(_c1, \"ImageZoom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVmZXJlbmNlL3JlcG9zaXRvcnkvaW1hZ2V6b29tLzEvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3dDO0FBQ25CO0FBRXJCLE1BQU1FLFlBQVk7O0lBRWQsTUFBTUMsT0FBTztRQUNUO1lBQUNDLFVBQVM7UUFBb0c7UUFDOUc7WUFBQ0EsVUFBUztRQUFvRztLQUNqSDtJQUNELE1BQU0sQ0FBQ0MsT0FBTUMsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQ0U7SUFDcEMscUJBQ0U7a0JBQ0csNEVBQUNJO1lBQVVILFVBQVVEOzs7Ozs7O0FBRzVCO0dBWk1EO0tBQUFBO0FBY04sK0RBQWVBLFNBQVNBLEVBQUE7QUFFeEIsTUFBTUssWUFBWTtRQUFDLEVBQUVILFFBQVEsRUFBRTs7SUFDM0IsTUFBTSxDQUFDSSxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQztRQUFFVyxHQUFHO1FBQUdDLEdBQUc7SUFBRTtJQUV0RCxNQUFNQyxlQUFlO1FBQ25CTCxhQUFhTSxDQUFBQSxXQUFZQSxXQUFXO0lBQ3RDO0lBRUEsTUFBTUMsZ0JBQWdCO1FBQ3BCUCxhQUFhTSxDQUFBQSxXQUFZRSxLQUFLQyxHQUFHLENBQUMsR0FBR0gsV0FBVztJQUNsRDtJQUVBLE1BQU1JLGtCQUFrQixDQUFDQztRQUN2QlQsWUFBWTtZQUNWQyxHQUFHUSxFQUFFQyxXQUFXLENBQUNDLE9BQU87WUFDeEJULEdBQUdPLEVBQUVDLFdBQVcsQ0FBQ0UsT0FBTztRQUMxQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7UUFBdUJDLE9BQU87WUFBRWhCLFVBQVU7WUFBWWlCLFVBQVU7UUFBUzs7MEJBQ3RGLDhEQUFDQztnQkFDQ0MsS0FBS3pCO2dCQUNMMEIsS0FBSTtnQkFDSkosT0FBTztvQkFDTEssT0FBTyxlQUF5QixPQUFWdkIsV0FBVTtvQkFDaEN3QixXQUFXLGNBQWtEdEIsT0FBcENBLFNBQVNFLENBQUMsR0FBSUosQ0FBQUEsWUFBWSxJQUFHLFNBQW9DLE9BQTdCRSxTQUFTRyxDQUFDLEdBQUlMLENBQUFBLFlBQVksSUFBRztvQkFDMUZ5QixZQUFZO2dCQUNkO2dCQUNBQyxhQUFhZjs7Ozs7OzBCQUVmLDhEQUFDSztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNVO3dCQUFPQyxTQUFTdEI7a0NBQWM7Ozs7OztrQ0FDL0IsOERBQUNxQjt3QkFBT0MsU0FBU3BCO2tDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEM7SUFyQ0lUO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcmVmZXJlbmNlL3JlcG9zaXRvcnkvaW1hZ2V6b29tLzEvcGFnZS5qcz80NGY4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBDdXN0b21BcHAgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IFtcclxuICAgICAgICB7aW1hZ2VVcmw6J2h0dHBzOi8vaW1nLmZyZWVwaWsuY29tL2ZyZWUtcGhvdG8vcGFpbnRpbmctbW91bnRhaW4tbGFrZS13aXRoLW1vdW50YWluLWJhY2tncm91bmRfMTg4NTQ0LTkxMjYuanBnJ30sXHJcbiAgICAgICAge2ltYWdlVXJsOidodHRwczovL2ltZy5mcmVlcGlrLmNvbS9mcmVlLXBob3RvL3BhaW50aW5nLW1vdW50YWluLWxha2Utd2l0aC1tb3VudGFpbi1iYWNrZ3JvdW5kXzE4ODU0NC05MTI2LmpwZyd9LFxyXG4gICAgXVxyXG4gICAgY29uc3QgW2l0ZW1zLHNldEl0ZW1zXSA9IHVzZVN0YXRlKGRhdGEpXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICA8SW1hZ2Vab29tIGltYWdlVXJsPXtkYXRhfS8+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUFwcFxyXG5cclxuY29uc3QgSW1hZ2Vab29tID0gKHsgaW1hZ2VVcmwgfSkgPT4ge1xyXG4gICAgY29uc3QgW3pvb21MZXZlbCwgc2V0Wm9vbUxldmVsXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7IHg6IDAsIHk6IDAgfSk7XHJcbiAgXHJcbiAgICBjb25zdCBoYW5kbGVab29tSW4gPSAoKSA9PiB7XHJcbiAgICAgIHNldFpvb21MZXZlbChwcmV2Wm9vbSA9PiBwcmV2Wm9vbSArIDAuMik7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlWm9vbU91dCA9ICgpID0+IHtcclxuICAgICAgc2V0Wm9vbUxldmVsKHByZXZab29tID0+IE1hdGgubWF4KDEsIHByZXZab29tIC0gMC4yKSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGUpID0+IHtcclxuICAgICAgc2V0UG9zaXRpb24oe1xyXG4gICAgICAgIHg6IGUubmF0aXZlRXZlbnQub2Zmc2V0WCxcclxuICAgICAgICB5OiBlLm5hdGl2ZUV2ZW50Lm9mZnNldFlcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS16b29tLWNvbnRhaW5lclwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtpbWFnZVVybH1cclxuICAgICAgICAgIGFsdD1cIlpvb21hYmxlIEltYWdlXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiBgY2FsYygxMDAlICogJHt6b29tTGV2ZWx9KWAsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgtJHtwb3NpdGlvbi54ICogKHpvb21MZXZlbCAtIDEpfXB4LCAtJHtwb3NpdGlvbi55ICogKHpvb21MZXZlbCAtIDEpfXB4KWAsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dCcsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25Nb3VzZU1vdmU9e2hhbmRsZU1vdXNlTW92ZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiem9vbS1jb250cm9sc1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVab29tSW59Plpvb20gSW48L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlWm9vbU91dH0+Wm9vbSBPdXQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ3VzdG9tQXBwIiwiZGF0YSIsImltYWdlVXJsIiwiaXRlbXMiLCJzZXRJdGVtcyIsIkltYWdlWm9vbSIsInpvb21MZXZlbCIsInNldFpvb21MZXZlbCIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJ4IiwieSIsImhhbmRsZVpvb21JbiIsInByZXZab29tIiwiaGFuZGxlWm9vbU91dCIsIk1hdGgiLCJtYXgiLCJoYW5kbGVNb3VzZU1vdmUiLCJlIiwibmF0aXZlRXZlbnQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwib3ZlcmZsb3ciLCJpbWciLCJzcmMiLCJhbHQiLCJ3aWR0aCIsInRyYW5zZm9ybSIsInRyYW5zaXRpb24iLCJvbk1vdXNlTW92ZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/reference/repository/imagezoom/1/page.js\n"));

/***/ })

});