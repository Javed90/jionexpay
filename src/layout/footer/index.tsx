import { axiosClient, axiosHandler } from "@/utils/axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

function Footer() {
  
  return (
    <Fragment>
      <footer className="fade-up">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <div className="company">
                <h4>Company</h4>
                <ul>
                  <li><i aria-hidden="true" className="fas fa-dot-circle"></i><a href="">About</a></li>
                  <li><i aria-hidden="true" className="fas fa-dot-circle"></i><a href="">Teamt</a></li>
                  <li><i aria-hidden="true" className="fas fa-dot-circle"></i><a href="">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <h4>Navigations</h4>
                <ul>
                  <li><i aria-hidden="true" className="fas fa-dot-circle"></i><a href="">FAQ's</a></li>
                  <li><i aria-hidden="true" className="fas fa-dot-circle"></i><a href="">Privacy Policy</a></li>
                  <li><i aria-hidden="true" className="fas fa-dot-circle"></i><a href="">Term & Conditions</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <h4>Subscribe to newsletter</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi harum quo suscipit quae obcaecati iure
              non sequi voluptates ipsam, odit sed! Fugit quibusdam laboriosam accusantium earum, ullam doloribus cum
              illo!</p>
            <form action="">
              <div className="row">
                <div className="col-md-6">
                  <input type="email" placeholder="Your Email" name="" id=""/>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-primary">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6">
            <p>Copyright © 2023 JioNexPay | Powered by JioNexPay</p>
          </div>
          <div className="col-md-6">
            <div className="social-media">
              <div>
                <p>Follow us on :</p>
              </div>
              <div className="social-ac">
                <span><a href=""><i className="fab fa-facebook-f"></i></a></span>
                <span><a href=""><i className="fab fa-twitter"></i></a></span>
                <span><a href=""><i className="fab fa-youtube"></i></a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

    </Fragment>
    
  );
}
export { Footer };
