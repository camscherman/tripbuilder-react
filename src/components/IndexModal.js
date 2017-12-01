import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container } from 'reactstrap';
import CalendarHeatmap from 'react-calendar-heatmap'
import moment from 'moment'
import {Line} from 'react-chartjs-2'




class IndexModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      popBody: "",
      popoverOpen: false

    };

    this.toggle = this.toggle.bind(this);

  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
      popBody: ""
    });
  }



  render() {

    const {index} = this.props
    const ratings = index.map((vals)=> vals.scale)
    const days = index.map((vals)=> vals.date)
    const data = {
      labels: days,
      datasets: [{
        data: ratings
      }]
    }

    return (
      <div>
        <Container>
        <Button outline color="success" onClick={this.toggle} className="ml auto">View Dates</Button>
      </Container>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
            <Container id="heatmap">
              <Line data={data}></Line>


                          </Container>

          </ModalBody>

        </Modal>
      </div>
    );
  }
}

export default IndexModal;
