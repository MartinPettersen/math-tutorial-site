/* eslint-disable react/jsx-no-useless-fragment */
import { Subject } from "@/types/Subject";
import Link from "next/link";
import React from "react";
import Image from 'next/image'

type Props = {
  subject: Subject
  subjectName: string;
  completed: boolean;
  symbol: string;
  slug: string;
};

function SubjectsDisplay({ subject, subjectName, completed, symbol, slug }: Props) {

  /*
  <Image
              src={review.image}
              alt={review.alt}
              width={400}
              height={400}
              className="object-cover"
            />
  */

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return (
    <Link href={`subject/${slug}`}
      className={` rounded-md  bg-gray-200 hover:bg-gray-100 border-4 w-full hover:scale-105 transition ${
        completed ? "bg-yellow-400 flex justify-between hover:border-orange-400 hover:bg-gray-200" : "border-sky-500 hover:border-sky-400"
      } flex flex-row gap-2 items-center`}
    >
        <Image
              src={subject.image}
              alt={subject.alt}
              width={75}
              height={75}
              className="object-cover "
            />
      {subjectName}{" "}
      {completed ? <div className="font-extrabold">Completed</div> : <></>}
    </Link>
  );
}

export default SubjectsDisplay;
