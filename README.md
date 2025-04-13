# Money

Money é um aplicativo de controle financeiro pessoal desenvolvido com React Native e Expo. Ele permite que os usuários adicionem transações, categorizem despesas e receitas, e visualizem um resumo financeiro.

## Funcionalidades

- **Gerenciamento de Transações**: Adicione, visualize e categorize transações financeiras.
- **Resumo Financeiro**: Veja um resumo das receitas, despesas e saldo total.
- **Interface Intuitiva**: Design simples e responsivo com navegação por abas.

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile.
- **Expo**: Plataforma para desenvolvimento e build de aplicativos.
- **React Navigation**: Navegação entre telas.
- **AsyncStorage**: Armazenamento local para persistência de dados.

## Estrutura do Projeto

```
├── app/                # Páginas e navegação
│   ├── _layout.jsx         # Layout principal
│   ├── +not-found.jsx      # Tela de erro 404
│   └── (tabs)/             # Abas principais
│       ├── _layout.jsx         # Layout das abas
│       ├── index.jsx           # Lista de transações
│       ├── add-transactions.jsx # Adicionar transações
│       └── summary.jsx         # Resumo financeiro
├── components/          # Componentes reutilizáveis
├── constants/           # Constantes do projeto (cores, categorias, etc.)
├── contexts/            # Contexto global para estado compartilhado
├── styles/              # Estilos globais
├── assets/              # Imagens e outros recursos estáticos
├── package.json         # Configurações e dependências do projeto
└── README.md            # Documentação do projeto
