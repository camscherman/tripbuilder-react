import React from 'react'
import { Card,Row,Col, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Nav } from 'reactstrap'
import moment from 'moment'
import {getAirlineName, getCityName, getAirportName} from '../lib/helpers'



function ResultRender(props){
  const {price,
    noOfOutBoundLegs,
    outBoundDepDateTime,
    outBoundArrDateTime,
    operatedByAirlineOutbound,
    noOfInBoundLegs,
    inBoundDepDateTime,
    inBoundArrDateTime,
    operatedByAirlineInbound,
    depCode,
    arrCode} = props

    const style = {
      padding:'30px'
    }
  return (
      <div>



     <Card>
       <CardHeader ><Row><Col md='4' ><h3>${!!price && price.toFixed(2)}</h3></Col> </Row></CardHeader>
       <CardBody>
         <Row>
           <Col>
             <Card>
               <h3>Outbound Leg</h3>
               <Row>
                 <Col md='4'>
                      <h6>Leaves at</h6>
                      <p>{moment(outBoundDepDateTime).format("dddd, MMMM Do YYYY, h:mm a")}</p></Col>
                  <Col md='4'><h6>Arrives at</h6><p>{moment(outBoundArrDateTime).format("dddd, MMMM Do YYYY, h:mm a")}</p></Col>
                  <Col md='4'><h6>Airline</h6><p>{getAirlineName(operatedByAirlineOutbound)}</p></Col>

                  </Row>
                </Card>
              </Col>
              <Col>
            <Card><h3>Inbound Leg</h3>
            <Row>
            <Col md='4'>
                   <h6>Leaves at</h6>
                   <p>{moment(inBoundDepDateTime).format("dddd, MMMM Do YYYY, h:mm a")}</p></Col>
               <Col md='4'><h6>Arrives at</h6><p>{moment(inBoundArrDateTime).format("dddd, MMMM Do YYYY, h:mm a")}</p></Col>
               <Col md='4'><h6>Airline</h6><p>{getAirlineName(operatedByAirlineOutbound)}</p></Col>

               </Row>
          </Card>
          </Col>
        </Row>
       </CardBody>
       <CardFooter>
         <Nav>
         <Button outline color="dark" className="mr-auto">Save for later</Button>
         <Button outline color="primary" className='ml-auto'>Book me</Button>
       </Nav>
       </CardFooter>

     </Card>
   </div>

  )
}


export default ResultRender
