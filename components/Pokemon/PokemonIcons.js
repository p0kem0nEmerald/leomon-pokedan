/**
 * @file Pokemonicons Components
 * @author p0kem0nEmerald <https://github.com/p0kem0nEmerald>
 * @copyright エメラルドを風化させないChannel 2021
 * @license MIT
 */
 
import * as React from "react";

import PokemonIcon from "components/Pokemon/PokemonIcon";
import PropTypes from "prop-types";

const PokemonIcons = ({ pokemons, iconProps, ...props }) => (
  <div className="flex flex-wrap items-center justify-center" {...props}>
    {pokemons.map((pokemon) => (
      <PokemonIcon
        key={pokemon.base}
        pokemon={pokemon}
        disableLink={false}
        className="flex flex-1 m-1"
        {...iconProps}
      />
    ))}
  </div>
);

PokemonIcons.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object),
  iconProps: PropTypes.object,
};

PokemonIcons.defaultProps = {
  iconProps: {},
};

export default PokemonIcons;
