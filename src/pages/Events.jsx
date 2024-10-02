
import transition from '../transition.jsx';
import "./Events.css"
import image1 from "../assets/event poster-20241001T043027Z-001/event poster/1.png"
import Slider from 'react-slick';
import eventimage1 from "../assets/event images-20241001T043025Z-001/event images/1.jpg"
import eventimage2 from "../assets/event images-20241001T043025Z-001/event images/2.jpg"
import eventimage3 from "../assets/event images-20241001T043025Z-001/event images/3.jpg"
import eventimage4 from "../assets/event images-20241001T043025Z-001/event images/4.jpg"



const Events = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const settings1 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
 
};

  return (
    <div className="events-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Upcoming Events at Our Incubation Center</h1>
          <p>Join us for workshops, networking, and hands-on sessions designed to ignite innovation and foster growth in your startup journey.</p>
          <button className="cta-button">Register Now</button>
        </div>
        <div className="flex flex-row">
          <img src={eventimage1} className="w-[800px] rounded-lg" alt="Incubation Center Events" />
          {/* <img src={eventimage2} className="w-[800px] rounded-lg" alt="Incubation Center Events" />
          <img src={eventimage3} className="w-[800px] rounded-lg" alt="Incubation Center Events" />
          <img src={eventimage4} className="w-[800px] rounded-lg" alt="Incubation Center Events" /> */}
        </div>
      </section>

      {/* Event List Section */}
      <section className="event-list">
        <h2 className="text-white text-5xl text-center pb-10 ">Featured Events</h2>
       
        <Slider {...settings} className="event-cards">
          <div className="event-card">
            <img src={image1} alt="Workshop on Business Strategy" />
            <div className="event-info">
              <h3 className="pt-5 text-xl font-bold">Business Strategy Workshop</h3>
              <p>Date: October 10, 2024</p>
              <p>Time: 10:00 AM - 1:00 PM</p>
              <p>Location: Main Hall</p>
              <button className="cta-button">Register</button>
            </div>
          </div>
          <div className="event-card">
            <img src={image1} alt="Pitching Session" />
            <div className="event-info">
              <h3 className="pt-5 text-xl font-bold">Pitching Session with Investors</h3>
              <p>Date: October 15, 2024</p>
              <p>Time: 2:00 PM - 5:00 PM</p>
              <p>Location: Conference Room A</p>
              <button className="cta-button">Register</button>
            </div>
          </div>
          <div className="event-card">
            <img src={image1} alt="Networking Mixer" />
            <div className="event-info">
              <h3 className="pt-5 text-xl font-bold">Startup Networking Mixer</h3>
              <p className="font-medium text-lg">Date: October 20, 2024</p>
              <p>Time: 6:00 PM - 9:00 PM</p>
              <p>Location: Rooftop Lounge</p>
              <button className="cta-button">Register</button>
            </div>
          </div>
        </Slider>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="font-bold text-lg ">What Our Attendees Say</h2>
        <div className="testimonials-cards">
          <div className="testimonial">
            <p className="font-medium text-lg">&rdquo; The networking mixer was fantastic! I met potential co-founders and partners.&rdquo;</p>
            <h4>- Alex, Founder of TechPulse</h4>
          </div>
          <div className="testimonial">
            <p>&rdquo;The workshops provided actionable insights to improve our business strategy.&rdquo;</p>
            <h4>- Maria, CEO of GreenWave</h4>
          </div>
        </div>
      </section>

      {/* Footer Call-to-Action Section */}
      <section className="footer-cta">
        <h2>Don&rsquo;t Miss Our Next Event</h2>
        <p>Stay informed on the latest happenings at our incubation center.</p>
        <button className="cta-button">Subscribe to Newsletter</button>
      </section>
    </div>
  );
};

export default transition(Events);
