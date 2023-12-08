import { useLoaderData } from "react-router-dom"

export default function ItemEditing() {
    const product = useLoaderData()

    return (
        <>
            <h2>{product.name}</h2>

            <form className="cForm">
                <div className="cform__inputs">
                    <div className="inputCards input1">
                        <label htmlFor="name">Nome</label>
                        <input type="text" name="name" id="name" defaultValue={product.name} />
                    </div>

                    <div className="inputCards input2">
                        <label htmlFor="quantity">Quantidade</label>
                        <input type="number" name="quantity" id="quantity" defaultValue={product.quantity} />
                    </div>

                    <div className="inputCards input3">
                        <label htmlFor="price">Preço</label>
                        <input type="number" name="price" id="price" defaultValue={product.price} />
                    </div>  

                    <div className="inputCards  input4">
                        <label htmlFor="category">Categoria</label>
                        <select name="category" id="category" >
                            <option value="">--Selecione uma categoria--</option>
                            <option value="aminoacido">Aminóacido</option>
                            <option value="protein">Proteina</option>
                            <option value="hipercalorico">Hipercalórico</option>
                        </select>
                    </div>

                    <div className="inputCards textAreaInput">
                        <label htmlFor="description">Descrição</label>
                        <textarea name="description" id="description" rows="5" defaultValue={product.description}></textarea>
                    </div>
                </div>


                <button type="submit" className="btn btn_view">Salvar</button>
            </form>
        </>
    )
}