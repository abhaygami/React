import React , { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToDoProvider } from './contexts'
import { TodoForm, TodoItem } from './Components'

function App() {

    const [todos,setTodos] = useState([]);

    //on page load it will load previusly added todos
    useEffect (() => {
        const todos = JSON.parse(localStorage.getItem("todos"));

        if(todos && todos.length > 0) {
            setTodos(todos);
        }
    } , [])

    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todos));
    } , [todos])

    const addToDo = (todo) => {
        setTodos((prevTodos) => [{id:Date.now(), ...todo} , ...prevTodos] );
    }

    const deleteToDo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id !== id));
    }

    const updateToDo = (id,todo) => {
        setTodos((prevTodos) => prevTodos.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo)));
    }

    const toggleToDo = (id) => {
        setTodos((prevTodos) => prevTodos.map(
            (prevTodo) => prevTodo.id === id ? {...prevTodo,complated: !(prevTodo.complated)} : prevTodo 
        ))
    }

  return (
    <ToDoProvider value = {{todos,deleteToDo,addToDo,updateToDo,toggleToDo}}>
    <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                {/* Todo form goes here */} 

                <TodoForm />

            </div>
            <div className="flex flex-wrap gap-y-3">
                {todos.map((todo) => (
                    <div key={todo.id} className='w-full'>
                        <TodoItem todo={todo} />
                    </div>
                ))}
            </div>
        </div>
    </div>
    </ToDoProvider>
  )
}

export default App
