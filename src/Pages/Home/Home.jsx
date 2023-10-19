import Banner from "./Banner";
import BrandsSection from "./BrandsSection";
import CategorySection from "./CategorySection";
import ProductSection from "./ProductSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BrandsSection></BrandsSection>
            <CategorySection></CategorySection>
            <ProductSection></ProductSection>
        </div>
    );
};

export default Home;