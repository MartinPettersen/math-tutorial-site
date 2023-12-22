import { getSubject } from "@/sanity/sanity-utils";
import React from "react";

// eslint-disable-next-line import/no-extraneous-dependencies
// import { PortableText } from "@portabletext/react";
// import Link from "next/link";



import Container from "@/components/mathTests/Container";



type Props = {
  params: { test: string };
};

async function Subject({ params }: Props) {
  const slug = params.test;

  const subject = await getSubject(slug);


  // <TestContainer data={initialData} />



  return (
    <div className="h-[90%] flex items-center justify-center">
      <div className="flex flex-col gap-4 items-center justify-center w-[80%] h-[100%]">
        <header className="font-3xl  font-extrabold">{subject.subject}</header>
        <div>Drag and drop the operator and number needed to fullfill the task</div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4  p-2 rounded-md">
          <Container subject="Division"/>
        </div>
        <div className="border border-black p-4 bg-emerald-500 hover:bg-emerald-300 rounded-md">
          Check Answer
        </div>
      </div>
    </div>
  );
}

export default Subject;
