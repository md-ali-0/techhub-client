import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';

const UpdateProduct = () => {
    const {id} = useParams();
    const product = useLoaderData();
    const [brands, setBrands] = useState([])
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const resBrand = await fetch('http://localhost:8080/brands');
                const resCategory = await fetch('http://localhost:8080/categories');

                const dataBrand = await resBrand.json();
                const dataCategory = await resCategory.json();
    
                setBrands(dataBrand);
                setCategories(dataCategory);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
        window.scrollTo(0, 0)
    }, []);
    
    
    if (isLoading) {
        return <Loading></Loading>
     }
    const editProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const shortdescription = form.shortdescription.value;
        const category = form.category.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const updatedProduct = { name, image, shortdescription, category, brand, price, rating };
        fetch(`http://localhost:8080/edit-product/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedProduct),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    toast.success('Product Updated Successfully!');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="container mx-auto py-5 px-3">
            <div className="bg-white rounded-md shadow-md py-3 px-5 dark:bg-slate-900 md:w-3/4 mx-auto">
                <form onSubmit={editProduct}>
                    <div className="flex flex-col md:flex-row justify-between gap-5">
                        <div className="md:w-1/2">
                            <div className="py-2">
                                <label
                                    htmlFor="name"
                                    className="block text-lg py-2">
                                    Product Name:
                                </label>
                                <input
                                    type="text"
                                    className="border focus:outline-none rounded py-2 px-3 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600 w-full"
                                    name="name"
                                    id="name"
                                    placeholder="Enter Product Name"
                                    defaultValue={product.name}
                                />
                            </div>
                            <div className="pb-2">
                                <label
                                    htmlFor="image"
                                    className="block text-lg py-2">
                                    Product Image Url:
                                </label>
                                <input
                                    type="text"
                                    className="border focus:outline-none rounded py-2 px-3 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600 w-full"
                                    name="image"
                                    id="image"
                                    placeholder="Enter Product Image URL"
                                    defaultValue={product.image}
                                />
                            </div>
                            <div className="pb-2">
                                <label
                                    htmlFor="shortdescription"
                                    className="block text-lg py-2">
                                    Short Description:
                                </label>
                                <textarea
                                    className="border focus:outline-none rounded py-2 px-3 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600 w-full"
                                    name="shortdescription"
                                    id="shortdescription"
                                    cols="20"
                                    rows="5"
                                    placeholder="Enter Short Description"
                                    defaultValue={product.shortdescription}
                                    ></textarea>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="py-2">
                                <label
                                    htmlFor="category"
                                    className="block text-lg py-2">
                                    Select Type:
                                </label>
                                <select
                                    className="border focus:outline-none rounded py-2 px-3 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600 w-full"
                                    name="category"
                                    id="category"
                                    defaultValue={product.category}
                                    >
                                    {categories.map((category) => (
                                        <option
                                            key={category._id}
                                            defaultValue={category.name}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="py-2">
                                <label
                                    htmlFor="brand"
                                    className="block text-lg py-2">
                                    Select Brands:
                                </label>
                                <select
                                    className="border focus:outline-none rounded py-2 px-3 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600 w-full"
                                    name="brand"
                                    id="brand"
                                    defaultValue={product.brand}
                                    >
                                    {brands.map((brand) => (
                                        <option
                                            key={brand._id}
                                            defaultValue={brand.name}>
                                            {brand.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="pb-2">
                                <label
                                    htmlFor="price"
                                    className="block text-lg py-2">
                                    Price:
                                </label>
                                <input
                                    type="text"
                                    className="border focus:outline-none rounded py-2 px-3 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600 w-full"
                                    name="price"
                                    id="price"
                                    placeholder="Enter Price"
                                    defaultValue={product.price}
                                />
                            </div>
                            <div className="pb-2">
                                <label
                                    htmlFor="price"
                                    className="block text-lg py-2">
                                    Rating:
                                </label>
                                <input
                                    type="text"
                                    className="border focus:outline-none rounded py-2 px-3 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600 w-full"
                                    name="rating"
                                    id="rating"
                                    placeholder="Enter Rating"
                                    defaultValue={product.rating}
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-slate-800 hover:bg-slate-900 focus:outline-none focus:ring-0 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 my-2">
                        Update Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;