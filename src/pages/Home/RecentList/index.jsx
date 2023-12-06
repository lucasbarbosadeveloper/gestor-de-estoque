import products from "../../../dataBase.json"

export default function RecentList() {
    return (
        <>
            {products.map((product) => (
                <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>
                        <button className="btn btn_view">Ver</button>
                    </td>
                </tr>
            ))}
        </>
      )
}