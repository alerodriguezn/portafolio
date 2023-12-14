import React from "react";
import Image from "next/image";
import quioscoProject from "@/public/img/quiosco.jpg";
import Link from "next/link";
import { Github } from "../../components/logos/github";

interface Props {
  name?: string;
  description?: string | null;
  topics?: string[];
}


export const ProjectCard = ({ name, description = null, topics }: Props ) => {
  return (
    <div className="flex flex-col items-center border-2 rounded-lg border-zinc-800 p-3 ">
      <Image
        src={quioscoProject}
        alt="Kiosk Project"
        width={300}
        height={300}
        className="rounded-sm"
      />
      <div className="w-full grid grid-cols-3  gap-2 mt-2 text-[#FECC1B] font-medium text-[0.65rem] p-[0.25rem]">
        {
          topics?.map((topic) => {
            return <span key={topic} className="rounded-md bg-zinc-800 px-1 py-[0.15rem] m-0 text-center">{topic}</span>
          })
        }
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-sm text-white text-center font-semibold mt-2">
          {name}
        </h3>
        <p className="text-xs text-center mt-1">
          {description}
        </p>
      </div>
      <Link
        href={`https://github.com/alerodriguezn/${name}`}
        className="flex justify-center items-center gap-1 mt-4 font-semibold hover:bg-zinc-200 rounded-md bg-white p-1 text-zinc-900  text-[0.7rem] text-center w-3/4"
      >
        <Github color="#000" />
        See on Github
      </Link>
    </div>
  );
};
