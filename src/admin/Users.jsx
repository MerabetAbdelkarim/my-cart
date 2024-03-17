import { Button, Container } from "react-bootstrap";
import useGetData from "../custome-hooks/useGetData"
import AnimationLoanding from "../components/UI/AnimationLoanding"
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";

function Users() {
    const { data: productsData, loading } = useGetData('user')

    const deleteProduct = async (id) => {
        await deleteDoc(doc(db, "user", id));
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
                                    <th>Name</th>
                                    <th className="text-right">Email</th>
                                    <th className="text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productsData?.map((user, index) => (
                                        <tr className="item-row" key={index}>
                                            <td>
                                                <img
                                                    src={user?.photoURL}
                                                    width={"80px"}
                                                    height={"60px"}
                                                    alt=""
                                                />
                                            </td>
                                            <td>
                                                <p>
                                                    <strong>{user.displayName}</strong>
                                                </p>
                                            </td>
                                            <td className="text-right">{user.emaiSignup}</td>
                                            <td className="text-right">
                                                <Button variant="danger" onClick={() => { deleteProduct(user.id) }}>
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

export default Users