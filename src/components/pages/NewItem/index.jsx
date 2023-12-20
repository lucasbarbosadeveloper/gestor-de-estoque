import { hookLocalStorage } from "../../../hooks/hookLocalStorage"


export default function NewItem() {
    const logic = hookLocalStorage()

    return (
        <>
            <h2>Novo Item</h2>

            <form className="cForm" onSubmit={logic.handleSubmit}>
                <div className="cform__inputs">
                    <div className="inputCards input1">
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={logic.dataForm.name}
                            onChange={logic.inputChange}
                         />
                    </div>

                    <div className="inputCards input2">
                        <label htmlFor="quantity">Quantidade</label>
                        <input
                            type="number"
                            name="quantity"
                            id="quantity"
                            value={logic.dataForm.quantity}
                            onChange={logic.inputChange}
                        />
                    </div>

                    <div className="inputCards input3">
                        <label htmlFor="price">Preço</label>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            value={logic.dataForm.price}
                            onChange={logic.inputChange}
                        />
                    </div>

                    <div className="inputCards  input4">
                        <label htmlFor="category">Categoria</label>
                        <select
                            name="category"
                            id="category"
                            value={logic.dataForm.category}
                            onChange={logic.inputChange}
                        >
                            <option value="">--Selecione uma categoria--</option>
                            <option value="Aminoácidos">Aminoácidos</option>
                            <option value="Carboidratos">Carboidratos</option>
                            <option value="Creatina">Creatina</option>
                            <option value="Proteínas">Proteínas</option>
                        </select>
                    </div>

                    <div className="inputCards textAreaInput">
                        <label htmlFor="description">Descrição</label>
                        <textarea
                            name="description"
                            id="description"
                            rows="5"
                            value={logic.dataForm.description}
                            onChange={logic.inputChange}
                        ></textarea>
                    </div>
                </div>


                <button type="submit" className="btn btn_view">Salvar</button>
            </form>
        </>
    )
}