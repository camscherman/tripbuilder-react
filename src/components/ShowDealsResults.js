import React from 'react'
import DealRender from './DealRender'

export default function ShowDealsResults (props){
  const {dealsResults} = props
  return (
    dealsResults.map(result=>(
      <DealRender result ={result} />
    ))
  )

}
