// Import GitHub and LinkedIn icons from react-icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    // Footer section
    <footer>
      {/* Copyright text */}
      <p>© 2025 Aakriti BK. All rights reserved.</p>

      {/* Social media icons with external links */}
      <div className="socials">
        {/* GitHub profile link */}
        <a href="https://github.com/aakriti090" target="_blank" rel="noreferrer">
          <FaGithub size={30} /> {/* GitHub icon with size 30px */}
        </a>

        {/* LinkedIn profile link */}
        <a href="https://www.linkedin.com/in/aakriti-b-k-29017422a/" target="_blank" rel="noreferrer">
          <FaLinkedin size={30} /> {/* LinkedIn icon with size 30px */}
        </a>
      </div>
    </footer>
  );
}
