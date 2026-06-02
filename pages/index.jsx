import BookingForm from "../src/components/bookingform/BookingForm";
import Features from "../src/components/Features";
import Popupform from "@/src/components/popupform/Popupform";
import TariffComponent from "@/src/components/tariffComponent/TariffComponent";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useLayoutEffect, useState, useTransition } from "react";
import ModalComponent from "@/src/components/modal/ModalComponent";
import PopularServices from "@/src/components/popularServices/PopularServices";
import Footer from "@/src/components/footer/Footer";
import ExitIntentPopup from "@/src/components/exitIntent/ExitIntentPopup";
import Testimonials from "@/src/components/testimonials/Testimonials";
import FAQ from "@/src/components/faq/FAQ";
import HeroVideoCarousel from "@/src/components/heroVideoCarousel/HeroVideoCarousel";
import blogPosts from "@/src/data/blogPosts.json";

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  useLayoutEffect(() => {
    startTransition(async () => {
      try {
        const response = await fetch("/api/destination");
        if (!response.ok) throw new Error("Error fetching data");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    });
  }, [startTransition]);

  return (
    <Layout header={1} setShowModal={(val) => setShowModal(val)} noFooter transparentHeader>
      <Head>
        <title>Dream Kerala Holidays | Tour Packages & Vehicle Rentals in Kerala</title>
        <meta name="description" content="Book Kerala tour packages, houseboat rides, taxi services & vehicle rentals. Explore backwaters, hill stations & beaches with Dream Kerala Holidays, Kochi." />
        <meta property="og:title" content="Dream Kerala Holidays | Tour Packages & Vehicle Rentals" />
        <meta property="og:description" content="Book Kerala tour packages, houseboat rides, taxi services & vehicle rentals. Explore God's Own Country with Dream Kerala Holidays." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://dreamkeralaholidays.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Dream Kerala Holidays",
              "description": "Kerala tour packages, vehicle rentals, taxi services, houseboat bookings, camping and trekking experiences.",
              "url": "https://dreamkeralaholidays.com",
              "telephone": "+919567132777",
              "email": "Dreamkeralaholidays24@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "5C34+W78, Kanjoor-Airport Rd",
                "addressLocality": "Nedumbassery",
                "addressRegion": "Kerala",
                "postalCode": "683111",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 10.154712,
                "longitude": 76.403130
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              },
              "priceRange": "$$"
            })
          }}
        />
      </Head>

      {/*====== Hero - Video Carousel ======*/}
      <HeroVideoCarousel setShowModal={setShowModal} />

      {/*====== Trust Bar ======*/}
      <section className="trust-bar">
        <div className="container">
          <div className="trust-bar__grid">
            <div className="trust-bar__item">
              <span className="trust-bar__number">500+</span>
              <span className="trust-bar__label">Happy Travelers</span>
            </div>
            <div className="trust-bar__item">
              <span className="trust-bar__number">50+</span>
              <span className="trust-bar__label">Destinations Covered</span>
            </div>
            <div className="trust-bar__item">
              <span className="trust-bar__number">24/7</span>
              <span className="trust-bar__label">Support Available</span>
            </div>
            <div className="trust-bar__item">
              <span className="trust-bar__number">99%</span>
              <span className="trust-bar__label">Satisfied Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/*====== What Sets Us Apart ======*/}
      <section className="usp-section">
        <div className="container">
          <div className="section-header">
            <h2>What sets us apart</h2>
            <p>Your trusted travel partner since day one</p>
          </div>
          <div className="usp-grid">
            <div className="usp-card">
              <div className="usp-card__icon">
                <i className="flaticon-helmet" />
              </div>
              <h4>Safety First</h4>
              <p>All vehicles GPS-tracked, verified drivers, and 24/7 road assistance for worry-free travel.</p>
            </div>
            <div className="usp-card">
              <div className="usp-card__icon">
                <i className="flaticon-best-price" />
              </div>
              <h4>Best Price Guarantee</h4>
              <p>Transparent pricing with no hidden charges. We match or beat any comparable quote.</p>
            </div>
            <div className="usp-card">
              <div className="usp-card__icon">
                <i className="flaticon-travel" />
              </div>
              <h4>Local Expertise</h4>
              <p>Our drivers double as guides — they know Kerala's hidden gems, best routes, and local secrets.</p>
            </div>
            <div className="usp-card">
              <div className="usp-card__icon">
                <i className="fas fa-headset" />
              </div>
              <h4>Instant Support</h4>
              <p>WhatsApp, call, or email — get a response within 30 minutes, any time of day.</p>
            </div>
          </div>
        </div>
      </section>

      {/*====== Popular Destinations Grid ======*/}
      <section className="destinations-section">
        <div className="container">
          <div className="section-header">
            <h2>Popular Destinations</h2>
            <Link href="/destination" className="section-header__link">
              View all destinations <i className="far fa-long-arrow-right" />
            </Link>
          </div>
          <div className="destinations-grid">
            {data?.sort(
              (a, b) =>
                a.properties.order?.rich_text[0]?.plain_text -
                b.properties.order?.rich_text[0]?.plain_text
            )?.slice(0, 6)?.map((val, index) => (
              <Link
                key={index}
                href={`/${val?.properties?.slug?.rich_text[0]?.plain_text}`}
                className="destination-card"
              >
                <div className="destination-card__image">
                  <img
                    loading="lazy"
                    src={val?.properties?.images?.files[0]?.file?.url}
                    alt={val?.properties?.Headline?.rich_text[0]?.plain_text}
                  />
                </div>
                <div className="destination-card__info">
                  <h4>{val?.properties?.Headline?.rich_text[0]?.plain_text}</h4>
                  <p>{val?.properties?.Short_Description?.rich_text[0]?.plain_text?.substring(0, 60)}...</p>
                  <span className="destination-card__cta">
                    Explore <i className="far fa-arrow-right" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/*====== Booking Section ======*/}
      <BookingForm />

      {/*====== Services ======*/}
      <PopularServices />

      {/*====== Tariff ======*/}
      <TariffComponent />

      {/*====== Testimonials ======*/}
      <Testimonials />

      {/*====== Blog / Stories Section ======*/}
      <section className="blog-preview-section">
        <div className="container">
          <div className="section-header">
            <h2>Travel Tips & Guides</h2>
            <Link href="/blog" className="section-header__link">
              Read all stories <i className="far fa-long-arrow-right" />
            </Link>
          </div>
          <div className="blog-preview-grid">
            {blogPosts.slice(0, 3).map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`} className="blog-preview-card">
                <div className="blog-preview-card__image">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <span className="blog-preview-card__category">{post.category}</span>
                </div>
                <div className="blog-preview-card__content">
                  <h4>{post.title}</h4>
                  <p>{post.excerpt.substring(0, 90)}...</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/*====== FAQ ======*/}
      <FAQ />

      {/*====== CTA Banner ======*/}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner__content">
            <h2>Ready to explore Kerala?</h2>
            <p>Get a personalized itinerary and quote within 30 minutes</p>
            <div className="cta-banner__buttons">
              <button onClick={() => setShowModal(true)} className="main-btn primary-btn">
                Get Free Quote <i className="fas fa-paper-plane" />
              </button>
              <a href="https://api.whatsapp.com/send?phone=919567132777&text=Hi%2C%20I%27m%20interested%20in%20your%20Kerala%20tour%20packages.%20Please%20share%20details." className="main-btn whatsapp-btn">
                <i className="fab fa-whatsapp" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*====== Floating Contact Buttons ======*/}
      <div className="floating-buttons">
        <a href="tel:+91 95671 32777" onClick={() => { if(typeof window !== 'undefined' && window.fbq) fbq('track', 'Contact'); }}>
          <img src="/assets/images/icon/phone-call.svg" alt="Call Dream Kerala Holidays" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=919567132777&text=Hi%2C%20I%27m%20interested%20in%20your%20Kerala%20tour%20packages.%20Please%20share%20details." onClick={() => { if(typeof window !== 'undefined' && window.fbq) fbq('track', 'Contact'); }}>
          <img src="/assets/images/icon/whatsapp.svg" alt="WhatsApp Dream Kerala Holidays" />
        </a>
      </div>

      {/*====== Modal ======*/}
      <ModalComponent showModal={showModal} setShowModal={setShowModal}>
        <Popupform />
      </ModalComponent>

      <Footer />
      <ExitIntentPopup />
    </Layout>
  );
};
export default Index;
