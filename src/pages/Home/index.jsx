import RecentList from "./RecentList";

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
                    <thead>
                        <tr>
                            <th>Itens Recentes</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        <RecentList />
                    </tbody>

                </table>

                <table className="cTable">
                    <thead>
                        <tr>
                            <th>Itens acabando</th>
                            <th>Qtd.</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>7 Wondres</td>
                            <td>8</td>
                            <td>
                                <button className="btn btn_view">Ver</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}