// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import axios from 'axios';
// import './Searchbox.css';
// import { RiArrowLeftRightFill } from "react-icons/ri";
// import { FaRoute } from "react-icons/fa";

// function Searchbox() {
//   const [show, setShow] = useState(false);
//   const [showDetails, setShowDetails] = useState(false);
//   const [from, setFrom] = useState('');
//   const [to, setTo] = useState('');
//   const [busData, setBusData] = useState([]);
//   const [busDetails, setBusDetails] = useState(null);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleDetailsClose = () => setShowDetails(false);
//   const handleDetailsShow = () => setShowDetails(true);

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     if (id === 'from') {
//       setFrom(value);
//     } else if (id === 'to') {
//       setTo(value);
//     }
//   };

//   const handleClick = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/searchft/createsearchpost", { source: from, to });
//       setBusData(response.data.bus);
//       handleShow();
//     } catch (error) {
//       console.error("There was an error fetching the bus data!", error);
//     }
//   };

//   const handleBusButtonClick = async (id) => {
//     try {
//       const response = await axios.post("http://localhost:5000/bus/getbyidbybus", { id });
//       if (response.data) {
//         setBusDetails(response.data.bus);
//         handleDetailsShow();
//       }
//     } catch (error) {
//       console.error("There was an error fetching the bus details!", error);
//     }
//   };

//   return (
//     <div className="searchbox-container">
           
//       <Row className="justify-content-center">
      
//       <h1 className='lo'> <FaRoute />   Quick Travel</h1>  <h1 className='head'>To See Your<br/>
//       Bus <c className='tickets'>Details</c><br/>Now</h1><br/>
//         <p className='para'>Find bus details with just a few clicks.we
//           <br/>offer a wide range of bus routes and schedules to suit<br/>your needs.</p>
        
//         <Col  xs={12} md={6} xl={1}>
      
//           <Card className="card-custom">
//             <Card.Body>
//                      <h3 className="card-header-custom">Search for Buses</h3>
//               <Form>
//                 <Row className="align-items-center">
//                   <Col>
//                     <Form.Group className="mb-3" controlId="from">
                   
//                       <Form.Control type="text" placeholder="From" onChange={handleChange} />
//                     </Form.Group>
//                   </Col>
//                   <Col xs="auto" className="center-icon-container">
//                     <div className="center-icon">
//                       <RiArrowLeftRightFill size={24} />
//                     </div>
//                   </Col>
//                   <Col>
//                     <Form.Group className="mb-3" controlId="to">
                
//                       <Form.Control type="text" placeholder="To" onChange={handleChange} />
//                     </Form.Group>
//                   </Col>
//                 </Row>
//                 <hr />
//               </Form>
//               <div className="d-flex justify-content-center">
//                 <Button onClick={handleClick} variant="primary">Search</Button>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title className="modal-title-custom">BUS NAMES</Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="modal-body-custom">
//           {busData.length > 0 ? (
//             busData.map((bus, index) => (
//               <div key={index} className="d-flex justify-content-between align-items-center mb-3">
//                 <span>{bus.busname}</span>
//                 <Button variant="primary" onClick={() => handleBusButtonClick(bus._id)}>Details</Button>
//               </div>
//             ))
//           ) : (
//             <p className="no-bus-found">No buses found for the selected route.</p>
//           )}
//         </Modal.Body>
//       </Modal>

//       <Modal show={showDetails} onHide={handleDetailsClose}>
//         <Modal.Header closeButton>
//           <Modal.Title className="modal-title-custom">BUS INFORMATION</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {busDetails ? (
//             <div>
//               {Object.entries(busDetails).map(([key, value], index) => {
//                 if (key !== '_id' && key !== '__v') {
//                   return (
//                     <p key={index} className="bus-details">
//                       <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
//                     </p>
//                   );
//                 }
//                 return null;
//               })}
//             </div>
//           ) : (
//             <p>Loading bus details...</p>
//           )}
//         </Modal.Body>
//       </Modal>

//     </div>
//   );
// }

// export default Searchbox;







// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import axios from 'axios';
// import './Searchbox.css';
// import { RiArrowLeftRightFill } from "react-icons/ri";
// import { FaRoute } from "react-icons/fa";

// function Searchbox() {
//   const [show, setShow] = useState(false);
//   const [showDetails, setShowDetails] = useState(false);
//   const [from, setFrom] = useState('');
//   const [to, setTo] = useState('');
//   const [busData, setBusData] = useState([]);
//   const [busDetails, setBusDetails] = useState(null);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleDetailsClose = () => setShowDetails(false);
//   const handleDetailsShow = () => setShowDetails(true);

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     if (id === 'from') {
//       setFrom(value);
//     } else if (id === 'to') {
//       setTo(value);
//     }
//   };

//   const handleClick = async () => { 
//     try {
//       const response = await axios.post("http://localhost:2000/searchft/createsearchpost", { source: from, to });
//       setBusData(response.data.bus);
//       handleShow();
//     } catch (error) {
//       console.error("There was an error fetching the bus data!", error);
//     }
//   };

//   const handleBusButtonClick = async (id) => {
//     try {
//       const response = await axios.post("http://localhost:2000/bus/getbyidbybus", { id });
//       if (response.data) {
//         setBusDetails(response.data.bus);
//         handleDetailsShow();
//       }
//     } catch (error) {
//       console.error("There was an error fetching the bus details!", error);
//     }
//   };

//   return (
//     <div className="searchbox-container">
           
//       <Row className="justify-content-center">
    
//       <h1 className='lo'> <FaRoute />   Quick Travel</h1>  <h1 className='head'>To See Your<br/>
//       Bus <c className='tickets'>Details</c><br/>Now</h1><br/>
//         <p className='para'>Find bus details with just a few clicks.we
//           <br/>offer a wide range of bus routes and schedules to suit<br/>your needs.</p>
     
//           <Col xs={12} md={6} xl={2} >
     
//           <Col>
//           <Card className="card-custom">
//             <Card.Body>
//                      <h3 className="card-header-custom">Search for Buses</h3>
//               <Form>
//                 <Row className="align-items-center">
//                   <Col>
//                     <Form.Group className="mb-3" controlId="from">
                   
//                       <Form.Control type="text" placeholder="From" onChange={handleChange} />
//                     </Form.Group>
//                   </Col>
//                   <Col xs="auto" className="center-icon-container">
//                     <div className="center-icon">
//                       <RiArrowLeftRightFill size={24} />
//                     </div>
//                   </Col>
//                   <Col>
//                     <Form.Group className="mb-3" controlId="to">
                
//                       <Form.Control type="text" placeholder="To" onChange={handleChange} />
//                     </Form.Group>
//                   </Col>
//                 </Row>
//                 <hr />
//               </Form>
//               <div className="d-flex justify-content-center">
//                 <Button onClick={handleClick} variant="primary">Search</Button>
//               </div>
//             </Card.Body>
//           </Card>

//           </Col>
//           </Col>
      
//       </Row>
      

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title className="modal-title-custom">BUS NAMES</Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="modal-body-custom">
//           {busData.length > 0 ? (
//             busData.map((bus, index) => (
//               <div key={index} className="d-flex justify-content-between align-items-center mb-3">
//                 <span>{bus.busname}</span>
//                 <Button variant="primary" onClick={() => handleBusButtonClick(bus._id)}>Details</Button>
//               </div>
//             ))
//           ) : (
//             <p className="no-bus-found">No buses found for the selected route.</p>
//           )}
//         </Modal.Body>
//       </Modal>

//       <Modal show={showDetails} onHide={handleDetailsClose}>
//         <Modal.Header closeButton>
//           <Modal.Title className="modal-title-custom">BUS INFORMATION</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {busDetails ? (
//             <div>
//               {Object.entries(busDetails).map(([key, value], index) => {
//                 if (key !== '_id' && key !== '__v') {
//                   return (
//                     <p key={index} className="bus-details">
//                       <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
//                     </p>
//                   );
//                 }
//                 return null;
//               })}
//             </div>
//           ) : (
//             <p>Loading bus details...</p>
//           )}
//         </Modal.Body>
//       </Modal>

//     </div>
//   );
// }

// export default Searchbox;

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import './Searchbox.css';
import { RiArrowLeftRightFill } from "react-icons/ri";
import { FaRoute } from "react-icons/fa";

function Searchbox() {
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [busData, setBusData] = useState([]);
  const [busDetails, setBusDetails] = useState(null);

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
      const response = await axios.post("http://localhost:2000/bus/getbusbysourcedest", { source: from, to });
      console.log("API Response:", response.data); // Add logging here
      setBusData(response.data.bus ); // Ensure busData is an array
      handleShow();
    } catch (error) {
      console.error("There was an error fetching the bus data!", error);
    }
  };

  const handleBusButtonClick = async (id) => {
    try {
      const response = await axios.post("http://localhost:2000/bus/getbyidbybus", { id });
      if (response.data) {
        console.log("Bus Details Response:", response.data); // Add logging here
        setBusDetails(response.data.bus);
        handleDetailsShow();
      }
    } catch (error) {
      console.error("There was an error fetching the bus details!", error);
    }
  };

  return (
    <div className="searchbox-container">
      <Row className="justify-content-center">
        <h1 className='lo'><FaRoute /> Quick Travel</h1>
        <h1 className='head'>To See Your<br/>Bus <c className='tickets'>Details</c><br/>Now</h1><br/>
        <p className='para'>Find bus details with just a few clicks. We offer a wide range <br/> of bus routes and schedules to suit your needs.</p>
        
        <Col xs={12} md={6} xl={2}>
          <Card className="card-custom">
            <Card.Body>
              <h3 className="card-header-custom">Search for Buses</h3>
              <Form>
                <Row className="align-items-center">
                  <Col>
                    <Form.Group className="mb-3" controlId="from">
                      <Form.Control type="text" placeholder="From" onChange={handleChange} />
                    </Form.Group>
                  </Col>
                  <Col xs="auto" className="center-icon-container">
                    <div className="center-icon">
                      <RiArrowLeftRightFill size={24} />
                    </div>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="to">
                      <Form.Control type="text" placeholder="To" onChange={handleChange} />
                    </Form.Group>
                  </Col>
                </Row>
                <hr />
              </Form>
              <div className="d-flex justify-content-center">
                <Button onClick={handleClick} variant="primary">Search</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title-custom">BUS NAMES</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-custom">
          {busData.length > 0 ? (
            busData.map((bus, index) => (
              <div key={index} className="d-flex justify-content-between align-items-center mb-3">
                <span>{bus.busname}</span>
                <Button variant="primary" onClick={() => handleBusButtonClick(bus._id)}>Details</Button>
              </div>
            ))
          ) : (
            <p className="no-bus-found">No buses found for the selected route.</p>
          )}
        </Modal.Body>
      </Modal>

      <Modal show={showDetails} onHide={handleDetailsClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title-custom">BUS INFORMATION</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {busDetails ? (
            <div>
              {Object.entries(busDetails).map(([key, value], index) => {
                if (key !== '_id' && key !== '__v') {
                  return (
                    <p key={index} className="bus-details">
                      <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          ) : (
            <p>Loading bus details...</p>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Searchbox;

