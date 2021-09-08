const tap = require('tap')
const { type, fetch } = require('fetch-undici')

tap.test('node gets undici cjs', async t => {
  t.equal(type, 'node.cjs')
  t.ok(fetch)
})
