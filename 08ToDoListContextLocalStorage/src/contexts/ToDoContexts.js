import { createContext, useContext } from "react";


export const ToDoContext =  createContext({
    todos:[
        {
            id: 1,
            todo:'To Do Message',
            complated: false,
        }
    ],
    addToDo: (todo) => {},
    deleteToDo: (id) => {},
    updateToDo: (id,todo) => {},
    toggleToDo: (id) => {},
})

export const useToDo = () => {
    return useContext(ToDoContext);
}

export const ToDoProvider = ToDoContext.Provider