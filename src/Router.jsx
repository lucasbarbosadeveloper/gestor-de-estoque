import { createBrowserRouter } from "react-router-dom";
import DeafaultStockLayout from "./components/DefaultStockLayout";
import Home from "./pages/Home";
import DefaultLayout from "./components/DefaultLayout";
import loadProduct from "./loaders/product";
import Item from "./pages/Item";
import AllItems from "./pages/AllItems";
import NewItem from "./pages/NewItem";
import ItemEditing from "./pages/ItemEditing";
import DeleteItem from "./pages/DeleteItem";

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
                path: "/product/:productID/edit",
                element: <ItemEditing />,
                loader: loadProduct
            },
            {
                path: "/product/:productID/del",
                element: <DeleteItem />,
                loader: loadProduct
            },
            {
                path: "/stockItems",
                element: <DeafaultStockLayout />,
                children: [
                    {
                        index: true,
                        element: <AllItems />
                    },
                    {
                        path: "/stockItems/newItem",
                        element: <NewItem />
                    }
                ]
            }
        ]
    }
])

