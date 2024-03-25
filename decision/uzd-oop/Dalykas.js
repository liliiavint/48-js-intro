class Dalykas {
    constructor(name, kiekis){
        this.kiekis = kiekis, 
        this.name = name     
    }

    papildyti(amount) {
        this.kiekis += amount
        }
    
    imti(amount) {
        if(amount < this.kiekis){
        this.kiekis -= amount
        }else{
        console.log('Nepakankamas kiekis pašalinti');
        }
        }
    

}


const newDal = new Dalykas('morka', 100)

console.log(newDal)
newDal.papildyti(50)
console.log(newDal)
newDal.imti(120)
console.log( newDal)

const newDal2 = new Dalykas('pastarnokas', 200)


console.log( newDal2)
newDal2.papildyti(50)
console.log(newDal2)
newDal2.imti(320)
