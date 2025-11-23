import { useState } from "react";

function ToDoList() {
  const [list, setList] = useState([]);
  const [newTask,setNewTask]=useState("");

  function handleRemoveItem(id) {
    setList((l) => l.filter((_, index) => index !== id));
  }

  function handleAddItem() {
    if (newTask.trim() === "") return;
    setList((l) => [...l, newTask]);
    setNewTask("");
  }
  function handleInputChange(event){
    setNewTask(event.target.value)
  }

  function handleDownButtom(id) {
    setList((l) => {
      if (id >= l.length - 1) return l;
      const newList = [...l];
      [newList[id], newList[id + 1]] = [newList[id + 1], newList[id]];
      return newList;
    });
  }

  function handleUpButtom(id) {
    setList((l) => {
      if (id === 0) return l;
      const newList = [...l];
      [newList[id], newList[id - 1]] = [newList[id - 1], newList[id]];
      return newList;
    });
  }

  return (
    <div className="todo-container">
      <h1 className="title"> To-Do List 🌸</h1>

      <div className="input-group">
        <input type="text"  placeholder="Enter a task..."  value={newTask} onChange={handleInputChange}/>
        <button className="btn add" onClick={handleAddItem}>
          Add
        </button>
      </div>

      <ul className="list">
        {list.map((item, index) => (
          <li key={index} className="item">
            <span>{item}</span>

            <div className="actions">
              <button className="btn delete" onClick={() => handleRemoveItem(index)}>Delete</button>
              <button className="btn move" onClick={() => handleUpButtom(index)}>👆</button>
              <button className="btn move" onClick={() => handleDownButtom(index)}>👇</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
