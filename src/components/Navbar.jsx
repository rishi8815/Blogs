import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building2, User } from 'lucide-react';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Check on initial load
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup event listener
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    // Refresh the current page and navigate to home
    window.location.href = '/';
  };

  return (
    <nav style={{ 
      border: '1px solid #ccc',
      borderRadius: '4px',
      margin: '10px'
    }}>
      <div className="nav-container" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '0.5rem 1rem'
      }}>
        {/* Logo area on the left */}
        <div 
          className="logo" 
          onClick={handleLogoClick}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            fontSize: '1.8rem', 
            fontWeight: '700', 
            color: '#333', 
            textDecoration: 'none',
            cursor: 'pointer'
          }}
        >
          <img 
            src="/getnaukrilogo.png" 
            alt="GetNaukri Logo" 
            style={{ height: '34px', width: '34px' }}
          />
          <span>getnaukri</span>
        </div>
        
        {/* Show navigation links only on desktop */}
        {!isMobile && (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem'
          }}>
            <a 
              href="https://www.getnaukri.co/" 
              
              rel="noopener noreferrer"
              style={{ 
                color: '#333', 
                textDecoration: 'none', 
                fontWeight: '500',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.target.style.color = '#007bff'}
              onMouseLeave={(e) => e.target.style.color = '#333'}
            >
              Home
            </a>
            
            {/* Navigation links */}
            <a 
              href="https://www.getnaukri.co/find-jobs" 
              
              rel="noopener noreferrer"
              style={{ 
                color: '#333', 
                textDecoration: 'none', 
                fontWeight: '500',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.target.style.color = '#007bff'}
              onMouseLeave={(e) => e.target.style.color = '#333'}
            >
              Find Jobs
            </a>
            
            <a 
              href="https://www.getnaukri.co/about-us" 
              
              rel="noopener noreferrer"
              style={{ 
                color: '#333', 
                textDecoration: 'none', 
                fontWeight: '500',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.target.style.color = '#007bff'}
              onMouseLeave={(e) => e.target.style.color = '#333'}
            >
              About Us
            </a>
            
            <a 
              href="/" 
              
              rel="noopener noreferrer"
              style={{ 
                color: '#333', 
                textDecoration: 'none', 
                fontWeight: '500',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.target.style.color = '#007bff'}
              onMouseLeave={(e) => e.target.style.color = '#333'}
            >
              Blogs
            </a>
            
            {/* Employer Login link with Building2 icon */}
            <a 
              href="https://www.getnaukri.co/login/employer" 
              
              rel="noopener noreferrer"
              style={{ 
                color: '#333', 
                textDecoration: 'none', 
                fontWeight: '500',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={(e) => e.target.style.color = '#007bff'}
              onMouseLeave={(e) => e.target.style.color = '#333'}
            >
              <Building2 size={16} />
              Employer Login
            </a>
            
            {/* Candidate Login button with gradient styling */}
            <a 
              href="https://www.getnaukri.co/login/jobseeker" 
              
              rel="noopener noreferrer"
              style={{ 
                background: 'linear-gradient(to right, #2563eb, #9333ea)',
                color: 'white',
                textDecoration: 'none',
                fontWeight: '500',
                padding: '0.5rem 1.5rem',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(to right, #1d4ed8, #7e22ce)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(to right, #2563eb, #9333ea)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <User size={16} />
              Candidate Login
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;