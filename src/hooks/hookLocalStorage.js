import URL from '../dataBase.json'
import { useState } from "react"


export function hookLocalStorage() {
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
    
    return {handleSubmit, dataForm, inputChange}
}