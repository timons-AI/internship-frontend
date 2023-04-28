import React from 'react';
import FAQ from "../components/FAQ";

const Blog = () => {
  return (
    <div className="bg-white text-black p-3 h-full">
      <div className="container mx-auto">
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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1139075679321892"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="-gu-3+1f-3d+2z"
     data-ad-client="ca-pub-1139075679321892"
     data-ad-slot="2866824929"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
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
      </div>
      
      <section className="flex flex-col items-center justify-center">
        <p className="text-2xl font-bold mb-8">Frequently Asked Questions</p>
          <FAQ />
      </section>
     
    </div>
)  
}

export default Blog