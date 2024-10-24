import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { AiOutlineFullscreen } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import ProductModel from "../ProductModel/index";
import { useState } from "react";
// import Dialog from "@mui/material/Dialog";
// import { IoIosClose } from "react-icons/io";

const ProductItem = () => {
  const [isOpenProductModel, setisOpenProductModel] = useState(false);

  const viewProductDetails = (id) => {
    setisOpenProductModel(true);
  };
  const CloseProductModel = () => {
    setisOpenProductModel(false);
  };
  return (
    <>
      {" "}
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <div className="NewProduct">
          {" "}
          <SwiperSlide>
            <div className="item productItem">
              <div className="imgWrapper ">
                <img
                  src="https://img.drz.lazcdn.com/static/np/p/9963edcd6c3a25f2a783804509a76d05.jpg_720x720q80.jpg_.webp"
                  alt=""
                  className=" w-100 mt-3"
                />
                <span className="badge badge-primary">27%</span>
                <div className="actions">
                  <Button>
                    <CiHeart />
                  </Button>
                  <Button onClick={() => viewProductDetails(1)}>
                    <AiOutlineFullscreen />
                  </Button>
                </div>
                <div className="info ">
                  {" "}
                  <div className="text-success d-block">Item 1</div>
                  <h5>
                    {" "}
                    Wega 32 Inch Frameless Led Smart Android 12 1GB RAM 8GB{" "}
                  </h5>
                  <span>In Stock</span>
                  <Rating
                    className="mt-1 mb-2"
                    name="read-only"
                    value={5}
                    readOnly
                    size="small"
                    precision={0.5}
                  />
                  <div className="d-flex">
                    <span className="OldPrice mt-3 ml-1"> Rs 21,990 </span>
                    <span className="Netprice text-danger mt-3 ml-2 ">
                      {" "}
                      Rs 16,028
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="item productItem">
              <div className="imgWrapper">
                <img
                  src="https://img.drz.lazcdn.com/static/np/p/68a381c0e23645cbceb90120a0a82652.jpg_400x400q80.jpg_.webp"
                  alt=""
                  className="w-100"
                />
                <span className="badge badge-primary">18%</span>
                <div className="actions">
                  <Button>
                    <CiHeart />
                  </Button>
                  <Button>
                    <AiOutlineFullscreen />
                  </Button>
                </div>
                <div className="info">
                  {" "}
                  <div className="text-success d-block">Item 2</div>
                  <h5>
                    {" "}
                    Portable small Folding Laptop Table - With Versatile Feature{" "}
                  </h5>
                  <span>In Stock</span>
                  <Rating
                    className="mt-1 mb-2"
                    name="read-only"
                    value={5}
                    readOnly
                    size="small"
                    precision={0.5}
                  />
                  <div className="d-flex">
                    <span className="OldPrice mt-3 ml-1"> Rs 1,400 </span>
                    <span className="Netprice text-danger mt-3 ml-2 ">
                      {" "}
                      Rs 1,250
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="item productItem">
              <div className="imgWrapper">
                <img
                  src="https://img.drz.lazcdn.com/static/np/p/b1e8015a2f1104125b41ac76be7b5e23.png_400x400q80.png_.webp"
                  alt=""
                  className="w-100"
                />
                <span className="badge badge-primary">17%</span>
                <div className="actions">
                  <Button>
                    <CiHeart />
                  </Button>
                  <Button>
                    <AiOutlineFullscreen />
                  </Button>
                </div>
                <div className="info">
                  {" "}
                  <div className="text-success d-block">Item 2</div>
                  <h5>
                    {" "}
                    Portable small Folding Laptop Table - With Versatile Feature{" "}
                  </h5>
                  <span>In Stock</span>
                  <Rating
                    className="mt-1 mb-2"
                    name="read-only"
                    value={5}
                    readOnly
                    size="small"
                    precision={0.5}
                  />
                  <div className="d-flex">
                    <span className="OldPrice mt-3 ml-1"> Rs 1,400 </span>
                    <span className="Netprice text-danger mt-3 ml-2 ">
                      {" "}
                      Rs 1,250
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="item productItem">
              <div className="imgWrapper">
                <img
                  src="https://img.drz.lazcdn.com/static/np/p/37614cf25842cbb472f34c43f0d6ef50.jpg_400x400q80.jpg_.webp"
                  alt=""
                  className="w-100"
                />
                <span className="badge badge-primary">27%</span>
                <div className="actions">
                  <Button>
                    <CiHeart />
                  </Button>
                  <Button>
                    <AiOutlineFullscreen />
                  </Button>
                </div>
                <div className="info">
                  {" "}
                  <div className="text-success d-block">Item 4</div>
                  <h5>
                    {" "}
                    Foldable Wardrobe Clothes Organizer for Jeans, Drawer
                    Organizer{" "}
                  </h5>
                  <span>In Stock</span>
                  <Rating
                    className="mt-1 mb-2"
                    name="read-only"
                    value={5}
                    readOnly
                    size="small"
                    precision={0.5}
                  />
                  <div className="d-flex">
                    <span className="OldPrice mt-3 ml-1"> Rs 1,400 </span>
                    <span className="Netprice text-danger mt-3 ml-2 ">
                      {" "}
                      Rs 1,250
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="item productItem">
              <div className="imgWrapper">
                <img
                  src="https://img.drz.lazcdn.com/static/np/p/09bd51742e27827366ccb87f19c6f376.jpg_400x400q80.jpg_.webp"
                  alt=""
                  className="w-100"
                />
                <span className="badge badge-primary">20%</span>
                <div className="actions">
                  <Button>
                    <CiHeart />
                  </Button>
                  <Button>
                    <AiOutlineFullscreen />
                  </Button>
                </div>
                <div className="info">
                  {" "}
                  <div className="text-success d-block">Item 5</div>
                  <h5>
                    {" "}
                    Brown PU Leather Casual Bi Fold Wallet For Men | Brown Solid
                    Wallet{" "}
                  </h5>
                  <span>In Stock</span>
                  <Rating
                    className="mt-1 mb-2"
                    name="read-only"
                    value={5}
                    readOnly
                    size="small"
                    precision={0.5}
                  />
                  <div className="d-flex">
                    <span className="OldPrice mt-3 ml-1"> Rs 1,900 </span>
                    <span className="Netprice text-danger mt-3 ml-2 ">
                      {" "}
                      Rs 1,750
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="item productItem">
              <div className="imgWrapper">
                <img
                  src="https://img.drz.lazcdn.com/g/kf/Sdfa89ca24dc14dc7a19177d202525551w.jpg_400x400q80.jpg_.webp"
                  alt=""
                  className="w-100"
                />
                <span className="badge badge-primary">16%</span>
                <div className="actions">
                  <Button>
                    <CiHeart />
                  </Button>
                  <Button>
                    <AiOutlineFullscreen />
                  </Button>
                </div>
                <div className="info">
                  {" "}
                  <div className="text-success d-block">Item 6</div>
                  <h5>
                    {" "}
                    Summer Men's Slides Brand Men Women Slippers Indoor Sandals{" "}
                  </h5>
                  <span>In Stock</span>
                  <Rating
                    className="mt-1 mb-2"
                    name="read-only"
                    value={5}
                    readOnly
                    size="small"
                    precision={0.5}
                  />
                  <div className="d-flex">
                    <span className="OldPrice mt-3 ml-1"> Rs 1,099 </span>
                    <span className="Netprice text-danger mt-3 ml-2 ">
                      {" "}
                      Rs 1,005
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="item productItem">
              <div className="imgWrapper">
                <img
                  src="https://smartdoko.com/storage/products/resized/1720692455_3374.jpg"
                  alt=""
                  className="w-100"
                />
                <span className="badge badge-primary">13%</span>
                <div className="actions">
                  <Button>
                    <CiHeart />
                  </Button>
                  <Button>
                    <AiOutlineFullscreen />
                  </Button>
                </div>
                <div className="info">
                  {" "}
                  <div className="text-success d-block">Item 7</div>
                  <h5>
                    {" "}
                    Makkuse Classic Trio Combo pack| Home made | Authentic{" "}
                  </h5>
                  <span>In Stock</span>
                  <Rating
                    className="mt-1 mb-2"
                    name="read-only"
                    value={5}
                    readOnly
                    size="small"
                    precision={0.5}
                  />
                  <div className="d-flex">
                    <span className="OldPrice mt-3 ml-1"> Rs 1,567 </span>
                    <span className="Netprice text-danger mt-3 ml-2 ">
                      {" "}
                      Rs 1,360
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="item productItem">
              <div className="imgWrapper">
                <img
                  src="https://img.drz.lazcdn.com/static/np/p/d60298ee53f9f5b5e51846ec4c39142b.png_400x400q80.png_.webp"
                  alt=""
                  className="w-100"
                />
                <span className="badge badge-primary">17%</span>
                <div className="actions">
                  <Button>
                    <CiHeart />
                  </Button>
                  <Button>
                    <AiOutlineFullscreen />
                  </Button>
                </div>
                <div className="info">
                  {" "}
                  <div className="text-success d-block">Item 8</div>
                  <h5>
                    {" "}
                    Ultima Blaze Gaming Earbuds with ANC | 42 Hours Playtime{" "}
                  </h5>
                  <span>In Stock</span>
                  <Rating
                    className="mt-1 mb-2"
                    name="read-only"
                    value={5}
                    readOnly
                    size="small"
                    precision={0.5}
                  />
                  <div className="d-flex">
                    <span className="OldPrice mt-3 ml-1"> Rs 5,000 </span>
                    <span className="Netprice text-danger mt-3 ml-2 ">
                      {" "}
                      Rs 4,700
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="item productItem">
              <div className="imgWrapper ">
                <img
                  src="https://img.drz.lazcdn.com/static/np/p/c39ec1cc237c06eff810c6ea6d625e04.jpg_720x720q80.jpg_.webp"
                  alt=""
                  className="w-100 "
                />
                <span className="badge badge-primary ">23%</span>
                <div className="actions">
                  <Button>
                    <CiHeart />
                  </Button>
                  <Button>
                    <AiOutlineFullscreen />
                  </Button>
                </div>
                <div className="info">
                  {" "}
                  <div className="text-success d-block">Item 9</div>
                  <h5>
                    {" "}
                    Winter Unisex Indoor Slippers | Washable | Type : Rare{" "}
                  </h5>
                  <span>In Stock</span>
                  <Rating
                    className="mt-1 mb-2"
                    name="read-only"
                    value={5}
                    readOnly
                    size="small"
                    precision={0.5}
                  />
                  <div className="d-flex">
                    <span className="OldPrice mt-3 ml-1"> Rs 1,079 </span>
                    <span className="Netprice text-danger mt-3 ml-2 ">
                      {" "}
                      Rs 879
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      {isOpenProductModel === true && <ProductModel CloseProductModel={CloseProductModel}/>}
    </>
  );
};
export default ProductItem;
