import { Button } from "@mui/material";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { MdOutlineDevices } from "react-icons/md";
import { MdBakeryDining } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { MdLocalGroceryStore } from "react-icons/md";
import { CiMobile1 } from "react-icons/ci";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
const Navigation = () => {
  const [isOpenSidebarVal, setisOpenSidebarVal] = useState(false);
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navpart1">
            <div className="catWrapper">
              {" "}
              <Button
                className="allCatTab align-items-center"
                onClick={() => setisOpenSidebarVal(!isOpenSidebarVal)}
              >
                <span className="icon1 mr-2">
                  <IoIosMenu />
                </span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2 ml-2">
                  <FaAngleDown />
                </span>
              </Button>
              {/*All categories wala nav*/}
              <div
                className={`sidebarNav ${isOpenSidebarVal === true ? "open" : ""}`}
              >
                <ul>
                  <li>
                    <Link to="/">
                      <Button>Men <FaAngleRight /></Button>
                    </Link>
                    <div className="submenu" >
                    <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Bags</Button>
                  </Link>

                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Women <FaAngleRight /></Button>
                    </Link>
                    <div className="submenu" >
                    <Link to="/">
                    <Button>Make up</Button>
                  </Link>
                  <Link to="/">
                    <Button>Bags</Button>
                  </Link>
                  <Link to="/">
                    <Button>Clothing</Button>
                  </Link>

                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Beauty <FaAngleRight /></Button>
                    </Link>
                    <div className="submenu" >
                    <Link to="/">
                    <Button>Make up</Button>
                  </Link>
                  <Link to="/">
                    <Button>Bags</Button>
                  </Link>
                  <Link to="/">
                    <Button>Nails</Button>
                  </Link>

                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Watches <FaAngleRight /></Button>
                    </Link>
                    <div className="submenu" >
                    <Link to="/">
                    <Button>Alpina</Button>
                  </Link>
                  <Link to="/">
                    <Button>Rolex</Button>
                  </Link>
                  <Link to="/">
                    <Button>Brellum</Button>
                  </Link>

                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Kids <FaAngleRight /></Button>
                    </Link>
                    <div className="submenu" >
                    <Link to="/">
                    <Button>Toys</Button>
                  </Link>
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>Books</Button>
                  </Link>

                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Gift <FaAngleRight /></Button>
                    </Link>
                    <div className="submenu" >
                    <Link to="/">
                    <Button>Electronics</Button>
                  </Link>
                  <Link to="/">
                    <Button>Clothes</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>

                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-10 navpart2 d-flex align-items-center">
            {" "}
            {/*All categories ko side ko nav*/}
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    Home <FaHome />
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    Men
                    <GiClothes />
                  </Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    Women
                    <MdOutlineDevices />
                  </Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    Beauty
                    <MdBakeryDining />
                  </Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    Watches <MdLocalGroceryStore />
                  </Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    Kids
                    <FaBlog />
                  </Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    gift <CiMobile1 />
                  </Button>
                  <div className="submenu shadow">
                    <Link to="/">
                      <Button>clothing</Button>
                    </Link>
                    <Link to="/">
                      <Button>footwear</Button>
                    </Link>
                    <Link to="/">
                      <Button>watches</Button>
                    </Link>
                  </div>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    Contact
                    <MdContactSupport />
                  </Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
