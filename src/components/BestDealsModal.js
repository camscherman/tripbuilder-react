import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container
} from 'reactstrap';
import CalendarHeatmap from 'react-calendar-heatmap'
import moment from 'moment'
import {Line} from 'react-chartjs-2'

import BestDealsSearch from './BestDealsSearch'

class QueryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);

  }

  toggle() {
    const {toggleBlur} = this.props
    toggleBlur()
    this.setState({
      modal: !this.state.modal,
      popBody: ""
    });
  }
  componentDidMount() {
    this.toggle()
  }

  render() {

    const {
      onSubmit = () => {}
    } = this.props

    return (<div>

      <Modal id="dealsModalBox" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>
          <h6>Tell us when you want to travel and we'll find you some amazing deals!</h6>
        </ModalHeader>
        <ModalBody className="dealsModalBody">

          <BestDealsSearch onSubmit={onSubmit} toggle={this.toggle}/>

        </ModalBody>

      </Modal>
    </div>);
  }
}

export default QueryModal;
