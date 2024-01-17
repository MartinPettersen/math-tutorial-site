/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

function SearchButton() {
  return (
    <button type="submit" aria-label="Search" className="font-bold">
      <MagnifyingGlassIcon className="h-6 w-6" />
    </button>
  );
}

export default SearchButton;