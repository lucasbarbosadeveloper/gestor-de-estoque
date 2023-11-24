export default function ItemEditing() {
    return (
        <>
            <h2>Atualizar Item - 7 Wonders</h2>

            <form className="cForm">
                <div className="cform__inputs">
                    <div className="inputCards input1">
                        <label htmlFor="name">Nome</label>
                        <input type="text" name="name" id="name" />
                    </div>

                    <div className="inputCards input2">
                        <label htmlFor="quantity">Quantidade</label>
                        <input type="number" name="quantity" id="quantity" />
                    </div>

                    <div className="inputCards input3">
                        <label htmlFor="price">Preço</label>
                        <input type="number" name="price" id="price" />
                    </div>

                    <div className="inputCards  input4">
                        <label htmlFor="category">Categoria</label>
                        <select name="category" id="category">
                            <option value="Jogos">Jogos</option>
                            <option value="Hardware">Hardware</option>
                        </select>
                    </div>

                    <div className="inputCards textAreaInput">
                        <label htmlFor="description">Descrição</label>
                        <textarea name="description" id="description" rows="5"></textarea>
                    </div>
                </div>


                <button type="submit" className="btn btn_view">Salvar</button>
            </form>
        </>
    )
}