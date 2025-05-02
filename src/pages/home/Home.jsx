import React, {useEffect} from "react";
import AOS from "aos"
import TestimonialsCarousel from "../../components/coursel/TestimonialsCarousel.jsx";


const Home = () => {

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

            <div className="site-blocks-cover overlay" style={{backgroundImage:"url('src/assets/images/hero_bg_1.jpg')",backgroundPosition:"center center"}}
                 data-aos="fade" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center">

                        <div className="col-md-8" data-aos="fade-up" data-aos-delay="400">
                            <h2 className="text-white font-weight-light mb-2 display-4">Episode 09: How To Create Web
                                Page Using Bootstrap 4</h2>
                            <div className="text-white mb-4"><span className="text-white-opacity-05"><small>By Mike Smith | 16 September 2017 | 1:30:20</small></span>
                            </div>
                            <p><a href="#" className="btn btn-primary btn-sm py-3 px-4 small">Read The
                                Transcript</a></p>

                            <div className="player">
                                <audio id="player2" preload="none" controls  style={{maxWidth: "100%"}}>
                                    <source src="http://www.largesound.com/ashborytour/sound/AshboryBYU.mp3"
                                            type="audio/mp3"/>
                                </audio>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="site-section bg-light">
                <div className="container">

                    <div className="row mb-5" data-aos="fade-up">
                        <div className="col-md-12 text-center">
                            <h2 className="font-weight-bold text-black">Recent Podcasts</h2>
                        </div>
                    </div>

                    <div className="d-block d-md-flex podcast-entry bg-white mb-5" data-aos="fade-up">
                        <div className="image" style={{backgroundImage: "url('/src/assets/images/img_1.jpg')"}}></div>
                        <div className="text">

                            <h3 className="font-weight-light"><a href="#">Episode 08: How To Create Web
                                Page Using Bootstrap 4</a></h3>
                            <div className="text-white mb-3"><span className="text-black-opacity-05"><small>By Mike Smith <span
                                className="sep">/</span> 16 September 2017 <span
                                className="sep">/</span> 1:30:20</small></span></div>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                                repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi
                                tenetur, nesciunt.</p>

                            <div className="player">
                                <audio id="player2" preload="none" controls style={{maxWidth: "100%"}}>
                                    <source src="http://www.largesound.com/ashborytour/sound/AshboryBYU.mp3"
                                            type="audio/mp3"/>
                                </audio>
                            </div>

                        </div>
                    </div>


                    <div className="d-block d-md-flex podcast-entry bg-white mb-5" data-aos="fade-up">
                        <div className="image" style={{backgroundImage: "url('/src/assets/images/img_2.jpg')"}}></div>
                        <div className="text">

                            <h3 className="font-weight-light"><a href="#">Episode 07: How To Create Web
                                Page Using Bootstrap 4</a></h3>
                            <div className="text-white mb-3"><span className="text-black-opacity-05"><small>By Mike Smith <span
                                className="sep">/</span> 16 September 2017 <span
                                className="sep">/</span> 1:30:20</small></span></div>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                                repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi
                                tenetur, nesciunt.</p>


                            <div className="player">
                                <audio id="player2" preload="none" controls style={{maxWidth: "100%"}}>
                                    <source src="http://www.largesound.com/ashborytour/sound/AshboryBYU.mp3"
                                            type="audio/mp3"/>
                                </audio>
                            </div>

                        </div>
                    </div>


                    <div className="d-block d-md-flex podcast-entry bg-white mb-5" data-aos="fade-up">
                        <div className="image" style={{backgroundImage: "url('/src/assets/images/img_3.jpg')"}}></div>
                        <div className="text">

                            <h3 className="font-weight-light"><a href="#">Episode 06: How To Create Web
                                Page Using Bootstrap 4</a></h3>
                            <div className="text-white mb-3"><span className="text-black-opacity-05"><small>By Mike Smith <span
                                className="sep">/</span> 16 September 2017 <span
                                className="sep">/</span> 1:30:20</small></span></div>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                                repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi
                                tenetur, nesciunt.</p>

                            <div className="player">
                                <audio id="player2" preload="none" controls style={{maxWidth: "100%"}}>
                                    <source src="http://www.largesound.com/ashborytour/sound/AshboryBYU.mp3"
                                            type="audio/mp3"/>
                                </audio>
                            </div>
                        </div>
                    </div>


                    <div className="d-block d-md-flex podcast-entry bg-white mb-5" data-aos="fade-up">
                        <div className="image" style={{backgroundImage: "url('/src/assets/images/img_4.jpg')"}}></div>
                        <div className="text">

                            <h3 className="font-weight-light"><a href="#">Episode 05: How To Create Web
                                Page Using Bootstrap 4</a></h3>
                            <div className="text-white mb-3"><span className="text-black-opacity-05"><small>By Mike Smith <span
                                className="sep">/</span> 16 September 2017 <span
                                className="sep">/</span> 1:30:20</small></span></div>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                                repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi
                                tenetur, nesciunt.</p>

                            <div className="player">
                                <audio id="player2" preload="none" controls style={{maxWidth: "100%"}}>
                                    <source src="http://www.largesound.com/ashborytour/sound/AshboryBYU.mp3"
                                            type="audio/mp3"/>
                                </audio>
                            </div>
                        </div>
                    </div>


                    <div className="d-block d-md-flex podcast-entry bg-white mb-5" data-aos="fade-up">
                        <div className="image" style={{backgroundImage: "url('/src/assets/images/img_5.jpg')"}}></div>
                        <div className="text">

                            <h3 className="font-weight-light"><a href="#">Episode 04: How To Create Web
                                Page Using Bootstrap 4</a></h3>
                            <div className="text-white mb-3"><span className="text-black-opacity-05"><small>By Mike Smith <span
                                className="sep">/</span> 16 September 2017 <span
                                className="sep">/</span> 1:30:20</small></span></div>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                                repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi
                                tenetur, nesciunt.</p>

                            <div className="player">
                                <audio id="player2" preload="none" controls style={{maxWidth: "100%"}}>
                                    <source src="http://www.largesound.com/ashborytour/sound/AshboryBYU.mp3"
                                            type="audio/mp3"/>
                                </audio>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="site-block-27">
                                <ul>
                                    <li><a href="#">&lt;</a></li>
                                    <li className="active"><span>1</span></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li><a href="#">&gt;</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container" data-aos="fade-up">
                    <div className="row mb-5">
                        <div className="col-md-12 text-center">
                            <h2 className="font-weight-bold text-black">Behind The Mic</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                            <div className="team-member">

                                <img src="/src/assets/images/person_1.jpg" alt="Image" className="img-fluid"/>

                                <div className="text">

                                    <h2 className="mb-2 font-weight-light h4">Megan Smith</h2>
                                    <span className="d-block mb-2 text-white-opacity-05">Creative Director</span>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam
                                        reprehenderit nemo.</p>
                                    <p>
                                        <a href="#" className="text-white p-2"><span
                                            className="icon-facebook"></span></a>
                                        <a href="#" className="text-white p-2"><span
                                            className="icon-twitter"></span></a>
                                        <a href="#" className="text-white p-2"><span
                                            className="icon-linkedin"></span></a>
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                            <div className="team-member">

                                <img src="/src/assets/images/person_2.jpg" alt="Image" className="img-fluid"/>

                                <div className="text">

                                    <h2 className="mb-2 font-weight-light h4">Brooke Cagle</h2>
                                    <span className="d-block mb-2 text-white-opacity-05">Creative Director</span>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam
                                        reprehenderit nemo.</p>
                                    <p>
                                        <a href="#" className="text-white p-2"><span
                                            className="icon-facebook"></span></a>
                                        <a href="#" className="text-white p-2"><span
                                            className="icon-twitter"></span></a>
                                        <a href="#" className="text-white p-2"><span
                                            className="icon-linkedin"></span></a>
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                            <div className="team-member">

                                <img src="/src/assets/images/person_3.jpg" alt="Image" className="img-fluid"/>

                                <div className="text">

                                    <h2 className="mb-2 font-weight-light h4">Philip Martin</h2>
                                    <span className="d-block mb-2 text-white-opacity-05">Creative Director</span>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam
                                        reprehenderit nemo.</p>
                                    <p>
                                        <a href="#" className="text-white p-2"><span
                                            className="icon-facebook"></span></a>
                                        <a href="#" className="text-white p-2"><span
                                            className="icon-twitter"></span></a>
                                        <a href="#" className="text-white p-2"><span
                                            className="icon-linkedin"></span></a>
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                            <div className="team-member">

                                <img src="/src/assets/images/person_4.jpg" alt="Image" className="img-fluid"/>

                                <div className="text">

                                    <h2 className="mb-2 font-weight-light h4">Steven Ericson</h2>
                                    <span className="d-block mb-2 text-white-opacity-05">Creative Director</span>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam
                                        reprehenderit nemo.</p>
                                    <p>
                                        <a href="#" className="text-white p-2"><span
                                            className="icon-facebook"></span></a>
                                        <a href="#" className="text-white p-2"><span
                                            className="icon-twitter"></span></a>
                                        <a href="#" className="text-white p-2"><span
                                            className="icon-linkedin"></span></a>
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                            <div className="team-member">

                                <img src="/src/assets/images/person_5.jpg" alt="Image" className="img-fluid"/>

                                <div className="text">

                                    <h2 className="mb-2 font-weight-light h4">Nathan Dumlao</h2>
                                    <span className="d-block mb-2 text-white-opacity-05">Creative Director</span>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam
                                        reprehenderit nemo.</p>
                                    <p>
                                        <a href="#" className="text-white p-2"><span
                                            className="icon-facebook"></span></a>
                                        <a href="#" className="text-white p-2"><span
                                            className="icon-twitter"></span></a>
                                        <a href="#" className="text-white p-2"><span
                                            className="icon-linkedin"></span></a>
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                            <div className="team-member">

                                <img src="/src/assets/images/person_6.jpg" alt="Image" className="img-fluid"/>

                                <div className="text">

                                    <h2 className="mb-2 font-weight-light h4">Brooke Cagle</h2>
                                    <span className="d-block mb-2 text-white-opacity-05">Creative Director</span>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam
                                        reprehenderit nemo.</p>
                                    <p>
                                        <a href="#" className="text-white p-2"><span
                                            className="icon-facebook"></span></a>
                                        <a href="#" className="text-white p-2"><span
                                            className="icon-twitter"></span></a>
                                        <a href="#" className="text-white p-2"><span
                                            className="icon-linkedin"></span></a>
                                    </p>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className="site-section bg-light block-13">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-12 text-center">
                            <h2 className="font-weight-bold text-black">Featured Guests</h2>
                        </div>
                    </div>
                    <TestimonialsCarousel />
                </div>
            </div>


            <div className="site-blocks-cover overlay inner-page-cover"
                 style={{backgroundImage: "url('src/assets/images/hero_bg_1.jpg')" }} data-aos="fade"
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

export default Home;