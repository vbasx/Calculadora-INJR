notas = []
let saidaMedia = document.querySelector("#saidaMedia");

function calcularMedia() {
    let soma = notas.reduce((total, nova) => total + nova, 0);
    let mediaOriginal = soma/notas.length;
    let mediaArredondada = Math.round(mediaOriginal * 100) / 100;
    if (notas.length == 0) { // lista sem notas
        saidaMedia.innerText = "Nenhuma nota foi informada ainda.";
        return;
    }
    saidaMedia.innerText = `A média é: ${mediaArredondada}`;
}

function adicionar() {
    let input = document.querySelector("#nota");
    let valor = parseFloat(input.value.replace(',', '.')); // valida vírgula como ponto
    let caixa = document.querySelector("#saida");

    if (valor >= 0 && valor <= 10) { //input dentro do formato válido
        notas.push(valor); // add a nota na lista
        caixa.value += `A nota ${notas.length} foi ${valor}\n`;
        input.value = ''; // limpa o input depois
    }
    else if (input.value.trim() == "") { // input vazio
        alert("Por favor, insira uma nota.")
    }
    else { // valor não numérico ou fora do limite da nota
        alert("A nota digitada é inválida. Por favor, insira uma nota válida.");
        input.value = '';
    }
}

let btn_adicionar = document.querySelector("#adicionar"); // botão para adicionar 
btn_adicionar.addEventListener("click", adicionar); // registra a nota na textarea

let btn_media = document.querySelector("#buttonMedia"); // botão para mostrar média
btn_media.addEventListener("click", calcularMedia); // mostra a média no campo reservado