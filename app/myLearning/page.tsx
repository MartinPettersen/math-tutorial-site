import { getServerSession } from 'next-auth'
import React, { useEffect } from 'react'
import { redirect } from 'next/navigation';
import { option } from '../api/auth/[...nextauth]/option'
import UserAchievments from '@/components/user/UserAchievments';

async function page() {

  const session = await getServerSession(option);

  if(!session){
    redirect("/api/auth/signin?callbackUrl=/myPage")
  }

  let test: string[] = []

  const getAchievments = async () => {
    const res = await fetch("http://localhost:3000/api/getAchievments", {
      method: "POST",
      body: JSON.stringify({ email: "test@gmail.com" }),
      headers: new Headers({"content-type": "application/json"}),
    });

    if (!res.ok) {
      const response = await res.json();
      // console.log(response.message);
    } else {
      test = await res.json()
      // console.log(test);
    
    }
    console.log(test)
    // console.log(res.json)
  };
  


  return (
    <div className="h-[90%] flex items-center justify-center">

    <div className='flex flex-col gap:2 items-center justify-center w-[80%] h-[100%]'>

      <UserAchievments email={session.user.email} />
    </div>
    </div>
  )
}

export default page