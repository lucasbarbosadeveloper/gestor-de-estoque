export default function Home() {
    return (
        <>
            <h1 className="title">Dashboard</h1>

            <div className="dashboardCards">
                <div className="cards">
                    <p className="titleCrad">Diversidade de Itens</p>
                    <div className="qntCard">2</div>
                </div>

                <div className="cards">
                    <p className="titleCrad">Inventário total</p>
                    <p className="qntCard">40</p>
                </div>

                <div className="cards">
                    <p className="titleCrad">Itens recentes</p>
                    <p className="qntCard">2</p>
                </div>

                <div className="cards">
                    <p className="titleCrad">itens acabando</p>
                    <p className="qntCard">1</p>
                </div>
            </div>

            <div className="itemsView">
                <table className="cTable">
                    <tr>
                        <th>Itens Recentes</th>
                        <th>Ações</th>
                    </tr>

                    <tr>
                        <td>7 wonders</td>
                        <td>
                            <button className="btn btn_view">Ver</button>
                        </td>
                    </tr>
                </table>

                <table className="cTable">
                    <tr>
                        <th>Itens acabando</th>
                        <th>Qtd.</th>
                        <th>Ações</th>
                    </tr>

                    <tr>
                        <td>7 Wondres</td>
                        <td>8</td>
                        <td>
                            <button className="btn btn_view">Ver</button>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}