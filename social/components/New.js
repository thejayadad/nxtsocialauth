import React from 'react'

const New = () => {
  return (
    <div>
        <form
        className='flex justify-between mt-6 p-4 bg-slate-100 rounded-lg hover:bg-slate-300'
        >
            <input
            className='w-5/6 p-4 outline-none rounded-lg bg-gray-50 m-2	'
            placeholder='New To Do'

            />
            <button
            type='submit'
            className='w-1/6'
            >
                <i class="fas fa-plus-circle text-4xl text-green-400 hover:text-green-700"></i>
            </button>
        </form>


    </div>
  )
}

export default New