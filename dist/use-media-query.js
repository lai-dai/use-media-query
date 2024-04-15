"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/use-media-query.ts
var use_media_query_exports = {};
__export(use_media_query_exports, {
  mediaQuerySizeMap: () => mediaQuerySizeMap,
  useMediaQuery: () => useMediaQuery
});
module.exports = __toCommonJS(use_media_query_exports);
var import_react = require("react");
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var mediaQuerySizeMap = {
  xs: "(max-width: 639px)",
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)"
};
var matchMedia = (query) => {
  if (canUseDOM) {
    return window.matchMedia(query);
  }
  return {
    matches: false,
    media: query
  };
};
function useMediaQuery(query) {
  const queries = Array.isArray(query) ? query : [query];
  const mediaQueries = queries.map(
    (query2) => mediaQuerySizeMap?.[query2] || query2
  );
  const [mediaQueryArray, setMediaQueryArray] = (0, import_react.useState)(
    () => mediaQueries.map((query2) => matchMedia(query2).matches)
  );
  (0, import_react.useEffect)(() => {
    const list = mediaQueries.map((query2) => matchMedia(query2));
    const handleChange = (event) => {
      const index = list.findIndex((item) => item.media === event.media);
      if (index !== -1) {
        setMediaQueryArray((prev) => {
          const result = [...prev];
          result[index] = event.matches;
          return result;
        });
      }
    };
    list.forEach((query2) => {
      query2.addEventListener("change", handleChange);
    });
    return () => list.forEach((query2) => {
      query2.removeEventListener("change", handleChange);
    });
  }, [mediaQueries]);
  return Array.isArray(query) ? mediaQueryArray : mediaQueryArray[0];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mediaQuerySizeMap,
  useMediaQuery
});
//# sourceMappingURL=use-media-query.js.map