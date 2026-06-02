import Layout from "@/src/layout/Layout";
import ModalComponent from "@/src/components/modal/ModalComponent";
import Popupform from "@/src/components/popupform/Popupform";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import blogPosts from "@/src/data/blogPosts.json";

const Blog = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout header={1} setShowModal={(val) => setShowModal(val)} extraClass={"pt-160"}>
      <Head>
        <title>Kerala Travel Blog | Dream Kerala Holidays - Tips & Guides</title>
        <meta
          name="description"
          content="Read Kerala travel guides, tips, itineraries, and destination insights. Plan your perfect Kerala trip with expert advice from Dream Kerala Holidays."
        />
        <meta property="og:title" content="Kerala Travel Blog | Dream Kerala Holidays" />
        <meta property="og:type" content="website" />
      </Head>
      <section className="blog-section pt-120 pb-80">
        <div className="container">
          <div className="section-title text-center mb-50">
            <span className="sub-title">Our Blog</span>
            <h2>Kerala Travel Tips & Guides</h2>
            <p className="mt-3">
              Expert advice and insider tips to help you plan your dream Kerala
              vacation.
            </p>
          </div>
          <div className="row">
            {blogPosts.map((post, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-40">
                <div
                  className="blog-card wow fadeInUp"
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      height: "200px",
                      background: "#e8f5e9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML = `<span style="background:#2d6a4f;color:#fff;padding:6px 14px;border-radius:4px;font-size:13px;">${post.category}</span>`;
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        background: "#2d6a4f",
                        color: "#fff",
                        padding: "4px 12px",
                        borderRadius: "4px",
                        fontSize: "12px",
                      }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <div
                    style={{
                      padding: "24px",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <small className="text-muted">{post.date}</small>
                    <h4 className="mt-2 mb-3" style={{ fontSize: "18px" }}>
                      <Link
                        href={`/blog/${post.slug}`}
                        style={{ color: "#333", textDecoration: "none" }}
                      >
                        {post.title}
                      </Link>
                    </h4>
                    <p className="text-muted" style={{ flex: 1 }}>
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="btn-link"
                      style={{ color: "#2d6a4f", fontWeight: 500 }}
                    >
                      Read More <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ModalComponent showModal={showModal} setShowModal={setShowModal}>
        <Popupform />
      </ModalComponent>
    </Layout>
  );
};

export default Blog;
