import React from "react";
import Slider from "react-slick";

const HomeBanner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    autoplay:true,
  };

  return (
    <div className="homeBannerSection">
      <Slider {...settings}>
        <div className="item">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/h8e/hb2/33109669904414/Main_EOSS-FLAT-50-WEB--2024-07--10-new-hp.jpg" 
            alt="Banner 1"
          />
        </div>
        <div className="item">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/h26/h44/32916137639966/Bullmer-web_48-jw8.jpg" 
            alt="Banner 2"
          />
        </div>
        <div className="item">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/hdc/h2f/32916137050142/selected-web_38-dk.jpg" className="w-100"
            alt="Banner 3"
          />
        </div>
        <div className="item">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/hf4/h4c/33109699657758/Timex-web_9--ka9.jpg" className="w-100"
            alt="Banner 4"
          />
        </div>
      </Slider>
    </div>
  );
};

export default HomeBanner;
