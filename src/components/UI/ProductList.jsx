import { Row } from 'react-bootstrap'
import ProductCard from './ProductCard'

const ProductList = ({data}) => {
  const shuffledData = data.sort(() => Math.random() - 0.5);
  const randomFourItems = shuffledData.slice(0, 4);
  return (
    <>
        <Row>
            {
              randomFourItems.map((item, index)=>(
                <ProductCard item={item} key={index}/>
              ))
            }
        </Row>
    </>
  )
}

export default ProductList