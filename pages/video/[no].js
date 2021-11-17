import * as React from "react";

import Admin from "layouts/Admin";
import Card from "@mui/material/Card";
import CardVideoThumbnail from "components/Cards/CardVideoThumbnail";
import DMYdate from "components/Typography/DMYdate";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import NewLineText from "components/Typography/NewLineText";
import PokemonList from "components/Pokemon/PokemonList";
import Pokemons from "data/json/pokemons";
import SectionTitle from "components/Typography/SectionTitle";
import YouTube from "react-youtube";
import YouTubeData from "data/json/youtube";

export default function Video({ video, getPokemons, evePokemons }) {
  const prevVideo = video.no - 2 >= 0 ? YouTubeData[video.no - 2] : null;
  const nextVideo =
    video.no < YouTubeData.length ? YouTubeData[video.no] : null;
  return (
    <Grid container>
      <Grid item xs={12} lg={8} xl={9}>
        <div className="ml-6 pr-6">
          {/* Vide Player */}
          <div className="aspect-w-16 aspect-h-9">
            <YouTube
              videoId={video.id}
              className="mx-auto w-full aspect-w-16 aspect-h-9"
              opts={{
                playerVars: {
                  autoplay: 1,
                },
              }}
              onReady={(evt) => {
                evt.target.playVideo();
              }}
            />
          </div>
          {/* Vide Info */}
          <Card
            className="mt-4 p-4 bg-white"
            style={{ height: "calc(100vh - 560px)" }}
          >
            <SectionTitle>{video.title}</SectionTitle>
            <div className="flex">
              <div className="flex ml-auto mr-4">
                Published at "<DMYdate>{video.published_at}</DMYdate>"
              </div>
            </div>
            <Divider />
            <div className="overflow-y-scroll h-full py-4">
              <NewLineText text={video.description} />
            </div>
          </Card>
        </div>
      </Grid>
      <Grid item xs={12} lg={4} xl={3}>
        <div className="px-4 pt-2">
          {/* Next / Previous Video */}
          <Card className="flex flex-row p-2 bg-white">
            <div className="flex flex-col flex-1">
              {prevVideo && (
                <>
                  <div className="mx-auto">
                    <SectionTitle>【前の動画】</SectionTitle>
                  </div>
                  <CardVideoThumbnail
                    id={prevVideo.id}
                    videoNo={prevVideo.no}
                    duration={prevVideo.duration}
                    overlayProps={{ className: "relative" }}
                  />
                </>
              )}
            </div>
            <div className="flex flex-col flex-1 ml-2">
              {nextVideo && (
                <>
                  <div className="mx-auto">
                    <SectionTitle>【次の動画】</SectionTitle>
                  </div>
                  <CardVideoThumbnail
                    id={nextVideo.id}
                    videoNo={nextVideo.no}
                    duration={nextVideo.duration}
                    overlayProps={{ className: "relative" }}
                  />
                </>
              )}
            </div>
          </Card>
          <Card className="p-2 mt-4 bg-white">
            <PokemonList
              pokemons={getPokemons}
              title={"ともだちになったポケモン"}
              defaultIsOpen={false}
            />
          </Card>
          <Card className="p-2 mt-4 bg-white">
            <PokemonList
              pokemons={evePokemons}
              title={"しんかしたポケモン"}
              defaultIsOpen={false}
            />
          </Card>
        </div>
      </Grid>
    </Grid>
  );
}

export async function getStaticPaths() {
  const paths = YouTubeData.map((video) => ({
    params: { no: String(video.no) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const video = YouTubeData.filter((video) => video.no == params.no)[0];
  const getPokemons = Pokemons.filter(
    (pokemon) => pokemon.getVideoNo === video.no
  );
  const evePokemons = Pokemons.filter(
    (pokemon) => pokemon.eveVideoNo === video.no
  );

  return {
    props: {
      video,
      getPokemons,
      evePokemons,
    },
  };
}

Video.layout = Admin;
