/**
 * Find which is the day by a given date.
 * @param  {Date} date Date to pass in order to find the day of that date.
 * @return {Number}
*/
const getDayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)

module.exports = getDayOfYear
