import { useEffect, useState } from 'react';
import { PiOctagon } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const CategorySection = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/categories')
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <section className="container mx-auto py-5 px-3">
            <h4 className='text-sub-heading font-bold flex items-center gap-2'><PiOctagon className='inline text-white rounded-lg bg-sub-heading' size={18}></PiOctagon> <span className='text-md'>Categories</span></h4>
            <h3 className='text-3xl text-heading dark:text-white font-bold pt-2 mb-10'>Browse by Category</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {categories.map((category) => (
                    <div key={category._id} className='bg-white hover:shadow-lg duration-500 rounded-md dark:bg-secondary border dark:border-0 py-3 px-3'>
                        <Link to={`/category/${category._id}`}>
                            <img
                                className="mx-auto rounded-md"
                                src={category.image}
                                alt={category.name}
                            />
                            <h3 className="text-xl font-semibold text-center">
                                {category.name}
                            </h3>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategorySection;