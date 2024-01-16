import React from "react";

import { getSubjects } from "@/sanity/sanity-utils";
import SubjectsDisplay from "./SubjectsDisplay";

async function SubjectsContainer() {
  const subjects = await getSubjects();

  return (
    <div className="flex flex-col justify-center items-center w-full gap-2 h-full p-8">
      <div className="flex w-[80%] sm:w-[40%] lg:w-[20%] flex-col gap-2">
        
       
        {subjects.map((subject) => (
          <SubjectsDisplay subject={subject} slug={subject.slug} symbol={subject.symbol} key={subject.subject} subjectName={subject.subject} completed={false}/>
        ))}
      </div>
    </div>
  );
}

export default SubjectsContainer;
