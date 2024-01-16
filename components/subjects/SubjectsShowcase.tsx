import React from "react";

import { getSubjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

async function SubjectsContainer() {
  const subjects = await getSubjects();

  return (
    <div className="flex flex-row justify-center items-center w-full gap-8 h-full p-8">
      <Link
        href={`subject/${subjects[0].slug}`}
        className="hover:cursor-pointer bg-green-200 hover:bg-green-300 p-6 gap-4 flex flex-col items-center justify-center"
      >
        <Image
          src={subjects[0].image}
          alt={subjects[0].alt}
          width={300}
          height={300}
          className="object-cover "
        />
        <div>Not sure where to start? Give {subjects[0].subject} a try</div>
      </Link>
      <Link
        href={`subject/${subjects[1].slug}`}
        className="hover:cursor-pointer bg-green-200 hover:bg-green-300 p-6 gap-4 flex flex-col items-center justify-center"
      >
        <Image
          src={subjects[1].image}
          alt={subjects[1].alt}
          width={300}
          height={300}
          className="object-cover "
        />
        <div>want to be up to date? Give {subjects[1].subject} a try</div>
      </Link>
    </div>
  );
}

export default SubjectsContainer;
