import BannerImage from '/banner-light.png';
const Banner = () => {
    return (
        <div
            className="relative bg-cover md:bg-center bg-no-repeat w-full h-[580px]"
            style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 md:-translate-x-3/4 -translate-y-1/2">
                <h4 className="text-primary  font-extrabold py-3">
                    Welcome to <span className='font-extrabold'>Tech Hub</span>
                </h4>
                <h3 className="text-5xl text-primary font-bold py-1">
                    Discover Quality Electronics
                </h3>
                <p className="text-lg font-medium text-primary py-2">
                    Experience innovation with our curated selection of <br/>phones,
                    laptops, headphones, and more.
                </p>
                <button className="bg-transparent border border-primary text-primary text-xl rounded-md py-2 px-3">
                    Explore
                </button>
            </div>
        </div>
    );
};

export default Banner;
