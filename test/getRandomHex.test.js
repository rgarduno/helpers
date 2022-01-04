import assert from 'assert'
import getRandomHex from '../getRandomHex'

describe('getRandomHex', () => {
  const random = getRandomHex()

  it('it should get a random Hex value', () => {
    assert.deepStrictEqual(random, random)
  })
})
