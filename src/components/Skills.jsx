import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Skills() {
  const ref = useRef(null); // Create a reference for the heading
  const isInView = useInView(ref, { once: true }); // Detect when the heading enters the viewport (only once)

  return (
    // Skills section
    <section id="skills">
      
      {/* Animated heading that fades in when scrolled into view */}
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 30 }} // Start hidden and slightly moved down
        animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to visible and original position
        transition={{ duration: 0.5 }} // Animation duration
      >
        Skills
      </motion.h2>

      {/* List of technical skills */}
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Java</li>
        <li>Python</li>
        <li>Git</li>
      </ul>
    </section>
  );
}
