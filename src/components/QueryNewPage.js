import React, {Component} from 'react';
 import QueryForm from './QueryForm';
 import {Query} from '../lib/requests';
 import QueryResults from './QueryResults'


 class QueryNewPage extends Component {
   constructor (props) {
     super(props);
     this.createQuery = this.createQuery.bind(this);

     this.state = {
       queryResults: [],
       isLoading: false,
       indexVals: []
     }
   }

   createQuery (query) {
     console.log('Sending query!');
     this.setState({isLoading: true})
     setTimeout(()=> (this.state.isLoading === true) && this.setState({isLoading:false}), 8000)
     Query
       .create(query)
       .then(res => {
         console.log(res)
         this.setState({
           queryResults: res,
           isLoading: false
         })
       })
      Query
        .getStored(query)
        .then(res =>{
          this.setState({
            queryResults:res
          })
        })

      Query
          .getIndex(query)
          .then(res =>{
            this.setState({
              indexVals: res
            })
          })
       // the `history` prop like the `match` prop is added to any component
       // rendered by the <Route ... /> component from React Router. It's object
       // that allows us to manipulate browser history. We can use to send a
       // user to a different URL.
   }


   render () {
     const hasResults = this.state.queryResults.length > 0
     const results = this.state.queryResults
     const isLoading = this.state.isLoading
     return (

       <div className="QueryNewPage">

         {!hasResults && <QueryForm onSubmit={this.createQuery}/>}
         {hasResults && <QueryResults queryResults={results} loading ={isLoading} index = {indexVals}/>}
       </div>
     )
   }
 }

 export default QueryNewPage;
