import Admin from "layouts/Admin.js";
import PokemonData from "data/json/pokemon";
import PokemonTable from "components/Table/PokemonTable";
import React from "react";

export default function Pokemons() {
  return <PokemonTable pokemons={PokemonData} />;
}

Pokemons.layout = Admin;
