import Dialog from "@mui/material/Dialog";
import { IoIosClose } from "react-icons/io";
import { Button } from "@mui/material";

const ProductModel = (props) => {
  return (
    <>
      <Dialog
        open={true}
        className="productModel"
        onClose={() => props.CloseProductModel(false)}
      >
        <Button className="close_">
          <IoIosClose />
        </Button>
        <h4 class="mb-0"> All Natural </h4>
      </Dialog>
    </>
  );
};
export default ProductModel;
