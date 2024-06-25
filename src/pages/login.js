import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoApple from '../assets/icons/logo-apple.png';
import LogoGoogle from '../assets/icons/logo-google.png';
import { InputGroup, Form, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
  const [mybubbles, setMybubbles] = useState([]);
  const bubblecolors = ['#c5a5ab', '#e3e2dd', '#87a6c0'];

  useEffect(() => {
    const bubbles = document.getElementsByClassName('ani-bubble');
    setMybubbles(bubbles);

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
  }, [bubblecolors]);

  const navigate = useNavigate();

  const loginGoogle = async (credentialResponse) => {
    try {
      const response = await fetch('https://5zd3wa5ul4.execute-api.ap-northeast-2.amazonaws.com/dev/login/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentialResponse),
      });

      if (!response.ok) {
        throw new Error('Failed to verify token');
      }

      const data = await response.json();
      console.log('server response: ', data);

      if (data.isRegistered) {
        navigate('/');
      } else {
        navigate('/login');
      }
    } catch (err) {
      console.error(err);
    }
  };

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
            <p className="getstarted-cont__form-title">IAMPAM CloudOps Login</p>
            <div className="signup-cont__form-btns">
              <GoogleLogin
                onSuccess={loginGoogle}
                onError={() => {
                  console.error('Failed Login with Google');
                }}
                useOneTap
                render={(renderProps) => <Button className="signup-cont__form-btns__btn">Sign in with Google</Button>}
              />
              {/* <Button className="signup-cont__form-btns__btn" variant="outline-dark">
                <img src={LogoGoogle} alt="" />
                <p>
                  Sign up with <span>Google</span>
                </p>
              </Button>
              <Button className="signup-cont__form-btns__btn" variant="outline-dark">
                <img src={LogoApple} alt="" />
                <p>
                  Sign up with <span>Apple</span>
                </p>
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
