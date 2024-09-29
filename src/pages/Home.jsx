// src/pages/Home.js


import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import homeVideo from '../assets/home-video.mp4'; // Import the video
import NavBar from '../components/NavBar';

const Home = () => {
    return (
        <div className="min-h-screenflex flex-col justify-between">
            {/* Header */}
            <NavBar/>

            {/* Hero Section */}
            <section className="relative w-full h-screen overflow-hidden">
                <video
                    className="absolute inset-0 object-cover w-full h-full opacity-50"
                    autoPlay
                    loop
                    muted
                >
                    <source src={homeVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="relative z-10 container mx-auto text-center py-24">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">Empowering Innovators at GEU</h1>
                    <p className="mt-4 text-lg md:text-xl text-white">
                        Join TBI to harness the potential of innovation and create a better tomorrow.
                    </p>
                    <Link to="/about" className="mt-8 inline-block bg-yellow-400 text-blue-900 font-semibold py-3 px-6 rounded hover:bg-yellow-500 transition">
                        Learn More
                    </Link>
                </div>
            </section>


            {/* Services Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="bg-white p-6 shadow-md rounded-md text-center">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">Mentorship</h3>
                            <p className="text-gray-600">Get guidance from experienced mentors to bring your idea to life.</p>
                        </div>
                        <div className="bg-white p-6 shadow-md rounded-md text-center">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">Funding Support</h3>
                            <p className="text-gray-600">We help innovators find the financial support they need.</p>
                        </div>
                        <div className="bg-white p-6 shadow-md rounded-md text-center">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">Co-Working Space</h3>
                            <p className="text-gray-600">Work alongside other startups and entrepreneurs in a collaborative space.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section className="py-16 bg-blue-900 text-white">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10">Upcoming Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="bg-white p-6 rounded-md text-blue-900 shadow-md">
                            <h3 className="text-xl font-bold mb-4">Startup Weekend</h3>
                            <p>Join us for a weekend of intense brainstorming and pitching sessions.</p>
                            <Link to="/events" className="text-yellow-400 mt-4 inline-block">Learn More &rarr;</Link>
                        </div>
                        <div className="bg-white p-6 rounded-md text-blue-900 shadow-md">
                            <h3 className="text-xl font-bold mb-4">Innovation Fair</h3>
                            <p>Showcase your innovative products and ideas in front of potential investors.</p>
                            <Link to="/events" className="text-yellow-400 mt-4 inline-block">Learn More &rarr;</Link>
                        </div>
                        <div className="bg-white p-6 rounded-md text-blue-900 shadow-md">
                            <h3 className="text-xl font-bold mb-4">Hackathon 2024</h3>
                            <p>Compete with teams from around the country to solve real-world problems.</p>
                            <Link to="/events" className="text-yellow-400 mt-4 inline-block">Learn More &rarr;</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
