// src/components/Footer.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
          {/* About / Motto */}
          <div className="md:w-1/3">
            <h3 className="text-2xl font-bold mb-4">TBI @ GEU</h3>
            <p className="text-gray-300">
              Harnessing the innovative potential of students and alumni to create a better tomorrow.
            </p>
          </div>

          {/* Contact Information */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300">Email:</p>
            <ul>
              <li>office.tbi@geu.ac.in</li>
              <li>managertbi@geu.ac.in</li>
            </ul>
            <p className="text-gray-300 mt-2">Contact No.: +91 98765 43210</p>
            <p className="text-gray-300 mt-2">
              TBI-GEU office, 3rd Floor CSIT block, 566/6, Bell Road, Society Area, Clement Town,
              Dehradun, Bharu Wala Grant, Uttarakhand 248002
            </p>
          </div>

          {/* Social Media Links */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center border-t border-gray-600 pt-4">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} TBI @ GEU. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
