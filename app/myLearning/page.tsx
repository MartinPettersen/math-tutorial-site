import { getServerSession } from 'next-auth'
import React from 'react'
import { redirect } from 'next/navigation';
import { option } from '../api/auth/[...nextauth]/option'

async function page() {

  const session = await getServerSession(option);

  if(!session){
    redirect("/api/auth/signin?callbackUrl=/myPage")
  }

  return (
    <div className="h-[90%] flex items-center justify-center">

    <div className='flex items-center justify-center w-[80%] h-[100%]'>My Learning Page. This is for members of this site</div>
    </div>
  )
}

export default page