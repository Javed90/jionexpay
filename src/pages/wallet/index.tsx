import { Footer } from "@/layout/footer";
import { Header } from "@/layout/header";
import { FormEvent, useEffect, useState } from "react";
import Slider from "react-slick";
import { redirect } from 'next/navigation'
import { useRouter } from "next/router";
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
      cust_phone: "1234567895",
      cust_address: "Bay Area, San Francisco, CA",
      request_type: "Deposit",
      redirect_url: "https://jionexpay.vercel.app/wallet",
  });
  const [formData2, setFormData2] = useState({
    amount: '',
    cust_name: "Johnatan Smith",
    cust_phone: "1234567895",
    cust_address: "Bay Area, San Francisco, CA",
    request_type: "Withdraw",
    redirect_url: "https://jionexpay.vercel.app/wallet"
    
});
 const [errorMessage, setErrorMessage] = useState();
 const [errorMessage2, setErrorMessage2] = useState();
 const [message, setMessage] = useState();
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    const headers = {
      "X-Authorization-Aceess": "905a5dfe7bdb46525841bc924a13525498ef6c0c55be5060c32563c548fbed49",
      "X-Authorization-Public": "a478c2a1420ca4fd6c86d1e857cd5732c8ef00fb18328734b1ba6e331f1dc413",
      "Content-Type": "application/json",
    };
    try {
      
    const response = await fetch(
      "https://api.fionpay.com/api/v1/secure/payment_requests",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(formData), 
      }
    );
    const data = await response.json();
      if (data.status == 200) {
        // Handle success, e.g., show a success message or redirect
        console.log('Form data submitted successfully');
          window.open(
            data.redirect_url,
            '_blank' 
          );
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
  const handleWithdrawalSubmit = async (event:any) => {
    event.preventDefault();
    const headers = {
      "X-Authorization-Aceess": "905a5dfe7bdb46525841bc924a13525498ef6c0c55be5060c32563c548fbed49",
      "X-Authorization-Public": "a478c2a1420ca4fd6c86d1e857cd5732c8ef00fb18328734b1ba6e331f1dc413",
      "Content-Type": "application/json",
    };
    try {
     // console.log(formData?.amount,currentBalance)
      if(currentBalance.data.balance < formData2?.amount){
        const string:any = `You can not withdrawal more then current balance `+currentBalance.data.balance;
        setErrorMessage2(string);
        
      }else{
        const response = await fetch(
          "https://api.fionpay.com/api/v1/secure/payment_requests",
          {
            method: "POST",
            headers: headers,
            body: JSON.stringify(formData2), 
          } );
          const data = await response.json();
      if (data.status == 200) {
    
        //console.log('Form data submitted successfully');
        setMessage(data?.msg)
        window.open(
          data.redirect_url,
          '_blank' 
        );
          
      } else {
        setErrorMessage2(data?.msg)
        console.error('Form submission failed');
      }
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleWithdrawalChange = (event:any) => {
    const { name, value } = event.target;
    setFormData2({ ...formData2, [name]: value });
  };
  const [currentBalance, setCurrentBalance]: any = useState([]);
  const getCurrentBalance = async () => {
    const headers = {
      "X-Authorization-Aceess": "905a5dfe7bdb46525841bc924a13525498ef6c0c55be5060c32563c548fbed49",
      "X-Authorization-Public": "a478c2a1420ca4fd6c86d1e857cd5732c8ef00fb18328734b1ba6e331f1dc413",
      "Content-Type": "application/json",
    };
    const response = await fetch(
      `https://api.fionpay.com/api/v1/secure/payment_requests/cust_balance?cust_phone=1234567895`,
      {
        method: "GET",
        headers: headers,
      }
    );
    let data:any = await response.json();
    data = JSON.stringify(data);
    data = JSON.parse(data);
   setCurrentBalance(data);
  };
  const router = useRouter();
  useEffect(() => {
    getCurrentBalance();
  }, [router.asPath]);

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
                      <p className="text-muted mb-0">1234567895</p>
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
                       {currentBalance?.data?.balance}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
              <div className="card mb-4">
                <div className="card-body">
                  <p className="text-danger">{errorMessage2}</p>
                  <p className="text-success">{message}</p>
                  <form onSubmit={handleWithdrawalSubmit}>
                    <div className="form-group">
                      <label>Amount</label>
                      <input
                        type="number"
                        name="amount"
                        className="form-control"
                        value={formData2.amount}
                        onChange={handleWithdrawalChange}
                      />
                     
                    </div>
                    <div className="form-group mt-2 text-end">
                      <button type="submit" className="btn btn-primary ">
                      Withdrawal
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            </div>
            <div className="col-lg-6">
              <div className="card mb-4">
                <div className="card-body">
                  <p className="text-danger">{errorMessage}</p>
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
