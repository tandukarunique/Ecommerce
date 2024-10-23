import Dialog from "@mui/material/Dialog";
import { IoIosClose } from "react-icons/io";
import { Button } from "@mui/material";
import Rating from '@mui/material/Rating';

const ProductModel = (props) => {
  return (
    <>
      <Dialog
        open={true}
        className="productModel"
        onClose={() => props.CloseProductModel()}
      >
        <Button className="close_ d-flex" style={{display:"flex",fontSize:"32px",marginLeft:"auto"}} onClick={() => props.CloseProductModel()}>
          <IoIosClose />
        </Button>
        <h4 class="mb-3 "  > All Natural ingrediants used in the because is then what</h4>
        <div className="d-flex align-items">
          <div className="d-flex align-items-centre mr-4 ml-2">
            {" "}
            <span >Brands: </span>
            <span className="ml-2">welch's</span>
          </div>
          <Rating name="read-only" value={5} size="small" precision={0.5}readOnly />
          <div className="row mt-2">
            <div className="col-md-5"></div>
            <div className="col-md-7"></div>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default ProductModel;
