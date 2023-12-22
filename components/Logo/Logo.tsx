import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href="/" className="flex flex-col items-center sm:gap-0 gap-2 p-2">
      <div className="text-4xl flex font-bold"><div className="text-orange-400">+</div>Math<div className="text-sky-400">-</div></div>
      <div>Refresh your math knowledge</div>
    </Link>
  );
}

export default Logo;
