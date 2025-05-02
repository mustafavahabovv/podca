import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>
            <header className="site-navbar py-4 absolute" role="banner">

                <div className="container">
                    <div className="row align-items-center">


                        <div className="col-3" data-aos="fade-down">
                            <h1><a href="#" className="text-white h2">Podca</a></h1>
                        </div>
                        <div className="col-9" data-aos="fade-down">
                            <nav className="site-navigation position-relative text-right text-md-right"
                                 role="navigation">


                                <div className="d-inline-block ml-md-0 mr-auto py-3"><a href="#"
                                                                                        className="site-menu-toggle js-menu-toggle text-white"><span
                                    className="icon-menu h3"></span></a></div>

                                <ul className="site-menu js-clone-nav d-none">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><Link to="/dashboard">Admin Dashbord</Link></li>
                                </ul>
                            </nav>


                        </div>

                    </div>
                </div>

            </header>
        </div>
    );
};

export default Header;
