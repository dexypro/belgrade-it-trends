import React from 'react';
import './Footer.css';
import wave from '../../images/blackwave.svg';
import logoAlt from '../../images/logo-alt.png';




const Footer = () => (
  <footer>
    <img src={wave} alt="" style={{ width: '100%' }} className="footer-wave" />
    <div className="footer py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-9 col-xs-12 pr-5">
                    <a className="navbar-brand pb-3" href="/">
                    <img src={logoAlt} alt="logo" height="50" />
                    </a>
                    <p className="text-muted footDesc">
                        “Any sufficiently advanced technology is indistinguishable from magic.” 
                        ― Arthur C. Clarke
                    </p>
                    <div className="row">
                        <div className="col-md-4 col-xs-6 pr-2 socials text-white pt-2">
                            <a className="authors"href="https://www.linkedin.com/in/dejanbajovic/" target="_blank" rel="noopener noreferrer">
                                <h5>Dejan Bajović</h5>
                            </a>
                            <p className="text-muted footDesc">
                                Full-Stack Web Developer
                            </p>
                            <a href="https://www.linkedin.com/in/dejanbajovic/" target="_blank" rel="noopener noreferrer">
                                <i className="grow fab fa-linkedin" />
                            </a>
                            <a
                                href="https://github.com/dexypro"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="grow fab fa-github-square" />
                            </a>
                        </div>
                        <div className="col-md-4 col-xs-6 pr-2 socials text-white pt-2">
                            <a className="authors"href="https://www.linkedin.com/in/uros-pesic-677007161/" target="_blank" rel="noopener noreferrer">
                                <h5>Uros Pešić</h5>
                            </a>
                            <p className="text-muted footDesc">
                                Backend Developer
                            </p>
                            <a href="https://www.linkedin.com/in/uros-pesic-677007161/" target="_blank" rel="noopener noreferrer">
                                <i className="grow fab fa-linkedin" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="copyright">
      © {new Date().getFullYear()} Belgrade IT Trends. All Rights Reserved
    </div>
  </footer>
);

export default Footer;
