import React, { useState, useEffect } from 'react';
import { Building2, User } from 'lucide-react';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.location.href = '/';
  };

  return (
    <nav
      style={{
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: '#f9f9ff',
        borderBottom: '1px solid #eee',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '48px',
      }}
    >
      {/* Logo fixed to far left */}
      <div
        onClick={handleLogoClick}
        style={{
          position: 'absolute',
          left: '20px',
          display: 'flex',
          alignItems: 'center',
          fontSize: '2.2rem',
          fontWeight: '700',
          color: '#0f172a',
          cursor: 'pointer',
        }}
      >
        getnaukri
      </div>

      {/* Center navigation links (shifted slightly left) */}
      {!isMobile && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            fontWeight: '500',
            transform: 'translateX(-95px)', // 👈 slightly shifted left
          }}
        >
          <a
            href="https://www.getnaukri.co/"
            style={{
              color: '#374151',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#2563eb')}
            onMouseLeave={(e) => (e.target.style.color = '#374151')}
          >
            Home
          </a>
          <a
            href="https://www.getnaukri.co/find-jobs"
            style={{
              color: '#374151',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#2563eb')}
            onMouseLeave={(e) => (e.target.style.color = '#374151')}
          >
            Find Jobs
          </a>
          <a
            href="https://www.getnaukri.co/about-us"
            style={{
              color: '#374151',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#2563eb')}
            onMouseLeave={(e) => (e.target.style.color = '#374151')}
          >
            About Us
          </a>
          <a
            href="https://blogs.getnaukri.co"
            style={{
              color: '#374151',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#2563eb')}
            onMouseLeave={(e) => (e.target.style.color = '#374151')}
          >
            Blogs
          </a>
        </div>
      )}

      {/* Right side login buttons */}
      {!isMobile && (
        <div
          style={{
            position: 'absolute',
            right: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <a
            href="https://www.getnaukri.co/login/employer"
            style={{
              display: 'flex',
              alignItems: 'center',
              color: '#374151',
              textDecoration: 'none',
              fontWeight: '500',
              gap: '0.4rem',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#2563eb')}
            onMouseLeave={(e) => (e.target.style.color = '#374151')}
          >
            <Building2 size={16} />
            Employer Login
          </a>

          <a
            href="https://www.getnaukri.co/login/jobseeker"
            style={{
              background: 'linear-gradient(to right, #2563eb, #9333ea)',
              color: 'white',
              textDecoration: 'none',
              fontWeight: '600',
              padding: '0.5rem 2.5rem', // widened button
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.background =
                'linear-gradient(to right, #1d4ed8, #7e22ce)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background =
                'linear-gradient(to right, #2563eb, #9333ea)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <User size={16} />
            Candidate Login
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
