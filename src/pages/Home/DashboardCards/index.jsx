import products from "../../../dataBase.json";

export default function DashboardCards() {
    return (
        <div className="dashboardCards">
        <div className="cards">
            <p className="titleCrad">Diversidade de Itens</p>
            <div className="qntCard">{
                new Set(products.map(product => product.name)).size
            }</div>
        </div>

        <div className="cards">
            <p className="titleCrad">Inventário total</p>
            <p className="qntCard">{
                products.reduce((acum, product) => acum + product.quantity, 0)
            }</p>
        </div>

        <div className="cards">
            <p className="titleCrad">Itens recentes</p>
            <p className="qntCard">FALTA</p>
        </div>

        <div className="cards">
            <p className="titleCrad">itens acabando</p>
            <p className="qntCard">{
                products.filter(product => product.quantity < 10).length
            }</p>
        </div>
    </div>
    )
}