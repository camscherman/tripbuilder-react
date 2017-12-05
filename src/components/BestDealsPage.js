import React, {Component} from 'react'
import ShowDealsResults from './ShowDealsResults'
import {Query} from '../lib/requests'
import BestDealsSearch from './BestDealsSearch'
import BestDealsModal from './BestDealsModal'
import Container from 'reactstrap'

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

      {!hasResults && <BestDealsModal onSubmit ={this.submitSearch} toggleBlur={this.props.toggleBlur} className="BestDealsModal"/>}

      {hasResults && <ShowDealsResults dealResults = {this.state.dealResults}/>}
    </div>
  )
  }
}
