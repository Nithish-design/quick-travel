import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import busimage from './Images/busimage.webp';
import axios from 'axios';
import { Container } from 'react-bootstrap';

function Searchbox() {
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [busData, setBusData] = useState([]);
  const [busDetailsArray, setBusDetailsArray] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDetailsClose = () => setShowDetails(false);
  const handleDetailsShow = () => setShowDetails(true);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'from') {
      setFrom(value);
    } else if (id === 'to') {
      setTo(value);
    }
  };

  const handleClick = async () => {
    try {
      const response = await axios.post("http://localhost:5000/bus/getbusbysourcedest", { source: from, to });
      setBusData(response.data.bus);
      handleShow();
    } catch (error) {
      console.error("There was an error fetching the bus data!", error);
    }
  };

  const handleBusButtonClick = async (busname) => {
    try {
      const response = await axios.post("http://localhost:5000/bus/getbusdetailsbybus", { busname });
      setBusDetailsArray(response.data);  
      console.log(response.data);
      handleDetailsShow();
    } catch (error) {
      console.error("There was an error fetching the bus details!", error);
    }
  };

  return (
    <div>
      <Row>
        <Col xs={12} md={6} xl={1}></Col>
        <Col style={{ marginTop: "50px" }} xs={12} md={6} xl={4}>
          <Card>
            <Card.Body>
              <h3 style={{ textAlign: "center", color: "blue" }}>Search for Buses</h3>
              <Form>
                <Form.Group className="mb-3" controlId="from">
                  <Form.Label>From</Form.Label>
                  <Form.Control type="text" placeholder="Enter Place Name" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="to">
                  <Form.Label>To</Form.Label>
                  <Form.Control type="text" placeholder="Enter Place Name" onChange={handleChange} />
                </Form.Group>
              </Form>
              <Button onClick={handleClick} variant="primary">Search</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} xl={1}></Col>
        <Col xs={12} md={6} xl={6}>
          <Col style={{ marginTop: "30px" }} xs={12} md={6} xl={4}>
            <Card style={{ width: '29rem' }}>
              <Card.Img variant="top" src={busimage} />
            </Card>
          </Col>
          <Col xs={12} md={6} xl={2}></Col>
          <Row>
            <Col xs={12} md={6} xl={4}>
              <Container>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title style={{ color: "blue", textAlign: "center" }}>BUS NAMES</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {busData.length > 0 ? (
                      busData.map((bus, index) => (
                        <div key={index} className="d-flex justify-content-between align-items-center mb-3">
                          <span>{bus.busname}</span>
                          <Button variant="primary" onClick={() => handleBusButtonClick(bus.busname)}>Details</Button>
                        </div>
                      ))
                    ) : (
                      <p>No buses found for the selected route.</p>
                    )}
                  </Modal.Body>
                  <Modal.Footer>
                  </Modal.Footer>
                </Modal>
              </Container>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Modal for displaying bus details */}
      <Modal show={showDetails} onHide={handleDetailsClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "Green", textAlign: "center" }}>BUS INFORMATION</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {busDetailsArray.length > 0 ? (
            busDetailsArray.map((busDetails, index) => (
              <div key={index}>
                <p><strong>Bus Name:</strong> {busDetails.busname}</p>
                <p><strong>PhoneNumber:</strong> {busDetails.phonenumber}</p>
                <p><strong>Email:</strong> {busDetails.email}</p>
                <p><strong>Website:</strong> {busDetails.website}</p>
                <p><strong>Address:</strong> {busDetails.address}</p>
                <p><strong>Travelling Time:</strong> {busDetails.travellingtime}</p>
                <p><strong>Bus Type:</strong> {busDetails.bustype}</p>
                <p><strong>Source:</strong> {busDetails.source}</p>
                <p><strong>To:</strong> {busDetails.to}</p>
                <p><strong>Departure Time:</strong> {busDetails.departuretime}</p>
                <p><strong>Arrival Time:</strong> {busDetails.arrivaltime}</p>
                <p><strong>Price:</strong> {busDetails.price}</p>
                <p><strong>Number of Seats:</strong> {busDetails.noofseats}</p>
              </div>
            ))
          ) : (
            <p>Loading bus details...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Searchbox;



