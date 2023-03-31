import React from 'react'

const Navbar = () => {
  return (
    <div>
        <header>
            <nav className='flex flex-row justify-between'>
                <h2>Notes App</h2>
                <div
                className='flex'
                >
                <button
                className='mr-8'
                >New</button>
                <button>New</button>
                </div>
            </nav>
        </header>

    </div>
  )
}

export default Navbar