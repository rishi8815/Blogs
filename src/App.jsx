import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './app/page.jsx';
import BlogPage from './app/blog/page.jsx';
import BlogDetailPage from './app/blog/[id]/page.jsx';
import SplashLoader from './components/SplashLoader';

function App() {
  return (
    <Router>
      <div>
        <SplashLoader />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;