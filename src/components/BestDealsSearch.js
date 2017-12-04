import React, {Component} from 'react'
import {Button,Form, Container} from 'reactstrap'
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import moment from 'moment'


export default class BestDealsSearch extends Component {
  constructor (props){
    super (props)
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput:null
    }
  }
   handleSubmit =(event)=>{
    const {onSubmit = ()=>{}} = this.props

    event.preventDefault()
    console.log(this.state.startDate.format(), this.state.endDate.format())
    onSubmit({
      startDate: this.state.startDate.format(),
      endDate: this.state.endDate.format()
    })
  }
  render(){
  return (
    <Container>
    <Form onSubmit= {this.handleSubmit}>
        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })}
      />
        <Button outline color='primary' >Find Best Deals</Button>
    </Form>
  </Container>
  )
}
}
