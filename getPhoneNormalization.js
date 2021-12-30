/**
 * Format the appearance of a phone number in real-time.
 * @param  {String} value A phone number typed in by a human.
 * @return {String}       A formatted version of the phone number. (123) 456-7890
 */
const getPhoneNormalization = (value) => {
  if (!value) {return value}
  const nums = value.replace(/[^\d]/g, '')
  if (nums.length <= 2) {return `${nums}`}
  if (nums.length <= 5) {return `(${nums.slice(0, 3)}) ${nums.slice(3)}`}
  return `(${nums.slice(0, 3)}) ${nums.slice(3, 6)}-${nums.slice(6, 10)}`
}

module.exports = getPhoneNormalization
