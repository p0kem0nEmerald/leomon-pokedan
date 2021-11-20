/**
 * @file index
 * @author p0kem0nEmerald <https://github.com/p0kem0nEmerald>
 * @copyright エメラルドを風化させないChannel 2021
 * @license MIT
 */

import * as React from "react";

import Admin from "layouts/Admin.js";
import PokemonData from "data/json/pokemon";
import VideoTable from "components/Table/VideoTable";
import YouTubeData from "data/json/youtube";

export default function Index({ videos }) {
  return <VideoTable videos={videos} />;
}

Index.getInitialProps = async () => {
  return {
    videos: YouTubeData.map((video) => ({
      ...video,
      getPokemons: PokemonData.filter(
        (pokemon) => pokemon.getVideoNo && pokemon.getVideoNo === video.no
      ),
      evoPokemons: PokemonData.filter(
        (pokemon) => pokemon.evoVideoNo && pokemon.evoVideoNo === video.no
      ),
    })),
  };
};

Index.layout = Admin;
