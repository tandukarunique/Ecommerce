import HomeBanner from "../../Components/HomeBanner";
import { Button } from "@mui/material";
import banner1 from "../../assests/images/Banner1.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
// import Rating from "@mui/material/Rating";
// import { AiOutlineFullscreen } from "react-icons/ai";
import ProductItem from "../../Components/ProductItem";

const Home = () => {
  
  return (
    <>
      <HomeBanner />
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-4.5">
              <div className="banner">
                <img src={banner1} alt="banner1" className="cursor w-100" />
              </div>
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
                    <ProductItem/>
                    
                  </div>
                </div>
              </div>
            </div>




            <div className="d-flex align-items-left mt-5">
              <div className="info w-100 align-items-d-flex">
                <h3 className="hd w-100">New Products</h3>
                <p className="text-light text-sml mb-10 w-100 ">
                  New Products with updated stocks
                </p>
              </div>
              <div className="button-container">
                <Button className="viewAllBtn mb-10">
                  View all <IoIosArrowRoundForward />
                </Button>

                <div className="product_row">
                  <div className="ItemSection">
                    <ProductItem/>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
          
        </div>
        
      </section>
    </>
  );
};

export default Home;
