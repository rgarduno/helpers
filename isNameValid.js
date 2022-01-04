/**
 * Test the validity of the name and make sure it does not use special characters
 * except for characters like ' for O'Relly
 * @param  {String} value A name.
 * @return {Bool}
 */
const isNameValid = (value) => {
  const nameRe = /^[a-z ,.'-]+$/i
  return nameRe.test(value)
}

module.exports = isNameValid
