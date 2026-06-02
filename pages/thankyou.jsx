import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

export default function ThankYou() {
  useEffect(() => {
    // Fire conversion events
    if (typeof window !== "undefined" && window.fbq) {
      fbq("track", "CompleteRegistration");
    }
    // Push to GTM dataLayer
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "form_submission_success",
        conversion_type: "booking_lead",
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Thank You | Dream Kerala Holidays</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="vh-100 d-flex bg-success justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="border border-3 border-success"></div>
          <div className="card bg-white shadow p-5 m-2">
            <div className="mb-4 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="75"
                height="75"
                fill="currentColor"
                className="bi bi-check-circle text-success"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
              </svg>
            </div>
            <div className="text-center">
              <h1>Thank You!</h1>
              <p>
                Thank you for booking our service! Our executive will contact
                you shortly to confirm the details and assist you with any
                questions.
              </p>
              <p className="text-muted mb-30">
                Average response time: <strong>under 30 minutes</strong>
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Link href="/" className="btn btn-outline-success">
                  Back Home
                </Link>
                <Link href="/destination" className="btn btn-success">
                  Explore More Destinations
                </Link>
              </div>
              <div className="mt-4 pt-3 border-top">
                <p className="text-muted mb-2">Need immediate assistance?</p>
                <a
                  href="https://api.whatsapp.com/send?phone=919567132777&text=Hi%2C%20I%20just%20submitted%20a%20booking%20form.%20Can%20you%20confirm%20my%20request%3F"
                  className="btn btn-outline-dark"
                >
                  <i className="fab fa-whatsapp me-2"></i>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
