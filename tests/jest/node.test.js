/* eslint-env jest */

const { fetch, type } = require('fetch-undici')

console.log(require('fetch-undici'))

test('node in cjs', () => {
  expect(type).toBe('node.cjs')
  expect(fetch).toBeDefined()
})
