declare const mediaQuerySizeMap: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
};
/**
 * React hook that tracks state of a CSS media query
 */
declare function useMediaQuery(
/**
 * xs: "(max-width: 639px)" |
 * sm: "(min-width: 640px)" |
 * md: "(min-width: 768px)" |
 * lg: "(min-width: 1024px)" |
 * xl: "(min-width: 1280px)" |
 * "2xl": "(min-width: 1536px)" |
 */
query: string | (keyof typeof mediaQuerySizeMap)[]): any;
declare function useMediaQuery(query: keyof typeof mediaQuerySizeMap | string[]): any;

export { mediaQuerySizeMap, useMediaQuery };
