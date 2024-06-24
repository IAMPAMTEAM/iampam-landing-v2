import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import aboutTowBg from '../assets/images/shapes/about-two-bg.png';
import cta2 from '../assets/images/resources/cta-2-1.png';

class AboutStyleTwo extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    let imagealt = 'image';

    return (
      <section className="about-two  go-top" id="WhatWeDo">
        <img src={aboutTowBg} alt={imagealt} className="about-two__bg" />
        <div className="container">
          <img src={cta2} alt={imagealt} className="about-two__moc" />
          <div className="row">
            <div className="col-lg-6">
              <div className="about-two__content">
                <div className="block-title text-left">
                  <p>
                    <span>What We Do</span>
                  </p>
                  <h3>
                    We Offer Best Automation <br /> For Your Business
                  </h3>
                  <div className="block-title__line" />
                  {/* /.block-title__line */}
                </div>
                {/* /.block-title */}
                <p>
                  DevSecOps is a critical skill for implementing and delivering automation services. IAMPAM Managed DevSecOps services provide a range
                  of services from DevSecOps experts. In addition, our already implemented DevSecOps solutions save you time and risk.
                </p>
                <div className="about-two__box">
                  <div className="about-two__box-icon">
                    <i className="far fa-leaf" />
                  </div>
                  {/* /.about-two__box-icon */}
                  <div className="about-two__box-content">
                    <h3>Managed DevSecOps Service</h3>
                    <p>
                      IAMPAM DevSecOps experts are with you throughout the entire process of consulting, deployment, compliances, and operating
                      automation services.
                    </p>
                  </div>
                  {/* /.about-two__box-content */}
                </div>
                {/* /.about-two__box */}
                <div className="about-two__box">
                  <div className="about-two__box-icon">
                    <i className="far fa-laptop-code" />
                  </div>
                  {/* /.about-two__box-icon */}
                  <div className="about-two__box-content">
                    <h3>DevSecOps &amp; AI Solutions</h3>
                    <p>
                      We provide solutions for the most popular automation services in the market. IAMPAM currently has IT system operations, cloud
                      operations, Zerotrust operations, and enterprise AI automation solutions.
                    </p>
                  </div>
                  {/* /.about-two__box-content */}
                </div>
                {/* /.about-two__box */}
              </div>
              {/* /.about-two__content */}
            </div>
            {/* /.col-lg-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
    );
  }
}

export default AboutStyleTwo;
