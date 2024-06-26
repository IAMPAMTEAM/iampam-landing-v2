import React, { useState, useEffect, useCallback } from 'react';
import { InputGroup, DropdownButton, Dropdown, Button, Option, Stack, Badge, CloseButton } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAwsAccount, setAwsAccountName, setAwsAccountType, setAwsRegions } from '../store/register';

const RegisterAWSInfo = () => {
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

  const regionList = [
    'Seoul',
    'Tokyo',
    'Singapore',
    'Sydney',
    'Mumbai',
    'Frankfurt',
    'London',
    'Paris',
    'Stockholm',
    'Ireland',
    'Sao Paulo',
    'N. Virginia',
    'Ohio',
    'N. California',
    'Oregon',
    'GovCloud (US-East)',
    'GovCloud (US-West)',
  ];

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const register = useSelector((state) => state.register);

  const [awsAccount, setLocalAccount] = useState(register.awsAccount);
  const [awsAccountName, setLocalAccountName] = useState(register.awsAccountName);
  const [awsAccountType, setLocalAccountType] = useState(register.awsAccountType);
  const [awsRegions, setLocalAWSRegions] = useState(register.awsRegions);

  const redirectionCloudFomrationTemplateSummaryPage = useCallback(() => {
    const templateURL = 'https://cloudops-tenants-cf-template.s3.ap-northeast-2.amazonaws.com/cloudops_tenants_cf_template.yaml';
    const region = 'ap-northeast-2';
    const stackName = 'CloudOps';
    const url = `https://ap-northeast-2.console.aws.amazon.com/cloudformation/home?region=${region}#/stacks/create/review?templateURL=${templateURL}&stackName=${stackName}`;
    window.open(url);
  }, []);

  const registerForm = useCallback((e) => {
    // const registerForm = (e) => {
    // };
    e.preventDefault();
    // const { awsAccount, awsAccountName, awsAccountType, awsRegions } = register;

    dispatch(setAwsAccount(awsAccount));
    dispatch(setAwsAccountName(awsAccountName));
    dispatch(setAwsAccountType(awsAccountType));
    dispatch(setAwsRegions(awsRegions));

    navigate('/');

    redirectionCloudFomrationTemplateSummaryPage();
  }, []);

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
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>AWS Account</Form.Label>
                  <Form.Control type="text" placeholder="33301934" onChange={(e) => setLocalAccount(e.target.value)} value={awsAccount} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>AWS Account Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="dev or staging or production"
                    onChange={(e) => setLocalAccountName(e.target.value)}
                    value={awsAccountName}
                  />
                  {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>AWS Account Type</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="dev or staging or production"
                    onChange={(e) => setLocalAccountType(e.target.value)}
                    value={awsAccountType}
                  />
                </Form.Group>

                <Form.Group controlId="custom-select">
                  <Form.Label>AWS Regions</Form.Label>
                  <Form.Control
                    as="select"
                    className="rounded-0 shadow"
                    onChange={(e) =>
                      setLocalAWSRegions((prev) => {
                        if (Array.isArray(prev) && prev.length) return prev.indexOf(e.target.value) < 0 ? [...prev, e.target.value] : prev;
                      })
                    }
                    value={awsRegions}
                  >
                    <option className="d-none" value="">
                      Select Regions
                    </option>
                    {regionList.map((option) => (
                      <option key={option}> {option}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Stack direction="horizontal" gap={1} className="mt-2">
                  {Array.isArray(awsRegions) && awsRegions.length > 0
                    ? awsRegions.map((awsRegion) => {
                        if (awsRegion !== null && awsRegion.length > 0)
                          return (
                            <Badge className="region-badge" bg="light" text="dark">
                              {awsRegion}
                              <CloseButton onClick={() => setLocalAWSRegions((prev) => prev.filter((region) => region !== awsRegion))} />
                            </Badge>
                          );
                        else return null;
                      })
                    : null}
                  {/* <Badge bg="light" text="dark">
                    Light
                  </Badge> */}
                </Stack>

                <Button className="submit-btn" variant="secondary" type="submit">
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
