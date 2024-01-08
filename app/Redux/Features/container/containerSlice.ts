'use client';

import { Column } from '@/types/Column';
import { Option } from '@/types/Option';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';


export interface ContainerState {
    options: Option[],
    columns: Column[],
    columnOrder: string[]
    correctAnswer: string[][]

}

/*
const initialData = {
    options: {
      "option-1": { id: "option-1", content: "+" },
      "option-2": { id: "option-2", content: "-" },
      "option-3": { id: "option-3", content: "*" },
      "option-4": { id: "option-4", content: "/" },
      "option-5": { id: "option-5", content: 0 },
      "option-6": { id: "option-6", content: 0 },
    },
    columns: {
      "column-1": {
        id: "column-1",
        title: "Test",
        optionIds: [
          "option-1",
          "option-2",
          "option-3",
          "option-4",
          "option-5",
          "option-6",
        ],
      },
    },

    columnOrder: ["column-1"],
  };
*/
  const initialState: ContainerState = {
    
    options: [
      { id: "operator-1", content: "+" },
      { id: "operator-2", content: "-" },
      { id: "operator-3", content: "*" },
      { id: "operator-4", content: "/" },
      { id: "number-1", content: 5 },
      { id: "number-2", content: 3 },
    ],
    columns: [{
        id: "column-1",
        title: "Test",
        optionIds: [
          "operator-1",
          "operator-2",
          "operator-3",
          "operator-4",
          "number-1",
          "number-2",
        ],
      },{
        id: "column-2",
        title: "answerfield",
        optionIds: [],
      },
    ],

    columnOrder: ["column-1", "column-2"],
    correctAnswer: 
    [
      ["number-1", "operator-1", "number-2"],
      ["number-2", "operator-1", "number-1"],
    ],

  };

  export const containerSlice = createSlice({
    name: 'container',
    initialState,
    reducers: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        changeOptionOrder: (state, action) => {
            // console.log(state.columns[0].optionIds[0])
            
            const { sourceIndex, destinationIndex, draggableId, finishColumn, startColumn } = action.payload;
            
            // console.log(draggableId)

            state.columns.find((column) => column.id === startColumn)!.optionIds.splice(sourceIndex, 1);
            state.columns.find((column) => column.id === finishColumn)!.optionIds.splice(destinationIndex, 0, draggableId);
            // console.log(state.columns[0].optionIds[0])

          },
          loadOptionIds: (state, action) => {
            console.log(action.payload)
            
            
            // state.options.splice(0, 1)
            state.options.push({ id: "test-1", content: "?" })
            
            state.options.splice(0, state.options.length)
            state.columns[1].optionIds.splice(0, state.columns[1].optionIds.length)
            state.columns[0].optionIds.splice(0, state.columns[0].optionIds.length)


            action.payload.forEach((element: string, index: number) => {

              state.options.push({ id: `opt-${index}`, content: element })
              state.columns[0].optionIds.push(`opt-${index}`)
              
            }
            );

            // state.columns[0].optionIds.splice(0, state.columns[0].optionIds.length)

            // state.columns[1].optionIds.push(...action.payload)
            // console.log(state.columns[1].optionIds)

          },
    }
  });

  export const { changeOptionOrder, loadOptionIds} = containerSlice.actions;

  export default containerSlice.reducer;