import { useContext, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { PiSealCheckThin } from 'react-icons/pi';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthContext';
import useDataload from '../../Utilities/useDataload';
import ProdutcsCard from './ProdutcsCard';

const SingleProduct = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const product = useLoaderData();
    const loadRelatedProducts = useDataload(
        `https://techhub-server-jmdtg788y-mohammad-alis-projects.vercel.app/category/${product.category}`,
    );
    const relatedProducts = loadRelatedProducts.filter(relatedProduct =>relatedProduct._id !== product._id)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const deleteProduct = async (id) => {
        const response = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        });
        if (response.isConfirmed) {
            try {
                const res = await fetch(
                    `https://techhub-server-jmdtg788y-mohammad-alis-projects.vercel.app/delete-product/${id}`,
                    {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    },
                );
                const data = await res.json();
                if (data.deletedCount) {
                    const res = Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success',
                    );
                    if (res) {
                        navigate('/products')
                    }
                }
            } catch (err) {
                console.error(err);
                Swal.fire('Erorr', 'Something Went Wrong :)', 'error');
            }
        } else if (response.dismiss === Swal.DismissReason.cancel) {
            Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
        }
    };
    const addToCart = ()=>{
        const email = user.email;

        const cartProduct = {
            email:email,
            productName: product.name,
            productImage: product.image,
            productBrand: product.brand,
            productPrice: product.price
        }
        fetch('https://techhub-server-jmdtg788y-mohammad-alis-projects.vercel.app/add-cart',{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.modifiedCount) {
                toast.success('Added to Cart');
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div className="container mx-auto py-5">
            <div className="flex justify-end gap-2">
                <Link
                    to={`/product-edit/${product._id}`}
                    className="bg-primary dark:bg-slate-200 text-white dark:text-primary rounded py-1 px-2">
                    Edit
                </Link>
                <button
                    onClick={() => deleteProduct(product._id)}
                    className="bg-red-700  text-white rounded py-1 px-2">
                    Delete
                </button>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-evenly gap-3 py-5">
                <div>
                    <img
                        className="w-96 bg-slate-100 dark:bg-slate-700 rounded-lg px-20 py-16"
                        src={product.image}
                        alt={product.name}
                    />
                </div>
                <div>
                    <h3 className="text-3xl md:text-5xl font-bold py-3">
                        {product.name}
                    </h3>
                    <h4 className="text-xl font-medium py-1">
                        Price: ৳ {product.price}
                    </h4>
                    <div className="flex items-center gap-2 py-2">
                        <div>
                            {[...Array(5)].map((num, idx) => {
                                return (
                                    <FaStar
                                        color="#ffa800"
                                        className="inline"
                                        key={idx}
                                        size={15}></FaStar>
                                );
                            })}
                        </div>
                        <span className="text-sm text-primary dark:text-white font-bold">
                            {product.rating}
                        </span>
                    </div>
                    <Link
                        className="text-emerald-700 border border-emerald-700 rounded-md text-lg py-1 px-2 my-3"
                        to={`/brand/${product.brand}`}>
                        {product.brand}
                    </Link>
                    <Link
                        className="block text-md font-medium pt-3"
                        to={`/category/${product.category}`}>
                        Type: {product.category}
                    </Link>
                    <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />

                    <ul className="text-blue-600 font-bold space-y-1">
                        <li>
                            <PiSealCheckThin
                                className="inline"
                                size={20}></PiSealCheckThin>{' '}
                            In stock
                        </li>
                        <li>
                            <PiSealCheckThin
                                className="inline"
                                size={20}></PiSealCheckThin>{' '}
                            Free delivery available
                        </li>
                    </ul>
                    <button onClick={addToCart} className="bg-primary border border-primary dark:border-slate-100 text-slate-100 text-2xl rounded-md py-2 px-3 my-5">
                        Add to Cart
                    </button>
                </div>
            </div>
            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700 w-3/4 mx-auto" />
            <div className="w-3/4 mx-auto">
                <h3>Description:</h3>
                <p>{product.shortdescription}</p>
                <h3 className="text-3xl text-heading dark:text-slate-300 underline underline-offset-4 font-bold py-2 my-5">
                    Related Products
                    <span className="text-sub-heading underline underline-offset-4">
                        {name}
                    </span>
                </h3>
                {relatedProducts.length !== 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {relatedProducts.slice(0, 3).map((product) => (
                            <ProdutcsCard
                                key={product._id}
                                product={product}></ProdutcsCard>
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-center items-center h-80">
                        <p className="text-xl font-bold">No Product Found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SingleProduct;
