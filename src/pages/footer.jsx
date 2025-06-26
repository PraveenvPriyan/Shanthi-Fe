const Footer = () => {

   

    return(
        <>
          <footer className="footer-one style2">
     
     {/* <!--Start Footer--> */}
     <div className="footer">
         <div className="container">

             

             <div className="footer-one__middel">
                 <div className="row">

                     {/* <!--Start Footer Widget Single--> */}
                     <div className="col-xl-3 col-lg-6 col-md-6  wow animated fadeInUp" data-wow-delay="0.1s">
                         <div className="footer-widget__single">
                             <div className="footer-widget__single-about">
                                 <div className="logo-box">
                                     <a href="/"><img src="assets/images/resources/logo-2.png"
                                             alt="#"/></a>
                                 </div>

                                 <div className="footer-widget__single-about-text">
                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu convallis lectus, feugiat faucibus orci. Nam hendrerit feugiat imperdiet. 
                                     </p>
                                 </div>

                                 <div className="footer-widget__single-about-btn">
                                     <a className="thm-btn" href="#">
                                         <span className="txt">Join Now</span>
                                     </a>
                                 </div>
                             </div>
                         </div>
                     </div>
                     {/* <!--End Footer Widget Single--> */}

                     {/* <!--Start Footer One Right Single--> */}
                     <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.2s">
                         <div className="footer-one__single footer-one__single-address">
                             <div className="title">
                                 <h3>Address</h3>
                             </div>

                             <ul className="footer-one__single-address-box">
                                 <li>
                                     <div className="title-box">
                                         <h3>Our Address</h3>
                                     </div>
                                     <div className="inner">
                                         <div className="icon-box">
                                             <span className="icon-location1"></span>
                                         </div>

                                         <div className="content-box">
                                             <p> Shanthibhavan Palliative Hospital, <br/>
                                                 Mountain of Mercy, <br/>
                                                 Pallissery, Arattupuzha.P.O, <br/>Thrissur - 680562</p>
                                         </div>
                                     </div>
                                 </li>

                                 <li>
                                     <div className="title-box">
                                         <h3>Call Us</h3>
                                     </div>
                                     <div className="inner">
                                         <div className="icon-box">
                                             <span className="icon-phone"></span>
                                         </div>

                                         <div className="content-box">
                                             <p><a href="tel:04876611600">04876611600</a></p>
                                             <p><a href="tel:9142653804">9142653804</a></p>
                                         </div>
                                     </div>
                                 </li>
                             </ul>
                         </div>
                     </div>
                     {/* <!--End Footer One Right Single--> */}

                     {/* <!--Start Footer One Right Single--> */}
                     <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
                         <div className="footer-one__single footer-one__single-explore">
                             <div className="title">
                                 <h3>Explore Link</h3>
                             </div>

                             <ul className="footer-one__single-explore-list">
                                 <li><a href="/aboutus">About Us</a></li>
                                 <li><a href="/donation">Donations</a></li>
                                 <li><a href="/services">Services</a></li>
                                 <li><a href="/events">Events</a></li>
                                 <li><a href="/contactus">Contact Us</a></li>
                                 <li><a href="/gallery">Gallery</a></li>
                                  
                                  
                             </ul>

                         </div>
                     </div>
                     {/* <!--End Footer One Right Single--> */}

                     {/* <!--Start Footer One Right Single--> */}
                                  <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
                         <div className="footer-one__single footer-one__single-explore">
                             <div className="title">
                                 <h3>Services</h3>
                             </div>

                             <ul className="footer-one__single-explore-list">
                                 <li><a href="/services">Long Term Care</a></li>
                                 <li><a href="/services">Short Term Care</a></li>
                                 <li><a href="/services">Free Services</a></li>
                                 <li><a href="/services">Free Caravan Camps</a></li>
                                 <li><a href="/services">Free Palliative Hospitals</a></li>
                                 <li><a href="/services">Sponsor a Medical Bed</a></li>
                                 <li><a href="/services">Philanthropic Support</a></li>
                                  
                             </ul>

                         </div>
                     </div>
                     {/* <!--End Footer One Right Single--> */}
                 </div>
             </div>
         </div>
     </div>
     {/* <!--End Footer--> */}

     <div className="footer-one__bottom">
         <div className="container">
             <div className="bottom-inner">

                 <div className="footer-one__bottom-left">
                     <div className="title-box">
                         <h4>Follow Social</h4>
                     </div>
                     <div className="social-links">
                         <ul>
                             <li><a href="#"><span className="icon-facebook-logo"></span></a></li>
                             <li><a href="#"><span className="icon-youtube"></span></a></li>
                             <li><a href="#"><span className="icon-instagram"></span></a></li>
                         </ul>
                     </div>
                 </div>

                 <div className="copyright">
                     <p>©2025 <a href="#">Shanthibhavan</a> All Rights Reserved</p>
                 </div>
             </div>
         </div>
     </div>

 </footer>
        </>
    );
}

export default Footer;