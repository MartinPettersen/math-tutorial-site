import React from "react";
import Link from 'next/link'

function page() {
  return (
    <div className="h-[90%] flex items-center justify-center">
      <div className="flex flex-col gap-4 justify-center w-[80%] items-center h-[100%]">
          <h1>Allready have an account?</h1>
          <h1>Go to</h1>
          <Link className="bg-sky-500 text-white hover:bg-sky-400 p-2 flex justify-center w-[8em]" href='/api/auth/signin?callbackUrl=/myPage'  >Login Page</Link>

          <h1>dont have an account?</h1>
          <h1>Go to</h1>
          <Link className="bg-sky-500 text-white hover:bg-sky-400 p-2 flex justify-center w-[8em]" href='/createUser'  >Create User</Link>
      </div>
    </div>
  );
}

export default page;
