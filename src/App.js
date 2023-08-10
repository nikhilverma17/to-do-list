import './App.css';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function change(event) {
    const newValue = event.target.value;
    setInput(newValue);
  }

  function addItem() {
    setItems(prevValue => {
      return [...prevValue, input];
    });
    setInput("");
  }

  function deleteItem(index) {
    setItems(prevValue => {
      const updatedItems = [...prevValue];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  }

  function reset() {
    setItems([]);
    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={change} value={input} type="text" placeholder="Add a new item..." />
        <br />
        <button className="add-button" onClick={addItem}>
          <span>Add</span>
        </button>
        <button className="reset-button" onClick={reset}>
          <span>Reset</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <li key={index}>
              {todoItem}
              <button className="delete-button" onClick={() => deleteItem(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
