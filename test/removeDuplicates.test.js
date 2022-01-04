import assert from 'assert'
import removeDuplicates from '../removeDuplicates'

describe('removeDuplicates', () => {
  const arr = [1,12,34,56,78,90,12,56,90]

  it('it should get the new array without the duplicate values', () => {
    const response = [1,12,34,56,78,90]
    assert.deepStrictEqual(removeDuplicates(arr), response)
  })
})
