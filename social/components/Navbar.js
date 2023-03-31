import React from 'react'
import Image from 'next/image'
import logo from "../public/profile.png"
import { useSession, signOut } from 'next-auth/react'



const Navbar = () => {
  const { data: session } = useSession()
  if(!session) return null;
  return (
    <div>
        <header>
            <nav className='flex flex-row justify-between items-center'>
                <h2
                className='text-xl cursor-pointer text-sky-500 font-extrabold'
                >Notes App</h2>
                <div
                className='flex'
                >
              <img
              className='w-20 h-12 mr-8 bg-transparent cursor-pointer hover:bg-amber-600'
              alt='profile'
              width={20}
              height={20}
                src={
                  session.user.image ||
                  logo}
              />
                <button
                className='rounded bg-amber-400	w-20 text-white hover:bg-amber-600'
                >{session.user.name}</button>
                 <button className="ml-3"
          onClick={() => signOut()}>
            Logout
          </button>
                </div>
            </nav>
        </header>

    </div>
  )
}

export default Navbar