import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ id, title, excerpt, date, image }) => {
  return (
    <div className="card">
      <Link to={`/blog/${id}`} className="card-link">
        {image && (
          <div className="card-image">
            <img src={image} alt={title} className='w-full h-auto object-contain' />
          </div>
        )}
        <h2>{title}</h2>
      </Link>
     
      <div className="card-date">
        <small>{date}</small>
        <Link to={`/blog/${id}`} className="read-more-link">
          Read more →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;