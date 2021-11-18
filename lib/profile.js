/**
 * @summary Get the Image Source of Profile Icon
 * @param {Object} profile A Profile Data object
 * @return {String} URL for the Profile Image
 */
export function getProfileImgSrc(profile) {
  return `/img/youtube/profile/${profile.name}.jpg`;
}
