import * as React from "react";

import Collapse from "@mui/material/Collapse";
import DraftsIcon from "@mui/icons-material/Drafts";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import PokemonIcon from "components/Pokemon/PokemonIcon";
import PropTypes from "prop-types";
import SendIcon from "@mui/icons-material/Send";
import StarBorder from "@mui/icons-material/StarBorder";

const PokemonList = ({ pokemons, title, defaultIsOpen, ...props }) => {
  const [isOpen, setIsOpen] = React.useState(defaultIsOpen);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <List
      className="w-full bg-white"
      sx={{ maxWidth: 360 }}
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
            <List component="div" disablePadding>
              <ListItemButton>
                <PokemonIcon pokemon={pokemon} />
                <ListItemText
                  primary={`${pokemon.nickname} (${pokemon.name})`}
                />
              </ListItemButton>
            </List>
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
