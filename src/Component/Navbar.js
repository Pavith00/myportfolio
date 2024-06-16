import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={isScrolled ? 'header glass' : 'header'}>
      <h1></h1>
      <nav>
        <ul>
          <li><a href="#Home" onClick={() => handleNavClick('home')}>Home</a></li>
          <li><a href="#About" onClick={() => handleNavClick('about')}>About</a></li>
          <li><a href="#Skills" onClick={() => handleNavClick('skills')}>Skills</a></li>
          <li><a href="#Projects" onClick={() => handleNavClick('projects')}>Projects</a></li>
          <li><a href="#Contact" onClick={() => handleNavClick('contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
