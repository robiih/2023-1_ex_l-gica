function comprar() {
    let codigo = Number(prompt("Digite o Código:"))
    let quantidade = Number(prompt("Quantidade:"))

    if (codigo == 1) {
        preco = 4.00
    }

    else {
        if (codigo == 2) {
            preco = 4.50
        }
        else {
            if (codigo == 3) {
                preco = 5.00
            }
            else {
                if (codigo == 4) {
                    preco = 2.00
                }
                else {
                    if (codigo == 5) {
                        preco = 1.50
                    }
                }
            }
        }
    }




    let total = preco * quantidade
    alert("Valor a pagar: R$" + total.toFixed(2))

}
