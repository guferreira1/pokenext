import Image from "next/image";
import Link from "next/link";

const Card = ({ pokemon }) => {
  return (
    <div className="flex justify-center items-center flex-col py-[2em] px-[1em] mb-[2em] w-[23%] rounded-[1em] border-2 border-[#E33D33] shadow-3xl bg-[#333] text-[#fff]">
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <p className="flex my-[1em] mx-[0] bg-[#E33D33] text-[#fff] rounded-[5px] p-[5px] justify-center items-center">
        #{pokemon.id}
      </p>
      <h3 className="capitalize mb-[1em] text-[1.4em]">
        {pokemon.name}
      </h3>
      <Link
        href={`/pokemon/${pokemon.id}`}
        className="bg-[#fff] text-[#222] py-[0.7em] px-[1.2em] rounded-[5px] font-bold transition duration-[400ms] hover:bg-[#E33D33] hover:text-[#fff]"
      >
        Detalhes
      </Link>
    </div>
  );
};

export default Card;
