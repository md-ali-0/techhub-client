import { FaStar } from 'react-icons/fa';
import { PiSealCheckThin } from 'react-icons/pi';
import { Link, useLoaderData } from 'react-router-dom';

const SingleProduct = () => {
    const product = useLoaderData();
    console.log(product);
    return (
        <div className="container mx-auto py-5">
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
                    <button className="bg-primary border border-primary dark:border-slate-100 text-slate-100 text-2xl rounded-md py-2 px-3 my-5">
                        Add to Cart
                    </button>
                </div>
            </div>
            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700 w-3/4 mx-auto" />
            <div className="w-3/4 mx-auto">
                <h3>Description:</h3>
                <p>{product.shortdescription}</p>
            </div>
        </div>
    );
};

export default SingleProduct;
