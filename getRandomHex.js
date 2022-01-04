/**
 * You can generate random hex colors with Math.random and padEnd properties.
 * @return {String}
*/
const getRandomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')}`

module.exports = getRandomHex
