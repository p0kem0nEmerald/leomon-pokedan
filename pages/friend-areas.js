/**
 * @file friend-areas
 * @author p0kem0nEmerald <https://github.com/p0kem0nEmerald>
 * @copyright エメラルドを風化させないChannel 2021
 * @license MIT
 */

import * as React from "react";

import Admin from "layouts/Admin.js";
import FriendAreaData from "data/json/friend-area";
import FriendAreaTable from "components/Table/FriendAreaTable";
import PokemonData from "data/json/pokemon";
import YouTubeData from "data/json/youtube";

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
      lookBackVideo:
        friendArea.lookBackVideoNo &&
        YouTubeData[friendArea.lookBackVideoNo - 1],
    })),
  };
};

FriendAreas.layout = Admin;
