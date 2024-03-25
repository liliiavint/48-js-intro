class Darbuotojas {
    constructor(vardas, pavarde, pareigos, atlyginimas){
        this.vardas = vardas;
        this.pavarde = pavarde;
        this.pareigos = pareigos;
        this.atlyginimas = atlyginimas;
    }

    padidinti(kiekis) {
        this.atlyginimas += kiekis
        }

    sumazinti(kiekis) {
        this.atlyginimas -= kiekis
        }
    

    getPerson() {
        return `vardas ${this.vardas}, pavarde: ${this.pavarde}, 
                pareigos: ${this.pareigos}, atlyginimas${this.atlyginimas}`
        } 
}

const person = new Darbuotojas('Asta', 'Daviciute', 'vadove', 3000)

console.log(person.getPerson())
person.padidinti(500)
console.log(person.getPerson())
person.sumazinti(1000)
console.log(person.getPerson())


const darbuotojas = [
    {
        vardas: 'Asta',
        pavarde: 'Daviciute',
        pareigos: 'vadove',
        atlyginimas: 3000,
    },
    {
        vardas: 'Vilma',
        pavarde:'Ilinaite',
        pareigos: 'virėjas',
        atlyginimas: 2500,
    },
    {
        vardas: 'Rima',
        pavarde: 'Milinai',
        pareigos: 'indoploveja',
        atlyginimas: 2000,
    },
]
