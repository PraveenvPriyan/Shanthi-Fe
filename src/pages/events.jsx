import Newevents from './newevents';

const Events = () => {

   

    return(
        <>
         {/* <!--Start shanthi news --> */}
        <section className="blog-one" id="news">
            <div className="container">
                <div className="sec-title text-center">
                    
                    <h2 className="sec-title__title">Latest News & Events</h2>
                </div>
                <Newevents/>
            </div>
        </section>
        {/* <!--shanthi news end--> */}
        </>
    );
}

export default Events;