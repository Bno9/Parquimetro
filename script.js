
class parquimetro {
    #horas;
    #tarifa;
    constructor(valor){
        this.valor = valor;
        this.#horas = 0;
        this.#tarifa = 1;
    }

    adicionarValor() {
        const valorInserido = parseInt(document.getElementById("valor").value);
        if(valorInserido >= 1 && valorInserido <= 4){
            this.valor = valorInserido;
            this.#horas = (valorInserido / this.#tarifa) * 30;
            this.atualizarTempoeHora();
            return;
        } 
        if (valorInserido > 4){
            alert("Máximo de 4 reais (120 minutos). Você recebera seu troco");
            this.valor = valorInserido;
            this.#horas = 120;
            this.troco();
            this.atualizarTempoeHora();
            return;
        } else {
            alert("Minimo de 1 real");
            document.getElementById("horas").textContent = 'R$0,00';
            document.getElementById("valorinserido").textContent = '0 minutos';
            return;
        }
    }

    troco(){
        const valorInserido = parseInt(document.getElementById('valor').value);
        const tarifaMaxima = 4;
        const tempo_estacionamento = (valorInserido / this.#tarifa) * 30;
        const troco = (tempo_estacionamento / 30) * this.#tarifa - tarifaMaxima;
        document.getElementById('troco').textContent = "R$"+troco.toFixed(2).replace('.',',');
    }

    atualizarTempoeHora() {
        document.getElementById("horas").textContent = this.#horas + ' minutos';
        document.getElementById("valorinserido").textContent = 'R$' + this.valor.toFixed(2).replace('.',',');
        document.getElementById("valor").value = '';
    }
}

const estacionamento = new parquimetro();