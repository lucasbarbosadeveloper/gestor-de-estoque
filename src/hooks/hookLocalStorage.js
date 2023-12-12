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

    // funcao para lidar com a mudança de um input
    const inputChange = (ev) => {

        const {name, value} = ev.target
        setDataForm((prevData) => ({
            ...prevData, 
            [name]: value,
        }))
    }

    // var que onter o array do localStorage
    const dataBase = JSON.parse(localStorage.getItem('db'))

    // verificação para a existencia na chave 'db'
    if (dataBase) {
        undefined
    } else {
        console.log('nn')
        localStorage.setItem('db', JSON.stringify([]))
    }

    // funcao de submit para obter os dados do form
    const handleSubmit = (ev) => {
        ev.preventDefault()
        dataForm.id = Math.floor(Math.random() * 90000) + 10000        

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
    }
    
    return {handleSubmit, dataForm, inputChange, dataBase}
}