import { Link } from "react-router-dom"
import products from "../../../dataBase.json"

export default function RecentList() {
    return (
        <>
            {products.map((product) => (
                <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>
                        <Link to={`/product/${product.id}`} className="btn btn_view">Ver</Link>
                    </td>
                </tr>
            ))}
        </>
      )
}