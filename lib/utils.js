/**
 * @summary Convert Date to Formatted ("YYYY-MM-DD hh:mm:ss") String
 * @param {Date} dt A Date object
 * @return {String} Formatted Date String
 */
export function formatDate(dt) {
  return dt.toLocaleString("ja-JP").replaceAll("/", "-");
}
