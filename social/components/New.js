import React from 'react'

const New = () => {
  return (
    <div>
        <form
        className='flex justify-between mt-6 p-4 bg-gray-600 rounded-lg'
        >
            <input
            className='w-5/6 p-4 outline-none rounded-lg bg-gray-50 m-2	'
            placeholder='New To Do'

            />
            <button
            type='submit'
            className='w-1/6 bg-gray-50	rounded-lg'
            >
                Submit
            </button>
        </form>


    </div>
  )
}

export default New