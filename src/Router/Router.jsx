import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AddBrand from "../Pages/Brand/AddBrand";
import Brands from "../Pages/Brand/Brands";
import AddCategory from "../Pages/Categories/AddCategory";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Product/Products";

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
                path: '/brands',
                element: <Brands></Brands>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/add-brand',
                element: <AddBrand></AddBrand>
            },
            {
                path: '/add-category',
                element: <AddCategory></AddCategory>
            }
        ]
    }
])

export default Router;