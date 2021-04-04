// calculo de número fatorial 

    let fatorial = 1;
    let number = parseInt(prompt("Para calcular o fatorial, digite um número"));
    for (let i = 1,  <= number; i++) {
        fatorial = fatorial * i;
        i += 1;
    }
    console.log("Calculo final de $number é $fatorial");
