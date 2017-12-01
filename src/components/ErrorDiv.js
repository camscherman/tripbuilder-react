import React from 'react'
import { Card,Row,Col, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText,Container, Nav } from 'reactstrap'

export default function ErrorDiv(props){
  const {errors} = props

  return (
    <Container>
      <Card>
        <CardBody>
          {`${errors}`}
        </CardBody>
      </Card>
    </Container>
  )
}
