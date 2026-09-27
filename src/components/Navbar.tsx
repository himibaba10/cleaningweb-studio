'use client';

import Image from 'next/image';
import { useNav } from '../hooks/useNav';

export function Navbar() {
  const { navStuck, mobileMenuOpen, setMobileMenuOpen, activeSection } =
    useNav();

  return (
    <header className={`nav ${navStuck ? 'is-stuck' : ''} py-2`} id='nav'>
      <div className='nav__inner container'>
        <a
          className='w-full max-w-48'
          href='#top'
          aria-label='CleaningWeb Studio, home'
        >
          <Image
            src='/assets/cleaningweb-studio-logo.webp'
            alt='CleaningWeb Studio Logo'
            width={240}
            height={85}
            className='w-full max-w-full'
            priority
          />
        </a>

        <nav className='nav__links' aria-label='Primary'>
          <a
            href='#demos'
            className={activeSection === 'demos' ? 'is-active' : ''}
          >
            Demos
          </a>
          <a
            href='#features'
            className={activeSection === 'features' ? 'is-active' : ''}
          >
            Features
          </a>
          <a
            href='#pricing'
            className={activeSection === 'pricing' ? 'is-active' : ''}
          >
            Pricing
          </a>
          <a
            href='#process'
            className={activeSection === 'process' ? 'is-active' : ''}
          >
            Process
          </a>
        </nav>

        <div className='nav__actions'>
          <a className='btn btn--sweep btn--sm' href='#pricing'>
            <span className='btn__label'>Get Started</span>
          </a>
          <button
            className='nav__burger'
            id='burger'
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className='nav__mobile' id='mobileMenu' hidden={!mobileMenuOpen}>
        <a href='#demos' onClick={() => setMobileMenuOpen(false)}>
          Demos
        </a>
        <a href='#features' onClick={() => setMobileMenuOpen(false)}>
          Features
        </a>
        <a href='#pricing' onClick={() => setMobileMenuOpen(false)}>
          Pricing
        </a>
        <a href='#process' onClick={() => setMobileMenuOpen(false)}>
          Process
        </a>
        <a
          className='btn btn--sweep btn--block'
          href='#pricing'
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className='btn__label'>Get Started</span>
        </a>
      </div>
    </header>
  );
}
