class Meniu {
    constructor() {
        this.dishes = [];
        this.drinkes = [];
    }

    addDish(name, price) {
        this.dishes.push(new Patiekalas(name, price));
    }

    addDrink(name, price) {
        this.drinkes.push(new Gerimas(name, price));
    }
}

class Patiekalas {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Gerimas {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}


const kavines = new Meniu();

kavines.addDish("Cepelinas", 8.5);
kavines.addDish("Tuna salotos", 10.0);

kavines.addDrink("Cola", 2.5);
kavines.addDrink("Arbata", 1.8);

console.log(kavines);