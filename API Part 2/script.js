        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            const section = document.getElementById("products");

            products.forEach(product => {
                const card = document.createElement("div");
                card.classList.add("card");
                    card.innerHTML = `
                        <h1>Name: ${product.title}</h1>
                        <img class="item-image" src="${product.image}">
                        <br>
                        <br>
                        <u>price: ${product.price}</u>
                        <br>
                        <br>
                        <i>count: ${product.rating.count}</i>
                    `;
                section.appendChild(card);
            });
        });