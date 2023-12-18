import { Link } from "react-router-dom"
import { hookLocalStorage } from "../../../hooks/hookLocalStorage"

export default function ItemsOut() {
    const {dataBase} = hookLocalStorage()

    const itemsRunningOut = dataBase.filter(product => product.quantity < 10)
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