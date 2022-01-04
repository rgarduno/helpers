import assert from 'assert'
import getDayOfYear from '../getDayOfYear'

describe('getDayOfYear', () => {
  it('it should get the present day of the year', () => {
    assert.deepStrictEqual(getDayOfYear(new Date('Tue Jan 04 2022 12:45:29 GMT-0600 (GMT-06:00)')), 4)
  })
})
