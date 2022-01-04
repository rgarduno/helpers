import assert from 'assert'
import isTelValid from '../isTelValid'

describe('isTelValid', () => {
  it('it should get true if the tel is a valid one', () => {
    assert.deepStrictEqual(isTelValid('123 456 7890'), true)
  })

  it('it should get false if the tel is not a valid one', () => {
    assert.deepStrictEqual(isTelValid('12345'), false)
  })
})
