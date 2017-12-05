import React from 'react'
import { Card,Row,Col, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Nav } from 'reactstrap'

import moment from 'moment'
import {getCityName, getAirportName} from '../lib/helpers'

export default function DealRender (props){
  const {result} = props
  const aboveBelow = result.index > 0 ? 'above' : 'below'
  const {depCode, arrCode, price, index, } = result
  const depTime = result['dep-time']
  const arrTime = result['arr-time']
  return (
    <div>

{/* [{"outBoundId":"FI696S9FI500S9FI","depCode":"YVR","arrCode":"AMS","price":372.29,"index":-0.779946,"dep-time":"2018-04-06T07:45:00.000Z"}, */}

    <Card>
     <CardHeader >
       <Row>
         <Col md='4' ><h3>{`${getCityName(depCode)} to ${getCityName(arrCode)}`}</h3></Col>
         <Col md='8'>
           <h6>{`Price:$${price.toFixed(2)}`}</h6>
           <strong>{`${(Math.abs(index).toFixed(2))*100}% ${aboveBelow} the average daily low price!`}</strong>
         </Col>
      </Row>
    </CardHeader>
     <CardBody>
       <Row>
         <Col md='12'>
           <Card>
             <h3>Outbound Leg</h3>
             <Row>
               <Col md='4'>
                    <h6>Leaves from {getAirportName(depCode)}</h6>
                    <p>{moment(depTime).format("dddd, MMMM Do YYYY, h:mm a")}</p>
                    </Col>
                <Col md='4'><h6>Arrives at {getAirportName(arrCode)}</h6>
                          <p>{moment(arrTime).format("dddd, MMMM Do YYYY, h:mm a")}</p>
                        
                        </Col>


                </Row>
              </Card>
            </Col>
            <Col>

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
