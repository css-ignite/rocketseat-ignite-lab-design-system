# Ignite Lab #3 - Do Figma ao React

![image](https://user-images.githubusercontent.com/12506432/195759740-3fd7e15d-afe7-4c8e-9e11-1767b2ac78bf.png)

Evento disponibilizado pela [RocketSeat](https://www.rocketseat.com.br/)

## Tema: Design System com Figma, React e StoryBook

<img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/claudneysessa/RocketSeat-ignite-lab-design-system"/>

Projeto desenvolvido durante a semana de 10/10/2022 a 13/11/2022, onde pude ter contato com várias ferramentas para a construção de um Design System como, Figma, React, StoryBook e TailwindCSS.

## A aplicação teve as seguintes etapas de construção

- Projeto no Figma
- Design System - Criação dos componentes
- Documentação no Storybook
- Deploy automatizado com GitHub Actions
- Criação do Front-End em Vite
- Implementação de testes com Jest no Storybook.

## Tecnologias e ferramentas utilizadas

- [React.JS (Vite)](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)
- [Addon A11y](https://www.npmjs.com/package/@storybook/addon-a11y)
- [Github Actions](https://github.com/features/actions)
- [Jest](https://jestjs.io/pt-BR/)
- [MSW](https://mswjs.io/)

Durante as aulas, pude conhecer como montar uma estrutura visual de um design system na prática com o Figma e como porta-lo para o código disponibilizando assim os dados para testes dos componentes via StoryBook,
deploy automatizado com GitHub Actions e simulação do Front-End em Vite.

![image](https://user-images.githubusercontent.com/12506432/195761826-2861aa90-156f-45d3-9ec3-6730930b3757.png)

</div>

---

## Projeto no Figma

[https://www.figma.com/file/2ws9TBu6IweT00RnFdCo6a/Ignite-Lab-Design-System?node-id=14%3A162](https://www.figma.com/file/2ws9TBu6IweT00RnFdCo6a/Ignite-Lab-Design-System?node-id=14%3A162)

Pagina de Login:

![image](https://user-images.githubusercontent.com/12506432/195759270-ae386b8b-4737-408b-9a74-f961af057651.png)

Estrutura dos Componentea gerados:

![image](https://user-images.githubusercontent.com/12506432/195759371-72ff7fff-39ac-46ae-896e-8a9059408f21.png)

## Configurando o Projeto

## Iniciando o repositório do Git

Aqui eu inicio o meu repositório no git

```bash
git init
```

## Iniciando a pasta do projeto

Iniciando o projeto com o NodeJS

```bash
npm init -y
```

## Configuração inicial do .gitignore

```.gitignore
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

## Removendos pastas padrões para criação da estrutura do projeto

Arquivos Removidos

- src/App.css
- src/index.css
- src/assets/react.svg

Arquivos editados

- App.tsx
- main.tsx

## Instalando o TailwindCSS

```bash
npm install -D tailwindcss  postcss autoprefixer
npx tailwindcss init -p
```

## Configurando o globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Exportando os Tokens do Figma para o projeto

Aqui eu gero o arquivo com os Tokens gerados no figma

- tailwind.config.cjs
  - fontSize
  - colors
  - fontFamily

Adicionando a fonte inter do GoogleFonts

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
    <title>Ignite Lab Design System</title>
  </head>
  <body>
    <div id="root"></div>
```

Configurando os Tokens no TailwindCSS

```cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      'xs': 14,
      'sm': 16,
      'md': 18,
      'lg': 20,
      'xl': 24,
      '2xl': 32,
    },
    colors: {
      black: '#000',
      white: '#fff',
      transparent: 'transparent',
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#c4c4cc',
        100: '#e1e1e6',
      },
      cyan:{
        500: '#81d8f7',
        300: '#98e1fb',
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
```

Instalando o CSLX

```bash
npm install --save clsx
```

## Adicionando o RadixUI-Slot

```bash
npm install @radix-ui/react-slot
```

## Adicionando o phosphor-react

```bash
npm i phosphor-react 
```

## Adicionando o RadixUI-Checkbox

```bash
npm install @radix-ui/react-checkbox
```

## Criando os componentes

Componentes criados

- Heading.tsx
- Text.tsx
- Button.tsx
- TextInput.tsx
- Checkbox.tsx

## Adicionando o StoryBook

```bash
npm i @storybook/storybook-deployer --save-dev
npx sb init --builder @storybook/builder-vite --use-npm 
```

Adicionando o StoryBook no packages.json

```json
{
  "name": "lab-ds",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "storybook": "start-storybook -p 6006",
    "build-storybook": "build-storybook"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@babel/core": "^7.19.3",
    "@storybook/addon-actions": "^6.5.12",
    "@storybook/addon-essentials": "^6.5.12",
    "@storybook/addon-interactions": "^6.5.12",
    "@storybook/addon-links": "^6.5.12",
    "@storybook/builder-vite": "^0.2.4",
    "@storybook/react": "^6.5.12",
    "@storybook/testing-library": "^0.0.13",
    "@types/react": "^18.0.17",
    "@types/react-dom": "^18.0.6",
    "@vitejs/plugin-react": "^2.1.0",
    "autoprefixer": "^10.4.12",
    "babel-loader": "^8.2.5",
    "postcss": "^8.4.17",
    "tailwindcss": "^3.1.8",
    "typescript": "^4.6.4",
    "vite": "^3.1.0"
  }
}
```

## Publicando os componentes criados no StoryBook

- Heading.stories.tsx
- Text.stories.tsx
- Button.stories.tsx
- TextInput.stories.tsx
- Checkbox.stories.tsx

## Deploy do Storybook no Github Pages

Veja aqui a publicação do StoryBook no GitHub Pages

- [https://claudneysessa.github.io/rocketseat-ignite-lab-design-system](https://claudneysessa.github.io/rocketseat-ignite-lab-design-system/?path=/story/components-button--default)

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/12506432/195783039-a5894c65-576a-4afa-a53a-92e09359e40c.png">

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/12506432/195783108-1897753f-12f0-4bc7-8b62-5b4986074414.png">

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/12506432/195782423-ff44783f-e7c1-4fe1-955d-bfd818c67bd5.png">

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/12506432/195783243-f5f4874e-34a2-4d2d-83c0-ae2fc1aa9978.png">

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/12506432/195783293-69f2124a-4fd4-4cf0-a3f2-720a6fef29f3.png">

## Instalação e uso

Clone o projeto e acesse a pasta

```bash
git clone https://github.com/claudneysessa/rocketseat-ignite-lab-design-system
```

Siga os passos abaixo:

```bash
# Instalar as Dependências
$ npm i

# Iniciar o Servidor em Modo de Desenvolvimento
$ npm run dev

# Iniciar o StoryBook
$ npm run storybook
```

## Ferramentas Utilizadas

<div>

<table border="0">
  <tr>
    <td align="center" width="96">
      <a href="#VisualStudioCode-tech">
        <img align="center" alt="devcss-Js" height="65" width="65" src="https://raw.githubusercontent.com/claudneysessa/RocketSeat-ignite-lab-design-system/f09dc9a18337c083ee209b5ebd8f0987d03b83bd/figma-1.svg?raw=true">
      </a>
    </td>
    <td align="center" width="96">
      <a href="#VisualStudioCode-tech">
        <img align="center" alt="devcss-Js" height="65" width="65" src="https://raw.githubusercontent.com/claudneysessa/RocketSeat-ignite-lab-design-system/05ac7733917f772e1361c73b696a2d94ef1d4fe5/react-2.svg?raw=true">
      </a>
    </td>
    <td align="center" width="96">
      <a href="#VisualStudioCode-tech">
        <img align="center" alt="devcss-Js" height="65" width="65" src="https://github.com/claudneysessa/claudneysessa/blob/main/images/language_icons/visual%20studio%20code.png?raw=true">
      </a>
    </td>
    <td align="center" width="96">
      <a href="#VisualStudioCode-tech">
        <img align="center" alt="devcss-Js" height="65" width="65" src="https://raw.githubusercontent.com/claudneysessa/RocketSeat-ignite-lab-design-system/05ac7733917f772e1361c73b696a2d94ef1d4fe5/github-icon-1.svg?raw=true">
      </a>
    </td>
    <td align="center" width="96">
      <a href="#VisualStudioCode-tech">
        <img align="center" alt="devcss-Js" height="65" width="65" src="https://raw.githubusercontent.com/claudneysessa/RocketSeat-ignite-lab-design-system/05ac7733917f772e1361c73b696a2d94ef1d4fe5/storybook-1.svg?raw=true">
      </a>
    </td>
    <td align="center" width="96">
      <a href="#VisualStudioCode-tech">
        <img align="center" alt="devcss-Js" height="65" width="65" src="https://raw.githubusercontent.com/claudneysessa/RocketSeat-ignite-lab-design-system/05ac7733917f772e1361c73b696a2d94ef1d4fe5/tailwindcss.svg?raw=true">
      </a>
    </td>
  </tr>
</table>

</div>

## Where to find me

<div>
    <a href="https://www.youtube.com/channel/UC52P3HVpmOMHjkmIhcjLRyQ" target="_blank">
      <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" target="_blank">
    </a>
    <a href="https://instagram.com/claudneysessa" target="_blank">
      <img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank">
    </a>
    <a href = "mailto:claudneysartisessa@gmail.com">
      <img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank">
    </a>
    <a href="https://www.linkedin.com/in/claudneysessa/" target="_blank">
      <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank">
    </a>
    <a href="https://medium.com/@claudneysartisessa" target="_blank">
      <img alt="Medium" src="https://img.shields.io/badge/medium-%2312100E.svg?&style=for-the-badge&logo=medium&logoColor=white" />
    </a>
</div>

## Veja o meu Perfil no Github

https://github.com/claudneysessa

## Contact
 - Instagram: [https://www.instagram.com/claudneysessa/](https://www.instagram.com/claudneysessa/)
 - Linkedin: [https://www.linkedin.com/in/claudneysessa/](https://www.linkedin.com/in/claudneysessa/)
