import React from "react";
import { getServerSession } from "next-auth";
import { option } from "@/app/api/auth/[...nextauth]/option";
import NavButton from "./NavButton";
import SearchField from "./SearchField";
import Logo from "../Logo/Logo";

async function Navbar() {

  const session = await getServerSession(option)

  return (
    <div className="flex items-center   flex-col sm:flex-row sm:h-[10%] shadow-xl bg-white justify-between p-4 sm:pl-20 sm:pr-20">
      <div className="p-4 ">
        <Logo />
      </div>
      <div className="flex items-center justify-center flex-col sm:flex-row gap-4">
        <SearchField />
        
        <NavButton buttonLabel="My Page" url="myPage" />
        <NavButton buttonLabel="Subjects" url="subjects" />
        <NavButton buttonLabel="My Learning" url="myLearning" />
        <NavButton buttonLabel="About" url="about" />
        <NavButton buttonLabel="Home" url="" />
        {session ? <NavButton buttonLabel="Logout" url="api/auth/signout?callbackUrl=/" /> : <NavButton buttonLabel="Login" url="login" />}
      </div>
    </div>
  );
}

export default Navbar;
