import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import profileImg from '../assets/profile.jpg';

export default function About() {
  const ref = useRef(null); // Create a reference to attach to an element
  const isInView = useInView(ref, { once: true }); // Detect if the element is in the viewport (runs once)

  return (
    // Animated section with fade-in effect from bottom
    <motion.section
      id="about"
      className="about-hero"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="glow-bg"></div>

      {/* Animated heading that triggers only when in view */}

      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Aakriti B.K, a Designer who <br />
        <span className="highlight">Judges a book by its cover.</span>
      </motion.h1>

      <img src={profileImg} alt="Profile" className="hero-img" />

      {/* Tagline for personality and style */}
      <p className="tagline">Because if the cover doesn’t impress, what else can?</p>

      <p className="intro">
        Hello! I'm a beginner React developer, passionate about building cool and useful web apps. 
        I'm currently learning and growing every day with new projects.
      </p>

      <p className="education"> 🎓 Currently studying <strong>BSc (Hons) Computing</strong> at{' '}
      <a href="https://www.informatics.edu.np/" target="_blank" rel="noreferrer" className="college-link">
      <strong>Informatics College</strong>
      </a>, Pokhara.
      </p>

      {/* Resume download button with hover animation */}
      <motion.a
        href="/Aakriti_BK_Resume.pdf"
        download
        className="resume-btn"
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        Download Resume
      </motion.a>
    </motion.section>
  );
}
