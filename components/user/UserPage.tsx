'use client'

import React, { useState } from "react";
import DeletePopup from "./DeletePopup";

type Props = {
    userName: string
}

function UserPage({userName}: Props) {
  const [toggled, setToggled] = useState(false);

  const toggle = () => {
    setToggled(!toggled);
  };

  return <div  className="flex w-full h-full items-center justify-center">
    
    <div className="flex h-full w-full justify-center items-center ">
        
        {!toggled ? 
        <div className="flex flex-col gap-4 justify-center w-[80%] items-center h-[100%]">
        <p>Welcome {userName}</p>
        <div onClick={() => toggle()} className="flex justify-center items-center p-2 hover:cursor-pointer bg-red-500 text-white">
          Delete User
        </div>
      </div>        
        :
        

            <DeletePopup toggle={toggle} />
        
        }
        

      </div>
    </div>;
}

export default UserPage;
