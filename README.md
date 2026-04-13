# 🍽️ API Restaurant

API REST desenvolvida para gerenciamento de pedidos em mesas de um restaurante.

## 📌 Descrição

Esta API permite controlar pedidos realizados em mesas de um restaurante, facilitando o gerenciamento de consumo, organização de pedidos e integração com sistemas front-end.

---

## 🚀 Tecnologias utilizadas

* Node.js
* TypeScript
* Express
* Knex.js
* SQLite
* Zod (validação)

---

## ⚙️ Instalação e execução

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/api-restaurant.git
cd api-restaurant
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute as migrations (se houver)

```bash
npm run knex migrate:latest
```

### 4. Inicie o servidor

```bash
npm run dev
```

O servidor estará rodando em:

```
http://localhost:3333
```

---

## 📁 Estrutura do projeto

```
src/
 ├── database/      # Configuração do banco de dados
 ├── routes/        # Rotas da aplicação
 ├── controllers/   # Lógica das requisições
 ├── middlewares/   # Middlewares
 └── server.ts      # Inicialização da aplicação
```

---

## 📌 Funcionalidades

* Criar pedidos
* Listar pedidos
* Atualizar pedidos
* Remover pedidos
* Gerenciamento de mesas

---

## 📬 Endpoints (exemplo)

### ➤ Criar pedido

```http
POST /orders
```

### ➤ Listar pedidos

```http
GET /orders
```

### ➤ Atualizar pedido

```http
PUT /orders/:id
```

### ➤ Deletar pedido

```http
DELETE /orders/:id
```

---

## 🧪 Testes de API

Você pode utilizar ferramentas como:

* Insomnia
* Postman

O projeto já possui um arquivo de coleção para testes:

```
Insomnia_2026-04-13 - API RESTAURANTE.yaml
```

---

## 🗄️ Banco de dados

O projeto utiliza **SQLite**, ideal para desenvolvimento local.

Configuração localizada em:

```
knexfile.ts
```

---

## 📄 Licença

Este projeto está sob a licença ISC.

---

## 👨‍💻 Autor

Desenvolvido por **Christian Rufino**

---

## 💡 Observações

* Projeto ideal para estudo de APIs REST com Node.js
* Pode ser facilmente adaptado para bancos como PostgreSQL ou MySQL
* Estrutura preparada para escalar

---

## ⭐ Contribuição

Sinta-se à vontade para abrir issues ou enviar pull requests!

---
