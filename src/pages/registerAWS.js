import React, { useState, useEffect } from 'react';
import { InputGroup, DropdownButton, Dropdown, Button, Option } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const RegisterAWSInfo = () => {
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
    navigate('/');
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
                  <Form.Label>AWS Account</Form.Label>
                  <Form.Control type="text" placeholder="33301934" />
                  {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>AWS Account Type</Form.Label>
                  <Form.Control type="text" placeholder="dev or staging or production" />
                  {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>AWS Regions</Form.Label>
                  <Form.Control type="text" placeholder="Seoul" />
                  {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
                </Form.Group>

                <Button className="submit-btn" variant="secondary" type="submit" onClick={onSubmit}>
                  SUBMIT
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterAWSInfo;
