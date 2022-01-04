import assert from 'assert'
import shuffleArray from '../shuffleArray'

describe('shuffleArray', () => {
  const arr = [1,2,3,4,5]
  const shuffle = shuffleArray(arr)

  it('it should get a shuffle values from the array', () => {
    assert.deepStrictEqual(shuffle, shuffle)
  })
})
