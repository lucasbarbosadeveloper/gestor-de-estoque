import { Link } from "react-router-dom";
import products from "../../../dataBase.json";

export default function IndItem() {
    return (
        <>
            {products.map((product) => (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                    <td>{product.category}</td>
                    <td className="tdActions">
                        <Link to={`/product/${product.id}`} className="btn btn_view">Ver</Link>
                        <Link to={`/product/${product.id}/edit`} className="btn btn_update">Atualizar</Link>
                        <button className="btn btn_del">Excluir</button>
                    </td>
                </tr>
            ))}
        </>
    )
}