import { Link, useLoaderData } from "react-router-dom";

export default function DeleteItem() {
    const product = useLoaderData()

    return (
        <div className="deleteItem">
            <h2>Deseja excluir o item {product.name} - {product.id} ?</h2>
            <div className="links">
                <Link className="btn btn_del">Excluir</Link>
                <Link to={'/stockItems'} className="btn btn_update">Cancelar</Link>
            </div>
        </div>
    )
}