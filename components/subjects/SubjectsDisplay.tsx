import React from "react";

type Props = {
  subjectName: string;
  completed: boolean;
  symbol: string;
};

function SubjectsDisplay({ subjectName, completed, symbol }: Props) {
  
    
  
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <div className={`p-4 rounded-full bg-gray-500 border-4 w-full ${completed? 'border-orange-500': 'border-sky-500'} flex flex-row gap-2`}>{symbol} {subjectName} {completed? <div>Completed</div>: <></>}</div>;
}

export default SubjectsDisplay;
