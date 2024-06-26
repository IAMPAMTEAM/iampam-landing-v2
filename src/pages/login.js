import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoApple from '../assets/icons/logo-apple.png';
import LogoGoogle from '../assets/icons/logo-google.png';
import { InputGroup, Form, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplayName, setSocialEmail, setProfileImage, setId } from '../store/auth';

const Login = () => {
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
  const auth = useSelector((state) => state.auth);

  const { displayName, socialEmail, profileImage } = auth;

  const [id, setLocalId] = useState('');
  const [password, setPassword] = useState('');

  const loginGoogle = async (credentialResponse) => {
    try {
      const response = await fetch('https://9ajdcwvcs2.execute-api.ap-northeast-2.amazonaws.com/dev/login/google', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentialResponse),
      });

      if (!response.ok) {
        throw new Error('Failed to verify token');
      }

      const data = await response.json();

      // TODO: login data state.
      if (data.data && data.isRegistered) {
        if (data.data.userInfo) {
          const { userInfo, token } = data.data;

          dispatch(setDisplayName(userInfo.displayName));
          dispatch(setSocialEmail(userInfo.socialEmail));
          dispatch(setProfileImage(userInfo.profileImage));

          // Cookies.set('Authorization', token);

          navigate('/');
        }
      } else {
        navigate('/login');
      }
    } catch (err) {
      console.error(err);
    }
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

  const login = () => {
    if (id === 'admin' && password === 'qwer1234') {
      navigate('/');
      dispatch(setId(id));
    }
  };

  return (
    <section className="getstarted-wrap" id="root2">
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
              <Form className="signup-cont__form__login" onSubmit={login}>
                <Form.Group>
                  <Form.Label htmlFor="inputID5">ID</Form.Label>
                  <Form.Control type="text" id="inputID5" onChange={(e) => setLocalId(e.target.value)} value={id} />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                  <Form.Control
                    type="password"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  {/* <Form.Text id="passwordHelpBlock" muted>
                  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </Form.Text> */}
                </Form.Group>
                <Button type="submit" variant="secondary">
                  Login
                </Button>
              </Form>

              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  loginGoogle(credentialResponse);
                }}
                onError={() => {
                  console.error('Failed Login with Google');
                }}
                render={({ onClick }) => (
                  <Button className="signup-cont__form-btns__btn" variant="outline-dark" onClick={onClick}>
                    <img src={LogoGoogle} alt="" />
                    Sign in with Google
                  </Button>
                )}
                useOneTap
              />

              {/* <Button
                className="signup-cont__form-btns__btn"
                variant="outline-dark"
                onClick={(credentialResponse) => loginGoogle(credentialResponse)}
              >
                <img src={LogoGoogle} alt="" />
                Sign in with Google
              </Button> */}
              {/* </GoogleOAuthProvider> */}
              {/* <Button className="signup-cont__form-btns__btn" variant="outline-dark" onClick={loginGoogle}>
                <img src={LogoGoogle} alt="" />
                <p>
                  Sign in with <span>Google</span>
                </p>
              </Button>
              <Button className="signup-cont__form-btns__btn" variant="outline-dark" onClick={logout}>
                <img src={LogoApple} alt="" />
                <p>
                  Sign in with <span>Apple</span>
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
