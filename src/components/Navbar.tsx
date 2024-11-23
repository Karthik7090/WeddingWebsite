import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <span className={`font-greatVibes text-2xl ${
            isScrolled ? 'text-gray-800' : 'text-white'
          }`}>
            A & A
          </span>
          <div className="hidden md:flex space-x-8">
            {['Story', 'Events', 'Gallery', 'RSVP'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-playfair ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                } hover:text-wedding-gold transition-colors duration-300`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;