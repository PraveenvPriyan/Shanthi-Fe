import Footer from "./footer";
import Header from "./header";

const Abouts = () => {

   

    return(<>


   

   

     <div className="page-wrapper">

   
 <Header/>

        {/* <!--Start Page Header--> */}
        <section className="page-header">
            <div className="page-header__bg" style={{"backgroundImage": "url(assets/images/about/about-banner.jpg)"}}>
            </div>

            <div className="container">
                <div className="page-header__inner text-center">
                    <h2>About us</h2>
                    <ul className="thm-breadcrumb">
                        <li><a href="#">Home</a></li>
                        <li><span>-</span></li>
                        <li>About us</li>
                    </ul>
                </div>
            </div>
        </section>
        {/* <!--End Page Header--> */}
 
        {/* <!--Start About Two --> */}
        <section className="about-two about-two--about">
        
            <div className="container">
                <div className="row">
                    {/* <!--Start About Two Img--> */}
                    <div className="col-xl-5">
                        <div className="about-two__img clearfix">
                            <div className="about-two__img-inner clearfix">
                                <img src="assets/images/about/about-v1-img2.jpg" alt="#"/>
                             
                            </div>
                        </div>
                    </div>
                    {/* <!--End About Two Img--> */}

                    {/* <!--Start About Two Content--> */}
                    <div className="col-xl-7">
                        <div className="about-two__content">
                            
                            <div className="sec-title">
                             
                                <h2 className="sec-title__title">About Us</h2>
                            </div>

                            <div className="about-two__content-text1">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et porta diam. Integer dictum libero non lorem pellentesque tincidunt. Pellentesque scelerisque, orci ac gravida fermentum, odio magna pulvinar tellus, eget hendrerit lacus libero vitae dolor. Nullam blandit, velit ac laoreet condimentum, nisl odio semper massa, id rhoncus metus mauris id sapien. Cras pellentesque a lorem at aliquam. 
                                    Aliquam tristique tortor a nisi consectetur, a auctor ligula vulputate. Donec auctor dui non accumsan elementum. Fusce eu euismod ante.</p>
                            </div>

             

                            <div className="about-two__content-text4">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="about-two__content-text4-single">
                                            <ul>
                                                <li>
                                                    <p><span className="icon-check2"></span> Dialysis Service</p>
                                                </li>

                                                <li>
                                                   <p><span className="icon-check2"></span> Dialysis Service</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="about-two__content-text4-single">
                                            <ul>
                                                <li>
                                                   <p><span className="icon-check2"></span> Dialysis Service</p>
                                                </li>

                                                <li>
                                                <p><span className="icon-check2"></span> Dialysis Service</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <!--End About Two Content--> */}
                </div>
                <div className="about-one__bottom" style={{"marginBottom": "50px"}}>
                    <div className="about-one__bottom-inner">
                        <div className="about-one__bottom-content">
                            <div className="icon-box">
                                <span className="icon-donation-2"></span>
                            </div>

                            <div className="text-box">
                                <h2>Are you ready to volunteer?</h2>
                                <p>Join our team today and let us bring a thousand smiles together</p>
                            </div>
                        </div>

                        <div className="about-one__bottom-btn">
                            <a className="thm-btn" href="#">
                                <span className="txt">Join Us</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--End About Two --> */}

      
  <section className="team-one team-one--volunteers bm" id="members">
            <div className="team-one__bg">
            </div>
            <div className="container">

  <div className="title-box text-center">
                    <h4>Board Members</h4>
                </div>



                <div className="row">
                    {/* <!--Start Team One Single--> */}
                    <div className="col-xl-4 col-lg-4  wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="team-one__single">
                            <div className="team-one__single-img">
                                <div className="team-one__single-img-bg">
                                </div>
                                <div className="inner">
                                    <img src="assets/images/members/member1.jpg" alt="#"/>
                                </div>
                            </div>

                            <div className="team-one__single-content text-center">
                                <h2><a href="#">Name </a></h2>
                                <p>Designation</p>
                            </div>
                        </div>
                    </div>
                    {/* <!--End Team One Single--> */}

                    {/* <!--Start Team One Single--> */}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                           <div className="team-one__single">
                            <div className="team-one__single-img">
                                <div className="team-one__single-img-bg">
                                </div>
                                <div className="inner">
                                    <img src="assets/images/members/member2.jpg" alt="#"/>
                                </div>
                            </div>

                            <div className="team-one__single-content text-center">
                                <h2><a href="#">Name </a></h2>
                                <p>Designation</p>
                            </div>
                        </div>
                    </div>
                    {/* <!--End Team One Single--> */}

                    {/* <!--Start Team One Single--> */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                              <div className="team-one__single">
                            <div className="team-one__single-img">
                                <div className="team-one__single-img-bg">
                                </div>
                                <div className="inner">
                                    <img src="assets/images/members/member3.jpg" alt="#"/>
                                </div>
                            </div>

                            <div className="team-one__single-content text-center">
                                <h2><a href="#">Name </a></h2>
                                <p>Designation</p>
                            </div>
                        </div>
                    </div>
                    {/* <!--End Team One Single--> */}

                    {/* <!--Start Team One Single--> */}
                    <div className="col-xl-4 col-lg-4  wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="team-one__single">
                            <div className="team-one__single-img">
                                <div className="team-one__single-img-bg">
                                </div>
                                <div className="inner">
                                    <img src="assets/images/members/member1.jpg" alt="#"/>
                                </div>
                            </div>

                            <div className="team-one__single-content text-center">
                                <h2><a href="#">Name </a></h2>
                                <p>Designation</p>
                            </div>
                        </div>
                    </div>
                    {/* <!--End Team One Single--> */}

                    {/* <!--Start Team One Single--> */}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                           <div className="team-one__single">
                            <div className="team-one__single-img">
                                <div className="team-one__single-img-bg">
                                </div>
                                <div className="inner">
                                    <img src="assets/images/members/member2.jpg" alt="#"/>
                                </div>
                            </div>

                            <div className="team-one__single-content text-center">
                                <h2><a href="#">Name </a></h2>
                                <p>Designation</p>
                            </div>
                        </div>
                    </div>
                    {/* <!--End Team One Single--> */}

                    {/* <!--Start Team One Single--> */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                              <div className="team-one__single">
                            <div className="team-one__single-img">
                                <div className="team-one__single-img-bg">
                                </div>
                                <div className="inner">
                                    <img src="assets/images/members/member3.jpg" alt="#"/>
                                </div>
                            </div>

                            <div className="team-one__single-content text-center">
                                <h2><a href="#">Name </a></h2>
                                <p>Designation</p>
                            </div>
                        </div>
                    </div>
                    {/* <!--End Team One Single--> */}
                </div>
            </div>

        </section>
  
 
        {/* <!--Start Testimonial  --> */}
        <section className="testimonial-three ab">
            <div className="testimonial-three__bg"
                style={{"backgroundImage": "url(assets/images/pattern/events-v2-pattern.jpg)"}}></div>
            <div className="container">
                <div className="sec-title">
                   
                    <h2 className="sec-title__title">What our Clients say
                    </h2>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="testimonial-three__inner">

                            <div className="owl-carousel owl-theme thm-owl__carousel testimonial-three__carousel"
                                data-owl-options='{
                                "loop": true,
                                "autoplay": true,
                                "margin": 30,
                                "nav": true,
                                "dots": false,
                                "smartSpeed": 500,
                                "autoplayTimeout": 10000,
                                "navText": ["<span className=\"icon-right-arrow1\"></span>","<span className=\"icon-right-arrow11\"></span>"],
                                "responsive": {
                                        "0": {
                                            "items": 1
                                        },
                                        "768": {
                                            "items": 1
                                        },
                                        "992": {
                                            "items": 2
                                        },
                                        "1200": {
                                            "items": 2
                                        }
                                    }
                                }'>

                                {/* <!--Start Testimonial Three Single--> */}
                                <div className="testimonial-three__single">
                                    <div className="testimonial-three__single-inner">
                                        <div className="testimonial-three__single-top">
                                            <div className="author-box">
                                                <div className="img-box">
                                                    <img src="assets/images/testimonial/testimonial-v1-img1.jpg"
                                                        alt="#"/>
                                                </div>

                                                <div className="text-box">
                                               <h2>Name</h2>
                                        <p>Designation</p>
                                                </div>
                                            </div>
 
                                        </div>

                                        <div className="testimonial-three__single-middle">
                                            <h2>Heading</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur review
                                                sed do eiusmod tempor incididunt ut labore et on dolore magna aliqua. Ut
                                                enim ad minim veniam</p>
                                        </div>

                                      
                                    </div>
                                </div>
                                {/* <!--End Testimonial Three Single--> */}

                                {/* <!--Start Testimonial Three Single--> */}
                                 <div className="testimonial-three__single">
                                    <div className="testimonial-three__single-inner">
                                        <div className="testimonial-three__single-top">
                                            <div className="author-box">
                                                <div className="img-box">
                                                   <img src="assets/images/testimonial/testimonial-v1-img1.jpg"
                                                        alt="#"/>
                                                </div>

                                                <div className="text-box">
                                               <h2>Name</h2>
                                        <p>Designation</p>
                                                </div>
                                            </div>
 
                                        </div>

                                        <div className="testimonial-three__single-middle">
                                            <h2>Heading</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur review
                                                sed do eiusmod tempor incididunt ut labore et on dolore magna aliqua. Ut
                                                enim ad minim veniam</p>
                                        </div>

                                      
                                    </div>
                                </div>
                                {/* <!--End Testimonial Three Single--> */}

                                {/* <!--Start Testimonial Three Single--> */}
                                 <div className="testimonial-three__single">
                                    <div className="testimonial-three__single-inner">
                                        <div className="testimonial-three__single-top">
                                            <div className="author-box">
                                                <div className="img-box">
                                                    <img src="assets/images/testimonial/testimonial-v1-img1.jpg"
                                                        alt="#"/>
                                                </div>

                                                <div className="text-box">
                                               <h2>Name</h2>
                                        <p>Designation</p>
                                                </div>
                                            </div>
 
                                        </div>

                                        <div className="testimonial-three__single-middle">
                                            <h2>Heading</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur review
                                                sed do eiusmod tempor incididunt ut labore et on dolore magna aliqua. Ut
                                                enim ad minim veniam</p>
                                        </div>

                                      
                                    </div>
                                </div>
                                {/* <!--End Testimonial Three Single--> */}

                                {/* <!--Start Testimonial Three Single--> */}
                                 <div className="testimonial-three__single">
                                    <div className="testimonial-three__single-inner">
                                        <div className="testimonial-three__single-top">
                                            <div className="author-box">
                                                <div className="img-box">
                                                     <img src="assets/images/testimonial/testimonial-v1-img1.jpg"
                                                        alt="#"/>
                                                </div>

                                                <div className="text-box">
                                               <h2>Name</h2>
                                        <p>Designation</p>
                                                </div>
                                            </div>
 
                                        </div>

                                        <div className="testimonial-three__single-middle">
                                            <h2>Heading</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur review
                                                sed do eiusmod tempor incididunt ut labore et on dolore magna aliqua. Ut
                                                enim ad minim veniam</p>
                                        </div>

                                      
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        
       
 <Footer/>
    </div>
    </>);
}

export default Abouts;