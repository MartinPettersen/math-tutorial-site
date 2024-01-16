import { getServerSession } from "next-auth";
import React from "react";
import { redirect } from "next/navigation";
import UserPage from "@/components/user/UserPage";
import { option } from "../api/auth/[...nextauth]/option";

async function page() {
  
  const session = await getServerSession(option);


  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/myPage");
  }



  return (
    <div className="h-[90%] flex flex-row items-center justify-center">
          <UserPage userName={session?.user?.email}/>
      
    </div>
  );
}

export default page;
