import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoFullLight from '../assets/images/logo-full-light.png';
import { useSelector } from 'react-redux';
import { setId } from '../store/auth';

const Navbar = () => {
  let imgattr = 'logo';

  const auth = useSelector((state) => state.auth);
  const register = useSelector((state) => state.register);

  const { displayName, socialEmail, profileImage } = auth;
  const { companyNumber, companyName, contactPerson, contactPhone, contactEmail, awsAccount, awsAccountName, awsAccountType, awsRegions } = register;

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    fetch('https://9ajdcwvcs2.execute-api.ap-northeast-2.amazonaws.com/dev/verify_token', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response.status === 200) {
        setIsLogin(true);
      } else if (auth.id) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  });

  // TODO: pricing.js로 옮기기
  const requestPayment = async () => {};

  const logout = async () => {
    if (auth.id) {
      console.log('logout completed');
      setId('');
    } else {
      const response = await fetch('https://9ajdcwvcs2.execute-api.ap-northeast-2.amazonaws.com/dev/logout', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
      if (response.ok && response.status === 200) {
        setIsLogin(false);
        console.log('logout completed');
      }
    }
  };
  return (
    <header className="site-header-one go-top">
      <nav className="main-nav__one stricky">
        <div className="container-fluid">
          <div className="main-nav__logo-box">
            <Link to="/">
              <img src={logoFullLight} alt={imgattr} />
            </Link>
            <a href="#" className="side-menu__toggler">
              <i className="fa fa-bars" />
            </a>
          </div>
          {/* /.main-nav__logo-box */}
          <div className="main-nav__main-navigation">
            <ul className=" main-nav__navigation-box">
              <li>
                <a href="#whyLikeUs">Why Like us</a>
                {/* <Link to="/home-v2">Home 02</Link> */}
              </li>
              <li>
                <a href="#AboutUs">About Us</a>
              </li>
              <li>
                <a href="#WhatWeDo">What We Do</a>
              </li>
              <li>
                <a href="#Team">Team</a>
              </li>
              <li>
                <a href="#OurSkills">Our Skills</a>
              </li>
              <li>
                <a href="#OurProject">Our Project</a>
              </li>
            </ul>
          </div>
          {/* /.main-nav__main-navigation */}

          <div className="main-nav__right">
            <Link to="/pricing" className="thm-btn mr-4 subscribe-btn" onClick={requestPayment}>
              SUBSCRIBE
            </Link>

            {/* TODO: 소셜로그인한 사용자: Get Started 버튼 대신 CONSOLE 버튼 (https://cloudops.iampam.io로 이동하는 버튼) */}
            {isLogin ? (
              <Link to="/" className="thm-btn nav-btn" style={{ marginRight: '8px' }} onClick={logout}>
                {/* TODO: ADD - Logout logic */}
                LOGOUT
              </Link>
            ) : (
              <Link to="/login" className="thm-btn nav-btn" style={{ marginRight: '8px' }}>
                LOGIN
              </Link>
            )}

            {companyName && companyNumber && contactPerson && contactPhone && contactEmail && isLogin ? (
              <Link to="https://cloudops.iampam.io" className="thm-btn nav-btn" target="_blank">
                CONSOLE
                <i className="fa fa-angle-right" />
              </Link>
            ) : isLogin && !companyName ? (
              <Link to="/register/company" className="thm-btn mr-4 nav-btn">
                GET STARTED
                <i className="fa fa-angle-right" />
              </Link>
            ) : null}

            {/* /.thm-btn */}
          </div>
          {/* /.main-nav__right */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
