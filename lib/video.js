/**
 * @summary Get the Thumbnail Image Source of YouTube Video.
 * @param {Object} video A Video Data object
 * @return {String} URL for the Thumbnail Image.
 */
export function getVideoThumbSrc(video) {
  return `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`;
}
