import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { configureStore } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const initialState = {
  value: 0,
  status: "idle",
};

export const todosSlice = createSlice({
  name: "counter",
  initialState: {
    allTodos: [
      {
        id: 1,
        title: "homework",
        status: "done",
        day: "lastday",
      },
      {
        id: 2,
        title: "excise",
        status: "notStart",
        day: "tomorrow",
      },
      {
        id: 3,
        title: "swimming",
        status: "inprogress",
        day: "today",
      },
    ],
    
  },

  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTodo: (state, action) => {
      state.allTodos.unshift({
        id: nanoid(),
        title: action.payload,
        status: "done",
        day: "today",
      });
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
    changeTodo: (state, action) => {
      const { value, id } = action.payload;
      const newData = state.allTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: value };
        }
        return { ...todo };
      });
      state.allTodos = newData;
    },

    changeDay: (state, action) => {
      const nameDay = action.payload;

      // if (nameDay === "lastday") {
      //   return state.allTodos.filter(y=>{
      //       if(nameDay===y.day){}
      //   })
      // }
      // if (nameDay === "today") {
      //   return <></>;
      // }
      // if (nameDay === "tommorow") {
      //   return <></>;
      // }
      // console.log(action.payload);
    },
  },
});

// reducer
const todosReducer = todosSlice.reducer;

export const store = configureStore({
  reducer: {
    todosReducer: todosReducer,
  },
});

export const todoSelector = (state) => state.todosReducer.allTodos;

// action export
export const { addTodo, changeTodo, changeDay } = todosSlice.actions;

export default store;
