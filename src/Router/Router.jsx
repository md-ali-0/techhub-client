import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Brands from "../Pages/Brand/Brands";
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
            }
        ]
    }
])

export default Router;