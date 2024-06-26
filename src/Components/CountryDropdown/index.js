import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";
const CountryDropdown = () => {
  return (
    <>
      <Button className="countryDrop">
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">Nepal</span>
        </div>
        <span className="ml-auto">
          <FaAngleDown></FaAngleDown>
        </span>
      </Button>
    </>
  );
};
export default CountryDropdown;
