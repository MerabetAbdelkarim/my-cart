import Helmet from "../../components/helmet/Helmet";
import UpperSection from "./components/UpperSection";
import "./products.css";

function Product() {
  return (
    <Helmet title="Products">
      <div className="products">
        <UpperSection title={'Products'}/>
      </div>
    </Helmet>
  );
}

export default Product;
