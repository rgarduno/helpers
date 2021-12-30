/**
 * Test to see if two emails are the same ignoring case.
 * @param  {String} email        Email A
 * @param  {String} confirmEmail Email B
 * @return {Bool}              True if they match (ignoring case), otherwise false.
 */
const isEmailsMatch = (email, confirmEmail) => email.toLowerCase() === confirmEmail.toLowerCase()

module.exports = isEmailsMatch
