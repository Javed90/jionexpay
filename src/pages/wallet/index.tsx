import { Footer } from "@/layout/footer";
import { Header } from "@/layout/header";
import { FormEvent } from "react";
import Slider from "react-slick";

export default function About() {
  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          centerMode: true,
        },
      },
    ],
  };
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    // ...
  }
  return (
    <>
      <Header></Header>
      <section className="jnp-banner">
        <div className="container">
          <div className="banner-content">
            <h1>Wallet</h1>
            <p className="fade-up-two">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              provident natus quae soluta commodi earum sunt itaque tempore
              minus fugiat!
            </p>
          </div>
        </div>
      </section>

      <section className="our-mission">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Johnatan Smith</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">johnsmith@example.com</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(097) 234-5678</p>
                    </div>
                  </div>
                 
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        Bay Area, San Francisco, CA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card mb-4">
                <div className="card-body">
                <form onSubmit={onSubmit}>
                  
                  <div className="form-group">
                    <label >Amount</label>
                    <input type="number" name="amount" className="form-control" id="pwd"/>
                    <input type="hidden" name="cust_name" className="form-control"value="Johnatan Smith" id="pwd"/>
                    <input type="hidden" name="cust_phone" className="form-control" value="1234567895" id="pwd"/>
                    <input type="hidden" name="request_type" className="form-control" value="Deposit" id="pwd"/>
                    <input type="hidden" name="cust_address" className="form-control" value="Bay Area, San Francisco, CA" id="pwd"/>
                    <input type="hidden" name="redirect_url" className="form-control" value="https://jionexpay.vercel.app/wallet" id="pwd"/>
                  </div>
                  <div className="form-group mt-2 text-end">
                  <button type="submit" className="btn btn-primary ">Pay</button>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}
