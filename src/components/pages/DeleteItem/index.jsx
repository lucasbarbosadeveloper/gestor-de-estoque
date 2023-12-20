import { Link, useLoaderData } from "react-router-dom";
import hookDeleteItem from "../../../hooks/hookDeleteItem";

export default function DeleteItem() {
    const product = useLoaderData()
    const {del} = hookDeleteItem()

    return (
        <div className="deleteItem">
            <h2>Deseja excluir o item {product.name} - {product.id} ?</h2>
            <div className="links">
                <Link className="btn btn_del" onClick={del}>Excluir</Link>
                <Link to={'/stockItems'} className="btn btn_update">Cancelar</Link>
            </div>
        </div>  
    )
}