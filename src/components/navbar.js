import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoFullLight from '../assets/images/logo-full-light.png';

const Navbar = () => {
  let publicUrl = process.env.PUBLIC_URL + '/';
  let imgattr = 'logo';
  let anchor = '#';

  return (
    <header className="site-header-one go-top">
      <nav className="main-nav__one stricky">
        <div className="container-fluid">
          <div className="main-nav__logo-box">
            <Link to="/">
              <img src={logoFullLight} alt={imgattr} />{' '}
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
            {/* TODO: 소셜로그인한 사용자: Get Started 버튼 대신 CONSOLE 버튼 (https://cloudops.iampam.io로 이동하는 버튼) */}
            {/* <Link to="/contact" className="thm-btn mr-4">
              Login
            </Link>
            <Link to="/register/company" className="thm-btn mr-4">
              Get Started
            </Link> */}
            {/* <Link to="/contact" className="thm-btn mr-4">
                Get Started
                <i className="fa fa-angle-right" />
              </Link>
              <Link to="/contact" className="thm-btn">
                CONSOLE
                <i className="fa fa-angle-right" />
              </Link> */}
            {/* /.thm-btn */}
          </div>
          {/* /.main-nav__right */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
