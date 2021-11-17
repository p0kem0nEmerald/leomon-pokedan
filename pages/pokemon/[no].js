import * as React from "react";

import Admin from "layouts/Admin.js";
import Pokemons from "data/json/pokemon";

export default function Pokemon({ pokemon }) {
  return (
    <>
      {pokemon.name} ({pokemon.nickname})
    </>
  );
}

export async function getStaticPaths() {
  const paths = Pokemons.map((pokemon) => ({
    params: { no: pokemon.base },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      pokemon: Pokemons.filter((pokemon) => pokemon.base == params.no)[0],
    },
  };
}

Pokemon.layout = Admin;
