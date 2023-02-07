
import Image from "next/image";
import axios from "axios";
import reactLogo from "@/public/img/react.png";
import astroLogo from "@/public/img/astro.png";
import nextLogo from "@/public/img/next.png";
import ListRepos from "@/components/ListRepos";


async function getRepos() {
  const { data } = await axios(`${process.env.NEXT_URL}/api/repos`, {
    cache: "no-store",
  });
  return data;
}

const AboutPage = async () => {
  const repos = await getRepos();
  return (
    <>
      <main className="mt-14 border-b  border-zinc-700 pb-4 shadow-lg">
        <h2 className="text-white font-bold text-2xl">About Me</h2>
        <div className="flex items-center">
          <p className="w-1/2 text-white mt-2">
            My name is{" "}
            <span className="text-[#f44250] font-bold">
              Alejandro Rodriguez
            </span>{" "}
            and I am currently studying computer engineering at TEC. I am
            focused on learning technologies like{" "}
            <span className="text-[#d83bd2] font-bold">
              NextJS, Remix Run and Astro
            </span>
            .
          </p>
          <div className="w-1/2 flex gap-4 justify-center items-center">
            <Image src={reactLogo} width={50} height={50} alt="React" />
            <Image src={astroLogo} width={50} height={50} alt="Astro" />
            <Image src={nextLogo} width={50} height={50} alt="NextJS" />
          </div>
        </div>
      </main>
      <ListRepos repos={repos} />
    </>
  );
};

export default AboutPage;
