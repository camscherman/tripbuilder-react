import React from 'react'
import DealRender from './DealRender'

export default function ShowDealsResults (props){
  const {dealResults} = props
  return (
    dealResults.map(result=>(
      <DealRender result ={result} />
    ))
  )

}
