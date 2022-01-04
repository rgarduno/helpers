import assert from 'assert'
import isDateValid from '../isDateValid'

describe('isDateValid', () => {
  const date = new Date('Tue Jan 04 2022 12:45:29 GMT-0600 (GMT-06:00)')

  it('it should get true response if the date is valid', () => {
    assert.deepStrictEqual(isDateValid(date), true)
  })

  it('it should get false response if the date is not valid', () => {
    assert.deepStrictEqual(isDateValid(''), false)
  })
})
