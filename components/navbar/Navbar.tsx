import React from "react";
import NavButton from "./NavButton";
import SearchField from "./SearchField";
import Logo from "../Logo/Logo";

function Navbar() {
  return (
    <div className="flex items-center   flex-col sm:flex-row sm:h-[10%] bg-sky-500 justify-between p-4 sm:pl-20 sm:pr-20">
      <div className="p-4 ">
        <Logo />
      </div>
      <div className="flex items-center justify-center flex-col sm:flex-row gap-4">
        <SearchField />
        <NavButton buttonLabel="Login" url="login" />
        <NavButton buttonLabel="Subjects" url="subjects" />
        <NavButton buttonLabel="My Learning" url="myLearning" />
        <NavButton buttonLabel="About" url="about" />
        <NavButton buttonLabel="Home" url="" />
      </div>
    </div>
  );
}

export default Navbar;
