import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import service1 from '../assets/images/shapes/service-i-1.png';
import service2 from '../assets/images/shapes/service-i-2.png';
import service3 from '../assets/images/shapes/service-i-3.png';

class WhyChooseUs extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    let imagealt = 'image';

    return (
      <section className="service-one go-top" id="whyLikeUs">
        <div className="container">
          <div className="block-title text-center">
            <p>
              <span>Why Like Us</span>
            </p>
            <h3>
              Reduce Your Business Cost
              <br />
              With IAMPAM Automation
            </h3>
            <div className="block-title__line" />
            {/* /.block-title__line */}
          </div>
          {/* /.block-title */}
          <div className="row high-gutter  go-top">
            <div className="col-lg-4">
              <div className="service-one__single">
                <div className="service-one__top">
                  <div className="service-one__icon">
                    <img src={service1} alt={imagealt} />
                  </div>
                  {/* /.service-one__icon */}
                  <div className="service-one__top-content">
                    <h3>
                      <Link to="/service-details">Reduce Cloud OPEX &amp; Automate Cloud</Link>
                    </h3>
                    <p>IAMPAM CloudOps</p>
                  </div>
                  {/* /.service-one__top-content */}
                </div>
                {/* /.service-one__top */}
                <p>
                  You're using cloud services to reduce IT and system costs, but the real area to work on is optimizing and automating your IT
                  operations. IAMPAM CloudOps frees your advanced operations staff from repetitive and unnecessary tasks.
                </p>
              </div>
              {/* /.service-one__single */}
            </div>
            {/* /.col-lg-4 */}
            <div className="col-lg-4">
              <div className="service-one__single">
                <div className="service-one__top">
                  <div className="service-one__icon">
                    <img src={service2} alt={imagealt} />
                  </div>
                  {/* /.service-one__icon */}
                  <div className="service-one__top-content">
                    <h3>
                      <Link to="/service-details">Reduce Security OPEX &amp; Apply Zerotrust</Link>
                    </h3>
                    <p>IAMPAM ZeroTrust</p>
                  </div>
                  {/* /.service-one__top-content */}
                </div>
                {/* /.service-one__top */}
                <p>
                  Zerotrust security can transform your existing inefficient and costly security infrastructure and operations into a highly secure
                  and affordable way of securing your organization. IAMPAM ZeroTrust exists to do just that.
                </p>
              </div>
              {/* /.service-one__single */}
            </div>
            {/* /.col-lg-4 */}
            <div className="col-lg-4">
              <div className="service-one__single">
                <div className="service-one__top">
                  <div className="service-one__icon">
                    <img src={service3} alt={imagealt} />
                  </div>
                  {/* /.service-one__icon */}
                  <div className="service-one__top-content">
                    <h3>
                      <Link to="/service-details">Optimize Your Biz &amp; Apply Private AI</Link>
                    </h3>
                    <p>IAMPAM AiOps</p>
                  </div>
                  {/* /.service-one__top-content */}
                </div>
                {/* /.service-one__top */}
                <p>
                  Many organizations want to adopt AI services. However, the realities of high-cost GPU servers and advanced AI experts make it
                  difficult for organizations to adopt AI. IAMPAM AiOps solves this problem.
                </p>
              </div>
              {/* /.service-one__single */}
            </div>
            {/* /.col-lg-4 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
    );
  }
}

export default WhyChooseUs;
