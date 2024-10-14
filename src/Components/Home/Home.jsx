// src/Components/Home/Home.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import './Home.css'



function Home() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  // Show Back to Top Button on Scroll
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  // Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Add Scroll Event Listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigate to Schedule Component
  const goToSchedule = () => {
    navigate('/schedule');
  };

  return (
    <div className="home-page">
      {/* Internal CSS Styles */}
      <style>{`
        /* Global Styles */
        body {
          margin: 0;
          font-family: 'Arial', sans-serif;
          transition: background-color 0.5s, color 0.5s;
        }
        
        body.dark-mode {
          background-color: #121212;
          color: #e0e0e0;
        }

        /* Home Page Container */
        .home-page {
          overflow-x: hidden;
          
        }

       /* Hero Section */
.hero-section {
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: gradientAnimation 15s ease infinite;
}

/* Optional: To animate the gradient */
@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

        body.dark-mode .hero-section {
          background: linear-gradient(135deg, #1f1f1f, #2c2c2c);
        }

        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .hero-content {
          text-align: center;
          opacity: 0;
          animation: fadeInUp 2s forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-title {
          font-size: 2rem;
          margin-bottom: 20px;
          animation: slideInLeft 1s forwards;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hero-button {
          padding: 15px 30px;
          font-size: 1rem;
          border: none;
          border-radius: 30px;
          background-color: #f39c12;
          color: #fff;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.3s;
          position: relative;
          overflow: hidden;
        }

        .hero-button::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: -100%;
          background: rgba(255, 255, 255, 0.2);
          transform: skewX(-45deg);
          transition: left 0.3s;
        }

        .hero-button:hover {
          background-color: #e67e22;
          transform: scale(1.05);
        }

        .hero-button:hover::before {
          left: 100%;
        }

        /* Features Section */
        .features-section {
          padding: 60px 20px;
          background-color: #f4f4f4;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
        }

        body.dark-mode .features-section {
          background-color: #1e1e1e;
        }

        .feature-card {
          background-color: #fff;
          width: 300px;
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
          opacity: 0;
          animation: fadeIn 1s forwards;
        }

        body.dark-mode .feature-card {
          background-color: #2c2c2c;
          box-shadow: 0 4px 6px rgba(255,255,255,0.1);
        }

        .feature-card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        .feature-icon {
          font-size: 3rem;
          color: #f39c12;
          margin-bottom: 15px;
          transition: color 0.3s, transform 0.3s;
        }

        .feature-card:hover .feature-icon {
          color: #e67e22;
          transform: rotate(360deg);
        }

        .feature-title {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        .feature-description {
          font-size: 1rem;
          color: #777;
          transition: color 0.3s;
        }

        body.dark-mode .feature-description {
          color: #ccc;
        }

        /* Image Gallery Section */
        .gallery-section {
          padding: 60px 20px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          background-color: #fff;
          animation: fadeIn 2s forwards;
        }

        body.dark-mode .gallery-section {
          background-color: #1e1e1e;
        }

        .gallery-image {
          width: 300px;
          height: 200px;
          object-fit: cover;
          border-radius: 15px;
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
          opacity: 0;
          animation: fadeIn 2s forwards;
        }

        .gallery-image:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        }

        /* Testimonials Section */
        .testimonials-section {
          padding: 60px 20px;
          background-color: #f4f4f4;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        body.dark-mode .testimonials-section {
          background-color: #1e1e1e;
        }

        .testimonial {
          max-width: 600px;
          margin: 0 auto;
          opacity: 0;
          animation: slideInUp 1s forwards;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .testimonial-text {
          font-size: 1.2rem;
          font-style: italic;
          margin-bottom: 20px;
          position: relative;
        }

        .testimonial-text::before,
        .testimonial-text::after {
          content: '"';
          font-size: 3rem;
          color: #f39c12;
          position: absolute;
          top: -10px;
        }

        .testimonial-text::before {
          left: -20px;
        }

        .testimonial-text::after {
          right: -20px;
        }

        .testimonial-author {
          font-size: 1rem;
          font-weight: bold;
          color: #333;
          transition: color 0.3s;
        }

        body.dark-mode .testimonial-author {
          color: #e0e0e0;
        }

        /* Team Section */
        .team-section {
          padding: 60px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
          background-color: #fff;
          animation: fadeIn 2s forwards;
        }

        body.dark-mode .team-section {
          background-color: #1e1e1e;
        }

        .team-members {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        .team-member {
          background-color: #f9f9f9;
          width: 250px;
          padding: 20px;
          border-radius: 15px;
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
          cursor: pointer;
          opacity: 0;
          animation: fadeIn 2s forwards;
        }

        body.dark-mode .team-member {
          background-color: #2c2c2c;
          box-shadow: 0 4px 6px rgba(255,255,255,0.1);
        }

        .team-member:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 8px 16px rgba(0,0,0,0.2);
          background-color: #f39c12;
          color: #fff;
        }

        body.dark-mode .team-member:hover {
          background-color: #f39c12;
          color: #1e1e1e;
        }

        .team-image {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 50%;
          margin-bottom: 15px;
          transition: transform 0.3s;
        }

        .team-member:hover .team-image {
          transform: rotate(360deg);
        }

        .team-name {
          font-size: 1.2rem;
          margin-bottom: 5px;
          transition: color 0.3s;
        }

        body.dark-mode .team-name {
          color: #e0e0e0;
        }

        .team-role {
          font-size: 1rem;
          color: #777;
          transition: color 0.3s;
        }

        body.dark-mode .team-role {
          color: #ccc;
        }

        /* Contact Section */
        .contact-section {
          padding: 60px 20px;
          background-color: #f4f4f4;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
          animation: fadeIn 2s forwards;
        }

        body.dark-mode .contact-section {
          background-color: #1e1e1e;
        }

        .contact-form {
          width: 100%;
          max-width: 600px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-input,
        .contact-textarea {
          padding: 15px;
          border: 2px solid #ccc;
          border-radius: 10px;
          font-size: 1rem;
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .contact-input:focus,
        .contact-textarea:focus {
          border-color: #f39c12;
          box-shadow: 0 0 5px rgba(243, 156, 18, 0.5);
          outline: none;
        }

        .contact-button {
          padding: 15px;
          font-size: 1rem;
          border: none;
          border-radius: 30px;
          background-color: #f39c12;
          color: #fff;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.3s;
          position: relative;
          overflow: hidden;
        }

        .contact-button::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: -100%;
          background: rgba(255, 255, 255, 0.2);
          transform: skewX(-45deg);
          transition: left 0.3s;
        }

        .contact-button:hover {
          background-color: #e67e22;
          transform: scale(1.05);
        }

        .contact-button:hover::before {
          left: 100%;
        }

        /* Back to Top Button */
        .back-to-top {
          position: fixed;
          bottom: 40px;
          right: 40px;
          background-color: #f39c12;
          color: #fff;
          border: none;
          padding: 15px;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3);
          transition: background-color 0.3s, transform 0.3s;
          z-index: 100;
        }

        .back-to-top:hover {
          background-color: #e67e22;
          transform: scale(1.1);
        }

        /* Dark Mode Toggle */
        .dark-mode-toggle {
          position: fixed;
          top: 20px;
          right: 20px;
          background-color: #f39c12;
          border: none;
          padding: 10px 15px;
          border-radius: 30px;
          color: #fff;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.3s;
          z-index: 1000;
        }

        .dark-mode-toggle:hover {
          background-color: #e67e22;
          transform: scale(1.05);
        }

        /* Animated Image */
        .animated-image {
          width: 300px;
          height: 300px;
          object-fit: cover;
          border-radius: 50%;
          animation: bounceIn 2s;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        @keyframes bounceIn {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }

        .animated-image:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        }

        /* Button Animations */
        .hero-button,
        .contact-button {
          position: relative;
          overflow: hidden;
        }

        /* Input Animations */
        .contact-input,
        .contact-textarea {
          animation: fadeIn 1s forwards;
        }

        /* Form Button Hover Animation */
        .contact-button:hover {
          background-color: #e67e22;
          transform: scale(1.05);
        }

        /* Additional Animations */
        .fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 1s forwards;
        }

        .fade-in-left {
          opacity: 0;
          transform: translateX(-20px);
          animation: fadeInLeft 1s forwards;
        }

        @keyframes fadeInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-button {
            padding: 10px 20px;
            font-size: 0.9rem;
          }

          .features-section,
          .gallery-section,
          .testimonials-section,
          .team-section,
          .contact-section {
            padding: 40px 10px;
          }

          .feature-card,
          .gallery-image,
          .team-member {
            width: 90%;
          }

          .dark-mode-toggle {
            top: 10px;
            right: 10px;
            padding: 8px 12px;
          }

          .back-to-top {
            bottom: 20px;
            right: 20px;
            padding: 10px;
          }
        }
      `}</style>

     
      <section className="hero-section">
  <div className="content">
    <h2>Kids Learning Center</h2>
    <h1>New Approach to Kids Education</h1>
    <p>
      Sea ipsum kasd elitr dolor sanctus magna, est ea et diam ipsum est amet
      sed stet. Ipsum dolor no justo dolore erat dolore sed.
    </p>
    <a href="#" className="learn-more-btn">
      Learn More
    </a>
  </div>
  <div className="image-container">
    <img
      src="https://static.vecteezy.com/system/resources/previews/021/510/691/large_2x/portrait-of-school-boy-sitting-and-studying-on-a-blue-background-photo.jpg"
      alt="Child Reading"
    />
  </div>
</section>


      {/* Features Section */}
      <section className="features-section">
        <div className="feature-card fade-in-left">
          <i className="feature-icon fas fa-book-open"></i>
          <h3 className="feature-title">Comprehensive Curriculum</h3>
          <p className="feature-description">
            Our curriculum is designed to provide a deep understanding of subjects.
          </p>
        </div>
        <div className="feature-card fade-in-left" style={{ animationDelay: '0.2s' }}>
          <i className="feature-icon fas fa-chalkboard-teacher"></i>
          <h3 className="feature-title">Expert Instructors</h3>
          <p className="feature-description">
            Learn from industry experts with years of teaching experience.
          </p>
        </div>
        <div className="feature-card fade-in-left" style={{ animationDelay: '0.4s' }}>
          <i className="feature-icon fas fa-laptop-code"></i>
          <h3 className="feature-title">Modern Technology</h3>
          <p className="feature-description">
            Utilize the latest technology to enhance your learning experience.
          </p>
        </div>
        <div className="feature-card fade-in-left" style={{ animationDelay: '0.6s' }}>
          <i className="feature-icon fas fa-graduation-cap"></i>
          <h3 className="feature-title">Career Guidance</h3>
          <p className="feature-description">
            Receive personalized career guidance to help you achieve your goals.
          </p>
        </div>
       
      </section>

      {/* Image Gallery Section */}
      <section className="gallery-section">
    
        <img src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?s=612x612&w=0&k=20&c=Tx3nGQfxaI781gi97Siw7DIEBbKg1oBxl8n0JEwMQ6s=" alt="Gallery 1" className="gallery-image" />
        <img src="https://img.freepik.com/premium-photo/smiling-business-woman-with-arms-crossed-portrait_776674-1039832.jpg" alt="Gallery 2" className="gallery-image" />
        <img src="https://www.shutterstock.com/image-photo/portrait-mature-teacher-classsroom-260nw-177305666.jpg" alt="Gallery 3" className="gallery-image" />
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIWFhUVFRUVFxcXFxUVFRYVFRUXFhUWFhUYHSggGBolHhUVIjEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAPGi0lHx8tLS0tLS0tLSstLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALQBFwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xABBEAABAwIEAwUECAUDAwUAAAABAAIDBBEFEiExBkFxEyJRYYEykaGxByMzQlJiwdEUcoKS8LLC4STS8UNTVIOi/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIxEAAgICAgIDAQEBAAAAAAAAAAECEQMhEjEEURMUQSIyYf/aAAwDAQACEQMRAD8A9ZCcExjwU9aHOdCe1MCeEDQ5CuKDalk/lRVBeL3f9M/zsPiEkD6M/hLdG9ER4bF6qQ+Df1H7KnhY26BXuFh9fKfIfMoYGrCSSSg0EldcJTSUBY+6V0y66E6Cx10ly6V0gs6uFMfMAoTVBOhNosXSVQ1XknNqU6FyLCRUTZgqeJ41T07c00rWDTc667WA1PNFBYQSWPn+kigbKIy91iNZMhyNPgfveoBC0VFicUzBJFI17Ds5rg4eYuOfknQrLNT7JXmMDfr/AHfMr0ipm7p6Lzynb9f6D5lD6EuzU4eNlPVqKgGymqgkUD3qB6sSKu9AFd6gkVh6glQMvRbBdclDsE4hAiBySe4JIAKwTkdFYdUuKrxxqYWV2ZpEsdQRurbKkIc4hOYEDDDXIDxof+nt4uaPiiEEpCD8aT/VMHi8fBJA+inhrdPQfJX+ER9ZMfMfqqdCND0/RX+Dx9qfzJMaNKuJJKDQ5dcSKSpCZxdC4kSgR0lU5pzewSlqL7KBUkS3YnFJdslZMRwKQBcaE8BIZluP8fFLT911pZDlYAdbfed0GnvXjlVVzzuzEmTW/wB9zWkbabWGy9MxLDo6urkqZhmjhJgiadi5n2jyPDNcDofJEqeCMaNYAPIALGeVp0jfHhTVs8WljlbvGR5W0vflp/nxXcH4mnpJM8DshOjgRdrhyDm8x8uW69hxCmZzaPcsljnDUE3sgMd4hZfYp1JG3101/LNbwPxqzEInMcAyojF3sF7Obt2jL8rmxGtjbxCrwN+u9B8yvJKOomwysbJzZ7pI3aOb6j4gL1+jeHyB7dnNa4dDqPmum00cjjxdGlohspatcpBsnVSAB0irvVmRVnoAgeoJArDwoJEAXoPZCeU2n9kJ7kAROCS64JIEFgVG4p7oj4KSKDxVCOUkFzqrskGmi5A6ynY66TY0iiLhAOLnfZD8y1UsayfFrfrIR5ppktFmjHdciHBw7kh/OfkFQpx3HeqtcJzgMcPzEpMaNMuKB1UFC+q8ApopyLTiqstVyCryvcVDZWkS2Wf4opr6glQKWNo5piE1dsk4DknNSA4k1dKkY1A6OKKsnyRvf+Bjnf2tJ/RTOahPFYcaSVjRrI3s97WEndcfQEn0SbrY0rdIxjKuSCKGPsJJXdmHvI0u6TvOt4m5U+H8Uxuf2b4ZI33tZ7f1VnG8KdITle8AaZWODNtAdRr7whPD3DkrZB2sj3i9xnLXOAH5huuOb3o9CEVWwni2N00Z+tdl89f0QcYpTyE9jMxxOw2PxUeM4Y6SV5ZlNnbOa5wDeejQSeiAz0k7jllghcORhBa5vXQLJ1JWzRJp6B3G5zOZfkD8/wDheicKQFsNM124ghB/sHivNuMtI42i9wCNTc6DUX5r1jDAMzA0ggRsFxrsLfouvD/hHH5C/s01KNl2qXabkuVS1MAdIq71ZkVd6BED1XkVh6ryoGXqX2QpSEyl9kKQoAicknOCSBB2OsjPMKcSNPNYChh3IcdSeZ8VfxEyxBha86uAV0Z8zZ5AuaDZD8Slc2AObvohMGJP5g+9KiuRpMyyvE5vURDqiseJeKCYvNnqY7ckIG7CMY+rd0K7w43uHqukfVO6FWOG2/VepSGi6F0J72KEoGTjVNdGo2vTxKgBhakGrrnJByYjuVdC4HLjikMcSpmFVwrEYQMTihnEFzEBbTO3NfwFz87Im5qiqoy6N7RuWuA6kaKZK1Q4unZh8RxYtcI2DNI4DfYDm53kp6LHYoiWSk9pluXEANde+jAPBBJqIyuLo35JMoymwcLja7TuNx6q1WYIZomh8rS6wuSx2jtAbPG259y41d2ejUaplal4gg7a8Zc57nWLLEd21yQT0RvEcWYYszDpb/AfNYWtw+SnIETWyvJyjKXF3Uk7eqdWtliYe1eMzyO6DexA77r+Hsi/iCp2i2otlXEYs8rZBY2IGuntuAJHmLLYcG0hY3f23OePJpNm/Bt/VDuD8EbVl5L8vZBhtYm4fnBsb6Gwt/UtZTRhsuVosGtaAPAC4AW2GDvkzm8nKq4L3s0FOuVKdCNlyoXScYNkUD1ZkCrvCBFdyryq04KvK1Ay/SjuhSEJtKO6FKQgCFwSUM1ZG3dwSQIBQucx7WOFrvA8tStJjsekQ/MFYxGnjJadL5hZNxv2oh+YfNXZjVF3GdIQPMKlR0+bZWOJagMhBPiEMwTGmucG3uUl0U6sLVGHaLOyRWqQDyBWuqp7NusmJM9Tm8imH6Fph9SeikwP7P1TaofUlQYdXtY3KSAVJYa7RcJQmTFW33V6nDnC4QOyUtTS1StgcpBToGVgEldFOniAIsAeGE7BStgKvsYE6yVioptp1KyGynTXOQMhnIaLqrT1QdsrMsYeLHZRxUYbsEt2O1RlsWwgQuMrfYcdfyE/7dfTZBa3DXPOdkxb42JF/ULQ8c47HSxtY8ZjM9sYb4NLgHPJ8APeVgcdp5oCQx5ykXANzYHldYZYpbOrx5uWiWsc2nu5z8zrG2puT1JusZWVxc4ue7U/ADYeQUddPITckk+qkw/BXus9+l9QP1SxYuT0Vmz8VsPcIYo6GdsovlAyOHix3tX89j/SF6TSWM7iDcZWkEa332XmUVKW2Y32nGw6orhkljkY8l8Ys54OjTzFxuedthoF3LFSpHmvK27Z6vT7BcnWOwfjVod2UzXkXsJA3S35mjX1AWyc5paHNIIIuCNQR4grNpotSTKEjVBIFckCrPskMpvOo81FMLap1YbOj83W+CzPF+NZHtgbu72reCTdDRpziDI4g95AGw8+g5oDXVlZVdymb2bOcrv9refVFMNw9smWSUZiwWa3k3zt4o1ntoAB4BHYGTouDWtH10r5CdTqd/1SWofmSRSCwS7BZWTREyuyB9y07HwRnFxeWIeYQs8QGSaOLs3gk3JI7th5olXuJqIh5rQw1+DOOJLRM/nHyKy/Dzx/ENt5o/8ASLIBFHf8X6FAeBmh0wPg0/NC6HLs3WKSWjPRZnCxeQn8pR7iOcNZbx0CCYQO+f5Ufg/0N1v2Sx2IU7ny6bWWvxI/Ve5VcPos5BUSddGkSrgeAi4cb6LZQwhosm00AaLKdIoVkkly6AOpJuYLucIA7dJMMgTTMExDnush9VUcglU1etgoGNO6YmPFVkaXPIDRuSguIcZgOEcDMzybXfcAbXcQNQBdUOJ63tJYYWnud+V3IOEdgL+WZw9yzb6jJK2OLvPlDpJX21ykHKB4C9rdFpGPsxlL0CPpAxF073l1ybAA7BuUchy8fVGKioM8Ecg1zMaeh5j33QWsp2ySdmMz3CxcNg0fm8Cfw7opg8Dh2kXJst2/yva13+ouXP5cf5s6/Cn/AFQBqKmFtSIZRluGnN93M7UNd4C1tfNaFsHetyCw3FURFZMDqc1rDXSwsLdLLWcNw1TRHDOwgvHcfcHu/hfzuAN/C2t998K4xo5/IbnJyJ34LLM6zCGtvZ797Ntq1o/E64HS+qK0lHFGDDGC4M9t293nUg23d02uAi9ZeGH6sXebMjB5yO2J8hq4+QKqwUYhiDAb2uXOPtPcdXOPmSSVpZlWirK1o2t7tfcu0PEQpzl0Lb3c3UW8Tb7pVepo3v3cWM8G91zvNztx6WVN9OxgysaAP896GrC6PRqSrZMwSRm7T7weYPmoqiG/VYjgzEuyqexJ7k2gHIPaCQR1Fx7lvJFjJUzdO1ZkeJ8UMLWutqx4JHiNtPNBcN7CXtKqRwzvcAAfuNB2+C03EsEUjHB9iWWd6BeZy0RfnI+zu4tDdydljJ7KRq4OK2gNawOOV75ZSBsy5DR530WqwapEgMz9Hkezp3G8hpzXnFLhj5pHAZ4WPja3UWzZbcz/AJ5IlDw1WNDg2ocGnnzPvF00wo3s2Ixg2LhfwuksrDwm62btXiQ7kkkH4ridsNG5qadnaMI3v+ijnN6qMf5sqtDQmKVrSSRruboi2mvUh/gtTFWwH9JrhliHm4+4f8oN9Hrx22/3f1Wqrn5nuDwHZXEDMAbC/K+y42S2wA6aJXoqtnOLI3OLMoJ32F1VwmneHOLmkDKN1d7U+Kb2h5HVF6CtljFvsx6IthVOGsb0CDYo+8TT42+S0NH9m3oFLLR2omyhUjXqbET3ShPappA2XzWnwTTVuVPtl3twgLLBqHLhnd4qr/FhPE4KBEuZ3inAX5lVzU2UjJ77IAnZEFQxesA+qbuR3j4DTT1RB0lhc8lg8eqntkkkYLl3etfXQAG3noCrgrJm6K2MS56jI3Vzo2sHk3MS89Lho9E3h6n7Saaf7ubIz+SPugepBQ+OvL6pjoxftKfMPTNb/wDTgtXh1IIIGR87AlamX6CqZzI5S2UZTPI/K+2jnNDe648nEbfy2Wa4j4gfTzythy9o5rGl1riO1zoDoXWcN9vNbbFqJslP3vukvB5gjW480AwXhZgvPUDM9xMji7UAnUqJR5dlRlx6BXD+Edi11XVk3t2hvq624JJ+8SdB4lafhLM4OqagZZZjaNnKOEeyweFzcnx08AmYlRiaSFjr5STKWaWdY9zN4gb281ddicXa9iDYxlrddATpe3vVUK9lqedrpwzlEzOf5pLgetmu/uTKiqaHhgGaTfIPujxeeXRZ+nxJzzJ2Vs8krjmPsxxxgMzu8gQbDmb+BXaYZwWQlwhv35de0qHc7HcN+aKAu1da25aDncPaI9hvlm8ULrJw1ud/PRjRu8+Xl5pmI4lFDZgaHPHsws5echG3TdD6WkmneZZTbTV2zWNH3WDkgRBDORUQO59qwj+8A+m4XoVbjhZmIFxaw6rzKSXtalgZ7OdjGdA4AH36re49q9rG7OcXegXD5TkqcWbRRA2gkeA17r9qSXn8m9v0VqhwZjBcizQTlHle+qloJc79NgLeg3V6d1+gVQSoss/wzXtAc3TkE2WDKw2KsRHuhRVZ7pWghwOiSYDouoAihxEySjukEa62RWKoGYm6bU0rR3h8kKe4kkgKZyoUS1Wm8hIN72+VlGFUpHHW/irgVRdqxCSQ2vr5I54WCPNFJmDng6scBcXHgddUSsmOh1U68TR4OI/X9VpKZ3db0Cy8u1vErUQjujoEDRyqcCFQZALKXECRqFXZOVLkkVxb2ObTBKWmFl1sxUjZkc0HBg4UFyrMNNbl/l1aMic2RLmg+NlaWjB/zzT6entyVoOQPiSunbZsLmsuNXEXsSdNPDRVF8nSJkuKsscS1bYoSbi4FwOm3pex9F51h8hezKXZXvzFrt+9r477qxXUdR3nSVbZbjvNe3Rw/DcahDbhzHNbdr2G9jyI8HbEaroiqRzydux3DjgJ4C632VQw2IcNHtdoeY8FqnVBeXPOg2A8AsHw65wlaw3+rMmW4tZrowA3TQ2y79FtI3gaHyP/AAgAnMCI9BezdvFURVGYiIAgXHaHkBf2b81PVVJJELB3soc46WAuNE2qlETWt+/I52vM5WE3+DUDOvj+vfJbRrQ0HwA1NlhsKqDJUvNu85zi2++Z2jT7yFLxBWOLXautpfe3uVv6OsDe7NVyCzXE9mDpcHTOR4WFh477WRdE9hcYOxrLEEx6d1vtSuG1/wAg+OpKgqaOqm7uYU8e2WPV5HgX8vRaWUga3VeWQ2u5wYzxOhRZVAKi4biiGg6k6k9Ss9xFipkJgh0YNHEc7cuiOY3Xulb2VP3WH2n8z0QCrp2wx2G990mNFLAISauJo5OB9Rd3+1elVmHfVtc3V9yB66LGfRuWmsIOpLHBvkdNR6By9FrJQ0a6Bgc4/Gy55xTds1QMwimyh3je3QDkp6hWMPp8kQ8T3j1OqhnCEqVFFyH2R0UVae4VNEO6FWxH7N3RMDoOgSXBsOiSBA3HcfMfZsjDnGW5GXYNAvcnz8OvghtBxEJYXSBpAYLuJI0Bvrp0O6G8Y07xUNuCGxttFa4u02zWPN1i4eh8VnYn9jG4R3IeTG5heDcXuLnL5E+RWM+xpWej0NWCAeTgHA73adjdFWlVMA4eENNd7y9wZc63Aaxt2tB07oubac0+kqA5rXDmLrWOtEoZjNB20L47ltxo4aEEagj1UWDVZNI18h77WHN5llx+iPMaMvVDcVpmNb3QADe45G6oaBHCEzpKRkjzdzpHuPQvOnReiM2C8ywLFnPglZFG3PCT3L5QW33v71sKHFhZrDfMGj5IAJYjsqIC5NXZtFHHKsZ9m0OiyAnNCgM1gSdABcnwAQ6px0C2QixG5v8AAKG67NIpy6DhUkYWPq8We4Wzu31I7lugH7q9hXElrMm9Hj/cP1S5qy3jlVh+vnLIyWi7tmjfvHY9Bv6LzzG4KiV5zVLZNdGnKzLbYsLdiOiNcQYkJH5XEmG7msjabds5tg57zuW3JAbtZrnHTai+kY4ZS1rW8mtY0NHlqL/JdKnHGt9s43jlleukBGYu+GQQ1DWlxAyP0yvvyzW0dyUWO4y9zCwxdk3TMdy7yBGgC7j2CgsID7jk0g6fylo7vxQag4XrK0Hvva2NwYZHudkItr9VuXgW1Fgb7q45oyWiJePOL2UuC5rzSOPXpoVtqCQuff7oNz0GqL4FwbS0l9C9z7AySEE+A0ADW+71Rl8scI7J7G9me7e3daToMw5A33U/Oki/rNvsy+Gz2kfI46vIt05BVcXq89UB+BnuLgT8rIpxDgBJHYgi/mAG+JJJ0CjoOFYyc7qh7nm98rQG3tsc2ruWui0WSLMnhmjOtbTPcTVzCKJo3uGlxOzQegJWsbizZmXo5Y3MGmnet5HmF3D8Phis18bA8tIDtHk29pwcQCCb3t5bmyzWJQGGYy5HHL3s8NmTZB+LTLK3xBFx4lX2Z9BZ8lVuXsHlbUqGfLJZsp281M/GI3xCVjQ4E7eHXzQ6XGIW+1A702v1TAkOE29g/HSyyvEFW0ONjcN0HmfJEcVx18vdjZ2bOvePXwWXmOY6ezy/dRJmkV+mr+jKLNWMcNe5I48rd23zIXoldQSSOeCO4S22up1ub/BecfRvV9jVPNr3hcB/cz9lvajiB/kFhOSXZvDG5LQWlj0Q2pbZB34lNIbB2iRa7xvf0sp5l/C12zSQ+yFWxFvcd/nNBGuqB9nIf5Xd5p9Dt6FOg4hbJeGVvZy9bsd0PI+R95TU1+ieNra2GgNAknXHikqMzPVuPfxDHRujYAbEdRzHncj0KxOLBjHfZNDd8wc46knUA3G3IhajCIZpHOEh7EttbMC4Ove4BaNLWHvXcS4eMjrOqYQ2zdbPOt3X0AXPU2brggrwrj01RC+ORtgAI2SG4Mhe7Kd/asLXI0RKfDBTZWNJLSCRfe99R8R71n+EqSVssbTJmjY8WGTKG5Tm0cRe2+mg7y2/EcV42uH3XD3O0Pxst49GLSsYx3dHRC+JtYiBvbTqr0btB0VbF4g9tibd0+9USjyPC8RkpqwiQkXdlk82k6/oV7VHRteBIw6/BeP8ZQCV38TCQQAGSEXsHjktt9HOPukp+zFnujsN7d37p1I6IHRrYqFxdyTzRPHIHouR1cwNxAX33yvjBB/qeESp3Pc0FzCwndpLSR6tJHxUuI1Iz+OF7YJCGXIbsRuLjMLHyusa15Ju+kPX6jQdM1wvT8Qp3PiewEAuY5oJ1AJFtVlcJ4QcGHtXlrr90CztPFx538lhkxybVHThyxinyBzLO028uS4+nBV2rwZ8Or/Z5Pbq3+r8Pqq/ZOP3hbxWLg/06FNPaY2jwrMWygEluZg0LiASCRbbWw96t4zWNp8kbrCRzm2aQC63MkDYLM8X1ksIhdDM6MXkaS0lpuQDv/QVRwzHGyRCWYh0oAiJ3cWM0FydSed/NbOSWMxUHLJ2bf8Air8zboNUqavMZax7jkeSb22ceTiORtp/ys7HxDHewPT3FWDirHAtNiDf48lj8jNvi/4aKkkPavikOZj7uiJ2ykDPGfMG56HyVbDajMJqSpAJbcNdylhOx/mANj0vzQJtVK7I0Sjs2HM0EfWZraXdfUalWKnFYZJGCIO7RmriQQLjYHxvchPkg4BGXEomxiF8t5mlrWt1L36jK63Tc9VLPMW2PjoevJCmYu6V5eYhGGtDRexJPM3HJKoqXSNsT/55JxyKMrJni5RaJ66YOIB+65pHkcp1+agiqg5od4ai/uI/RAnVznPOYW167DL/AN3wUtHPa7fX0Oh+XxXqro8V6ezlJThpLthK5weANM33XAckyqjltZrc3zRQVETGkveAN9T4eAWQrMbeCSxxAuT5nXRJscU2VcaJjGQ917+X4W+J6/uhWHOveM6ObsPJRVbnucZXEuv7V9x/wuGYEsIPfGx8fylZNmyDPDcxbUut+B3zC00lSSbXWQwR/wD1Ejhtk/1EI42fVcmXcj0MGoB2GXKN9/NEcOnzm5WX/iLkao5hstkQ7DItGtp6caLz7jYNFQ7LyAv13W3biDY4HSuNg0e88gPNeVYvVlxc927iT708z0kLx47cmMjnm5SyW/md+6Sq07iWg3PvSUbHUT3uSiaeQVV2DM8F2kxqN3td0+e3vRNkgIuDcLr0ziKlLh7WbBW6iUhpAttz1Ts4UFQ24NkgKn8OeRt5W0QjjGoMULnWuQwjw30uiTpnt3aR8QhWJ1Oc2kG7bWtcXvz9EAkB+HcIYaTs5B9uC438TtZBeCHClrHxudYgln5XNvv+vqtPA3KA2/dD87fy+Q8k2swaGaUTWs62VxGh8ndQpUjRxNb/AB0bSbuC4cbiH3x71Qi4eppmtM0Qe4C19U8cE4f/APFj9QCrsypE0nE0bf8A1G+pCrN4ziHtyw/3gfNTx8I0TdqOH+1v7K3BhNPH7FLGOjWfsgeiozi+Bw7r43dHA/JBMSxKnk2dFE47Obmv7gbH1C1wjb4OA8BYf6U3+Ci3LST5lx+ZTqL7J5TX+Tz2twWKaJzHzuluDlOR4DXEHK6zAAbeeiCYPwG9jj2lR3CNA2N+bNyuSMoHS9/JewNhaOZHQW+K6IGXvmffzc/91Pxw6L+afb7PGsQ4XqI7llpBytcO/tOnuKD9lVN3gm/scR7wF9AOhPJ9vS/zK4ymPORx937KHgj7NV5U1+HgbK+dp1jlH/1v/ZStxiQG5a4dWuB+S95dAfFvq0FR/wAM37xYf6WhQ/Gj7LXmS9HhLuIH87ro4gcNSRbqvbpIoeYiHmbX9wsmw09O42BiPkP/ACl9ZeyvuP0eIMxhrhoRfnqmRYxaRuu5Lfhp8V7dPHRAlpEbiNwMpPqgtXg9BIbupqe3k0Zr/wAzbWXSp0qOKUFJt+zyvEnuc7MduSEVEuY+Q2/deuVnCWHvB7jx/I+X4AkhCZvo8pT9nLUN6tDh8WhDmmNQaPOY3kKvW0dxmj5a5f8At/ZbrEPo6ma1xhmzkDRpZlLvK97IRBwRiX/stHWRn6FHJBxaA+CVAIc6/eOVp9L6+t/giAqESp/o+rcxcRE0nfv6Hz0G6vs+j2q5yxD1cf0WE42zqxzqNAKGp1RrD53Pc1jNXOIAH7+W59FcZ9Hkn3qlg6Ncf1RbDuEhCx4E5zvGXOGatZzDRfQnmfBJIbyIAcU4yHWgjdeOLQn8b/vO6eCxNbUEr0l3AcJ3nkPQNCa36P6O+plPVzR8go4Nu2U8sVHjEwMJAAB5BJems4Qoh/6bj1e/9CElXAj5EGJKJhBNrHy0VCnqnsd3XEJJLeRyxNDQ1TnjvW9FMXFdSTAc1yhniad2j3JJJDGtiaNgEwMF0kkAEYBYaKQvKSSBDDOV3+IKSSAGuqXeSYalySSAEKh3iumV34iupIGML3fiPwTHX/E73riSAInxX3Lj/UVVkwyEm5YD1uVxJSykQyYLTHeFnuUbMGp2nM2JoI8l1JIq2XIyBs1o6AKUSlJJAjuc+Kd6lJJAhi5ddSQM4XLhKSSAZE5yakkmDGEpjykkgCIuSSSSGf/Z" alt="Gallery 4" className="gallery-image" />
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Students Say</h2>
        <div className="testimonial">
          <p className="testimonial-text">
            "PrepMint has completely transformed my understanding of mathematics. The instructors are top-notch!"
          </p>
          <p className="testimonial-author">- Sarah Johnson</p>
        </div>
        <div className="testimonial">
          <p className="testimonial-text">
            "The comprehensive curriculum and supportive community have been invaluable in my academic journey."
          </p>
          <p className="testimonial-author">- Michael Brown</p>
        </div>
      </section>

     

    </div>
  );
}

export default Home;
