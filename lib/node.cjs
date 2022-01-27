const undici = require('undici')

exports.fetch = undici.fetch
exports.Headers = undici.Headers
exports.Response = undici.Response
exports.Request = undici.Request

exports.type = 'node.cjs'
