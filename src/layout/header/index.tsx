import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { axiosClient, axiosHandler } from "@/utils/axios";

function Header({ ...props }) {
  
  return (
    <>
      <header className=" py-4">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-3 col-md-6 col-12">
          {/* <!-- Left Side: Logo --> */}
          <h2><Link href="/" >JioNexPay</Link></h2>
        </div>
        <div className="col-lg-6 col-md-6 col-12 text-center">
          {/* <!-- Middle: Menu --> */}
          <nav className="navbar navbar-expand-lg">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" href="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/about">About Us</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Page</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="col-lg-3 col-md-12 col-12 text-lg-end text-center mt-3 mt-lg-0 header-btn fade-up-two">
        {/* <!-- Right Side: Sign In Button --> */}
          <div><button className="btn btn-primary">Sign In</button></div>
          <div><button className="btn btn-primary">Start Free Trial</button></div>
        </div>
      </div>
    </div>
  </header>
    </>
  );
}
export { Header };
