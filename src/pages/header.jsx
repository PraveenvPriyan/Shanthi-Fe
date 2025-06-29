
const Header = () => {

        return(
            <>
             {/* <!--Start Main Header One--> */}
        <header className="main-header main-header-one style2">
            {/* <!--Start Main Header One Top--> */}
            <div className="main-header-one__top">
                <div className="auto-container">
                    <div className="main-header-one__top-inner">

                        <div className="main-header-one__top-left">
                            <div className="logo-box-one">
                                <a href="/">
                                    <img src="assets/images/resources/logo-1.png" alt="Shanthibhavan Logo" title="" />
                                </a>
                            </div>
 
                        </div>

                        <div className="main-header-one__top-middle">
                            <div className="main-header__contact-info">
                                <ul>
                                    <li>
                                        <div className="inner">
                                            <div className="icon-box">
                                                <span className="icon-globe-hemisphere"></span>
                                            </div>
                                            <div className="text-box">
                                                <p>Address</p>
                                                <h4>Office 3261, Ground Floor, 470 St Kilda Rd., MELBOURNE VIC 3004, Australia.</h4>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="inner">
                                            <div className="icon-box">
                                                <span className="icon-chat-circle"></span>
                                            </div>
                                            <div className="text-box">
                                                <p>Email</p>
                                                <h4><a href="mailto:yourmail@email.com">operationssbau@palliativeinternational.com</a></h4>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="inner">
                                            <div className="icon-box">
                                                <span className="icon-phone-call"></span>
                                            </div>
                                            <div className="text-box">
                                                <p>Contact and support</p>
                                                <h4><a href="tel:061391112473">+61 391112473</a></h4>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                      
                    </div>
                </div>
            </div>
            {/* <!--End Main Header One Top--> */}


            {/* <!--Start Main Header One Bottom--> */}
            <div className="main-header-one__bottom">
                <div className="main-header-one__bottom-inner">
                    <nav className="main-menu main-menu-one">
                        <div className="main-menu__wrapper clearfix">
                            <div className="auto-container">
                                <div className="main-menu__wrapper-inner">

                                    <div className="main-header-one__bottom-left">
                                      
                                        <div className="main-menu-box">
                                            <a href="#" className="mobile-nav__toggler">
                                                <i className="fa fa-bars"></i>
                                            </a>
                                            <ul className="main-menu__list">
                                                <li className="current">
                                                    <a href="/">Home</a>
                                               
                                                </li>

                                                <li className="dropdown">
                                                    <a href="/aboutus">About</a>


                                                 <ul>
                                                        <li><a href="/aboutus">About</a></li>
                                                        <li><a href="/aboutus">Board Members</a></li>
                                                         
                                                    </ul>


                                                </li>


                                                <li className="dropdown">
                                                    <a href="/donation">Donation</a>

                                                    <ul>
                                                        <li><a href="/donation">Donation</a></li>
                                                        <li><a href="/donation">Vision</a></li>
                                                         
                                                    </ul>

                                                </li>

  




                                                <li>
                                                    <a href="/events">Events</a>
                                                     
                                                </li>

                                                <li>
                                                    <a href="/services">Services</a>
                                                    
                                                </li>
                                                  {/* <li>
                                                    <a href="/gallery">Gallery</a>
                                                    
                                                </li> */}

                                         

                                                <li>
                                                    <a href="/contactus">Contact</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                  
                                    <div className="main-header-one__bottom-right">
                                    

                                        <div className="btn-box2">
                                            <a href="/donation">Become a Volunteer</a>
                                        </div>

                                      

                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!--End Main Header One Bottom--> */}
        </header>
        {/* <!--End Main Header One--> */}

         <div className="stricky-header stricky-header--one style2 stricked-menu main-menu">
            <div className="sticky-header__content"></div>
            {/* <!-- /.sticky-header__content --> */}
        </div>
        </>
        );
}

export default Header;