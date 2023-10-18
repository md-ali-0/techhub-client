import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategorySection = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/categories')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCategories(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <section className="container mx-auto py-5 px-3">
            <h3 className='text-3xl text-center font-bold py-3'>Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {categories.map((category) => (
                    <div key={category._id} className='bg-white dark:bg-slate-600 rounded-lg py-3 px-3'>
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