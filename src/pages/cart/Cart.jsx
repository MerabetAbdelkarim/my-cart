import { MdDeleteOutline } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UpperSection from "../produts/components/UpperSection";
import Helmet from "../../components/helmet/Helmet";
import { deleteItem } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";



function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log('cartItems : ', cartItems)
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch()
  const deleteToCart = ({ item }) => {
    dispatch(deleteItem(item))
    toast.success('product daleted!')
  }

  return (
    <Helmet title="Cart">
      <div className="cart">
        <div className="container">
          <UpperSection title={"Shopping Cart"} />
          {cartItems.length == 0 ? (
            <h2 className="text-center">
              No item has been added to your cart
            </h2>
          ) : (
            <>
              <table className="table table-xs">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th className="text-right">Qty</th>
                    <th className="text-right">Price</th>
                    <th className="text-right">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr className="item-row" key={index}>
                      <td>
                        <img
                          src={item.Image}
                          width={"80px"}
                          height={"60px"}
                          alt=""
                        />
                      </td>
                      <td>
                        <p>
                          <strong>{item.productName}</strong>
                        </p>
                      </td>
                      <td className="text-right">{item.quantity} items</td>
                      <td className="text-right">${item.price}</td>
                      <td className="text-right">
                        <button
                          className="btn-delete"
                          onClick={() => {
                            dispatch(deleteItem(item))
                            toast.warning('product deleted!')
                          }}>
                          <MdDeleteOutline color="red" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="total-row info">
                    <td className="text-right" colSpan="2">
                      Total
                    </td>
                    <td className="text-right">{totalQuantity} items</td>
                    <td className="text-right">${totalAmount}</td>
                  </tr>
                </tfoot>
              </table>
              <div className="d-flex justify-content-end">
                <div className="">
                  <p>taxes and shipping will calculate in checkout</p>
                  <button className="btn-buy mb-2">
                    <Link to={"/products"}>Continue Shopping</Link>
                  </button>
                  <br />
                  <button className="btn-buy">
                    <Link to={"/checkout"}>Checkout</Link>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Helmet>

  );
}

export default Cart;
