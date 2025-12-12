# SCAR Board - Front End

Aplicação front-end construída com **Vite**, **React**, **TypeScript** e **Styled Components**.

## 🚀 Tecnologias Utilizadas

- **Vite** - Build tool moderno e ultra-rápido
- **React** - Biblioteca para construção de interfaces
- **TypeScript** - Linguagem tipada para JavaScript
- **Styled Components** - CSS-in-JS com componentes estilizados

## 📋 Pré-requisitos

- Node.js (v16+)
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd scar-board-front-end
```

2. Instale as dependências:
```bash
npm install
```

## 🎯 Comandos Disponíveis

### Desenvolvimento
```bash
npm run dev
```
Inicia o servidor de desenvolvimento em `http://localhost:5173`

### Build
```bash
npm run build
```
Cria uma versão otimizada para produção em `dist/`

### Preview
```bash
npm run preview
```
Visualiza a build de produção localmente

### Lint
```bash
npm run lint
```
Executa as verificações de ESLint

## 📁 Estrutura do Projeto

```
src/
├── components/      # Componentes React reutilizáveis
├── pages/          # Páginas principais da aplicação
├── styles/         # Estilos globais e tema
├── types/          # Definições de tipos TypeScript
├── utils/          # Funções utilitárias
├── App.tsx         # Componente principal
└── main.tsx        # Ponto de entrada
```

## 🎨 Styled Components

O projeto usa Styled Components para estilização. Exemplo:

```typescript
import styled from 'styled-components';

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.primary};
`;
```

### Tema Padrão

O tema está definido em `src/styles/theme.ts` com:
- **Cores**: primary, secondary, success, danger, warning, info, light, dark
- **Espaçamento**: xs, sm, md, lg, xl, xxl
- **Breakpoints**: mobile, tablet, desktop, wide

## 📖 Documentação

- [Vite Docs](https://vite.dev)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org)
- [Styled Components Docs](https://styled-components.com)

## 📝 Licença

MIT
