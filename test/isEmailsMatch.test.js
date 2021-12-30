import assert from 'assert'
import isEmailsMatch from '../isEmailsMatch'

describe('isEmailsMatch', () => {
  it('it should get true if the email is a match', () => {
    assert.deepStrictEqual(isEmailsMatch('test@email.com', 'test@email.com'), true)
  })

  it('it should get false if the email is not a match', () => {
    assert.deepStrictEqual(isEmailsMatch('email.@rafa.com', 'test@email.com'), false)
  })
})
