const Slider = () => {

        return(
            <>
            <section className="main-slider main-slider-one style3">
            <div className="main-slider-one__inner">
                <div className="owl-carousel owl-theme thm-owl__carousel testimonial-one__carousel nav-style1 dot-style1"
                    data-owl-options='{
                            "loop": true,
                            "autoplay": true,
                            "margin": 0,
                            "nav": true,
                            "dots": true,
                            "animateOut": "slideOutDown",
                            "animateIn": "fadeIn",
                            "smartSpeed": 500,
                            "autoplayTimeout": 10000,
                            "navText": ["<span className=\"icon-arrow-right1\"></span>","<span className=\"icon-arrow-right\"></span>"],
                            "responsive": {
                                    "0": {
                                        "items": 1
                                    },
                                    "768": {
                                        "items": 1
                                    },
                                    "992": {
                                        "items": 1
                                    },
                                    "1200": {
                                        "items": 1
                                    }
                                }
                            }'>

                    {/* <!--Start Main Slider Three--> */}
                    <div className="main-slider-one__single">
                        <div className="image-layer" style={{"backgroundImage":"url(assets/images/slides/slider-v3-img1.jpg)"}}>
                        </div>
                        <div className="container">
                            <div className="main-slider-one__content">
                             
                                <div className="title">
    <h2>
        Welcome to <br/>Palliative <br/> International       
    </h2>
                                </div>

                                <div className="btn-box">
                                    <a className="thm-btn" href="#">
                                        <span className="txt">Donate Now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--End Main Slider Three--> */}

                    {/* <!--Start Main Slider Three--> */}
                    <div className="main-slider-one__single">
                        <div className="image-layer" style={{"backgroundImage":"url(assets/images/slides/slider-v3-img2.jpg)"}} >
                        </div>
                        <div className="container">
                            <div className="main-slider-one__content">
                              
                                <div className="title">
                                    <h2>A Global Pioneer <br />
                                            in Long Term Palliative <br />
                                            Hospital Care
                                    </h2>
                                </div>

                                <div className="btn-box">
                                    <a className="thm-btn" href="#">
                                        <span className="txt">Donate Now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--End Main Slider Three--> */}

                    {/* <!--Start Main Slider Three--> */}
                    <div className="main-slider-one__single">
                        <div className="image-layer" style={{"backgroundImage":"url(assets/images/slides/slider-v3-img3.jpg)"}}>
                        </div>
                        <div className="container">
                            <div className="main-slider-one__content">
                                
                                <div className="title">
                                    <h2>Making a <br />
                                        Difference Starts <br />
                                        Here</h2>
                                </div>

                                <div className="btn-box">
                                    <a className="thm-btn" href="/donation">
                                        <span className="txt">Donate Now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--End Main Slider Three--> */}                   
                </div>
            </div>
        </section>
        {/* <!--End Main Slider Three--> */}
        </>
        );
    }

    export default Slider;