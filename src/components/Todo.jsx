import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../features/todo/todoSlice";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [newText, setNewText] = useState("");

  const handleEdit = (id, currentText) => {
    setEditingId(id);
    setNewText(currentText);
  };

  const handleSave = (id) => {
    if (newText.trim()) {
      dispatch(editTodo({ id, newText })); // Dispatch action to update todo
      setEditingId(null); // Exit edit mode
      setNewText(""); // Clear input field
    }
  };

  useEffect(() => {
    if (todos.length > 0)
      setTimeout(() => {
        setLoading(false);
      }, 1000);
  }, [todos])
  
  if (loading) {
    return (
      <div className="border-2 w-full h-32 flex justify-center items-center">
        <p className="text-black">No Task Yet...</p>
      </div>
    );
  }

  return (
    <div className=" w-full h-60 overflow-auto">
      {todos.map((todo, index) => (
        <div key={todo.id} className="flex justify-between border-b-2 p-4">
          {editingId === todo.id ? (
            <>
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="w-2/3 border-2 rounded-md text-black p-2"
              />
              <button
                className="text-lg font-bold rounded-md px-6 bg-yellow-500 text-white"
                onClick={() => handleSave(todo.id)}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <span className="text-black text-md mt-2">{index + 1}.</span>
              <p className="w-2/3  rounded-md text-black p-2">
                {todo.text.toUpperCase()}
              </p>
              <button
                className="text-2xl font-semibold px-2 text-blue-500"
                onClick={() => handleEdit(todo.id, todo.text)}
              >
                <FaEdit />
              </button>
              <button
                className="text-2xl font-semibold text-red-600 px-2"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                <RiDeleteBin5Fill />
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Todo;
