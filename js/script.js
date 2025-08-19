document.addEventListener("DOMContentLoaded", () => {
  const produtosContainer = document.getElementById("produtos");

  fetch("http://localhost:3000/produtos")
    .then(res => res.json())
    .then(produtos => {
      if (produtos.length === 0) {
        produtosContainer.innerHTML = "<p class='text-center'>Nenhum produto encontrado.</p>";
        return;
      }

      // Limpa o carregando
      produtosContainer.innerHTML = "";

      produtos.forEach(produto => {
        const card = document.createElement("div");
        card.className = "col-12 col-sm-6 col-md-4 col-lg-3";

        card.innerHTML = `
          <div class="card h-100 shadow-sm">
            <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
            <div class="card-body">
              <h5 class="card-title">${produto.nome}</h5>
              <p class="card-text">${produto.categoria}</p>
              <p class="fw-bold text-primary">R$ ${produto.preco.toFixed(2)}</p>
            </div>
          </div>
        `;

        produtosContainer.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Erro ao carregar produtos:", err);
      produtosContainer.innerHTML = "<p class='text-danger'>Erro ao carregar produtos.</p>";
    });
});
