import * as React from "react";

import Admin from "layouts/Admin.js";
import FriendAreaData from "data/json/friend-area";
import FriendAreaTable from "components/Table/FriendAreaTable";
import PokemonData from "data/json/pokemon";

export default function FriendAreas({ friendAreas }) {
  return <FriendAreaTable friendAreas={friendAreas} />;
}

FriendAreas.getInitialProps = async () => {
  return {
    friendAreas: FriendAreaData.map((friendArea) => ({
      ...friendArea,
      pokemons: PokemonData.filter((pokemon) =>
        friendArea.pokemons.includes(pokemon.name)
      ),
    })),
  };
};

FriendAreas.layout = Admin;
