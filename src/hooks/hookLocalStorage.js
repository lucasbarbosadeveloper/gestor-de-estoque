import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function hookLocalStorage() {
    const navigate = useNavigate()

    // estado para pegar os dados do form
    const [dataForm, setDataForm] = useState({
        id: 0,
        name: "",
        quantity: 0,
        price: 0,
        category: "",
        description: "",
        registrationTime: "",
        editTime: ""
    })

    // funcao para lidar com a mudança de um input
    const inputChange = (ev) => {

        const {name, value} = ev.target
        setDataForm((prevData) => ({
            ...prevData, 
            [name]: value,
        }))
    }

    // var que obtem o array do localStorage
    const dataBase = JSON.parse(localStorage.getItem('db'))

    // verificação para a existencia na chave 'db'
    if (dataBase) {
        undefined
    } else {
        localStorage.setItem('db', JSON.stringify([]))
    }

    const date = () => {
        const data = new Date()

        return `${data.toLocaleDateString()} ${data.toLocaleTimeString()}`
    }

    // funcao de submit para obter os dados do form
    const handleSubmit = (ev) => {
        ev.preventDefault()
        dataForm.id = Math.floor(Math.random() * 90000) + 10000
        dataForm.registrationTime = date()

        dataBase.push(dataForm)
        localStorage.setItem('db', JSON.stringify(dataBase))

        setDataForm({
            id: 0,
            name: "",
            quantity: 0,
            price: 0,
            category: "",
            description: ""
        })

        alert('Novo item criado!')

        navigate('/stockItems')
    }
    
    return {handleSubmit, dataForm, inputChange, dataBase, date}
}