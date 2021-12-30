/**
 * Test the validity of a phone number.
 * @param  {String} value A phone number.
 * @return {Bool}
 */
const isValidTel = (value) => {
  const onlyNums = value.replace(/[^\d]/g, '')
  return onlyNums.length === 10
}

module.exports = isValidTel
