import products from "../dataBase.json";

export default function loadProduct({params}) {
    const product = products.find(p => p.id === +params.productID)

    return product
}