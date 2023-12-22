'use client'

import React, { useState } from 'react'

function SearchField() {
    const [searchTerm, setSearchTerm] = useState('Search...');
    const [searchFieldClicked, setSearchFieldClicked] = useState(false);

    const onSearchFieldClicked = () => {
        setSearchFieldClicked(!searchFieldClicked)
        setSearchTerm("")
    }

    return (
    <div className='border border-gray-800 p-1 rounded-md '>
        <input className='text-black ' type="text" data-testid ="search" onClick={() => onSearchFieldClicked()} onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} value={searchTerm}/>
    </div>
  )
}

export default SearchField