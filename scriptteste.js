
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
            this.troco();
            this.atualizarTempoeHora();
            return;
        } 
        if (valorInserido > 4){
            alert("Máximo de 4 reais (120 minutos)");
            this.troco();
            this.atualizarTempoeHora();
            return;
        } else {
            alert("Minimo de 1 real");
            return;
        }
    }

    troco(){
        const valorInserido = parseInt(document.getElementById('valor').value);
        const tempo_estacionamento = (valorInserido / this.#tarifa) * 30;
        const troco = valorInserido - (tempo_estacionamento / 30) * this.#tarifa;
        document.getElementById('troco').textContent = "R$"+troco;
    }

    atualizarTempoeHora() {
        document.getElementById("horas").textContent = this.#horas + ' minutos';
        document.getElementById("valorinserido").textContent = 'R$' + this.valor;
        document.getElementById("valor").value = '';
    }
}

const estacionamento = new parquimetro();