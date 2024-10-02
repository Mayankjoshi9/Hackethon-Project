
import transition from '../transition.jsx';
import "./Events.css"
import image1 from "../assets/event poster-20241001T043027Z-001/event poster/1.png"

  const About = () => {
    return (
      <div className="events-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>About SIC</h1>
            <p>The Startup Incubation Centre (SIC) at GEHU Haldwani provides a nurturing environment to help young innovators transform ideas into successful businesses. We offer a range of services including mentorship, workspace, and funding assistance.

  </p>
            <button className="cta-button">Register Now</button>
          </div>
          <div className="hero-image">
            <img src="/images/events-hero.jpg" alt="Incubation Center Events" />
          </div>
        </section>
  
        {/* Event List Section */}
        <section className="event-list">
          <h2>Featured Events</h2>
          <div className="event-cards">
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
          </div>
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
  }

  export default transition(About);