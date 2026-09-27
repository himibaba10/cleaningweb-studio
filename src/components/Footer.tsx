import { Mail, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className='footer'>
      <div className='container footer__grid'>
        <div className='footer__brand'>
          <a className='brand' href='#top'>
            <Image src='/assets/cleaningweb-studio-logo.webp' alt='CleaningWeb Studio Logo' width={336} height={60} style={{ width: 'auto', height: 'auto' }} />
          </a>
          <p>Readymade, conversion-optimized Elementor websites for cleaning businesses that are tired of looking like a side hustle.</p>
          <div className='contact-info' style={{ marginTop: '1.5rem' }}>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--slate)', fontSize: '0.95rem' }}>
              <Mail size={16} style={{ color: 'var(--mint)' }} />
              <a href='mailto:himibaba10@gmail.com' className='hover-mint'>
                himibaba10@gmail.com
              </a>
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--slate)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
              <MessageCircle size={16} style={{ color: 'var(--mint)' }} />
              <a href='https://wa.me/8801813240904' target='_blank' rel='noreferrer' className='hover-mint'>
                WhatsApp Us
              </a>
            </p>
          </div>
        </div>

        <nav className='footer__col' aria-label='Demos'>
          <h4>Demos</h4>
          <a href='#demos'>Sparkle Theme</a>
          <a href='#demos'>Executive Theme</a>
          <a href='#demos'>Grime Theme</a>
          <a href='#demos'>Compare all themes</a>
        </nav>

        <nav className='footer__col' aria-label='Company'>
          <h4>Company</h4>
          <a href='#features'>Why choose us</a>
          <a href='#process'>Our process</a>
          <a href='#pricing'>Pricing</a>
          <a href='#cta'>Book a call</a>
        </nav>

        <nav className='footer__col' aria-label='Support'>
          <h4>Support</h4>
          <a href='#cta'>Contact</a>
          <a href='#pricing'>Money-back guarantee</a>
          <a href='#features'>Elementor editing guide</a>
          <a href='#cta'>Report an issue</a>
        </nav>
      </div>

      <div className='container footer__base'>
        <p>© {new Date().getFullYear()} CleaningWeb Studio. All rights reserved.</p>
        <p className='footer__credits'>
          Photography by independent creators on{' '}
          <a href='https://www.pexels.com/license/' rel='noopener noreferrer'>
            Pexels
          </a>
          . Demo names and metrics are illustrative.
        </p>
        <div className='footer__legal'>
          <a href='#top'>Privacy</a>
          <a href='#top'>Terms</a>
        </div>
      </div>
    </footer>
  );
}
