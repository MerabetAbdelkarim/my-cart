import { Col } from "react-bootstrap"
import { AiFillHeart } from "react-icons/ai";
import './product-card.css'
import { motion } from "framer-motion";

function ProductCard({item}) {
  return (
    <Col  md={6} lg={3}>
        <div className="product">
            <div className="product_image">
                <motion.img whileHover={{scale: 0.9}} src={item.imgUrl} width={'100%'} alt="" />
            </div>
            <div className="product_title">
                <h5>{item.productName}</h5>
                <span>{item.category}</span>
            </div>
            <div className="product_price">
                <p>{item.price} $</p>
            </div>
            <div className="product_action d-flex justify-content-between align-items-center">
                <motion.button whileHover={{scale: 1.1}} className="btn-add" >Add to Cart</motion.button>
                <motion.button whileTap={{scale:1.5}} className="btn-love" >
                    <AiFillHeart style={{width:'25px', height:'25px', color:'#D04848'}}/>
                    {/* <AiOutlineHeart /> */}
                </motion.button>
            </div>
        </div>
    </Col>
  )
}

export default ProductCard