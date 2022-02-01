let listaCompra = []

function addProducto (producto) {  
    listaCompra.push(producto);
    alert("Vas a Explotar!")
    console.log(listaCompra);
    localStorage.setItem("arrayP", listaCompra);
}


function showProducts () {  
    listaCompra = localStorage.getItem("arrayP");
    console.log(listaCompra)
    const products = document.getElementById('products');
    for( let i = 0; i < listaCompra.length; i++ ) {
        products.innerHTML = `<article>${listaCompra[i]}</article>`;
        document.querySelector("article").innerHTML = JSON.stringify(listaCompra)    
    }
}


