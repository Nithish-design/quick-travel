import React from 'react'
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
function Traveladmin() {
  return (
    <div style={{marginTop:"125px"}}>
      <Row>
      <Col xs={12} md={6} xl={4}></Col>
      <Col xs={12} md={6} xl={3}>

      <h3>Travel Master</h3>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter the Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Enter the shortform" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder=" Enter the Address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Enter the Phonenumber1" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="number" placeholder="Enter the Phonenumber2" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="email" placeholder="Enter the Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Enter the Website" />
      </Form.Group>

      <Button variant="primary" type="submit">
        save
      </Button>
    </Form>
      </Col>
      </Row>
    </div>
  )
}

export default Traveladmin
