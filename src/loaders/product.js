import { hookLocalStorage } from "../hooks/hookLocalStorage"

export default function loadProduct({params}) {
    const {dataBase} = hookLocalStorage()

    const product = dataBase.find(p => p.id === +params.productID)

    return product
}