'use client'

import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import SearchButton from './SearchButton';


function SearchField() {

      const router = useRouter();

    const [searchTerm, setSearchTerm] = useState('Search...');
    const [searchFieldClicked, setSearchFieldClicked] = useState(false);

    const onSearchFieldClicked = () => {
        setSearchFieldClicked(!searchFieldClicked)
            
            if (searchTerm === "Search..."){
                setSearchTerm("")
            }
    }
    const onSearchFieldBlur = () => {
        // setSearchFieldClicked(!searchFieldClicked)
        if (searchTerm === ""){
            setSearchTerm("Search...")
        }
    }


    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("tester")
        router.push(`/search/${searchTerm}`);
      };

    return (
    <form onSubmit={handleSearch} className='border-b-2 border-slate-800 '>
        <input className='text-black outline-none' type="text" data-testid ="search" onFocus={() => onSearchFieldClicked()} onBlur={() => onSearchFieldBlur()}  onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} value={searchTerm}/>
        <SearchButton />
    </form>
  )
}

export default SearchField