const undici = require('undici')

exports.fetch = globalThis?.fetch ?? undici.fetch
exports.Headers = globalThis?.Headers ?? undici.Headers
exports.Response = globalThis?.Response ?? undici.Response
exports.Request = globalThis?.Request ?? undici.Request

exports.type = 'node.cjs'
exports.native = globalThis?.fetch != null
