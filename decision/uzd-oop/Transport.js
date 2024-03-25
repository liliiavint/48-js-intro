class Automobilis{
    constructor(marke, modelis, variklio){
        this.marke = marke;
        this.modelis = modelis;
        this.variklio = variklio;
        
    }

    getList() {
        return `Marke: ${this.marke}, modelis: ${this.modelis}, variklio galia: ${this.variklio} arklio galia.`

        }
        
    }

class Motocyklas{
    constructor(marke, modelis, variklio){
            this.marke = marke;
            this.modelis = modelis;
            this.variklio = variklio;
            
    }

    getList() {
            return `Marke: ${this.marke}, modelis: ${this.modelis}, variklio galia: ${this.variklio} arklio galia.`
    
            }
            
}

const masyna1 = new Automobilis('Daewo', 'Matiz', 1);
const masyna2 = new Automobilis('Jeep', 'Wrangler', 3.6)
const masyna3 = new Automobilis('Toyota', 'Yaris', 1.5)

console.log(masyna1.getList())
console.log(masyna2.getList())
console.log(masyna3.getList())   

const bike1 = new Motocyklas('Honda', 'Shadow', 0.75);
const bike2 = new Motocyklas('Yamaha', 'Drag Star', 0.4)
const bike3 = new Motocyklas('Suzuki', 'van van', 0.125)

console.log(bike1.getList())
console.log(bike2.getList())
console.log(bike3.getList())