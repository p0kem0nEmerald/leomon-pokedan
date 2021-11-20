/**
 * @file videos
 * @author p0kem0nEmerald <https://github.com/p0kem0nEmerald>
 * @copyright エメラルドを風化させないChannel 2021
 * @license MIT
 */

import * as React from "react";

import Admin from "layouts/Admin.js";
import CardVideo from "components/Cards/CardVideo";
import Grid from "@mui/material/Grid";
import PokemonAutocomplete from "components/Pokemon/PokemonAutocomplete";
import PokemonData from "data/json/pokemon";
import YouTubeData from "data/json/youtube";

export default function Videos({ videos }) {
  const [filterText, setFilterText] = React.useState("");
  return (
    <div className="flex flex-col relative bg-white p-3">
      <PokemonAutocomplete
        inputValue={filterText}
        setInputValue={setFilterText}
        textFieldProps={{
          label: "「ポケモン」か「なまえ」を入力",
          inputProps: {
            className: "focus:ring-0 bg-gray-100",
          },
        }}
        className="ml-1 w-full px-1"
      />
      <div className="flex flex-wrap justify-start m-2">
        <Grid container>
          {(filterText.length > 0
            ? videos.filter((video) =>
                video.getPokemons
                  .concat(video.evoPokemons)
                  .some((pokemon) => pokemon.name.includes(filterText))
              )
            : videos
          ).map((video) => (
            <Grid item xs={6} md={4} lg={3} key={video.id}>
              <CardVideo video={video} className="m-1" />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
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
