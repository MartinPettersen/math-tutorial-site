"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Redux/store";
import { DragDropContext } from "react-beautiful-dnd";
import { changeOptionOrder } from "@/app/Redux/Features/container/containerSlice";
import Column from "./Column";

type Props = {
  subject: string;
};

function Container({ subject }: Props) {
  const columns = useSelector((state: RootState) => state.container.columns);
  const dispatch = useDispatch();

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startColumn = source.droppableId;
    const finishColumn = destination.droppableId;

    dispatch(
        changeOptionOrder({
          sourceIndex: source.index,
          startColumn,
          finishColumn,
          destinationIndex: destination.index,
          draggableId,
        })
      );

  };

  const [winReady, setwinReady] = useState(false);

  useEffect(() => {
    setwinReady(true);
  }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {winReady ? (
        <div className="flex flex-col gap-4">
          <div>{subject} Test</div>
          {columns.map((column) => (

          <Column key={column.id} column={column}/>
          ))}
        </div>
      ) : null}
    </DragDropContext>
  );
}

export default Container;
