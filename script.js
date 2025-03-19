
class parquimetro {
    #horas;
    constructor(valor){
        this.valor = valor;
        this.#horas = 0;
    }
    adicionarValor() {
        const valorInserido = parseInt(document.getElementById("valor").value);
        if (valorInserido > 4){
            alert("Máximo de 4 reais (120 minutos)");
            return;
        }
        if(valorInserido >= 1){
        this.valor = valorInserido;
        this.#horas = this.valor * 30;
        this.atualizarTempoeHora();
    } else {
            alert("Minimo de 1 real");
        }
    }

   get horas(){
        return this.#horas;
    }

    atualizarTempoeHora() {
        document.getElementById("horas").textContent = this.horas + ' minutos';
        document.getElementById("valorinserido").textContent = 'R$' + this.valor;
        document.getElementById("valor").value = '';
    }
}


const estacionamento = new parquimetro();


/* Pegar o valor inserido pelo usuario
Fazer a conversão do valor para minutos, pensei em algo como valor * 30, no caso 1 real igual 30 minutos
Retornar na interface o valor e os minutos/horas
*/
//1 real = 30 minutos
//1,50 = 45 minutos
//2 = 60 minutos







/*
const obterid = (id) => document.getElementById(id).value;

function testeclique(){
    const valor = obterid('valor');
    const minutos = valor * 30;
    if(valor > 4){
        document.getElementById('valorinserido').textContent = "Insira até um maximo de  4 reais"
        document.getElementById('horas').textContent = "Tempo de permanencia máximo de 120 minutos"
        return;
    } if (valor < 1){
        document.getElementById('valorinserido').textContent = "Valor minimo de 1 real"} else{
    const mostrarValor = document.getElementById('valorinserido').textContent = 'R$' + valor;
    const mostrarMinutos = document.getElementById('horas').textContent = minutos + " Minutos";}
}*/

