import { HandCoins, MousePointerClick, Rocket, Smartphone } from 'lucide-react';

export function Features() {
  return (
    <section className='section features' id='features'>
      <div className='container'>
        <div className='sec-head sec-head--center'>
          <span className='eyebrow'>Why Choose Us</span>
          <h2 className='sec-title'>
            Everything handled. <span className='text-gradient'>Nothing to babysit.</span>
          </h2>
          <p className='sec-sub'>You run the cleaning business. We handle the site that keeps the phone ringing.</p>
        </div>

        <div className='bento'>
          <article className='bento__card bento__card--wide'>
            <div className='bento__head'>
              <span className='bento__icon'>
                <HandCoins />
              </span>
              <h3>Built for Lead Generation</h3>
            </div>
            <p>
              Every section answers the question a homeowner is silently asking — <em>can I trust these people in my house?</em> Quote forms, click-to-call and instant pricing are never more than one
              scroll away.
            </p>
            <div className='leadflow' aria-hidden='true'>
              <div className='leadflow__step'>
                <span>Visitor</span>
              </div>
              <div className='leadflow__step'>
                <span>Quote form</span>
              </div>
              <div className='leadflow__step leadflow__step--win'>
                <span>Booked job</span>
              </div>
              <span className='leadflow__wire'></span>
            </div>
          </article>

          <article className='bento__card'>
            <div className='bento__head'>
              <span className='bento__icon'>
                <Smartphone />
              </span>
              <h3>100% Mobile Perfect</h3>
            </div>
            <p>Roughly 7 in 10 local service searches happen on a phone. Tap targets, load speed and thumb-reach are tuned for it.</p>
            <div className='miniphone' aria-hidden='true'>
              <div className='miniphone__bar'></div>
              <div className='miniphone__block'></div>
              <div className='miniphone__line'></div>
              <div className='miniphone__line miniphone__line--short'></div>
              <div className='miniphone__btn'></div>
            </div>
          </article>

          <article className='bento__card'>
            <div className='bento__head'>
              <span className='bento__icon'>
                <Rocket />
              </span>
              <h3>Done-For-You Launch</h3>
            </div>
            <p>Send us your logo, colours and price list. We write the copy, compress the images, wire up the forms and point your domain.</p>
            <div className='launchbar' aria-hidden='true'>
              <span style={{ transform: 'scaleX(1)' }}></span>
            </div>
          </article>

          <article className='bento__card bento__card--wide'>
            <div className='bento__head'>
              <span className='bento__icon'>
                <MousePointerClick />
              </span>
              <h3>
                Easily Editable via <strong className='text-highlight'>WordPress Elementor</strong>
              </h3>
            </div>
            <p>
              No developer, no ticket queue. Drag a section, swap a photo, change a price — the whole site is native <strong className='text-highlight'>WordPress Elementor</strong> blocks you can edit
              yourself in minutes.
            </p>
            <div className='dnd' aria-hidden='true'>
              <div className='dnd__palette'>
                <span className='dnd__chip' data-dnd></span>
                <span className='dnd__chip'></span>
                <span className='dnd__chip'></span>
              </div>
              <div className='dnd__canvas'>
                <div className='dnd__slot'></div>
                <div className='dnd__slot dnd__slot--active'></div>
                <div className='dnd__slot'></div>
              </div>
              <span className='dnd__cursor'>
                <MousePointerClick />
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
