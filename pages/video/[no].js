/**
 * @file [no]
 * @author p0kem0nEmerald <https://github.com/p0kem0nEmerald>
 * @copyright エメラルドを風化させないChannel 2021
 * @license MIT
 */

import * as React from "react";

import Admin from "layouts/Admin";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardVideoThumbnail from "components/Cards/CardVideoThumbnail";
import DMYdate from "components/Typography/DMYdate";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import NewLineText from "components/Typography/NewLineText";
import PokemonList from "components/Pokemon/PokemonList";
import Pokemons from "data/json/pokemon";
import SectionTitle from "components/Typography/SectionTitle";
import YouTube from "react-youtube";
import YouTubeData from "data/json/youtube";

const NextPrevVideo = ({ prevVideo, nextVideo, ...props }) => (
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
);

const VideoSideInfo = ({
  prevVideo,
  nextVideo,
  getPokemons,
  evoPokemons,
  ...props
}) => (
  <div {...props}>
    {/* Next / Previous Video */}
    <NextPrevVideo prevVideo={prevVideo} nextVideo={nextVideo} />
    {/* Pokemon List */}
    <Card className="p-2 mt-4 bg-white">
      <PokemonList
        pokemons={getPokemons}
        title={"ともだちになったポケモン"}
        defaultIsOpen={false}
      />
    </Card>
    <Card className="p-2 mt-4 bg-white">
      <PokemonList
        pokemons={evoPokemons}
        title={"しんかしたポケモン"}
        defaultIsOpen={false}
      />
    </Card>
  </div>
);

export default function Video({ video, getPokemons, evoPokemons }) {
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
          <Box component="div" sx={{ display: { xs: "block", lg: "none" } }}>
            <VideoSideInfo
              prevVideo={prevVideo}
              nextVideo={nextVideo}
              getPokemons={getPokemons}
              evoPokemons={evoPokemons}
              className="pt-2"
            />
          </Box>
          {/* Vide Info */}
          <Card className="mt-4 p-4 bg-white">
            <SectionTitle>{video.title}</SectionTitle>
            <div className="flex">
              <div className="flex ml-auto mr-4">
                Published at <DMYdate>{video.published_at}</DMYdate>
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
        <Box component="div" sx={{ display: { xs: "none", lg: "block" } }}>
          <VideoSideInfo
            prevVideo={prevVideo}
            nextVideo={nextVideo}
            getPokemons={getPokemons}
            evoPokemons={evoPokemons}
            className="px-4 pt-2"
          />
        </Box>
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
  const evoPokemons = Pokemons.filter(
    (pokemon) => pokemon.evoVideoNo === video.no
  );

  return {
    props: {
      video,
      getPokemons,
      evoPokemons,
    },
  };
}

Video.layout = Admin;
