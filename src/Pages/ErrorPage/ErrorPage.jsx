import { Link } from "react-router-dom";
import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";

const ErrorPage = () => {
    return (
        <>
            <Header></Header>
            <div className="container mx-auto">
                <div className="flex flex-col justify-center items-center min-h-screen">
                    <h3 className="text-5xl font-bold text-primary py-2">404 Not Found</h3>
                    <p className="text-xl font-medium text-gray-800 py-2">Look Like you are lost</p>
                    <Link to='/' className="bg-primary text-white rounded-md text-center py-2 px-3">Go Back To Home</Link>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ErrorPage;