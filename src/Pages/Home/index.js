import HomeBanner from "../../Components/HomeBanner";
import { Button } from "@mui/material";
import banner1 from "../../assests/images/Banner1.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import Slider from "react-slick";

const Home = () => {
  var productsSliderOptions = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <HomeBanner />
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner">
                <img src={banner1} alt="banner1" className="cursor w-100" />
              </div>
            </div>

            <div className="col-ml-2 productRow"></div>
            <div className="d-flex align-items-left">
              <div className="info w-100">
                <h3 className="ml-0 hd">BEST SELLERS</h3>
                <p className="text-light text-sml mb-0 ">
                  {" "}
                  Do not miss the current offers{" "}
                </p>
              </div>
              <div className="button-container" style={{ marginLeft: "auto" }}>
                <Button className="viewAllBtn">
                  View all <IoIosArrowRoundForward />
                </Button>

                <div className="product_row">
                  {/* <Slider {...productsSliderOptions}>
                    <div className="item productItem">
                      <div className="imgWrapper">
                        <img
                          src="https://smartdoko.com/storage/products/resized/1720333109_7633.png"
                          alt=""
                          className="w-100"
                        />
                      </div>
                    </div>
                  </Slider>  */}
                  <div className="homeBannerSection">
                    <Slider {...productsSliderOptions}>
                      <div className="item productItem">
                        <div className="imgWrapper">
                          <img
                            src="https://smartdoko.com/storage/products/resized/1720333109_7633.png"
                            alt=""
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="item productItem">
                        <div className="imgWrapper">
                          <img
                            src="https://smartdoko.com/storage/products/resized/1721547959_9570.jpg"
                            alt=""
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="item productItem">
                        <div className="imgWrapper">
                          <img
                            src="https://smartdoko.com/storage/products/thumb/1722489037_6437.jpg"
                            alt=""
                            className="w-100"
                          />
                        </div>
                      </div>

                      <div className="item productItem">
                        <div className="imgWrapper">
                          <img
                            src="https://smartdoko.com/storage/products/thumb/1719317298_5712.jpg"
                            alt=""
                            className="w-100"
                          />
                        </div>
                      </div>
                    </Slider>
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
