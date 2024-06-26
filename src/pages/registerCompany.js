import React, { useState, useEffect } from 'react';
import { InputGroup, Form, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCompanyNumber, setCompanyName, setContactPerson, setContactPhone, setContactEmail } from '../store/register';

const RegisterCompany = () => {
  // const [mybubbles, setMybubbles] = useState(document.getElementsByClassName('ani-bubble'));
  const bubblecolors = ['#c5a5ab', '#e3e2dd', '#87a6c0'];

  useEffect(() => {
    const bubbles = document.getElementsByClassName('ani-bubble');
    setBubbleStyles(bubbles);
  }, []); // 빈 배열을 종속성으로 사용하여 컴포넌트가 처음 렌더링될 때만 실행

  const setBubbleStyles = (bubbles) => {
    for (let i = 0; i < bubbles.length; i++) {
      bubbles[i].style.backgroundColor = bubblecolors[Math.floor(Math.random() * bubblecolors.length)];
      bubbles[i].style.opacity = Math.random() * 0.75;

      const bubblesize = (Math.floor(Math.random() * 9) + 2) * 50;
      bubbles[i].style.width = bubblesize + 'px';
      bubbles[i].style.height = bubblesize + 'px';
      bubbles[i].style.borderRadius = bubblesize / 2 + 'px';
      bubbles[i].style.left = Math.floor(Math.random() * 100) + '%';
      bubbles[i].style.animationDuration = Math.floor(Math.random() * 16) + 8 + 's';
      bubbles[i].style.animationDelay = Math.floor(Math.random() * 8) + 's';
    }
  };
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const register = useSelector((state) => state.register);

  const [companyNumber, setLocalCompanyNumber] = useState(register.companyNumber);
  const [companyName, setLocalCompanyName] = useState(register.companyName);
  const [contactPerson, setLocalContactPerson] = useState(register.contactPerson);
  const [contactPhone, setLocalContactPhone] = useState(register.contactPhone);
  const [contactEmail, setLocalContactEmail] = useState(register.contactEmail);

  const registerForm = (e) => {
    e.preventDefault();

    dispatch(setCompanyNumber(companyNumber));
    dispatch(setCompanyName(companyName));
    dispatch(setContactPerson(contactPerson));
    dispatch(setContactPhone(contactPhone));
    dispatch(setContactEmail(contactEmail));

    navigate('/register/aws-info');
  };

  const root = document.getElementById('root');

  useEffect(() => {
    root.style.display = 'flex';
    root.style.height = '100vh';
    root.style.background = 'transparent linear-gradient(128deg, #754400 0%, #333354 100%) 0% 0% no-repeat padding-box';
    root.style.alignItems = 'center';
    root.style.justifyContent = 'center';

    return () => {
      root.style.display = '';
      root.style.height = '';
      root.style.background = '';
      root.style.alignItems = '';
      root.style.justifyContent = '';
    };
  });

  return (
    <section className="getstarted-wrap">
      <div className="getstarted-cont">
        <div className="getstarted-cont__left">
          {Array.from({ length: 30 }).map((_, index) => (
            <div key={index} className="ani-bubble" />
          ))}
        </div>
        <div className="getstarted-cont__form">
          <div className="getstarted-cont__form-top"></div>
          <div className="getstarted-cont__form-bottom">
            <p className="getstarted-cont__form-title">IAMPAM Company Info Registration</p>
            <div className="registerCompany-cont__form-inputs">
              <Form className="company-form" onSubmit={registerForm}>
                <Form.Group className="mb-3">
                  <Form.Label>Company Registration Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="123-45-67890"
                    value={companyNumber}
                    onChange={(e) => setLocalCompanyNumber(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control type="text" placeholder="company name" value={companyName} onChange={(e) => setLocalCompanyName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Contact Person</Form.Label>
                  <Form.Control type="text" placeholder="Name" value={contactPerson} onChange={(e) => setLocalContactPerson(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Contact Phone</Form.Label>
                  <Form.Control type="text" placeholder="010-0000-0000" value={contactPhone} onChange={(e) => setLocalContactPhone(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Contact Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="username@xxx.com"
                    value={contactEmail}
                    onChange={(e) => setLocalContactEmail(e.target.value)}
                  />
                </Form.Group>

                <Button className="submit-btn" variant="secondary" type="submit">
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
