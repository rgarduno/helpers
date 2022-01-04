/**
 * You can remove a duplicate values from an array.
 * @param  {Array} arr Date to check if is valid.
 * @return {Array}
*/
const removeDuplicates = (arr) => [...new Set(arr)]

module.exports = removeDuplicates
