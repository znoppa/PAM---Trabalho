# 🛍️ API de Moda Feminina - Vitor Reis e Bruno Vilela

Esta API foi desenvolvida como requisito para obtenção de nota no curso **Técnico em Desenvolvimento de Sistemas**, na disciplina **Programação Web 3**, ministrada pelos professores **Fátima** e **Cláudio**.

O objetivo é fornecer uma API simples para um e-commerce de moda feminina, com dados de produtos como roupas, calçados e acessórios.

Usamos uma tela principal para exibir a api, você pode realizar as alterações com as requisições e visualmente ver as alterações na tela através do index.html

## Estrutura principal da API: 

Arquivos:
```
// São os modulos necessários para o uso e armazenamento de informações
node_modules
package
package-lock
produtos.json

// API
index.js 
```
---

## 🚀 Diferenciais da nossa API

Usamos um arquivo JSON que atua como um "banco de dados" local, onde ao modificar as informações com as requisições, as alterações permanecerão mesmo que o servidor seja desligado ou reiniciado, dessa forma a tornando funcional e segura.
O arquivo que atua como o banco pode ser localizado na raiz quando clonado o repositório com o nome:

```
produtos.json
```

---

## 📦 Funcionalidades da API

- Listagem de produtos via requisição `GET`
- Inserção de novos produtos via requisição `POST`
- Delete de produtos via requisição `DELETE`
- Atualização de produtos via requisição `PUT`
- Suporte a CORS para integração com front-end em qualquer origem

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [CORS](https://expressjs.com/en/resources/middleware/cors.html)

---

## 🚀 Como Rodar o Projeto

### 1. Clone este repositório

No terminal do visual studio:

```
git clone https://github.com/seu-usuario/api-moda-feminina.git
cd api-moda-feminina
```

### 2. Instale as dependências

```
npm install
npm init -y
npm install express cors
```

### 3. Inicie a API

Abra o terminal e execute este comando:

```
node index.js
```

### A API estará disponível na web em: http://localhost:3000/produtos

---

## 📄 Endpoints da API - Como usar:

## 🧪 COMO TESTAR TODOS ESSES MÉTODOS

✅ Opção 1: Postman ou Insomnia (Recomendamos Postman)

Defina a URL: http://localhost:3000/produtos

Selecione o método (GET, POST, etc.)

Para POST e PUT, envie o corpo em JSON no body da requisição.

---

✅ 1. GET /produtos — Listar todos os produtos
Para quê serve:
Retorna todos os produtos (roupas, calçados, acessórios).

Como usar:
No navegador: acesse

```
http://localhost:3000/produtos

```

No Postman:

Método: GET
URL: http://localhost:3000/produtos


No terminal/CMD (cURL):

```
curl http://localhost:3000/produtos

```

Resposta esperada:
```
[
  {
    "id": 1,
    "nome": "Vestido Floral",
    "categoria": "Roupas",
    "preco": 120.00,
    "imagem": "URL da imagem"
  },
  ...
]
```

### ➕ 2. POST /produtos — Adicionar novo produto

Para quê serve:
Adiciona um novo item à lista de produtos.

Como usar:
No Postman:

Método: POST

URL: http://localhost:3000/produtos

Aba Body → raw → JSON
```
{
  "id": 13,
  "nome": "Blazer Feminino Rosa",
  "categoria": "Roupas",
  "preco": 149.90,
  "imagem": "https://example.com/blazer-rosa.jpg" - url da imagem que você deseja implementar
}

```
No terminal (cURL):

```
curl -X POST http://localhost:3000/produtos \
-H "Content-Type: application/json" \
-d '{
  "id": 13,
  "nome": "Blazer Feminino Rosa",
  "categoria": "Roupas",
  "preco": 149.90,
  "imagem": "https://example.com/blazer-rosa.jpg"
}'

```

### ✅ 3. PUT /produtos/:id — Atualizar um produto

🔧 Para que serve:
Atualiza as informações de um produto com base no ID (nome, preço, imagem, etc.).

🧪 No Postman:

Método: PUT

URL: http://localhost:3000/produtos/2 (substitua o 2 pelo ID que deseja editar)

Body: (em JSON)
```
{
  "nome": "Bolsa de Couro Luxo",
  "categoria": "Acessórios",
  "preco": 129.90,
  "imagem": "https://exemplo.com/imagem.jpg"
}
```
Headers:
```
Content-Type: application/json
```

💻 No terminal (cURL):
```
curl -X PUT http://localhost:3000/produtos/2 \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Bolsa de Couro Luxo",
    "categoria": "Acessórios",
    "preco": 129.90,
    "imagem": "https://exemplo.com/imagem.jpg"
  }'
```

### ✅ 4. DELETE /produtos/:id — Remover um produto

🔧 Para que serve:
Remove um produto específico com base no ID.

🧪 No Postman:

Método: DELETE
```
URL: http://localhost:3000/produtos/2 (substitua o 2 pelo ID do produto que deseja excluir)
```
Não precisa de body nem headers.

💻 No terminal (cURL):
```
curl -X DELETE http://localhost:3000/produtos/2
```

🧠 Dica:
Para confirmar se o produto foi realmente removido ou atualizado, use:

```
curl http://localhost:3000/produtos
```
Assim você verá a lista atualizada.

---

## 🌐 Como Integrar com Front-End
Você pode consumir esta API facilmente em seu front-end com fetch():

```
fetch('http://localhost:3000/produtos')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

## 📚 Créditos Acadêmicos
Este projeto foi desenvolvido como parte da disciplina Programação Web 3, do curso Técnico em Desenvolvimento de Sistemas, sob orientação dos professores Fátima e Cláudio.
