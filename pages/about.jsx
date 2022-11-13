import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-[2em] mb-[1em]">
        Sobre o projeto
      </h1>
      <p className="mb-[1.5em] max-w-[500px] leading-6">
        Projeto de Next.js realizado pelo curso do Matheus
        Battisti. <br />
        Projeto realizado em Next.js com uma pequena
        alteração na estilização, no curso a estilização era
        realizada através de css puro, tomei a liberdade de
        estilizar o meu projeto com Tailwind.
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  );
};

export default About;
