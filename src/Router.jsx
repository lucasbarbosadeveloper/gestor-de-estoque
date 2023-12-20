import { createBrowserRouter } from "react-router-dom";
import DeafaultStockLayout from "./components/DefaultStockLayout";
import Home from "./components/pages/Home";
import DefaultLayout from "./components/DefaultLayout";
import loadProduct from "./loaders/product";
import Item from "./components/pages/Item";
import AllItems from "./components/pages/AllItems";
import NewItem from "./components/pages/NewItem";
import ItemEditing from "./components/pages/ItemEditing";
import DeleteItem from "./components/pages/DeleteItem";

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

