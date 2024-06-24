import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import cta1 from '../assets/images/resources/cta-1-1.png';

class AboutStyleOne extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    let imagealt = 'image';

    return (
      <section className="about-one  go-top" id="AboutUs">
        <div className="container">
          <img src={cta1} alt={imagealt} className="about-one__moc" />
          <div className="row justify-content-end">
            <div className="col-lg-6">
              <div className="about-one__content">
                <div className="block-title text-left">
                  <p>
                    <span>About Us</span>
                  </p>
                  <h3>
                    We Are Specialized In <br /> Automation Soluation
                  </h3>
                  <div className="block-title__line" />
                  {/* /.block-title__line */}
                </div>
                {/* /.block-title */}
                <p>
                  Our Automation Specialties include IT Operations Automation, Cloud Services Automation, Security Compliance Check Automation, AI and
                  Data Services Automation.
                </p>
                <h4>We Are Always With You</h4>
                <p>
                  Want a new automation solution that we don't currently have? At IAMPAM, we're always hungry to fill customer needs and learn new
                  automation technologies.
                </p>
                {/* <Link to="/about" className="thm-btn about-one__btn">
                  Contact IAMPAM <i className="fa fa-angle-double-right" />
                </Link> */}
                {/* /.thm-btn */}
              </div>
              {/* /.about-one__content */}
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

export default AboutStyleOne;
