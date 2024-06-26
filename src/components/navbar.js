import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoFullLight from "../assets/images/logo-full-light.png";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import * as PortOne from "@portone/browser-sdk/v2";

const Navbar = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imgattr = "logo";
  let anchor = "#";

  const auth = useSelector((state) => state.auth);
  const register = useSelector((state) => state.register);

  const { displayName, socialEmail, profileImage } = auth;
  const {
    companyNumber,
    companyName,
    contactPerson,
    contactPhone,
    contactEmail,
    awsAccount,
    awsAccountName,
    awsAccountType,
    awsRegions,
  } = register;

  const [authToken, setAuthToken] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  console.log(Cookies);

  useEffect(() => {
    fetch(
      "https://9ajdcwvcs2.execute-api.ap-northeast-2.amazonaws.com/dev/verify_token",
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      console.log(response);
      if (response.status === 200) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  });

  const authTokens = Cookies.get("Authorization");

  console.log(authTokens);

  const requestPayment = async () => {
    const orderInfo = {
      storeId: "store-e80d4fff-be65-4d04-9e84-e1a99e6184e2",
      channelKey: "channel-key-06e9a427-7834-42df-945c-630201f25aba",
      paymentId: `payment-${crypto.randomUUID()}`,
      orderName: "cloudOps",
      totalAmount: 100,
      currency: "CURRENCY_KRW",
      payMethod: "CARD",
    };
    const response = await PortOne.requestPayment(orderInfo);

    if (response.code != null) {
      console.error(response.message);
      return;
    }
    console.log(response);
    console.log(response.paymentId);
    console.log(orderInfo.orderName);

    const notified = await fetch(
      "https://9ajdcwvcs2.execute-api.ap-northeast-2.amazonaws.com/dev/payment/complete",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          paymentId: response.paymentId,
          orderProduct: orderInfo.orderName,
        }),
      }
    );

    if (notified.ok) {
      console.log("Payment completed");
      console.log(notified);
    } else {
      console.error("Failed to notify payment completion");
      console.log(notified);
    }
  };

  const logout = async () => {
    const response = await fetch(
      "https://9ajdcwvcs2.execute-api.ap-northeast-2.amazonaws.com/dev/logout",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    );
    if (response.ok && response.status === 200) {
      setIsLogin(false);
      console.log("logout completed");
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
            <Link
              to="/"
              className="thm-btn mr-4 subscribe-btn"
              onClick={requestPayment}
            >
              SUBSCRIBE
            </Link>

            {/* TODO: 소셜로그인한 사용자: Get Started 버튼 대신 CONSOLE 버튼 (https://cloudops.iampam.io로 이동하는 버튼) */}
            {isLogin ? (
              <Link
                to="/"
                className="thm-btn nav-btn"
                style={{ marginRight: "8px" }}
                onClick={logout}
              >
                {/* TODO: ADD - Logout logic */}
                LOGOUT
              </Link>
            ) : (
              <Link
                to="/login"
                className="thm-btn nav-btn"
                style={{ marginRight: "8px" }}
              >
                LOGIN
              </Link>
            )}

            {companyName &&
            companyNumber &&
            contactPerson &&
            contactPhone &&
            contactEmail &&
            awsAccount &&
            awsAccountName &&
            awsAccountType &&
            awsRegions &&
            displayName &&
            socialEmail &&
            profileImage ? (
              <Link
                to="https://cloudops.iampam.io"
                className="thm-btn nav-btn"
                target="_blank"
              >
                CONSOLE
                <i className="fa fa-angle-right" />
              </Link>
            ) : (
              <Link to="/register/company" className="thm-btn mr-4 nav-btn">
                GET STARTED
                <i className="fa fa-angle-right" />
              </Link>
            )}

            {/* /.thm-btn */}
          </div>
          {/* /.main-nav__right */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
