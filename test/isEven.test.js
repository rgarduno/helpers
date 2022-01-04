import assert from 'assert'
import isEven from '../isEven'

describe('isEven', () => {
  it('it should get true if the number is even', () => {
    assert.deepStrictEqual(isEven(2), true)
  })

  it('it should get false if the number is not even', () => {
    assert.deepStrictEqual(isEven(3), false)
  })
})
