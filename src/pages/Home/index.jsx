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
        </>
    )
}