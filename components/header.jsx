import { SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import ThemeToggle from './ThemeToggle'

function Header() {
  return (
    <div className='flex justify-between items-center'>
        <Link href={"/"}>
        <div>
            Logo here 
        </div>
        </Link> 
    
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