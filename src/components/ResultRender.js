import React from 'react'

// import {airlines} from 'airline-codes'

function ResultRender(props){
  const {price,
    noOfOutBoundLegs,
    outBoundDepDateTime,
    outBoundArrDateTime,
    operatedByAirlineOutbound,
    noOfInBoundLegs,
    inBoundDepDateTime,
    inBoundArrDateTime,
    operatedByAirlineInbound} = props

    const style = {
      padding:'30px'
    }
  return (
      <div>
          <p>OutBound Flight</p>
          <p>${price.toFixed(2)}</p>
      <p>NUMBER OF OUTBOUND LEGS: {noOfOutBoundLegs}</p>
      <p>DEP TIME: {outBoundDepDateTime}</p>
      <p>ARR TIME:{outBoundArrDateTime}</p>
      <p>AIRLINE: {operatedByAirlineOutbound}</p>
        <p>InBound Flight</p>
      <p>NUMBER OF INBOUND LEGS: {noOfInBoundLegs}</p>
      <p>DEP TIME: {inBoundDepDateTime}</p>
      <p>ARR TIME: {inBoundArrDateTime}</p>
      <p>AIRLINE: {operatedByAirlineInbound}</p>
    </div>
  )
}


export default ResultRender
