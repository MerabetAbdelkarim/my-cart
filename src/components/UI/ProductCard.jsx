import { Col } from "react-bootstrap"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import './product-card.css'
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import { addFavoriteItem } from "../../redux/slices/favoriteSlice";

import { toast } from 'react-toastify';
import { AsyncImage } from "loadable-image";
import { Blur } from 'transitions-kit'
import { Link } from "react-router-dom";
import { useState } from "react";

function ProductCard({ item, fav }) {
    const dispatch = useDispatch()
    const sts = fav?true:false
    const [iconFav, setIconFav] = useState(sts)
    console.log('iconFav', iconFav)

    const addToCart = () => {
        dispatch(addItem(item))
        toast.success('product added to cart')
    }
    const addTofavorite = () => {
        dispatch(addFavoriteItem(item))
        setIconFav(!iconFav)
    }
    return (
        <Col md={6} lg={3}>
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
                    <motion.button whileHover={{ scale: 1.1 }} className="btn-add" onClick={addToCart} >Add to Cart</motion.button>
                    <motion.button whileTap={{ scale: 1.5 }} className="btn-love" onClick={addTofavorite} >
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
    )
}

export default ProductCard