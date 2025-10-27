import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ id, title, excerpt, date, image }) => {
  return (
    <div className="card">
      {image && (
        <div className="card-image">
          <img src={image} alt={title} className='bg-center' />
        </div>
      )}
      <h2>{title}</h2>
     
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