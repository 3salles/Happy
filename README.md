<<<<<<< HEAD
# Happy
Site created during Next Level Week #3 powered by Rocketseat.
=======

<p align="center">
  <img src="https://user-images.githubusercontent.com/62452619/96209718-a7aa1100-0f46-11eb-8c38-062a575f4249.png" alt="Logo">
  <h3 align="center">Happy App</h3>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Version&message=1.0&color=7159c1" alt="Version-1.0" />
  <img src="https://img.shields.io/static/v1?label=Desktop&message=Finished&color=brightgreen" alt="Desktop-finished" />
  <img src="https://img.shields.io/static/v1?label=Mobile&message=Finished&color=008000" alt="Mobile-finished" />
  <img src="https://img.shields.io/static/v1?label=Lincense&message=MIT&color=0000ff " alt="Lincense" />
  
</p>

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
# :card_file_box: Tabela de Conteúdos

* [Sobre o Projeto](#book-sobre-o-projeto)
  * [Layout](#art-layout)
  * [Tecnologias](#computer-tecnologias)
  * [Recursos](#sparkles-recursos)
* [Instalação](#bricks-instalaçao)
  * [Pré-requisitos](#construction-pré-requisitos)
  * [Front-end](#lipstick-front-end)
    * [Instalando Dependências](#construction-instalando-dependências)
    * [Configurando o Front-end](#wrench-configurando-o-front-end)
    * [Rodando o Front-end](#arrow_forward-rodando-o-front-end)
  * [Back-end](#file_cabinet-back-end)
    * [Instalando Dependências](#construction-instalando-dependências)
    * [Configurando o Back-end](#wrench-configurando-o-back-end)
    * [Rodando o Back-end](#arrow_forward-rodando-o-back-end)
  * [Mobile](#iphone-back-end)
    * [Instalando Dependências](#construction-instalando-dependências)
    * [Rodando o Mobile](#arrow_forward-rodando-o-back-end)
* [Licença](#page_facing_up-licença)
* [Autora](#woman_technologist-autora)

## :book: Sobre o Projeto

Happy é um site criado durante a Next Level Week #3 da Rockeseat. Este site conecta pessoas que querem visitar orfnatos. Esta aplicação permite que os orfanatos se registrem, informando horário de funcionamento, regras e localização. O usuário pode marcar um horário de visita e ver a localização dos orfanatos.

<p align="center">
  <img src="https://user-images.githubusercontent.com/62452619/96357353-2df25e80-10d1-11eb-9e8f-2f2f8930bc2d.png" width="50%" alt="Landing page" /> 
</p>

### :art: Layout

Você pode encontrar o layout do projeto nos links abaixo:

* [Desktop](https://www.figma.com/file/mDEbnoojksG4w8sOxmudh3/Happy-Web/duplicate)
* [Mobile](https://www.figma.com/file/X27FfVxAgy9f5IFa7ONlph/Happy-Mobile/duplicate)

🚨 Você precisa ter uma conta no  [Figma](https://www.figma.com) para acessar aos layouts.

### :computer: Tecnologias

* [TypeScript](https://www.typescriptlang.org)
* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com)
* [Express](https://expressjs.com)
* [Mapbox](https://www.mapbox.com)
* [TypeORm](https://typeorm.io#/)
* [SQLite](https://www.sqlite.org/index.html)
* [Axios](https://www.npmjs.com/package/axios)
* [Expo](https://expo.io)

### :sparkles: Recursos

  - [x] Versão Desktop
  - [x] Versão para Celular
  - [ ] Modo Escuro
  - [ ] Popup estilizado de cadastro realizado com sucesso
  - [ ] Adicionar o Shimmer Effect
  - [ ] Adcionar botão excluir nas imagens adicionadas
  - [ ] Integração do botão Whatsapp com o banco de dados
  - [ ] Mudar cor do botão 'não' de cadastro de orfanato.
  
## :bricks: Instalação

Este projeto usa [Node.js](https://nodejs.org/en/) e [Yarn](https://yarnpkg.com), você precisa deles para construir as dependências dele.

### :construction: Pré-requisitos

Clone o repositório deste projeto:

```bash
$ git clone https://github.com/3salles/Happy.git

#Entre nas pasta Happy:

$ cd Happy
```

🚨 Se você não possuir o git em sua máquina, instale [aqui](https://git-scm.com/downloads).

## :lipstick: Front-end

### :construction: Instalando Dependências

Dentro da pasta Happy, abra a pasta `web`:

```bash
$ cd web

# E instale as dependências com o seguinte comando:

$ yarn install
```

### :wrench: Configurando o Front-end

Para usar o [Mapbox](https://www.mapbox.com) você deve ter o seu Token. Crie uma conta e tenha seu próprio Token. Vá para o arquivo `OrphanagesMap.tsx` e mude onde tem `REACT_APP_MAPBOX_TOKEN` com o seu Token de acesso na seguinte linha:

```TypeScript
<TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
```

### :arrow_forward: Rodando o Front-end

Rode o seguinte comando para ver a aplicação:

```bash
yarn start
```

A aplicação estará disponível em `http://localhost:3000/`.

🚨 Lembre de iniciar o backend!

## :file_cabinet: Back-end

### :construction: Instalando Dependências

Dentro da pasta Happy, abra a pasta `backend`:

```bash
$ cd backend

# Instale as dependências com o seguinte comando:

$ yarn install
```

### :wrench: Configurando o Back-end

Crie as tabelas do banco de dados com o seguinte comando:

```bash
$ yarn typeorm migration:run

# Caso queira destruir as tabelas do banco de dados:

$ yarn typeorm migration:revert
```

### :arrow_forward: Rodando o Back-end

Rode o seguinte comando para iniciar o back-end:

```bash
$ yarn dev
```
A aplicação estará disponível em `http://localhost:3333/`.

:warning: Altere o endereço da variável `LOCALHOST` para o endereço de sua rede no arquivo `images_views.ts`:

```TypeScript
    return {
      id: image.id,
      url: `http://LOCALHOST:3333/uploads/${image.path}`,
    };
```

## :iphone: Mobile

Este projeto utiliza o [Expo](https://expo.io), instale-o antes de prosseguir.

### :construction: Instalando Dependências

Dentro da pasta Happy, abra a pasta `mobile`:

```bash
$ cd mobile

# Instale as dependências com o seguinte comando:

$ yarn install
```

### :arrow_forward: Rodando o Mobile

Rode o seguinte comando para iniciar o mobile:

```bash
$ expo start

# Caso queria usar o yarn

$ yarn start
```

A aplicação abrirá uma janela no navegador. Caso queira rodar em seu celular, apenas scaneie o QR code. Se desejar rodar em seu computador, leia sobre como usar o emulador [Android](https://docs.expo.io/workflow/android-studio-emulator/) ou emulador [iOS](https://docs.expo.io/workflow/ios-simulator/).

🚨 Lembre de iniciar o backend!

## :page_facing_up: Licença

Este projeto está sob a lincença [MIT](https://github.com/3salles/Happy/blob/main/LICENSE).

## ‍:woman_technologist: Autora

<p align="center">
  <a href="https://github.com/3salles"><img src="https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/3salles" alt="Github" /></a>
  <a href="https://www.linkedin.com/in/beatriz-salles-b701a31a6/"><img src="https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/beatriz-salles-b701a31a6" alt="LinkendIn" /></a>
  <a href="mailto:beatrizsallesss@gmail.com"><img src="https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:beatrizsallesss@gmail.com" alt="Gmail" /></a>
</p>

<p align="center">Desenvolvido com 💜 por Beatriz Salles</p>
>>>>>>> 1.0
