import React from 'react';
import './OurService.css';
import curve from '../../images/bg-whitewave-desktop.svg';
import { FaRegListAlt, FaCoffee, FaSearchengin, FaMedal } from 'react-icons/fa';



const OurService = () => (
  <section id="newsletter">
    <img src={curve} alt="" style={{ width: '100%' }} />
    <div className="content">
        <section className="content-section text-white text-center" id="services">
            <div className="container">
                {/* <div class="content-section-heading">
                    <h3 class="text-secondary mb-0">Services</h3>
                    <h2 class="mb-5">What We Offer</h2>
                </div> */}
                <div className="row d-flex justify-content-center">
                    {/* Job Offers */}
                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span className="service-icon rounded-circle mx-auto mb-3">
                            <FaRegListAlt size="3rem" color="yellow"/>
                        </span>
                        <h4>
                            <strong>IT Jobs</strong>
                        </h4>
                        <p className="text-faded mb-0">We searched thoroughly over 1000+ it job offers in Belgrade! </p>
                    </div>
                    {/* Coffe Drank */}
                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span className="service-icon rounded-circle mx-auto mb-3">
                            <FaCoffee size="3rem" color="yellow" />
                        </span>
                        <h4>
                            <strong>Coffee Cups</strong>
                        </h4>
                        <p className="text-faded mb-0">We drank up to 150 coffee cups. (with no sugar, of course)</p>
                    </div>
                    {/* Info accuracy */}
                    <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                        <span className="service-icon rounded-circle mx-auto mb-3">
                            <FaSearchengin size="3rem" color="yellow" />
                        </span>
                        <h4>
                            <strong>Precision</strong>
                        </h4>
                        <p className="text-faded mb-0">We offer you over 90% information accuracy based on the best offers.</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <span className="service-icon rounded-circle mx-auto mb-3">
                            <FaMedal size="3rem" color="yellow" />
                        </span>
                        <h4>
                            <strong>Seniority</strong>
                        </h4>
                        <p className="text-faded mb-0">Dedicated to monitoring the top job demands in IT sphere.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <img className="svg-flip" src={curve} alt="" style={{ width: '100%' }} />
  </section>
);

export default OurService;
