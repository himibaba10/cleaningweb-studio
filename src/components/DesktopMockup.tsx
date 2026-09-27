import Image from "next/image";

export function DesktopMockup() {
  return (
    <div className="imac" data-float="0">
      <div className="imac__body">
        <div className="imac__cam"></div>
        <div className="imac__screen">
          <div className="mk mk--hero mk--sparkle">
            <div className="mk__nav">
              <span className="mk__logo">
                <span className="mk__dot"></span>LUMEN CLEAN
              </span>
              <span className="mk__links"><i></i><i></i><i></i><i></i></span>
              <span className="mk__navbtn">Free Quote</span>
            </div>
            <div className="mk__hero">
              <Image
                className="mk__heroimg"
                src="/assets/img/mock-hero-residential.jpg"
                alt="Residential cleaning preview"
                width={1200}
                height={800}
                priority
              />
              <div className="mk__heroin">
                <span className="mk__pill">Trusted by 1,200+ homes</span>
                <h3 className="mk__h1">A spotless home, every single week.</h3>
                <p className="mk__p">Vetted cleaners, flat-rate pricing and a 100% sparkle guarantee.</p>
                <span className="mk__btns">
                  <span className="mk__btn">Book Now</span>
                  <span className="mk__btn mk__btn--o">See Pricing</span>
                </span>
              </div>
            </div>
            <div className="mk__strip">
              <span>4.9 ★ 320 reviews</span>
              <span>Bonded &amp; insured</span>
              <span>Eco products</span>
            </div>
            <div className="mk__grid">
              <div className="mk__card">
                <span className="mk__ico"></span>
                <h4>Weekly Clean</h4>
                <p>Recurring visits from the same trusted cleaner.</p>
              </div>
              <div className="mk__card">
                <span className="mk__ico"></span>
                <h4>Deep Clean</h4>
                <p>Top-to-bottom reset for kitchens and baths.</p>
              </div>
              <div className="mk__card">
                <span className="mk__ico"></span>
                <h4>Move-Out</h4>
                <p>Deposit-back standard, landlord approved.</p>
              </div>
            </div>
            <div className="mk__band">
              <div><b>1,200+</b><span>Homes cleaned</span></div>
              <div><b>4.9/5</b><span>Average rating</span></div>
              <div><b>48h</b><span>First booking</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="imac__chin"></div>
      <div className="imac__neck"></div>
      <div className="imac__foot"></div>
    </div>
  );
}
