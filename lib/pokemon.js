import { assertAssetPrefix } from "lib/utils";

/**
 * @summary Get the Image Source of Pokemon
 * @param {Object} pokemon A Pokemon Data object
 * @return {String} URL for the Pokemon Image
 */
export function getPokemonImgSrc(pokemon) {
  return assertAssetPrefix(`/images/sprites/${pokemon.base}.png`);
}

/**
 * @summary Combine the Name and Nickname of the Pokemon
 * @param {Object} pokemon A Pokemon Data object
 * @return {String} Combined Pokemon Name
 */
export function combineNameNickname(pokemon) {
  return `${pokemon.name}（${pokemon.nickname}）`;
}

/**
 * @summary Combine the Name and Nickname of the Pokemon
 * @param {Object} pokemon A Pokemon Data object
 * @return {String} Combined Pokemon Name
 */
export function separateNameNickname(name) {
  return `${pokemon.name}（${pokemon.nickname}）`;
}
