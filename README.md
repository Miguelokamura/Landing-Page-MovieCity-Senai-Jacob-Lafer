# MovieCity 🎬

Landing page responsiva para descobrir filmes e escolher o que assistir. O projeto foi desenvolvido como exercício de componentização com **React**, estilização com CSS e adaptação para diferentes tamanhos de tela.

## Recursos

- Grade com seis filmes e pôsteres locais.
- Filtro de filmes por categoria.
- Janela com detalhes do filme selecionado.
- Menu hambúrguer para telas menores.
- Janela de Login demonstrativa, sem autenticação.
- Layout responsivo para desktop, tablet e celular.

## Tecnologias

- React 19
- Vite 7
- JavaScript com módulos ES
- CSS puro
- ESLint
- Lucide React para ícones

## Como executar

**Pré-requisitos:** Node.js 20.19+ ou 22.12+, e npm.

1. Clone o repositório e entre na pasta:

   ```bash
   git clone https://github.com/Miguelokamura/Landing-Page-MovieCity-Senai-Jacob-Lafer.git
   cd Landing-Page-MovieCity-Senai-Jacob-Lafer
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   Abra o endereço indicado no terminal, normalmente `http://localhost:5173`.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor local com atualização automática. |
| `npm run lint` | Analisa o código com ESLint. |
| `npm run build` | Gera a versão de produção na pasta `dist/`. |
| `npm run preview` | Serve localmente a versão gerada em `dist/`. |

## Estrutura do projeto

```text
.
├── public/
├── src/
│   ├── assets/             # Pôsteres dos filmes
│   ├── components/
│   │   ├── Header.jsx      # Cabeçalho e navegação
│   │   ├── Home.jsx        # Estrutura geral da página
│   │   ├── Main.jsx        # Destaque, filtro e grade de filmes
│   │   ├── MovieCard.jsx   # Card de cada filme
│   │   └── MovieDialog.jsx # Detalhes do filme e janela de Login
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Sobre o projeto

MovieCity é um serviço de streaming fictício criado para fins de estudo. O botão de Login apresenta apenas uma demonstração visual; não há cadastro, autenticação ou reprodução de filmes.
