import React from 'react'
import DealRender from './DealRender'
import {Container} from 'reactstrap'
import airports from '../data/airports'

export default function ShowDealsResults (props){
  const {dealResults} = props
  // const {getTwoWay = ()=>{}}=props
  const {toggleModal =()=>{}} = props
  const {toggleDealsIndexModal = ()=>{}} = props
  const {getIndexedValues=()=>{}} = props


  return (
    <div className="ShowDealsResults">
      <Container>
    {dealResults.map(result=>(
      <DealRender
        // getTwoWay = {getTwoWay}
        getIndexedValues={getIndexedValues}
        toggleDealsIndexModal = {toggleDealsIndexModal}
        result ={result}
        toggleModal={toggleModal}/>
    ))}
  </Container>
  </div>
  )

}
