import React from 'react'
import { Button,Card, Container, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function BookingForm(props){

const handleSubmit = ()=>{
}
  return(
    <Container>

    <div className = "bookingForm">
     <Form className="bookingForm" onSubmit={handleSubmit}>
       <FormGroup>
           <Label htmlFor="first_name">First Name</Label>
           <Input type='text'></Input>
       </FormGroup>
       <FormGroup>
           <Label htmlFor="last_name">Last Name</Label>
           <Input type='text'></Input>

       </FormGroup>
       <FormGroup>
           <Label htmlFor="email">email</Label>
           <Input type='email'></Input>

       </FormGroup>
       <FormGroup>
           <Label htmlFor="address">Address</Label>
           <Input type='text'></Input>

       </FormGroup>
       <FormGroup>
           <Label htmlFor="phone">Phone Number</Label>
           <Input type='text'></Input>

       </FormGroup>

       <FormGroup>


           <Button outline color='primary' type="Submit" value="Submit">Proceed to Payment</Button>

          </FormGroup>

     </Form>
   </div>

 </Container>

  )
}
