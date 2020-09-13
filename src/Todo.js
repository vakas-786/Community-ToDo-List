import React from 'react'
import './App.css'
import Category from './Containers/Category'
import TaskContainer from './Containers/TaskContainer'

class Todo extends React.Component {

  state = {
    selectedCategory: "All", 
    tasks: [],
    user: false
  }

  componentDidMount() {
    this.mounted = true 
    if (this.mounted === true) {
      this.fetchTasks() 
      let mounted = true
    if (mounted === true) {

      let token = localStorage.getItem("token")
      if (token !== null || undefined) {
        fetch('http://localhost:3000/api/v1/profile', {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(response => response.json())
        .then(data => this.setState({user: data.user}), ()=> this.props.history.push("/"))
      } else {
        this.props.history.push("/login")
      }
    }
    }
  }

  componentWillUnmount() {
    this.mounted = false 
  }


  fetchTasks = () => {
    fetch('http://localhost:3000/tasks')
    .then(response => response.json())
    .then(tasks => this.setState({ tasks: tasks }))
  }

  filterTasks = () => {
    if (this.state.selectedCategory === 'All') {
      return this.state.tasks
    }else {
      return this.state.tasks.filter(taskObj => taskObj.category === this.state.selectedCategory)
    }
  }

  selectedCategory = (e) => {
    let select = e.target.innerText
    this.setState({selectedCategory: select })
  }

  addTask = (taskObj) => {
    fetch('http://localhost:3000/tasks', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(taskObj)
    })
    .then(response => response.json())
    .then(tasks => this.setState( {tasks: [...this.state.tasks, tasks] }))
    }
  


  deleteTask = (obj) => {
    console.log(obj)
    let newArr = this.state.tasks.filter(task => !(task.text === obj.text && task.category === obj.category))
    this.setState({tasks: newArr})
    fetch(`http://localhost:3000/tasks/${obj.id}`, {

      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(obj)
    })
    }
  
  
  render() {
    
    return (
      
      <div className="App">
        <h2>My tasks</h2> 
        <Category user={this.state.user} selectedState ={this.state.selectedCategory} selectedCategory ={this.selectedCategory} />    
        <TaskContainer user={this.state.user} addTask={this.addTask}  deleteTask={this.deleteTask} category={this.state.selectedCategory}  tasks={this.filterTasks()} /> 
    </div> 
     
     
    )
  }
}


export default Todo