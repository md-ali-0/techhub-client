import { useContext } from "react";
import { PiTrashSimpleLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import useDataload from "../../Utilities/useDataload";

const Cart = () => {
    const {user} = useContext(AuthContext)
    const email = user.email
    const cartProducts = useDataload(`http://localhost:8080/cart/${email}`)
    console.log(cartProducts);
    return (
        <div className="container mx-auto py-5 px-3">
            <h2 className="text-3xl text-center font-extrabold py-3">
                Shopping Cart
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                <div className="bg-white hover:shadow-lg rounded-md dark:bg-secondary border dark:border-0 md:w-3/5 p-3">
                    <div className="flex flex-row justify-between items-center">
                        <h3 className="text-lg font-bold">Your Cart</h3>
                        <h4 className="text-md text-slate-500 dark:text-white">
                            4 Items in cart
                        </h4>
                    </div>
                    <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
                    <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-3 px-3">
                        <img
                            className="w-20 rounded-md mx-auto sm:mx-0"
                            src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/cart-page/1/product-1.png"
                            alt=""
                        />
                        <div className="px-5">
                            <h4 className="text-xl font-bold">
                                Apple Watch Series 7 - 44mm
                            </h4>
                            <h5 className="text-slate-300">Golden</h5>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">$259.00</h3>
                        </div>
                        <button className=""><PiTrashSimpleLight size={20}></PiTrashSimpleLight></button>
                    </div>
                    <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
                </div>
                <div className="bg-white hover:shadow-lg rounded-md dark:bg-secondary border dark:border-0 md:w-2/5 py-3 px-5">
                    <div className="flex justify-between items-center gap-5">
                        <h3 className="text-xl font-bold">Subtotal</h3>
                        <h4 className="text-xl font-bold">$589</h4>
                    </div>
                    <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"/>
                    <div className="flex justify-between items-center gap-5">
                        <h3 className="text-xl font-bold">Total</h3>
                        <h4 className="text-xl font-bold">$589</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 py-5">
                        <button className="bg-primary border dark:border-gray-600 rounded-md text-white py-3 px-5 w-full">Confirm payment</button>
                        <Link to='/products' className="bg-white border text-center border-primary rounded-md text-primary py-3 px-5 w-full">Continue Shopping</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
