import newsLetterBd from '/bg-newsletter.jpg';
const NewsLetter = () => {
    return (
        <section className="container mx-auto px-3 py-5">
            <div
                className="flex flex-col justify-center items-center bg-center bg-cover rounded-lg h-72"
                style={{ backgroundImage: `url(${newsLetterBd})` }}>
                <div>
                    <h4 className=" text-xl font-bold text-blue-700">Newsletter</h4>
                    <h3 className='text-3xl md:text-5xl dark:text-primary font-bold py-3'>Get weekly update</h3>
                    <div className='flex gap-3 pt-5'>
                        <input type="email" className='bg-white focus:outline-none rounded py-3 px-5' placeholder='exampl@gmail.com'/>
                        <button className='bg-primary rounded text-white py-3 px-5 w-auto'>Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;
