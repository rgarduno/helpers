import assert from 'assert'
import getDaysDif from '../getDaysDif'

describe('getDaysDif', () => {
  const firstDate = new Date('Tue Jan 01 2022 12:45:29 GMT-0600 (GMT-06:00)')
  const secondDate = new Date('Tue Jan 04 2022 12:45:29 GMT-0600 (GMT-06:00)')

  it('it should get the difference of days between two dates', () => {
    assert.deepStrictEqual(getDaysDif(firstDate, secondDate), 3)
  })
})
