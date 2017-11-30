import React, {Component} from 'react'
import SignInForm from './SignInForm'
import {Token} from '../lib/requests'

class SignInPage extends Component {
  constructor (props){
    super (props)
  }

  signInUser =  (params) =>{
    const {onSignIn = () =>{console.log("Empty")}} = this.props;

    Token
    .create(params)
    .then( data =>{
      if(!data.error){
        const {jwt} = data
        localStorage.setItem('jwt', jwt)
        onSignIn()
        this.props.history.push('/')
      }
    })
  }

  render(){
    return(
      <div className ="SignInPage">
        <SignInForm onSubmit = {this.signInUser} />
      </div>
    )
  }
}

export default SignInPage
