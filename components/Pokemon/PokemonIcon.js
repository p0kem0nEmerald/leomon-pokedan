import * as React from "react";

import PokemonLink from "components/Link/PokemonLink";
import PropTypes from "prop-types";
import ToolTip from "@mui/material/Tooltip";

const PokemonIcon = ({ pokemon, imgProps, disableLink, ...props }) => {
  return disableLink ? (
    <ToolTip title={`${pokemon.name}（${pokemon.nickname}）`}>
      <img {...imgProps} src={`/images/sprites/${pokemon.base}.png`} />
    </ToolTip>
  ) : (
    <PokemonLink pokemon={pokemon}>
      <img {...imgProps} src={`/images/sprites/${pokemon.base}.png`} />
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
