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
      <div className="d-flex ml-2 ">
        <div className="d-flex mr-4 ml-2">
          <span>Brands: </span>
          <span className="ml-2">Welch's</span>
        </div>
        <Rating
          name="read-only"
          value={5}
          size="small"
          precision={0.5}
          readOnly
        />
         </div>
        <div className="row mt-2 productDetailModel">
          <div className="col-md-0">
            <div className="productZoom">
              <Slider
                {...settings2}
                className="zoomSliderBig"
                ref={zoomSliderBig}
              >
                <div className="item">
                <InnerImageZoom
  zoomType="hover"
  zoomScale={1.25} 
  src="https://img.drz.lazcdn.com/static/np/p/4b50a9aa0feac3884541417feb76d2c7.jpg_400x400q75.jpg_.webp " 
  style={{ width: "auto", height: "auto" }} 
/>

                </div>
              </Slider>
            </div>
          </div>
          <div className="col-md-7">
            <div className="d-flex"><br/><br/><br/></div>
          </div>
        </div>
     
    </Dialog>
  );
};

export default ProductModel;
