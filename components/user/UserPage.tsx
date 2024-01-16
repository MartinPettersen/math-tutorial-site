'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import DeletePopup from "./DeletePopup";

type Props = {
    userName: string
}

function UserPage({userName}: Props) {
  const [toggled, setToggled] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();


  const deleteUser = async () => {

    // setErrorMessage("");
    const res = await fetch("/api/DeleteUser", {
      method: "POST",
      body: JSON.stringify({  email: userName  }),
      headers: new Headers({"content-type": "application/json",})
    });
    signOut({ callbackUrl: "/login" })
    if (!res.ok) {
      const response = await res.json();
      console.log(response);
      // setErrorMessage(response.message);
    } else {
      router.refresh();
      router.push("/");
    }
  };

  const toggle = () => {
    setToggled(!toggled);
  };

  return <div  className="flex w-full h-full items-center justify-center">
    
    <div className="flex h-full w-full justify-center items-center ">
        
        {!toggled ? 
        <div className="flex flex-col gap-4 justify-center w-[80%] items-center h-[100%]">
        <p>Welcome {userName}</p>
        <button type="button" onClick={() => deleteUser()} className="flex justify-center items-center p-2 hover:cursor-pointer bg-red-500 text-white">
          Delete User
        </button>
      </div>        
        :
        

            <DeletePopup toggle={toggle} />
        
        }
        

      </div>
    </div>;
}

export default UserPage;
