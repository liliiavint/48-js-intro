class Creditcart {
    constructor(numeris, kodas, data, balance){
        this.numeris = numeris, 
        this.kodas = kodas, 
        this.data =  new Date(data) 
        this.balance = balance,
        this.limitas = 500
        
        
    }

    patikrintiKortelesGaliojima() {
           
        if(this.data < new Date()){
          return 'Kortelė negalioja.'
        }else{
           return 'Kortelė galioja.'
        }
    }
   
    atliktiMokejimus(mokejimas) {
        if(mokejimas > this.balance || mokejimas > this.limitas){
            return 'mokėjimas neleidžiamas'
        }else{
           return 'Mokėjimas leidžiamas.'
        }
    }

    patikrintiKodas(kodas) {
           
        if(this.kodas !== +kodas){
           return 'Neteisingas kodas.'
        }else{
           return 'Tęsiame operaciją.'
        }
    }
   
}

const card = new Creditcart('9999 8888 7777 6666', 3333, '31-12-2024', 5000)

console.log(card.patikrintiKortelesGaliojima())
console.log(card.patikrintiKodas(3333))
console.log(card.atliktiMokejimus(8000))