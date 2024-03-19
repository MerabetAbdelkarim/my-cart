import { Row } from 'react-bootstrap'
import ProductCard from './ProductCard'

const ProductList = ({data}) => {
  return (
    <>
        <Row>
            {
              data?.map((item, index)=>(
                <ProductCard item={item} key={index}/>
              ))
            }
        </Row>
    </>
  )
}

export default ProductList