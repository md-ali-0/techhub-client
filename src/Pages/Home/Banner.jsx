import BannerImage from '/banner.png';
const Banner = () => {
    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat w-full h-[580px]"
            style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h4 className="text-slate-300  font-bold py-3">
                    Welcome to <span className='font-extrabold'>Tech Hub</span>
                </h4>
                <h3 className="text-5xl text-slate-200 font-bold py-1">
                    Discover Quality Electronics
                </h3>
                <p className="text-lg font-medium text-slate-200 py-2">
                    Experience innovation with our curated selection of phones,
                    laptops, headphones, and more.
                </p>
                <button className="bg-transparent border border-gray-400 text-white text-xl rounded-md py-2 px-3">
                    Explore
                </button>
            </div>
        </div>
    );
};

export default Banner;
