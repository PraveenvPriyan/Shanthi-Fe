import Footer from "./footer";
import Header from "./header";

const Contactus = () => {
   
    return(<>
<div className="page-wrapper">   
 <Header/>

        <section className="page-header">
            <div className="page-header__bg" style={{"backgroundImage": "url(assets/images/contact/contact-header.jpg)"}}>
            </div>

            <div className="container">
                <div className="page-header__inner text-center">
                    <h2>Contact Us</h2>
                    <ul className="thm-breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li><span>-</span></li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="contact-page-google-map">
            <iframe
                        title="Shanthi Bhavan Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.872123543963!2d76.2245026!3d10.431720900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f11fdd6ed929%3A0xdf132612c3d15333!2sShanthi%20Bhavan%20Palliative%20Hospital%20Thrissur!5e0!3m2!1sen!2sin!4v1747818726193!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="contact-page-google-map__one"
                        ></iframe>
        </section>

        <section className="contact-one">
            <div className="contact-one__pattern"
                style={{"backgroundImage": "url(assets/images/pattern/contact-v1-pattern.jpg)"}}>
            </div>
            <div className="container">
                <div className="row">
                    {/* <!--Start Contact One Single--> */}
                    <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="contact-one__single text-center">
                            <div className="shape1"></div>
                            <div className="contact-one__single-icon">
                                <span className="icon-location"></span>
                            </div>

                            <div className="contact-one__single-content">
                                <h2>Our Address</h2>
                                <p>SHANTHIBHAVAN PALLIATIVE INTERNATIONAL LTD,<br/>

Office 3261, 
Ground Floor, 470 St Kilda Rd., 
MELBOURNE VIC 3004, Australia
</p>
                            </div>
                        </div>
                    </div>
                    {/* <!--End Contact One Single--> */}

                    {/* <!--Start Contact One Single--> */}
                    <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="contact-one__single text-center">
                            <div className="shape1"></div>
                            <div className="contact-one__single-icon">
                                <span className="icon-support"></span>
                            </div>

                            <div className="contact-one__single-content">
                                <h2>Our Phone</h2>
                                {/* <p><a href="tel:04876611600">
04876611600

</a></p> */}
                                <p><a href="tel:061391112473">391112473</a></p>
                            </div>
                        </div>
                    </div>
                    {/* <!--End Contact One Single--> */}

                    {/* <!--Start Contact One Single--> */}
                    <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.3s">
                        <div className="contact-one__single text-center">
                            <div className="shape1"></div>
                            <div className="contact-one__single-icon">
                                <span className="icon-send-message"></span>
                            </div>

                            <div className="contact-one__single-content">
                                <h2>Write email</h2>
                                <p><a href="mailto:operationssbau@palliativeinternational.com">operationssbau@palliativeinternational.com
</a></p>
                                {/* <p><a href="mailto:info@shanthibhavan.com">info@shanthibhavan.com
</a></p> */}
                            </div>
                        </div>
                    </div>
                    {/* <!--End Contact One Single--> */}
                </div>
            </div>
        </section>

        <section className="contact-two">
            <div className="container">
                <div className="contact-two__inner">
                    <div className="contact-two__bg"
                        style={{"backgroundImage": "url(assets/images/pattern/contact-v2-pattern.jpg)"}}></div>
                    <div className="title-box text-center">
                        <h2>Don’t Hesitate to Send Your <br/> Message To Us</h2>
                    </div>
                    <div className="row">
                        {/* <!--Start Contact Two From--> */}
                        <div className="col-xl-6 col-lg-7">
                            <div className="contact-two__from">
                                <div className="title">
                                    <h2>Feel free to write us anytime</h2>
                                </div>
                                <form id="#" className="default-form2 contact-form-validated comment-one__form"
                                    action="#" novalidate="novalidate">

                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="input-box">
                                                <input type="text" name="name" value="" placeholder="Name"
                                                    required=""/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="input-box">
                                                <input type="email" name="email" value="" placeholder="Email"
                                                    required=""/>
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="input-box">
                                                <input type="text" placeholder="Mobile Number" name="phone"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="input-box">
                                                <textarea name="message"
                                                    placeholder="Write about your message"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="contact-two__from-btn">
                                                <button className="thm-btn" type="submit"
                                                    data-loading-text="Please wait...">
                                                    <span className="txt">Send Message</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </form>

                            </div>
                        </div>
                        {/* <!--End Contact Two From--> */}

                        {/* <!--Start Contact Two Content--> */}
                        <div className="col-xl-6 col-lg-5">
                            <div className="contact-two__content">
                                <div className="contact-two__content-single text-center wow animated fadeInUp"
                                    data-wow-delay="0.1s">
                                    <div className="icon-box">
                                        <span className="icon-map-pin"></span>
                                    </div>

                                    <div className="text-box">
                                        <p>Near by: Arattupuzha</p>
                                        <h4>Thrissur</h4>
                                    </div>
                                </div>

                                <div className="contact-two__content-single mb0 text-center wow animated fadeInUp"
                                    data-wow-delay="0.1s">
                                    <div className="icon-box">
                                        <span className="icon-support"></span>
                                    </div>

                                    <div className="text-box">
                                        <p>Get in touch </p>
                                        <h4><a href="tel:061391112473">391112473</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--End Contact Two Content--> */}

                    </div>
                </div>
            </div>
        </section>

 <Footer/>
</div>
    </>
    );
}

export default Contactus;