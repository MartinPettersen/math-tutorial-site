'use client'

import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { loadOptionIds } from "@/app/Redux/Features/container/containerSlice";
import { Subject } from '@/types/Subject';
import Container from './Container'

type Props = {
    subject: Subject;

}

function Loader({ subject } : Props) {
    const dispatch = useDispatch();

    const [winReady, setwinReady] = useState(false)

    console.log("loader called")
    console.log(subject)
    useEffect(() => {

        dispatch(loadOptionIds(subject.test.options))
        setwinReady(true)
    },[])

  return (
    <div>
        {winReady ?
        (
          <Container subject={subject} />
        ) : null}
    </div>
  )
}

export default Loader