import { SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import ThemeToggle from './ThemeToggle'
import logo from '@/Assets/Images/mm.png'
import Image from 'next/image'

function Header() {
  return (
    <div className='flex justify-between items-center z-50 sticky'>
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
    
    <div className='flex space-x-2 justify-center items-center'>
    <ThemeToggle/>
    <UserButton afterSignOutUrl="/" />

    <SignedOut>
      <SignInButton afterSignOutUrl="/" mode='modal' />
    </SignedOut>
    </div>
    </div>
  )
}

export default Header