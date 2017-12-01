import React, {Component} from 'react';
 import QueryForm from './QueryForm';
 import {Query} from '../lib/requests';
 import QueryResults from './QueryResults'
 import moment  from 'moment'
 import IndexModal from './IndexModal'
 import ErrorDiv from './ErrorDiv'


 class QueryNewPage extends Component {
   constructor (props) {
     super(props);
     this.createQuery = this.createQuery.bind(this);

     this.state = {
       queryResults: [],
       isLoading: false,
       indexVals: [],
       errors:[]

     }
   }

   createQuery (query) {
     console.log('Sending query!');
     this.setState({isLoading: true})
     setTimeout(()=> (this.state.isLoading === true) && this.setState({isLoading:false}), 8000)
    //  Query
    //    .create(query)
    //    .then(res => {
    //      console.log(res)
    //      this.setState({
    //        queryResults: res,
    //        isLoading: false
     //
    //      })
    //    })
    Query
    .getIndex(query)
    .then(res =>{
      console.log(res)
      const formattedVals = this.formatIndexVals(res)

      this.setState({
        indexVals: formattedVals
      })
    })
      Query
        .getStored(query)
        .then(res =>{
          this.setState({
            queryResults:res
          }
        )
        return res
      }).then(()=> this.setErrors(this.state.queryResults))

       // the `history` prop like the `match` prop is added to any component
       // rendered by the <Route ... /> component from React Router. It's object
       // that allows us to manipulate browser history. We can use to send a
       // user to a different URL.
   }

    formatIndexVals = (arr)=>{
     const formattedValues = arr.map((item)=>{
       const date = moment(item[0]).format().slice(0,10)
       const price = item[1]
       const scale = Math.floor((item[2] + 0.5)*5)
       const count = scale > 0 ?  scale : 0
       return {date: date,price: price, count: count, scale: item[2].toFixed(2)*100 }
     })
     return formattedValues
   }
   setErrors=(obj)=>{
     if('error' in obj){

       this.setState({errors: [this.state.queryResults['error']] })
     }

   }




   render () {
     const hasResults = this.state.queryResults.length > 0
     const hasIndex = this.state.indexVals.length > 0
     const results = this.state.queryResults
     const isLoading = this.state.isLoading
     const indexVals = this.state.indexVals
     const hasErrors = this.state.errors.length > 0
     return (

       <div className="QueryNewPage">

         {!hasResults && !hasIndex && <QueryForm onSubmit={this.createQuery}/>}
         {hasErrors && <ErrorDiv errors ={this.state.errors} />}
         {hasIndex && <IndexModal  index = {indexVals}/>}
         {hasResults && <QueryResults queryResults={results} loading ={isLoading} index = {indexVals}/>}
       </div>
     )
   }
 }

 export default QueryNewPage;
