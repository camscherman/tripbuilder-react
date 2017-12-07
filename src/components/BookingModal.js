import React, {Component} from 'react'
import { Button,Card, Container, Form, FormGroup, Label, Input,Modal, ModalBody, ModalHeader, FormText } from 'reactstrap';
import BookingForm from './BookingForm'
export default function BookingModal (props) {




   const {toggleBookingModal} = props
  return(
    <div>

      <Modal isOpen={props.bookingModal} toggle={toggleBookingModal} className={props.className}>
        <ModalHeader toggle={toggleBookingModal}>Book Flight</ModalHeader>
        <ModalBody>

          <BookingForm />

        </ModalBody>

      </Modal>
    </div>

  )

}
