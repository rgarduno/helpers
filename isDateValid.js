/**
 * test if a given date is valid or not.
 * @param  {Date} val Date to check if is valid.
 * @return {Bool}
*/
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf())

module.exports = isDateValid
