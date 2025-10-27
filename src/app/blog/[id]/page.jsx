import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../../../data/blogs.json';

const BlogDetailPage = () => {
  const { id } = useParams();
  
  // Find the blog post by ID
  const blogPost = blogData.find(blog => blog.id === parseInt(id)) || {
    title: "Blog Post",
    date: "Unknown Date"
  };

  // Render content based on the structure of the blog post
  const renderBlogContent = (post) => {
    if (!post.content) return null;

    // Handle blog posts with content as an object (posts 1-3)
    if (typeof post.content === 'object' && !Array.isArray(post.content)) {
      return (
        <div className="blog-content">
          {post.content.introduction && (
            <p className="mb-4">{post.content.introduction}</p>
          )}
          
          {post.content.sections && post.content.sections.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl font-bold mb-2">{section.heading}</h2>
              {section.description && <p className="mb-2">{section.description}</p>}
              {section.mistake && <p className="mb-2"><strong>Mistake:</strong> {section.mistake}</p>}
              {section.fix && <p className="mb-2"><strong>Fix:</strong> {section.fix}</p>}
              {section.content && <p className="mb-2">{section.content}</p>}
              
              {/* Handle subsections */}
              {section.subsections && section.subsections.map((subsection, subIndex) => (
                <div key={subIndex} className="ml-4 mb-3">
                  <h3 className="font-bold mt-2">{subsection.subheading}</h3>
                  {subsection.details && <p className="mb-2">{subsection.details}</p>}
                  {subsection.points && (
                    <ul className="list-disc pl-5 mb-2">
                      {subsection.points.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  )}
                  {subsection.steps && (
                    <ol className="list-decimal pl-5 mb-2">
                      {subsection.steps.map((step, stepIndex) => (
                        <li key={stepIndex}>{step}</li>
                      ))}
                    </ol>
                  )}
                </div>
              ))}
              
              {/* Handle lists */}
              {section.points && (
                <ul className="list-disc pl-5 mb-2">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              )}
              {section.questions && (
                <ul className="list-disc pl-5 mb-2">
                  {section.questions.map((question, qIndex) => (
                    <li key={qIndex}>{question}</li>
                  ))}
                </ul>
              )}
              {section.steps && (
                <ol className="list-decimal pl-5 mb-2">
                  {section.steps.map((step, stepIndex) => (
                    <li key={stepIndex}>{step}</li>
                  ))}
                </ol>
              )}
            </div>
          ))}
          
          {post.content.conclusion && (
            <p className="mt-4"><strong>Conclusion:</strong> {post.content.conclusion}</p>
          )}
        </div>
      );
    }
    
    // Handle blog post with content as an array (post 4)
    if (Array.isArray(post.content)) {
      return (
        <div className="blog-content">
          {post.content.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl font-bold mb-2">{section.heading}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      );
    }
    
    return null;
  };

  // Render sections for posts that have sections directly (post 5)
  const renderSections = (sections) => {
    if (!sections) return null;
    
    return sections.map((section, index) => (
      <div key={index} className="mb-6">
        <h2 className="text-xl font-bold mb-2">{section.heading}</h2>
        {typeof section.content === 'string' ? (
          <p>{section.content}</p>
        ) : Array.isArray(section.content) ? (
          <ul className="list-disc pl-5">
            {section.content.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        ) : null}
        
        {/* Handle subsections with text content */}
        {section.content && typeof section.content === 'object' && !Array.isArray(section.content) && (
          <div className="ml-4">
            {section.content.subheading && <h3 className="font-bold">{section.content.subheading}</h3>}
            {section.content.text && <p className="whitespace-pre-line">{section.content.text}</p>}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">{blogPost.title}</h1>
        <p className="text-gray-600">{blogPost.date}</p>
      </header>

      <section className="container">
        {blogPost.image && (
          <div className="blog-image mb-6">
            <img src={blogPost.image} alt={blogPost.title} className="w-full rounded-lg" />
          </div>
        )}
        
        {/* Render content based on blog structure */}
        {blogPost.content && typeof blogPost.content === 'object' && !Array.isArray(blogPost.content) && renderBlogContent(blogPost)}
        {blogPost.content && Array.isArray(blogPost.content) && renderBlogContent(blogPost)}
        {blogPost.sections && renderSections(blogPost.sections)}
      </section>
    </div>
  );
};

export default BlogDetailPage;