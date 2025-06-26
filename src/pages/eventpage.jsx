import Footer from "./footer";
import Header from "./header";
import Newevents from './newevents';

const Eventpage = () => {   

    return(<>
     <div className="page-wrapper">
        <Header></Header>
       <section className="page-header">
            <div className="page-header__bg" style={{"backgroundImage": "url(assets/images/members/member-header.jpg)"}}>
            </div>

            <div className="container">
                <div className="page-header__inner text-center">
                    <h2>News & Events</h2>
                    <ul className="thm-breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li><span>-</span></li>
                        <li>News & Events</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="blog-one" id="news">
            <div className="container">
                
                <div className="row">
                    <Newevents></Newevents>
                </div>
            </div>
        </section>

       
          <Footer></Footer>
     </div>

</>);
}

export default Eventpage;
