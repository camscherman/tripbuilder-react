import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container } from 'reactstrap';
import CalendarHeatmap from 'react-calendar-heatmap'
import moment from 'moment'
import {Line} from 'react-chartjs-2'
import QueryForm from './QueryForm'




class QueryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,

    };

    this.toggle = this.toggle.bind(this);

  }

  toggle() {
    const {toggleBlur} = this.props
    this.setState({
      modal: !this.state.modal,
      popBody: ""
    })
    toggleBlur()

  }
  componentDidMount(){
    this.toggle()
  }


  render() {
    const {outValue, inValue} = this.props
    const {onSubmit = ()=>{}} = this.props
    const {handleChangeOutbound =()=>{}}= this.props
    const {handleChangeInbound=()=>{}}= this.props






    return (
      <div>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Tell us where you want to go...we'll find the best deals!</ModalHeader>
          <ModalBody>
            <Container id="form">

              <QueryForm  toggle ={this.toggle}
                          outValue = {outValue}
                          inValue = {inValue}
                          handleChangeOutbound={handleChangeOutbound}
                          handleChangeInbound={handleChangeInbound}
                          onSubmit={onSubmit}/>

                          </Container>

          </ModalBody>

        </Modal>
      </div>
    );
  }
}

export default QueryModal;
