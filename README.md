# useMediaQuery

## how to use this

1. install dependencies

```
npm i github:lai-dai/use-media-query
```

2. use

```js
const [md, lg] = useMediaQuery(["md", "lg"]);
// or
const md = useMediaQuery("md");

// or custom
const [isWide, isSmall] = useMediaQuery(["(min-width: 1024px)", "(max-width: 576px)"]);
// or custom
const isMobile = useMediaQuery("(max-width: 576px)");

// -> return type boolean | boolean[]
```
