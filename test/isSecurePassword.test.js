import assert from 'assert'
import isSecurePassword from '../isSecurePassword'

describe('isSecurePassword', () => {
  it('it should get empty array of errors if the password is secure', () => {
    assert.deepStrictEqual(isSecurePassword('12R345g'), [])
  })

  it('it should get array of errors if the password is not secure', () => {
    const errors = [
      'short',
      'upper',
      'lower'
    ]

    assert.deepStrictEqual(isSecurePassword('12345'), errors)
  })
})
