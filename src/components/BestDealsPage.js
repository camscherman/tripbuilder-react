import React, {Component} from 'react'
import ShowDealsResults from './ShowDealsResults'
import {Query} from '../lib/requests'
import BestDealsSearch from './BestDealsSearch'

export default class BestDealsPage extends Component{
  constructor (props){
    super(props)

    this.state = {
      dealResults:[]
    }
  }
  submitSearch = (params)=>{
    Query
    .getAllRoutes(params)
    .then(res =>{
      console.log(res)
      this.setState({
        dealResults: res
      })
    })
  }
  componentDidMount(){

  }
  render(){
    const hasResults = this.state.dealResults.length > 0
    return (
    <div className="BestDealsPage" >
      {!hasResults && <BestDealsSearch onSubmit ={this.submitSearch} />}

      {hasResults && <ShowDealsResults dealResults = {this.state.dealResults}/>}
    </div>
  )
  }
}
