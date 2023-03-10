import Image from "next/image"
import Link from "next/link"
import ListRepos from "@/components/ListRepos";
import { getRepos } from "@/lib/repos";
import photo from '@/public/img/photo2.jpeg'
import { FaTwitter, FaGithub } from 'react-icons/fa';

export default async function Home() {
  
  let repos;
  try {
    repos = await getRepos()
  } catch (error) {
    console.log(error)
  }

  return (
    <>
      <main className="flex mt-14 justify-center items-center">
        <div className="w-1/2 ">
          <p className="text-left font-medium text-white">Hello, I'm Alejandro Rodriguez. I'm a <span className="text-[#6bd968]">Computer Engineering Student</span> and passionate about <span className="text-[#fecc1b]">frontend and backend</span> development.  </p>
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

      <ListRepos repos={repos}/>
  
    </>
  )
}
