import assert from 'assert'
import getAverage from '../getAverage'

describe('getAverage', () => {
  it('it should get the average from a list of numbers', () => {
    assert.deepStrictEqual(getAverage(1,2,3,4), 2.5)
  })

  it('it should get NaN if the value is not a number', () => {
    assert.deepStrictEqual(getAverage('a','b','c'), NaN)
  })
})
