import { getSubject } from "@/sanity/sanity-utils";
import React from "react";

// eslint-disable-next-line import/no-extraneous-dependencies
// import { PortableText } from "@portabletext/react";
// import Link from "next/link";

type Props = {
  params: { test: string };
};

async function Subject({ params }: Props) {
  const slug = params.test;

  const subject = await getSubject(slug);

  return (
    <div className="h-[90%] flex items-center justify-center">
      <div className="flex flex-col gap-4 items-center justify-center w-[80%] h-[100%]">
        <header className="font-3xl font-extrabold">{subject.subject}</header>
       
      </div>
    </div>
  );
}

export default Subject;
