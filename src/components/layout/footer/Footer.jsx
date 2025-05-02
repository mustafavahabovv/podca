import React from 'react';
import {Link} from "react-router-dom";
import styles from './Footer.module.css';

const Footer = () => {
    return (

        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="mb-5">
                            <h3 className="footer-heading mb-4">About Podca</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur reprehenderit
                                vero atque, consequatur id ratione, et non dignissimos culpa? Ut veritatis, quos illum
                                totam quis blanditiis, minima minus odio!</p>
                        </div>

                        <div className="mb-5">
                            <h3 className="footer-heading mb-4">Recent Podcast</h3>
                            <div className="block-25">
                                <ul className="list-unstyled">
                                    <li className="mb-3">
                                        <a href="#" className="d-flex">
                                            <figure className="image mr-4">
                                                <img src="/src/assets/images/img_1.jpg" alt="" className="img-fluid"/>
                                            </figure>
                                            <div className="text">
                                                <h3 className="heading font-weight-light">Lorem ipsum dolor sit amet
                                                    consectetur elit</h3>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#" className="d-flex">
                                            <figure className="image mr-4">
                                                <img src="/src/assets/images/img_1.jpg" alt="" className="img-fluid"/>
                                            </figure>
                                            <div className="text">
                                                <h3 className="heading font-weight-light">Lorem ipsum dolor sit amet
                                                    consectetur elit</h3>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#" className="d-flex">
                                            <figure className="image mr-4">
                                                <img src="/src/assets/images/img_1.jpg" alt="" className="img-fluid"/>
                                            </figure>
                                            <div className="text">
                                                <h3 className="heading font-weight-light">Lorem ipsum dolor sit amet
                                                    consectetur elit</h3>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="row mb-5">
                            <div className="col-md-12">
                                <h3 className="footer-heading mb-4">Quick Menu</h3>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <ul className="list-unstyled">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Matches</a></li>
                                    <li><a href="#">News</a></li>
                                    <li><a href="#">Team</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <ul className="list-unstyled">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Membership</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="footer-heading mb-4">Follow Us</h3>

                                <div>
                                    <a href="#" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
                                    <a href="#" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                                    <a href="#" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                                    <a href="#" className="pl-3 pr-3"><span className="icon-linkedin"></span></a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="mb-5">
                            <h3 className="footer-heading mb-4">Watch Video</h3>

                            <div className="block-16">
                                <figure>
                                    <img src="/src/assets/images/img_1.jpg" alt="Image placeholder" className="img-fluid rounded"/>
                                    <a href="https://vimeo.com/channels/staffpicks/93951774"
                                       className="play-button popup-vimeo"><span className="icon-play"></span></a>
                                </figure>
                            </div>

                        </div>

                        <div className="mb-5">
                            <h3 className="footer-heading mb-2">Subscribe Newsletter</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit minima minus odio.</p>

                            <form action="#" method="post">
                                <div className="input-group mb-3">
                                    <input type="text"
                                           className="form-control border-secondary text-white bg-transparent"
                                           placeholder="Enter Email" aria-label="Enter Email"
                                           aria-describedby="button-addon2"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button" id="button-addon2">Send
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>

                    </div>

                </div>
                <div className="row pt-5 mt-5 text-center">
                    <div className="col-md-12">
                        <p>

                            Copyright &copy;
                            2025
                            All rights reserved | This template is made with <i className="icon-heart-o"
                                                                                aria-hidden="true"></i> by <a
                            href="https://colorlib.com/" target="_blank">Colorlib</a>
                        </p>
                    </div>

                </div>
            </div>
        </footer>

    );
};

export default Footer;
