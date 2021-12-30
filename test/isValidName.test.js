import assert from 'assert'
import isValidName from '../isValidName'

describe('isValidName', () => {
  it('it should get true if the name is valid', () => {
    assert.deepStrictEqual(isValidName(`O'Relly`), true)
  })

  it('it should get false if the name is not valid', () => {
    assert.deepStrictEqual(isValidName('email.@rafa.com'), false)
  })
})
