import { useLoaderData } from "react-router-dom";

const Brands = () => {
    const bandProducts = useLoaderData();
    console.log(bandProducts);
    return (
        <div className="container mx-auto">
            
        </div>
    );
};

export default Brands;