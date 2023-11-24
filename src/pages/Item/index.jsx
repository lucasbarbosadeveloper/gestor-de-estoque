export default function Item() {
    return (
        <>
            <div className="product">
                <h2>7 Wonders</h2>
                <button className="btn btn_update">Atualizar</button>
                <button className="btn btn_del">Excluir</button>
            </div>

            <div className="infosCard">
                <div>Categoria: Jogos</div>
                <div>Quantidade em estoque: 8</div>
                <div>Preço: R$ 399.99</div>
            </div>

            <p className="descriptionProduct">Jogo de tabuleiro para vários jogadores</p>

            <div className="updateDate">
                <span>Cadastrado em: Fri Jun 16 2023</span>
                <span>Atualizado em Fri Jun 16 2023</span>
            </div>
        </>
    )
}