/* eslint-disable react/jsx-no-useless-fragment */
import { Subject } from "@/types/Subject";
import Link from "next/link";
import React from "react";
import Image from 'next/image'

type Props = {
  subject: Subject
  completed: boolean;
};

function SubjectsDisplay({ subject, completed}: Props) {

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return (
    <Link href={`subject/${subject.slug}`}
      className={` rounded-md  bg-sky-300 hover:bg-sky-200 border-4 w-full hover:scale-105 transition ${
        completed ? "bg-yellow-400 flex justify-between border-slate-800 hover:border-slate-800 hover:bg-yellow-300" : "border-sky-500 hover:border-sky-400"
      } flex flex-row gap-2 items-center`}
    >
        <Image
              src={subject.image}
              alt={subject.alt}
              width={75}
              height={75}
              className="object-cover "
            />
      {subject.subject}{" "}
      {completed ? <div className="font-extrabold p-2">Completed</div> : <></>}
    </Link>
  );
}

export default SubjectsDisplay;
