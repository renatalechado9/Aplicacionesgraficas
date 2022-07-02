var carrito = [
    {
        nombre: "Aglomerado",
        foto: "images/Tableros/Aglomerado.jpg",
        precio: 49.88,
        cantidad: 1
    },
    {
        nombre: "Maderas Finas Alder",
        foto: "images/maderas/Alder.png",
        precio: 49.88,
        cantidad: 1
    }
    ];
    const tabla = document.getElementById("tabla-carrito");
    const subtotal = document.getElementById("t-subtotal");
    const shipping = document.getElementById("t-shipping");
    const total = document.getElementById("t-total");
    
    getRound2 = (num) => num.toFixed(2);
    
    
    function getRowHTML({nombre, foto, precio, cantidad}) {
        return `<td class="cart_product_img d-flex align-items-center">`+
            `<a href="#"><img src="${foto}" alt="Product" height="100px" width="150px" ></a>`+
            `<h6>${nombre}</h6>`+
            `</td>`+
            `<td class="price"><span>${precio}</span></td>`+
            `<td class="qty">`+
            `<div class="quantity">`+
                    `<span class="qty-minus" onclick="changeQty(event, -1, '${nombre}')"><i class="bi bi-caret-left-fill" aria-hidden="true"></i></span>`+
                    `<input type="number" class="qty-text" step="1" min="1" max="99" name="quantity" value="${cantidad}">`+
                    `<span class="qty-plus"  onclick="changeQty(event, 1, '${nombre}')"><i class="bi bi-caret-right-fill" aria-hidden="true"></i></span>`+
                `</div>`+
            `</td>`+
            `<td class="total_price"><span>${getRound2(precio*cantidad)}</span></td>`;
    }
    
    function clearTable() {
        for (let row in tabla.rows) {
            tabla.deleteRow(-1);
        }
    }
    
    function updateTable(){
        let sum = 0;
        clearTable();
        carrito.forEach(producto =>{
            let row = tabla.insertRow();
            row.innerHTML = getRowHTML(producto);
            sum += producto.cantidad*producto.precio;
        });
    
        subtotal.textContent = `$${sum.toFixed(2)}`;
        let radioValue = document.querySelector('input[name="customRadio"]:checked').value;
        shipping.textContent = (radioValue!=='0') ? `$${radioValue}` : "Free";
        let total_price = sum+Number.parseFloat(radioValue);
        total.textContent = `$${total_price.toFixed(2)}`
    }
    
    function clearAll() {
        carrito = [];
        document.querySelector('input[name="customRadio"][value="0"]').checked = true;
        updateTable();
    }
    
    function changeQty(evt, count, nombre){
        carrito[carrito.findIndex(producto => producto.nombre === nombre)].cantidad += count;
        updateTable()
    }
    
    
    
    updateTable();