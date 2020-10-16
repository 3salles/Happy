![Badge](https://img.shields.io/badge/version-beta-%23E0234E)
![Badge](https://img.shields.io/badge/mobile-working-%23F86001)
![Badge](https://img.shields.io/badge/license-MIT-brightgreen)

<br />
<p align="center">
  <img src="https://user-images.githubusercontent.com/62452619/96209718-a7aa1100-0f46-11eb-8c38-062a575f4249.png" alt="Logo">
  <h3 align="center">Happy App</h3>

  <p align="center">
    Site desenvolvido durante a Next Level Week #3 da Rockectseat.
    <br />
    <br />
    <a href="README-en.md">🇺🇸Inglês</a>
    ·
    <a href="README.md">🇧🇷Português</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
# 🗂Tabela de Conteúdos

* [Sobre o Projeto](#ℹsobre-o-projeto)
  * [Layout](#🔖layout)
  * [Versão Desktop](##🖥versão-desktop)
  * [Tecnologias](#💻tecnologias)
  * [Recursos](#💡recursos)
* [Instalação](#🏗instalaçao)
  * [Pré-requisitos](#🚧pré-requisitos)
  * [Front-end](#💄front-end)
    * [Instalando Dependências](#🚧instalando-dependências)
    * [Configurando a Aplicação](#🔧configurando-a-aplicação)
    * [Rodando a Aplicação](#▶rodando-a-aplicação)
* [Licença](#📄licença)
* [Autora](#👩‍💻autora)

## ℹSobre o Projeto

Happy é um site criado durante a Next Level Week #3 da Rockeseat. Este site conecta pessoas que querem visitar orfnatos. Esta aplicação permite que os orfanatos se registrem, informando horário de funcionamento, regras e localização. O usuário pode marcar um horário de visita e ver a localização dos orfanatos.

### 🖥Versão Desktop
<p float="left">
  <img src="https://user-images.githubusercontent.com/62452619/96150090-6f6fe780-0ee0-11eb-8106-7a21337c3f01.png" width="45%" /> 
  <img src="https://user-images.githubusercontent.com/62452619/96150156-80b8f400-0ee0-11eb-8f13-708be460cdde.png" width="45%"/>
</p>

### 🔖Layout
Você pode encontrar o layout do projeto nos links abaixo:
* [Desktop](https://www.figma.com/file/mDEbnoojksG4w8sOxmudh3/Happy-Web/duplicate)

🚨 Você precisa ter uma conta no  [Figma](https://www.figma.com) para aceessar aos layouts.

### 💻Tecnologias

* [TypeScript](https://www.typescriptlang.org)
* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com)

### 💡Recursos
  - [ ] Modo Escuro
  - [ ] Versão para Celular

## 🏗Instalação
Este projeto usa [Node.js](https://nodejs.org/en/) e [Yarn](https://yarnpkg.com), você precisa deles para construir as dependências dele.
### 🚧Pré-requisitos
Clone o repositório deste projeto:

```$ git clone https://github.com/3salles/Happy.git```

Entre nas pasta `Happy`:

```$ cd Happy```

🚨 Se você não possuir o git em sua máquina, instale [aqui](https://git-scm.com/downloads).

## 💄Front-end
### 🚧Instalando Dependências
Dentro da pasta Happy, abra a pasta `web`:

`$ cd web`

E instale as dependências com o seguinte comando:

`$ yarn install`

### 🔧Configurando a aplicação

Para usar o [Mapbox](https://www.mapbox.com) você deve ter o seu Token. Crie uma conta e tenha seu próprio Token. Vá para o arquivo `OrphanagesMap.tsx` e mude onde tem `REACT_APP_MAPBOX_TOKEN` com o seu Token de acesso na seguinte linha:

```<TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />```

### ▶Rodando a Aplicação

Rode o seguinte comando para ver a aplicação:

`yarn start`

A aplicação estará disponível em `http://localhost:3000/`.

🚨 Lembre de iniciar o backend! Veja como clicando [aqui](#).

## 📄Licença

Este projeto está sob a lincença [MIT](https://github.com/3salles/Happy/blob/main/LICENSE).

## 👩‍💻Autora

[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/3salles)](https://github.com/3salles)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/beatriz-salles-b701a31a6)](https://www.linkedin.com/in/beatriz-salles-b701a31a6/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:beatrizsallesss@gmail.com)](mailto:beatrizsallesss@gmail.com)