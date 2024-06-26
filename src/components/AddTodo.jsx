import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
const AddTodo = () => {
    const [Input, setInput] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(Input));
        setInput('');
    }
  return (
    <div className=" p-2">
      <form action="" onSubmit={handleSubmit} className="flex justify-around">
        <input type="text" name="todo"
          className="shadow-lg p-2 border-2 w-2/3 rounded-md text-black"
          value={Input} onChange={(e) => setInput(e.target.value)} placeholder="Enter a task..." />
        <button type="submit" className="text-lg font-bold rounded-md px-6 bg-emerald-400 text-white">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
