import Dialog from "@mui/material/Dialog";
import { IoIosClose } from "react-icons/io";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import { useRef } from "react";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";

// import zoomitem1 from "../../assets/images/zoomitem1.webp";

const ProductModel = (props) => {
  const zoomSliderBig = useRef();

  const settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1, // Show one image at a time for zoom
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };
  // const goto = (index) => {
  //   zoomSliderBig.current.slickGoTo(index);
  //   zoomSliderBig.current.slickGoTo(index)
  // }

  return (
    <Dialog
      open={true}
      className="productModel"
      onClose={props.CloseProductModel}
    >
      <Button
        className="close_ d-flex"
        style={{ display: "flex", fontSize: "32px", marginLeft: "auto" }}
        onClick={props.CloseProductModel}
      >
        <IoIosClose />
      </Button>
      <h4 className="mb-4">
        Wega 32 Inch Frameless Led Smart Android 12 1GB RAM 8GB
      </h4>
      <div className="d-flex ml-4 ">
        <div className="d-flex mr-4 ml-2">
          <span>Brands: </span>
          <span className="ml-4">Welch's</span>
        </div>
        <Rating
          name="read-only"
          value={5}
          size="small"
          precision={0.5}
          readOnly
        />
      </div>
      <div className="row mt-3 productDetailModel">
        <div className="col-md-6">
          <div className="productZoom ml-4">
            <Slider
              {...settings2}
              className="zoomSliderBig"
              ref={zoomSliderBig}
            >
              <div className="w-100">
                <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1.01}
                  src="https://img.drz.lazcdn.com/static/np/p/7e874008fce415453a1629e638ec8871.jpg_720x720q80.jpg_.webp"
                />
              </div>
              <div className="w-100">
                <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1.01}
                  src="https://img.drz.lazcdn.com/static/np/p/10d64a0ba72761b6bb7d678e533a59fa.jpg_720x720q80.jpg_.webp"
                />
              </div>
              <div className="w-100">
                <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1.01}
                  src="https://img.drz.lazcdn.com/static/np/p/7e874008fce415453a1629e638ec8871.jpg_720x720q80.jpg_.webp"
                />
              </div>
              <div className="w-100">
                <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1.01}
                  src="https://gadgethousenepal.com/wp-content/uploads/2023/01/81iLglMLueL._SX679_.jpg"
                />
              </div>
            </Slider>
          </div>
        </div>
        <div className="col-md-0">
          <div className="d-flex info align">
            <span
              className="oldPrice lg"
              style={{ marginLeft: "-5px", fontSize: "20px" }}
            >
              Rs 21,990
            </span>
            <span
              className="netPrice text-danger lg"
              style={{ fontSize: "20px", marginLeft: "10px" }}
            >
              Rs 16.028
            </span>
          </div>
          <span className="badge bg-success mt-4">IN STOCK</span>
          <p className="mt-3"style={{fontSize:"20px"}}>
          Free Wall Mount inside Worth Rs.450<br/>Brand Name: WEGA, 
            <br/>Model: Wega 32" Smart High Sound<br/> 

           
          </p>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductModel;
