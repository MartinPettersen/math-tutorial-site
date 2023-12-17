import React from 'react';

import getSubjects from '@/sanity/sanity-utils'

export default async function Home() {

  const subjects = await getSubjects();

  return (
    <main >

     <div>Subjects {subjects.length}</div>
    </main>
  )
}
