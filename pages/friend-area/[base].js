import * as React from "react";

import Admin from "layouts/Admin.js";
import FriendAreaData from "data/json/friend-area";
import FriendAreaTable from "components/Table/FriendAreaTable";
import Link from "next/link";
import NewLineText from "components/Typography/NewLineText";
import PokemonData from "data/json/pokemon";
import PokemonIcons from "components/Pokemon/PokemonIcons";
import ProfileData from "data/json/profile";
import { SNS } from "data/js/sns";
import { getFriendAreaImgSrc } from "lib/friend-area";

export default function FriendArea({ friendArea }) {
  return (
    <>
      {/* <Navbar transparent /> */}
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${getFriendAreaImgSrc(friendArea)}`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative"></div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0"></div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {friendArea.name}
                  </h3>
                </div>
                <PokemonIcons pokemons={friendArea.pokemons} />
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        <NewLineText text={friendArea.description} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
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
