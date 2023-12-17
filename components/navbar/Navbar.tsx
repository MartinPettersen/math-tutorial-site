import React from 'react'
import NavButton from './NavButton'
import SearchField from './SearchField'

function Navbar() {
  return (
    <div className='flex items-center justify-center flex-col sm:flex-row sm:h-[10%] bg-sky-500 gap-2'>
        <div>Logo</div>
        <SearchField />
        <NavButton buttonLabel="Login" url="login"/>
        <NavButton buttonLabel="My Learning" url="myLearning"/>
        <NavButton buttonLabel="About" url="about" />
        <NavButton buttonLabel="Home" url=""/>

    </div>
  )
}

export default Navbar