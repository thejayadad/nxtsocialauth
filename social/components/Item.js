import React from 'react'

const Item = () => {
  return (
    <div>
        <div
        className='w-100 bg-slate-100 m-3 p-6 rounded-lg flex flex-row	justify-between  hover:bg-slate-300'
        >
            <div>
            <p
            className='text-xl text-gray-400'
            >To Do note here just want to make sure it aligns good </p>

            </div>
        <button
        className=''
        ><i class="fas fa-trash text-red-500 text-lg hover:text-red-700"></i></button>
        </div>
    </div>
  )
}

export default Item