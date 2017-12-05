import React from 'react'
import DealRender from './DealRender'
import {Container} from 'reactstrap'
import airports from '../data/airports'

export default function ShowDealsResults (props){
  const {dealResults} = props


  return (
    <div className="ShowDealsResults">
      <Container>
    {dealResults.map(result=>(
      <DealRender result ={result} />
    ))}
  </Container>
  </div>
  )

}
