import { Link } from "react-router-dom"
import products from "../../../dataBase.json"

const itemsRunningOut = products.filter(product => product.quantity < 10)

export default function ItemsOut() {
    return (
        <>
            {itemsRunningOut.map((product) => (
                <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                    <td>
                        <Link to={`/product/${product.id}`} className="btn btn_view">Ver</Link>
                    </td>
                </tr>
        ))}
        </>
      )
}