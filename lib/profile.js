import { assertAssetPrefix } from "lib/utils";

/**
 * @summary Get the Image Source of Profile Icon
 * @param {Object} profile A Profile Data object
 * @return {String} URL for the Profile Image
 */
export function getProfileImgSrc(profile) {
  return assertAssetPrefix(`/img/youtube/profile/${profile.name}.jpg`);
}

/**
 * @summary Get the YouTube Cover Image Source of Profile Icon
 * @param {Object} profile A Profile Data object
 * @return {String} URL for the YouTube Cover Image
 */
export function getProfileCoverImgSrc(profile) {
  return assertAssetPrefix(`/img/youtube/cover/${profile.name}.jpeg`);
}
