import Image from "next/image"
import photo from "@/public/img/photo.jpeg"
import Link from "next/link"
import { FaTwitter, FaGithub } from "react-icons/fa"
import axios from "axios"
import ListRepos from "./components/ListRepos"

interface RepositoryProps {
 
    name: string;
    description: string;
    topics: string[];


}



async function getRepos(): Promise<RepositoryProps[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/repos`);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();

    if (!data) {
      throw new Error('Failed to parse JSON data');
    }

    return data;
  } catch (error) {
    console.error(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/repos`, error);
    throw new Error('Error fetching data');
  }
}

export default async function Home() {

  const repos = await getRepos()

  return (
    <>
      <main className="flex justify-center mt-14 items-center">
        <div className="w-1/2 ">
            <p className="text-left font-medium text-white">Hello, I&apos;m Alejandro Rodriguez. I&apos;m a <span className="text-[#6bd968]">Computer Engineering Student</span> and passionate about <span className="text-[#fecc1b]">frontend and backend</span> development.  </p>
          </div>
          <div className="w-1/2 flex justify-center " >
            <Image
              src={photo}
              width={90}
              height={90}
              alt="Profile Photo"
              className="sepia rounded-3xl border-4 border-zinc-800"
            />
          </div>
      </main>
      <section className="mt-5">
        <div className="p-2 flex gap-2 justify-around">
          <Link className="text-zinc-200 flex md:gap-3 gap-4  items-center hover:text-white" href="https://twitter.com/alej0rod" target={'_blank'} ><FaTwitter/> <span>Follow me on Twitter </span></Link>
          <Link className="text-zinc-200 flex md:gap-3 gap-4  items-center hover:text-white" href="https://github.com/alerodriguezn" target={'_blank'} ><FaGithub /><span> Check all my repositories</span></Link>
        </div> 
      </section>

      <ListRepos repos={repos} />

    </>
    

  )
}
