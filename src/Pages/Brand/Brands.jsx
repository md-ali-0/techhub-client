import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { useLoaderData, useParams } from 'react-router-dom';
import ProdutcsCard from '../Product/ProdutcsCard';
import ImageOne from '/slider/slider-1.png';
import ImageTwo from '/slider/slider-2.png';
import ImageThree from '/slider/slider-3.png';
const Brands = () => {
    const { name } = useParams();
    const bandProducts = useLoaderData();
    console.log(bandProducts);
    return (
        <div className="container mx-auto">
            <section className="py-5 px-3">
                <h3 className="text-3xl text-heading dark:text-white font-bold pt-2 mb-10">
                    Products by Brand{' '}
                    <span className="text-sub-heading underline underline-offset-4">
                        {name}
                    </span>
                </h3>
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    swipeable={true}
                    interval={200}
                    transitionTime={100}
                    >
                    <div>
                        <img src={ImageThree} />
                    </div>
                    <div>
                        <img src={ImageTwo} />
                    </div>
                    <div>
                        <img src={ImageOne} />
                    </div>
                </Carousel>
                {bandProducts.length !== 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {bandProducts.map((product) => (
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

export default Brands;
