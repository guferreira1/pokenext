import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-[1em] px-[1.2em] mb-[2em] bg-[#333] text-white">
      <div className="flex justify-center items-center">
        <Image
          src="/images/pokeball.png"
          width="30"
          height="30"
          alt="PokeNext"
        />
        <h1 className="ml-[0.5em] font-bold">PokeNext</h1>
      </div>
      <ul className="flex">
        <li className="mr-[1.3em]">
          <Link
            href="/"
            className="p-[5px] transition duration-[400] ease-in border-b-2 border-transparent hover:border-[#fff]"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="p-[5px] transition duration-[400] ease-in border-b-2 border-transparent hover:border-[#fff]"
          >
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
