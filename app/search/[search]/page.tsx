import SubjectsContainer from "@/components/subjects/SubjectsContainer";
import React from "react";
import { searchSubjects } from "@/sanity/sanity-utils";
import { getServerSession } from 'next-auth'
import { option } from "@/app/api/auth/[...nextauth]/option";

type Props = {
    params: { search: string }
}

async function page({ params }: Props) {

    const subjects = await searchSubjects(params.search);    
    const session = await getServerSession(option);

    let email = ""

    if(session) {
      email = session.user.email
    }

  return (
    <div className="h-[90%] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center w-full justify-center h-[100%] ">
        <div className="flex flex-col w-full items-center">
        <h1 className="font-extrabold">Searching for: {params.search}</h1>
        <SubjectsContainer email={email} subjects={subjects}/>
        </div>
      </div>
    </div>
  );
}

export default page;
