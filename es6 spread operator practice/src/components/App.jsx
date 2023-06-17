import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);


  function handleChange(event) {
    const newValue = event.target.value;
    setTodo(newValue);
  }

  function handleClick(){
    setItems((prevValue) => {
      return [...prevValue,todo];
    });
    setTodo("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={todo} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {
          items.map((item) => {
           return <li>{item}</li>
          })
        }
        </ul>
      </div>
    </div>
  );
}

export default App;
