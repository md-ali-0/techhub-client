import { useEffect, useState } from 'react';
import { PiOctagon } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const BrandsSection = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/brands')
            .then((res) => res.json())
            .then((data) => {
                setBrands(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <section className="container mx-auto py-5 px-3">
            <h4 className='text-sub-heading font-bold flex items-center gap-2'><PiOctagon className='inline text-white rounded-lg bg-sub-heading' size={18}></PiOctagon> <span className='text-md'>Brands</span></h4>
            <h3 className='text-3xl text-heading dark:text-white font-bold pt-2 mb-10'>Browse by Brand</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {brands.map((brand) => (
                    <div key={brand._id} className='py-3'>
                        <Link to={`/brand/${brand.name}`}>
                            <img
                                className="mx-auto rounded-md"
                                src={brand.image}
                                alt={brand.name}
                            />
                            <h3 className="text-xl font-semibold text-center">
                                {brand.name}
                            </h3>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BrandsSection;
