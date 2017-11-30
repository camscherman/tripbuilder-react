res = [{price:{
  CntKey:<string>,
  CntID:<string>,
  outBoundOptionId:<string>,
  inBoundOptionId:<string>,
  adultPrice:<string>,
  fullDetails:<obj>
  }, outBoundDetails:[]

    , inBoundDetails:[]

    }
]

<Card>
  <Card.Header>
    <Card.Header.Title>
      OutBound Flight
    </Card.Header.Title>
  </Card.Header>
  <Media>
    <Media.left>
     <Title is='1'> {price}</Title>
    </Media.left>
  <Media.content >
    <p>NUMBER OF OUTBOUND LEGS: {noOfOutBoundLegs}</p>
    <p>DEP TIME: {outBoundDepDateTime}</p>
    <p>ARR TIME:{outBoundArrDateTime}</p>
    <p>AIRLINE: {operatedByAirlineOutbound}</p>
  </Media.content>
  </Media>
</Card>
<Card>
  <Card.Header>
    <Card.Header.Title>
      OutBound Flight
    </Card.Header.Title>
  </Card.Header>
  <Media>
    <Media.left>
     <Title is='1'> {price}</Title>
    </Media.left>
  <Media.content >
    <p>NUMBER OF INBOUND LEGS: {noOfInBoundLegs}</p>
    <p>DEP TIME: {inBoundDepDateTime}</p>
    <p>ARR TIME: {inBoundArrDateTime}</p>
    <p>AIRLINE: {operatedByAirlineInbound}</p>
  </Media.content>
  </Media>
</Card>
