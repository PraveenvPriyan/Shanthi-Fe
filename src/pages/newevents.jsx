import {serverCall} from "../settings/commonfunc";
import React, { useEffect, useState } from 'react';

const Newevents = () => {

    const [events, setEvents] = useState([])

     useEffect(() => {
        getsetupDetails()
    }, [])

     function getsetupDetails() {
        serverCall('Events/GetEventData', {}).then((result)=>{
            setEvents(result.data.data);                        
        })  
    }

     const monthYear = (datestr)=>{ 
      const date = new Date(datestr);
      let nextval  = date.toLocaleDateString("en-US", {
         day: "numeric", // 22
         month: "short", // Jun         
        });

        return nextval ? nextval : "";
    };

     

  return (  
  <div className="row">
                    {/* <!--Start Blog One Single--> */}
                    {events ? events.map((event, index) => (
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                            <div className="blog-one__single">
                                <div className="blog-one__single-img">
                                    <div className="inner">
                                    {/* <img src="assets/images/news/blog-v1-img1.jpg" alt="#"/> */}
                                    <img src={"data:image/" + event.c_media_extention + ";base64, " + event.b_media_data}  alt="#"/> 
                                    </div>
                                    <ul className="overlay-text">
                                    
                                        <li className="style2">
                                            <p>{monthYear(event.d_eventdate)}</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="blog-one__single-content">
                                    <div className="white-bg"></div>
                            
                                    {/* <ul className="meta-box">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-location1"></span>
                                            </div>
                                            <div className="text">
                                                <p><a href="#">Venue</a></p>
                                            </div>
                                        </li>
    
                                    </ul> */}

                                    <h2><a href="#">{event.c_eventtitle}</a></h2>

                                    <div className="blog-one__single-content-bottom">
                                        <div className="btn-box">
                                            {/* <a href="#"> More <span
                                                    className="icon-right-arrow21"></span></a> */}
                                        </div>  
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    )):<></>}
                   
                    {/* <!--End Blog One Single--> */}

                    {/* <!--Start Blog One Single--> */}
                    {/* <div className="col-xl-4 col-lg-4 wow fadeInDown" data-wow-delay=".3s">
                         <div className="blog-one__single">
                            <div className="blog-one__single-img">
                                <div className="inner">
                                    <img src="assets/images/news/blog-v1-img1.jpg" alt="#"/>
                                </div>
                                <ul className="overlay-text">
                                   
                                    <li className="style2">
                                        <p>22 Feb</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="blog-one__single-content">
                                <div className="white-bg"></div>
                         
                                <ul className="meta-box">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-location1"></span>
                                        </div>
                                        <div className="text">
                                            <p><a href="#">Venue</a></p>
                                        </div>
                                    </li>
 
                                </ul>

                                <h2><a href="#">News Heading</a></h2>

                                <div className="blog-one__single-content-bottom">
                                    <div className="btn-box">
                                        <a href="events-single.html"> More <span
                                                className="icon-right-arrow21"></span></a>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <!--End Blog One Single--> */}

                    {/* <!--Start Blog One Single--> */}
                    {/* <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                       <div className="blog-one__single">
                            <div className="blog-one__single-img">
                                <div className="inner">
                                  <img src="assets/images/news/blog-v1-img1.jpg" alt="#"/>
                                </div>
                                <ul className="overlay-text">
                                   
                                    <li className="style2">
                                        <p>22 Feb</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="blog-one__single-content">
                                <div className="white-bg"></div>
                         
                                <ul className="meta-box">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-location1"></span>
                                        </div>
                                        <div className="text">
                                            <p><a href="#">Venue</a></p>
                                        </div>
                                    </li>
 
                                </ul>

                                <h2><a href="#">News Heading</a></h2>

                                <div className="blog-one__single-content-bottom">
                                    <div className="btn-box">
                                        <a href="events-single.html"> More <span
                                                className="icon-right-arrow21"></span></a>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <!--End Blog One Single--> */}
                    
</div>
                )
};

export default Newevents;