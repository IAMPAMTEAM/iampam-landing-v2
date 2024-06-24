import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import progressBg1 from '../assets/images/shapes/progress-bg-1.png';
import progress1 from '../assets/images/resources/progress-1-1.png';

class Skill extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    let imagealt = 'image';

    return (
      <section className="progress-one" id="OurSkills">
        <img src={progressBg1} alt={imagealt} className="progress-one__bg" />
        <div className="container">
          <img src={progress1} alt={imagealt} className="progress-one__moc" />
          <div className="row justify-content-end">
            <div className="col-lg-6 progress-one__content-wrap">
              <div className="progress-one__content">
                <div className="block-title text-left">
                  <p>
                    <span>Our Skills</span>
                  </p>
                  <h3>
                    Everything About IAMPAM
                    <br /> Professional Skills
                  </h3>
                  <div className="block-title__line" />
                  {/* /.block-title__line */}
                </div>
                {/* /.block-title */}
                <p>
                  IAMPAM's technical identity is DevSecAiOps. The convergence of DevOps, SecOps, CloudOps, and AI technologies and our diverse
                  experience in the market means IAMPAM's experts.
                </p>
                <div className="progress-one__progress-wrap">
                  <div className="progress-one__progress__bar">
                    <div className="progress-one__progress__bar-top">
                      <h3>Automation Skills - IaC, Ansible, RPA</h3>
                    </div>
                    {/* /.progress-one__progress__bar-top */}
                    <div className="progress-one__progress__bar-line">
                      <span className="wow fadeIn" data-wow-duration="1500ms" style={{ width: '95%', backgroundColor: '#3f02a8' }}>
                        <b>95%</b>
                      </span>
                    </div>
                    {/* /.progress-one__progress__bar-line */}
                  </div>
                  {/* /.progress-one__progress__bar */}
                  <div className="progress-one__progress__bar">
                    <div className="progress-one__progress__bar-top">
                      <h3>DevOps Skills - Frontend, Backend, APIs</h3>
                    </div>
                    {/* /.progress-one__progress__bar-top */}
                    <div className="progress-one__progress__bar-line">
                      <span className="wow fadeIn" data-wow-duration="1500ms" style={{ width: '95%', backgroundColor: '#ff57a4' }}>
                        <b>95%</b>
                      </span>
                    </div>
                    {/* /.progress-one__progress__bar-line */}
                  </div>
                  {/* /.progress-one__progress__bar */}
                  <div className="progress-one__progress__bar">
                    <div className="progress-one__progress__bar-top">
                      <h3>Zerotrust Skills - IAM, Access Control, Security</h3>
                    </div>
                    {/* /.progress-one__progress__bar-top */}
                    <div className="progress-one__progress__bar-line">
                      <span className="wow fadeIn" data-wow-duration="1500ms" style={{ width: '90%', backgroundColor: '#00c8b3' }}>
                        <b>90%</b>
                      </span>
                    </div>
                    {/* /.progress-one__progress__bar-line */}
                  </div>
                  {/* /.progress-one__progress__bar */}
                  <div className="progress-one__progress__bar">
                    <div className="progress-one__progress__bar-top">
                      <h3>Cloud &amp; AI Skills - AWS, Hybrid Cloud, LLM</h3>
                    </div>
                    {/* /.progress-one__progress__bar-top */}
                    <div className="progress-one__progress__bar-line">
                      <span className="wow fadeIn" data-wow-duration="1500ms" style={{ width: '90%', backgroundColor: '#ff9b0d' }}>
                        <b>90%</b>
                      </span>
                    </div>
                    {/* /.progress-one__progress__bar-line */}
                  </div>
                  {/* /.progress-one__progress__bar */}
                </div>
                {/* /.progress-one__progress-wrap */}
              </div>
              {/* /.progress-one__content */}
            </div>
            {/* /.col-lg-6 */}
          </div>
          {/* /.row justify-content-end */}
        </div>
        {/* /.container */}
      </section>
    );
  }
}

export default Skill;
