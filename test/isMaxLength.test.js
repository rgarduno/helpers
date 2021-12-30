import assert from 'assert'
import isMaxLength from '../isMaxLength'

describe('isMaxLength', () => {

  const values = {
    name : 'Rafael',
    lastName: 'Garduno'
  }

  const message = 'length of the field is greater than maxLength attribute'

  it('it should get an Error if field is greater than maxLength ', () => {
    assert.throws(isMaxLength, Error, message)
  })

  it('it should return undefined in case field is not greater than maxLength attribute', () => {
    assert.deepStrictEqual(isMaxLength('lastName', values, 10, message), undefined)
  })
})
