import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

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
    }, []);
    
    
    if (isLoading) {
        return <div className="flex items-center justify-center w-full h-screen bg-gray-50 z-50">
            <div role="status">
                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-primary animate-spin fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
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
                console.log(data);
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