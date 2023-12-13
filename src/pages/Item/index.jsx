import { Link, useLoaderData } from "react-router-dom"

export default function Item() {
    const product = useLoaderData()

    return (
        <>
            <div className="product">
                <h2>{product.name}</h2>
                <Link to={`/product/${product.id}/edit`} className="btn btn_update">Atualizar</Link>
                <button className="btn btn_del">Excluir</button>
            </div>

            <div className="infosCard">
                <div>Categoria: {product.category}</div>
                <div>Quantidade em estoque: {product.quantity}</div>
                <div>Preço: R$ {product.price}</div>
            </div>

            <p className="descriptionProduct">{product.description}</p>

            <div className="updateDate">
                <span>Cadastrado em: {product.registrationTime}</span>
                <span>Atualizado em Fri Jun 16 2023</span>
            </div>
        </>
    )
}