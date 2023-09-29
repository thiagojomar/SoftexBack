//MOTO
class MOTO {
    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.velocidade = 0;
    }
    //ACELERAR
    acelerar(velox) {
        if (velox == 0 || velox == null) {
            console.log(`Verifique se a Moto está ligada e acelere.`);
        } else {
            console.log('A Moto está Acelerando.');
            this.velocidade += velox
            console.log(`A velocidade atual da moto é ${this.velocidade}.`);
        }

    }
    //DESACELERAR
    frear() {
        if (this.velocidade != 0 || this.velocidade != null) {
            console.log("A Moto está em movimento, iniciando frenagem.");
            return this.velocidade = 0
        } else {
            console.log('A Moto já está parada.')

        }
    }
    //BUZINAR
    buzinar() {
        console.log("BIBITI");
    }

}

var motoca = new MOTO('Honda', 'CB300', 2024, 'Preta');
console.log(motoca);
motoca.acelerar(100);
motoca.frear();
motoca.buzinar();

//CELULAR
class celular {
    constructor(marca, modelo, cor, plano, camera) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.plano = plano;
        this.camera = camera;
        this.credito = 0;
    }
    //TIRAR FOTO
    tirarFoto() {
        if (this.camera == true) {
            console.log('A camera está ligada. Tirando Foto');
        } else {
            console.log('Esse celular não possui camera.');
        }
    }
    //EFETUAR CHAMADA
    efetuarChamada() {
        if (this.plano == "pospago") {
            console.log('Efetuando Chamada.')
        } else {
            if (this.credito > 0) {
                console.log('Efetuando Chamada.');
                this.credito -= 1;
            } else {
                console.log('Não há crédito suficiente para efetuar chamada. Coloque novos créditos.');
            }
        }
    }
    //COMPRAR CRÉDITOS
    comprarCredito(valor) {
        if (this.plano == "pospago") {
            console.log('Esta celular possui um plano PósPago e não pode adicionar novos creditos.');
        } else {
            this.credito += valor;
            console.log(`Você comprou ${valor} de crédito(s). Seu novo saldo é ${this.credito}.`);
        }
    }
}

var celular1 = new celular('Samsung', 'Galaxy S20', 'Preta', 'pospago', true);
var celular2 = new celular('Apple', 'Iphone15PROMAX', 'Branco', 'prepago');

console.log(celular1);
celular1.tirarFoto();
celular1.efetuarChamada();
celular1.comprarCredito(100);

console.log(celular2);
celular2.tirarFoto();
celular2.efetuarChamada();
celular2.comprarCredito(100);

//