/* eslint-disable react/jsx-props-no-spreading */

"use client";

import { Column } from "@/types/Column";
import React from "react";
import { Droppable } from "react-beautiful-dnd";

import Option from "./Option";

type Props = {
  column: Column;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
function Column({ column }: Props) {
  const options = column.optionIds;

  return (
    <Droppable key={column.id} droppableId={column.id} direction='horizontal'>
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={`${snapshot.isDraggingOver ?"bg-orange-300" :"bg-orange-400"} flex gap-2 p-2 border min-h-[5em] border-black`}
        >
          {options.map((option, index) => (
            <Option key={option} option={option} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default Column;
