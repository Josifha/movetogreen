import $ from 'jquery';
import React from 'react';
import { useState } from "react";
import { Button, Form, Dropdown} from 'react-bootstrap';

import './Donate.css';

export default function Donate() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [treesPackage, setTreesPackage] = useState("Select a Package");
  const [occasions, setOccasions] = useState("Select Occasions");
  const [otherOccasion, setOtherOccasion] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleTreesPackageChange =  eventKey => {
    setTreesPackage(eventKey);
    if(eventKey == '10 Trees') {
      setAmount(900);
    } else if(eventKey == '100 Trees') { 
      setAmount(9000);
    } else if(eventKey == '500 Trees') { 
       setAmount(45000);
    } else if(eventKey == '1000 Trees') { 
       setAmount(90000);
    }
  };

  const handleOccasionsChange =  eventKey => {
    setOccasions(eventKey);
    $('#other-occasion').hide();
    if(eventKey == 'Other') {
      $('#other-occasion').show();
    }
  };
    
  return(
    <div class="donate-page">
      <div class="form">
        <div class="empty-div"></div> 
        <h4>Move to Green</h4>    
        <div class="empty-div"></div>  
        <div>
          <h6>Help Us Plant A tree</h6>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="phoneNo">
              <Form.Control type="text" placeholder="Phone No" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)}/>
            </Form.Group>
            <div class="empty-div"></div>
            <Dropdown title={treesPackage} onSelect={handleTreesPackageChange}>
              <Dropdown.Toggle variant="Success" id="dropdown-basic">
                  {treesPackage}
              </Dropdown.Toggle>
              <Dropdown.Menu variant="Success">
                  <Dropdown.Item eventKey="10 Trees">10 Trees</Dropdown.Item>
                  <Dropdown.Item eventKey="100 Trees">100 Trees</Dropdown.Item>
                  <Dropdown.Item eventKey="500 Trees">500 Trees</Dropdown.Item>
                  <Dropdown.Item eventKey="1000 Trees">1000 Trees</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown title={occasions} onSelect={handleOccasionsChange}>
              <Dropdown.Toggle variant="Success" id="dropdown-basic">
                  {occasions}
              </Dropdown.Toggle>
              <Dropdown.Menu variant="Success">
                  <Dropdown.Item eventKey="As a gift">As a gift</Dropdown.Item>
                  <Dropdown.Item eventKey="Birthday">Birthday</Dropdown.Item>
                  <Dropdown.Item eventKey="Friendship">Friendship</Dropdown.Item>
                  <Dropdown.Item eventKey="Gratitude">Gratitude</Dropdown.Item>
                  <Dropdown.Item eventKey="In memory of">In memory of</Dropdown.Item>
                  <Dropdown.Item eventKey="New arrival in family">New arrival in family</Dropdown.Item>
                  <Dropdown.Item eventKey="Sympathy">Sympathy</Dropdown.Item>
                  <Dropdown.Item eventKey="Wedding">Wedding</Dropdown.Item>
                  <Dropdown.Item eventKey="Other">Other</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div id="other-occasion" class="other-occasion">
              <Form.Group className="mb-3" controlId="otherOccasion">
                <Form.Control type="text" placeholder="Other Occasion" value={otherOccasion} onChange={(e) => setOtherOccasion(e.target.value)}/>
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="amount">
              <Form.Control readOnly type="text" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            </Form.Group>
            <div class="empty-div"></div>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I accept terms and conditions"/>
            </Form.Group>
            <Button variant="primary" type="submit">Donate Now</Button>
          </Form>
        </div>       
      </div>
    </div>
  )
}