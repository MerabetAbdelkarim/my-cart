
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UpperSection from "../produts/components/UpperSection";
import Helmet from "../../components/helmet/Helmet";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { AsyncImage } from "loadable-image";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-toastify";
import { addItem } from "../../redux/slices/cartSlice";
import { addFavoriteItem } from "../../redux/slices/favoriteSlice";
import { Blur } from 'transitions-kit'


function Favorite() {

  const favoriteItems = useSelector((state) => state.favorite.favoriteItems);
  console.log('favorite Items : ', favoriteItems)
  const [iconFav, setIconFav] = useState(true)

  const addTofavorite = () => {
    dispatch(addFavoriteItem(item))
    setIconFav(!iconFav)
  }

  const dispatch = useDispatch()

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
                    <Col md={6} lg={3} key={index}>
                      <div className="product">
                        <Link to={`/product/${item.id}`}>
                          <motion.div whileHover={{ scale: 0.9 }} className="product_image">
                            <AsyncImage
                              src={item.imgUrl}
                              style={{ width: "100%", height: "auto", borderRadius: '10px', aspectRatio: 16 / 16 }}
                              loader={<div style={{ background: '#eee' }} />}
                              error={<div style={{ background: '#eee' }} />}
                              Transition={props => <Blur radius={10} {...props} />}
                            />
                          </motion.div>
                          <div className="product_title">
                            <h5>{item.productName}</h5>
                            <span>{item.category}</span>
                          </div>
                          <div className="product_price">
                            <p>{item.price} $</p>
                          </div>
                        </Link>
                        <div className="product_action d-flex justify-content-between align-items-center">
                          <motion.button whileHover={{ scale: 1.1 }} className="btn-add" onClick={() => {
                            dispatch(addItem(item))
                            toast.success('product added to cart')
                          }} >Add to Cart</motion.button>
                          <motion.button whileTap={{ scale: 1.5 }} className="btn-love" onClick={() => {
                            dispatch(addFavoriteItem(item))
                            setIconFav(!iconFav)
                          }} >
                            {
                              iconFav
                                ?
                                <AiFillHeart style={{ width: '25px', height: '25px', color: '#D04848' }} />
                                :
                                <AiOutlineHeart style={{ width: '25px', height: '25px', color: '#D04848' }} />
                            }
                          </motion.button>
                        </div>
                      </div>
                    </Col>
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
