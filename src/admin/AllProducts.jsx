import { Button, Container } from "react-bootstrap";
import useGetData from "../custome-hooks/useGetData"
import AnimationLoanding from "../components/UI/AnimationLoanding"
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";

function AllProducts() {
    const { data: productsData, loading } = useGetData('products')
    console.log(productsData)

    const deleteProduct = async (id) => {
        await deleteDoc(doc(db, "products", id));
        toast.success('Product has been deleted!')
    }

    return (
        <Container>
            <div style={{ minHeight: '50vh' }}>
                {
                    loading ?
                        <AnimationLoanding /> :
                        <table className="table table-xs">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th className="text-right">Category</th>
                                    <th className="text-right">Price</th>
                                    <th className="text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productsData?.map((product, index) => (
                                        <tr className="item-row" key={index}>
                                            <td>
                                                <img
                                                    src={product.imgUrl}
                                                    width={"80px"}
                                                    height={"60px"}
                                                    alt=""
                                                />
                                            </td>
                                            <td>
                                                <p>
                                                    <strong>{product.title}</strong>
                                                </p>
                                            </td>
                                            <td className="text-right">{product.category}</td>
                                            <td className="text-right">${product.price}</td>
                                            <td className="text-right">
                                                <Button variant="danger" onClick={() => { deleteProduct(product.id) }}>
                                                    delete
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>

                        </table>
                }

            </div>
        </Container>

    )
}

export default AllProducts