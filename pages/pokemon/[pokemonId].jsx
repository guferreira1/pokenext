import Image from "next/image";

import styles from "../../styles/pokemonStyles.module.css";

export const getStaticPaths = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;

  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );

  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

const PokemonId = ({ pokemon }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-[2.5em] capitalize bg-[#333] text-[#fff] p-[0.4em] my-[0.8em] mx-auto w-[300px]">
        {pokemon.name}
      </h1>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="200"
        height="200"
        alt={pokemon.name}
      />
      <div>
        <h3 className="my-[0.6em] mx-auto text-[1.2em] font-bold">
          Número:{" "}
        </h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3 className="my-[0.6em] mx-auto text-[1.2em] font-bold">
          Tipo:{" "}
        </h3>
        <div className="flex items-center justify-center">
          {pokemon.types.map((item, index) => (
            <span
              key={index}
              className={`${styles.type} ${
                styles["type_" + item.type.name]
              }`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-[0.5em]">
        <div className="flex items-center justify-end flex-col h-[60px] my-[1em] mx-0 py-0 px-[1em] border-r-2 border-[#CCC]">
          <h4 className="my-[0.6em] mx-auto text-[1.2em] font-bold">
            Altura:
          </h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className="flex items-center justify-end flex-col h-[60px] my-[1em] mx-0 py-0 px-[1em] ">
          <h4 className="my-[0.6em] mx-auto text-[1.2em] font-bold">
            Peso:
          </h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonId;
