import React from 'react'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
function App() {

  return (
    <div className=' w-full h-screen  flex justify-center items-center'>
      <div className="text-black w-1/2 bg-transparent  p-4  shadow-lg border-t-2 rounded-lg ">
        <h1 className="text-2xl  text-center mb-4 font-bold capitalize ">
          {" "}
           Todo List Demo App
        </h1>
        <AddTodo />
        <Todo />
      </div>
    </div>
  );
}

export default App
