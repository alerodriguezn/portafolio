export const dynamic = 'force-dynamic'
export const revalidate = 0

import Image from "next/image";
import { Navbar } from "../components/Navbar";
import photo from "@/public/img/photo.jpeg";
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
      <main className="w-3/4 flex justify-center items-center mt-4 flex-col">
        <div className="w-full sm:w-2/3 flex flex-col justify-center items-center ">
          <div className="flex p-2">
            <div className="w-3/4 flex justify-center items-center">
              <p className="text-sm text-left">
                Prospective Computer Engineering student with expertise in
                frontend and backend development. Demonstrated skills through
                hands-on projects.
              </p>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <Image
                src={photo}
                alt="profile photo"
                width={75}
                height={75}
                className="rounded-full object-cover contrast-100"
              />
            </div>
          </div>
          <div className="w-full flex justify-center gap-4 mb-2">
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

        <section className="w-[90%]">
          <h2 className="text-left font-bold text-[#FECC1B]">Projects</h2>
          <ProjectsGrid/>
        </section>
      </main>
    </>
  );
}
