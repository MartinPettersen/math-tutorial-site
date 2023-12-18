/* eslint-disable react/jsx-no-useless-fragment */
import Link from "next/link";
import React from "react";

type Props = {
  subjectName: string;
  completed: boolean;
  symbol: string;
  slug: string;
};

function SubjectsDisplay({ subjectName, completed, symbol, slug }: Props) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return (
    <Link href={`subject/${slug}`}
      className={`p-4 rounded-full bg-gray-600 border-4 w-full hover:scale-105 transition ${
        completed ? "border-orange-500" : "border-sky-500"
      } flex flex-row gap-2 items-center`}
    >
      <div className="border-2 rounded-full pl-4 pt-2 pb-2 pr-4 font-extrabold bg-slate-800 text-white border-slate-500">
        {symbol}
      </div>
      {subjectName}{" "}
      {completed ? <div className="font-extrabold">Completed</div> : <></>}
    </Link>
  );
}

export default SubjectsDisplay;
