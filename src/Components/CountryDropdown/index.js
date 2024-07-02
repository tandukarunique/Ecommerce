import { Button } from "@mui/material";
import * as React from "react";
import { FaAngleDown } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
// import { FaSearch } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import Slide from "@mui/material/Slide";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const CountryDropdown = () => {
  const [isOpenModel, setisOpenModel] = useState(false);
  return (
    <>
      <Button className="countryDrop" onClick={() => setisOpenModel(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">Nepal</span>
        </div>
        <span className="ml-auto">
          <FaAngleDown></FaAngleDown>
        </span>
      </Button>
      <Dialog
        open={isOpenModel}
        onClose={() => setisOpenModel(false)}
        className="locationmodel"
        TransitionComponent={Transition}
      >
        <h4 className="mb-0">Choose your delivery location</h4>
        <p>Enter your address and we will specify the offer for your area.</p>

        <div className="headerSearch w-100">
          <input type="text" placeholder="Search your area...." />
          <Button className="close_" onClick={() => setisOpenModel(false)}>
            <IoIosClose />
          </Button>
        </div>
        <ul className="countryList">
          <li>
            <Button onClick={() => setisOpenModel(false)}>Nepal</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>China</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>India</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>Bhutan</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>Bangladesh</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>Malsiya</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>Bangkok</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>USA</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>France</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>Brazil</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>Russia</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>Germany</Button>
          </li>
        </ul>
      </Dialog>
    </>
  );
};
export default CountryDropdown;
