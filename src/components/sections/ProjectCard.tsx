import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Repository } from "@/types";
import { Github } from "@/components/ui/icons/github";

const getImage = (name: string) => {
  switch (name) {
    case "QuioscoApp":
      return "/img/quiosco.jpg";
    case "UpTask_MERN":
      return "/img/quiosco.jpg";
    case "lightning-chat":
      return "/img/lightning-chat.png";
    case "streamify":
      return "/img/streamify.png";
    default:
      return "/img/quiosco.jpg"; // Default image
  }
}

interface ProjectCardProps {
  repo: Repository;
}

export const ProjectCard = ({ repo }: ProjectCardProps) => {
  const { name, description, topics } = repo;
  return (
    <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 hover:border-[#FECC1B]/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FECC1B]/10">
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <Image
          src={getImage(name || "default")}
          alt={`${name || "Project"} Project`}
          width={400}
          height={250}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Project Info */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white group-hover:text-[#FECC1B] transition-colors duration-300">
          {name}
        </h3>
        
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {description || "A full-stack web application showcasing modern development practices and technologies."}
        </p>

        {/* Technologies */}
        {topics && topics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {topics.slice(0, 4).map((topic) => (
              <span 
                key={topic} 
                className="px-3 py-1 bg-[#6bd968]/20 text-[#6bd968] text-xs font-medium rounded-full border border-[#6bd968]/30"
              >
                {topic}
              </span>
            ))}
            {topics.length > 4 && (
              <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded-full">
                +{topics.length - 4} more
              </span>
            )}
          </div>
        )}

        {/* Action Button */}
        <div className="pt-2">
          <Link
            href={`https://github.com/alerodriguezn/${name || ""}`}
            className="w-full flex items-center justify-center gap-2 bg-[#FECC1B] text-black px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#6bd968] transition-colors duration-300 group/btn"
          >
            <Github/>
            <span className="group-hover/btn:scale-105 transition-transform duration-200">
              View Code
            </span>
          </Link>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#FECC1B]/10 to-[#6bd968]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};
