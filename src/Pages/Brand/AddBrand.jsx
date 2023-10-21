import { toast } from 'react-toastify';

const AddBrand = () => {
    const createBrand = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const newBrand = { name, image };
        fetch('https://techhub-server-five.vercel.app/add-brand', {
            method: 'POST',
            body: JSON.stringify(newBrand),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.insertedId) {
                toast.success('Brand Added Successfully!')
                form.reset()
            }
        })
        .catch(err=>{
            console.log(err);
        })
    };
    return (
        <div className="container mx-auto py-5 px-3">
            <div className="bg-white rounded-md shadow-md py-3 px-5 dark:bg-slate-900 md:w-3/4 mx-auto">
                <form onSubmit={createBrand}>
                    <div className="py-2">
                        <label htmlFor="name" className="block text-lg py-2">
                            Brand Name:
                        </label>
                        <input
                            type="text"
                            className="border focus:outline-none rounded py-2 px-3 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600 w-full md:w-3/4"
                            name="name"
                            id="name"
                            placeholder="Enter Brand Name"
                        />
                    </div>
                    <div className="pb-2">
                        <label htmlFor="image" className="block text-lg py-2">
                            Brand Image Url:
                        </label>
                        <input
                            type="text"
                            className="border focus:outline-none rounded py-2 px-3 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600 w-full md:w-3/4"
                            name="image"
                            id="image"
                            placeholder="Enter Brand Image URL"
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-slate-800 hover:bg-slate-900 focus:outline-none focus:ring-0 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 my-2">
                        Create Brand
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBrand;
