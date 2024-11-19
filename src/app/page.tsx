export const dynamic = "force-dynamic";
export const revalidate = 0;

import Image from "next/image";
import { Navbar } from "../components/Navbar";
import photo from "../../public/img/photo.jpeg";
import Link from "next/link";
import { Github } from "../components/logos/github";
import { Linkedin } from "../components/logos/linkedin";
import { X } from "@/components/logos/x";
import { ProjectsGrid } from "@/repos/components/ProjectsGrid";

export default function Home() {
  return (
    <>
      <header className="flex flex-col justify-center items-center mt-4">
        <h2 className="text-[#FECC1B] font-bold text-xl mb-3 md:mb-0">
          {" "}
          <span className="text-[##6bd968]">{"{ "}</span> Ale Rodríguez
          <span className="text-[##6bd968]">{" }"}</span>
        </h2>
        <Navbar />
      </header>
      <main className="md:w-3/4 w-[85%] flex justify-center items-center mt-4 flex-col">
        <div className="w-full sm:w-2/3 flex flex-col justify-center items-center ">
          <div className="w-3/4  flex md:flex-row flex-col justify-center items-center mb-2 gap-4 ">
            <p className="text-sm md:text-justify text-center">
              Prospective Computer Engineering student with expertise in
              frontend and backend development. Demonstrated skills through
              hands-on projects.
            </p>
            <Image
              src={photo}
              alt="profile photo"
              width={75}
              height={75}
              className="rounded-full object-cover contrast-100"
            />
          </div>
          <div className="w-full flex justify-center gap-4 my-2">
            <Link href="https://github.com/alerodriguezn">
              <Github />
            </Link>
            <Link href="https://github.com/alerodriguezn">
              <Linkedin />
            </Link>
            <Link href="https://github.com/alerodriguezn">
              <X />
            </Link>
          </div>
        </div>

        <section className="md:w-[90%]">
          <h2 className="text-left font-bold text-[#FECC1B]">My Projects</h2>
          <ProjectsGrid />
        </section>
      </main>
    </>
  );
}
