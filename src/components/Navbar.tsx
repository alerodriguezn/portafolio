import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="w-full mt-2" >
      <ul className="flex justify-center items-center gap-4">
        <li>
          <Link className="text-slate-300 font-bold" href="#">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-slate-300 font-bold" href="#">
            About
          </Link>
        </li>
        <li>
          <Link className="text-slate-300 font-bold" href="#">
            Projects
          </Link>
        </li>
        <li>
          <Link className="text-slate-300 font-bold" href="#">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
