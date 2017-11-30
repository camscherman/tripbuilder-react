import React, {Component} from 'react'

class SignUpSuccess extends Component{
  constructor (props){
    super(props)

  }

  renderFiveSeconds = ()=> {
    setTimeout(()=>{ this.props.history.push('/query/new')}, 5000)
  }

  render(){
    const {message} = this.props
    {this.renderFiveSeconds()}
  return (
    <div>Thanks you for signing up</div>
  )
}

}

export default SignUpSuccess
