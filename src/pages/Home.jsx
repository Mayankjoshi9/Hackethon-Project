import { Link } from 'react-router-dom';
import homeVideo from '../assets/home-video.mp4';

import Footer from '../components/Footer';
import Preloader from './Preloader.jsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Import your images
import mentorshipImage from '../assets/mentorshipImage.png';
// Import other images as necessary
import transition from '../transition.jsx'//imported transition ans applied to all the pages 

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        // arrows: true,
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

    return (
        <>
            <Preloader />
            <div className="min-h-screen flex flex-col justify-between bg-gray-900 text-gray-100">
                

                {/* Hero Section */}
                <section className="relative w-full h-screen overflow-hidden">
                    <video
                        className="absolute inset-0 object-cover w-full h-full opacity-30"
                        autoPlay
                        loop
                        muted
                    >
                        <source src={homeVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="relative z-10 container mx-auto text-center pt-[230px] pb-24">
                        <h1 className="text-4xl md:text-6xl font-bold text-white">
                            Empowering Innovators at GEU
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-gray-300">
                            Join TBI to harness the potential of innovation and create a better tomorrow.
                        </p>
                        <Link to="/about" className="mt-8 inline-block bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded hover:bg-yellow-400 transition">
                            Learn More
                        </Link>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-16 bg-gray-800">
                    <div className="container mx-auto px-[100px]">
                        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-10">Our Services</h2>
                        <Slider {...settings}>
                            <div className="bg-gray-700 p-5 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
                                <img src={mentorshipImage} alt="Mentorship" className="w-full h-40 object-cover rounded-lg" />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-yellow-400 mb-4">Mentorship</h3>
                                    <p className="text-gray-300">Get guidance from experienced mentors to bring your idea to life.</p>
                                </div>
                            </div>
                            <div className="bg-gray-700 p-5 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
                                <img src={mentorshipImage} alt="Funding Support" className="w-full h-40 object-cover rounded-lg" />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-yellow-400 mb-4">Funding Support</h3>
                                    <p className="text-gray-300">We help innovators find the financial support they need.</p>
                                </div>
                            </div>
                            <div className="bg-gray-700 p-5 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
                                <img src={mentorshipImage} alt="Co-Working Space" className="w-full h-40 object-cover rounded-lg" />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-yellow-400 mb-4">Co-Working Space</h3>
                                    <p className="text-gray-300">Work alongside other startups and entrepreneurs in a collaborative space.</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </section>

                {/* Events Section */}
                <section className="py-16 bg-gray-900 text-white">
                    <div className="container mx-auto px-[100px]">
                        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-10">Upcoming Events</h2>
                        <Slider {...settings}>
                            <div className="bg-gray-700 p-5 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
                                <img src={mentorshipImage} alt="Startup Weekend" className="w-full h-40 object-cover rounded-lg" />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold mb-4">Startup Weekend</h3>
                                    <p>Join us for a weekend of intense brainstorming and pitching sessions.</p>
                                    <Link to="/events" className="text-yellow-400 mt-4 inline-block">Learn More &rarr;</Link>
                                </div>
                            </div>
                            <div className="bg-gray-700 p-5 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
                                <img src={mentorshipImage} alt="Innovation Fair" className="w-full h-40 object-cover rounded-lg" />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold mb-4">Innovation Fair</h3>
                                    <p>Showcase your innovative products and ideas in front of potential investors.</p>
                                    <Link to="/events" className="text-yellow-400 mt-4 inline-block">Learn More &rarr;</Link>
                                </div>
                            </div>
                            <div className="bg-gray-700 p-5 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
                                <img src={mentorshipImage} alt="Hackathon 2024" className="w-full h-40 object-cover rounded-lg" />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold mb-4">Hackathon 2024</h3>
                                    <p>Compete with teams from around the country to solve real-world problems.</p>
                                    <Link to="/events" className="text-yellow-400 mt-4 inline-block">Learn More &rarr;</Link>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </section>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
};

export default Home;
