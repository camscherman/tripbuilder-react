import React, {Component} from 'react'
import ShowDealsResults from './ShowDealsResults'

export default class BestDealsPage extends Component{
  constructor (props){
    super(props)

    this.state = {
      dealsResults:[]
    }
  }
  render(){
    return (
    <div className="BestDealsPage">
      <ShowDealsResults dealResults = {this.state.dealsResults}/>
    </div>
  )
  }
}
