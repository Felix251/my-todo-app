import React, { FC } from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import TodoForm from './Pages/todoForm'
import TodoList from './Pages/todoList'



const App: FC = () => {
  interface Tache {
    id: number,
    nom: string,
    dateCreation: Date,
    isCompleted: boolean
  }
  const onAdd = () => {

  }
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '70vh'}} >
      <Router>
        <Routes>
          <Route path="/"  element={<TodoList/>}/>
          <Route path="/addToDo"  element={<TodoForm />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
