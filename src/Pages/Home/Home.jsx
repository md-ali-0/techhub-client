import Banner from "./Banner";
import BrandsSection from "./BrandsSection";
import CategorySection from "./CategorySection";
import NewsLetter from "./NewsLetter";
import ProductSection from "./ProductSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BrandsSection></BrandsSection>
            <CategorySection></CategorySection>
            <ProductSection></ProductSection>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;