import assert from 'assert'
import isEmailValid from '../isEmailValid'

describe('isEmailValid', () => {
  it('it should get true if the email is valid', () => {
    assert.deepStrictEqual(isEmailValid('test@email.com'), true)
  })

  it('it should get false if the email is not valid', () => {
    assert.deepStrictEqual(isEmailValid('email.@rafa.com'), false)
  })
})
