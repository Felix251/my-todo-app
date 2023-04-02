import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export  interface Todo {
      id: number,
      nom: string,
      dateCreation: Date ,
      isCompleted: boolean
    }
export interface todosState {
  todos: Todo[],
  nextId: number 
}
const initialState: todosState = {
  todos: [],
  nextId: 1
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
      addToDo: (state, action: PayloadAction<string>) => {
          state.todos.push({
            id: state.nextId,
            nom: action.payload,
            dateCreation: new Date(),
            isCompleted: false
          });
          state.nextId++;
      },
      deleteToDo: (state, action: PayloadAction<number>) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      },
      modify: (state, action: PayloadAction<Todo>) => {
        const { id, nom } = action.payload;
        const tacheAModifier = state.todos.find((todo) => todo.id === id);
        if (tacheAModifier) {
          tacheAModifier.nom = nom;
        }
      },
      done: (state, action: PayloadAction<number>) => {
        const toBeDone = state.todos.find((todo) => todo.id == action.payload);
        if (toBeDone) {
          toBeDone.isCompleted=true;
        }
      },
      todo: (state, action: PayloadAction<number>) => {
        const toBeDone = state.todos.find((todo) => todo.id == action.payload);
        if (toBeDone) {
          toBeDone.isCompleted=false; 
        }
      },
  }
})

// Action creators are generated for each case reducer function
export const {addToDo, deleteToDo, done, todo, modify} = todoSlice.actions

export default todoSlice.reducer