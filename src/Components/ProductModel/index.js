import Dialog from "@mui/material/Dialog";
import { IoIosClose } from "react-icons/io";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import QuantityBox from "../quantityBox/index";
import { FaHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";

const ProductModel = ({ product, closeProductModel }) => {
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  return (
    <Dialog open={true} onClose={closeProductModel} className="productModel">
      <Button
        className="close_ d-flex"
        style={{ display: "flex", fontSize: "32px", marginLeft: "auto" }}
        onClick={closeProductModel}
      >
        <IoIosClose />
      </Button>
      {/* Change: Display dynamic product name */}
      <h4 className="mb-1">{product.name}</h4>
      <div className="d-flex ml-4">
        <Rating
          name={`rating-${product.id}`}
          value={product.rating}
          size="small"
          precision={0.5}
          readOnly
        />
      </div>
      <div className="row mt-3 productDetailModel">
        {/* Left Column: Product Image */}
        <div className="col-md-6">
          <div className="productZoom ml-4">
            <div className="slid">
              <Slider {...sliderSettings}>
                <div className="w-100">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1.01}
                    src={product.image}
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>

        {/* Right Column: Product Info */}
        <div className="col-md-6 flex flex-col space-y-4">
          {/* Pricing Section */}
          <div className="flex items-center space-x-4 mb-3">
            <span className="text-lg line-through" style={{ fontSize: "18px" }}>
              {product.oldPrice}
            </span>
            <span
              className="text-lg text-danger font-semibold ml-2 "
              style={{ fontSize: "20px" }}
            >
              {product.netPrice}
            </span>
          </div>

          {/* Product Details Section */}
          <div className=" text-gray-700" style={{ fontSize: "20px" }}>
            <span
              className="font-medium"
              style={{ marginLeft: "-15px", fontSize: "20px" }}
            >
              Details:
            </span>
            <span className="ml-2">{product.details}</span>
          </div>

          {/* Stock Badge */}
          <span
            className={`badge ${
              product.stock ? "bg-green-500" : "bg-red-500"
            } text-white px-4 py-1 rounded-full`}
          >
            {product.stock}
          </span>
          <div className="d-flex align-items-center">
            <QuantityBox />
            {/* Add to Cart Button */}
            <Button
              className="btn-lg btn-big btn-round mt-3 float-right "
              style={{
                background: "#233a95",
                fontSize: "17px",
                padding: "8px 40px",
                borderRadius: "30px",
                color: "white",
                textTransform: "capitalize",
              }}
            >
              Add to Cart
            </Button>
          </div>
          <div className="d-flex align item-center">
            <Button
              className="btn-round"
              style={{
                textTransform: "capitalize",
                marginTop: "25px",
                cursor: "pointer",
              }}
              variant="outlined"
            >
              <FaHeart style={{ marginRight: "9px" }} /> Add to Wishlist
            </Button>
            <Button className="btn-round btn-sml ml-3 mt-4" variant="outlined">
              <MdCompareArrows />
              Compare
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductModel;
