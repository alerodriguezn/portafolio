import Image from "next/image"
import Link from "next/link"
import photo from '@/public/img/photo2.jpeg'
import { FaTwitter, FaGithub } from 'react-icons/fa';

export default function Home() {
 
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
          <Link className="text-zinc-200 flex gap-2  items-center hover:text-white" href="https://twitter.com/alej0rod" target={'_blank'} ><FaTwitter/> Follow me on Twitter</Link>
          <Link className="text-zinc-200 flex gap-2  items-center hover:text-white" href="https://github.com/alerodriguezn" target={'_blank'} ><FaGithub/> Check my repositories</Link>
        </div> 
      </section>

    </>
  )
}
