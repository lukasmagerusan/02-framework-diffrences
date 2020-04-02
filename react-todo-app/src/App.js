import React, { useState } from "react";
import "./App.css";

function App() {

  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])

  function todoChecked(index) {
    const updateTodos = [...todos]
    updateTodos[index].done = !updateTodos[index].done
    setTodos(updateTodos)
  }

  function newTodoChanged(event) {
    setNewTodo(event.target.value)
  }

  function removeTodo(index) {
    const updateTodos = [...todos]
    updateTodos.splice(index, 1)
    setTodos(updateTodos)
    console.log(todos)
  }

  function submitToDo(formSubmitted) {
    formSubmitted.preventDefault()
    const updateTodos = [...todos]
    setTodos([...todos, {
      title: newTodo,
      done: false
    }])
    setNewTodo('')
  }

  return (
    <div>
      <h1>⚛️ react-todo-app</h1>
      <form onSubmit={submitToDo}>
        <label>Neue Aufgabe!</label>
        <input value={newTodo} type="text" onChange={newTodoChanged} />
        <button type="submit">Aufgabe hinzufügen</button>
      </form>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo.title}>
              <span className={todo.done ? "done" : ""}>{todo.title}</span>
              <button type="checkbox" onClick={() => todoChecked(index)}>✅</button>
              <button type="" onClick={() => removeTodo(index)}>❌</button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;