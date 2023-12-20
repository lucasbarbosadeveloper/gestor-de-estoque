import { Link } from "react-router-dom";
import { hookLocalStorage } from "../../../../hooks/hookLocalStorage";

export default function IndItem() {
    const {dataBase} = hookLocalStorage()

    return (
        <>
            {dataBase.map((product) => (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                    <td>{product.category}</td>
                    <td className="tdActions">
                        <Link to={`/product/${product.id}`} className="btn btn_view">Ver</Link>
                        <Link to={`/product/${product.id}/edit`} className="btn btn_update">Atualizar</Link>
                        <Link to={`/product/${product.id}/del`} className="btn btn_del">Excluir</Link>
                    </td>
                </tr>
            ))}
        </>
    )
}