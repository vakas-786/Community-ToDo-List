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
      let mounted = true
    if (mounted === true) {

      let token = localStorage.getItem("token")
      if (token !== null || undefined) {
        fetch('http://localhost:3000/api/v1/profile', {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(response => response.json())
        .then(data => this.setState({user: data.user, tasks: data.user.tasks}), ()=> this.props.history.push("/"))
      } else {
        this.props.history.push("/login")
      }
    }
    }
  }

  componentWillUnmount() {
    this.mounted = false 
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
  
    // fetch('http://localhost:3000/tasks', {
    //       method: "GET",
    //       headers: { Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo4fQ.NGxgYVcJ5Gv7zD3-btBf9YYLCA_rwsrxFKjAveqjdYk"}` },
    //     })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //use this to fetch transactions by giving it the token in the headers. The backend Index will fetch all the tasks for the current_user.


  deleteTask = (obj) => {
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
        <br></br>
        
        <Category user={this.state.user} selectedState ={this.state.selectedCategory} selectedCategory ={this.selectedCategory} />    
        <TaskContainer user={this.state.user} addTask={this.addTask}  deleteTask={this.deleteTask} category={this.state.selectedCategory}  tasks={this.filterTasks()} /> 
    </div> 
     
     
    )
  }
}


export default Todo