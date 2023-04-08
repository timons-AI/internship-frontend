import React from 'react'

const Blog = () => {
  return (
    <div>
    <h1>Welcome to the Standard Intern Blog</h1>
    <p>Our blog is dedicated to providing students and recent graduates with the information and resources they need to succeed in their internships and careers. Whether you're looking for tips on job interviews, advice on how to build your professional network, or insights into industry trends, our blog has got you covered.</p>

    <h2>Recent Posts</h2>

    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{marginBottom: '30px'}}>
        <h3>The Importance of Networking for Interns</h3>
        <p>Networking is an essential part of building a successful career, but it can be especially important for interns. In this post, we'll explore why networking matters for interns and provide tips on how to do it effectively.</p>
      </div>
      <div style={{marginBottom: '30px'}}>
        <h3>Preparing for Your Internship: What to Expect</h3>
        <p>Starting a new internship can be nerve-wracking, but with the right preparation, you can hit the ground running. In this post, we'll share some tips on how to prepare for your internship and what you can expect during your first few weeks.</p>
      </div>
      <div>
        <h3>The Benefits of Interning at a Startup</h3>
        <p>Interning at a startup can be an exciting and rewarding experience, but it's not for everyone. In this post, we'll explore the unique benefits of interning at a startup and provide tips on how to find the right opportunity.</p>
      </div>
    </div>

    <h2>Categories</h2>

    <ul>
      <li>Interview Tips</li>
      <li>Career Development</li>
      <li>Industry Insights</li>
      <li>Internship Success Stories</li>
      <li>Company Profiles</li>
    </ul>

    <h2>Join Our Community</h2>

    <p>Want to stay up-to-date on the latest internship tips and trends? Join our community and receive our newsletter, featuring exclusive content and opportunities.</p>
  </div>
)  
}

export default Blog