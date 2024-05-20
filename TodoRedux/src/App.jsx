import React from 'react'
import AddTodos from './components/AddTodos.jsx'
import Todos from './components/Todos.jsx'


//when seeing in the redux dev tools , it shows undefined state

const App = () => {
  return (
    <>
      <AddTodos />
      <Todos />
    </>
  )
}

export default App