/**
 * retrieve query params from a URL.
 * @param  {String} URL value to get the params.
 * @return {String}
*/
const getQueryParams = (URL) => {
  URL = JSON.parse(`{"${decodeURI(URL.split('?')[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`)
  return JSON.stringify(URL)
}

module.exports = getQueryParams
