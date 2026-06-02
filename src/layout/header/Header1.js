import Link from "next/link";
import Menu from "../Menu";
import { useEffect, useState } from "react";

const Header1 = ({ setShowModal, transparentHeader }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!transparentHeader) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [transparentHeader]);

  const headerClass = transparentHeader
    ? scrolled ? "header-scrolled" : "header-transparent"
    : "header-solid";

  return (
    <header
      className={`header-area sticky header-one ${headerClass}`}
    >
      {/*====== Header Navigation ======*/}
      <div className="header-navigation navigation-white">
        <div className="nav-overlay" />
        <div className="container-fluid">
          <div className="primary-menu">
            {/*====== Site Branding ======*/}
            <div className="site-branding">
              <Link legacyBehavior href="/">
                <a className="brand-logo">
                  <img
                    src={(transparentHeader && !scrolled) ? "/assets/images/logo/logo-white.png" : "/assets/images/logo/logo-black.png"}
                    alt="Dream Kerala Holidays"
                    className="header-logo"
                  />
                </a>
              </Link>
            </div>
            {/*====== Nav Menu ======*/}
            <div className="nav-menu">
              {/*====== Mobile Logo ======*/}
              <div className="mobile-logo mb-30 d-block d-xl-none">
                <Link legacyBehavior href="/">
                  <a className="brand-logo">
                    <img
                      src="/assets/images/logo/logo-black.png"
                      alt="Dream Kerala Holidays"
                    />
                  </a>
                </Link>
              </div>
              {/*====== main Menu ======*/}
              <Menu />
              {/*====== Menu Button ======*/}
              <div className="menu-button mt-40 d-xl-none">
                <Link legacyBehavior href="/contact">
                  <a className="main-btn secondary-btn">
                    Book Now
                    <i className="fas fa-paper-plane" />
                  </a>
                </Link>
              </div>
            </div>
            {/*====== Nav Right Item ======*/}
            <div className="nav-right-item">
              <div className="menu-button d-xl-block d-none">
                <button className="bg-transparent" onClick={() => setShowModal(true)}>
                  <a className="main-btn primary-btn">
                    Book Now
                    <i className="fas fa-paper-plane" />
                  </a>
                </button>
              </div>
              <div className="navbar-toggler">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header1;
