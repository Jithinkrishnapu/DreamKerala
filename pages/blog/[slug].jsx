import Layout from "@/src/layout/Layout";
import ModalComponent from "@/src/components/modal/ModalComponent";
import Popupform from "@/src/components/popupform/Popupform";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import blogPosts from "@/src/data/blogPosts.json";

export async function getStaticPaths() {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return { notFound: true };
  }
  return { props: { post } };
}

const BlogPost = ({ post }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout header={1} setShowModal={(val) => setShowModal(val)} extraClass={"pt-160"}>
      <Head>
        <title>{post.title} | Dream Kerala Holidays Blog</title>
        <meta
          name="description"
          content={post.excerpt}
        />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`https://dreamkeralaholidays.com${post.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <link rel="canonical" href={`https://dreamkeralaholidays.com/blog/${post.slug}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              datePublished: post.date,
              image: `https://dreamkeralaholidays.com${post.image}`,
              author: {
                "@type": "Organization",
                name: "Dream Kerala Holidays",
                url: "https://dreamkeralaholidays.com",
              },
              publisher: {
                "@type": "Organization",
                name: "Dream Kerala Holidays",
                url: "https://dreamkeralaholidays.com",
              },
            }),
          }}
        />
      </Head>
      <section className="blog-details-section pt-120 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="mb-3">
                <Link href="/blog" style={{ color: "#2d6a4f" }}>
                  <i className="fas fa-arrow-left me-2"></i> Back to Blog
                </Link>
              </div>
              <span
                style={{
                  background: "#e8f5e9",
                  color: "#2d6a4f",
                  padding: "4px 12px",
                  borderRadius: "4px",
                  fontSize: "13px",
                }}
              >
                {post.category}
              </span>
              <h1 className="mt-3 mb-3">{post.title}</h1>
              <small className="text-muted">Published: {post.date}</small>
              <hr className="my-4" />
              <div
                className="blog-content"
                style={{ lineHeight: 1.8, fontSize: "16px" }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* CTA Section */}
              <div
                className="mt-50 p-4 text-center"
                style={{
                  background: "#f0faf4",
                  borderRadius: "12px",
                }}
              >
                <h4>Ready to Book Your Kerala Trip?</h4>
                <p className="text-muted">
                  Get a customized quote with the best prices. No hidden charges.
                </p>
                <button
                  onClick={() => setShowModal(true)}
                  className="main-btn primary-btn"
                >
                  Get Free Quote <i className="fas fa-paper-plane" />
                </button>
              </div>

              {/* Related Posts */}
              <div className="mt-50">
                <h4 className="mb-30">You May Also Like</h4>
                <div className="row">
                  {blogPosts
                    .filter((p) => p.slug !== post.slug)
                    .slice(0, 2)
                    .map((related, index) => (
                      <div key={index} className="col-md-6 mb-20">
                        <div
                          style={{
                            border: "1px solid #eee",
                            borderRadius: "8px",
                            padding: "16px",
                          }}
                        >
                          <small className="text-muted">{related.category}</small>
                          <h5 className="mt-2" style={{ fontSize: "15px" }}>
                            <Link
                              href={`/blog/${related.slug}`}
                              style={{ color: "#333", textDecoration: "none" }}
                            >
                              {related.title}
                            </Link>
                          </h5>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalComponent showModal={showModal} setShowModal={setShowModal}>
        <Popupform />
      </ModalComponent>
    </Layout>
  );
};

export default BlogPost;
