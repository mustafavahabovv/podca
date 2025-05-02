import React, {useEffect} from "react";
import AOS from "aos"

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'slide',
            once: true
        });
        AOS.refresh();
    }, []);
    return (
        <div>

            <div className="site-blocks-cover overlay inner-page-cover"
                 style={{backgroundImage:"url(/src/assets/images/hero_bg_3.jpg)"}} data-aos="fade"
                 data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center">
                        <div className="col-md-7" data-aos="fade-up" data-aos-delay="400">
                            <h2 className="text-white font-weight-light mb-2 display-4">Contact</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-md-6 mb-5">
                            <form action="#" method="post" className="bg-white">

                                <div className="p-5 p-lg-5 border">
                                    <div className="form-group row">
                                        <div className="col-md-6">
                                            <label htmlFor="c_fname" className="text-black">First Name <span
                                                className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="c_fname" name="c_fname"/>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="c_lname" className="text-black">Last Name <span
                                                className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="c_lname" name="c_lname"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <label htmlFor="c_email" className="text-black">Email <span
                                                className="text-danger">*</span></label>
                                            <input type="email" className="form-control" id="c_email" name="c_email"
                                                   placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <label htmlFor="c_subject" className="text-black">Subject </label>
                                            <input type="text" className="form-control" id="c_subject"
                                                   name="c_subject"/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <label htmlFor="c_message" className="text-black">Message </label>
                                            <textarea name="c_message" id="c_message" cols="30" rows="7"
                                                      className="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-lg-12">
                                            <input type="submit" className="btn btn-primary btn-lg"
                                                   value="Send Message"/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-5 pl-md-5">
                            <div className="p-4 border mb-3 bg-white">
                                <p className="mb-0">Address</p>
                                <p className="mb-4">203 Fake St. Mountain View, San Francisco, California, USA</p>

                                <p className="mb-0">Phone</p>
                                <p className="mb-4"><a href="#">+1 232 3235 324</a></p>

                                <p className="mb-0">Email Address</p>
                                <p className="mb-4"><a href="#"><span>info@colorlib.com</span></a>
                                </p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="site-blocks-cover overlay inner-page-cover"
                 style={{backgroundImage:"url(/src/assets/images/hero_bg_1.jpg)"}}
                  data-aos="fade"
                 data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center">

                        <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <h2>Subscribe</h2>
                            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit nihil saepe
                                libero sit odio obcaecati veniam.</p>
                            <form action="#" method="post" className="site-block-subscribe">
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
            </div>

        </div>
    );
};

export default Contact;