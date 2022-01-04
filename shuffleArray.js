/**
 * Shuffle an array.
 * @param  {Array} arr array to shuffle.
 * @return {Array}
 */
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random())

module.exports = shuffleArray
