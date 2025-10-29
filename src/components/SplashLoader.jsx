import React, { useEffect, useState } from 'react';
import './SplashLoader.css';

const SplashLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Function to hide the loader
    const hideLoader = () => {
      setIsVisible(false);
      
      // Remove the loader element from DOM after animation completes
      setTimeout(() => {
        const loaderElement = document.querySelector('.splash-loader');
        if (loaderElement && loaderElement.parentNode) {
          loaderElement.parentNode.removeChild(loaderElement);
        }
      }, 500); // Match the CSS transition duration
    };

    // Hide loader after 2 seconds (simulating app initialization)
    const timer = setTimeout(hideLoader, 2000);

    // Also hide loader when the app is ready (in case it loads faster)
    window.addEventListener('appReady', hideLoader);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('appReady', hideLoader);
    };
  }, []);

  return (
    <div className={`splash-loader ${!isVisible ? 'hidden' : ''}`}>
      <div className="loader-content">
        {/* Logo in round shape */}
        <div className="logo-container">
          <img 
            src="/getnaukrilogo.png" 
            alt="GetNaukri Logo" 
            className="splash-logo"
          />
        </div>
        <div className="loader-text">GetNaukri</div>
        <div className="loader-subtext">Loading opportunities for you...</div>
        {/* Simplified spinner - placed below subtext */}
        <div className="spinner-container">
          <div className="spinner-ring"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashLoader;