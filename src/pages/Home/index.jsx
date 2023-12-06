import DashboardCards from "./DashboardCards";
import ItemsOut from "./ItemsOut";
import RecentList from "./RecentList";

export default function Home() {
    return (
        <>
            <h1 className="title">Dashboard</h1>

            <DashboardCards />

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
                        <ItemsOut />
                    </tbody>
                </table>
            </div>
        </>
    )
}