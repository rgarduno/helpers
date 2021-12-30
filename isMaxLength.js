/**
 * Test to validate if length of the field is greater than maxLength attribute.
 * @param  {String} key        Name of field to be validated
 * @param  {Object} values      Object with the values returned of redux-form
 * @param  {Number} maxLegth    Number than indicate the maximum value of maxLength attribute
 * @param  {String} message     String with the custom error message
 * @throws {Error}              If the values length is greater than maxLength
 */
const isMaxLength = (key, values, maxLegth, message) => {
  if (values[key] && values[key].length > maxLegth) {
    throw new Error(message)
  }
}

module.exports = isMaxLength
