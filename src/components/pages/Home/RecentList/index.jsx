import { Link } from "react-router-dom"
import { hookLocalStorage } from "../../../../hooks/hookLocalStorage"

export default function RecentList() {
    const {dataBase} = hookLocalStorage()

    const lastedItems = dataBase.slice(dataBase.length - 3, dataBase.length).reverse()
    return (
        <>
            {lastedItems.map((product) => (
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