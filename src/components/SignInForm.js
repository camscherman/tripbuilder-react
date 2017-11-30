import React from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

function SignInForm (props){
  const {onSubmit = ()=>{}} = props
  const handleSubmit = (event) =>{
    event.preventDefault()
    const {currentTarget} = event
    const formData = new FormData(currentTarget)
    onSubmit({
      email: formData.get('email'),
      password: formData.get('password')

    })

  }

  return (


    <div className = "queryForm">
     <Form className="QueryForm" onSubmit={handleSubmit}>
       <FormGroup>

           <Label htmlFor="email">email</Label>
           <Input type = "email" name = "email"/>

       </FormGroup>
       <FormGroup>

           <Label htmlFor="password">password</Label>
           <Input type="password" name="password"/>

       </FormGroup>

       <FormGroup>


           <Button outline color="primary" type="Submit" value="Submit">Submit</Button>
         </FormGroup>


     </Form>
   </div>


  )
}

export default SignInForm
