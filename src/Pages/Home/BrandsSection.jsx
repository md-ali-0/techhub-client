import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BrandsSection = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/brands')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setBrands(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <section className="container mx-auto py-5">
            <h3 className='text-3xl text-center font-bold py-3'>Brands</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {brands.map((brand) => (
                    <div key={brand._id} className='py-3'>
                        <Link to={`/brand/${brand._id}`}>
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
