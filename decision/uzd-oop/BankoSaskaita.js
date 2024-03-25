class BankoSaskaita{
    constructor(numeris, lesas, tipas){
       this.numeris = numeris,
       this.lesas = lesas, 
       this.tipas = tipas
    }
}
class Procesorius {
    constructor(gamintoja, modelis, specifikacijas){
        this.gamintoja = gamintoja,
        this.modelis = modelis,
        this.specifikacijas = specifikacijas 
    }
}
class Vaizdoplokste {
    constructor(gamintoja, modelis, specifikacijas){
        this.gamintoja = gamintoja,
        this.modelis = modelis,
        this.specifikacijas = specifikacijas 
    }
}
class Atmintis {
    constructor(gamintoja, modelis, specifikacijas){
        this.gamintoja = gamintoja,
        this.modelis = modelis,
        this.specifikacijas = specifikacijas 
    }
}

class  Personazas{
    constructor(sveikata, ginklai){
        this.sveikata = sveikata,
        this.ginklai = ginklai
    }
}




class Priesas{
    constructor(sveikata, ginklai){
        this.sveikata = sveikata,
        this.ginklai = ginklai
    }
}

class Masina{
    constructor(greitis, sanaudos, busena){
        this.greitis = greitis;
        this.sanaudos = sanaudos;
        this.busena = false;
        
    }



    engineStart() {
        if (this.busena) {
            return 'Variklis pradeda veikti dabar!';
        }

        this.busena = true;
        return 'Ijungiau varykli ';
    }
}