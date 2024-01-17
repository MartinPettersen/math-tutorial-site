import SubjectsContainer from "@/components/subjects/SubjectsContainer";
import React from "react";
import { getSubjects } from "@/sanity/sanity-utils";
import { getServerSession } from 'next-auth'
import { option } from "@/app/api/auth/[...nextauth]/option";


async function page() {

     
    const subjects = await getSubjects();
    const session = await getServerSession(option);

    let email = ""

    if(session) {
      email = session.user.email
    }

  return (
    <div className="h-[90%] flex flex-col items-center justify-center">
      <div className="flex items-center w-full justify-center h-[100%] ">
        <SubjectsContainer email={email} subjects={subjects}/>
      </div>
    </div>
  );
}

export default page;
