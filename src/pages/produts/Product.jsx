import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Helmet from "../../components/helmet/Helmet";
import UpperSection from "./components/UpperSection";
import "./products.css";
import { CiSearch } from "react-icons/ci";
import ProductList from "../../components/UI/ProductList";
import data from "../../assets/data/products.js"

function Product() {
  const [dataProducts, setDataProducts] = useState(data)

  const handleFilter = (e) => {
    const value  = e.target.value;
    const filteredProducts = data.filter((item) => item.category === value);
    setDataProducts(filteredProducts);
  };
  
  const handeSearch = (e)=>{
    const searchTerm = e.target.value;
    const searchedProducts = data
    .filter(item=>item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    setDataProducts(searchedProducts)
  }

  console.log(dataProducts)
  return (
    <Helmet title="Products">
      <div className="products">
        <UpperSection title={'Products'} />
        <section className="fiters">
          <Container>
            <Row>
              <Col md={3}>
                <div className="filter-products">
                  <select onChange={handleFilter}>
                    <option hidden>Filter by category</option>
                    <option value="sofa">Sofa</option>
                    <option value="mobile">Mobile</option>
                    <option value="chair">Chair</option>
                    <option value="watch">Watch</option>
                    <option value="wireless">Wireless</option>
                  </select>
                </div>
              </Col>
              <Col md={3}>
                <div className="sort-products">
                  <select >
                    <option hidden>Sort by</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                  </select>
                </div>
              </Col>
              <Col md={6}>
                <div className="input-search">
                  <input type="text" onChange={handeSearch} placeholder="Search" />
                  <span><CiSearch /></span>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="products-content mb-4">
          <Container>
            {
              dataProducts.length === 0 
              ?<h1 className="text-center">No products are found !</h1>
              : <ProductList data={dataProducts} />
              
            }

          </Container>
        </section>

      </div>
    </Helmet>
  );
}

export default Product;
