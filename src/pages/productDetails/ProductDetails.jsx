import { useEffect, useRef, useState } from "react";
import data from "../../assets/data/products.js"
import "../produts/products.css";
import UpperSection from "../produts/components/UpperSection.jsx";
import Helmet from "../../components/helmet/Helmet";
import { Col, Container, Form, ListGroup, Row, Tab, Tabs } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice.js";
import { toast } from "react-toastify";
import ProductList from "../../components/UI/ProductList.jsx";

function ProductDetails() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const reviewUser = useRef('')
  const reviewMsg = useRef('')


  const product = data.find((item) => item.id === id)
  const [key, setKey] = useState('description');
  const [rating, setRating] = useState(null)

  const { imgUrl, productName, price, avgRating, description, shortDesc, reviews, category } = product;

  
  const addToCart = () => {
    dispatch(addItem(product))
    toast.success('Product added to cart')
  }

  const relatedProducts= data.filter((item)=>item.category===category)
  
  const handlerSubmit = (e)=>{
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    console.log(reviewUserName, rating, reviewUserMsg)
    
    const reviewObj= {
      userName: reviewUserName,
      text: reviewUserName,
      rating
    }
    toast.success('Review submitted')
    reviewUser.current.value=''
    reviewMsg.current.value=''
    setRating(null)
  }

  useEffect(()=>{
    window.scrollTo(0,0)
  },[product])

  return (
    <div>
      <Container className="mb-5">
        <UpperSection title={`${productName}`} />
        <div className="content pt-0">
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="product-image">
                <img src={imgUrl} width={'100%'} alt="" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="product-details">
                <h2 className="product-name pb-2">{productName}</h2>
                <div className="product-rating d-flex gap-4 mb-5">
                  <div>
                    <IoIosStar color="orange" />
                    <IoIosStar color="orange" />
                    <IoIosStar color="orange" />
                    <IoIosStarHalf color="orange" />
                    <IoIosStarOutline color="orange" />
                  </div>
                  <div>(<span style={{ color: 'orange' }}>{avgRating}</span> ratings)</div>
                </div>
                <span className="product-price pb-2 fs-5">${price}</span>
                <span> Category: {category}</span>
                <p> {shortDesc} </p>
                <motion.button
                  whileHover={{ scale: 1.1 }} onClick={addToCart}
                  className="btn-buy"
                >
                  Add to Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </div>
        <div className="description mb-3 mt-2">
          <Row>
            <Col>
              <Tabs
                id=""
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-2"
              >
                <Tab eventKey="description" title="Description">
                  {description}
                </Tab>
                <Tab eventKey="reviews" title={`Reviews (${reviews.length})`} >
                  <ListGroup className="ps-5">
                    {
                      reviews?.map((item, index) => (
                        <ListGroup.Item className="p-0" style={{ border: 'none' }} key={index}>
                          <span className="m-0 fw-bold">Mohamed </span>
                          <span style={{ color: 'orange' }}> {item.rating} rating</span>
                          <p className="fw-light">{item.text}</p>
                        </ListGroup.Item>
                      ))
                    }
                  </ListGroup>
                  <div className="review-form">
                    <h4>Leave your experience</h4>
                    <Form action="">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control required ref={reviewUser} type="text" placeholder="Enter name" />
                      </Form.Group>
                      <Form.Group className="mb-3 ms-3 d-flex align-items-center gap-3" controlId="formBasicEmail">
                        <motion.span whileHover={{scale: 1.1}} whileTap={{scale: 1.2}} className="icon" onClick={() => setRating(1)}>
                          1 <IoIosStar color="orange" />
                        </motion.span>
                        <motion.span whileHover={{scale: 1.1}} whileTap={{scale: 1.2}} className="icon"  onClick={() => setRating(2)}>
                          2 <IoIosStar color="orange" />
                        </motion.span>
                        <motion.span whileHover={{scale: 1.1}} whileTap={{scale: 1.2}} className="icon" onClick={() => setRating(3)}>
                          3 <IoIosStar color="orange" />
                        </motion.span>
                        <motion.span whileHover={{scale: 1.1}} whileTap={{scale: 1.2}} className="icon" onClick={() => setRating(4)}>
                          4 <IoIosStar color="orange" />
                        </motion.span>
                        <motion.span whileHover={{scale: 1.1}} whileTap={{scale: 1.2}} className="icon" onClick={() => setRating(5)}>
                          5 <IoIosStar color="orange" />
                        </motion.span>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control required ref={reviewMsg} as="textarea" rows={3} placeholder="Review Message" />
                      </Form.Group>
                      <motion.button whileHover={{ scale: 1.1 }} type="submit" className="btn-buy" onClick={handlerSubmit}>Submit</motion.button>
                    </Form>
                  </div>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </div>
        <div className="products-suggested">
          <h5 className="fw-bold">You might also like</h5>
          {
            <ProductList data={relatedProducts}/>
          }
        </div>
      </Container>
    </div>
  )
}

export default ProductDetails