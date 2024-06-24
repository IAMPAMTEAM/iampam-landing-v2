import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import portfolio1 from '../assets/images/portfolio/portfolio-1-1.jpg';
import portfolio2 from '../assets/images/portfolio/portfolio-1-2.jpg';
import portfolio3 from '../assets/images/portfolio/portfolio-1-3.jpg';

class PortfolioONe extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    let imagealt = 'image';

    return (
      <section className="portfolio-one go-top" id="OurProject">
        <div className="container">
          <div className="block-title text-center">
            <p>
              <span>Our Project</span>
            </p>
            <h3>Let’s See Our Portfolio</h3>
            <div className="block-title__line" />
            {/* /.block-title__line */}
          </div>
          {/* /.block-title */}
          <div className="row">
            <div className="col-lg-4">
              <div className="portfolio-one__single">
                <img src={portfolio1} alt={imagealt} />
                <div className="portfolio-one__content">
                  {/* <div className="portfolio-one__content-inner">
                    <h3>
                      <Link to="/portfolio-details">Cloud Automation</Link>
                    </h3>
                    <p>IAMPAM CloudOps</p>
                  </div> */}
                  {/* /.portfolio-one__content-inner */}
                </div>
                {/* /.portfolio-one__content */}
              </div>
              {/* /.portfolio-one__single */}
            </div>
            {/* /.col-lg-4 */}
            <div className="col-lg-4">
              <div className="portfolio-one__single">
                <img src={portfolio2} alt={imagealt} />
                <div className="portfolio-one__content">
                  {/* <div className="portfolio-one__content-inner">
                    <h3>
                      <Link to="/portfolio-details">Zerotrust Security</Link>
                    </h3>
                    <p>IAMPAM Zerotrust</p>
                  </div> */}
                  {/* /.portfolio-one__content-inner */}
                </div>
                {/* /.portfolio-one__content */}
              </div>
              {/* /.portfolio-one__single */}
            </div>
            {/* /.col-lg-4 */}
            <div className="col-lg-4">
              <div className="portfolio-one__single">
                <img src={portfolio3} alt={imagealt} />
                <div className="portfolio-one__content">
                  {/* <div className="portfolio-one__content-inner">
                    <h3>
                      <Link to="/portfolio-details">Network Flow Data</Link>
                    </h3>
                    <p>IAMPAM CloudOps</p>
                  </div> */}
                  {/* /.portfolio-one__content-inner */}
                </div>
                {/* /.portfolio-one__content */}
              </div>
              {/* /.portfolio-one__single */}
            </div>
            {/* /.col-lg-4 */}
          </div>
          {/* /.row */}

          {/* /.portfolio-one__more-btn__block */}
        </div>
        {/* /.container */}
      </section>
    );
  }
}

export default PortfolioONe;
