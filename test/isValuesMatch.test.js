import assert from 'assert'
import isValuesMatch from '../isValuesMatch'

describe('isValuesMatch', () => {
  it('it should get true if the value is a match', () => {
    assert.deepStrictEqual(isValuesMatch('Value A', 'Value A'), true)
  })

  it('it should get false if the value is not a match', () => {
    assert.deepStrictEqual(isValuesMatch('Value B', 'Value A'), false)
  })
})
