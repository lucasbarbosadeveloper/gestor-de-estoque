import { useState } from "react"


export default function NewItem() {
    // estado para pegar os dados do form
    const [dataForm, setDataForm] = useState({
        id: 0,
        name: "",
        quantity: 0,
        price: 0,
        category: "",
        description: ""
    })
    const [arr, setArr] = useState([])

    // funcao para lidar com a mudança de um campo
    const inputChange = (ev) => {

        const {name, value} = ev.target
        setDataForm((prevData) => ({
            ...prevData, 
            [name]: value,
        }))
    }


    // funcao de submit para obter os dados do form
    const handleSubmit = (ev) => {
        ev.preventDefault()
        dataForm.id = Math.floor(Math.random() * 90000) + 10000

        setArr((state) => {
            const newState = [...state, dataForm]
            localStorage.setItem('db', JSON.stringify(newState))
            
            return newState
        })
        
        setDataForm({
            id: 0,
            name: "",
            quantity: 0,
            price: 0,
            category: "",
            description: ""
        })
    }

    
    return (
        <>
            <h2>Novo Item</h2>

            <form className="cForm" onSubmit={handleSubmit}>
                <div className="cform__inputs">
                    <div className="inputCards input1">
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={dataForm.name}
                            onChange={inputChange}
                         />
                    </div>

                    <div className="inputCards input2">
                        <label htmlFor="quantity">Quantidade</label>
                        <input
                            type="number"
                            name="quantity"
                            id="quantity"
                            value={dataForm.quantity}
                            onChange={inputChange}
                        />
                    </div>

                    <div className="inputCards input3">
                        <label htmlFor="price">Preço</label>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            value={dataForm.price}
                            onChange={inputChange}
                        />
                    </div>

                    <div className="inputCards  input4">
                        <label htmlFor="category">Categoria</label>
                        <select
                            name="category"
                            id="category"
                            value={dataForm.category}
                            onChange={inputChange}
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
                            value={dataForm.description}
                            onChange={inputChange}
                        ></textarea>
                    </div>
                </div>


                <button type="submit" className="btn btn_view">Salvar</button>
            </form>
        </>
    )
}