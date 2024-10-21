import HomeBanner from "../../Components/HomeBanner";
import { Button } from "@mui/material";
import banner1 from "../../assests/images/Banner1.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import banner2 from "../../assests/images/banner2.webp";
// import Rating from "@mui/material/Rating";
// import { AiOutlineFullscreen } from "react-icons/ai";
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";
import banner4 from "../../assests/images/Banner4.webp";
import banner5 from "../../assests/images/Banner5.jpg";
import bgnewsletter1 from "../../assests/images/bgnewsletter1.png";
import { CiMail } from "react-icons/ci";


const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeCat />

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-4.5">
              <div className="stick">
                <div
                  className="banner"
                  style={{ position: "sticky", top: "10px" }}
                >
                  <img src={banner1} alt="banner1" className="cursor w-100" />
                </div>
              </div>{" "}
            </div>

            <div className="col-ml-1 productRow"></div>
            <div className="d-flex align-items-left">
              <div className="info w-100 align-items-d-flex">
                <h3 className="hd w-100">BEST SELLERS</h3>
                <p className="text-light text-sml mb-10 w-100">
                  Do not miss the current offers
                </p>
              </div>
              <div className="button-container">
                <Button className="viewAllBtn mb-10">
                  View all <IoIosArrowRoundForward />
                </Button>

                <div className="product_row">
                  <div className="ItemSection">
                    <ProductItem />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="banner">
                <img
                  src={banner2}
                  alt="banner2"
                  className="cursor w-90  mt-2"
                  style={{
                    width: "260px",
                    height: "400px",
                    borderradius: "10",
                    position: "sticky",
                    top: "100px",
                    zIndex: 100,
                  }}
                />
              </div>
            </div>

            <div className="d-flex align-items-left mt-0">
              <div className="info w-100 align-items-d-flex">
                <h3 className="hd w-100" style={{ marginTop: "-400px" }}>
                  New Products
                </h3>
                <p className="text-light text-sml mb-5 w-100 ">
                  New Products with updated stocks
                </p>
              </div>
              <div className="button-container" style={{ marginTop: "-110px" }}>
                <Button className="viewAllBtn mb-10">
                  View all <IoIosArrowRoundForward />
                </Button>

                <div className="product_row">
                  <div className="ItemSection">
                    <ProductItem />
                  </div>
                </div>
                <div className="product_row">
                  <div className="ItemSection2">
                    <ProductItem />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="d-flex"
              style={{ marginTop: "0px", marginLeft: "300px" }}
            >
              <div className="col">
                <div className="banner4">
                  <img
                    src={banner4}
                    alt="banner4"
                    className="cursor w-90 "
                    style={{
                      width: "565px",
                      height: "300px",
                      borderradius: "10",
                    }}
                  />
                </div>
              </div>

              <div className="col">
                <div className="banner5">
                  <img
                    src={banner5}
                    alt="banner5"
                    className="cursor w-90 "
                    style={{
                      width: "565px",
                      height: "300px",
                      borderradius: "10",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsLetterSection mt-5 mb-5 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <p>Rs100 discount for your first order</p>
              <h2>Join with us and get...</h2>
              <p className="text-light mt-0">
                Join our email subscription to get updates <br /> on promotions
                and coupons
              </p>
              <form>
                <CiMail />
                <input type="text" />
                <Button>Submit</Button>
              </form>
            </div>
            <div className="col-mb-2">
              <img
                src={bgnewsletter1}
                alt="newsletter"
                style={{
                  height: "250px",
                  width: "500px",
                  marginLeft: "550px",
                  position: "static",
                }}
              />
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Home;
