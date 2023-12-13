export default function loadProduct({params}) {
    const dados = JSON.parse(localStorage.getItem('db'))

    const product = dados.find(p => p.id === +params.productID)

    return product
}
