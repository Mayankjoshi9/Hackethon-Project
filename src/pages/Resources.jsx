import transition from '../transition.jsx';
import "./Resources.css";
import resourceImage from "../assets/mentorshipImage.png"; // Use a more descriptive name for images

const Resources = () => {
  return (
    <div className="resources-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Explore Our Startup Resources</h1>
          <p>
            Find guides, articles, and tools to help you navigate your startup journey. 
            Whether you’re looking for funding, legal advice, or growth strategies, we’ve got you covered.
          </p>
        </div>
        <div className="hero-image">
          <img src={resourceImage} alt="Startup Resources" />
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="search-section">
        <input type="text" className="search-bar" placeholder="Search resources..." aria-label="Search resources" />
        <button className="search-button">Search</button>
      </section>

      {/* Resource Categories Section */}
      <section className="resource-categories">
        <h2 className="text-white text-3xl pb-[10px]">Resource Categories</h2>
        <div className="categories-list">
          {[
            {
              title: "E-books",
              description: "Download free e-books on various startup topics like growth hacking, marketing, and more.",
              imgAlt: "E-books",
            },
            {
              title: "Videos",
              description: "Watch informative video tutorials, interviews with successful founders, and recorded webinars.",
              imgAlt: "Videos",
            },
            {
              title: "Articles",
              description: "Read expert advice and insights on how to overcome common startup challenges.",
              imgAlt: "Articles",
            },
            {
              title: "Tools & Templates",
              description: "Access free templates, checklists, and tools to streamline your startup operations.",
              imgAlt: "Tools & Templates",
            },
          ].map((category, index) => (
            <div key={index} className="category-card">
              <img src={resourceImage} alt={category.imgAlt} />
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <button className="cta-button">Explore</button>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="featured-resources">
        <h2 className="text-white text-3xl pb-5">Featured Resources</h2>
        <div className="resource-cards">
          {[
            {
              title: "Ultimate Guide to Startup Funding",
              description: "A comprehensive guide to help startups raise capital through various funding options.",
              buttonText: "Download",
              imgAlt: "Funding E-book",
            },
            {
              title: "Growth Hacking Techniques for Startups",
              description: "Watch this video tutorial on how to implement effective growth hacking strategies to scale your business.",
              buttonText: "Watch",
              imgAlt: "Growth Hacking Video",
            },
            {
              title: "Legal Essentials for Startups",
              description: "Learn about the legal considerations that every startup should address, from contracts to intellectual property.",
              buttonText: "Read",
              imgAlt: "Legal Guide Article",
            },
          ].map((resource, index) => (
            <div key={index} className="resource-card">
              <img src={resourceImage} alt={resource.imgAlt} />
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <button className="cta-button">{resource.buttonText}</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Call-to-Action Section */}
      <section className="footer-cta">
        <h2>Stay Updated with the Latest Resources</h2>
        <p>Sign up for our newsletter and get access to new resources delivered directly to your inbox.</p>
        <button className="cta-button">Subscribe Now</button>
      </section>
    </div>
  );
};

export default transition(Resources);
