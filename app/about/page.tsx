import Image from "next/image";
import reactLogo from "@/public/img/react.png";
import rustLogo from "@/public/img/rust.png";
import nextLogo from "@/public/img/next.png";


const AboutPage = async () => {

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
              React, NextJS and Rust
            </span>
            .
          </p>
          <div className="w-1/2 flex gap-4 justify-center items-center">
            <Image src={reactLogo} width={50} height={50} alt="React" />
            <Image src={rustLogo} width={70} height={70} alt="Rust" />
            <Image src={nextLogo} width={50} height={50} alt="NextJS" />
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;