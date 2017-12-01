import React from 'react';
import { Button,Card, Container, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

 function QueryForm (props) {

   const {onSubmit = ()=>{}} = props
   const handleSubmit = event => {
     event.preventDefault();
     const {currentTarget} = event;

     const formData = new FormData(currentTarget);

     onSubmit({
       depCode: formData.get('departure'),
       arrCode: formData.get('arrival'),
       length: formData.get('length')
     });
     // call the API here
     // requests.submitToAPI(
   };

  return (
    <Container>
      <Card>
    <div className = "queryForm">
     <Form className="QueryForm" onSubmit={handleSubmit}>
       <FormGroup>
           <Label htmlFor="departure">Departure City</Label>
           <Input name = "departure"/>
       </FormGroup>
       <FormGroup>
           <Label htmlFor="arrival">Arrival City</Label>
           <Input name="arrival"/>
       </FormGroup>
       <FormGroup>
           <Label htmlFor="length">Length City</Label>
           <Input name="length"/>
       </FormGroup>
       <FormGroup>


           <Button outline color='primary' type="Submit" value="Submit">Submit</Button>

         </FormGroup>

     </Form>
   </div>
 </Card>
 </Container>

   )
 }

 export default QueryForm;
