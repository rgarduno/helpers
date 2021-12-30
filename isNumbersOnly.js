/**
 * Test to see if value only contains numbers.
 * @return {Bool}              True if it is only numbers, otherwise false.
 */
const isNumbersOnly = (value) => {
  const reg = new RegExp(/^\d+$/)
  return reg.test(value)
}

module.exports = isNumbersOnly
