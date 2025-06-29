import Events from './events';
// import Header from './header';
import Slider from './slider';
import Footer from './footer'; 
const Home = () => {

   

    return(
        <>                        
       {/* <Header/> */}
       <Slider/>       
        {/* <!--Start Feature One --> */}
        <section className="feature-one feature-one--four">
            <div className="auto-container">
                <div className="row justify-content-center">
                    

                    {/* <!--Start Feature One Single--> */}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="feature-one__single text-center shanthi-q-c1">
                          
                            <div className="shanthi-home-quick">
                              <img src="assets/images/help-01.svg" alt="#"/>
                                
                            </div>

                            <div className="feature-one__single-content">
                                <h2><a href="/aboutus"> Who We <br/> Serve</a></h2>
<p style={{"textAlign":"left","minHeight":"256px"}}>Elderly abandoned by families<br/>
Bedridden and terminally ill patients<br/>
Patients with no one to care for them<br/>
Families unable to afford long-term medical support<br/>
</p>
                            </div>
                        </div>
                    </div>
                    {/* <!--End Feature One Single--> */}

                    {/* <!--Start Feature One Single--> */}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="feature-one__single text-center shanthi-q-c2">
                          
                            <div className="shanthi-home-quick">
                              <img src="assets/images/help-02.svg" alt="#"/>
                                
                            </div>

                            <div className="feature-one__single-content">
                                <h2><a href="/aboutus">What We Provide –<br/> Completely Free</a></h2>
<p style={{"textAlign":"left","minHeight":"256px"}}>Hospital admission and accommodation<br/>
Doctor and nursing care<br/>
Physiotherapy<br/>
Dialysis and fluid tapping<br/>
Catheter and bed sore management</p>
                            </div>
                        </div>
                    </div>
                    {/* <!--End Feature One Single--> */}

                    {/* <!--Start Feature One Single--> */}
                      <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="feature-one__single text-center shanthi-q-c1">
                          
                            <div className="shanthi-home-quick">
                              <img src="assets/images/help-03.svg" alt="#"/>
                                
                            </div>

                            <div className="feature-one__single-content">
                                <h2><a href="/aboutus">Hands of <br/>Grace Program</a></h2>
<p style={{"textAlign":"justify","minHeight":"256px"}}>For patients without family support or financial ability, Hands of Grace ensures they receive everything from care supplies to personal bystander assistance without worry.</p>
                            </div>
                        </div>
                    </div>
                    {/* <!--End Feature One Single--> */}
                </div>
            </div>
        </section>
        {/* <!--End Feature One --> */}

     {/* <!--Start About One --> */}
        <section className="about-one">
            
            <div className="container">
                <div className="row">
                    {/* <!--Start About One Content--> */}
                    <div className="col-xl-7" style={{"alignItems":"center", "display":"flex"}}>
                        <div className="about-one__content">
                            <div className="sec-title">
                             
                                <h2 className="sec-title__title">The First Palliative 
Hospital in India
</h2>
                            </div>
                            <div className="about-one__content-text">
                                <p>Shanthibhavan Palliative Hospital is  the first hospital in India for the palliative bedridden patients without bills and cash counters. Everything is free for the palliative patients including palliative care, all kinds of mental and medical support and food. The Hospital  runs  on the motto,‘by the people, for the people’. This hospital extends its support to many homes where bedridden patients need care and love. </p>
                            </div>
                            <div className="about-one__content-bottom">
                                <div className="row">
                                    {/* <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="about-one__content-bottom-left">
                                            <div className="single-box">
                                          <ul>
                                            <li><img src="assets/images/check-mark.svg" alt=""/> Dialysis Service</li>
                                            <li><img src="assets/images/check-mark.svg" alt=""/> Dialysis Service</li>
                                            <li><img src="assets/images/check-mark.svg" alt=""/> Dialysis Service</li>
                                          </ul>
                                            </div>

                                      

                                         
                                        </div>
                                    </div>


                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="about-one__content-bottom-right">
                                              <div className="single-box">
                                          <ul>
                                            <li><img src="assets/images/check-mark.svg" alt=""/> Dialysis Service</li>
                                            <li><img src="assets/images/check-mark.svg" alt=""/> Dialysis Service</li>
                                            <li><img src="assets/images/check-mark.svg" alt=""/> Dialysis Service</li>
                                          </ul>
                                            </div>
                                        </div>
                                    </div> */}


<div className="col-xl-12 col-lg-12 col-md-12">
<div className="shanthi-about-home-btm">
<p>Palliative care aims to improve the quality of life of people with life-limiting or disabling diseases, by treating pain and by providing emotional, mental and social support. Everyone can be a part of it.</p>
<div className="btn-box">
                                    {/* <a className="thm-btn" href="/aboutus">
                                        <span className="txt">Read more</span>
                                    </a> */}
                                </div>

</div>
</div>


                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--End About One Content--> */}

                    {/* <!--Start About One Img--> */}
                    <div className="col-xl-5">
                        <div className="about-one__img">
                            <div className="about-one__img-inner">
                               
                                <img src="assets/images/about/about-v1-img2.jpg" alt="#"/>
                            </div>
                        </div>
                    </div>
                    {/* <!--End About One Img--> */}
                </div>

        
            </div>
        </section>
        {/* <!--End About One --> */}

 <section>
        <div className="container-fluid nopad">
           <div className="row">
            <div className="col-md-3 nopad">
   <div className="single-img">
    <img src="assets/images/m1.jpg" alt="Avatar" className="image"/>
    <div className="img-overlay">
      <div className="text-hover">DONATIONS
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu convallis lectus, feugiat faucibus orci. </p>
 
      </div>
    </div>
  </div>
            </div>

                     <div className="col-md-3 nopad">
   <div className="single-img">
    <img src="assets/images/m2.jpg" alt="Avatar" className="image"/>
    <div className="img-overlay">
      <div className="text-hover">FELLOWSHIP
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu convallis lectus, feugiat faucibus orci. </p>
 
      </div>
    </div>
  </div>
            </div>


                     <div className="col-md-3 nopad">
   <div className="single-img">
    <img src="assets/images/m3.jpg" alt="Avatar" className="image"/>
    <div className="img-overlay">
      <div className="text-hover">CELEBRATE WITH US
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu convallis lectus, feugiat faucibus orci. </p>
 
      </div>
    </div>
  </div>
            </div>


                     <div className="col-md-3 nopad">
   <div className="single-img">
    <img src="assets/images/m4.jpg" alt="Avatar" className="image"/>
    <div className="img-overlay">
      <div className="text-hover">VOLUNTEERING
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu convallis lectus, feugiat faucibus orci. </p>
 
      </div>
    </div>
  </div>
            </div>


           </div> 
        </div>
      </section>  

      {/* <!--Start About One --> */}
        <section className="about-one" style={{"paddingBottom":"0px","paddingTop":"120px"}}>
            
            <div className="container">
                <div className="row">
                    {/* <!--Start About One Content--> */}
                    <div className="col-xl-7 " style={{"alignItems":"center", "display":"flex"}}>
                        <div className="about-one__content " >
                            <div className="sec-title">
                             
                                <h2 className="sec-title__title">Why We Exist
</h2>
                            </div>
                            <div className="about-one__content-text">
                                <p>Life-threatening illnesses do not discriminate. Be it children or the elderly, such conditions often render people physically, mentally, and emotionally broken. While some may pass quickly, many endure prolonged suffering. In India and beyond, structured inpatient palliative hospitals are rare, making dignified end-of-life care inaccessible for thousands.
Shanthibhavan bridges this gap. We serve as a sanctuary for those rejected by conventional hospitals and unsupported at home, offering hospital-level palliative care with no financial burden. </p>
                            </div>
                            
                        </div>
                    </div>
                    {/* <!--End About One Content--> */}

                    {/* <!--Start About One Img--> */}
                    <div className="col-xl-5">
                        <div className="about-one__img">
                            <div className="about-one__img-inner">
                               
                                <img src="assets/images/about/about-v1-img21.jpg" alt="#"/>
                            </div>
                        </div>
                    </div>
                    {/* <!--End About One Img--> */}
                </div>

        
            </div>
        </section>
        {/* <!--End About One --> */}

        {/* <!--Start Case One --> */}
        <section className="case-one style3">
            <div className="case-one__bg" style={{"backgroundImage": "url(assets/images/backgrounds/case-v1-bg.jpg);"}}></div>
            <div className="auto-container">
                <div className="sec-title text-center">
                   
                    <h2 className="sec-title__title">Our Services</h2>
                </div>
                <div className="row">
                    {/* <!--Start Case One Single--> */}
                    <div className="col-xl-3 col-lg-6 col-md-6  wow fadeInLeft" data-wow-delay="0ms"
                        data-wow-duration="1500ms">
                        <div className="case-one__single">
                            <div className="case-one__single-img">
                                <div className="inner">
                                    <img src="assets/images/services/case-v1-img1.jpg" alt="#"/>
                                </div>
                                
                            </div>

                            <div className="case-one__single-content">
                                <div className="inner">
                                  
                                    <h2><a href="/services">Short Term Care</a>
                                    </h2>
                                    {/* <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu convallis lectus, 
                                        feugiat faucibus orci. </p>
                                         <a href="/services" className="shanthi-vm-link"> View More &#8594;</a> */}
                                </div>
                              
                            </div>
                        </div>
                    </div>
                    {/* <!--End Case One Single--> */}

                    {/* <!--Start Case One Single--> */}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms"
                        data-wow-duration="1500ms">
                        <div className="case-one__single">
                            <div className="case-one__single-img">
                                <div className="inner">
                                    <img src="assets/images/services/case-v1-img2.jpg" alt="#"/>
                                </div>
                               
                            </div>

                            <div className="case-one__single-content">
                                <div className="inner">
                                 
                                    <h2><a href="/services">Long Term Care</a>
                                    </h2>
                                   {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu convallis lectus, 
                                        feugiat faucibus orci.  </p>
                                         <a href="/services" className="shanthi-vm-link"> View More &#8594;</a> */}
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    {/* <!--End Case One Single--> */}

                    {/* <!--Start Case One Single--> */}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms"
                        data-wow-duration="1500ms">
                        <div className="case-one__single">
                            <div className="case-one__single-img">
                                <div className="inner">
                                    <img src="assets/images/services/case-v1-img3.jpg" alt="#"/>
                                </div>
                               
                            </div>

                            <div className="case-one__single-content">
                                <div className="inner">
                                    
                                    <h2><a href="/services">Free Service</a>
                                    </h2>
                                   {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu convallis lectus, 
                                        feugiat faucibus orci.  </p>
                                         <a href="/services" className="shanthi-vm-link"> View More &#8594;</a> */}
                                </div>
                        
                            </div>
                        </div>
                    </div>
                    {/* <!--End Case One Single--> */}

                    {/* <!--Start Case One Single--> */}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms"
                        data-wow-duration="1500ms">
                        <div className="case-one__single">
                            <div className="case-one__single-img">
                                <div className="inner">
                                    <img src="assets/images/services/case-v1-img4.jpg" alt="#"/>
                                </div>
                                
                            </div>

                            <div className="case-one__single-content">
                                <div className="inner">
                                
                                    <h2><a href="/services">Free Caravan Camps</a>
                                    </h2>
                                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu convallis lectus, 
                                        feugiat faucibus orci.  </p>

                                        <a href="/services" className="shanthi-vm-link"> View More &#8594;</a> */}
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    {/* <!--End Case One Single--> */}
                </div>
            </div>
        </section>
        {/* <!--End Case One --> */}

        {/* <!--Start Gallery One --> */}
        <section className="gallery-one style3">
            <div className="gallery-one__top">
                <div className="gallery-one__top__bg"
                    style={{"backgroundImage": "url(assets/images/join-volunteer-bg.jpg)"}}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="shanthi-cust gallery-one__top-inner text-center">
                                <div className="text-box">
                                    <h2>Join the Mission (Donation)</h2>
                                        <p className="gallery-one__top-inner-txt" style={{"fontSize":"25px"}}>No one deserves to suffer in silence. No one should die without dignity.
Let’s build a world where care is a right, not a privilege.
Join hands with Palliative International, and be a part of a global movement of love, care, and compassion.</p>
                                </div>

                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--End Gallery One --> */}

        
        <section className="video-one video-one--two">
            
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="video-one__inner">
                            
                            <div className="video-one__bg"
                                style={{"backgroundImage": "url(assets/images/join-volunteer-home.jpg)"}}></div>

                                     <div className="btn-box">
                                    <a className="thm-btn" href="#">
                                        <span className="txt">Donate Now</span>
                                    </a>
                                </div>
                         
                        </div>
                    </div>
                </div>
            </div>
        </section>
         
<section className="spb" style={{"marginTop": "80px"}}>
 <div className="container-fluid">
    <div className="row">
<div className="col-md-6 col-xs-12 text-center">
<img className="spb-img" src="assets/images/spb.png"/>
</div>

<div className="col-md-6 col-xs-12">
 <div className="spb-box">
    <h2>Sponsor a <br/>
Medical Bed</h2>
    <p> Shanthibhavan Palliative Hospital is the first hospital in India for the 
        palliative bedridden patients without bills and cash counters. 
        Everything is free for the palliative patients including palliative care, 
        all kinds of mental and medical support and food. The Hospital runs on the 
        motto,‘by the people, for the people’. This hospital extends its support to 
        many homes where bedridden patients need care and love.</p>



{/* <div className="case-one__single-content">

    <div className="case-one__progress">
                                    <div className="case-one__progress-box">
                                        <div className="bar">
                                            <div className="bar-inner count-bar" data-percent="45%">
                                                <div className="count-text">45%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom-text">
                                        <div className="left-text">
                                            <p><span>Goal</span> <span className="spb-red">₹2400000 </span></p>
                                        </div>
                                        <div className="left-text">
                                            <p>0 days remaining</p>
                                        </div>
                                    </div>
                                </div>

<div className="spb-right">
                                <h2 className="spb-p"> 35% <span>Recieved</span></h2>
</div>

</div> */}


{/* <div className="btn-box">
                                    <a className="thm-btn" href="/donation">
                                        <span className="txt">Sponsor Now</span>
                                    </a>

                                     <a className="thm-btn" href="/donation">
                                        <span className="txt">Know more</span>
                                    </a>
                                </div> */}
 </div>
</div>
    </div>
 </div>       
</section>
     
        {/* <!--Start Testimonial Three --> */}
        <section className="testimonial-three">
            <div className="testimonial-three__bg"
                style={{"backgroundImage": "url(assets/images/pattern/events-v2-pattern.jpg)"}}></div>
            <div className="container">
                <div className="sec-title">
                    <div className="sec-title__tagline">
                        {/* <h6>Testimonial</h6> */}
                    </div>
                    <h2 className="sec-title__title">Testimonial
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
                                {/* <!--End Testimonial Three Single--> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--End Testimonial Three --> */}

       <Events/>
 
       <Footer/>
                 
 
               
        </>
    );

    
    };

export default Home;