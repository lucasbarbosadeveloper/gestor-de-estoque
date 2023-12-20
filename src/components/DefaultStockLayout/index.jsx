import { Link, Outlet } from "react-router-dom";

export default function DeafaultStockLayout() {
    return (
        <>
            <h1 className="title">Stock Items</h1>
            <div className="pages">
                <Link to={"/stockItems"}>Todos os Itens</Link>
                <Link to={"/stockItems/newItem"}>Novo Item</Link>
            </div>

            <div className="divForm">
                <Outlet />
            </div>
        </>
    )
}