import Link from 'next/link'
import React from 'react'

type Props = {

    slug: string;
  };

function TestSubjectButton({slug}: Props) {
  return (
          <Link className='bg-sky-500 p-2 text-white font-bold border border-black' href={`/tests/${slug}`}>Go To Test {slug}</Link>
  )
}

export default TestSubjectButton