export const Task = (props) => {
    return ( 
        <div className='task' style={{backgroundColor:props.completed? "green" : "white"}}>
          <h1> {props.name} </h1>
          <button onClick={() => props.deleteTask(props.id)}> Delete Task </button>
          <button onClick={() => props.completeTask(props.id)}> Complete Task </button>
        </div>
      )
}