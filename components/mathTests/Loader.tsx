'use client'

import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { loadOptionIds } from "@/app/Redux/Features/container/containerSlice";
import { Subject } from '@/types/Subject';
import Container from './Container'

type Props = {
    subject: Subject;
    // eslint-disable-next-line react/require-default-props
    user?: string;
}

function Loader({ subject, user="" } : Props) {
    const dispatch = useDispatch();

    const [winReady, setwinReady] = useState(false)

    useEffect(() => {

        dispatch(loadOptionIds(subject.test.options))
        setwinReady(true)
    },[])

  return (
    <div>
      {user}
        {winReady ?
        (
          <Container subject={subject} user={user} />
        ) : null}
    </div>
  )
}

export default Loader