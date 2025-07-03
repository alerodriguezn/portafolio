import Link from "next/link";
import { skills } from "@/data/skills";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-[#FECC1B]">About</span> Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a prospective Computer Engineering student with a strong foundation in 
              both frontend and backend development. My journey in technology started 
              with curiosity and has evolved into a passion for creating meaningful 
              digital experiences.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with 
              the latest technologies. My projects demonstrate my ability to solve 
              complex problems and deliver user-friendly solutions.
            </p>
            <div className="flex gap-4">
              <Link 
                href="#contact"
                className="bg-[#FECC1B] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#6bd968] transition-colors duration-300"
              >
                Get In Touch
              </Link>
              <Link 
                href="#projects"
                className="border border-[#FECC1B] text-[#FECC1B] px-6 py-2 rounded-full font-semibold hover:bg-[#FECC1B] hover:text-black transition-all duration-300"
              >
                View Projects
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#FECC1B] mb-4">Skills & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div key={skill.category} className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-[#6bd968] font-semibold mb-2">{skill.category}</h4>
                  <p className="text-gray-300 text-sm">{skill.technologies.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 