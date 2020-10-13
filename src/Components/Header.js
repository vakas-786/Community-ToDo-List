import React from 'react'
import { NavLink as RRNavLink } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavLink, Badge} from 'reactstrap'
import '../App.css' 

  class Header extends React.Component {
    render() {
      return (
        <div>
          <Navbar expand="md">
          <Nav pills  >
            <div className='logout'>
            <NavItem onClick={this.props.clickHandler}><h6><Badge color='danger'><NavLink style={{color: 'white'}}>Logout</NavLink></Badge></h6>
          </NavItem>
          </div>
          <br></br>
        <NavItem >
          <NavLink 
          tag={RRNavLink} className="nav-link" to="/" activeClassName="active" exact path="/"
          >My Tasks</NavLink>
          </NavItem>
          
          <NavItem >
          <NavLink 
           tag={RRNavLink} className="nav-link" to="/edit" activeClassName="active" exact path="/edit"
          >Change Categories</NavLink>
          </NavItem>
          </Nav>
          </Navbar>
        </div>
     
      )
    }
  }
   
  export default Header
