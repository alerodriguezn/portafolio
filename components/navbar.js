'use client'
import { usePathname } from 'next/navigation';
import Link from "next/link"
//TODO: change Link List
const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="mt-8 flex flex-col justify-center items-center md:flex-row md:justify-between w-full">
        <h2 className="text-white font-bold mb-3 md:mb-0"> <span className="text-[#6bd968]">{'{ '}</span> Ale Rodríguez<span className="text-[#6bd968]">{' }'}</span></h2>
        <div className="flex md:gap-4 gap-1">
          <Link className={`text-white font-bold rounded-md px-2 hover:bg-zinc-800 ${pathname === "/" ? 'text-gray-500': ''} `} href={'/'}>Home</Link>
          <Link className={`text-white font-bold rounded-md px-2 hover:bg-zinc-800 ${pathname === "/about" ? 'text-gray-500': ''} `} href={'/about'}>About</Link>
        </div>


    </header>
  )
}

export default Navbar
