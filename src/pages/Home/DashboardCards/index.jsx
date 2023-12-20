import { hookLocalStorage } from "../../../hooks/hookLocalStorage";

export default function DashboardCards() {
    const {dataBase, sum} = hookLocalStorage()

    return (
        <div className="dashboardCards">
            <div className="cards">
                <p className="titleCrad">Diversidade de Produtos</p>
                <div className="qntCard">{
                    new Set(dataBase.map(product => product.name)).size
                }</div>
            </div>

            <div className="cards">
                <p className="titleCrad">Inventário Total</p>
                <p className="qntCard">{
                    dataBase.reduce((acum, product) => acum + (+product.quantity), 0)
                }</p>
            </div>

            <div className="cards">
                <p className="titleCrad">Valor do Estoque</p>
                <p className="qntCard">{`
                    R$ ${sum().toFixed(2)}
                `}</p>
            </div>

            <div className="cards">
                <p className="titleCrad">Itens Acabando</p>
                <p className="qntCard">{
                    dataBase.filter(product => product.quantity < 10).length
                }</p>
            </div>
        </div>
    )
}