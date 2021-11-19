import * as React from "react";

import Admin from "layouts/Admin.js";
import Card from "@mui/material/Card";
import FriendAreaData from "data/json/friend-area";
import FriendAreaProgressTable from "components/Table/FriendAreaProgressTable";
import FriendsChart from "components/Charts/FriendsChart";
import PokemonData from "data/json/pokemon";
import Title from "components/Typography/Title";

export default function Analysis({
  friendAreas,
  curtFriendsNum,
  totalFriendsNum,
}) {
  return (
    <div className="">
      <Title>【アヒル団の団員数】</Title>
      <Card className="p-2 m-2">
        <FriendsChart />
      </Card>
      <Title>【進捗状況】（{`${curtFriendsNum} / ${totalFriendsNum}`}）</Title>
      <FriendAreaProgressTable className="m-2" friendAreas={friendAreas} />
    </div>
  );
}

Analysis.getInitialProps = async () => {
  return {
    curtFriendsNum: PokemonData.filter((pokemon) => pokemon.nickname.length > 0)
      .length,
    totalFriendsNum: PokemonData.length,
    friendAreas: FriendAreaData.map((friendArea) => {
      const pokemons = PokemonData.filter((pokemon) =>
        friendArea.pokemons.includes(pokemon.name)
      );
      return {
        ...friendArea,
        friendPokemons: pokemons.filter(
          (pokemon) => pokemon.nickname.length > 0
        ),
        othersPokemons: pokemons.filter(
          (pokemon) => pokemon.nickname.length === 0
        ),
      };
    }),
  };
};

Analysis.layout = Admin;
