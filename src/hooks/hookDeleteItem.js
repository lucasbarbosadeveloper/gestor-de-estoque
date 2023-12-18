import { useLoaderData, useNavigate } from "react-router-dom"

export default function hookDeleteItem(oi) {
    const product = useLoaderData()
    const navigate = useNavigate()

    function del(ev) {
        ev.preventDefault()
    
        const db = JSON.parse(localStorage.getItem('db'))

        const prodDel = db.filter((prod) => prod.id !== product.id)

        localStorage.setItem('db', JSON.stringify(prodDel))

        alert('Item excluído!')

        navigate('/stockItems')

        return console.log('Excluido')
    }
        
    return {del}
}