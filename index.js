

function calcularSaldoETotal(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let ranking;

    if (saldo < 10) {
        ranking = "Ferro";
    } else if (saldo >= 11 && saldo <= 20) {
        ranking = "Bronze";
    } else if (saldo >= 21 && saldo <= 50) {
        ranking = "Prata";
    } else if (saldo >= 51 && saldo <= 80){
        ranking = "Ouro"
    } else if (saldo >= 81 && saldo <= 90){
        ranking = "Diamante"
    } else if (saldo >= 91 && saldo <= 100){
        ranking = "Lendario"
    } else if (saldo >= 100){
        ranking = "Imortal"
    }else {
        ranking = "Sem classificação";
    }

    return {saldo, ranking};
}

// Teste a função
let vitorias = 80;
let derrotas = 10;
let resultado = calcularSaldoETotal(vitorias, derrotas);
console.log("O herói tem o saldo de " + resultado.saldo + " e está no nível " + resultado.ranking);




