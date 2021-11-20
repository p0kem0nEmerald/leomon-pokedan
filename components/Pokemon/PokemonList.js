/**
 * @file Pokemonlist Components
 * @author p0kem0nEmerald <https://github.com/p0kem0nEmerald>
 * @copyright エメラルドを風化させないChannel 2021
 * @license MIT
 */
 
import * as React from "react";

import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import PokemonIcon from "components/Pokemon/PokemonIcon";
import PokemonLink from "components/Link/PokemonLink";
import PropTypes from "prop-types";

const PokemonList = ({ pokemons, title, defaultIsOpen, ...props }) => {
  const [isOpen, setIsOpen] = React.useState(defaultIsOpen);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <List
      className="w-full bg-white"
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={title} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        {pokemons.map((pokemon) => {
          return (
            <PokemonLink pokemon={pokemon} key={pokemon.base}>
              <List component="div" disablePadding>
                <ListItemButton>
                  <PokemonIcon
                    pokemon={pokemon}
                    imgProps={{ className: "w-8 mr-4 m-auto" }}
                    disableLink={true}
                  />
                  <ListItemText
                    key={pokemon.base}
                    primary={`${pokemon.nickname} (${pokemon.name})`}
                  />
                </ListItemButton>
              </List>
            </PokemonLink>
          );
        })}
      </Collapse>
    </List>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.node,
  defaultIsOpen: PropTypes.bool,
};

PokemonList.defaultProps = {
  title: "ポケモン",
  defaultIsOpen: false,
};

export default PokemonList;
