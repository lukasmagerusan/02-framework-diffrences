import React, { useState } from "react";
import "./App.css";

function App() {

  const [title, setTitle] = useState('⚛️ React Todo App')
  const [todo, setTodo] = useState('')
  const [toDoList, setToDoList] = useState([])

  function addToDo(event) {
    event.preventDefault()
    setToDoList([...toDoList, todo])
  }

  function removeToDo() { console.log("Es funktioniert") }

  return (
    <div>
      <h1>{title}</h1>
      <input type="text" value={todo} onChange={event => setTodo(event.target.value)} />
      <button onClick={addToDo}>Hinzufügen</button>
      <ul>
        {
          toDoList.map((item, i) => (
            <div>
              <li key={i}>
                {item}
              </li>
              <button onClick={removeToDo()}>❌</button>
            </div>
          ))
          //
        }
      </ul>
    </div>
  );
}

export default App;