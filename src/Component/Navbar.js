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
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#Home" onClick={() => handleNavClick('home')}>Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#About" onClick={() => handleNavClick('about')}>About</a></li>
              <li className="nav-item"><a className="nav-link" href="#Skills" onClick={() => handleNavClick('skills')}>Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#Projects" onClick={() => handleNavClick('projects')}>Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#Contact" onClick={() => handleNavClick('contact')}>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
