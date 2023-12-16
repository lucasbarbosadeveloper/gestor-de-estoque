import { useLoaderData } from "react-router-dom"
import hookEditItem from "../../hooks/hookEditItem"

export default function ItemEditing() {
    // busca o produto no loader no router
    const product = useLoaderData()
    const {dataFormEdit, change, stad, editFunc} = hookEditItem()

    return (
        <>
            <h2>Atualizar - {product.id} - {stad}</h2>

            <form className="cForm" onSubmit={editFunc}>
                <div className="cform__inputs">
                    <div className="inputCards input1">
                        <label htmlFor="name">Nome</label>
                        <input 
                            type="text"
                            name="name"
                            id="name"
                            value={dataFormEdit.name}
                            onChange={change}
                        />
                    </div>

                    <div className="inputCards input2">
                        <label htmlFor="quantity">Quantidade</label>
                        <input
                            type="number"
                            name="quantity"
                            id="quantity"
                            value={dataFormEdit.quantity}
                            onChange={change}
                        />
                    </div>

                    <div className="inputCards input3">
                        <label htmlFor="price">Preço</label>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            value={dataFormEdit.price}
                            onChange={change}
                        />
                    </div>  

                    <div className="inputCards  input4">
                        <label htmlFor="category">Categoria</label>
                        <select
                            name="category"
                            id="category"
                            value={dataFormEdit.category}
                            onChange={change}
                        >
                            <option value="">--Selecione uma categoria--</option>
                            <option value="aminoacido">Aminóacido</option>
                            <option value="protein">Proteina</option>
                            <option value="hipercalorico">Hipercalórico</option>
                        </select>
                    </div>

                    <div className="inputCards textAreaInput">
                        <label htmlFor="description">Descrição</label>
                        <textarea 
                            name="description"
                            id="description"
                            rows="5"
                            value={dataFormEdit.description}
                            onChange={change}
                        ></textarea>
                    </div>
                </div>

                <button type="submit" className="btn btn_view">Salvar</button>
            </form>
        </>
    )
}