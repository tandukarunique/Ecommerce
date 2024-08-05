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
              </div>
              <div className="product_row">
                <Slider {...productsSliderOptions}>
                  <div className="item productItem">
                    <div className="imgWrapper">
                      <img
                        src="https://www.google.com/search?sca_esv=098f310337d61f75&sca_upv=1&rlz=1C1BNSD_enNP1073NP1073&sxsrf=ADLYWIKiV5XgoJ9AglZAcb792eLSVUI-hQ:1722826907667&q=random+product+images&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J_86uWOeqwdnV0yaSF-x2joZDvir2QxhZkTA8rK1etu4Y3067o-fAl7lygmK690uJyNhakMg---uzr_Yo0p3ZtGQanELZDOaVjFN7yUDe4fgm8aQJKQiASDBoi8CDjwBb6GIRacDnd6jmUt3-NxqSASwMc-y&sa=X&sqi=2&ved=2ahUKEwjF2dyu7tyHAxWCT2wGHZzhGFsQtKgLegQIEBAB&biw=1280&bih=551&dpr=1.5#vhid=IFvrFul-_BHfIM&vssid=mosaic"
                        alt="1"
                        className="w-100"
                      />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
