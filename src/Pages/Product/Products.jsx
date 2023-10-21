import { useEffect, useState } from 'react';
import { PiOctagon } from 'react-icons/pi';
import Loading from '../../components/Loading';
import ProdutcsCard from './ProdutcsCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const loadProduct = async () => {
            setIsLoading(true)
            try {
                const res = await fetch('https://techhub-server-jmdtg788y-mohammad-alis-projects.vercel.app/products');
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };
        loadProduct();
        window.scrollTo(0, 0);
    }, []);

    if (isLoading) {
        return <Loading></Loading>;
    }
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
                {products.map((product) => (
                    <ProdutcsCard
                        key={product._id}
                        product={product}></ProdutcsCard>
                ))}
            </div>
        </section>
    );
};

export default Products;
