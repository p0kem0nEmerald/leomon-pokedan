import * as React from "react";

import { combineNameNickname, getPokemonImgSrc } from "lib/pokemon";

import Admin from "layouts/Admin.js";
import CardFriendAreaThumbnail from "components/Cards/CardFriendAreaThumbnail";
import CardVideoThumbnail from "components/Cards/CardVideoThumbnail";
import FriendAreaData from "data/json/friend-area";
import FriendAreaLink from "components/Link/FriendAreaLink";
import PokemonData from "data/json/pokemon";
import SectionTitle from "components/Typography/SectionTitle";
import YouTubeData from "data/json/youtube";

export default function Pokemon({ pokemon }) {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-10">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={getPokemonImgSrc(pokemon)}
                  width={100}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              {combineNameNickname(pokemon)}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <FriendAreaLink friendArea={pokemon.friendArea}>
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                {pokemon.friendArea.name}
              </FriendAreaLink>
              <div className="flex flex-wrap justify-center">
                <div className="px-4">
                  <CardFriendAreaThumbnail friendArea={pokemon.friendArea} />
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 border-t border-blueGray-200 text-center">
            <div className="flex flex-row flex-wrap justify-center">
              {pokemon.getVideo && (
                <div className="flex flex-1 text-center mx-4">
                  <div className="mx-auto">
                    <SectionTitle>【であった動画】</SectionTitle>
                    <CardVideoThumbnail
                      id={pokemon.getVideo.id}
                      videoNo={pokemon.getVideo.no}
                      duration={pokemon.getVideo.duration}
                      overlayProps={{ className: "relative" }}
                    />
                  </div>
                </div>
              )}
              {pokemon.evoVideo && (
                <div className="flex flex-1 text-center mx-4">
                  <div className="mx-auto">
                    <SectionTitle>【しんかした動画】</SectionTitle>
                    <CardVideoThumbnail
                      id={pokemon.evoVideo.id}
                      videoNo={pokemon.evoVideo.no}
                      duration={pokemon.evoVideo.duration}
                      overlayProps={{ className: "relative" }}
                      className="mx-1"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = PokemonData.map((pokemon) => ({
    params: { base: pokemon.base },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const pokemon = PokemonData.find((pokemon) => pokemon.base == params.base);
  return {
    props: {
      pokemon: {
        ...pokemon,
        friendArea: FriendAreaData.find((friendArea) =>
          friendArea.pokemons.includes(pokemon.name)
        ),
        getVideo: pokemon.getVideoNo && YouTubeData[pokemon.getVideoNo - 1],
        evoVideo: pokemon.evoVideoNo && YouTubeData[pokemon.evoVideoNo - 1],
      },
    },
  };
}

Pokemon.layout = Admin;
