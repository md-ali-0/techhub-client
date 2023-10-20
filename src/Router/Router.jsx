import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AddBrand from "../Pages/Brand/AddBrand";
import Brands from "../Pages/Brand/Brands";
import AddCategory from "../Pages/Categories/AddCategory";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/Product/AddProduct";
import Products from "../Pages/Product/Products";
import SingleProduct from "../Pages/Product/SingleProduct";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/brand/:name',
                loader: ({params})=>fetch(`http://localhost:8080/brand/${params.name}`),
                element: <Brands></Brands>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/product/:id',
                loader: ({params})=>fetch(`http://localhost:8080/product/${params.id}`),
                element: <SingleProduct></SingleProduct>
            },
            {
                path: '/add-brand',
                element: <AddBrand></AddBrand>
            },
            {
                path: '/add-category',
                element: <AddCategory></AddCategory>
            },
            {
                path: '/add-product',
                loader: ()=>fetch('http://localhost:8080/categories'),
                element: <AddProduct></AddProduct>
            }
        ]
    }
])

export default Router;