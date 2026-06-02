import { useEffect, useState } from "react";
import ModalComponent from "../modal/ModalComponent";
import Popupform from "../popupform/Popupform";

const ExitIntentPopup = () => {
  const [showExitModal, setShowExitModal] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const alreadyShown = sessionStorage.getItem("exitIntentShown");
    if (alreadyShown) return;

    const handleMouseLeave = (e) => {
      // Only trigger when mouse moves to top of viewport (exit intent)
      if (e.clientY <= 5 && !hasTriggered) {
        setShowExitModal(true);
        setHasTriggered(true);
        sessionStorage.setItem("exitIntentShown", "true");

        // Track with Meta Pixel
        if (typeof window !== "undefined" && window.fbq) {
          fbq("trackCustom", "ExitIntentShown");
        }
      }
    };

    // Only add on desktop (mobile doesn't have mouse leave)
    if (window.innerWidth > 768) {
      // Delay adding the listener so it doesn't fire immediately
      const timer = setTimeout(() => {
        document.addEventListener("mouseleave", handleMouseLeave);
      }, 5000); // Wait 5 seconds before arming

      return () => {
        clearTimeout(timer);
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [hasTriggered]);

  return (
    <ModalComponent showModal={showExitModal} setShowModal={setShowExitModal}>
      <div className="text-center mb-20">
        <h3>Wait! Don't Miss Out</h3>
        <p className="mb-20">
          Get the best Kerala tour packages at unbeatable prices. Fill in your
          details and we'll call you back with a custom quote.
        </p>
      </div>
      <Popupform />
    </ModalComponent>
  );
};

export default ExitIntentPopup;
