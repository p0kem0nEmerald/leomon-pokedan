import * as React from "react";

import PokemonIcon from "components/Pokemon/PokemonIcon";
import PropTypes from "prop-types";

const PokemonIcons = ({ pokemons, iconProps, ...props }) => (
  <div className="flex flex-wrap items-center justify-center" {...props}>
    {pokemons.map((pokemon) => (
      <PokemonIcon
        pokemon={pokemon}
        disableLink={false}
        className="flex flex-1 m-1"
        {...iconProps}
        key={pokemon.base}
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
