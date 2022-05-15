const fetchSource = globalThis ?? require('undici')

exports.fetch = fetchSource?.fetch
exports.Headers = fetchSource?.Headers
exports.Response = fetchSource?.Response
exports.Request = fetchSource?.Request

exports.type = 'node.cjs'
exports.native = globalThis?.fetch != null
