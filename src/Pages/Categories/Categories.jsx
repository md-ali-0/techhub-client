import { useLoaderData, useParams } from "react-router-dom";
import ProdutcsCard from "../Product/ProdutcsCard";

const Categories = () => {
    const { name } = useParams();
    const categoryProducts = useLoaderData();
    return (
        <div className="container mx-auto">
            <section className="py-5 px-3">
                <h3 className="text-3xl text-heading dark:text-white font-bold pt-2 mb-10">
                    Products by Category
                    <span className="text-sub-heading underline underline-offset-4">
                        {name}
                    </span>
                </h3>
                {categoryProducts.length !== 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {categoryProducts.map((product) => (
                            <ProdutcsCard
                                key={product._id}
                                product={product}></ProdutcsCard>
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-center items-center h-80">
                        <p className="text-xl font-bold">No Product Found</p>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Categories;