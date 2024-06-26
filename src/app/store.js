import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice'
import todoSlice from "../features/todo/todoSlice";
 const store = configureStore({

  // here we have only single slice that's why we directly store inside the value of reducer
  reducer: todoReducer,

  // if we have multiple slice then we have to store in the form of key and value

  // reducer: {
  //     todo: todoReducer,
  //     item: itemReducer,
  // }
 });

export default store;