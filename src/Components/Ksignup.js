import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Row, Col, Form, CardBody, Card, InputGroup } from 'react-bootstrap';
import * as yup from 'yup';
import { ErrorMessage, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Ksignup.css';
import { FaRoute } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";

function Ksignup() {
  let navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    phonenumber: "",
    age: "",
    gender: "",
    email: "",
    password: "",
    confirmpassword: ""
  });

  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    phonenumber: yup.number().required('Phone number is required'),
    age: yup.number().required('Age is required'),
    gender: yup.string().required('Gender is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmpassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required')
  });

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:2000/Userlogin/createuserpost', values);
      console.log(response.data);
      navigate('/Login');
    } catch (error) {
      console.error('Error creating user:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="signup-container">
      <Formik
        initialValues={input}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ handleSubmit, handleChange, isSubmitting }) => (
          <Row>
            <Col xs={12} md={6} xl={4}></Col>
            <Col xs={12} md={6} xl={4}>
              <Card className="signup-card">
                <CardBody>
                  <h3 className="signup-title"><FaRoute />
                  Quick Travel</h3>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                     <InputGroup><Form.Control type="text" name='name' value={input.name}
                      placeholder="Enter Name" onChange={(e) => { handleChange(e); handleInput(e) }} /><InputGroup.Text>
                    <MdDriveFileRenameOutline />
                    </InputGroup.Text></InputGroup> 
                      <ErrorMessage name='name' component="div" className="text-danger" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                    <InputGroup> <Form.Control type="text" name='phonenumber'
                       value={input.phonenumber} placeholder="Enter Phone Number" 
                       onChange={(e) => { handleChange(e); handleInput(e) }} /> <InputGroup.Text>
                       <FaPhoneSquareAlt />
                     </InputGroup.Text></InputGroup> 
                      <ErrorMessage name='phonenumber' component="div" className="text-danger" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAge">
                      <Form.Control type="text" name='age' value={input.age} placeholder="Enter Age" onChange={(e) => { handleChange(e); handleInput(e) }} />
                      <ErrorMessage name='age' component="div" className="text-danger" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicGender">
                      
                      <Form.Control type="text" name='gender'
                       value={input.gender} placeholder="Enter Gender" 
                       onChange={(e) => { handleChange(e); handleInput(e) }} />
                      <ErrorMessage name='gender' component="div" className="text-danger" />
                    </Form.Group>
                    
                   
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <InputGroup> <Form.Control type="email"
                       name='email' value={input.email} 
                       placeholder="Enter Email" onChange={(e) => { handleChange(e); handleInput(e) }} /> <InputGroup.Text>
                       <MdEmail />
                             </InputGroup.Text>
                       </InputGroup>
                      <ErrorMessage name='email' component="div" className="text-danger" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <InputGroup> 
                      
                      <Form.Control type="password" name='password'
                       value={input.password} placeholder="Enter Password" onChange={(e) => { handleChange(e); handleInput(e) }} />
                      <ErrorMessage name='password' component="div" className="text-danger" /><InputGroup.Text>
                      <FaLock />

                          </InputGroup.Text></InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">


                      <InputGroup>
                      <Form.Control type="password" name='confirmpassword'
                       value={input.confirmpassword} placeholder="Enter Confirm Password"
                        onChange={(e) => { handleChange(e); handleInput(e) }} /><InputGroup.Text>
                        <GiConfirmed />
                      </InputGroup.Text></InputGroup>
                      <ErrorMessage name='confirmpassword' component="div" className="text-danger" />
                    </Form.Group>

                    <div>
                      <Button variant="primary" type="submit" disabled={isSubmitting} className='sumbit'>
                        signup
                      </Button>
                    </div>

                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        )}
      </Formik>
    </div>
  )
}

export default Ksignup;
