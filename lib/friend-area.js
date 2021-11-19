import { assertAssetPrefix } from "lib/utils";

/**
 * @summary Get the Image Source of Friend Area Icon
 * @param {Object} friendArea A Friend Area Data object
 * @return {String} URL for the Friend Area Image
 */
export function getFriendAreaImgSrc(friendArea) {
  return assertAssetPrefix(`/images/friend-areas/${friendArea.base}.png`);
}
