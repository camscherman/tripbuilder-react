import React from 'react'
import ResultRender from './ResultRender'

import moment from 'moment'
import CalendarHeatmap from 'react-calendar-heatmap'
import {Container} from 'reactstrap'


function QueryResults (props){
  const { queryResults, loading, depCode, arrCode} = props




  return (
    <div class="queryResults">

    { queryResults.map((res) => (
      <div className = "QueryResult" >

        <Container>
          <ResultRender key = {res.CntID} depCode={depCode} arrCode={arrCode} {...res} />
        </Container>
      </div>
      )
    )}
  </div>
  )
}

export default QueryResults
