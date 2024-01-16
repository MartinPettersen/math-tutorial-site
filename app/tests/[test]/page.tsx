import { getSubject } from "@/sanity/sanity-utils";
import React from "react";
import { getServerSession } from "next-auth";
import { option } from "@/app/api/auth/[...nextauth]/option";
  


// eslint-disable-next-line import/no-extraneous-dependencies

import Loader from "@/components/mathTests/Loader";

type Props = {
  params: { test: string };
};

async function Subject({ params }: Props) {
  
  const session = await getServerSession(option);
  const slug = params.test;

  const subject = await getSubject(slug);

  let user = ""

  if (session) {
    user = session.user.email
  }


  return (
    <div className="h-[90%] flex items-center justify-center">
      <div className="flex flex-col gap-4 items-center justify-center w-[80%] h-[100%]">
        <header className="font-3xl  font-extrabold">{subject.subject}</header>
        <div>
          Drag and drop the operator and numbers needed to fullfill the task
        </div>
        <h1>Task:</h1>
        <div>{subject.test.testDescription}</div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 p-2 rounded-md justify-center sm:w-[40%]">
          <Loader subject={subject} user={user}/>
        </div>
      </div>
    </div>
  );
}

export default Subject;
