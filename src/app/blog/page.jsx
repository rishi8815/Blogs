import React from 'react';
import BlogCard from '../../components/BlogCard';
import blogData from '../../data/blogs.json';

const BlogPage = () => {
  return (
    <div>
      <header>
        <h1>The Blog Book<br/>By GetNaukri</h1>
      </header>

      <section className="container">
        <div className="blog-archive">
          <h2>All Posts</h2>
          <div className="blog-grid">
            {blogData.map(blog => (
              <BlogCard 
                key={blog.id}
                id={blog.id}
                title={blog.title}
                excerpt={blog.excerpt}
                date={blog.date}
                image={blog.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;