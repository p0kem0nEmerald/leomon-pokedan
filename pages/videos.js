import * as React from "react";

import Admin from "layouts/Admin.js";
import Box from "@mui/material/Box";
import CardVideo from "components/Cards/CardVideo";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import PokemonAutocomplete from "components/Pokemon/PokemonAutocomplete";
import PokemonData from "data/json/pokemon";
import Switch from "@mui/material/Switch";
import YouTubeData from "data/json/youtube";

export default function Videos({ videos }) {
  const [filterText, setFilterText] = React.useState("");
  return (
    <div className="flex flex-col relative">
      <PokemonAutocomplete
        inputValue={filterText}
        setInputValue={setFilterText}
        textFieldProps={{
          label: "「ポケモン」か「なまえ」を入力",
          inputProps: {
            className: "focus:ring-0 bg-gray-100",
          },
          // InputProps: {
          //   startAdornment: (
          //     <InputAdornment position="start">
          //       <SearchIcon />
          //     </InputAdornment>
          //   ),
          // },
        }}
        className="ml-1 w-full px-1"
      />
      <div className="flex flex-wrap justify-start m-2">
        <Grid container>
          {videos.map(
            (video) =>
              video.getPokemons
                .concat(video.evoPokemons)
                .some((pokemon) => pokemon.name.includes(filterText)) && (
                <Grid item xs={6} md={4} lg={3}>
                  <CardVideo key={video.base} video={video} className="m-1" />
                </Grid>
              )
          )}
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
