import React, { useEffect, useState } from 'react';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-[1000] glass-effect rounded-full px-8 py-4 transition-all duration-300 hover:transform hover:-translate-x-1/2 hover:-translate-y-1 shadow-glow ${
        scrolled ? 'bg-white bg-opacity-95' : ''
      }`}
    >
      <div className="flex items-center gap-8">
        <div className="text-white font-black text-lg mr-5">NK</div>
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => scrollToSection(item.href)}
                className="text-white font-medium text-sm transition-all duration-300 px-4 py-2 rounded-full hover:bg-white hover:bg-opacity-20 hover:transform hover:-translate-y-1"
                data-interactive
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};