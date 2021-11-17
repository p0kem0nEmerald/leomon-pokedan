import Admin from "layouts/Admin.js";
import PokemonTable from "components/Table/PokemonTable";
import Pokemons from "data/json/pokemons";
import React from "react";

// components

// layout for page

export default function Tables() {
  return (
    <>
      <PokemonTable pokemons={Pokemons} />
    </>
  );
}

Tables.layout = Admin;
