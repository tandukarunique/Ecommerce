import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { AiOutlineFullscreen } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import ProductModel from "../ProductModel/index";
import { useState } from "react";

const ProductItem = () => {
  const [isOpenProductModel, setIsOpenProductModel] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const viewProductDetails = (product) => {
    setSelectedProduct(product);
    setIsOpenProductModel(true);
  };

  const closeProductModel = () => {
    setIsOpenProductModel(false);
    setSelectedProduct(null);
  };

  const products = [
    {
      id: 1,
      name: "Wega 32 Inch Frameless Led Smart Android 12",
      image: "https://img.drz.lazcdn.com/static/np/p/9963edcd6c3a25f2a783804509a76d05.jpg_720x720q80.jpg_.webp",
      oldPrice: "Rs 21,990",
      netPrice: "Rs 16,028",
      discount: "27%",
      stock: "In Stock",
      rating: 5.0,
      details: "Wega 32 Inch Frameless Smart LED TV with Android 12, 1GB RAM, 8GB Storage. Great for high-definition video streaming and smart home connectivity.",
    },
    {
      id: 2,
      name: "Portable Small Folding Laptop Table",
      image: "https://img.drz.lazcdn.com/static/np/p/68a381c0e23645cbceb90120a0a82652.jpg_400x400q80.jpg_.webp",
      oldPrice: "Rs 1,400",
      netPrice: "Rs 1,250",
      discount: "18%",
      stock: "In Stock",
      rating: 4.8,
      details: "Compact and portable folding laptop table, perfect for working from home or small spaces. Can be folded and stored easily.",
    },
    {
      id: 3,
      name: "Foldable Wardrobe Clothes Organizer",
      image: "https://img.drz.lazcdn.com/static/np/p/37614cf25842cbb472f34c43f0d6ef50.jpg_400x400q80.jpg_.webp",
      oldPrice: "Rs 1,400",
      netPrice: "Rs 1,250",
      discount: "27%",
      stock: "In Stock",
      rating: 4.9,
      details: "A foldable wardrobe organizer to help you keep your clothes neatly arranged and easily accessible. Saves space and is ideal for travel.",
    },
    {
      id: 4,
      name: "Brown PU Leather Casual Bi Fold Wallet",
      image: "https://img.drz.lazcdn.com/static/np/p/09bd51742e27827366ccb87f19c6f376.jpg_400x400q80.jpg_.webp",
      oldPrice: "Rs 1,900",
      netPrice: "Rs 1,750",
      discount: "20%",
      stock: "In Stock",
      rating: 4.7,
      details: "A stylish and durable brown PU leather bifold wallet. Has multiple card slots and a coin pocket for convenience.",
    },
    {
      id: 5,
      name: "Summer Men's Slides Brand Sandals",
      image: "https://img.drz.lazcdn.com/g/kf/Sdfa89ca24dc14dc7a19177d202525551w.jpg_400x400q80.jpg_.webp",
      oldPrice: "Rs 1,099",
      netPrice: "Rs 1,005",
      discount: "16%",
      stock: "In Stock",
      rating: 4.6,
      details: "Comfortable and stylish summer men's slides. Ideal for casual wear, these slides offer excellent grip and comfort.",
    },
    {
      id: 6,
      name: "Makkuse Classic Trio Combo Pack",
      image: "https://smartdoko.com/storage/products/resized/1720692455_3374.jpg",
      oldPrice: "Rs 1,567",
      netPrice: "Rs 1,360",
      discount: "13%",
      stock: "In Stock",
      rating: 4.5,
      details: "A classic trio combo pack of quality kitchenware. Includes essential tools for everyday use in the kitchen.",
    },
    {
      id: 7,
      name: "Ultima Blaze Gaming Earbuds with ANC",
      image: "https://img.drz.lazcdn.com/static/np/p/d60298ee53f9f5b5e51846ec4c39142b.png_400x400q80.png_.webp",
      oldPrice: "Rs 5,000",
      netPrice: "Rs 4,700",
      discount: "17%",
      stock: "In Stock",
      rating: 5.0,
      details: "Premium gaming earbuds with Active Noise Cancellation (ANC) for an immersive gaming experience. Includes multiple ear tips for comfort.",
    },
    {
      id: 8,
      name: "Winter Unisex Indoor Slippers",
      image: "https://img.drz.lazcdn.com/static/np/p/c39ec1cc237c06eff810c6ea6d625e04.jpg_720x720q80.jpg_.webp",
      oldPrice: "Rs 1,079",
      netPrice: "Rs 879",
      discount: "23%",
      stock: "In Stock",
      rating: 4.9,
      details: "Cozy and comfortable indoor slippers for winter. Keeps your feet warm and is suitable for both men and women.",
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        pagination={{ clickable: true }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="item productItem">
              <div className="imgWrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-100 mt-3 ml-1"
                />
                <span className="badge badge-primary">{product.discount}</span>
                <div className="actions">
                  <Button>
                    <CiHeart />
                  </Button>
                  <Button onClick={() => viewProductDetails(product)}>
                    <AiOutlineFullscreen />
                  </Button>
                </div>
                <div className="info">
                  <h5>{product.name}</h5>
                  <span>{product.stock}</span>
                  <Rating
                    className="mt-1 mb-2"
                    name={`rating-${product.id}`}
                    value={product.rating}
                    readOnly
                    size="small"
                    precision={0.5}
                  />
                  <div className="d-flex">
                    <span className="OldPrice mt-3 ml-1">{product.oldPrice}</span>
                    <span className="NetPrice text-danger mt-3 ml-2">
                      {product.netPrice}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {isOpenProductModel && selectedProduct && (
        <ProductModel
          product={selectedProduct}
          closeProductModel={closeProductModel}
        />
      )}
    </>
  );
};

export default ProductItem;
