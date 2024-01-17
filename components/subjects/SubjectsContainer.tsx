'use client'

import React, { useEffect, useState } from "react";


import { Subject } from "@/types/Subject";
import SubjectsDisplay from "./SubjectsDisplay";

type Props = {
  email: string,
  subjects: Subject[]
}

function SubjectsContainer({email, subjects}: Props) {

  const [achievments, setAchievments] = useState([""]);

  const getAchievments = async () => {
    const res = await fetch("/api/getAchievments", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: new Headers({ "content-type": "application/json" }),
    });

    if (!res.ok) {
      const response = await res.json();
      console.log(response.message);
    } else {
      const temp = await res.json();
      setAchievments(temp.data);
    }
  };

  useEffect(() => {
    getAchievments();
  }, []);
  




  return (
    <div className="flex flex-col justify-center items-center w-full gap-2 h-full p-8">
      <div className="flex w-[80%] sm:w-[40%] lg:w-[20%] flex-col gap-2">
        
       
        {subjects.map((subject) => (
          <SubjectsDisplay subject={subject} key={subject.subject} completed={achievments.includes(subject.subject)}/>
        ))}
      </div>
    </div>
  );
}

export default SubjectsContainer;
