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
const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navpart1">
            <div className="catWrapper">
              {" "}
              <Button className="allCatTab align-items-center">
                <span className="icon1 mr-2">
                  <IoIosMenu />
                </span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2 ml-2">
                  <FaAngleDown />
                </span>
              </Button>
              <div className="sidebarNav">
                <ul><li><Link to="/">
                  <Button>clothing</Button>
                </Link></li>
                <li>
                <Link to="/">
                  <Button>footwear</Button>
                </Link>
                </li>
                <li>
                <Link to="/">
                  <Button>watches</Button>
                </Link></li></ul>
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
