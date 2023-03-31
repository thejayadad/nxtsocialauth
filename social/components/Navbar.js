import React from 'react'
import Image from 'next/image'
import logo from "../public/profile.png"


const Navbar = () => {
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
              <Image
              className='w-20 h-12 mr-8 bg-transparent cursor-pointer'
              alt='profile'
                src={logo}
              />
                <button
                className='rounded bg-amber-400	w-20 text-white hover:bg-amber-600'
                >Login</button>
                </div>
            </nav>
        </header>

    </div>
  )
}

export default Navbar