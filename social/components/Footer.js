import React from 'react'

const Footer = () => {
  return (
    <footer
    className='flex justify-between	mt-6 bg-slate-100 p-5 rounded-lg'
    >
        <div
        className='flex'
        >
        <i class="fab fa-instagram text-fuchsia-600 mr-2 hover:text-fuchsia-300"></i>
        <i class="fab fa-youtube text-rose-600 mr-2 hover:text-rose-300"></i>
        <i class="fab fa-facebook text-blue-500 mr-2 hover:text-blue-300"></i>
        <i class="fab fa-twitter text-blue-300 mr-2 hover:text-blue-100"></i>

        </div>
        <div>
            <p>All Rights Reserved</p>
        </div>
        <div>
            <ul
            className='flex justify-between'
            >
                <li
                className='mr-6'
                >Contact</li>
                <li>Join Us</li>
            </ul>
        </div>

    </footer>
  )
}

export default Footer