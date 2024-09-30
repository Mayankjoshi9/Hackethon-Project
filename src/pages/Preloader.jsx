import  { useEffect } from 'react';
import './Preloader.css';
import { preLoaderAnim } from '../Animation/index.js';

const Preloader = () => {
    useEffect(() => {
        preLoaderAnim();
    }, []);

    return (
        <div id="loader" className="preloader" role="status" aria-live="polite">
            <div className="texts-container text-gray-orange " >
                <span >CREATION</span>
                <span>INNOVATION</span>
                <span>VIBE</span>
            </div>
        </div>
    );
};

export default Preloader;
