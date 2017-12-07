import React, {Component} from 'react'
import ShowDealsResults from './ShowDealsResults'
import {Query} from '../lib/requests'
import BestDealsSearch from './BestDealsSearch'
import BestDealsModal from './BestDealsModal'
import Container from 'reactstrap'
import BookingModal from './BookingModal'
import {formatIndexVals} from '../lib/helpers'
import DealsIndexModal  from './DealsIndexModal'


export default class BestDealsPage extends Component{
  constructor (props){
    super(props)

    this.state = {
      dealResults:[],
      bookingModal: false,
      indexVals: [],
      dealsIndexModalOpen: false,
      indexDepCode:"",
      indexArrCode: "",
      twoWayResults: []

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
  getIndexedValues = (params)=>{
    Query
      .getIndex(params)
      .then(res =>{
        const formattedVals = formatIndexVals(res)
        this.setState({
          indexVals: formattedVals,
          indexDepCode: params.depCode,
          indexArrCode: params.arrCode
        })
      })
  }
// Back end must be fixed before implementation
  // getOneDate = (params)=>{
  //   Query
  //   .getOneDate(params)
  //   .then(res=>{
  //     console.log("TWO WAY RESULT", res)
  //     this.setState({
  //       twoWayResults: res
  //     })
  //   })
  //
  // }

  toggleDealsIndexModal = ()=>{
    this.setState({
      dealsIndexModalOpen: !this.state.dealsIndexModalOpen
    })
  }

  toggleBookingModal =()=>{
    this.setState({bookingModal: !this.state.bookingModal})
  }
  render(){
    const hasResults = this.state.dealResults.length > 0
    return (
    <div className="BestDealsPage" >

      {!hasResults && <BestDealsModal  onSubmit ={this.submitSearch} toggleBlur={this.props.toggleBlur} className="BestDealsModal"/>}
      {hasResults && <DealsIndexModal
                      dealsIndexModalOpen={this.state.dealsIndexModalOpen}
                      toggleDealsIndex = {this.toggleDealsIndexModal}
                      depCode={this.state.indexDepCode}
                      arrCode={this.state.indexArrCode}
                      index = {this.state.indexVals}/>}
      {hasResults && <BookingModal toggleBookingModal = {this.toggleBookingModal} bookingModal = {this.state.bookingModal}/>}
      {hasResults && <ShowDealsResults
                      // getTwoWay = {this.getOneDate}
                      getIndexedValues={this.getIndexedValues}
                      toggleModal= {this.toggleBookingModal}
                      dealResults = {this.state.dealResults}
                      toggleDealsIndexModal = {this.toggleDealsIndexModal}/>}
    </div>
  )
  }
}
