// src/App.jsx
import React, { useState, useRef, useEffect } from 'react';
import './index.css';
import QRContact from './QRContact';
import { carouselItems } from './CarouselItems';

const App = () => {
  const [showContactCard, setShowContactCard] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const contactCardRef = useRef(null);
  const experienceRef = useRef(null);
  const carouselRef = useRef(null);
  const [showQR, setShowQR] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Dark/Light Mode Toggle
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

    // Scroll to Top Funktion
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Scroll Event Listener für Scroll-to-Top Button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Skill-Daten
  const skills = [
    { name: 'JavaScript', level: 7 },
    { name: 'TypeScript', level: 5 },
    { name: 'React', level: 7 },
    { name: 'Angular', level: 5 },
    { name: 'HTML', level: 8 },
    { name: 'Node.js', level: 6 },
    { name: 'GitHub', level: 8 },
    { name: 'CSS', level: 7 },
    { name: 'UI/UX Design', level: 8 },
    { name: 'Cyber Security (Netzwerk, Pentesting)', level: 6 },
    { name: 'Windows Server', level: 6 },
    { name: 'Linux Administration', level: 6 },
    { name: 'Virtualisierung (VMware/Oracle)', level: 7 },
    { name: 'Netzwerkmanagement (Switch/Router/Firewall)', level: 7 },
    { name: 'Monitoring & Logging', level: 5 },
    { name: 'Backup & Restore', level: 6 },
    { name: 'Patch Management', level: 5 },
    { name: 'TCP/IP, DNS, DHCP', level: 7 }
  ];

  // Kontaktfunktionen
  const toggleContactCard = () => setShowContactCard(!showContactCard);
  
  const copyContactInfo = () => {
    const contactInfo = `Kevin Kirschke\nHintern Brüdern 26s\n38100 Braunschweig\n01573/3399618\nkevin.kirschke@mail.de`;
    navigator.clipboard.writeText(contactInfo)
      .then(() => alert('Kontaktdaten wurden kopiert!'))
      .catch((error) => console.error('Fehler beim Kopieren:', error));
  };

  // Karussell-Funktionen
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };
  
  useEffect(() => {
  if (experienceRef.current) {
    experienceRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}, [currentSlide]);


  // Klick außerhalb der Kontaktkarte
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contactCardRef.current && !contactCardRef.current.contains(event.target)) {
        setShowContactCard(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className={`portfolio-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <header>
        <div className="header-content">
          <div className="header-text">
            <h1>Kevin Kirschke</h1>
            <p className="subtitle">Fachinformatiker für Anwendungsentwicklung</p>
          </div>
        </div>
        <nav>
          <a href="#about">Über mich</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Werdegang</a>
          <a href="#projects">Projekte</a>
          <a href="#contact">Kontakt</a>
          <button 
            className="theme-toggle nav-theme-toggle"
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? 'Zu Light Mode wechseln' : 'Zu Dark Mode wechseln'}
          >
            <span className="theme-icon">
              {isDarkMode ? '☀️' : '🌙'}
            </span>
            <span className="theme-text">
              {isDarkMode ? 'Light' : 'Dark'}
            </span>
          </button>
        </nav>
      </header>

      {/*   Komponente   */}
      <main>
        <section id="about" className="profile-section">
          <div className="profile-header">

            <div 
              className="profile-image-container" 
              onClick={toggleContactCard} 
              ref={contactCardRef}
            >
              <img
                src="/Portfolio/me1.png"
                alt="Kevin Kirschke"
                className="profile-image"
              />
              {showContactCard && (
                <div className="contact-card">
                  <h3>Kontakt</h3>
                  <p>Hintern Brüdern 26 s</p>
                  <p>38100 Braunschweig</p>
                  <p>01573/3399618</p>
                  <p>kevin.kirschke@mail.de</p>
                  <button onClick={copyContactInfo} className="copy-button">
                    Kopieren
                  </button>
                </div>
              )}
            </div>
            
            <div className="profile-info">
              <h2>Über mich</h2>
              <p className="profile-title">Fachinformatiker für Anwendungsentwicklung | Cyber Security & Systemintegration </p>
              <p className="profile-company">dynexo GmbH, Braunschweig</p>
              <a href="mailto:kevin.kirschke@mail.de" className="profile-email">
                kevin.kirschke@mail.de
              </a>
            </div>
          </div>
          
          <div className="profile-bio">
            <br/>
            <p>
                Ich verbinde über 20 Jahre Berufserfahrung und Führungsverantwortung mit moderner IT-Expertise.  <br/> <br/>
                Nach meiner Ausbildung zum Fachinformatiker für Anwendungsentwicklung 
                sammelte ich praktische Erfahrung in IT-Sicherheit, Systemintegration 
                und Softwareentwicklung.
              </p>
            <br/>
              <p>
                Mein Fokus liegt auf Cyber Security, Netzwerktechnik, Incident Response 
                und der Entwicklung sicherer, effizienter Anwendungen mit React, JavaScript 
                und modernen Automatisierungstools.
              </p>
          </div>
        </section>

        {/*   Sections   */}
        <section id="skills">
          <h2>Meine Skills</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}/10</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level * 10}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="experience-section"ref={experienceRef}>
          <h2>Mein Werdegang</h2>
          <div className="custom-carousel">
            <div className="carousel-content">
              <h3>{carouselItems[currentSlide].title}</h3>
              <div className="carousel-body">
                {carouselItems[currentSlide].content}
              </div>
            </div>
            <div className="carousel-controls">
              <button onClick={prevSlide} className="carousel-button prev">
                &lt;
              </button>
              <div className="carousel-dots">
                {carouselItems.map((_, index) => (
                  <span 
                    key={index} 
                    className={`dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
              <button onClick={nextSlide} className="carousel-button next">
                &gt;
              </button>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>Meine Projekte</h2>
          <div className="projects-grid">
            <div
              className="project-card"
              onClick={() => window.open("https://github.com/KevinKirschke/TimeTracker", "_blank")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && window.open("https://github.com/KevinKirschke/TimeTracker", "_blank")}
            >
              <h3>Time Tracker App</h3>
              <h4>Arbeitszeit und Personalverwaltung</h4>
              <p>
                React-basierte Zeiterfassung mit Berichterstellung und Arbeitszeithistorie.
              </p>
            </div>

            <div
              className="project-card"
              onClick={() => window.open("https://github.com/KevinKirschke/lagerverwaltung", "_blank")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && window.open("https://github.com/KevinKirschke/lagerverwaltung", "_blank")}
            >
              <h3>Lagerverwaltung</h3>
              <h4>Bestellungen und Lagermanagement</h4>
              <p>
                Modulare Web-App zur Bestandsverwaltung mit Filterfunktionen.
              </p>
            </div>

             <div
              className="project-card"
              onClick={() => window.open("https://github.com/KevinKirschke/KevinsPasswortGenerator", "_blank")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && window.open("https://github.com/KevinKirschke/KevinsPasswortGenerator", "_blank")}
            >
              <h3>Passwortgenerator</h3>
              <h4>Passwörter erstellen und verwalten</h4>
              <p>
                Einen Seed in ein 32 Zeichen Passwort mit Hashfunktion erstellen.
              </p>
            </div>

            <div
              className="project-card"
              onClick={() => window.open("https://github.com/KevinKirschke/WingScout24", "_blank")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && window.open("https://github.com/KevinKirschke/WingScout24", "_blank")}
            >
              <h3>WingScout24</h3>
              <h4>Gebrauchtraumschiff Markt</h4>
              <p>
                Kategorienfilter mit Favoriten und Warenkorbverwaltung.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Nach oben scrollen"
        >
          ↑
        </button>
      )}

      <footer id="contact">
        <p>&copy; {new Date().getFullYear()} Kevin Kirschke</p>
        <p>Alle Rechte vorbehalten</p>
        <QRContact isOpen={showQR} onClose={() => setShowQR(false)} />
      </footer>
    </div>
  );
};

export default App;