import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram , FaYoutube} from 'react-icons/fa';
import { AiOutlineWhatsApp, AiFillPhone, AiFillMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-10 sm:mt-10">
      <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Navigation
          </div>
          <a href="/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Home
          </a>
          <a href="/legal" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Legal
          </a>
          <a href="/about" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            About
          </a>
          <a href="/contact" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Contact
          </a>
        </div>
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Social Media
          </div>
          {/* <a href="/" className="flex items-center my-3  text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            <FaFacebook className="text-gray-500 mr-2" />
            Facebook
          </a> */}
          <a href="https://www.twitter.com/standardintern" className="flex items-center my-3  text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            <FaTwitter className="text-gray-500 mr-2" />
            Twitter
          </a>
          <a href="https://www.instagram.com/standardintern" className="flex items-center my-3  text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            <FaInstagram className="text-gray-500 mr-2" />
            Instagram
          </a>
            < a href="https://wa.me/+256708163155?text=Hello there" className="flex items-center my-3  text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            <AiOutlineWhatsApp className="text-gray-500 mr-2" />
            Whatsapp
            </a>

            < a href="tel:+256 708163155
            " className="flex items-center my-3  text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            <AiFillPhone className="text-gray-500 mr-2" />
            Phone
            </a>
          
        </div>
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Contact Us
          </div>
          <div className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700 cursor-pointer">
                <a href="mailto:standardinternofficial@gmail.com">
                Email: standardinternofficial@gmail.com
                </a>

          </div>
          <div className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            <a href="tel:+256 708163155">Phone: +256 708163155</a>
          </div>
          {/* <div className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            <p>Address: 123 Main St, Suite 101, Anytown, USA</p>
          </div> */}
        </div>
      </div>
      <div className="p-2 text-gray-300 text-center text-sm">
        <a href="https://www.standardintern.com/contact" className="text-gray-500 hover:text-gray-300"> privacy policy  </a>|
        <a href="https://www.standardintern.com/about" className="text-gray-500 hover:text-gray-300"> terms of service</a> | 
        <a href="https://www.standardintern.com/testimonial" className="text-gray-500 hover:text-gray-300"> contact us  </a> |
        <a href="https://www.standardintern.com/legal" className="text-gray-500 hover:text-gray-300">  legal  </a>
        
</div>
    
      <div className="pt-2">
        <div className="flex pb-5 px-5 justify-center text-gray-400">
<p>© 2023 Standard Intern. All rights reserved.</p>
</div>
</div>
</footer>
);
};

export default Footer;
