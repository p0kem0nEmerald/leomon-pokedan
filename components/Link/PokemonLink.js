/**
 * @file Pokemonlink Components
 * @author p0kem0nEmerald <https://github.com/p0kem0nEmerald>
 * @copyright エメラルドを風化させないChannel 2021
 * @license MIT
 */
 
import * as React from "react";

import Link from "next/link";
import PropTypes from "prop-types";
import Tooltip from "@mui/material/Tooltip";
import { combineNameNickname } from "lib/pokemon";

const PokemonLink = ({ children, pokemon, ...props }) => {
  return (
    <div {...props}>
      <Link href={`/pokemon/${pokemon.base}`}>
        <a>
          <Tooltip
            title={`「${combineNameNickname(pokemon)}」のページに移動する。`}
          >
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
