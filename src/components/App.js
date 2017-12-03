import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Alert } from 'reactstrap';
import jwtDecode from 'jwt-decode'
import AuthRoute from './AuthRoute'

import {
   BrowserRouter as Router,
   Route,
   Link
 } from 'react-router-dom';

//PAGES

import QueryNewPage from './QueryNewPage'
import BestDealsPage from './BestDealsPage'
import UsersNewPage from './UsersNewPage'
import SignUpSuccess from './SignUpSuccess'
import SignInPage from './SignInPage'


class App extends Component {
  constructor (props){
    super(props)
    this.state = {
      user: {}
    }
  }
  componentDidMount(){
    this.signIn()
  }

  signIn = () =>{
      const jwt = localStorage.getItem('jwt')
      if (jwt) {
        const payload = jwtDecode(jwt)
        this.setState({user: payload})
        console.log(payload)
      }
  }

  isSignedIn =  () =>{
    return !!this.state.user.email
  }


  render() {
    return (
    <Router>

      <div className="App">
        <Navbar>
          <Nav className='ml-auto'>

            <NavItem className ={`${this.state.linkOneClass}`}>
          <NavLink href='/query/new'>Tell Me When to Go</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/query/allroutes'>Tell Me Where to Go</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href = '/users/new'  >Sign Up</NavLink>
        </NavItem>
        {this.isSignedIn() ?

        <NavItem>
          <p>Signed In as {this.state.user.email}</p>
        </NavItem> :
        <NavItem>
          <NavLink href = '/sign_in'  >Sign In</NavLink>
        </NavItem> }
      </Nav>
      </Navbar>





          <Route path='/query/new' component = {QueryNewPage} />
          <Route path = '/query/allroutes' component = {BestDealsPage} />
          <Route path ='/users/new' component ={UsersNewPage} />
          <Route path ='/SignUpSuccess' component ={SignUpSuccess} />
          <Route onSubmit = {this.isSignedIn()} path = '/sign_in' component ={SignInPage} />
      </div>
    </Router>
    );
  }
}

export default App;
