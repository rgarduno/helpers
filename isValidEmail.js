/**
 * Test the validity of an email address.
 * @param  {String} value An email address.
 * @return {Bool}
 */
const isValidEmail = (value) => {
  const emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return emailRe.test(value)
}

module.exports = isValidEmail
