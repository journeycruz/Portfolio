import React from 'react';
import {FaGithub , FaEnvelope , FaLinkedinIn} from "react-icons/fa";

const SocialShare = [
    {Social: <FaGithub /> , link: 'https://github.com/journeycruz'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/journey-cruz-32a0a695'},
    {Social: <FaEnvelope /> , link: 'mailto:journey.cruz@gmail.com'},
]

const Footer = () => {
    return (
        <div className="footer-style-2 ptb--30 bg_image bg_image--1" data-black-overlay="6">
            <div className="wrapper text-center plr--50 plr_sm--20">
                <div className="row justify-content-center">
                    <div className="row justify-content-center col-lg-12">
                        <div className="inner text-center">
                            <ul className="social-share rn-lg-size d-flex justify-content-center text-center liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row align-items-center text-center">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="inner text-lg-center text-center mt_md--20 mt_sm--20">
                            <div className="text">
                                <p>Copyright © 2020 Journey Cruz. Built using ReactJS<img src="/assets/images/logo.svg" className="App-logo" alt="logo" /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;