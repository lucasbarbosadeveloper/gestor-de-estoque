import products from "../../../dataBase.json"

const itemsRunningOut = products.filter(product => product.quantity < 10)

export default function ItemsOut() {
    return (
        <>
            {itemsRunningOut.map((product) => (
                <tr>
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                    <td>
                        <button className="btn btn_view">Ver</button>
                    </td>
                </tr>
        ))}
        </>
      )
}