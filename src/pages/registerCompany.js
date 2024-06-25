import React, { useState, useEffect } from 'react';
import { InputGroup, Form, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RegisterCompany = () => {
  const [mybubbles, setMybubbles] = useState(document.getElementsByClassName('ani-bubble'));
  // const mybubbles = document.getElementsByClassName('ani-bubble');
  const bubblecolors = ['#c5a5ab', '#e3e2dd', '#87a6c0'];

  useEffect(() => {
    setMybubbles(document.getElementsByClassName('ani-bubble'));
    for (let i = 0; i < mybubbles.length; i++) {
      mybubbles[i].style.backgroundColor = bubblecolors[Math.floor(Math.random() * bubblecolors.length)];
      mybubbles[i].style.opacity = Math.random() * 0.75;

      const bubblesize = (Math.floor(Math.random() * 9) + 2) * 50;

      mybubbles[i].style.width = bubblesize + 'px';
      mybubbles[i].style.height = bubblesize + 'px';
      mybubbles[i].style.borderRadius = bubblesize / 2 + 'px';

      mybubbles[i].style.left = Math.floor(Math.random() * 100) + '%';

      mybubbles[i].style.animationDuration = Math.floor(Math.random() * 16) + 8 + 's';
      mybubbles[i].style.animationDelay = Math.floor(Math.random() * 8) + 's';
    }
  }, [mybubbles, bubblecolors]);

  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('/register/aws-info');
  };

  return (
    <section className="getstarted-wrap">
      <div className="getstarted-cont">
        <div className="getstarted-cont__left">
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
        </div>
        <div className="getstarted-cont__form">
          <div className="getstarted-cont__form-top"></div>
          <div className="getstarted-cont__form-bottom">
            <p className="getstarted-cont__form-title">IAMPAM Company Info Registration</p>
            <div className="registerCompany-cont__form-inputs">
              <Form className="company-form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Company Registration Number</Form.Label>
                  <Form.Control type="email" placeholder="123-45-67890" />
                  {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control type="email" placeholder="company name" />
                  {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Contact Person</Form.Label>
                  <Form.Control type="email" placeholder="Name" />
                  {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Contact Phone</Form.Label>
                  <Form.Control type="email" placeholder="010-0000-0000" />
                  {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Contact Email</Form.Label>
                  <Form.Control type="email" placeholder="username@xxx.com" />
                  {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
                </Form.Group>

                <Button className="submit-btn" variant="secondary" type="submit" onClick={onSubmit}>
                  NEXT
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterCompany;
