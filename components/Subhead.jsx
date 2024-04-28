//import Image from "next/image";
//import { ThemeToggler } from "./ThemeToggler";
import Link from "next/link";
import GenreDropdown from "@/components/GenreDropdown";
import { ThemeToggler } from "./ThemeToggler";
import SearchBox from "./SearchBox";
import logo from '@/Assets/Images/mm.png'
import Image from 'next/image'
//import SearchInput from "./SearchInput";

function Header() {
  return (
    <header className="sticky w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900  ">
      <div className="flex items-center">
      <Link href="/" className="mr-10">
      <Image src={logo} alt="logo" width={65} height={65} />
      </Link>
      <Link href="/player" className="mr-10">
       <div className="from-neutral-200 text-lg">Music</div>
      </Link>
      <Link href="/about" className="mr-10">
       <div className="from-neutral-200 text-lg">About</div>
      </Link>
      </div>
      <div className="flex space-x-2">
      <GenreDropdown />
      <SearchBox /> 
        <ThemeToggler /> 
      </div>
    </header>
  );
}

export default Header;
