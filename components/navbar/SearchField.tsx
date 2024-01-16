'use client'

import React, { useState } from 'react'

function SearchField() {
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

    return (
    <div className='border-b-2 border-slate-800 '>
        <input className='text-black outline-none' type="text" data-testid ="search" onFocus={() => onSearchFieldClicked()} onBlur={() => onSearchFieldBlur()}  onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} value={searchTerm}/>
    </div>
  )
}

export default SearchField