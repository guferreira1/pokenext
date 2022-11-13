import Image from "next/image";

// Components
import Card from "../components/Card";

export const getStaticProps = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
};

export default function Home({ pokemons }) {
  return (
    <>
      <div className="flex justify-center items-center mb-[2em] ">
        <h1 className="text-[#E33D33] text-center text-[3em] mr-[0.4em]">
          Poke<span className="text-[#333]">Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="PokeNext"
        />
      </div>
      <div className="flex flex-wrap justify-between items-center max-w-[1100px] mx-auto">
        {pokemons.map((pokemon) => (
          <Card pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </>
  );
}
