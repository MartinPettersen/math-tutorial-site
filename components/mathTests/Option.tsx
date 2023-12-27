/* eslint-disable react/jsx-props-no-spreading */

'use client'

import { RootState } from '@/app/Redux/store'
import React, { useEffect, useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux'

type Props = {
    option: string,
    index: number
}

function Option({option, index} : Props) {

    const optionsDictionary = useSelector((state: RootState) => state.container.options);

    const [winReady, setwinReady] = useState(false);

    useEffect(() => {
      setwinReady(true);
    }, []);

  return (
    <Draggable draggableId={option} index={index} key={option}>
        {(provided, snapshot) => (

            <div className={`flex justify-center items-center border border-black ${
                snapshot.isDragging ? "bg-sky-300"  : "bg-sky-500" } p-2 pl-6 pr-6`}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            >
                {winReady && optionsDictionary !== undefined ? (
                optionsDictionary.find((opt) => opt.id === option)?.content
                ) : null}
            </div>
        )}
    </Draggable>
  )
}

export default Option