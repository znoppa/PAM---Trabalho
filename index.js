const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const caminhoArquivo = './produtos.json';

// 🔄 Função para ler os produtos do arquivo
function lerProdutos() {
  const dados = fs.readFileSync(caminhoArquivo, 'utf-8');
  return JSON.parse(dados);
}

// 💾 Função para salvar os produtos no arquivo
function salvarProdutos(produtos) {
  fs.writeFileSync(caminhoArquivo, JSON.stringify(produtos, null, 2));
}

// GET
app.get('/produtos', (req, res) => {
  const produtos = lerProdutos();
  res.json(produtos);
});

// POST
app.post('/produtos', (req, res) => {
  const produtos = lerProdutos();
  const novo = req.body;
  novo.id = produtos.length ? produtos[produtos.length - 1].id + 1 : 1;
  produtos.push(novo);
  salvarProdutos(produtos);
  res.status(201).json(novo);
});

// PUT
app.put('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const produtos = lerProdutos();
  const index = produtos.findIndex(p => p.id === id);

  if (index !== -1) {
    produtos[index] = { id, ...req.body };
    salvarProdutos(produtos);
    res.json(produtos[index]);
  } else {
    res.status(404).json({ message: "Produto não encontrado." });
  }
});

// DELETE
app.delete('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let produtos = lerProdutos();
  const index = produtos.findIndex(p => p.id === id);

  if (index !== -1) {
    produtos = produtos.filter(p => p.id !== id);
    salvarProdutos(produtos);
    res.json({ message: "Produto removido com sucesso." });
  } else {
    res.status(404).json({ message: "Produto não encontrado." });
  }
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
