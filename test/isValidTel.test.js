import assert from 'assert'
import isValidTel from '../isValidTel'

describe('isValidTel', () => {
  it('it should get true if the tel is a valid one', () => {
    assert.deepStrictEqual(isValidTel('123 456 7890'), true)
  })

  it('it should get false if the tel is not a valid one', () => {
    assert.deepStrictEqual(isValidTel('12345'), false)
  })
})
