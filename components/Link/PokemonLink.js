import * as React from "react";

import Link from "next/link";
import PropTypes from "prop-types";
import Tooltip from "@mui/material/Tooltip";

const PokemonLink = ({ children, pokemon, ...props }) => {
  return (
    <div {...props}>
      <Link href={`/pokemon/${pokemon.base}`}>
        <a>
          <Tooltip title={`「${pokemon.name}」のページに移動する。`}>
            <span>{children}</span>
          </Tooltip>
        </a>
      </Link>
    </div>
  );
};

PokemonLink.propTypes = {
  children: PropTypes.node,
  pokemon: PropTypes.object,
};

PokemonLink.defaultProps = {};

export default PokemonLink;
