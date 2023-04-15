import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white text-black p-3">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Get in Touch with Us</h1>
        <p className="text-lg mb-8">
          We're here to answer any questions you may have about our platform or the internship search process in general. Please don't hesitate to reach out to us using one of the methods below.
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Email</h2>
            <p className="text-lg mb-4">You can email us at <a href="mailto:info@standardintern.com" className="text-blue-400 underline">info@standardintern.com</a> and we'll get back to you as soon as possible.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Phone</h2>
            <p className="text-lg mb-4">You can call us at <a href="tel:+1-123-456-7890" className="text-blue-400 underline">+1-123-456-7890</a> between 9am and 5pm EST, Monday through Friday.</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Social Media</h2>
          <ul className="flex space-x-4">
            <li>
              <a href="https://twitter.com/standardintern" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter fa-2x text-blue-400 hover:text-blue-600"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/standardintern" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook fa-2x text-blue-400 hover:text-blue-600"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/standardintern" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-2x text-blue-400 hover:text-blue-600"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/standardintern" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram fa-2x text-blue-400 hover:text-blue-600"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
