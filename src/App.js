import React from 'react'
import './App.css'
import Signup from './Components/Signup'
import Todo from './Todo'
import { Route, Switch, withRouter } from 'react-router-dom'
import Login from './Components/Login'
import CategoryForm from './Components/CategoryForm'
import Navbar from './Components/NavBar'


class App extends React.Component {

  state= {
    user: undefined,
    error: ''
  }

  componentDidMount() {
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

componentWillUnmount() {
  this.mounted = false 
}

  signupHandler = (userObj) => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        accepts: "application/json", 
        "content-type": "application/json"
      },
      body: JSON.stringify({ user: userObj })
    })
    .then(response => response.json())
    .then(data =>{
      if(data.error === 'failed to create user') {
        this.setState({error: 'Please enter a different username' })
      } else {
        this.setState({error: '' })
        this.props.history.push("/login")
      }
    })
  }

  loginHandler = (userObj) => {
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        accepts: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({ user: userObj})
    })
    .then(response => response.json())
    .then(data => {
      if (data.jwt !== undefined) {
        localStorage.setItem("token", data.jwt)
        this.setState({user: data.user}, ()=> this.props.history.push("/"))
      }
    })
  }

  logoutHandler = () => {
    localStorage.removeItem('token')
    this.props.history.push("/login")
    this.setState({ user: false})
  }

  render() {    
    return (
      <Switch>
        {this.state.user 
        ?
        <>
        <br></br>
        <Navbar clickHandler={this.logoutHandler} user={this.state.user} />
        <br></br>
        
        <Route exact path="/" component={Todo} />
        <Route exact path='/edit' render={() => <CategoryForm />} />
        </>
        :
        <>
        <Route exact path='/signup' render={() => <Signup error ={this.state.error} submitHandler={this.signupHandler}/>} />
        <Route exact path='/login' render={() => <Login submitHandler={this.loginHandler}/>} />
        </>
      }
        </Switch>
    )
  }
}

export default withRouter(App)
