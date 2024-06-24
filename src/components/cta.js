import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Cta extends Component {
  render() {
    return (
      <section className="cta-one  go-top">
        <div className="container">
          <div className="inner-container wow fadeInUp" data-wow-duration="1500ms">
            <div className="cta-one__left">
              <h3>Bring Automation to Your Biz</h3>
              <p>Automation means cost savings and competitiveness for your business.</p>
            </div>
            {/* /.cta-one__left */}
            <div className="cta-one__right">
              <Link to="/" className="thm-btn cta-one__btn" aria-disabled>
                Contact Us <i className="fa fa-angle-double-right" />
              </Link>
              {/* /.thm-btn cta-one__btn */}
            </div>
            {/* /.cta-one__right */}
          </div>
          {/* /.inner-container */}
        </div>
        {/* /.container */}
      </section>
    );
  }
}

export default Cta;
