import { createBrowserRouter } from "react-router-dom";
import DeafaultStockLayout from "./components/DefaultStockLayout";
import Home from "./pages/Home";
import DefaultLayout from "./components/DefaultLayout";
import RecentList from "./pages/Home/RecentList";
import loadProduct from "./loaders/product";
import Item from "./pages/Item";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },{
                path: "/product/:productID",
                element: <Item />,
                loader: loadProduct
            },
            {
                path: "/stockItems",
                element: <DeafaultStockLayout />
            }
        ]
    }
])

