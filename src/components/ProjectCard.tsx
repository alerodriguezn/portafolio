import React from "react";
import Image from "next/image";
import quioscoProject from "@/public/img/quiosco.jpg";
import Link from "next/link";
import { Github } from "./logos/github";

export const ProjectCard = () => {
  return (
    <div className="flex flex-col items-center border-2 rounded-lg border-zinc-800 p-3 ">
      <Image
        src={quioscoProject}
        alt="Kiosk Project"
        width={300}
        height={300}
        className="rounded-sm"
      />
      <div className="w-full flex justify-center items-center gap-2 mt-2 text-[#FECC1B] font-medium text-[0.65rem] p-[0.25rem]">
        <span className="rounded-lg  bg-zinc-800 p-1">nextjs</span>
        <span className="rounded-lg  bg-zinc-800 p-1">tailwind</span>
        <span className="rounded-lg  bg-zinc-800 p-1">swr</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-sm text-white text-center font-semibold mt-2">
          Kiosk App
        </h3>
        <p className="text-xs text-center mt-1">
          Web application to order food from a kiosk, and a section for order
          management.
        </p>
      </div>
      <Link
        href="https://github.com/alerodriguezn/QuioscoApp"
        className="flex justify-center items-center gap-1 mt-4 font-semibold hover:bg-zinc-200 rounded-md bg-white p-1 text-zinc-900  text-[0.7rem] text-center w-1/2"
      >
        <Github color="#000" />
        See on Github
      </Link>
    </div>
  );
};
