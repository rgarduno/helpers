/**
 * Find the days between 2 given days.
 * @param  {Date} date1 first date to compare.
 * @param  {Date} date2 second date to compare.
 * @return {Number}
*/
const getDaysDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)

module.exports = getDaysDif

