import React, { useEffect, useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
export default function Home() {
  const history = useHistory();

  const [showReload, setShowReload] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };
  
    const loadScripts = async () => {
      try {
        await loadScript("https://template-user-lime.vercel.app/js/main.min.js");
        await loadScript("https://template-user-lime.vercel.app/js/script.js");
        await loadScript("https://template-user-lime.vercel.app/js/date-time.js");
        await loadScript("https://template-user-lime.vercel.app/js/counterup.min.js");
        await loadScript("https://template-user-lime.vercel.app/js/counterup-t-waypoint.js");
        await loadScript("https://template-user-lime.vercel.app/js/typed.js");
      } catch (error) {
        console.error("Error loading scripts", error);
      }
    };
  
    loadScripts();
     // Hiển thị thông báo reload ngay lập tức
     setShowReload(true);

     // Ẩn thông báo reload sau 2 giây
     const timer = setTimeout(() => {
         setFadeOut(true);
         setTimeout(() => {
             setShowReload(false);
             setFadeOut(false);
         }, 1000); // Time for fade-out animation
     }, 500);
  
    return () => {
      const scripts = document.querySelectorAll("script[src^='https://template-user-lime.vercel.app/js/']");
      scripts.forEach((script) => {
        document.body.removeChild(script);
      });
    };
  }, []);
  return (
  <div className="theme-layout">
     {showReload && (
                <div className={`reload-notification ${fadeOut ? 'fade-out' : ''}`}>
                   <div className=" reload-notification  loader-1"></div>
                </div>
            )}
    <div className="responsive-header">
      <div className="logo res"><img src="images/logo.png" alt /><span>Socimo</span></div>
      <div className="user-avatar mobile">
        <a href="profile.html" title="View Profile"><img alt src="images/resources/user.jpg" /></a>
        <div className="name">
          <h4>Danial Cardos</h4>
          <span>Ontario, Canada</span>
        </div>
      </div>
      <div className="right-compact">
        <div className="sidemenu">
          <i>
            <svg id="side-menu2" xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1={3} y1={12} x2={21} y2={12} /><line x1={3} y1={6} x2={21} y2={6} /><line x1={3} y1={18} x2={21} y2={18} /></svg></i>
        </div>
        <div className="res-search">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg></span>
        </div>
      </div>
      <div className="restop-search">
        <span className="hide-search"><i className="icofont-close-circled" /></span>
        <form method="post">
          <input type="text" placeholder="Search..." />
        </form>
      </div>
    </div>{/* responsive header */}
    <header className="transparent">
      <div className="topbar">
        <div className="logo"><img src="images/logo.png" alt /><span>Socimo</span></div>
        <div className="searches">
          <form method="post">
            <input type="text" placeholder="Search..." />
            <button type="submit"><i className="icofont-search" /></button>
            <span className="cancel-search"><i className="icofont-close" /></span>
            <div className="recent-search">
              <h4 className="recent-searches">Your's Recent Search</h4>
              <ul className="so-history">
                <li>
                  <div className="searched-user">
                    <figure><img src="images/resources/user1.jpg" alt /></figure>
                    <span>Danial Carabal</span>
                  </div>
                  <span className="trash"><i className="icofont-close-circled" /></span>
                </li>
                <li>
                  <div className="searched-user">
                    <figure><img src="images/resources/user2.jpg" alt /></figure>
                    <span>Maria K</span>
                  </div>
                  <span className="trash"><i className="icofont-close-circled" /></span>
                </li>
                <li>
                  <div className="searched-user">
                    <figure><img src="images/resources/user3.jpg" alt /></figure>
                    <span>Fawad Khan</span>
                  </div>
                  <span className="trash"><i className="icofont-close-circled" /></span>
                </li>
                <li>
                  <div className="searched-user">
                    <figure><img src="images/resources/user4.jpg" alt /></figure>
                    <span>Danial Sandos</span>
                  </div>
                  <span className="trash"><i className="icofont-close-circled" /></span>
                </li>
                <li>
                  <div className="searched-user">
                    <figure><img src="images/resources/user5.jpg" alt /></figure>
                    <span>Jack Carter</span>
                  </div>
                  <span className="trash"><i className="icofont-close-circled" /></span>
                </li>
              </ul>
            </div>
          </form>
        </div>
        <ul>
          <li><a className="join-butn" href="feed.html" title>Today's Newsfeed</a></li>
          <li><a href="#" title>help</a></li>
          <li><a href="#" title><img src="images/flags/US.png" alt /></a></li>
          <li><NavLink to="/signin" title>Login / Register</NavLink></li>
        </ul>
      </div>
    </header>
    <nav className="sidebar">
      <ul className="menu-slide">
        <li className="active menu-item-has-children">
          <a className href="#" title>
            <i><svg id="icon-home" className="feather feather-home" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></i> Home
          </a>
          <ul className="submenu">
            <li><a href="index.html" title>Newsfeed</a></li>
            <li><a href="company-home.html" title>Company Home</a></li>
            <li><a href="profile-page2.html" title>User Profile</a></li>
            <li><a href="profile.html" title>Student User Profile</a></li>
            <li><a href="groups.html" title>Groups</a></li>
            <li><a href="group-detail.html" title>Group Detail</a></li>
            <li><a href="post-detail.html" title>Social Post Detail</a></li>
            <li><a href="messages.html" title>Chat/Messages</a></li>
            <li><a href="notifications.html" title>Notificatioins</a></li>
            <li><a href="search-result.html" title>Search Result</a></li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <a className href="#" title>
            <i className><svg id="ab7" className="feather feather-zap" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg></i> Features
          </a>
          <ul className="submenu">
            <li><a href="videos.html" title>Videos</a></li>
            <li><a href="live-stream.html" title>Live Stream</a></li>
            <li><a href="event-page.html" title>Events Page</a></li>
            <li><a href="event-detail.html" title>Event Detail</a></li>
            <li><a href="Q-A.html" title>QA</a></li>
            <li><a href="Q-detail.html" title>QA Detail</a></li>
            <li><a href="help-faq.html" title>Support Help</a></li>
            <li><a href="help-faq-detail.html" title>Support Detail</a></li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <a className href="#" title>
            <i className>
              <svg id="ab5" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1={3} y1={6} x2={21} y2={6} /><path d="M16 10a4 4 0 0 1-8 0" /></svg></i> Market Place
          </a>
          <ul className="submenu">
            <li><a href="books.html" title>Books</a></li>
            <li><a href="book-detail.html" title>Books Detail</a></li>
            <li><a href="courses.html" title>Course</a></li>
            <li><a href="course-detail.html" title>course Detail</a></li>
            <li><a href="add-new-course.html" title>Add New Course</a></li>
            <li><a href="product-cart.html" title>Cart Page</a></li>
            <li><a href="product-checkout.html" title>Checkout</a></li>
            <li><a href="add-credits.html" title>Add Credit</a></li>
            <li><a href="pay-out.html" title>Payouts</a></li>
            <li><a href="price-plan.html" title>Pricing Plans</a></li>
            <li><a href="invoice.html" title>Invoice</a></li>
            <li><a href="thank-you.html" title>Thank you Page</a></li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <a className href="#" title>
            <i className><svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-coffee"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1={6} y1={1} x2={6} y2={4} /><line x1={10} y1={1} x2={10} y2={4} /><line x1={14} y1={1} x2={14} y2={4} /></svg>
            </i> Blogs
          </a>
          <ul className="submenu">
            <li><a href="blog.html" title>Blog</a></li>
            <li><a href="blog-detail.html" title>Blog Detail</a></li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <a className href="#" title>
            <i><svg id="ab8" className="feather feather-file" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><polyline points="13 2 13 9 20 9" /></svg></i> Featured Pages
          </a>
          <ul className="submenu">
            <li><a href="404.html" title>Error 404</a></li>
            <li><a href="coming-soon.html" title>Coming Soon</a></li>
            <li><a href="send-feedback.html" title>Send Feedback</a></li>
            <li><a href="badges.html" title>Badges</a></li>
            <li><a href="thank-you.html" title>Thank You</a></li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <a className href="#" title>
            <i className>
              <svg id="ab9" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x={3} y={11} width={18} height={11} rx={2} ry={2} /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></i> Authentications
          </a>
          <ul className="submenu">
            <li><a href="sign-in.html" title>Sign In</a></li>
            <li><a href="signup.html" title>Sign Up</a></li>
            <li><a href="forgot-password.html" title>Forgot Password</a></li>
          </ul>
        </li>
        <li className>
          <a className href="about-university.html" title>
            <i><svg id="ab1" className="feather feather-users" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle r={4} cy={7} cx={9} /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></i> University Profile
          </a>
        </li>
        <li className>
          <a className href="messages.html" title>
            <i className>
              <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg" id="ab2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" style={{strokeDasharray: '68, 88', strokeDashoffset: 0}} /></svg></i> Live Chat
          </a>
        </li>
        <li className>
          <a className href="privacy-n-policy.html" title><i className>
              <svg id="ab4" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" /><polygon points="12 15 17 21 7 21 12 15" /></svg></i> Privacy Polices
          </a>
        </li>
        <li className>
          <a className href="settings.html" title><i className>
              <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings"><circle cx={12} cy={12} r={3} /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg></i> Web Settings
          </a>
        </li>
        <li className="menu-item-has-children">
          <a className="#" href="#" title>
            <i className>
              <svg id="team" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-smile"><circle cx={12} cy={12} r={10} /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1={9} y1={9} x2="9.01" y2={9} /><line x1={15} y1={9} x2="15.01" y2={9} /></svg></i> Development Tools
          </a>
          <ul className="submenu">
            <li><a href="widgets.html" title>Widgets Collection</a></li>
            <li><a href="development-component.html" title>Web Component</a></li>
            <li><a href="development-elements.html" title>Web Elements</a></li>
            <li><a href="loader-spiners.html" title>Loader Spiners</a></li>
          </ul>
        </li>
      </ul>
    </nav>{/* nav sidebar */}
    <section>
      <div className="gap overlap nogap mate-black low-opacity">
        <div className="bg-image" style={{backgroundImage: 'url(images/resources/slider3.jpg)'}} />
        <div className="feature-meta">
          <h1>Discover Your <span>Scientific</span> Knowledge</h1>
          <h3>and stay connected with <span /></h3>
          <a href="#" title className="main-btn" data-ripple>Join Free</a>
        </div>
      </div>	
    </section>
    <section>
      <div className="gap no-bottom grey-bg nogap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="info-sec">
                <i className="icofont-checked" />
                <div>
                  <h6>Learn from industry experts</h6>
                  <p>Share your research, collaborate with your peers, and get the support you need to advance your career.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="info-sec">
                <i className="icofont-play-alt-1" />
                <div>
                  <h6>Find video Course of any topic</h6>
                  <p>Share your research, collaborate with your peers, and get the support you need to advance your career.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="info-sec">
                <i className="icofont-clock-time" />
                <div>
                  <h6>Go at your own pace</h6>
                  <p>Share your research, collaborate with your peers, and get the support you need to advance your career.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="gap no-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-full">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="funfact-counter">
                      <i className="icofont-air-ticket" />
                      <span className="counter">599</span>
                      <em>Researchers</em>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="funfact-counter">
                      <i className="icofont-network" />
                      <span className="counter">299</span>
                      <em>Registered user</em>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="funfact-counter">
                      <i className="icofont-network-tower" />
                      <span className="counter">600</span>
                      <em>Active People</em>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="funfact-counter">
                      <i className="icofont-microphone-alt" />
                      <span className="counter">12</span>
                      <em>Post Published</em>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* funfacts */}
    <section>
      <div className="gap no-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7">
              <div className="verticle-center">
                <div className="measure">
                  <i className="icofont-light-bulb" />
                  <h2>Measure Your scientific impact</h2>
                  <p>
                    Get in depth stats on who's been reading your work and keep track of your citations. 
                  </p>
                </div>
              </div>	
            </div>
            <div className="col-lg-5 col-md-5">
              <figure className="side-image">
                <img src="images/resources/research-avatar.jpg" alt />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5">
              <figure className="side-image">
                <img src="images/resources/research-avatar2.jpg" alt />
              </figure>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className="verticle-center">
                <div className="measure right">
                  <i className="icofont-connection" />
                  <h2>Connect with Your scientific Community</h2>
                  <p>
                    <a href="#" title>Engineering</a>
                    <a href="#" title>mathamatic</a>
                    <a href="#" title>biology</a>
                    <a href="#" title>computer science</a>
                    <a href="#" title>climate</a>
                    <a href="#" title>medicine</a>
                    <a href="#" title>Physics</a>
                    <a href="#" title>sociology</a>
                    <a href="#" title>chemistry</a>
                    <a href="#" title>astrophysics</a>
                  </p>
                </div>	
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="gap mate-black low-opacity">
        <div className="bg-image" style={{backgroundImage: 'url(images/resources/paralex-bg.jpg)'}} data-velocity=".2" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="welcome-parallax">
                <i><img src="images/tv-icon.png" alt /></i>
                <h2>Advance your research</h2>
                <span>Join our community of scientists.</span>
                <a href="#" title className="main-btn" data-ripple>Join Free Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* parallax section */}
    <section>
      <div className="gap">
        <div className="container">
          <div className="row remove-ext30">
            <div className="col-lg-12">
              <div className="title">
                <h1>Recent Events</h1>
                <p>Our Recent News about the events.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog-grid">
                <figure><img src="images/resources/blog.jpg" alt /></figure>
                <div className="blog-meta">
                  <div className="blog-head">
                    <ul className="postby">
                      <li>
                        <figure><img src="images/resources/postby1.jpg" alt /></figure> 
                        <span>Saden joe</span>
                      </li>
                      <li><i className="icofont-heart" /><span>1.3k</span></li>
                    </ul>
                    <a href="#" title className="date">06 Aug</a>
                    <h4 className="blog-title"><a href="#" title>Oddo is coming to dubai in 2020</a></h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog-grid">
                <figure><img src="images/resources/blog2.jpg" alt /></figure>
                <div className="blog-meta">
                  <div className="blog-head">
                    <ul className="postby">
                      <li>
                        <figure><img src="images/resources/postby2.jpg" alt /></figure> 
                        <span>Andrew</span>
                      </li>
                      <li><i className="icofont-heart" /><span>1.3k</span></li>
                    </ul>
                    <a href="#" title className="date">08 Sep</a>
                    <h4 className="blog-title"><a href="#" title>Coming soon event by Microsoft</a></h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog-grid">
                <figure><img src="images/resources/blog3.jpg" alt /></figure>
                <div className="blog-meta">
                  <div className="blog-head">
                    <ul className="postby">
                      <li>
                        <figure><img src="images/resources/postby3.jpg" alt /></figure> 
                        <span>Emma Lucy</span>
                      </li>
                      <li><i className="icofont-heart" /><span>1.3k</span></li>
                    </ul>
                    <a href="#" title className="date">12 Oct</a>
                    <h4 className="blog-title"><a href="#" title>This year Whatsapp event is ready in July</a></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* events */}
    <section>
      <div className="gap no-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="newsletter-sec">
                <figure><img src="images/news-icon.png" alt /></figure>
                <div className="leter-meta">
                  <span>our newsletter</span>
                  <h3>subscribe now</h3>
                </div>	
                <form method="post">
                  <input type="text" placeholder="Email @" />
                  <button type="submit" className="main-btn" data-ripple><i className="icofont-paper-plane" /></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="gap no-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title">
                <h1>What our Students Have Today!</h1>
                <p>Our Researchers have today now?</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="student-review">
                <div className="review-item">
                  <figure><img src="images/resources/commenter-1.jpg" alt /></figure>
                  <h6>Emma Watson</h6>
                  <span>Student of Botony</span>
                  <p>
                    Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus.	 
                  </p>
                </div>
                <div className="review-item">
                  <figure><img src="images/resources/commenter-2.jpg" alt /></figure>
                  <h6>Emma Watson</h6>
                  <span>Student of Botony</span>
                  <p>
                    Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus.	 
                  </p>
                </div>
                <div className="review-item">
                  <figure><img src="images/resources/commenter-3.jpg" alt /></figure>
                  <h6>Emma Watson</h6>
                  <span>Student of Botony</span>
                  <p>
                    Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus.	 
                  </p>
                </div>
                <div className="review-item">
                  <figure><img src="images/resources/commenter-1.jpg" alt /></figure>
                  <h6>Emma Watson</h6>
                  <span>Student of Botony</span>
                  <p>
                    Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus.	 
                  </p>
                </div>
                <div className="review-item">
                  <figure><img src="images/resources/commenter-2.jpg" alt /></figure>
                  <h6>Emma Watson</h6>
                  <span>Student of Botony</span>
                  <p>
                    Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus.	 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div className="gap">
        <div className="bg-image" style={{backgroundImage: 'url(images/resources/footer-bg.png)'}} />
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="web-info">
                <div className="logo"><img src="images/logo.png" alt /><span>Socimo</span></div>
                <p>Subscribe our newsletter for getting notifications and alerts</p>
                <div className="contact-little">
                  <span><i className="icofont-phone-circle" /> +1-235-099-34</span>
                  <span><i className="icofont-email" /> info@akedmic.com</span>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="widget">
                <div className="widget-title">
                  <h4>Company</h4>
                </div>
                <ul className="quick-links">
                  <li><a href="#" title>About Us</a></li>
                  <li><a href="#" title>Career</a></li>
                  <li><a href="#" title>Privacy</a></li>
                  <li><a href="#" title>Terms</a></li>
                  <li><a href="#" title>FAQ</a></li>
                  <li><a href="#" title>Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="widget">
                <div className="widget-title">
                  <h4>Quick Links</h4>
                </div>
                <ul className="quick-links">
                  <li><a href="#" title>Product</a></li>
                  <li><a href="#" title>Market</a></li>
                  <li><a href="#" title>Courses</a></li>
                  <li><a href="#" title>Services</a></li>
                  <li><a href="#" title>Enterprise</a></li>
                  <li><a href="#" title>Sitemap</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="widget">
                <div className="widget-title">
                  <h4>Follow Us</h4>
                </div>
                <ul className="quick-links">
                  <li><a href="#" title><i className="icofont-facebook" />facebook</a></li>
                  <li><a href="#" title><i className="icofont-twitter" />twitter</a></li>
                  <li><a href="#" title><i className="icofont-instagram" />instagram</a></li>
                  <li><a href="#" title><i className="icofont-google-plus" />google +</a></li>
                  <li><a href="#" title><i className="icofont-whatsapp" />whatsapp</a></li>
                  <li><a href="#" title><i className="icofont-reddit" />reddit</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget">
                <div className="widget-title">
                  <h4>Newsletter</h4>
                </div>
                <div className="news-lettr">
                  <form className="newsletter">
                    <input type="text" placeholder="Email Address" />
                    <button type="submit"><i className="icofont-paper-plane" /></button>
                  </form>
                  <p>
                    it is a long established fact that a reader will be distracted by.
                  </p>
                  <h5>Download App</h5>
                  <a href="#" title><img src="images/android.png" alt /></a>
                  <a href="#" title><img src="images/apple.png" alt /></a>
                  <a href="#" title><img src="images/windows.png" alt /></a>
                </div>	
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>{/* footer */}
    <div className="bottombar">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <span className>© copyright All rights reserved by SBE 2020</span>
          </div>
        </div>
      </div>
    </div>{/* bottombar */}
  </div>
  )
}

