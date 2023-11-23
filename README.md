# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Funcionalidades

-Página inicial de dashboard com:
    - A quantidade total de itens diferentes (ex.: 1 mesa e 3 cadeiras devem resultar em 2 itens ao todo).

    - A quantidade total de itens (ex.: 1 mesa e 3 cadeiras devem resultar em 4 itens ao todo).

    - A quantidade de itens adicionados nos últimos 10 dias.

    - Uma lista dos itens adicionados nos últimos 10 dias.

    - A quantidade de itens com menos de 10 em estoque.

    - Uma lista dos itens com menos de 10 em estoque.

- Deve possuir uma página que lista todos os itens em estoque em uma tabela. Essa tabela deve mostrar informações resumidas do item e 3 botões: ver mais detalhes do item, atualizar e excluir.

- Deve possuir uma página que exibe informações detalhadas de um item, exibindo todas as suas propriedades, bem como botões para atualizar e excluir o item.

- Deve possuir uma tela de criar novos itens. Ela deve ter pelo menos os campos nome, quantidade, preço, categoria e descrição.

- Também deve possuir uma tela de atualizar os dados de um item. Ela pode ter o mesmo formato da tela de criação de novos itens.

- Toda a navegação na aplicação deve ser feita sem atualizar a página, utilizando client-side navigation.

- Todos os dados devem ser persistidos no armazenamento local (localStorage) do navegador para serem preservados após atualizar a página ou fechar a janela do app.

- Estilização e outras bibliotecas ficam por sua conta, use o que achar necessário. As únicas coisas obrigatórias são o uso do React e do React Router, e o uso correto de seus hooks e outros recursos.