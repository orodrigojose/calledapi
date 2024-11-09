<br />
<div align="center">
  <h1 align="center">CalledAPI</h1>
  <p align="center">
    Uma API simples para gerenciamento de chamados. 📝
    <br />
    <a href="https://github.com/RepresentaInterno/test-internship"><strong>Teste técnico proposto por  »</strong></a>
  </p>
</div>

## 🔖 Sobre o Projeto
Consiste em uma API simples capaz de manuesear e gerenciar chamados de usuários, nela é possível criar, deletar e mudar status dos chamados, também é presente na aplicação gerenciamento e criação de usuários.

### ♨️ Tecnologias utilizadas durante o Desenvolvimento
![os](https://img.shields.io/badge/Linux-E34F26?style=for-the-badge&logo=linux&logoColor=black)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)
![Neovim](https://img.shields.io/badge/NeoVim-%2357A143.svg?&style=for-the-badge&logo=neovim&logoColor=white)


## 🔧 Requisitos
Para executar a aplicação localmente, é necessário:

- **Docker** em prol da execução do **MongoDB**
-  **NodeJS** para executar corretamente o Projeto

## 💿 Instalação e Execução do Projeto
> [!TIP]
> Para a instalação correta do NodeJS, recomendo ver e seguir os passo presentes [na documentação oficial](https://nodejs.org/pt/download/package-manager)

> [!TIP]
> Para a instalação do Docker com a imagem do MongoDB, como recomendação siga este tutorial da [Balta](https://balta.io/blog/mongodb-docker)

Clone o repositório após ter realizado a instalação do Docker e NodeJs por meio dos seguintes "comandos":
```bash
git clone https://github.com/orodrigojose/calledapi.git
cd calledapi/

# caso não tenha o yarn instalado, pode utilizar "npm i"
yarn

# para inicializar o MongoDB+Docker
yarn mongo:start

# por fim execute o seguinte comando para rodar o projeto
yarn dev
```

---
<p align="center">Desenvolvido com dedicação e muito ☕</p>
