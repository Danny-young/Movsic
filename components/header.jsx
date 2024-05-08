import { SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import ThemeToggle from './ThemeToggle'
import logo from '@/Assets/Images/mm.png'
import Image from 'next/image'
import GenreDropdown from './GenreDropdown'
import SearchInput from './SearchInput'

function Header() {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
        <div className="flex items-center">
      <Link href="/" className="mr-10">
      <Image src={logo} alt="logo" width={65} height={65} />
      </Link>
      <Link href="/movie" className="mr-10">
       <div className="from-neutral-200 text-lg">Movie</div>
      </Link>
      <Link href="/music" className="mr-10">
       <div className="from-neutral-200 text-lg">Music</div>
      </Link>
      <Link href="/about" className="mr-10">
       <div className="from-neutral-200 text-lg">About</div>
      </Link>
      </div>
    
      <div className="flex space-x-2">
     <GenreDropdown />
  {/*   <SearchInput /> */}
  
    <ThemeToggle/>
    <UserButton afterSignOutUrl="/" />

    <SignedOut>
      <SignInButton afterSignOutUrl="/" mode='modal' />
    </SignedOut>
    </div>
    </header>
  )
}

export default Header