function buscarProdutos(){
    fetch('https://fakestoreapi.com/products')
    .then(resposta => resposta.json())
    .then(listaProdutos => {
        listaProdutos.map(produto =>{
            produtos.innerHTML += `
            <li class="w-1/4">
             <div>
                 <img src="${produto.image}" alt=""> 
                 <span>${produto.rating.rate}</span>
             </div>
             <div>
               <h3>${produto.title}</h3>
               <h6>${produto.category}</h6>
               <h2>${produto.price} </h2>
             </div>
           </li>
           `;
        })
     
    })
}
buscarProdutos()