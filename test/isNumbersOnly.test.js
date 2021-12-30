import assert from 'assert'
import isNumbersOnly from '../isNumbersOnly'

describe('isNumbersOnly', () => {
  it('it should get true if the value its only numbers', () => {
    assert.deepStrictEqual(isNumbersOnly(12345), true)
  })

  it('it should get false if the value is not numbers only', () => {
    assert.deepStrictEqual(isNumbersOnly('This is a String'), false)
  })
})
