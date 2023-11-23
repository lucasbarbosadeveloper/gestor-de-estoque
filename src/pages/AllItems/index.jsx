export default function AllItems() {
    return(
        <>
            <table className="cTable">
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Em Estoque</th>
                    <th>Categoria</th>
                    <th>Ações</th>
                </tr>

                <tr>
                    <td>hgcviutfljhv</td>
                    <td>7 Wondres</td>
                    <td>8 unid.</td>
                    <td>Jogos</td>
                    <td className="tdActions">
                        <button className="btn btn_view">Ver</button>
                        <button className="btn btn_update">Atualizar</button>
                        <button className="btn btn_del">Excluir</button>
                    </td>
                </tr>

            </table>
        </>
    )
}