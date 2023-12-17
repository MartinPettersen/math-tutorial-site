import Link from 'next/link'
import React from 'react'

type Props = {
    buttonLabel: string,
    url: string,
}

function NavButton({buttonLabel, url}: Props) {
  return (
    <Link href={`/${url}`}  className='text-xl'>{buttonLabel}</Link>
  )
}

export default NavButton