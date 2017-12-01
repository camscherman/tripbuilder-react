import React from 'react'
import ResultRender from './ResultRender'
import Loading from 'react-loading-animation'
import moment from 'moment'
import CalendarHeatmap from 'react-calendar-heatmap'
import {Container} from 'reactstrap'


function QueryResults (props){
  const { queryResults, loading} = props




  return (
    <div class="queryResults">
      {loading && <Loading />}
    { queryResults.map((res) => (
      <div className = "QueryResult" >

        <Container>
          <ResultRender key = {res.CntID} {...res} />
        </Container>
      </div>
      )
    )}
  </div>
  )
}

export default QueryResults
