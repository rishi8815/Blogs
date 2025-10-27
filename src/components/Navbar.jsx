import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
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

  const handleSearch = (e) => {
    e.preventDefault();
    // For now, we'll just log the search query
    console.log('Search query:', searchQuery);
    // In a real application, you would redirect to search results page
    // or filter the blog posts based on the query
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    // Reset any state and reload the home page
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
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img 
            src="/getnaukrilogo.png" 
            alt="GetNaukri Logo" 
            style={{ height: '32px', width: '32px' }}
          />
          <span>GetNaukri</span>
        </Link>
        
        {/* Show Home button and Search bar only on desktop */}
        {!isMobile && (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '2rem',
            marginLeft: 'auto'
          }}>
            <a 
              href="/" 
              onClick={handleHomeClick} 
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
            
            <form onSubmit={handleSearch} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem'
            }}>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Search blogs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    padding: '0.5rem 0.5rem 0.5rem 2rem',
                    borderRadius: '20px',
                    border: '1px solid #ccc',
                    width: '200px',
                    fontSize: '0.9rem'
                  }}
                />
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  fill="currentColor" 
                  viewBox="0 0 16 16"
                  style={{
                    position: 'absolute',
                    left: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#666'
                  }}
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </div>
              <button type="submit" style={{ 
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}>
                Search
              </button>
            </form>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;