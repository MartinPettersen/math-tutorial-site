"use client"


import React, { useState } from 'react'


type Props = {
    toggle: any
}


function DeletePopup({toggle}: Props) {
  

    return (
    <div className='flex w-full h-full items-center justify-center'>
    <div className='flex fixed w-full h-[90%] z-100' onClick={() => toggle()} />
    <div className='flex fixed flex-col gap-2 items-center justify-center z-101 border border-black border-4 p-4  h-[20%] w-[20%]'>
        <p>
        Are you sure that you want to delete your user?
        </p>
        <div className='flex flex-row gap-2 '>
            <button type="button" className='p-2 pr-4 pl-4 bg-red-500 text-white'>Yes</button>
            <button type="button" className='p-2 pr-4 pl-4 bg-green-500 text-white' onClick={() => toggle()}>No</button>

        </div>
        </div>
    </div>
  )

}

export default DeletePopup