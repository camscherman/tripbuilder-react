import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,  Alert } from 'reactstrap';
import jwtDecode from 'jwt-decode'
import AuthRoute from './AuthRoute'
import Background from './Background'
import {Container} from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import WelcomePage from './WelcomePage'

import {
   BrowserRouter as Router,
   Route,
   Link,
   Switch
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
      user: {},
      modal: false,
      backgroundClass: 'background',
      cardClass: 'welcomeCard'

    }
  }
  componentDidMount(){
    this.signIn()
    this.setCardClass()
  }

  signIn = () =>{
      const jwt = localStorage.getItem('jwt')
      if (jwt) {
        const payload = jwtDecode(jwt)
        this.setState({user: payload})
        console.log(payload)
      }
  }
  setCardClass(){
    this.setState({cardClass: 'welcomeCardVisible'})
  }

  isSignedIn =  () =>{
    return !!this.state.user.email
  }




  backgroundClass=()=>{
    return this.state.blurred === true ? 'backgroundBlur' : 'background'
  }
  toggleBlur = ()=>{
    this.setState({blurred: !this.state.blurred})
  }
  setBlurred = ()=>{
    this.setState({blurred: true})
  }

  render() {
    return (
    <Router>

      <div className="App">
        <Background className = {this.backgroundClass()}/>
        <Navbar className='navbar1' fixed='top' color='faded' expand="md">
          <Link to='/'><NavbarBrand><FontAwesome name='plane'/>TripBuilder</NavbarBrand></Link>
          <Nav className='ml-auto'>

            <NavItem className ={`${this.state.linkOneClass}`}>
          <Link to='/query/new'>Tell Me When to Go</Link>
        </NavItem>
        <NavItem>
          <Link to='/query/allroutes'>Tell Me Where to Go</Link>
        </NavItem>
        {/* <NavItem>
          <Link to = '/users/new'  >Sign Up</Link>
        </NavItem> */}
        {/* {this.isSignedIn() ?

        <NavItem>
          <Link>Signed In as {this.state.user.email}</Link>
        </NavItem> :
        <NavItem>
          <Link to = '/sign_in'  >Sign In</Link>
        </NavItem> } */}
      </Nav>
      </Navbar>



      <Container className='appBody container-flex d-flex justify-content-center '>
        <Switch>
          <Route path='/query/new' render= {props=> <QueryNewPage toggleBlur={this.toggleBlur} setBlurred={this.setBlurred} />} />
          <Route path = '/query/allroutes' render={props=> <BestDealsPage toggleBlur={this.toggleBlur} setBlurred={this.setBlurred}/>} />
          <Route path ='/users/new' component ={UsersNewPage} />
          <Route path ='/SignUpSuccess' component ={SignUpSuccess} />
          <Route path='/' render={props=> <WelcomePage cardClass={this.state.cardClass}/>}/>
          <Route onSubmit = {this.isSignedIn()} path = '/sign_in' component ={SignInPage} />
        </Switch>
      </Container>
      </div>
    </Router>
    );
  }
}

export default App;
