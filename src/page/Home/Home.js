import React from "react";
export default function Home() {
  return (
    <div>
      {/* Spinner Start */}
      {/* <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}
      {/* Spinner End */}
      {/* Navbar & Hero Start */}
      <div className="container-fluid header position-relative overflow-hidden p-0">
        <nav className="navbar navbar-expand-lg fixed-top navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="index.html" className="navbar-brand p-0">
            <h1 className="display-6 text-primary m-0">
              <i className="fas fa-envelope me-3" />
              Mailler
            </h1>
            {/* <img src="img/logo.png" alt="Logo"> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a href="index.html" className="nav-item nav-link active">
                Home
              </a>
              <a href="about.html" className="nav-item nav-link">
                About
              </a>
              <a href="service.html" className="nav-item nav-link">
                Services
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu m-0">
                  <a href="feature.html" className="dropdown-item">
                    Features
                  </a>
                  <a href="pricing.html" className="dropdown-item">
                    Pricing
                  </a>
                  <a href="blog.html" className="dropdown-item">
                    Blog
                  </a>
                  <a href="testimonial.html" className="dropdown-item">
                    Testimonial
                  </a>
                  <a href="404.html" className="dropdown-item">
                    404 Page
                  </a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">
                Contact Us
              </a>
            </div>
            <a
              href="#"
              className="btn btn-light border border-primary rounded-pill text-primary py-2 px-4 me-4"
            >
              Log In
            </a>
            <a
              href="#"
              className="btn btn-primary rounded-pill text-white py-2 px-4"
            >
              Sign Up
            </a>
          </div>
        </nav>
        {/* Hero Header Start */}
        <div className="hero-header overflow-hidden px-5">
          <div className="rotate-img">
            <img src="img/sty-1.png" className="img-fluid w-100" alt />
            <div className="rotate-sty-2" />
          </div>
          <div className="row gy-5 align-items-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
              <h1
                className="display-4 text-dark mb-4 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                Turn Emails into Revenue
              </h1>
              <p className="fs-4 mb-4 wow fadeInUp" data-wow-delay="0.5s">
                Win new customers with the #1 email marketing and automations
                brand* that recommends ways to get more opens, clicks, and
                sales.
              </p>
              <a
                href="#"
                className="btn btn-primary rounded-pill py-3 px-5 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                Get Started
              </a>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
              <img
                src="img/hero-img-1.png"
                className="img-fluid w-100 h-100"
                alt
              />
            </div>
          </div>
        </div>
        {/* Hero Header End */}
      </div>
      {/* Navbar & Hero End */}
      {/* About Start */}
      <div
        className="container-fluid overflow-hidden py-5"
        style={{ marginTop: "6rem" }}
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="RotateMoveLeft">
                <img src="img/about-1.png" className="img-fluid w-100" alt />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h4 className="mb-1 text-primary">About Us</h4>
              <h1 className="display-5 mb-4">
                Get Started Easily With a Personalized Product Tour
              </h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium, suscipit itaque quaerat dicta porro illum, autem,
                molestias ut animi ab aspernatur dolorum officia nam dolore.
                Voluptatibus aliquam earum labore atque.
              </p>
              <a href="#" className="btn btn-primary rounded-pill py-3 px-5">
                About More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Service Start */}
      <div className="container-fluid service py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 900 }}
          >
            <h4 className="mb-1 text-primary">Our Service</h4>
            <h1 className="display-5 mb-4">What We Can Do For You</h1>
            <p className="mb-0">
              Dolor sit amet consectetur, adipisicing elit. Ipsam, beatae
              maxime. Vel animi eveniet doloremque reiciendis soluta iste
              provident non rerum illum perferendis earum est architecto dolores
              vitae quia vero quod incidunt culpa corporis, porro doloribus.
              Voluptates nemo doloremque cum.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item text-center rounded p-4">
                <div className="service-icon d-inline-block bg-light rounded p-4 mb-4">
                  <i className="fas fa-mail-bulk fa-5x text-secondary" />
                </div>
                <div className="service-content">
                  <h4 className="mb-4">Email Newsletters</h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.consectetur adipisicing elit
                  </p>
                  <a
                    href="#"
                    className="btn btn-light rounded-pill text-primary py-2 px-4"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item text-center rounded p-4">
                <div className="service-icon d-inline-block bg-light rounded p-4 mb-4">
                  <i className="fas fa-thumbs-up fa-5x text-secondary" />
                </div>
                <div className="service-content">
                  <h4 className="mb-4">Acquistion Emails </h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.consectetur adipisicing elit
                  </p>
                  <a
                    href="#"
                    className="btn btn-light rounded-pill text-primary py-2 px-4"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item text-center rounded p-4">
                <div className="service-icon d-inline-block bg-light rounded p-4 mb-4">
                  <i className="fa fa-subway fa-5x text-secondary" />
                </div>
                <div className="service-content">
                  <h4 className="mb-4">Retention Emails</h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.consectetur adipisicing elit
                  </p>
                  <a
                    href="#"
                    className="btn btn-light rounded-pill text-primary py-2 px-4"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item text-center rounded p-4">
                <div className="service-icon d-inline-block bg-light rounded p-4 mb-4">
                  <i className="fas fa-sitemap fa-5x text-secondary" />
                </div>
                <div className="service-content">
                  <h4 className="mb-4">Promotional Emails</h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.consectetur adipisicing elit
                  </p>
                  <a
                    href="#"
                    className="btn btn-light rounded-pill text-primary py-2 px-4"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item text-center rounded p-4">
                <div className="service-icon d-inline-block bg-light rounded p-4 mb-4">
                  <i className="fas fa-mail-bulk fa-5x text-secondary" />
                </div>
                <div className="service-content">
                  <h4 className="mb-4">Email Newsletters</h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.consectetur adipisicing elit
                  </p>
                  <a
                    href="#"
                    className="btn btn-light rounded-pill text-primary py-2 px-4"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item text-center rounded p-4">
                <div className="service-icon d-inline-block bg-light rounded p-4 mb-4">
                  <i className="fas fa-thumbs-up fa-5x text-secondary" />
                </div>
                <div className="service-content">
                  <h4 className="mb-4">Acquistion Emails </h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.consectetur adipisicing elit
                  </p>
                  <a
                    href="#"
                    className="btn btn-light rounded-pill text-primary py-2 px-4"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item text-center rounded p-4">
                <div className="service-icon d-inline-block bg-light rounded p-4 mb-4">
                  <i className="fa fa-subway fa-5x text-secondary" />
                </div>
                <div className="service-content">
                  <h4 className="mb-4">Retention Emails</h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.consectetur adipisicing elit
                  </p>
                  <a
                    href="#"
                    className="btn btn-light rounded-pill text-primary py-2 px-4"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item text-center rounded p-4">
                <div className="service-icon d-inline-block bg-light rounded p-4 mb-4">
                  <i className="fas fa-sitemap fa-5x text-secondary" />
                </div>
                <div className="service-content">
                  <h4 className="mb-4">Promotional Emails</h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.consectetur adipisicing elit
                  </p>
                  <a
                    href="#"
                    className="btn btn-light rounded-pill text-primary py-2 px-4"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
      {/* Feature Start */}
      <div className="container-fluid feature overflow-hidden py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 900 }}
          >
            <h4 className="text-primary">Our Feature</h4>
            <h1 className="display-5 mb-4">
              Important Features For Email Marketing
            </h1>
            <p className="mb-0">
              Dolor sit amet consectetur, adipisicing elit. Ipsam, beatae
              maxime. Vel animi eveniet doloremque reiciendis soluta iste
              provident non rerum illum perferendis earum est architecto dolores
              vitae quia vero quod incidunt culpa corporis, porro doloribus.
              Voluptates nemo doloremque cum.
            </p>
          </div>
          <div className="row g-4 justify-content-center text-center mb-5">
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="text-center p-4">
                <div className="d-inline-block rounded bg-light p-4 mb-4">
                  <i className="fas fa-envelope fa-5x text-secondary" />
                </div>
                <div className="feature-content">
                  <a href="#" className="h4">
                    Email Marketing <i className="fa fa-long-arrow-alt-right" />
                  </a>
                  <p className="mt-4 mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.consectetur adipisicing elit
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="text-center p-4">
                <div className="d-inline-block rounded bg-light p-4 mb-4">
                  <i className="fas fa-mail-bulk fa-5x text-secondary" />
                </div>
                <div className="feature-content">
                  <a href="#" className="h4">
                    Email Builder <i className="fa fa-long-arrow-alt-right" />
                  </a>
                  <p className="mt-4 mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.consectetur adipisicing elit
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="text-center rounded p-4">
                <div className="d-inline-block rounded bg-light p-4 mb-4">
                  <i className="fas fa-sitemap fa-5x text-secondary" />
                </div>
                <div className="feature-content">
                  <a href="#" className="h4">
                    Customer Builder{" "}
                    <i className="fa fa-long-arrow-alt-right" />
                  </a>
                  <p className="mt-4 mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.consectetur adipisicing elit
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="text-center rounded p-4">
                <div className="d-inline-block rounded bg-light p-4 mb-4">
                  <i className="fas fa-tasks fa-5x text-secondary" />
                </div>
                <div className="feature-content">
                  <a href="#" className="h4">
                    Campaign Manager{" "}
                    <i className="fa fa-long-arrow-alt-right" />
                  </a>
                  <p className="mt-4 mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.consectetur adipisicing elit
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
              <div className="my-3">
                <a
                  href="#"
                  className="btn btn-primary d-inline rounded-pill px-5 py-3"
                >
                  More Features
                </a>
              </div>
            </div>
          </div>
          <div className="row g-5 pt-5" style={{ marginTop: "6rem" }}>
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
              <div
                className="feature-img RotateMoveLeft h-100"
                style={{ objectFit: "cover" }}
              >
                <img
                  src="img/features-1.png"
                  className="img-fluid w-100 h-100"
                  alt
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.1s">
              <h4 className="text-primary">Fearutes</h4>
              <h1 className="display-5 mb-4">
                Push Your Visitors Into Happy Customers
              </h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium, suscipit itaque quaerat dicta porro illum, autem,
                molestias ut animi ab aspernatur dolorum officia nam dolore.
                Voluptatibus aliquam earum labore atque.
              </p>
              <div className="row g-4">
                <div className="col-6">
                  <div className="d-flex">
                    <i className="fas fa-newspaper fa-4x text-secondary" />
                    <div className="d-flex flex-column ms-3">
                      <h2 className="mb-0 fw-bold">285</h2>
                      <small className="text-dark">Created Projects</small>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex">
                    <i className="fas fa-users fa-4x text-secondary" />
                    <div className="d-flex flex-column ms-3">
                      <h2 className="mb-0 fw-bold">6560</h2>
                      <small className="text-dark">Happy Clients</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-4">
                <a href="#" className="btn btn-primary rounded-pill py-3 px-5">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}
      {/* FAQ Start */}
      <div className="container-fluid FAQ bg-light overflow-hidden py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item border-0 mb-4">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button rounded-top"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseTOne"
                    >
                      Why did you choose Our Email Services?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body my-2">
                      <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ad nemo impedit, sapiente quis illo quia nulla atque
                        maxime fuga minima ipsa quae cum consequatur, sit,
                        delectus exercitationem odit officiis maiores! Neque,
                        quidem corrupti modi architecto eos saepe incidunt
                        dignissimos rerum.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dicta distinctio hic fuga odio excepturi ducimus sequi
                        at. Doloribus, non aspernatur.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-4">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed rounded-top"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Are there any hidden charges?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body my-2">
                      <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ad nemo impedit, sapiente quis illo quia nulla atque
                        maxime fuga minima ipsa quae cum consequatur, sit,
                        delectus exercitationem odit officiis maiores! Neque,
                        quidem corrupti modi architecto eos saepe incidunt
                        dignissimos rerum.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dicta distinctio hic fuga odio excepturi ducimus sequi
                        at. Doloribus, non aspernatur.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed rounded-top"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What are the key challenges of email marketing?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body my-2">
                      <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ad nemo impedit, sapiente quis illo quia nulla atque
                        maxime fuga minima ipsa quae cum consequatur, sit,
                        delectus exercitationem odit officiis maiores! Neque,
                        quidem corrupti modi architecto eos saepe incidunt
                        dignissimos rerum.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dicta distinctio hic fuga odio excepturi ducimus sequi
                        at. Doloribus, non aspernatur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
              <div className="FAQ-img RotateMoveRight rounded">
                <img src="img/about-1.png" className="img-fluid w-100" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ End */}
      {/* Pricing Start */}
      <div className="container-fluid price py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 900 }}
          >
            <h4 className="text-primary">Pricing Plan</h4>
            <h1 className="display-5 mb-4">Not Sure Which Plan Is For You?</h1>
            <p className="mb-0">
              Dolor sit amet consectetur, adipisicing elit. Ipsam, beatae
              maxime. Vel animi eveniet doloremque reiciendis soluta iste
              provident non rerum illum perferendis earum est architecto dolores
              vitae quia vero quod incidunt culpa corporis, porro doloribus.
              Voluptates nemo doloremque cum.
            </p>
          </div>
          <div className="row g-5 justify-content-center">
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="price-item bg-light rounded text-center">
                <div
                  className="text-center text-dark border-bottom d-flex flex-column justify-content-center p-4"
                  style={{ width: "100%", height: 160 }}
                >
                  <p className="fs-2 fw-bold text-uppercase mb-0">BASIC</p>
                  <div className="d-flex justify-content-center">
                    <strong className="align-self-start">$</strong>
                    <p className="mb-0">
                      <span className="display-5">00</span>/mo
                    </p>
                  </div>
                </div>
                <div className="text-start p-5">
                  <p>
                    <i className="fas fa-check text-success me-1" /> Limited
                    Acess Library
                  </p>
                  <p>
                    <i className="fas fa-check text-success me-1" /> Customer
                    Support
                  </p>
                  <p>
                    <i className="fas fa-check text-success me-1" /> Pre-built
                    Email Templates
                  </p>
                  <p>
                    <i className="fas fa-check text-success me-1" /> Reporting
                    &amp; Analytics
                  </p>
                  <p>
                    <i className="fas fa-check text-success me-1" /> Forms &amp;
                    Landing Pages
                  </p>
                  <p>
                    <i className="fas fa-check text-success me-1" /> A/B Testing
                  </p>
                  <p>
                    <i className="fas fa-check text-success me-1" /> Email
                    Scheduling
                  </p>
                  <p>
                    <i className="fas fa-check text-success me-1" /> Automated
                    Customer Journeys
                  </p>
                  <p>
                    <i className="fas fa-times text-danger me-1" /> Creative
                    Assistant
                  </p>
                  <p className="mb-4">
                    <i className="fas fa-times text-danger me-1" /> Role-based
                    Access
                  </p>
                  <button
                    className="btn btn-light rounded-pill py-2 px-5"
                    type="button"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="price-item bg-light rounded text-center">
                <div className="pice-item-offer">Popular</div>
                <div
                  className="text-center text-primary border-bottom d-flex flex-column justify-content-center p-4"
                  style={{ width: "100%", height: 160 }}
                >
                  <p className="fs-2 fw-bold text-uppercase mb-0">Standard</p>
                  <div className="d-flex justify-content-center">
                    <strong className="align-self-start">$</strong>
                    <p className="mb-0">
                      <span className="display-5">23</span>/mo
                    </p>
                  </div>
                </div>
                <div className="text-start p-5">
                  <p>
                    <i className="fas fa-check text-success me-1" /> Limited
                    Acess Library
                  </p>
                  <p>
                    <i className="fas fa-check text-success me-1" /> Customer
                    Support
                  </p>
                  <p>
                    <i className="fas fa-check text-success me-1" /> Pre-built
                    Email Templates
                  </p>
                  <p>
                    <i className="fas fa-check text-success me-1" /> Reporting
                    &amp; Analytics
                  </p>
                  <p>
                    <i className="fas fa-check text-success me-1" /> Forms &amp;
                    Landing Pages
                  </p>
                  <p>
                    <i className="fas fa-check text-success me-1" /> A/B Testing
                  </p>
                  <p>
                    <i className="fas fa-check text-success me-1" /> Email
                    Scheduling
                  </p>
                  <p>
                    <i className="fas fa-check text-success me-1" /> Automated
                    Customer Journeys
                  </p>
                  <p>
                    <i className="fas fa-times text-danger me-1" /> Creative
                    Assistant
                  </p>
                  <p className="mb-4">
                    <i className="fas fa-times text-danger me-1" /> Role-based
                    Access
                  </p>
                  <button
                    className="btn btn-light rounded-pill py-2 px-5"
                    type="button"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="price-item bg-light rounded text-center">
                <div
                  className="text-center text-secondary border-bottom d-flex flex-column justify-content-center p-4"
                  style={{ width: "100%", height: 160 }}
                >
                  <p className="fs-2 fw-bold text-uppercase mb-0">Premium</p>
                  <div className="d-flex justify-content-center">
                    <strong className="align-self-start">$</strong>
                    <p className="mb-0">
                      <span className="display-5">49</span>/mo
                    </p>
                  </div>
                </div>
                <div className="text-start p-5">
                  <p>
                    <i className="fas fa-check text-success me-1" /> Limited
                    Acess Library
                  </p>
                  <p>
                    <i className="fas fa-check text-success me-1" /> Customer
                    Support
                  </p>
                  <p>
                    <i className="fas fa-check text-success me-1" /> Pre-built
                    Email Templates
                  </p>
                  <p>
                    <i className="fas fa-check text-success me-1" /> Reporting
                    &amp; Analytics
                  </p>
                  <p>
                    <i className="fas fa-check text-success me-1" /> Forms &amp;
                    Landing Pages
                  </p>
                  <p>
                    <i className="fas fa-check text-success me-1" /> A/B Testing
                  </p>
                  <p>
                    <i className="fas fa-check text-success me-1" /> Email
                    Scheduling
                  </p>
                  <p>
                    <i className="fas fa-check text-success me-1" /> Automated
                    Customer Journeys
                  </p>
                  <p>
                    <i className="fas fa-times text-danger me-1" /> Creative
                    Assistant
                  </p>
                  <p className="mb-4">
                    <i className="fas fa-times text-danger me-1" /> Role-based
                    Access
                  </p>
                  <button
                    className="btn btn-light rounded-pill py-2 px-5"
                    type="button"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing End */}
      {/* Blog Start */}
      <div className="container-fluid blog py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 900 }}
          >
            <h4 className="text-primary">Our Blog</h4>
            <h1 className="display-5 mb-4">Join Us For New Blog</h1>
            <p className="mb-0">
              Dolor sit amet consectetur, adipisicing elit. Ipsam, beatae
              maxime. Vel animi eveniet doloremque reiciendis soluta iste
              provident non rerum illum perferendis earum est architecto dolores
              vitae quia vero quod incidunt culpa corporis, porro doloribus.
              Voluptates nemo doloremque cum.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="blog-item">
                <div className="blog-img">
                  <img src="img/blog-1.png" className="img-fluid w-100" alt />
                  <div className="blog-info">
                    <span>
                      <i className="fa fa-clock" /> Dec 01.2024
                    </span>
                    <div className="d-flex">
                      <span className="me-3">
                        {" "}
                        3 <i className="fa fa-heart" />
                      </span>
                      <a href="#" className="text-white">
                        0 <i className="fa fa-comment" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="blog-content text-dark border p-4 ">
                  <h5 className="mb-4">
                    Dolor, sit amet consectetur adipisicing
                  </h5>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectur adip sed eiusmod amet
                    consectur adip.
                  </p>
                  <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="blog-item">
                <div className="blog-img">
                  <img src="img/blog-2.png" className="img-fluid w-100" alt />
                  <div className="blog-info">
                    <span>
                      <i className="fa fa-clock" /> Dec 01.2024
                    </span>
                    <div className="d-flex">
                      <span className="me-3">
                        {" "}
                        3 <i className="fa fa-heart" />
                      </span>
                      <a href="#" className="text-white">
                        0 <i className="fa fa-comment" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="blog-content text-dark border p-4 ">
                  <h5 className="mb-4">
                    Dolor, sit amet consectetur adipisicing
                  </h5>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectur adip sed eiusmod amet
                    consectur adip.
                  </p>
                  <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="blog-item">
                <div className="blog-img">
                  <img src="img/blog-3.png" className="img-fluid w-100" alt />
                  <div className="blog-info">
                    <span>
                      <i className="fa fa-clock" /> Dec 01.2024
                    </span>
                    <div className="d-flex">
                      <span className="me-3">
                        {" "}
                        3 <i className="fa fa-heart" />
                      </span>
                      <a href="#" className="text-white">
                        0 <i className="fa fa-comment" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="blog-content text-dark border p-4 ">
                  <h5 className="mb-4">
                    Dolor, sit amet consectetur adipisicing
                  </h5>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectur adip sed eiusmod amet
                    consectur adip.
                  </p>
                  <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="blog-item">
                <div className="blog-img">
                  <img src="img/blog-4.png" className="img-fluid w-100" alt />
                  <div className="blog-info">
                    <span>
                      <i className="fa fa-clock" /> Dec 01.2024
                    </span>
                    <div className="d-flex">
                      <span className="me-3">
                        {" "}
                        3 <i className="fa fa-heart" />
                      </span>
                      <a href="#" className="text-white">
                        0 <i className="fa fa-comment" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="blog-content text-dark border p-4 ">
                  <h5 className="mb-4">
                    Dolor, sit amet consectetur adipisicing
                  </h5>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectur adip sed eiusmod amet
                    consectur adip.
                  </p>
                  <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog End */}
      {/* Testimonial Start */}
      <div className="container-fluid testimonial py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 900 }}
          >
            <h4 className="text-primary">Testimonial</h4>
            <h1 className="display-5 mb-4">What Our Client Say About Us</h1>
            <p className="mb-0">
              Dolor sit amet consectetur, adipisicing elit. Ipsam, beatae
              maxime. Vel animi eveniet doloremque reiciendis soluta iste
              provident non rerum illum perferendis earum est architecto dolores
              vitae quia vero quod incidunt culpa corporis, porro doloribus.
              Voluptates nemo doloremque cum.
            </p>
          </div>
          <div
            className="testimonial-carousel owl-carousel wow zoomInDown"
            data-wow-delay="0.2s"
          >
            <div
              className="testimonial-item"
              data-dot="<img class='img-fluid' src='img/testimonial-img-1.jpg' alt=''>"
            >
              <div className="testimonial-inner text-center p-5">
                <div className="d-flex align-items-center justify-content-center mb-4">
                  <div
                    className="testimonial-inner-img border border-primary border-3 me-4"
                    style={{ width: 100, height: 100, borderRadius: "50%" }}
                  >
                    <img
                      src="img/testimonial-img-1.jpg"
                      className="img-fluid rounded-circle"
                      alt
                    />
                  </div>
                  <div>
                    <h5 className="mb-2">John Abraham</h5>
                    <p className="mb-0">New York, USA</p>
                  </div>
                </div>
                <p className="fs-7">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Asperiores nemo facilis tempora esse explicabo sed!
                  Dignissimos quia ullam pariatur blanditiis sed voluptatum.
                  Totam aut quidem laudantium tempora. Minima, saepe earum!
                </p>
                <div className="text-center">
                  <div className="d-flex justify-content-center">
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="testimonial-item"
              data-dot="<img class='img-fluid' src='img/testimonial-img-2.jpg' alt=''>"
            >
              <div className="testimonial-inner text-center p-5">
                <div className="d-flex align-items-center justify-content-center mb-4">
                  <div
                    className="testimonial-inner-img border border-primary border-3 me-4"
                    style={{ width: 100, height: 100, borderRadius: "50%" }}
                  >
                    <img
                      src="img/testimonial-img-2.jpg"
                      className="img-fluid rounded-circle"
                      alt
                    />
                  </div>
                  <div>
                    <h5 className="mb-2">John Abraham</h5>
                    <p className="mb-0">New York, USA</p>
                  </div>
                </div>
                <p className="fs-7">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Asperiores nemo facilis tempora esse explicabo sed!
                  Dignissimos quia ullam pariatur blanditiis sed voluptatum.
                  Totam aut quidem laudantium tempora. Minima, saepe earum!
                </p>
                <div className="text-center">
                  <div className="d-flex justify-content-center">
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="testimonial-item"
              data-dot="<img class='img-fluid' src='img/testimonial-img-3.jpg' alt=''>"
            >
              <div className="testimonial-inner text-center p-5">
                <div className="d-flex align-items-center justify-content-center mb-4">
                  <div
                    className="testimonial-inner-img border border-primary border-3 me-4"
                    style={{ width: 100, height: 100, borderRadius: "50%" }}
                  >
                    <img
                      src="img/testimonial-img-3.jpg"
                      className="img-fluid rounded-circle"
                      alt
                    />
                  </div>
                  <div>
                    <h5 className="mb-2">John Abraham</h5>
                    <p className="mb-0">New York, USA</p>
                  </div>
                </div>
                <p className="fs-7">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Asperiores nemo facilis tempora esse explicabo sed!
                  Dignissimos quia ullam pariatur blanditiis sed voluptatum.
                  Totam aut quidem laudantium tempora. Minima, saepe earum!
                </p>
                <div className="text-center">
                  <div className="d-flex justify-content-center">
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
      {/* Footer Start */}
      <div
        className="container-fluid footer py-5 wow fadeIn"
        data-wow-delay="0.2s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-dark mb-4">Company</h4>
                <a href> Why Mailler?</a>
                <a href> Our Features</a>
                <a href> Our Portfolio</a>
                <a href> About Us</a>
                <a href> Our Blog &amp; News</a>
                <a href> Get In Touch</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-dark">Quick Links</h4>
                <a href> About Us</a>
                <a href> Contact Us</a>
                <a href> Privacy Policy</a>
                <a href> Terms &amp; Conditions</a>
                <a href> Our Blog &amp; News</a>
                <a href> Our Team</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-dark">Services</h4>
                <a href> All Services</a>
                <a href> Promotional Emails</a>
                <a href> Product Updates</a>
                <a href> Email Marketing</a>
                <a href> Acquistion Emails</a>
                <a href> Retention Emails</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-dark">Contact Info</h4>
                <a href>
                  <i className="fa fa-map-marker-alt me-2" /> 123 Street, New
                  York, USA
                </a>
                <a href>
                  <i className="fas fa-envelope me-2" /> info@example.com
                </a>
                <a href>
                  <i className="fas fa-phone me-2" /> +012 345 67890
                </a>
                <a href className="mb-3">
                  <i className="fas fa-print me-2" /> +012 345 67890
                </a>
                <div className="d-flex align-items-center">
                  <i className="fas fa-share fa-2x text-secondary me-2" />
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Copyright Start */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-white">
                <a href="#">
                  <i className="fas fa-copyright text-light me-2" />
                  Your Site Name
                </a>
                , All right reserved.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end text-white">
              {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
              {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
              {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
              Designed By{" "}
              <a className="border-bottom" href="https://htmlcodex.com">
                HTML Codex
              </a>{" "}
              Distributed By{" "}
              <a className="border-bottom" href="https://themewagon.com">
                ThemeWagon
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-primary btn-lg-square back-to-top">
        <i className="fa fa-arrow-up" />
      </a>
    </div>
  );
}
