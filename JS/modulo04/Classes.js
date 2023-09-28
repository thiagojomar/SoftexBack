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
