# Mini Loja React
Atividade 06 do curso FullStack Jr. da +praTI.

**Proposta:** Criar uma Mini Loja utilizando React e 4 formas de estilização diferentes: CSS Global, CSS Modules, Tailwind CSS e Styled-Components.

**Meu objetivo:** Praticar a aplicação de estilos com técnicas e ferramentas diferentes, refletir como cada uma pode encaixar-se num projeto e o que levar em consideração no momento da escolha, experimentar novas formas de pensar o CSS.

## Requisitos
- Implementar a mesma tela em 4 versões ou telas diferentes para cada uma: 01-css-global/, 02-css-modules/, 03-tailwind/, 04-styled-components/;
- Cada pasta deve ter os componentes: Navbar, ProductCard, Button, Skeleton;
- Toggle de tema (claro/escuro com persistência);
- Grid de produtos (cards) responsivo: ≤480px: 1 col · 481–768px: 2 cols · 769–1024px: 3 cols · ≥1025px: 4 cols;
- Exibir 6 produtos (id, título, preço, rating, tag, imagem placeholder);
- Imagens com lazy loading;
- Badge de carrinho.

## Estrutura do repositório e como usar
Cada pasta dentro do repositório (mini-loja-react) é um projeto independente.
```bash
- mini-loja-react (raiz)
|-- 01-css-global
|-- 02-css-modules
|-- 03-tailwind
|-- 04-styled-components
|-- README.md (aqui)
```
Você pode clonar o repositório e, pelo terminal, acessar a pasta do projeto desejado:
```bash
git clone https://github.com/frassing/mini-loja-react.git
cd mini-loja-react/nome-da-pasta
```

Instalar as dependências e rodar em ambiente de desenvolvimento:
```bash
npm install
npm run dev
```

---
