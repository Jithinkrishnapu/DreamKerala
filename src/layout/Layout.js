import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation } from "../utils";
// import Footer from "./Footer";
import Header from "./header/Index";
import Footer from "../components/footer/Footer";
const Layout = ({ header, children, footerBG, noFooter, extraClass,setShowModal }) => {
  useEffect(() => {
    animation();
  }, []);
  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <Header setShowModal={setShowModal} header={header} />
      {children}
      {!noFooter && <Footer/>}
    </Fragment>
  );
};
export default Layout;
