import assert from 'assert'
import isValidEmail from '../isValidEmail'

describe('isValidEmail', () => {
  it('it should get true if the email is valid', () => {
    assert.deepStrictEqual(isValidEmail('test@email.com'), true)
  })

  it('it should get false if the email is not valid', () => {
    assert.deepStrictEqual(isValidEmail('email.@rafa.com'), false)
  })
})
