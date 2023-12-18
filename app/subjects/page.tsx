import SubjectsContainer from "@/components/subjects/SubjectsContainer";
import React from "react";

function page() {
  return (
    <div className="h-[90%] flex flex-col items-center justify-center">
      <div className="flex items-center w-full justify-center h-[100%] ">
        <SubjectsContainer />
      </div>
    </div>
  );
}

export default page;
