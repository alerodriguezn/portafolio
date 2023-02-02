import Link from "next/link"


const Navbar = () => {
  return (
    <header className="mt-8 flex flex-col justify-center items-center md:flex-row md:justify-between w-full">
        <h2 className="text-white font-bold mb-3 md:mb-0"> <span className="text-[#6bd968]">{'{ '}</span> Ale Rodríguez<span className="text-[#6bd968]">{' }'}</span></h2>

        <div className="flex md:gap-4 gap-1">
          <Link className="text-white font-bold rounded-md px-2 hover:bg-zinc-800 " href={'#'}>Home</Link>
          <Link className="text-white font-bold rounded-md px-2 hover:bg-zinc-800 " href={'/about'}>About</Link>
          <Link className="text-white font-bold rounded-md px-2 hover:bg-zinc-800 " href={'/blog'}>Blog</Link>
          <Link className="text-white font-bold rounded-md px-2 hover:bg-zinc-800 " href={'#'}>Contact</Link>
        </div>


    </header>
  )
}

export default Navbar