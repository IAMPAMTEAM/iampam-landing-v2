import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import bg1 from '../assets/images/backgrounds/banner-bg-1-1.png';
import im1 from '../assets/images/resources/banner-1-1.png';
import '../index.css';

const Banner = () => {
  let imagealt = 'image';

  return (
    <section
      className="banner-one go-top"
      style={{
        backgroundImage: `url(${bg1})`,
      }}
    >
      <img src={im1} alt={imagealt} className="banner-one__moc" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="banner-one__content">
              <h3>
                <span>Discover New </span> <br />
                DevSecOps
                <br />
                for Your Cost Reduction
              </h3>
              <p>We are a professional &amp; experienced DevSecAi partner</p>
              {/* <Link to="/service" className="thm-btn banner-one__btn">
                  Discover Now <i className="fa fa-angle-double-right" />
                </Link> */}
              {/* /.thm-btn */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
