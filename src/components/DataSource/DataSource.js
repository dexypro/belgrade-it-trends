import React from 'react';
import './DataSource.css';
import infostudImg from '../../images/infostud.svg';
import helloworldImg from '../../images/helloworld.png';
import linkedInImg from '../../images/linkedin.png';
import indeedImg from '../../images/indeed.png';
import fbImg from '../../images/fb.png';

const DataSource = () => (
    <section id="data" className="my-5 text-center">
        <div className="trends">
            <h2 className="title pt-5">How we collect our data:</h2>
            <div className="row d-flex justify-content-center py-3 pt-5">
                <div className="col-md-4 col-xs-6 pr-2 text-white pt-3">
                    <img className="source-logo" src={infostudImg} alt="infostud logo" />
                </div>
                <div className="col-md-4 col-xs-6 pr-2 text-white pt-3">
                    <img className="source-logo" src={helloworldImg} alt="helloworld logo" />
                </div>
                <div className="col-md-4 col-xs-6 pr-2 text-white pt-3">
                    <img className="source-logo" src={linkedInImg} alt="linkedin logo" />
                </div>
            </div>
            <div className="row d-flex justify-content-center py-3 pt-3">
                <div className="col-md-3 col-xs-6 pr-2 text-white pt-3">
                    <img className="source-logo" src={indeedImg} alt="indeed logo" />
                </div>
                <div className="col-md-3 col-xs-6 pr-2 text-white pt-3">
                    <img className="source-logo" src={fbImg} alt="facebook logo" />
                </div>
            </div>
        </div>
    </section>
);

export default DataSource;
