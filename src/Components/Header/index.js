import { Link } from "react-router-dom";
import Logo from "../../assests/images/Logo.jpg";
import CountryDropdown from "../CountryDropdown";
import { Button } from "@mui/material";
import { FaCircleUser } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              This is to be <b>edited</b>
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  {" "}
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>

              <div className="col-sm-10 d-flex align-items-center part2">
                <CountryDropdown />

                <SearchBox />

                <div className="part3 -flex align-items-center ml-auto">
                  <Button className="circle mr-3">
                    <FaCircleUser />
                  </Button>
                  <div className="ml-auto cartTab d-flex align-items-center ml-auto">
                    <span className="price"> Rs.1050 </span>
                    <div className="position-relative ml-2">
                      <Button className="circle ">
                        <IoBagOutline />
                      </Button>
                      <span className="count d-flex align-items-centerjustify-content-center">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <nav>
          <div className="container">
            <div className="row">
              <div className="col-sm-3 navpart1">
                <Button className="allCatTab">
                  <span className="text">ALL CATEGORIES</span>
                </Button>
              </div>
              <div className="col-sm-9 navpart9"></div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
