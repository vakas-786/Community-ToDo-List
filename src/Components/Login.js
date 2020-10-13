import React from 'react'
import {NavLink} from 'react-router-dom'
import { Form, FormGroup, Input, Button, FormFeedback  } from 'reactstrap'
import '../App.css'


class Login extends React.Component {

  state = {
    username: "",
    password: ""
}

changeHandler = (e) => {
  this.setState({ [e.target.name]: e.target.value })
}

submitHandler = (e) => {
  e.preventDefault() 
  this.props.submitHandler(this.state)
}

  render() {
   
    return (
      <>
      <br></br>

      <Form className="login-form" onSubmit={this.submitHandler} >
        <h2 className='text-center'>Community ToDo List</h2>
        <FormGroup>
          {this.props.error === 'Invalid username or password' ? <><Input invalid type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} /> <FormFeedback>Incorrect Username or Password.</FormFeedback></>:
          <><Input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} /></> }
        </FormGroup>
        <FormGroup>
        {this.props.error === 'Invalid username or password' ? <><Input invalid type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} /> <FormFeedback>Incorrect Username or Password.</FormFeedback></>:
        <Input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />}
        </FormGroup>
        <br></br>
        <div className='buttons-form'>
        <Button color='primary' type="submit" value="Login" >Login</Button>
      <NavLink to="/signup">
      <Button color='warning' >
        Register
      </Button>
      </NavLink>
        </div>
      </Form>
      
      </>
    )
  }
}
 
export default Login