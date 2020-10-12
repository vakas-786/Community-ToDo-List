import React from 'react' 
import '../App.css'
import { Form, FormGroup, Input, Button, FormFeedback  } from 'reactstrap'

class Signup extends React.Component {
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
        return(
          <>
          <br></br>
            <Form className="login-form" onSubmit={this.submitHandler} >
            <h1 className='text-center'>Create an Account</h1>
            <FormGroup>
            {this.props.error === 'Please enter a different username' ? <><Input invalid type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} /> <FormFeedback>Sorry! That name is already taken</FormFeedback></>: 
            <Input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} />} 
            </FormGroup>
            <FormGroup>
              <Input  type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler}/>
            </FormGroup>
            <br></br>
            <div className='buttons-form'>
            <Button color='success' type="submit" value="Sign Up" >Sign Up</Button>
            </div>
          </Form>
          </>
        )
    }
}

export default Signup 