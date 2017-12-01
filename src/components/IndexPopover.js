import React, {Component} from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

class Popper extends Component  {
  constructor(props) {
  super(props);
  debugger


  this.state = {
    popoverOpen: this.props.popoverOpen,
    popBody: this.props.popBody
  };
}



render() {
  return (
    <div>

      <Popover placement="bottom" isOpen={this.state.popoverOpen}  toggle={this.toggle}>
        <PopoverHeader>{this.state.popBody}</PopoverHeader>
        <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
      </Popover>
    </div>
  );
}
}
export default Popper
