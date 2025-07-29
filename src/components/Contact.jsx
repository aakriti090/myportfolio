import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null); // Create a reference for the heading
  const isInView = useInView(ref, { once: true }); // Detect when the heading is visible in the viewport (only once)

  return (
    // Contact section with an animated heading and email link
    <section id="contact">
      {/* Animate heading only when it comes into view */}
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 30 }} // Start faded and moved down
        animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to visible and move up when in view
        transition={{ duration: 0.5 }} // Smooth transition
      >
        Contact Me
      </motion.h2>

      {/* Email contact link */}
      <p>
        Email: <a href="mailto:deeyabc13@gmail.com">deeyabc13@gmail.com</a>
      </p>
    </section>
  );
}
