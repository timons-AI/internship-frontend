import React from "react";
import FAQ from "../components/FAQ";

const About = () => {
  return (
    <div className="bg-white text-black p-3 ">
      <div className="container">
  <h1 className="text-center mb-5">About Standard Intern</h1>
  <h2 className="mb-4">Our Mission and Values</h2>
<p>
At Standard Intern, Our mission is simple: to make the internship search process as easy and stress-free as possible. Our website features a user-friendly interface that allows students to search for internships based on their skills, interests, and location. We partner with various companies and industry leaders to offer internships that provide students with valuable experience and help them build their professional networks.
</p>
<h2 className="mb-4">Meet the Team</h2>
<h3>Founder/CEO - John Smith</h3>
<p>
John Smith is the founder and CEO of Standard Intern. With over 10 years of experience in the tech industry, John has a deep understanding of the challenges faced by companies when it comes to finding top talent. He started Standard Intern with the goal of providing a more streamlined and efficient process for intern recruitment, while also creating opportunities for young professionals to gain valuable experience and build their careers.
</p>
<h3>CTO/Cofounder - Jane Doe</h3>
<p>
Jane Doe is the CTO and cofounder of Standard Intern. She is a highly skilled software engineer with a passion for building innovative solutions that solve real-world problems. Jane's expertise in technology has been instrumental in the development of Standard Intern's proprietary platform, which matches companies with interns based on their skills, interests, and career goals.
</p>
<h3>Contributors</h3>
<ul>
<li>Emily Johnson - Marketing Manager</li>
<li>Michael Lee - Operations Manager</li>
<li>Sara Kim - Customer Success Specialist</li>
</ul>
<h2 className="mb-4">Our Vision for the Future</h2>
<p>
Looking ahead, we see a future where intern recruitment is more efficient and effective than ever before. We are committed to continuing to improve our platform and services, and to expanding our reach to help companies and interns across the globe. We are also working on several exciting new projects, including a mentorship program and a training program for interns to develop specific skills.
</p>
<FAQ />
</div>
     
    </div>
  );
};

export default About;
