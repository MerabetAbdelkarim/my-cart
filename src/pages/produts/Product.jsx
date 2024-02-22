import Helmet from "../../components/helmet/Helmet";
import UpperSection from "./components/UpperSection";
import "./products.css";

function Product() {
  return (
    <Helmet title="Products">
      <div className="produts">
        <UpperSection />
      </div>
    </Helmet>
  );
}

export default Product;
