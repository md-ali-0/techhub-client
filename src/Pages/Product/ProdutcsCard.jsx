import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { PiEyeThin, PiPencilSimpleThin } from 'react-icons/pi';
import { Link } from 'react-router-dom';


const ProdutcsCard = ({ product }) => {

    return (
        <div className="relative bg-white hover:shadow-lg border dark:border-0 duration-500 rounded-md dark:bg-secondary py-3">
            <div className="flex justify-between items-center">
                <img
                    src={product.image}
                    className="w-28 rounded-md px-5"
                    alt=""
                />
                <div>
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
                    <h3 className="text-lg text-primary dark:text-white font-semibold">
                        ৳ {product.price}
                    </h3>
                    <h3 className="text-md font-semibold">{product.name}</h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 pr-3">
                    <Link
                        to={`/product/${product._id}`}
                        className="border dark:border-slate-500 rounded p-2">
                        <PiEyeThin size={20}></PiEyeThin>
                    </Link>
                    <Link
                        to={`/product-edit/${product._id}`}
                        className="border dark:border-slate-500 rounded p-2">
                        <PiPencilSimpleThin size={20}></PiPencilSimpleThin>
                    </Link>
                </div>
            </div>
            <div className='absolute top-1 left-1'>
                <h4 className={`text-white text-xs rounded py-0.5 px-1.5`} style={{backgroundColor: `${"#" + Math.floor(Math.random() * 16777215).toString(16)}`}}>{product.category}</h4>
            </div>
        </div>
    );
};

ProdutcsCard.propTypes = {
    product: PropTypes.object.isRequired,
};
export default ProdutcsCard;
