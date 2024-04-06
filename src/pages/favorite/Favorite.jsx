
import { useSelector } from "react-redux";
import UpperSection from "../produts/components/UpperSection";
import Helmet from "../../components/helmet/Helmet";
import { Row } from "react-bootstrap";

import ProductCard from "../../components/UI/ProductCard";


function Favorite() {
  const favoriteItems = useSelector((state) => state.favorite.favoriteItems);
  console.log('favorite Items : ', favoriteItems)
  return (
    <Helmet title="Favorite">
      <div className="cart">
        <div className="container">
          <UpperSection title={"Favorite"} />
          {favoriteItems.length == 0 ? (
            <h2 className="text-center">
              No item has been Favorite
            </h2>
          ) : (
            <>
              <Row>
                {
                  favoriteItems.map((item, index) => (
                    <ProductCard item={item} key={index} fav={true} />
                  ))
                }
              </Row>
            </>
          )}
        </div>
      </div>
    </Helmet>
  );
}

export default Favorite;
