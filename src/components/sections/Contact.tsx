import Link from "next/link";
import { socialLinks } from "@/data/social-links";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">
          Let&apos;s <span className="text-[#FECC1B]">Connect</span>
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          I&apos;m always interested in new opportunities and collaborations. 
          Feel free to reach out if you&apos;d like to work together or just say hello!
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <Link 
            href="mailto:ale@example.com"
            className="bg-[#FECC1B] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#6bd968] transition-colors duration-300"
          >
            Send Email
          </Link>
          <Link 
            href="https://github.com/alerodriguezn"
            className="border border-[#FECC1B] text-[#FECC1B] px-8 py-3 rounded-full font-semibold hover:bg-[#FECC1B] hover:text-black transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </Link>
        </div>
        <div className="flex justify-center gap-6">
          {socialLinks.map((social) => (
            <Link 
              key={social.name}
              href={social.url}
              className="p-4 bg-gray-800 rounded-full hover:bg-[#FECC1B] hover:scale-110 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 