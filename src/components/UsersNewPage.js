import React, {Component} from 'react'
import {User} from '../lib/requests'
import UsersNewForm from './UsersNewForm'
import {Container, Row, Col} from 'reactstrap'


class UsersNewPage extends Component {
  constructor (props){
    console.log('Im here')
    super(props)
    this.props = this.props
    debugger
  }
    createUser = (params) => {
      User
      .create(params)
      .then( user => {

        return this.props.history.push('/SignUpSuccess')})
    }
    render(){
      return (
        <div className="UsersNewPage">
          <Container>
            <Row>
              <Col md="3"></Col>
              <Col md="6">
          <UsersNewForm onSubmit = {this.createUser}/>
          </Col>
        </Row>
        </Container>
      </div>

      )
    }

}

export default UsersNewPage
