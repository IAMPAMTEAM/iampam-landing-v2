import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import team1 from '../assets/images/team/team-1-2.jpg';
import team2 from '../assets/images/team/team-1-1.jpg';
import team3 from '../assets/images/team/team-1-4.jpg';
import '../index.css';

class Team extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    let imagealt = 'image';

    return (
      <section className="team-one" id="Team">
        <div className="container">
          <div className="block-title text-center">
            <p>
              <span>Our Team</span>
            </p>
            <h3>
              Meet Our DevSecOps <br /> Team Leaders
            </h3>
            <div className="block-title__line" />
            {/* /.block-title__line */}
          </div>
          {/* /.block-title */}
          <div className="team-wrap">
            <div className="team-cont">
              <div className="team-one__single">
                <div className="team-one__image">
                  <img src={team1} alt={imagealt} />
                </div>
                {/* /.team-one__image */}
                <div className="team-one__content">
                  <div className="team-one__social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-google-plus-g" />
                    </a>
                    <a href="#">
                      <i className="fab fa-behance" />
                    </a>
                  </div>
                  {/* /.team-one__social */}
                  <h3>DevOps Team</h3>
                  <p>Samsung, KAIST</p>
                </div>
                {/* /.team-one__content */}
              </div>
              {/* /.team-one__single */}
            </div>
            <div className="team-cont">
              <div className="team-one__single">
                <div className="team-one__image">
                  <img src={team2} alt={imagealt} />
                </div>
                {/* /.team-one__image */}
                <div className="team-one__content">
                  <div className="team-one__social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-google-plus-g" />
                    </a>
                    <a href="#">
                      <i className="fab fa-behance" />
                    </a>
                  </div>
                  {/* /.team-one__social */}
                  <h3>SecOps Team</h3>
                  <p>Samsung, Cisco</p>
                </div>
                {/* /.team-one__content */}
              </div>
              {/* /.team-one__single */}
            </div>
            <div className="team-cont">
              <div className="team-one__single">
                <div className="team-one__image">
                  <img src={team3} alt={imagealt} />
                </div>
                <div className="team-one__content">
                  <div className="team-one__social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-google-plus-g" />
                    </a>
                    <a href="#">
                      <i className="fab fa-behance" />
                    </a>
                  </div>
                  {/* /.team-one__social */}
                  <h3>AiOps Team</h3>
                  <p>ETRI, Seoul Univ</p>
                </div>
                {/* /.team-one__content */}
              </div>
              {/* /.team-one__single */}
            </div>
            {/* /.col-lg-3 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
    );
  }
}

export default Team;
