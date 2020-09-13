import React from 'react'
import Task from '../Components/Task'
import TaskForm from '../Components/TaskForm'

const TaskContainer = (props) => {
    
    const renderTask = () => {
        
        return props.tasks.map((taskObj, index) =>  <Task key={index} task={taskObj} category={taskObj.category} text={taskObj.text} deleteTask={props.deleteTask}/>)
    }
    
    return (
        <div className ="tasks" >
            <h5>Tasks</h5>
            <TaskForm addTask={props.addTask} />   
            {renderTask()}
        </div>
        ) 
        
}

export default TaskContainer