import Image from "next/image";
import { Inter } from "next/font/google";
import { Footer } from "@/layout/footer";
import { Header } from "@/layout/header";
import Slider from "react-slick";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
  return (
    <>
    <Header></Header>
      <div className=" p-0 jnp-bg-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 jnp-banner-content fade-up-two">
              {/* <!-- Left Side: Content --> */}
              <h1>Welcome to Our Website</h1>
              <p>
              Millions of businesses of all sizes—from startups to large enterprises—use fionpay's software and APIs to accept payments, send payouts, and manage their businesses online.
              </p>
              <button className="btn btn-primary">
                Get in Touch{" "}
                <i className="fa-sharp fa-solid fa-circle-arrow-right"></i>
              </button>
            </div>
            <div className="col-lg-6 col-md-12 jnp-banner-image">
              <img src="/images/payment.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <section className="partners">
        <div className="container">
          <div className="slick-slider fade-up">
          <Slider {...settings}>
            <div>
              <img
                src="https://freevetis.com/paynetivo/wp-content/uploads/sites/57/2023/02/logoipsum-211_1.png"
                alt="Slide 1"
              />
            </div>
            <div>
              <img
                src="https://freevetis.com/paynetivo/wp-content/uploads/sites/57/2023/02/logoipsum-211_1.png"
                alt="Slide 2"
              />
            </div>
            <div>
              <img
                src="https://freevetis.com/paynetivo/wp-content/uploads/sites/57/2023/02/logoipsum-211_1.png"
                alt="Slide 3"
              />
            </div>
            <div>
              <img
                src="https://freevetis.com/paynetivo/wp-content/uploads/sites/57/2023/02/logoipsum-211_1.png"
                alt="Slide 1"
              />
            </div>
            <div>
              <img
                src="https://freevetis.com/paynetivo/wp-content/uploads/sites/57/2023/02/logoipsum-211_1.png"
                alt="Slide 2"
              />
            </div>
            <div>
              <img
                src="https://freevetis.com/paynetivo/wp-content/uploads/sites/57/2023/02/logoipsum-211_1.png"
                alt="Slide 3"
              />
            </div></Slider>
          </div>
        </div>
      </section> 
      
  <section className="how-it-work background-one">
    <div className="container fade-up">
      <div className="section-head">
        <p className="top-heading">HOW IT WORKS</p>
        <h2>Make Secure Transactions</h2>
        <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit cupiditate veritatis
          impedit veniam odit consequuntur!</p>
      </div>
    </div>
    <div className="container fade-up">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12">
          <div className="text-center jnp-step">
            <div className="round-arrow"><img src="/images/arrow.png" alt=""/></div>
            <div className="bg-effect">
              <h2 className="">Step 1</h2>
            </div>
            <h3>Sign up and Connect </h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, illum?</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="text-center jnp-step">
            <div className="round-arrow"><img src="/images/arrow.png" alt=""/></div>
            <div className="bg-effect">
              <h2 className="">Step 2</h2>
            </div>
            <h3>Customize Payment Page </h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, illum?</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="text-center jnp-step">
            <div className="bg-effect">
              <h2 className="">Step 3</h2>
            </div>
            <h3>Accepting Payments </h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, illum?</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="our-mission">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="about-mission fade-up">
            <div className="round-arrow-two"><img src="/images/arrow-2.png" alt=""/></div>
            <h2>Our Mission at Fionex </h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At doloremque dignissimos sapiente nulla
              molestiae facilis perferendis vitae obcaecati, sed nobis tenetur odit eos natus iure ab illo magni itaque
              officia.</p>
            <ul>
              <li><span><i className="fa-solid fa-circle-check"></i></span><span>Bringing Convenience to Your
                  Fingertips</span></li>
              <li><span><i className="fa-solid fa-circle-check"></i></span><span>Making Transactions Smarter and Simpler
                </span></li>
              <li><span><i className="fa-solid fa-circle-check"></i></span><span>Pioneering the Future of Digital Payments
                </span></li>
            </ul>
            <button className="btn btn-primary">Get in Touch <i
                className="fa-sharp fa-solid fa-circle-arrow-right"></i></button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="our-mission-img image-section">
            <div className="animated-image">
              <div className="animated-img-one"><img src="/images/online-payment-man-s.jpg" alt=""/></div>
              <div className="animated-img-two"><img src="/images/close-up-of-girl-hold-bank.jpg" alt=""/></div>
              <div className="animated-img-three"><img src="/images/template-mockup-online-credit-card.jpg" alt=""/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="jnp-mission">
    <div className="container fade-up">
      <div className="section-head">
        <p className="top-heading">OUR MISSION</p>
        <h2>Empowering Secure and Seamless Online Transactions</h2>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Pellentesque sit amet porttitor eget dolor morbi non arcu.</p>
        <ul>
          <li><span><i className="fa-solid fa-circle-check"></i></span><span>Convenient for customers
            </span></li>
          <li><span><i className="fa-solid fa-circle-check"></i></span><span>Secure and fraud-protected
            </span></li>
          <li><span><i className="fa-solid fa-circle-check"></i></span><span>Simplifies payment processing
            </span></li>
        </ul>
      </div>
    </div>
    <div className="container fade-up">
      <div className="play-video">
        <div><i aria-hidden="true" className="fas fa-play-circle"></i></div>
      </div>
      <div className="jnp-wallet-imgages">
        <div className="jnp-wallet-image">
          <div className="wallet-img">
            <div className="animate-up-down"><img src="/images/05-1.png" alt=""/></div>
            <div className="animate-up-down"><img src="/images/01-2.png" alt=""/></div>
          </div>
        </div>
        <div className="jnp-wallet-image">
          <div className="wallet-img wallet-img-two">
            <div className="animate-up-down"><img src="/images/02-3.png" alt=""/></div>
            <div className="animate-up-down"><img src="/images/03-4.png" alt=""/></div>
          </div>
        </div>
        <div className="jnp-wallet-image">
          <div className="wallet-img">
            <div className="animate-up-down"><img src="/images/01-5.png" alt=""/></div>
            <div className="animate-up-down"><img src="/images/04-6.png" alt=""/></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className=" services background-one">
    <div className="container fade-up">
      <div className="section-head">
        <p className="top-heading">SERVICES WE OFFER </p>
        <h2>Efficient Payment Solutions Tailored</h2>
        <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit cupiditate veritatis
          impedit veniam odit consequuntur!</p>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-6 fade-up">
              <div className="our-service payment-processing">
                <div>
                  <h3>Payment Processing</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloribus reprehenderit nobis,
                    labore doloremque at!</p>
                </div>
                <div className="background-two">
                  <img src="/images/Icon-3.png" alt=""/>
                </div>
              </div>
            </div>
            <div className="col-md-6 fade-up">
              <div className="our-service fraud-prevention">
                <div>
                  <h3>Fraud Prevention</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloribus reprehenderit nobis,
                    labore doloremque at!</p>
                </div>
                <div className="background-two">
                  <img src="/images/Icon-1.png" alt=""/>
                </div>
              </div>
            </div>
            <div className="col-12 fade-up">
              <div className="our-service quk-mny-transfer">
                <div className="row">
                  <div className="col-md-6 fade-up">
                    <div>
                      <h3>Quick Money Transfer</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloribus reprehenderit
                        nobis,
                        labore doloremque at!</p>
                      <button className="btn btn-primary">Get in Touch <i
                          className="fa-sharp fa-solid fa-circle-arrow-right"></i></button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="background-two">
                      <img src="/images/Icon-4.png" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 fade-up">
          <div className="our-service payment-analytics">
            <div className="background-two">
              <img src="/images/Icon-2.png" alt=""/>
            </div>
            <div className="fade-up">
              <h3>Payment Analytics</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloribus reprehenderit nobis,
                labore doloremque at!</p>
              <button className="btn btn-primary">Get in Touch <i
                  className="fa-sharp fa-solid fa-circle-arrow-right"></i></button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="our-vision">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="our-mission-img image-section">
            <div className="animated-image">
              <div className="animated-img-one"><img src="/images/online-payment-man-s.jpg" alt=""/></div>
              <div className="animated-img-two"><img src="/images/close-up-of-girl-hold-bank.jpg" alt=""/></div>
              <div className="animated-img-three"><img src="/images/template-mockup-online-credit-card.jpg" alt=""/></div>
            </div>
          </div>
        </div>
        <div className="col-md-6 fade-up">
          <div className="round-arrow-three"><img src="/images/arrow-3.png" alt=""/></div>
          <div>
            <h2>A Look at Our Vision </h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At doloremque dignissimos sapiente nulla
              molestiae facilis perferendis vitae obcaecati, sed nobis tenetur odit eos natus iure ab illo magni itaque
              officia.</p>
            <div className="row">
              <div className="col-md-6">
                <div className="jnp-vision">
                  <div className="bg-effect">
                    <img src="/images/member-active.png" alt=""/>
                  </div>
                  <div className="jnp-carreer">
                    <div>
                      <span>70 K</span><span className="plus">+</span>
                    </div>
                    <h4>Member Active</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="jnp-vision">
                  <div className="bg-effect">
                    <img src="/images/member-active.png" alt=""/>
                  </div>
                  <div className="jnp-carreer">
                    <div>
                      <span>99 %</span><span className="plus">+</span>
                    </div>
                    <h4>Satified Customer</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="jnp-vision">
                  <div className="bg-effect">
                    <img src="/images/member-active.png" alt=""/>
                  </div>
                  <div className="jnp-carreer">
                    <div>
                      <span>4.9</span><span className="plus">+</span>
                    </div>
                    <h4>User Rating</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="jnp-vision">
                  <div className="bg-effect">
                    <img src="/images/member-active.png" alt=""/>
                  </div>
                  <div className="jnp-carreer">
                    <div>
                      <span>16</span><span className="plus">+</span>
                    </div>
                    <h4>Years of Experience</h4>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
  <section className="background-one fade-up">
    <div className="container">
      <div className="our-customers">
        <h2>What Our Customers Are Saying</h2>
        <div className="our-customer-slider">
          <div className="customer">
            <div className="client-review">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum sed perferendis maxime facere,
                distinctio ea? Fugit dicta repudiandae officia est?</p>
            </div>
            <div className="client">
              <div className="client-deatils">
                <div className="client-img"><img src="/images/client-1.jpg" alt=""/></div>
                <div className="client-info">
                  <h3>Jhon D.</h3>
                  <p>Freelance Profestional</p>
                </div>
              </div>
              <div>
                <i aria-hidden="true" className="fas fa-quote-left"></i>
              </div>
            </div>
          </div>
          <div className="customer">
            <div className="client-review">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum sed perferendis maxime facere,
                distinctio ea? Fugit dicta repudiandae officia est?</p>
            </div>
            <div className="client">
              <div className="client-deatils">
                <div className="client-img"><img src="/images/client-1.jpg" alt=""/></div>
                <div className="client-info">
                  <h3>Jhon D.</h3>
                  <p>Freelance Profestional</p>
                </div>
              </div>
              <div>
                <i aria-hidden="true" className="fas fa-quote-left"></i>
              </div>
            </div>
          </div>
          <div className="customer">
            <div className="client-review">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum sed perferendis maxime facere,
                distinctio ea? Fugit dicta repudiandae officia est?</p>
            </div>
            <div className="client">
              <div className="client-deatils">
                <div className="client-img"><img src="/images/client-1.jpg" alt=""/></div>
                <div className="client-info">
                  <h3>Jhon D.</h3>
                  <p>Freelance Profestional</p>
                </div>
              </div>
              <div>
                <i aria-hidden="true" className="fas fa-quote-left"></i>
              </div>
            </div>
          </div>
          <div className="customer">
            <div className="client-review">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum sed perferendis maxime facere,
                distinctio ea? Fugit dicta repudiandae officia est?</p>
            </div>
            <div className="client">
              <div className="client-deatils">
                <div className="client-img"><img src="/images/client-1.jpg" alt=""/></div>
                <div className="client-info">
                  <h3>Jhon D.</h3>
                  <p>Freelance Profestional</p>
                </div>
              </div>
              <div>
                <i aria-hidden="true" className="fas fa-quote-left"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="jnp-community fade-up">
    <div className="container background-two">
      <div className="row">
        <div className="col-md-6">
          <div className="jnp-community-desc">
            <h2>Join the JionNexPay Community Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vero vel doloremque quam sint corrupti
              deserunt. Doloremque cumque velit consequuntur. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Facilis ipsa accusantium, dolor fuga libero aspernatur.</p>
            <div className="dowload-app">
              <div className="play-store"><img src="/images/google-play-badge-1.png" alt=""/></div>
              <div className="apple-store"><img src="/images/apple-badge-1.png" alt=""/></div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="jnp-community-img">
            <img src="/images/iphone-xs-mockups.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="case-studies background-one fade-up">
    <div className="container">
      <h2>Case Studies and Success Stories</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="success-story">
            <div className="success-story-img">
              <img src="/images/online-payment-woman-s.jpg" alt=""/>
            </div>
            <div className="success-story-contant">
              <h3>Breaking Down Payment Processing Fees: What You Need to Know</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas vel eius esse velit deleniti, eos
                voluptates provident nemo pariatur tenetur.</p>
              <button className="btn btn-primary">Read More <i className="fa-sharp fa-solid fa-circle-arrow-right"></i></button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="success-story">
            <div className="success-story-img">
              <img src="/images/online-payment-woman-s-hands.jpg" alt=""/>
            </div>
            <div className="success-story-contant">
              <h3>The Benefits and Drawbacks of Subscription Payment Models</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, repellat ratione? Fugit aliquid
                tempora quidem, nulla sequi laboriosam facilis neque.</p>
              <button className="btn btn-primary">Read More <i className="fa-sharp fa-solid fa-circle-arrow-right"></i></button>
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
