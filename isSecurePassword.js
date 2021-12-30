/**
 * Perform validation checks on a potential new password.
 * @param  {String} value A password candidate
 * @return {array}  A list of error codes.  If the array length is 0, then there were no errors.
 */
const isSecurePassword = (value) => {
  const errors = []

  // must be at least 7 characters in length
  if (value.length < 7) {errors.push('short')}

  // cannot be longer than 20 characters
  if (value.length > 20) {errors.push('long')}

  // spaces not allowed
  if (/\s/.test(value)) {errors.push('space')}

  // needs at least one upper character
  if (!/[A-Z]/.test(value)) {errors.push('upper')}

  // needs at least one lower character
  if (!/[a-z]/.test(value)) {errors.push('lower')}

  // needs at least one numeric character
  if (!/[0-9]/.test(value)) {errors.push('number')}

  return errors
}

module.exports = isSecurePassword
