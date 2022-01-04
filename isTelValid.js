/**
 * Test the validity of a phone number.
 * @param  {String} value A phone number.
 * @return {Bool}
 */
const isTelValid = (value) => {
  const onlyNums = value.replace(/[^\d]/g, '')
  return onlyNums.length === 10
}

module.exports = isTelValid
