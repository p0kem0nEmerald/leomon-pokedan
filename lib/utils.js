/**
 * @summary Convert Date to Formatted ("YYYY-MM-DD hh:mm:ss") String
 * @param {Date} dt A Date object
 * @return {String} Formatted Date String
 */
export function formatDate(dt) {
  return dt.toLocaleString("ja-JP"); // .replaceAll("/", "-");
}

/**
 * @summary Assert assetPrefix
 * @param {String} url A URL without assetPrefix
 * @return {String} URL asserted an "assetPrefix"
 */
export function assertAssetPrefix(url) {
  // return (process.env.URL_PREFIX ? `/${process.env.URL_PREFIX}` : "") + url;
  return `/leomon-pokedan${url}`;
}
