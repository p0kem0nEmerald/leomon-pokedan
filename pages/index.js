import Admin from "layouts/Admin.js";
import PokemonData from "data/json/pokemon";
import React from "react";
import VideoTable from "components/Table/VideoTable";
import YouTubeData from "data/json/youtube";

export default function Videos({ videos }) {
  return <VideoTable videos={videos} />;
}

Videos.getInitialProps = async () => {
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

Videos.layout = Admin;
