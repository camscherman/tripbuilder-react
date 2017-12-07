import React, {Component} from 'react';
 import QueryForm from './QueryForm';
 import {Query} from '../lib/requests';
 import QueryResults from './QueryResults'
 import moment  from 'moment'
 import IndexModal from './IndexModal'
 import ErrorDiv from './ErrorDiv'
 import QueryModal from './QueryModal'
 import BookingModal from './BookingModal'
 import {formatIndexVals} from '../lib/helpers'

 import ModalBackground from './ModalBackground'



 class QueryNewPage extends Component {
   constructor (props) {
     super(props);
     this.createQuery = this.createQuery.bind(this);

     this.state = {
       queryResults: [],
       isLoading: false,
       indexVals: [],
       errors:[],
       depCode:"",
       arrCode:"",
       modal: false,
       selectedOptionOut: "",
       selectedOptionIn: "",
       upToDateResults: false

     }
   }

   createQuery (query) {
     console.log('Sending query!');
     this.setState({isLoading: true})
     setTimeout(()=> (this.state.isLoading === true) && this.setState({isLoading:false}), 8000)
     Query
       .create(query)
       .then(res => {
         const filtered = res.filter(item=> (!!item.price))
         debugger
         if(!!filtered && filtered.length > 0){
         this.setState({
           queryResults: filtered,
           isLoading: false,
           upToDateResults: true

         })
       }
       })
    Query
    .getIndex(query)
    .then(res =>{
      console.log(res)
      const formattedVals = formatIndexVals(res)

      this.setState({
        indexVals: formattedVals
      })
    })
      Query
        .getStored(query)
        .then(res =>{
          this.setState({
            queryResults:res,
            depCode: query.depCode,
            arrCode: query.arrCode

          }
        )
        return res
      }).then(()=> this.setErrors(this.state.queryResults))

       // the `history` prop like the `match` prop is added to any component
       // rendered by the <Route ... /> component from React Router. It's object
       // that allows us to manipulate browser history. We can use to send a
       // user to a different URL.
   }


   setErrors=(obj)=>{
     if('error' in obj){

       this.setState({errors: [this.state.queryResults['error']] })
     }

   }

   handleChangeOutbound = (selectedOptionOut) =>{
     this.setState({selectedOptionOut})
   }
   handleChangeInbound = (selectedOptionIn) =>{
     this.setState({selectedOptionIn})
   }

   toggleBookingModal = ()=>{
     this.setState({
       modal: !this.state.modal
     })
   }
   componentDidMount(){
     const {blurBackground} = this.props


   }



   render () {

     const hasResults = this.state.queryResults.length > 0
     const hasIndex = this.state.indexVals.length > 0
     const results = this.state.queryResults
     const isLoading = this.state.isLoading
     const indexVals = this.state.indexVals
     const hasErrors = this.state.errors.length > 0
     const {setBlurred} = this.props
     return (

       <div className="QueryNewPage">

         {!hasResults && !hasIndex && <QueryModal
                                        toggleBlur ={this.props.toggleBlur}
                                        outValue = {this.state.selectedOptionOut.value}
                                        inValue = {this.state.selectedOptionIn.value}
                                        handleChangeOutbound={this.handleChangeOutbound}
                                        handleChangeInbound={this.handleChangeInbound}
                                        onSubmit={this.createQuery}/>}

         {hasErrors && <ErrorDiv errors ={this.state.errors} />}

         {isLoading && <ModalBackground />}
         {hasIndex && <IndexModal  depCode={this.state.depCode} arrCode={this.state.arrCode} index = {indexVals}/>}
         {hasIndex && <BookingModal bookingModal={this.state.modal} toggleBookingModal={this.toggleBookingModal} />}
         {hasResults && <QueryResults toggleBookingModal= {this.toggleBookingModal} setBlurred={setBlurred}
           queryResults={results}

           index = {indexVals}
           depCode= {this.state.depCode}
           arrCode={this.state.arrCode}/>}
       </div>
     )
   }
 }

 export default QueryNewPage;
