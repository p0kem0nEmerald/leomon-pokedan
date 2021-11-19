import * as React from "react";

import { combineNameNickname, getPokemonImgSrc } from "lib/pokemon";

import PokemonLink from "components/Link/PokemonLink";
import PropTypes from "prop-types";
import ToolTip from "@mui/material/Tooltip";

const PokemonIcon = ({ pokemon, imgProps, disableLink, ...props }) => {
  return disableLink ? (
    <ToolTip title={combineNameNickname(pokemon)}>
      <img {...imgProps} alt={pokemon.base} src={getPokemonImgSrc(pokemon)} />
    </ToolTip>
  ) : (
    <PokemonLink pokemon={pokemon}>
      <img {...imgProps} alt={pokemon.base} src={getPokemonImgSrc(pokemon)} />
    </PokemonLink>
  );
};

PokemonIcon.propTypes = {
  pokemon: PropTypes.object.isRequired,
  imgProps: PropTypes.object,
  disableLink: PropTypes.bool,
};

PokemonIcon.defaultProps = {
  imgProps: {},
  disableLink: false,
};

export default PokemonIcon;
