import React from 'react'
import { NavLink } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'
 
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}
 
class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div>
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
          >Home</NavLink>

        <NavLink
          to="/about"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
          >About</NavLink>

        <NavLink
        to="/edit"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
        >Customize List</NavLink>
        
        {this.props.user ? 
        <button onClick={this.props.clickHandler}>Log out</button>
        :
        <NavLink
        to="/login"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
        >Login</NavLink>
      }

      
      </div>
    </React.Fragment>
    )
  }
}
 
export default Navbar