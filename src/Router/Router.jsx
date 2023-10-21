import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import AddBrand from "../Pages/Brand/AddBrand";
import Brands from "../Pages/Brand/Brands";
import Cart from "../Pages/Cart/Cart";
import AddCategory from "../Pages/Categories/AddCategory";
import Categories from "../Pages/Categories/Categories";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/Product/AddProduct";
import Products from "../Pages/Product/Products";
import SingleProduct from "../Pages/Product/SingleProduct";
import UpdateProduct from "../Pages/Product/UpdateProduct";
import PrivateRouter from "./PrivateRouter";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/cart',
                element: <PrivateRouter><Cart></Cart></PrivateRouter>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/brand/:name',
                loader: ({params})=>fetch(`https://techhub-server-jmdtg788y-mohammad-alis-projects.vercel.app/brand/${params.name}`),
                element: <PrivateRouter><Brands></Brands></PrivateRouter>
            },
            {
                path: '/category/:name',
                loader: ({params})=>fetch(`https://techhub-server-jmdtg788y-mohammad-alis-projects.vercel.app/category/${params.name}`),
                element: <PrivateRouter><Categories></Categories></PrivateRouter>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/product/:id',
                loader: ({params})=>fetch(`https://techhub-server-jmdtg788y-mohammad-alis-projects.vercel.app/product/${params.id}`),
                element: <PrivateRouter><SingleProduct></SingleProduct></PrivateRouter>
            },
            {
                path: '/product-edit/:id',
                loader: ({params})=>fetch(`https://techhub-server-jmdtg788y-mohammad-alis-projects.vercel.app/product/${params.id}`),
                element: <PrivateRouter><UpdateProduct></UpdateProduct></PrivateRouter>
            },
            {
                path: '/add-brand',
                element: <PrivateRouter><AddBrand></AddBrand></PrivateRouter>
            },
            {
                path: '/add-category',
                element: <PrivateRouter><AddCategory></AddCategory></PrivateRouter>
            },
            {
                path: '/add-product',
                loader: ()=>fetch('https://techhub-server-jmdtg788y-mohammad-alis-projects.vercel.app/categories'),
                element: <PrivateRouter><AddProduct></AddProduct></PrivateRouter>
            }
        ]
    }
])

export default Router;