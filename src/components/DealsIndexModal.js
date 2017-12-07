import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container } from 'reactstrap';
import moment from 'moment'
import {Line} from 'react-chartjs-2'




function DealsIndexModal(props){
  const {toggleDealsIndex=()=>{}} =props
  const {dealsIndexModalOpen = false} = props

    const {index, depCode, arrCode} = props
    const ratings = index.map((vals)=>{ return {x: vals.date,y: vals.price}})
    const days = index.map((vals)=> vals.date)

    const data = {
      labels: days,
      datasets: [{
        label: `Flights price from ${depCode} to ${arrCode}`,
        backgroundColor: 'rgba(75,192,192,0.4)',


        data: ratings
      }]
    }

    return (
      <div className='indexModal'>
        <Container>

      </Container>
        <Modal isOpen={dealsIndexModalOpen} toggle={toggleDealsIndex} className={props.className}>
          <ModalHeader toggle={toggleDealsIndex}></ModalHeader>

            <Container id="chart">
              <Line data={data}></Line>


                          </Container>



        </Modal>
      </div>
    )
}

export default DealsIndexModal;
