import { Button } from "@mui/material";
import * as React from "react";
import { FaAngleDown } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
// import { FaSearch } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { useState ,useContext,useEffect} from "react";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";

// import { filterList } from "@mui/icons-material";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const CountryDropdown = () => {
  const [isOpenModel, setisOpenModel] = useState(false);
  const [selectedTab, setselectedTab] = useState(null);
  const [countryList, setcountryList] = useState([]);

  const context = useContext(MyContext);

  const selectCountry = (index) => {
    setselectedTab(index);
    setisOpenModel(false);
  };
  useEffect(() => {
    setcountryList(context.countryList);
  }, [context.countryList]);
  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    const list = countryList.filter((item) => {
      return item.country.toLowerCase().includes(keyword);
    });
    setcountryList(list);
  };
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
          <input
            type="text"
            placeholder="Search your area...."
            onChange={filterList}
          />
          <Button className="close_" onClick={() => setisOpenModel(false)}>
            <IoIosClose />
          </Button>
        </div>
        <ul className="countryList">
          {countryList?.length !== 0 &&
            countryList?.map((item, index) => {
              return (
                <li key={index}>
                  <Button
                    onClick={() => selectCountry(index)}
                    className={`${selectedTab === index ? "active" : "Error bhayo"}`}
                  >
                    {item.country}
                  </Button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </>
  );
};
export default CountryDropdown;
