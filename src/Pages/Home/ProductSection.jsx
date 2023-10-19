import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { PiEyeThin, PiOctagon, PiPencilSimpleThin, PiTrashThin } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const ProductSection = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <section className="container mx-auto py-5 px-3">
            <h4 className='text-sub-heading font-bold flex items-center gap-2'><PiOctagon className='inline text-white rounded-lg bg-sub-heading' size={18}></PiOctagon> <span className='text-md'>Our Products</span></h4>
            <h3 className='text-3xl text-heading dark:text-white font-bold pt-2 mb-10'>Explore our Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {products.map((product) => (
                    <div key={product._id} className="bg-white hover:shadow-lg border dark:border-0 duration-500 rounded-md dark:bg-secondary py-3">
                        <div className="flex justify-between items-center">
                            <img
                                src={product.image}
                                className="w-32 rounded-md px-5"
                                alt=""
                            />
                            <div className=''>
                                <div className="flex items-center gap-2">
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
                                <h3 className="text-base text-gray-600 dark:text-white">
                                    {product.brand}
                                </h3>
                                <h3 className="text-sm text-primary dark:text-white my-1">
                                    {product.category}
                                </h3>
                                <h3 className="text-lg text-primary dark:text-white font-semibold">
                                ৳ {product.price}
                                </h3>
                                <h3 className="text-md font-semibold">
                                    {product.name}
                                </h3>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-2 pr-3'>
                                <Link className='border dark:border-slate-500 rounded p-2'><PiEyeThin size={20}></PiEyeThin></Link>
                                <Link className='border dark:border-slate-500 rounded p-2'><PiTrashThin size={20}></PiTrashThin></Link>
                                <button className='border dark:border-slate-500 rounded p-2'><PiPencilSimpleThin size={20}></PiPencilSimpleThin></button>
                            </div>
                        </div>
                        
                        <Link to={`/product/${product._id}`}></Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductSection;
