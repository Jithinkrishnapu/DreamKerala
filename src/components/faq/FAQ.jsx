import Head from "next/head";
import { useState } from "react";

const faqData = [
  {
    question: "What tour packages does Dream Kerala Holidays offer?",
    answer:
      "We offer a wide range of packages including backwater houseboat trips, Munnar hill station tours, Wayanad adventure packages, Thekkady wildlife tours, beach holidays, camping, trekking, and customized multi-day Kerala tours.",
  },
  {
    question: "Do you provide airport pickup and drop services?",
    answer:
      "Yes, we provide 24/7 taxi services including Kochi airport pickup and drop. Our office is located near Cochin International Airport in Nedumbassery for quick service.",
  },
  {
    question: "What types of vehicles are available for rent?",
    answer:
      "We have sedans, SUVs, tempo travellers, and mini buses available. We also offer monthly contract vehicles for corporate and personal use with dedicated drivers.",
  },
  {
    question: "How do I book a tour package or taxi?",
    answer:
      "You can book through our website form, call us at +91 95671 32777, or message us on WhatsApp. Our executive will confirm your booking within 30 minutes.",
  },
  {
    question: "Are your drivers experienced with tourist routes?",
    answer:
      "Yes, all our drivers are experienced locals who know Kerala's roads, scenic routes, and tourist spots well. They can also serve as informal guides during your trip.",
  },
  {
    question: "What languages do your drivers speak?",
    answer:
      "Our drivers speak Malayalam, English, Hindi, and Tamil. We also have drivers who can communicate in Arabic for our Middle Eastern guests.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <section className="faq-section pt-100 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">FAQ</span>
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="faq-item mb-20 wow fadeInUp"
                  style={{
                    border: "1px solid #e8e8e8",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    style={{
                      padding: "18px 24px",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background:
                        openIndex === index ? "#f0faf4" : "#fff",
                      transition: "background 0.3s",
                    }}
                  >
                    <h5
                      style={{
                        margin: 0,
                        fontSize: "16px",
                        fontWeight: 500,
                        color: openIndex === index ? "#2d6a4f" : "#333",
                      }}
                    >
                      {item.question}
                    </h5>
                    <i
                      className={`fas fa-chevron-${
                        openIndex === index ? "up" : "down"
                      }`}
                      style={{ color: "#2d6a4f", fontSize: "14px" }}
                    />
                  </div>
                  {openIndex === index && (
                    <div
                      style={{
                        padding: "0 24px 18px",
                        background: "#f0faf4",
                      }}
                    >
                      <p style={{ margin: 0, color: "#555", lineHeight: 1.6 }}>
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
