import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { history } from "../../App";
export default function SignIn() {

    const history = useHistory();

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
      
        return () => {
          const scripts = document.querySelectorAll("script[src^='https://template-user-lime.vercel.app/js/']");
          scripts.forEach((script) => {
            document.body.removeChild(script);
          });
        };
      }, []);
      
  return (
      <div className="theme-layout">
        
        <div className="authtication bluesh high-opacity">
          <div
            className="bg-image"
            style={{ backgroundImage: "url(images/resources/login-bg3.jpg)" }}
          />
          <ul className="welcome-caro">
            <li className="welcome-box">
              <figure>
                <img src="images/resources/login-1.png" alt />
              </figure>
              <h4>Ask questions with seniors Researchers</h4>
              <p>
                Ask questions and get the experienced answer by researchers and
                others fellows.
              </p>
            </li>
            <li className="welcome-box">
              <figure>
                <img src="images/resources/login-2.png" alt />
              </figure>
              <h4>Find New Researchers or Friends</h4>
              <p>
                Join Socimo and make your network of university or college
                fellows.
              </p>
            </li>
            <li className="welcome-box">
              <figure>
                <img src="images/resources/login-3.png" alt />
              </figure>
              <h4>Sell Your Online paid Content</h4>
              <p>
                Sell your online lectures, videos, books and many more with
                Socimo.
              </p>
            </li>
          </ul>
        </div>
        <div className="auth-login">
          <div className="logo">
            <img src="images/logo.png" alt />
            <span>Socimo</span>
          </div>
          <div className="mockup left-bottom">
            <img src="images/mockup.png" alt />
          </div>
          <div className="verticle-center">
            <div className="login-form">
              <h4>
                <i className="icofont-key-hole" /> Login
              </h4>
              <form method="post" className="c-form">
                <input type="text" placeholder="User Name @" />
                <input type="password" placeholder="xxxxxxxxxx" />
                <div className="checkbox">
                  <input type="checkbox" id="checkbox" defaultChecked />
                  <label htmlFor="checkbox">
                    <span>Remember Me</span>
                  </label>
                </div>
                <button
                  className="main-btn"
                  type="submit"
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  <i className="icofont-key" /> Login
                </button>
              </form>
            </div>
          </div>
          <div className="mockup right">
            <img src="images/star-shape.png" alt />
          </div>
        </div>
      </div>
  );
}
