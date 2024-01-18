import React, { useState } from 'react';
import './TodoList.css'; 

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    setTasks([...tasks, { text: newTask}]);
    setNewTask('');
  };

  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const handlecheckbox = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  }; 



/////////////////////My optinal
  const handleMarkAll = () => {
    setTasks(tasks.map((task) => ({ ...task, completed: true })));
  };
///////////////////////My Optional
  const handleClearAll = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };




  return (
    <div className="todo-container">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <div className="button-container">
        <button style={{background:"green", width:"100px", }} onClick={handleAddTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handlecheckbox(index)}
            />
            <span className={task.completed ? 'completed' : ''}>
              {task.text}
            </span>
            <button onClick={() => handleRemoveTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

{/*///////////////////My Optional  */}
      <div className="additional-buttons">
        <button onClick={handleMarkAll}>Mark All Completed</button>
        <button onClick={handleClearAll}>Clear Completed</button>
      </div>
    </div>


  );


}

export default TodoList;


