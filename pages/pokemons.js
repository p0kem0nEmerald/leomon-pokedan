/**
 * @file pokemons
 * @author p0kem0nEmerald <https://github.com/p0kem0nEmerald>
 * @copyright エメラルドを風化させないChannel 2021
 * @license MIT
 */

import * as React from "react";

import Admin from "layouts/Admin.js";
import PokemonData from "data/json/pokemon";
import PokemonTable from "components/Table/PokemonTable";

export default function Pokemons() {
  return <PokemonTable pokemons={PokemonData} />;
}

Pokemons.layout = Admin;
