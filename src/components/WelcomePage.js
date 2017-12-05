import React from 'react'
import {Container, Card, Button} from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import {Link} from 'react-router-dom'
export default function WelcomePage(props) {

  return (
    <div className="WelcomePage col-8 pt-5" >
      <Container>
        <Card className='welcomeCard'>
          <h1>Welcome to <FontAwesome name='plane'/>TripBuilder</h1>


          <Link to='/query/new' ><Button  className="welcomeButton col-11"size='large' outline color="dark">I Know Where I Want to Go...Tell Me The Best Time to Go!</Button></Link>


          <Link to='query/allroutes'><Button  className="welcomeButton col-11"size='large' outline color="dark"> Tell The Best Deals Between ... And ...</Button></Link>


          <Link to='/'><Button className="welcomeButton col-11" size='large' outline color="dark">I Want to Do a Normal Search... Get Out of My Way!</Button></Link>



        </Card>
      </Container>
    </div>
  )
}
