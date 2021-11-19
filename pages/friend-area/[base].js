import * as React from "react";

import Admin from "layouts/Admin.js";
import FriendAreaData from "data/json/friend-area";
import FriendAreaTable from "components/Table/FriendAreaTable";
import PokemonData from "data/json/pokemon";

export default function FriendArea({ friendArea }) {
  return <>{friendArea.name}</>;
}

export async function getStaticPaths() {
  const paths = FriendAreaData.map((friendArea) => ({
    params: { base: friendArea.base },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const friendArea = FriendAreaData.find(
    (friendArea) => friendArea.base == params.base
  );
  return {
    props: {
      friendArea: {
        ...friendArea,
        pokemons: PokemonData.filter((pokemon) =>
          friendArea.pokemons.includes(pokemon.name)
        ),
      },
    },
  };
}

FriendArea.layout = Admin;
