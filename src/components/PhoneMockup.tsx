import Image from "next/image";

export function PhoneMockup() {
  return (
    <div className="iphone" data-float="1">
      <div className="iphone__screen">
        <div className="mk mk--phone mk--sparkle">
          <div className="mk__hero mk__hero--tall">
            <Image
              className="mk__heroimg"
              src="/assets/img/mock-hero-phone.jpg"
              alt="Mobile cleaning preview"
              width={640}
              height={1100}
            />
            <div className="mk__heroin">
              <span className="mk__pill">Now booking</span>
              <h3 className="mk__h1">Get a quote in 60 seconds.</h3>
              <span className="mk__btn">Book Now</span>
            </div>
          </div>
          <div className="mk__stack">
            <div className="mk__card">
              <span className="mk__ico"></span>
              <h4>Weekly Clean</h4>
              <p>Same cleaner, every visit.</p>
            </div>
            <div className="mk__card">
              <span className="mk__ico"></span>
              <h4>Deep Clean</h4>
              <p>Kitchen &amp; bath reset.</p>
            </div>
          </div>
          <div className="mk__foot">
            <span className="mk__dot"></span>LUMEN CLEAN
          </div>
        </div>
      </div>
    </div>
  );
}
