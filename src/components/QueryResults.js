import React from 'react'
import ResultRender from './ResultRender'
import Loading from 'react-loading-animation'


function QueryResults (props){
  const { queryResults, loading, index} = props


  return (
    <div class="queryResults">
      {loading && <Loading />}
    { queryResults.map((res) => (
      <div className = "QueryResult" >
        <ResultRender key = {res.CntID} {...res} />
      </div>
      )
    )}
  </div>
  )
}

export default QueryResults
