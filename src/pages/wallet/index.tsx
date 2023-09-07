import { Footer } from "@/layout/footer";
import { Header } from "@/layout/header";
import { FormEvent, useState } from "react";
import Slider from "react-slick";
import { redirect } from 'next/navigation'
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
  const [formData, setFormData] = useState({
      amount: '',
      cust_name: "Johnatan Smith",
      cust_phone: "(097) 234-5678",
      cust_address: "Bay Area, San Francisco, CA",
      request_type: "Deposit",
      redirect_url: "https://jionexpay.vercel.app/wallet",
  });
 const [errorMessage, setErrorMessage] = useState();
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    const headers = {
      "X-Authorization": "851110fb0bb3a9004d056435b79891d9c8bad7b37b34e0868159026d3381df06",
      "X-Authorization-Secret": "09d28760d5b454ad613e447b671fb0efaa82d7e853e7fe10fe62a4df2fbee459",
      "Content-Type": "application/json",
    };
    try {
      
    const response = await fetch(
      "https://api.rootficus.com/api/v1/secure/payment_requests",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(formData), 
      }
    );
    const data = await response.json();
      if (data.success == 200) {
        // Handle success, e.g., show a success message or redirect
        console.log('Form data submitted successfully');
     
        // if(data){
        //   window.open(
        //     data.redirect_url,
        //     '_blank' 
        //   );
        // }
      } else {
        setErrorMessage(data?.msg)
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleChange = (event:any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  
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
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Amount</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                       100
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card mb-4">
                <div className="card-body">
                  <p className="danger">{errorMessage}</p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Amount</label>
                      <input
                        type="number"
                        name="amount"
                        className="form-control"
                        value={formData.amount}
                        onChange={handleChange}
                      />
                     
                    </div>
                    <div className="form-group mt-2 text-end">
                      <button type="submit" className="btn btn-primary ">
                        Add Amount
                      </button>
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
