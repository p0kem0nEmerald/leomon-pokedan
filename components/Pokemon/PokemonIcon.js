import * as React from "react";

import PokemonLink from "components/Link/PokemonLink";

const PokemonIcon = ({ pokemon, imgProps, ...props }) => {
  return (
    <PokemonLink pokemon={pokemon}>
      <img {...imgProps} src={`/images/sprites/${pokemon.base}.png`} />
    </PokemonLink>
  );
};
export default PokemonIcon;
