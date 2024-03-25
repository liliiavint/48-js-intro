class Preke {
    constructor(pavadinimas, kaina, kiekis){
        this.pavadinimas = pavadinimas,
        this.kaina = kaina,
        this.kiekis = kiekis

    }
    atnaujintiPrekiuKiekius(newkiekis){
        this.kiekis = newkiekis;
         return this.kiekis;
    }

    gautiInfo(){
        return `Pavadinimas: ${this.pavadinimas}, kaina: ${this.kaina}, kiekis: ${this.kiekis}`;
    }
}   

