import React from 'react';
import { Button,Card, Container, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Airports from 'airports'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

 function QueryForm(props) {

   const {onSubmit = ()=>{}} = props
   const {handleChangeOutbound =()=>{}}= props
   const {handleChangeInbound=()=>{}}= props
   const airports = Airports
   const largeAirports = airports.map(item =>{if( item.size==='large'){
     return {value: item.iata, label:`${item.name}`}
   } })
   const options =  largeAirports.filter(item=> item !== undefined && item.label !== 'null')
   console.log("Options:", options)
   const {outValue, inValue} = props

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
           <Select name='departure' value={outValue} options={options} onChange={handleChangeOutbound} matchPos='any' matchProp='any'/>
       </FormGroup>
       <FormGroup>
           <Label htmlFor="arrival">Arrival City</Label>
           <Select name='arrival' value={inValue} options={options} onChange={handleChangeInbound} matchPos='any' matchProp='any'/>
       </FormGroup>
       <FormGroup>
           <Label htmlFor="length">Desired trip length (days)</Label>
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
