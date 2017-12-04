import React from 'react'
import Loading from 'react-loading-animation'
import {Container,Row,Col} from 'reactstrap'

export default function modalBackground(props){
  return(
    <div className= 'modalBackground'>
      <Container>
    <Row>
      <Col md='4'></Col>
      <Col md='4'>
        <div style={{alignItems: 'center', justifyContent: 'center', 'top': '80px', marginTop:'80px' }} >
    <Loading />
    <h6>Fetching up to date info on this route...</h6>
  </div>
    </Col>
  </Row>
  </Container>
  </div>
  )
}
