import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Projects() {
  const ref = useRef(null); // Create a reference for the heading
  const isInView = useInView(ref, { once: true }); // Trigger animation only once when heading is in view

  return (
    // Projects section with animated heading and a grid of project cards
    <section id="projects" className="projects">
      
      {/* Animated heading that fades in when it enters the viewport */}
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 30 }} // Start faded and moved down
        animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to visible and move up when in view
        transition={{ duration: 0.5 }} // Smooth transition effect
      >
        Projects
      </motion.h2>

      <div className="project-grid">

        <div className="project-card">
          <h3>Quiz App</h3>
          <p>A simple quiz app built using React with multiple-choice questions and score tracking.</p>
        </div>

        <div className="project-card">
          <h3>Weather App</h3>
          <p>Fetches real-time weather data using a weather API. Users can search by city name.</p>
        </div>

        <div className="project-card">
          <h3>To-Do List</h3>
          <p>A task manager app where users can add, delete, and mark tasks as complete using React state.</p>
        </div>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>This personal portfolio site showcases my projects, skills, and contact details using React and CSS.</p>
        </div>

      </div>
    </section>
  );
}
