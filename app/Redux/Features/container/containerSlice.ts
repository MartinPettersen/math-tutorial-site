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
            
            const { sourceIndex, destinationIndex, draggableId, finishColumn, startColumn } = action.payload;
            
            state.columns.find((column) => column.id === startColumn)!.optionIds.splice(sourceIndex, 1);
            state.columns.find((column) => column.id === finishColumn)!.optionIds.splice(destinationIndex, 0, draggableId);

          },
          loadOptionIds: (state, action) => {
            state.options.push({ id: "test-1", content: "?" })
            state.options.splice(0, state.options.length)
            state.columns[1].optionIds.splice(0, state.columns[1].optionIds.length)
            state.columns[0].optionIds.splice(0, state.columns[0].optionIds.length)


            action.payload.forEach((element: string, index: number) => {

              state.options.push({ id: `opt-${index}`, content: element })
              state.columns[0].optionIds.push(`opt-${index}`)
              
            }
            );

          },
    }
  });

  export const { changeOptionOrder, loadOptionIds} = containerSlice.actions;

  export default containerSlice.reducer;