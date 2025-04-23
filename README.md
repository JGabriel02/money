# 💰 Money

**Money** é um aplicativo de controle financeiro pessoal desenvolvido com **React Native** e **Expo**.  
Ele permite adicionar transações, categorizá-las como despesas ou receitas, e acompanhar seu saldo de forma clara e prática.

---

📸 Demonstração
<div align="center"> <img src="assets/demo/demo.gif" width="300" alt="Demonstração do aplicativo Money" /> </div>

## ✨ Funcionalidades

- 📥 **Gerenciamento de Transações**: Adicione, visualize e categorize entradas e saídas financeiras.
- 📊 **Resumo Financeiro**: Veja rapidamente o total de receitas, despesas e o saldo atual.
- 🧭 **Interface Intuitiva**: Design limpo, responsivo e navegação fluida por abas.

---

## 🚀 Tecnologias Utilizadas

- **React Native** – Framework para desenvolvimento de apps móveis com JavaScript
- **Expo** – Plataforma para desenvolvimento e build de aplicativos React Native
- **React Navigation** – Navegação entre telas e abas
- **AsyncStorage** – Armazenamento local para manter as transações salvas

---

## 📁 Estrutura do Projeto

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
```

