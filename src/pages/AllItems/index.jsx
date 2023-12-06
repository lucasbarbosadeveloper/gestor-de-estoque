import IndItem from "./IndItem";

export default function AllItems() {
    return(
        <>
            <table className="cTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Em Estoque</th>
                        <th>Categoria</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    <IndItem />
                </tbody>

                
            </table>
        </>
    )
}