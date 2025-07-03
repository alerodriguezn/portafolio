import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/social-links";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <Image
            src={"/img/photo.jpeg"}
            alt="Ale Rodríguez"
            width={150}
            height={150}
            className="rounded-full object-cover mx-auto mb-6 border-4 border-[#FECC1B] shadow-2xl hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-[#FECC1B]">{"{ "}</span>
            <span className="text-white">Ale Rodríguez</span>
            <span className="text-[#6bd968]">{" }"}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Computer Engineering Student & Full-Stack Developer
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
            Passionate about creating innovative solutions through code. 
            Specialized in frontend and backend development with a focus on 
            modern web technologies and user experience.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social) => (
              <Link 
                key={social.name}
                href={social.url}
                className="p-3 bg-gray-800 rounded-full hover:bg-[#FECC1B] hover:scale-110 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon />
              </Link>
            ))}
          </div>
          
          <Link 
            href="#projects"
            className="inline-block bg-[#FECC1B] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#6bd968] hover:scale-105 transition-all duration-300"
          >
            View My Work
          </Link>
        </div>
      </div>
    </section>
  );
} 