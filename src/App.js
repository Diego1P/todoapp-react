import './App.css';
import { useState } from 'react';
import {Task} from "./Task"


function App() {
  //const [textColor, settextColor] = useState("blue")
  const [toDoList, settoDoList] = useState([]);
  const [newTask, setnewTask] = useState("");

  const handleChange = (event) => {
    setnewTask(event.target.value)
  };

  const addTask = () => {
    const task = {
      id: toDoList.length === 0? 1 : toDoList[toDoList.length - 1].id + 1,
      name: newTask,
      completed: false,
    }
    settoDoList([...toDoList, task])
  }

  const deleteTask = (id) => {
    settoDoList(toDoList.filter((task) => task.id !== id))
  }

  const completeTask = (id) => {
    settoDoList(
      toDoList.map((task) => {
        if (task.id === id){
          return {...task, completed: true}
        }
        else{
          return {...task, completed: false}
        }
      })
    )
  }

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className='list'>
        {toDoList.map((task) => {
          return( //components
          <Task 
            name = {task.name} 
            id = {task.id} 
            completed = {task.completed} 
            deleteTask = {deleteTask} 
            completeTask = {completeTask}
            />)
        })}
      </div>     
    </div>
  );
}

/*
const User  = (props) => {
  return (
    <div>
      <h1> {props.name} </h1>
      <h1> {props.age} </h1>
      <h1> {props.email} </h1>

    </div>
  );
}
*/

export default App;