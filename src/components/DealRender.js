import React from 'react'
import { Card,Row,Col, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Nav } from 'reactstrap'

export default function DealRender (props){
  const {result} = props
  const {depCode, arrCode, price, index, } = result
  const depTime = result['dep-time']
  const arrTime = result['arrTime']
  return (
    <div>

{/* [{"outBoundId":"FI696S9FI500S9FI","depCode":"YVR","arrCode":"AMS","price":372.29,"index":-0.779946,"dep-time":"2018-04-06T07:45:00.000Z"}, */}

    <Card>
     {/* <CardHeader ><Row><Col md='4' ><h3>${price.toFixed(2)}</h3></Col> </Row></CardHeader>
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
                <Col md='4'><h6>Airline</h6><p>{operatedByAirlineOutbound}</p></Col>

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
             <Col md='4'><h6>Airline</h6><p>{operatedByAirlineOutbound}</p></Col>

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
     </CardFooter> */}

    </Card>
    </div>
  )
}
