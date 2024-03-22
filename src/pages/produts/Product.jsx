import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Helmet from "../../components/helmet/Helmet";
import UpperSection from "./components/UpperSection";
import "./products.css";
import { CiSearch } from "react-icons/ci";
import ProductList from "../../components/UI/ProductList";
import useGetData from "../../custome-hooks/useGetData";

function Product() {
  const { data: products } = useGetData('products')
  const [dataProducts, setDataProducts] = useState()
  const handleFilter = (e) => {
    const { value } = e.target;
    const filteredProducts = products?.filter((item) => item.category === value);
    setDataProducts(filteredProducts);
  };

  const handeSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products?.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    setDataProducts(searchedProducts)
  }
  useEffect(() => {
    if (products) {
      setDataProducts(products); // Update state with fetched data
    }
  }, [products]);
  return (
    <Helmet title="Products">
      <div className="products">
        <UpperSection title={'Products'} />
        <section className="fiters">
          <Container>
            <Row className="justify-content-between">
              <Col md={5} lg={3}>
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
              <Col md={4} lg={3}>
                <div className="sort-products">
                  <select >
                    <option hidden>Sort by</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                  </select>
                </div>
              </Col>
              <Col md={12} lg={6}>
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
              dataProducts?.length === 0
                ? <h1 className="text-center">No products are found !</h1>
                : <ProductList data={dataProducts} />
            }
          </Container>
        </section>

      </div>
    </Helmet>
  );
}

export default Product;
