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
    <div className='bg-green-400'>
        <input className='text-black' type="text" data-testid ="search" onClick={() => onSearchFieldClicked()} onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} value={searchTerm}/>
    </div>
  )
}

export default SearchField