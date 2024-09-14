import Link from "next/link";
import { Fragment, useState } from "react";
import SearchModal from "./SearchModal";

const Menu = () => {
  return (
    <Fragment>
      <DeskTopMenu />
      <MobileMenu />
    </Fragment>
  );
};
export default Menu;

const DeskTopMenu = () => {
  const [searchModal, setSearchModal] = useState(false);
  return (
    <Fragment>
      <SearchModal
        show={searchModal}
        handleClose={() => setSearchModal(false)}
      />
      <nav className="main-menu d-none d-xl-block">
        <ul>
          <li className="menu-item ">
            <a href="/">Home</a>
          </li>
          <li className="menu-item has-children">
            <a href="#">
              Our Gallery
              <span className="dd-trigger">
                {/* <i className="far fa-angle-down" /> */}
              </span>
            </a>
          </li>
          <li className="menu-item has-children">
            <a href="destination-details">
              Destination
              <span className="dd-trigger">
                {/* <i className="far fa-angle-down" /> */}
              </span>
            </a>
            {/* <ul className="sub-menu">
              <li>
                <Link href="destination">Destination</Link>
              </li>
              <li>
                <Link href="destination-details">Destination Details</Link>
              </li>
            </ul> */}
          </li>
          <li className="menu-item has-children">
            <a href="about">About us</a>
          </li>
          <li className="menu-item has-children">
            <a href="contact">Contact us</a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu d-block d-xl-none">
      <ul>
        <li className="menu-item has-children">
          <a href="#">
            Home
          </a>
        </li>
        <li className="menu-item has-children">
          <a href="#">
            Our Gallery
          </a>
        </li>
        <li className="menu-item has-children">
          <a href="#">
            Destination
          </a>
        </li>
        <li className="menu-item has-children">
          <a href="#">
            About us
          </a>
        </li>
        <li className="menu-item has-children">
          <a href="#">
            Contact us
          </a>
        </li>
        <li className="menu-item search-item">
          <div
            className="search-btn"
            data-bs-toggle="modal"
            data-bs-target="#search-modal"
          >
            <i className="far fa-search" />
          </div>
        </li>
      </ul>
    </nav>
  );
};
