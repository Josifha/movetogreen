import $ from 'jquery';
import React from 'react';
import { useState } from "react";
import {useLocation} from 'react-router-dom';
import { Button, Form, Table, Row, Col, InputGroup, Tooltip} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import './Payment.css';

export default function Payment() {

  const location = useLocation();

  const name = location.state.name.name;
  const email = location.state.email.email;
  const phoneNo = location.state.phoneNo.phoneNo;
  const treesPackage = location.state.treesPackage.treesPackage;
  const amount = location.state.amount.amount;
  const occasions = location.state.occasions.occasions;
  const otherOccasion = location.state.otherOccasion.otherOccasion;

  const [creditCardOwnerName, setCreditCardOwnerName] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [creditCardMonth, setCreditCardMonth] = useState("");
  const [creditCardYear, setCreditCardYear] = useState("");
  const [creditCardCVV, setCreditCardCVV] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
    
  return(
    <div class="payment-page">
        <div class="payment-form">
            <h4>Move to Green</h4>    
            <h6>Select Payment Method</h6>
            <div class="empty-div"></div>  
            <div>
              <Tabs defaultActiveKey="creditCard" id="fill-tab-example" className="mb-3" fill>
                <Tab eventKey="creditCard" title={<span><i class='far fa-credit-card' />&nbsp;&nbsp;Credit Card </span>}>
                  <div>
                    <Form onSubmit={handleSubmit}>
                      <div>
                        <Table borderless>
                          <tbody>
                            <tr>
                              <td>Name</td>
                              <td style={{color:'#4CAF50'}}>{name}</td> 
                            </tr>
                            <tr>
                              <td>Email</td>
                              <td style={{color:'#4CAF50'}}>{email}</td>
                            </tr>
                            <tr>
                              <td>Phone Number</td>
                              <td style={{color:'#4CAF50'}}>{phoneNo}</td>
                            </tr>
                            <tr>
                              <td>Total Amount</td>
                              <td style={{color:'#4CAF50'}}>Rs. {amount}</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                      
                      <h6>Credit Card Information</h6>
                      <Form.Group as={Row} className="mb-3" controlId="creditCardOwnerName">
                        <Form.Label column sm={4}>Card Owner</Form.Label>
                          <Col sm={5}>
                            <Form.Control type="text" placeholder="Card Owner Name" value={creditCardOwnerName} onChange={(e) => setCreditCardOwnerName(e.target.value)}/>
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="creditCardNumber">
                          <Form.Label column sm={4}>Card Number</Form.Label>
                          <Col sm={8}>
                            <InputGroup>
                              <Form.Control type="text" placeholder="Vaiid Card Number" value={creditCardNumber} onChange={(e) => setCreditCardNumber(e.target.value)}/>
                              <div>
                                <i class="fab fa-cc-visa mx-1"></i> 
                                <i class="fab fa-cc-mastercard mx-1"></i> 
                                <i class="fab fa-cc-amex mx-1"></i> 
                              </div>
                            </InputGroup>
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="creditCardOwnerName">
                          <Form.Label column sm={4}>Expiration Date</Form.Label>
                          <Col sm={5}>
                            <InputGroup>
                              <Form.Control type="number" placeholder="MM" value={creditCardMonth} onChange={(e) => setCreditCardMonth(e.target.value)}/>
                              <Form.Control type="number" placeholder="YY" value={creditCardYear} onChange={(e) => setCreditCardYear(e.target.value)}/>
                            </InputGroup>
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="creditCardCVV">
                          <Form.Label column sm={4}>CVV</Form.Label>
                          <Col sm={5}>
                            <Form.Control type="text" value={creditCardCVV} onChange={(e) => setCreditCardCVV(e.target.value)}/>
                          </Col>
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                      </Form>
                    </div>
                  </Tab>
                  <Tab eventKey="debitCard" title={<span><i class='far fa-credit-card' />&nbsp;&nbsp;Debit Card </span>}>
                  </Tab>
                  <Tab eventKey="upi" title="UPI">
                  </Tab>
                </Tabs>
              </div>  
        </div>
    </div>
 )
}