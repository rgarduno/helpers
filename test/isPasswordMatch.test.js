import assert from 'assert'
import isPasswordMatch from '../isPasswordMatch'

describe('isPasswordMatch', () => {
  it('it should get true if the password is a match', () => {
    assert.deepStrictEqual(isPasswordMatch('12345', '12345'), true)
  })

  it('it should get false if the password is not a match', () => {
    assert.deepStrictEqual(isPasswordMatch('12345', '123'), false)
  })
})
