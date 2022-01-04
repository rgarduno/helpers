import assert from 'assert'
import getQueryParams from '../getQueryParams'

describe('getQueryParams', () => {
  const URL = 'goole.com?search=easy&page='

  it('it should get the query params into an object', () => {
    assert.deepStrictEqual(getQueryParams(URL), '{"search":"easy","page":""}')
  })
})
