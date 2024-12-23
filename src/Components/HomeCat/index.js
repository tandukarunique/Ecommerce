import React from "react";
// import{Swiper,SwiperSlide} from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import Slider from "react-slick";
const HomeCat = () => {
  var catsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,
  };
  return (
    <section className="homecat">
      <div className="container">
        <h3 className="hd w-100"> FEATURED CATEGORIES</h3>
        <Slider {...catsettings}>
          <div className="itemcat mt-2 ">
            <img
              src="https://img.drz.lazcdn.com/static/np/p/d7134d7a6663a49abf9cd79bcc18ef0b.jpg_170x170q80.jpg_.webp"
              alt="cat1"
            />
            <h5>Switch</h5>
          </div>

          <div className="itemcat  mt-2">
            <img src="https://video.drz.lazcdn.com/vod-4e6588/d02c8f4c147771efbfc987c7361c0102/snapshots/normal/3443D691-18F87B64F95-1637-5547-817-8203000001.jpg" alt="cat2"/>
            <h5>Beauty</h5>
          </div>

          <div className="itemcat mt-2">
            <img
              src="https://img.drz.lazcdn.com/static/np/p/1f2637cd647f91950be2408051e64044.jpg_400x400q75.jpg_.webp"
              alt="cat3"
            />
            <h5>Motors</h5>
          </div>

          <div className="itemcat  mt-2">
            <img
              src="https://img.drz.lazcdn.com/static/np/p/4e6779850e91038b92df2dfc001a82be.jpg_400x400q75.jpg_.webp"
              alt="cat4"
            />
            <h5>Sports</h5>
          </div>

          <div className="itemcat  mt-2">
            <img
              src="https://img.drz.lazcdn.com/static/np/p/1f777a30b2306af11735b52b43e26781.jpg_400x400q75.jpg_.webp"
              alt="cat5"
            />
            <h5>Cleaning</h5>
          </div>

          <div className="itemcat  mt-2">
            <img
              src="https://img.drz.lazcdn.com/static/np/p/de521d18ed2a93e3bff6e2748b84f04e.jpg_400x400q75.jpg_.webp"
              alt="cat6"
            />
            <h5>Fashion</h5>
          </div>

          <div className="itemcat  mt-2">
            <img
              src="https://img.drz.lazcdn.com/static/np/p/b3a0bcf7ff947371c79ac8c65171f530.jpg_400x400q75.jpg_.webp"
              alt="cat7"
            />
            <h5>For babies</h5>
          </div>

          <div className="itemcat mt-2">
            <img
              src="https://img.drz.lazcdn.com/static/np/p/264b0b674b07b1340f90e54c2a1669ca.jpg_400x400q75.jpg_.webp"
              alt="cat8"
            />
            <h5>Home Appliances</h5>
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default HomeCat;
