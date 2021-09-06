# undici-fetch
[![Actions Status](https://github.com/bcomnes/undici-fetch/workflows/tests/badge.svg)](https://github.com/bcomnes/undici-fetch/actions)

Isomorphic exports of `fetch`, providing [`window.fetch`][br] in the browser, and [`undici.fetch`][ud] in node.js.

```
npm install undici-fetch
```

## Usage


``` js
import { fetch } from 'undici-fetch';
```

## Why

If you wan't to write an API client of some kind, that would be useful in the browser or in Node.js, `undici-fetch` provides the best implementation of `fetch` for the environment it's used in.

## How

`undici-fetch` works by utilizing environment specific exports fields so that you can have dependency injection at the built-in node module resolver layer.
It supports the following export fields:

- `main` (cjs node)
- `browser` (cjs browser)
- `exports.node` (cjs node)
- `exports.browser` (esm browser)

## License

MIT

[br]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[ud]: https://github.com/nodejs/undici
