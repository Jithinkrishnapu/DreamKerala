import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const heroSlides = [
  {
    video: "/hero.mp4",
    title: "Explore Kerala's\nEnchanting Wonders",
    subtitle: "Backwaters • Hill Stations • Beaches • Wildlife",
    cta: { text: "Plan Your Trip", link: null },
    secondary: { text: "Explore Destinations", link: "/destination" },
  },
  {
    video: "/dream.mp4",
    title: "Your Dream\nHoliday Awaits",
    subtitle: "Tour Packages • Houseboats • Taxi Services • Camping",
    cta: { text: "Book Now", link: null },
    secondary: { text: "View Packages", link: "/destination" },
  },
  {
    video: "/athirapilly.mp4",
    title: "Athirapilly\nThe Niagara of India",
    subtitle: "Waterfalls • Nature Trails • Wildlife • Photography",
    cta: { text: "Plan Your Visit", link: null },
    secondary: { text: "Explore More", link: "/destination" },
  },
  // Add more slides here as needed:
  // {
  //   video: "/another-video.mp4",
  //   title: "Title Here",
  //   subtitle: "Subtitle here",
  //   cta: { text: "Button Text", link: null },
  //   secondary: { text: "Link Text", link: "/page" },
  // },
];

const SLIDE_DURATION = 8000; // 8 seconds per slide

const HeroVideoCarousel = ({ setShowModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef(null);
  const timerRef = useRef(null);

  const goToSlide = (index) => {
    if (index === currentSlide || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 400);
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % heroSlides.length;
    goToSlide(next);
  };

  // Auto-advance slides
  useEffect(() => {
    timerRef.current = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(timerRef.current);
  }, [currentSlide]);

  // Play video when slide changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentSlide]);

  const slide = heroSlides[currentSlide];

  return (
    <section className="modern-hero">
      <video
        ref={videoRef}
        className="modern-hero__video"
        autoPlay
        muted
        loop
        playsInline
        key={slide.video}
      >
        <source src={slide.video} type="video/mp4" />
      </video>
      <div className="modern-hero__overlay" />
      <div
        className="modern-hero__content"
        style={{ opacity: isTransitioning ? 0 : 1, transition: "opacity 0.4s ease" }}
      >
        <h1 className="modern-hero__title">
          {slide.title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < slide.title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="modern-hero__subtitle">{slide.subtitle}</p>
        <div className="modern-hero__cta">
          <button
            onClick={() => setShowModal(true)}
            className="main-btn primary-btn"
            style={{ fontSize: "16px", padding: "14px 36px" }}
          >
            {slide.cta.text} <i className="fas fa-paper-plane" />
          </button>
          <Link
            href={slide.secondary.link}
            className="main-btn secondary-btn"
            style={{ fontSize: "16px", padding: "14px 36px", marginLeft: "12px" }}
          >
            {slide.secondary.text}
          </Link>
        </div>
      </div>

      {/* Slide indicators */}
      {heroSlides.length > 1 && (
        <div className="modern-hero__indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`modern-hero__dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroVideoCarousel;
