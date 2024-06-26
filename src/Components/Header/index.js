import { Link } from "react-router-dom";
import Logo from "../../assests/images/Logo.jpg";
import CountryDropdown from "../CountryDropdown";
import { FaSearch } from "react-icons/fa";
import { Button } from "@mui/material";
import { FaCircleUser } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";

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

                {/* Header Search Start Here */}
                <div className="headerSearch ml-3">
                  <input type="text" placeholder="Search for products...." />
                  <Button>
                    <FaSearch />
                  </Button>
                </div>
                {/* Header Search ends Here */}

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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
