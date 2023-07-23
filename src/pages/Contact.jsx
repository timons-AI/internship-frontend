import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-gray-200 to-gray-100 text-black p-4">

<div className="card bg-gradient-diagonal-orange rounded-lg overflow-hidden shadow-lg">
  <h1 className="text-black text-shadow-md font-bold text-4xl my-2 py-2 px-4 text-center">
    <span className="text-white">Standard Corporation</span>
  </h1>
</div>
    
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="flex flex-wrap mb-4">
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
          <a href="mailto:standardintern@gmail.com">
            <div className="bg-gray-100 p-4 text-center rounded-lg">
              <i className="fas fa-envelope text-4xl mb-4"></i>
              <p className="font-bold mb-2">Email Us</p>
              <p className="text-gray-700">standardintern@gmail.com</p>
            </div>
          </a>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
          <a href="https://twitter.com/standardintern">
            <div className="bg-gray-100 p-4 text-center rounded-lg">
              <i className="fab fa-twitter text-4xl mb-4"></i>
              <p className="font-bold mb-2">Follow us on Twitter</p>
              <p className="text-gray-700">@standardintern</p>
            </div>
          </a>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
          <a href="https://www.instagram.com/standardintern/">
            <div className="bg-gray-100 p-4 text-center rounded-lg">
              <i className="fab fa-instagram text-4xl mb-4"></i>
              <p className="font-bold mb-2">Follow us on Instagram</p>
              <p className="text-gray-700">@standardintern</p>
            </div>
          </a>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
          <a href="https://wa.me/+256708163155?text=Hello there">
            <div className="bg-gray-100 p-4 text-center rounded-lg">
              <i className="fab fa-whatsapp text-4xl mb-4"></i>
              <p className="font-bold mb-2">Message us on WhatsApp</p>
              <p className="text-gray-700">+256-708-163-155</p>
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
          <a href="tel:+256708163155">
            <div className="bg-gray-100 p-4 text-center rounded-lg">
              <i className="fas fa-phone-alt text-4xl mb-4"></i>
              <p className="font-bold mb-2">Call us</p>
              <p className="text-gray-700">+256-708-163-155</p>
            </div>
          </a>
        </div>
</div>
<div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
<a href="mailto:standardintern@gmail.com">
<div className="bg-gray-100 p-4 text-center rounded-lg">
<i className="fas fa-comment-alt text-4xl mb-4"></i>
<p className="font-bold mb-2">Send us a message</p>
<p className="text-gray-700">Fill out the form to send us a message.</p>
</div>
</a>
</div>

</div>
)
}

export default Contact
