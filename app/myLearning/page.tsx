import { getServerSession } from 'next-auth'
import React from 'react'
import { redirect } from 'next/navigation';
import UserAchievments from '@/components/user/UserAchievments';
import { option } from '../api/auth/[...nextauth]/option'

async function page() {

  const session = await getServerSession(option);

  if(!session){
    redirect("/api/auth/signin?callbackUrl=/myPage")
  }

  


  return (
    <div className="h-[90%] flex items-center justify-center">

    <div className='flex flex-col gap:2 items-center justify-center w-[80%] h-[100%]'>

      <UserAchievments email={session.user.email} />
    </div>
    </div>
  )
}

export default page