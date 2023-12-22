/* eslint-disable react/jsx-props-no-spreading */

'use client'

import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

type Props = {
    option: string,
    index: number
}

function Option({option, index} : Props) {
  return (
    <Draggable draggableId={option} index={index} key={option}>
        {(provided, snapshot) => (

            <div className={`flex justify-center items-center border border-black ${
                snapshot.isDragging ? "bg-sky-300"  : "bg-sky-500" } `}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            >
                {option}
            </div>
        )}
    </Draggable>
  )
}

export default Option