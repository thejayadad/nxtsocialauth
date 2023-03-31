import React, { useEffect } from 'react'
import { signIn, useSession, signOut } from 'next-auth/react'
import Router from 'next/router'


const login = () => {
  const { data: session } = useSession()

if(session){
  Router.push("/")
}
  return (
    <div className='text-center'>
      <h2>Login To Join Us</h2>
        <button
        className='bg-slate-100 p-6 rounded-lg w-60 hover:bg-amber-600 mt-5 hover:text-white'
        type='button'
        onClick={() => signIn("google")}
        >

        Google
        </button>
    </div>
  )
}

export default login