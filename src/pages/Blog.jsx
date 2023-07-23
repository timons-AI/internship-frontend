import React from 'react';
import FAQ from "../components/FAQ";

const Blog = () => {
  return (
    <div className="bg-gradient-to-b from-gray-200 to-gray-100 text-black p-4">

<div className="card bg-gradient-diagonal-orange rounded-lg overflow-hidden shadow-lg">
  <h1 className="text-black text-shadow-md font-bold text-4xl my-2 py-2 px-4 text-center">
    <span className="text-white">Standard Corporation</span>
  </h1>
</div>

        <h1 className="text-center font-bold mb-8">Standard Intern Blog</h1>
        <p className="mb-8">
          At Standard Intern, we believe that every student and recent graduate deserves access to quality internship opportunities that align with their career goals. That's why we created a platform that connects students with top companies in their field, giving them the tools and resources they need to jumpstart their careers.
        </p>
        <p className="mb-8">
          Our mission is simple: to make the internship search process as easy and stress-free as possible. Our website features a user-friendly interface that allows students to search for internships based on their skills, interests, and location. We partner with various companies and industry leaders to offer internships that provide students with valuable experience and help them build their professional networks.
        </p>
        <p className="mb-8">
          With Standard Intern, students can browse internship opportunities, apply directly to companies in the future, and receive personalized recommendations based on their preferences. We also provide resources and support to help students prepare for job interviews and succeed in their internships.
        </p>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Why Use Standard Intern?</h2>
          <ul className="list-disc list-inside">
            <li className="mb-4">Access to quality internship opportunities</li>
            <li className="mb-4">User-friendly interface for easy navigation</li>
            <li className="mb-4">Partnerships with top companies in various fields</li>
            <li className="mb-4">Personalized recommendations based on your preferences</li>
            <li className="mb-4">Resources and support to help you succeed in your internship</li>
            <li className="mb-4">A community of like-minded students and professionals</li>
          </ul>
        </div>
      
      
      <section className="flex flex-col items-center justify-center">
        <p className="text-2xl font-bold mb-8">Frequently Asked Questions</p>
          <FAQ />
      </section>
     
    </div>
)  
}

export default Blog