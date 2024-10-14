// src/Components/About/About.jsx

import React, { useState } from 'react';
import './About.css'; // Import your CSS styles

const About = () => {
  const [teamMembers] = useState([
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      image: '/images/john-doe.jpg', // Update image paths as necessary
      bio: 'John has over 20 years of experience in education and technology.',
      social: {
        linkedin: 'https://linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe',
        facebook: 'https://facebook.com/johndoe',
      },
    },
    {
      name: 'Jane Smith',
      role: 'Chief Technology Officer',
      image: '/images/jane-smith.jpg', // Update image paths as necessary
      bio: 'Jane is a tech enthusiast with a passion for developing innovative solutions.',
      social: {
        linkedin: 'https://linkedin.com/in/janesmith',
        twitter: 'https://twitter.com/janesmith',
        facebook: 'https://facebook.com/janesmith',
      },
    },
    {
      name: 'Alex Johnson',
      role: 'Head of Marketing',
      image: '/images/alex-johnson.jpg', // Update image paths as necessary
      bio: 'Alex specializes in digital marketing and brand strategy.',
      social: {
        linkedin: 'https://linkedin.com/in/alexjohnson',
        twitter: 'https://twitter.com/alexjohnson',
        facebook: 'https://facebook.com/alexjohnson',
      },
    },
    // Add more team members as needed
  ]);

  const [testimonials] = useState([
    {
      name: 'Sarah Lee',
      feedback: 'PrepMint has transformed my learning experience. The courses are engaging and comprehensive!',
      role: 'Student',
    },
    {
      name: 'Michael Brown',
      feedback: 'The platform offers exceptional resources and support for learners. Highly recommend!',
      role: 'Educator',
    },
    // Add more testimonials as needed
  ]);

  return (
    <div className="about-section">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        Welcome to PrepMint, where we are dedicated to providing high-quality education to empower individuals and transform lives.
        Our platform is designed to help learners achieve their goals and excel in their fields of interest.
      </p>

      <h2 className="mission-title">Our Mission</h2>
      <p className="mission-description">
        Our mission is to make education accessible and engaging for everyone.
        We strive to create a community of learners who support each other on their educational journeys.
      </p>

      <h2 className="vision-title">Our Vision</h2>
      <p className="vision-description">
        We envision a world where everyone has the opportunity to learn and grow, regardless of their background or circumstances.
        Our aim is to bridge the gap between knowledge and accessibility through innovative solutions and collaborative efforts.
      </p>

     

      <h2 className="testimonials-title">What Our Users Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <p className="testimonial-name">- {testimonial.name}, {testimonial.role}</p>
          </div>
        ))}
      </div>

      <h2 className="get-in-touch-title">Get in Touch</h2>
      <p className="get-in-touch-description">
        We love hearing from you! If you have any questions, suggestions, or just want to say hello, feel free to reach out to us.
      </p>
      
      <button className="contact-button">Contact Us</button>
    </div>
  );
};

export default About;
