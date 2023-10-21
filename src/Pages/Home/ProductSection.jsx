import { PiOctagon } from 'react-icons/pi';
import useDataload from '../../Utilities/useDataload';
import ProdutcsCard from '../Product/ProdutcsCard';

const ProductSection = () => {
    const products = useDataload('https://techhub-server-jmdtg788y-mohammad-alis-projects.vercel.app/products');
    return (
        <section className="container mx-auto py-5 px-3">
            <h4 className="text-sub-heading font-bold flex items-center gap-2">
                <PiOctagon
                    className="inline text-white rounded-lg bg-sub-heading"
                    size={18}></PiOctagon>{' '}
                <span className="text-md">Our Products</span>
            </h4>
            <h3 className="text-3xl text-heading dark:text-white font-bold pt-2 mb-10">
                Explore our Products
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {products.slice(0, 6).map((product) => (
                    <ProdutcsCard
                        key={product._id}
                        product={product}></ProdutcsCard>
                ))}
            </div>
        </section>
    );
};

export default ProductSection;
