import { WHATSAPP_LINK_MOCKUP } from '@/config';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { DesktopMockup } from './DesktopMockup';
import { HeroVisual } from './HeroVisual';
import { PhoneMockup } from './PhoneMockup';

const headlineWords =
  'Turn Website Visitors Into High-Paying Cleaning Clients.'.split(' ');

export function Hero() {
  return (
    <section className='hero' id='top'>
      <div className='container hero__grid'>
        <div className='hero__copy'>
          <a href='#founding-offer' className='chip chip--offer'>
            <span
              className='chip__dot max-sm:hidden'
              style={{ background: 'var(--mint)' }}
            ></span>
            <span className='chip__text'>
              <strong>Founding Client Offer</strong>
              <span>
                Free build for the first 2 clients (just cover $20/mo hosting).
              </span>
            </span>
          </a>

          <h1
            className='hero__title'
            data-split
            style={{ marginTop: '1.5rem' }}
          >
            {headlineWords.map((word, i) => {
              const isHighlight = i >= 4;
              return (
                <React.Fragment key={i}>
                  <span className='w'>
                    <span
                      className={isHighlight ? 'text-gradient' : ''}
                      style={{ '--i': i } as React.CSSProperties}
                    >
                      {word}
                    </span>
                  </span>{' '}
                </React.Fragment>
              );
            })}
          </h1>

          <p className='hero__sub'>
            Stop losing bids to competitors. We provide readymade,
            conversion-optimized{' '}
            <strong className='text-highlight'>WordPress Elementor</strong>{' '}
            templates designed exclusively for cleaning agencies —{' '}
            <strong>launched in 48 hours.</strong>
          </p>

          <div className='hero__cta' style={{ flexWrap: 'wrap', gap: '1rem' }}>
            <a className='btn btn--primary btn--lg' href='#founding-offer'>
              <span className='btn__label'>Claim a Founding Spot</span>
              <ArrowRight className='btn__icon' />
            </a>
            <a
              className='btn btn--ghost btn--lg'
              href={WHATSAPP_LINK_MOCKUP}
              target='_blank'
              rel='noreferrer'
            >
              <span className='btn__label'>Get a free mockup instead</span>
            </a>
          </div>

          <ul className='hero__trust'>
            <li>
              <strong className='count'>48h</strong>
              <span>Average launch time</span>
            </li>
            <li>
              <strong className='count'>3</strong>
              <span>Ready-to-launch themes</span>
            </li>
            <li>
              <strong className='count'>Free</strong>
              <span>Strategy call included</span>
            </li>
          </ul>
        </div>

        <HeroVisual>
          <DesktopMockup />
          <PhoneMockup />

          <div className='float-chip float-chip--a' data-float='2'>
            <div className='fc__icon'>
              <svg
                viewBox='0 0 24 24'
                fill='none'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                stroke='currentColor'
              >
                <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
                <polyline points='22 4 12 14.01 9 11.01' />
              </svg>
            </div>
            <div className='fc__text'>
              <b>New Booking</b>
              <span>Just now</span>
            </div>
          </div>

          <div className='float-chip float-chip--b' data-float='3'>
            <div className='fc__icon'>
              <svg
                viewBox='0 0 24 24'
                fill='none'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                stroke='currentColor'
              >
                <polyline points='23 6 13.5 15.5 8.5 10.5 1 18' />
                <polyline points='17 6 23 6 23 12' />
              </svg>
            </div>
            <div className='fc__text'>
              <b>Conversion Rate</b>
              <span className='fc__green'>+24% this week</span>
            </div>
          </div>
        </HeroVisual>
      </div>
    </section>
  );
}
