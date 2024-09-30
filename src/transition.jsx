import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const transition = (OgComponent) => {
    return function WrappedComponent() {
        const [showComponent, setShowComponent] = useState(true);
        
        // Function to handle the exit animation complete
        const handleExitComplete = () => {
            setShowComponent(false); // Hide the component once the exit is complete
        };

        useEffect(() => {
            setShowComponent(true); // Show component when it mounts
        }, []);
        
        return (
            <>
                {showComponent && (
                    <motion.div 
                        className='slide-in'
                        initial={{ y: "-100%" }} // Start from above
                        animate={{ y: "0%" }} // Move to the original position
                        exit={{ y: "-100%" }} // Exit upwards
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // Reduced duration for slide-in
                        onExitComplete={handleExitComplete} // Handle exit complete
                    >
                        <OgComponent />
                    </motion.div>
                )}
                <motion.div 
                    className='slide-out'
                    initial={{ y: "0%" }} // Start at the original position
                    animate={{ y: "100%" }} // Move downwards
                    exit={{ y: "0%" }} // Return to the original position before exiting
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // Reduced duration for slide-out
                    onAnimationComplete={handleExitComplete} // Handle animation complete
                />
            </>
        );
    };
};

export default transition;
