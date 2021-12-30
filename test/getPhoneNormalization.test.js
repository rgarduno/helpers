import assert from 'assert'
import getPhoneNormalization from '../getPhoneNormalization'

describe('getPhoneNormalization', () => {
  it('it should get the normalization of a telephone number', () => {
    assert.deepStrictEqual(getPhoneNormalization('123 456-7890'), '(123) 456-7890')
  })

  it('it should get empty string if the value is not a phone number', () => {
    assert.deepStrictEqual(getPhoneNormalization('don"t a number'), '')
  })

  it('it should get empty string if the value is not introduced', () => {
    assert.deepStrictEqual(getPhoneNormalization(''), '')
  })
})
