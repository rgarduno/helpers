import assert from 'assert'
import isNameValid from '../isNameValid'

describe('isNameValid', () => {
  it('it should get true if the name is valid', () => {
    assert.deepStrictEqual(isNameValid(`O'Relly`), true)
  })

  it('it should get false if the name is not valid', () => {
    assert.deepStrictEqual(isNameValid('email.@rafa.com'), false)
  })
})
