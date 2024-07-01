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
const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 navpart1">
            <Button className="allCatTab align-items-center">
              <span className="icon1 mr-2">
                <IoIosMenu />
              </span>
              <span className="text">ALL CATEGORIES</span>
              <span className="icon2 ml-2">
                <FaAngleDown />
              </span>
            </Button>
          </div>
          <div className="col-sm-9 navpart2 d-flex align-items-center">
            {" "}
            {/*All categories ko side ko nav*/}
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">
                  Home
                  <FaHome />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  Fashion
                  <GiClothes />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  Electronics
                  <MdOutlineDevices />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  Bakery <MdBakeryDining />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  Grocery
                  <MdLocalGroceryStore />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  Blog
                  <FaBlog />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  Contact Us
                  <MdContactSupport />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
