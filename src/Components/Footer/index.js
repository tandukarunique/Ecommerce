import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { PiVan } from "react-icons/pi";
import { TbMoneybag } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="topInfo row">
          <div className="col d-flex align-items-center">
            <span className="ml-2"> Everyday use products</span>
            <span>
              {" "}
              <MdOutlineProductionQuantityLimits />
            </span>
          </div>
          <div className="col d-flex align-items-center">
            <span className="ml-2"> Free delivery over order Rs.1000</span>
            <span>
              {" "}
              <PiVan />{" "}
            </span>
          </div>
          <div className="col d-flex align-items-center">
            <span className="ml-2"> Mega Discount</span>
            <span>
              {" "}
              <CiDiscount1 />{" "}
            </span>
          </div>
          <div className="col d-flex align-items-center">
            <span className="ml-2"> Best price in market</span>
            <span>
              {" "}
              <TbMoneybag />
            </span>
          </div>
        </div>
        <div className="row mt-5 linksWrap">
          <div className="col">
            <h5>Phones </h5>
            <ul>
              <li>
                {" "}
                <Link to="#">Samsung</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Lenovo</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Iphone</Link>
              </li>
              <li>
                {" "}
                <Link to="#">One Plus</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Huwaie</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Realme</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Laptop </h5>
            <ul>
              <li>
                {" "}
                <Link to="#">Apple</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Lenovo</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Dell</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Hp</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Samsung</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Asus</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Clothes </h5>
            <ul>
              <li>
                {" "}
                <Link to="#">Prada</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Chanel</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Zara</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Nike</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Vans</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Allbirds</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Shoes </h5>
            <ul>
              <li>
                {" "}
                <Link to="#">Jimmy Choo</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Converse</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Nike</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Addidas</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Timberland</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Vans</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Everyday essentials </h5>
            <ul>
              <li>
                {" "}
                <Link to="#">Wallets</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Keys</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Cosmetic</Link>
              </li>
              <li>
                {" "}
                <Link to="#">One Plus</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Tools</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Lights</Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="copyright mt-3 pt-3 pb-3 d-flex"
          style={{ fontSize: "16px" }}
        >
          <p>copyright 2024. All right reserved</p>
          <ul className="list list-inline ml-auto mb=0">
            <li className=" list-inline item">
              <Link to="#">
                <FaFacebook />
              </Link>
            </li>
            <li className=" list-inline item">
              <Link to="#">
                <FaInstagram />
              </Link>
            </li>
            <li className=" list-inline item">
              <Link to="#">
                <FaTwitter />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
