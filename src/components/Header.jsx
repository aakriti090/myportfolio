import logoImg from '../assets/logo.png';

export default function Header() {
  return (
    // Main header section with a logo and navigation links
    <header className="header">
     <div className="logo">
      <img
        src={logoImg}
        alt="Logo"
        style={{
          width: '80px',
          height: '26px',
        }}
      />
    </div>
        
      {/* Navigation menu with anchor links */}
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
