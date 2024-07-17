


import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col, Card, InputGroup } from 'react-bootstrap';
import * as yup from 'yup';
import { ErrorMessage, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Make sure to include the updated CSS file
import { FcGoogle } from 'react-icons/fc';
import { auth, provider } from './Firebase';
import { signInWithPopup } from 'firebase/auth';
import { FaPhoneSquareAlt, FaLock } from "react-icons/fa";
import { FaRoute } from "react-icons/fa";

function Login() {
  let navigate = useNavigate();
  const [value, setValue] = useState(localStorage.getItem('email') || '');
  const [input, setInput] = useState({
    phonenumber: '',
    password: '',
  });

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem('email', data.user.email);
        navigate('/Searchbox'); // Navigate after successful login
      })
      .catch((error) => {
        console.error('Error during sign-in:', error);
      });
  };

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []);

  // Validation schema using yup
  const schema = yup.object().shape({
    phonenumber: yup.string().required('Phone number is required'),
    password: yup.string().required('Password is required'),
  });

  // Handle input changes
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (values, { setErrors }) => {
    try {
      const response = await axios.post(
        'http://localhost:2000/Userlogin/getloginbyppassword',
        {
          phonenumber: values.phonenumber,
          password: values.password,
        }
      );

      if (response.status === 200) {
        // Navigate to the next page on successful login
        navigate('/Searchbox');
      } else {
        // Set error message for password (you can handle phone number similarly)
        setErrors({ password: 'Invalid phone number or password' });
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle fetch error, show an error message, etc.
      setErrors({ password: 'Invalid phone number or password' });
    }
  };

  return (
    <div className="backgroundimage">
      <h1 style={{ textAlign: 'center', marginTop: '20px', color: 'green' }}>
       
      </h1>

      {/* Formik handles form state and validation */}
      <Formik
        initialValues={input}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ handleSubmit, handleChange, errors, touched }) => (
          <Row>
            <Col xs={12} md={6} xl={1}></Col>
            <Col xs={12} md={6} xl={5}>
              <div className='font'>
                <h1
                  style={{
                    marginTop: '160px',
                    color: '#a962ca',
                    marginBottom: '30px',
                
                  }}
                >
                 <FaRoute />   Quick Travel
                </h1>
                <h5 className='prover'>
                  Quick Travel allows you to search for bus routes, view detailed
                  bus information, and plan your journeys with ease. Whether
                  you're a daily commuter or an occasional traveler, Quick Travel
                  is here to make your bus travel experience seamless and
                  enjoyable.
                </h5>
              </div>
            </Col>
            <Col xs={12} md={6} xl={1}></Col>
            <Col style={{ marginTop: '75px' }} xs={12} md={6} xl={4}>
              <div >
                <Card className="login-card">
                  <Card.Body>
                    <h3 className="login-title"> <FaRoute />   Quick Travel</h3>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <InputGroup>
                          <Form.Control
                            type="text"
                            name="phonenumber"
                            value={input.phonenumber}
                            placeholder="Enter Phone number" 
                            onChange={(e) => {
                              handleChange(e);
                              handleInput(e);
                            }}
                            className="form-control-custom"
                            isInvalid={touched.phonenumber && !!errors.phonenumber}
                          />
                          <InputGroup.Text>
                            <FaPhoneSquareAlt />
                          </InputGroup.Text>
                        </InputGroup>
                        <ErrorMessage name="phonenumber" component="div" className="text-danger" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <InputGroup>
                          <Form.Control
                            type="password"
                            name="password"
                            value={input.password}
                            placeholder="Password"
                            onChange={(e) => {
                              handleChange(e);
                              handleInput(e);
                            }}
                            className="form-control-custom"
                            isInvalid={touched.password && !!errors.password}
                          />
                          <InputGroup.Text>
                            <FaLock />
                          </InputGroup.Text>
                        </InputGroup>
                        <ErrorMessage name="password" component="div" className="text-danger" />
                      </Form.Group>

                      <div className="d-flex justify-content-center">
                        <Button style={{ marginTop: '10px' }} variant="primary" type="submit" size="lg">
                          Login
                        </Button>
                      </div>

                      {/* Link to sign up page */}
                      <div className="signup-link">
                        Don't have an account?
                        <button
                          onClick={() => navigate('/Ksignup')}
                        >
                          Register
                        </button>
                      </div>
                    </Form>
                    <div className="d-flex justify-content-center">
                      <button className="google-button" onClick={handleClick}>
                        <FcGoogle />
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        )}
      </Formik>
    </div>
  );
}

export default Login;




