class Knyga{
    constructor(name, author, price) {
        this.name = name; 
        this.author = author;
        this.price = price;
      
    }
}

class Knygyna {
    constructor() {
        this.knygyna = [ ];
    }

    knygaPapildyti(name, author, price) {
        this.knygyna.push(new Knyga(name, author, price));

    }

    knygaPasalinti(name){
        this.knygyna = this.knygyna.filter(book=>book.name !== name)
    }

    gautiKnygas(){
        return this.knygyna;
    }
}
const bookstore = new Knygyna ();

bookstore.knygaPapildyti('Dievų miškas', 'Balys Sruoga', 20)
bookstore.knygaPapildyti('Žemės stulpai', 'Ken Follett', 30)
bookstore.knygaPapildyti('Blogis yra laikinas', 'Leonidas Donskis', 40)

console.log("Visos knygos knygyne:", bookstore.gautiKnygas());

bookstore.knygaPasalinti('Žemės stulpai');

console.log("Ištrynus knygą 'Žemės stulpai':", bookstore.gautiKnygas());
    