export default function ItemEditing() {
    return (
        <>
            <h2>Atualizar Item - 7 Wonders</h2>

            <form className="cForm">
                <div className="cform__inputs">
                    <div className="inputCards">
                        <label htmlFor="name">Nome</label>
                        <input type="text" name="name" id="name" />
                    </div>

                    <div className="inputCards">
                        <label htmlFor="quantity">Quantidade</label>
                        <input type="number" name="quantity" id="quantity" />
                    </div>

                    <div className="inputCards">
                        <label htmlFor="price">Preço</label>
                        <input type="number" name="price" id="price" />
                    </div>

                    <div className="inputCards">
                        <label htmlFor="category">Categoria</label>
                        <select name="category" id="category">
                            <option value="Jogos">Jogos</option>
                            <option value="Hardware">Hardware</option>
                        </select>
                    </div>
                </div>

                <label htmlFor="description">Descrição</label>
                <textarea name="description" id="description" rows="10"></textarea>

                <button type="submit" className="btn btn_view">Salvar</button>
            </form>
        </>
    )
}