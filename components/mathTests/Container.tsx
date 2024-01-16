"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Redux/store";
import { DragDropContext } from "react-beautiful-dnd";
import {
  changeOptionOrder,
} from "@/app/Redux/Features/container/containerSlice";
import { Subject } from "@/types/Subject";
import Column from "./Column";

type Props = {
  subject: Subject;
  // eslint-disable-next-line react/require-default-props
  user?: string;
};

function Container({ subject, user="" }: Props) {
  const dispatch = useDispatch();

  const submitAchievment = async () => {
    const res = await fetch("/api/addAchievment", {
      method: "POST",
      body: JSON.stringify({ subject, email: user }),
      headers: new Headers({"content-type": "application/json"}),
    });

    if (!res.ok) {
      const response = await res.json();
      console.log(response.message);
    } 
  };

  
  const columns = useSelector((state: RootState) => state.container.columns);
  const options = useSelector((state: RootState) => state.container.options);

  const [testResult, setTestResult] = useState(false);
  const [attempted, setAttempted] = useState(false);

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

  const lookupDictionary = (id: string) => {
    for (let i = 0; i < options.length; i += 1) {
      if (options[i].id === id) {
        return options[i].content;
      }
    }
    return "not found";
  };

  useEffect(() => {
    setwinReady(true);
  }, []);


  const checkAnswer = () => {
    setAttempted(true);
    if ( columns[1].optionIds.length === subject.test.correctAnswer[0].options.length ) {
      for (let i = 0; i < subject.test.correctAnswer.length; i += 1) {
        let allCorrect = true;
        for (let j = 0; j < subject.test.correctAnswer[i].options.length;j += 1) {
          if (
            lookupDictionary(columns[1].optionIds[j]).toString() !==
            subject.test.correctAnswer[i].options[j].toString()
          ) {
            allCorrect = false;
          }
        }
        if (allCorrect) {
          setTestResult(allCorrect);
          if ( user !== "") {
            submitAchievment();
          }
        }
      }
    }
  };

  const checkTest = () => {

    if (testResult) {
      return <div>You did it</div>
    } 
      return <div>Try Again</div>

  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {winReady ? (
        <div className="flex flex-col gap-4 w-full">
          {columns.map((column) => (
            <Column key={column.id} column={column} />
          ))}
          {attempted ? (
            checkTest()
          ) : null}
          <button
            type="button"
            onClick={() => checkAnswer()}
            className="border border-black p-4 bg-emerald-500 hover:bg-emerald-300 rounded-md flex justify-center items-center"
          >
            Check Answer
          </button>
        </div>
      ) : null}
    </DragDropContext>
  );
}

export default Container;
