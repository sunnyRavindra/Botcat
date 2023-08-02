"use strict";
exports.id = 8757;
exports.ids = [8757];
exports.modules = {

/***/ 8757:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ Mermaid)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var mermaid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1024);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([mermaid__WEBPACK_IMPORTED_MODULE_2__]);
mermaid__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Mermaid({ chart }) {
  const id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
  const [svg, setSvg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const htmlElement = document.documentElement;
    const mutationObserver = new MutationObserver(renderChart);
    mutationObserver.observe(htmlElement, { attributes: true });
    renderChart();
    return () => {
      mutationObserver.disconnect();
    };
    async function renderChart() {
      const isDarkTheme = htmlElement.classList.contains("dark") || htmlElement.attributes.getNamedItem("data-theme")?.value === "dark";
      const mermaidConfig = {
        startOnLoad: false,
        securityLevel: "loose",
        fontFamily: "inherit",
        themeCSS: "margin: 1.5rem auto 0;",
        theme: isDarkTheme ? "dark" : "default"
      };
      try {
        mermaid__WEBPACK_IMPORTED_MODULE_2__["default"].initialize(mermaidConfig);
        const { svg: svg2 } = await mermaid__WEBPACK_IMPORTED_MODULE_2__["default"].render(
          // strip invalid characters for `id` attribute
          id.replaceAll(":", ""),
          chart
        );
        setSvg(svg2);
      } catch (error) {
        console.error("Error while rendering mermaid", error);
      }
    }
  }, []);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { dangerouslySetInnerHTML: { __html: svg } });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;