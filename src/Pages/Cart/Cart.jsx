import { useContext, useEffect, useState } from 'react';
import { PiTrashSimpleLight } from 'react-icons/pi';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthContext';

const Cart = () => {
    const { user } = useContext(AuthContext);
    const email = user.email;

    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        const fetchDataCartProducts = async () => {
            try {
                const res = await fetch(`http://localhost:8080/cart/${email}`);
                const data = await res.json();
                await setCartProducts(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchDataCartProducts();
    }, [email]);

    const removeCartProduct = async (product) => {
        try {
            const res = await fetch(`http://localhost:8080/edit-cart`, {
                method: 'PUT',
                body: JSON.stringify({ ...product, email }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            console.log(data);
            if (data.modifiedCount) {
                const remainingCartProduct = cartProducts.filter(
                    (loadProduct) =>
                        loadProduct.productName !== product.productName,
                );
                setCartProducts(remainingCartProduct);
                toast.success('Removed from Cart');
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="container mx-auto py-5 px-3">
            <h2 className="text-3xl text-center font-extrabold py-3">
                Shopping Cart
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                <div className="bg-white hover:shadow-lg rounded-md dark:bg-secondary border dark:border-0 md:w-3/4 mx-auto p-3">
                    <div className="flex flex-row justify-between items-center">
                        <h3 className="text-lg font-bold">Your Cart</h3>
                        <h4 className="text-md text-slate-500 dark:text-white">
                            {cartProducts.length} Items in cart
                        </h4>
                    </div>
                    <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
                    {!cartProducts.length && (
                        <div className="text-center py-5">
                            <p>No Product Found in Cart</p>
                        </div>
                    )}
                    {cartProducts.map((product, idx) => {
                        return (
                            <div key={idx}>
                                <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-3 px-3">
                                    <img
                                        className="w-20 rounded-md mx-auto sm:mx-0"
                                        src={product.productImage}
                                        alt=""
                                    />
                                    <div className="px-5">
                                        <h4 className="text-xl font-bold">
                                            {product.productName}
                                        </h4>
                                        <h5 className="text-slate-300">
                                            {product.productBrand}
                                        </h5>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold">
                                            ৳ {product.productPrice}
                                        </h3>
                                    </div>
                                    <button
                                        onClick={() => {
                                            removeCartProduct(product);
                                        }}
                                        className="">
                                        <PiTrashSimpleLight
                                            size={20}></PiTrashSimpleLight>
                                    </button>
                                </div>

                                <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Cart;
