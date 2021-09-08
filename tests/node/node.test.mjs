import tap from 'tap'
import { type, fetch } from 'fetch-undici'

tap.test('node esm gets undici cjs', async t => {
  t.equal(type, 'node.cjs')
  t.ok(fetch)
})
