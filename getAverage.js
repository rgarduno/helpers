/**
 * Find the average between multiple numbers.
 * @param  {Array} args values of numbers to get the average.
 * @return {Number}
*/
const getAverage = (...args) => args.reduce((a, b) => a + b) / args.length

module.exports = getAverage
