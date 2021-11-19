import * as React from "react";

import Admin from "layouts/Admin.js";
import CardProfile from "components/Cards/CardProfile";
import PokemonData from "data/json/pokemon";

export default function Pokemon({ pokemon }) {
  return (
    <>
      <CardProfile />
      {pokemon.name} ({pokemon.nickname})
    </>
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
  return {
    props: {
      pokemon: PokemonData.find((pokemon) => pokemon.base == params.base),
    },
  };
}

Pokemon.layout = Admin;
