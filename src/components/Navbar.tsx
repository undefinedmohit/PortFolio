import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Sharpening', href: '#sharpening' },
];

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    closeMobileMenu();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full px-5 sm:px-8 py-4 sm:py-5 flex justify-between items-center bg-transparent backdrop-blur-[2px]">
        {/* Logo (left) */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-[21px] sm:text-[26px] tracking-tight text-black font-normal"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Mohit®
          </a>
          <span
            className="text-[25px] sm:text-[30px] text-black select-none"
            style={{ letterSpacing: '-0.02em' }}
          >
            ✳︎
          </span>
        </div>

        {/* Desktop Nav Links (center) */}
        <nav className="hidden md:flex items-center text-[21px] lg:text-[23px] text-black font-normal">
          {NAV_ITEMS.map((item, idx) => (
            <React.Fragment key={item.label}>
              <button
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="hover:opacity-60 transition-opacity cursor-pointer bg-transparent border-none p-0 text-inherit font-inherit"
              >
                {item.label}
              </button>
              {idx < NAV_ITEMS.length - 1 && <span className="mr-1.5 ml-1.5">,</span>}
            </React.Fragment>
          ))}
        </nav>

        {/* Desktop CTA (right) */}
        <div className="hidden md:flex items-center">
          <button
            type="button"
            onClick={() => handleNavClick('#contact')}
            className="text-[21px] lg:text-[23px] text-black underline underline-offset-2 hover:opacity-60 transition-opacity font-normal cursor-pointer bg-transparent border-none p-0"
          >
            Get in touch
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
          className="md:hidden z-50 flex flex-col justify-center items-center gap-[5px] p-2 cursor-pointer focus:outline-none"
        >
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              isMobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              isMobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden flex flex-col justify-center px-8 gap-8 transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto visible'
            : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => handleNavClick(item.href)}
            className="text-[32px] font-medium text-black hover:opacity-60 transition-opacity text-left bg-transparent border-none p-0 cursor-pointer"
          >
            {item.label}
          </button>
        ))}
        <button
          type="button"
          onClick={() => handleNavClick('#contact')}
          className="text-[32px] font-medium text-black underline underline-offset-2 hover:opacity-60 transition-opacity text-left bg-transparent border-none p-0 cursor-pointer"
        >
          Get in touch
        </button>
      </div>
    </>
  );
};
