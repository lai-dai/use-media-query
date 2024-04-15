// src/use-media-query.ts
import { useEffect, useState } from "react";
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
  const [mediaQueryArray, setMediaQueryArray] = useState(
    () => mediaQueries.map((query2) => matchMedia(query2).matches)
  );
  useEffect(() => {
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
export {
  mediaQuerySizeMap,
  useMediaQuery
};
//# sourceMappingURL=index.mjs.map