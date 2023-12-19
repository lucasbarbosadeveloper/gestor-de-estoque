import { useState } from "react"
import { useLoaderData, useNavigate } from "react-router-dom"
import { hookLocalStorage } from "./hookLocalStorage"

export default function hookEditItem() {
    const product = useLoaderData()
    const navigate = useNavigate()
    const {date} = hookLocalStorage()
    
    // estado para pegar os dados do form
    const [dataFormEdit, setDataFormEdit] = useState({
        name: product.name,
        quantity: product.quantity,
        price: product.price,
        category: product.category,
        description: product.description,
        editTime: ""
    })
    
    // função para lidar com as mudanças nos inputs
    function change(ev) {
        const {name, value} = ev.target
        setDataFormEdit((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

        // estado para atualizar o nome do produto
        const [stad, setStad] = useState(product.name)

        // função do submit
        function editFunc(ev) {
            ev.preventDefault()
            
            // array do localStorage
            const db = JSON.parse(localStorage.getItem('db'))
    
            // filtra o produto no array do localStorage pelo id
            const prodLocalSto = db.find((prod) => prod.id === product.id)
    
            // atualiza os dados do produto filtrado
            prodLocalSto.name = dataFormEdit.name
            prodLocalSto.quantity = dataFormEdit.quantity
            prodLocalSto.price = dataFormEdit.price
            prodLocalSto.category = dataFormEdit.category
            prodLocalSto.description = dataFormEdit.description
    
            // atualiza a data de modificação
            prodLocalSto.editTime = date()
    
            // atualiza o titulo
            setStad(prodLocalSto.name)
    
            // atualiza o localStorage
            localStorage.setItem('db', JSON.stringify(db))

            alert('Item atualizado!')

            navigate(`/product/${product.id}`)
            }
    

    return {dataFormEdit, change, stad, editFunc}
}