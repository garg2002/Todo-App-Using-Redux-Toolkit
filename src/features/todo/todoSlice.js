import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: { 

        //addTodo is a property and it contains an anonymous function, this function contains two parameter:
        // 1. state - this is used to for update or retrieve data from the slice . 
        // 2. action - this is an object which describe what changes have been made and sometimes we need id to remove the todo then that id will be available through action.
        
         
        addTodo: (state,action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(newTodo);
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((item) => item.id !== action.payload);
        },

        editTodo: (state,action) => {
            const { id, newText } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = newText;
            }
        }
    }
})

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;